# Rebuilding Sales Operations at a 100-City SMB
### The Quote Calculator: an AI-assisted pricing & dispatch platform that cut sales response 10x — *currently in active development*

**Author:** Joshua Zimdars · Business Systems Specialist & EA to the CEO/CFO, Golden Limousine International  
**Status:** ⚒️ **In active development** · Already in daily use by sales and dispatch  
**Stack:** Vanilla JS (ES modules), Node.js proxy, Azure AI Inference (Kimi K2), Azure Maps, QuoteBot API, Samsara API, Playwright

> **Note:** This is a living system. Features ship weekly. Metrics below reflect the current state — they will move as new pricing categories, integrations, and AI capabilities come online.

---

## TL;DR
Golden Limousine quoted ground-transportation jobs by hand from a static rate card in Excel. Sales response averaged 20–34 minutes per quote. I'm designing and shipping the **Quote Calculator**, a production platform that AI-parses a customer email, prices the trip across 14 trip types and 14 vehicle classes against a demand-aware rate card, validates with the dispatch system, and books the job. Median quote time is now under 3 minutes; the platform is the daily tool for sales and dispatch.

---

## The Problem

Three things were true at once:
1. **Sales was a bottleneck.** Median time-to-quote: 20–34 minutes per request, in a category where customers are shopping three vendors at once.
2. **Pricing was inconsistent across reps.** Same trip, different price.
3. **The highest-revenue category — multi-day charter — was priced on intuition** with no DOT compliance check, no demand model, no margin discipline.

## The Approach

Three sequential bets:

**Bet 1 — Centralize pricing logic before automating anything.** `pricing.js` is a pure function library with zero DOM access; `config.js` is the single source of truth for every rate, surcharge, and contract rule. If the math was wrong, every downstream feature would be wrong.

**Bet 2 — Make the boring 80% disappear.** Most quotes are airport transfers, P2P, or hourly charter. The UI makes those 30 seconds of typing. Azure Maps geocodes addresses; Samsara surfaces live fleet availability; a Node proxy keeps every credential server-side.

**Bet 3 — Earn the right to do the hard parts.** Only after daily adoption did I add (a) the AI email parser (Kimi K2 via Azure AI Inference) that turns a customer email into a pre-filled quote, and (b) the OTR cost-plus engine with DOT Hours-of-Service compliance.

## The System (current)

```
Customer email ─► AI parser (Kimi K2) ─► Pre-filled quote form
                                                  │
                                                  ▼
                  Pricing engine (14 trip types × 14 vehicles)
                  │       │       │
                  ▼       ▼       ▼
           Azure Maps  Samsara  Demand calendar
                                                  │
                                                  ▼
                          QuoteBot validate → send → book to dispatch
```

Notable design choices: no build step, vanilla ES modules, single-file Node proxy, demand calendar as a config file, full Playwright regression suite, rate-limit-aware on-disk catalog caching.

## What I Got Wrong (so far)

- **Shipped the AI parser before instrumenting it.** Lost a month before I added field-level logging and discovered the parser was reliably wrong on multi-leg event itineraries. *Fixed with a second specialized prompt.*
- **Underestimated the change-management curve.** Two senior dispatchers preferred the old workflow for six weeks. Sitting next to them at the dispatch desk fixed it — the biggest single adoption lift came from moving one button.
- **Didn't version `config.js` from day one.** Now every config change is committed; we can replay any quote against the rate card that was live the day it was given.

## Results (current state)

| Metric | Before | Now |
|---|---|---|
| Median time-to-quote | 20–34 min | **2–3 min** |
| Pricing variance across reps | Material | **Zero** |
| OTR quotes with structured cost basis | 0% | **100%** |
| Hours saved annually (estimated) | — | **~1,800+** |

## What's Next (the in-development part)

- **Customer self-service quoting site** sitting on top of the same pricing engine.
- **Affiliate network pricing** — partner operators booking jobs against our rates.
- **Multi-currency** for international charter requests.
- **AI-powered auto-quote** that returns a preliminary quote inside an email reply within seconds of inquiry.
- **Mobile PWA** for sales reps in the field.

The 10-phase rollout plan is documented and tracked.

## Why this matters for GCS

This is a small-business version of what GCS does at Google scale: take a fragmented sales process, encode pricing and product logic into a system, instrument it, and use the data to advise the business. The skills are the same — diagnose the real bottleneck, sequence the work, manage change, write the executive narrative. The only thing that changes at Google is the zeros.