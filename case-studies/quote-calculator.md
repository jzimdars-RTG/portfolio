# Rebuilding Sales Operations at a 100-City SMB
### The Quote Calculator: an AI-assisted pricing & dispatch platform that cut sales response 10x — *currently in active development*

**Author:** Joshua Zimdars · Business Systems Specialist & EA to the CEO/CFO, Golden Limousine International  
**Status:** ⚒️ **In active development** · Already in daily use by sales and dispatch  
**Stack:** Vanilla JS (ES modules), Node.js proxy, **Google Vertex AI (Gemini 2.0 Flash)** + Azure AI Inference (Kimi K2) — swappable backends, **LangGraph.js** (multi-agent graph with ReAct + self-reflection), **LLM-native observability** (tokens, cost, latency, JSONL tracing), Azure Maps, QuoteBot API, Samsara API, Playwright. Generic agentic core lives in <a href="https://github.com/jzimdars19/jz-genai-agent-toolkit">`jz-genai-agent-toolkit`</a>; this repo consumes it via git subtree.

> **Note:** This is a living system. Features ship weekly. Metrics below reflect the current state — they will move as new pricing categories, integrations, and AI capabilities come online.

---

## TL;DR
Pricing knowledge at Golden Limo was scattered across a dozen people, tribal memory, and spreadsheets no one fully owned. No two reservationists priced the same trip the same way. I interviewed every stakeholder, unified the logic, and built the company's first complete pricing model — starting in Excel to prove it worked, then shipping it as a production AI platform. The **Quote Calculator** AI-parses a customer email, prices any trip instantly across 14 trip types and 14 vehicle classes, validates with dispatch, and books the job. Median quote time: under 3 minutes, down from 20–34. Reservationists stopped doing pricing math and started focusing on the customer.

---

## The Problem

Four things were true at once:
1. **Pricing knowledge lived in people, not systems.** Every experienced reservationist had their own rules; every new hire was a liability.
2. **Sales was a bottleneck.** Median time-to-quote: 20–34 minutes per request, in a category where customers are shopping three vendors at once.
3. **Pricing was inconsistent across reps.** Same trip, different price.
4. **The highest-revenue category — multi-day charter — was priced on intuition** with no DOT compliance check, no demand model, no margin discipline.

## The Approach

Three sequential bets:

**Bet 1 — Centralize pricing logic before automating anything.** `pricing.js` is a pure function library with zero DOM access; `config.js` is the single source of truth for every rate, surcharge, and contract rule. If the math was wrong, every downstream feature would be wrong.

**Bet 2 — Make the boring 80% disappear.** Most quotes are airport transfers, P2P, or hourly charter. The UI makes those 30 seconds of typing. Azure Maps geocodes addresses; Samsara surfaces live fleet availability; a Node proxy keeps every credential server-side.

**Bet 3 — Earn the right to do the hard parts.** Only after daily adoption did I add (a) the AI email parser (Kimi K2 via Azure AI Inference) that turns a customer email into a pre-filled quote, and (b) the OTR cost-plus engine with DOT Hours-of-Service compliance.

## The System (current)

```mermaid
flowchart LR
    A[📧 Customer Email] --> B[AI Parser\nKimi K2]
    B --> C[Pre-filled Quote Form]
    C --> D[Pricing Engine\n14 trip types × 14 vehicles]
    D --> E[Azure Maps\nGeocode]
    D --> F[Samsara\nFleet Availability]
    D --> G[Demand Calendar]
    E & F & G --> H[QuoteBot\nValidate & Send]
    H --> I[✅ Booked to Dispatch]
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

## Why this matters for Generative AI Forward Deployed Engineer roles

This project maps to every responsibility in the Google Cloud GenAI FDE job description:

- **"Transition from rapid prototypes to production-grade agentic workflows (e.g., multi-agent systems, MCP servers)."** The Quote Calculator went from a Kimi-only single-shot parser to a full LangGraph state graph with ReAct retry, self-reflection, and a human-approval node — all running against live customer emails in daily production use.
- **"Architect the 'connective tissue' linking Google's AI products to customers' live infrastructure, including APIs, legacy data silos, and security perimeters."** Vertex AI Gemini → Node proxy → QuoteBot (legacy dispatch API) → Samsara (fleet telematics) → Azure Maps. Credential rotation handled via per-request `.env` re-read; path-traversal-safe static layer; no API keys ever ship to the browser.
- **"Build high-performance evaluation pipelines and observability frameworks to ensure agentic systems meet requirements for accuracy, safety, and latency."** Playwright parser eval suite (12 scenarios × 14 trip types), synthetic batch validator (`fake-quotes-test.js`), and a JSONL telemetry pipeline capturing tokens, cost, latency, p50/p95, and error rate per backend and per operation. A live in-browser agent-trace overlay visualizes every node firing in real time.
- **"Identify recurring field patterns and friction points across Google's AI stack, converting them into reusable modules."** The generic agentic core was extracted into [`jz-genai-agent-toolkit`](https://github.com/jzimdars19/jz-genai-agent-toolkit) as a portable, vendor-agnostic library — exactly the "field insight → reusable module → formal product feature request" loop the JD describes.
- **"Collaborate with customer engineering teams to instill development best practices."** Six weeks of sitting next to dispatchers until they preferred the new workflow. Versioned `config.js` so any historical quote can be replayed against the rate card that was live the day it was given. Documented 10-phase roadmap, gated rollout.
