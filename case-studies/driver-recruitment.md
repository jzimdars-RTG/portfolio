# Building the Attribution Stack Our Recruiter Needed
### One-day build that saved the company an outside-vendor bill — UTM attribution, GA4 events, and one campaign URL per channel per position

**Author:** Joshua Zimdars · Business Systems Specialist & EA to the CEO/CFO, Golden Limousine International  
**Status:** Live · charterbusdrivers.com, busdriveropportunities.com  
**Stack:** Vanilla JS/CSS, GA4, UTM tracking, GitHub Pages

---

## TL;DR
The team needed a professional CDL driver recruitment site and attribution stack — the kind of thing a marketing agency would charge $8–15K to build. I shipped it in a day: two domains, four position types, two markets, full UTM-based source attribution, GA4 event tracking, and per-channel campaign URLs for Indeed, ZipRecruiter, LinkedIn, and Facebook. The recruiter and marketing person got the tool they needed. Leadership got cost-per-applicant visibility by source for the first time. Zero vendor cost.

---

## The Problem

Ground transportation has a structural hiring problem: every regional operator is fishing in the same shallow pool of CDL holders, and the major job boards (Indeed and ZipRecruiter) get the lion's share of applications but also charge per click. Without attribution, you can't tell which channel is producing actual hires versus tire-kickers. Golden Limo had been spending across all the major boards and *guessing.*

Constraints:
- No marketing budget worth naming.
- No recruiter.
- Four position types, two markets, multiple shift profiles.
- Whatever I built had to load instantly on a phone — most CDL applicants apply from a parking lot on a break.

## The Approach

Three bets:

### Bet 1 — Instrument before spending another dollar
The cheap intervention was attribution, not creative. I built a single landing page, then layered on a complete UTM taxonomy (`utm_source`, `utm_medium`, `utm_campaign`, plus `position` and `keyword` for finer-grained routing). Every channel got its own URL. Every campaign got its own URL.

```
charterbusdrivers.com?source=indeed&campaign=q1-2025&position=charter
charterbusdrivers.com?source=ziprecruiter&campaign=q1-2025&position=cdl
busdriveropportunities.com?source=linkedin&campaign=professional&position=executive
busdriveropportunities.com?source=facebook&campaign=social-q1&position=shuttle
```

The page captures source on landing, persists it, and forwards it through to the apply CTA so leadership can attribute *applications* (not just clicks) back to the channel that produced them.

### Bet 2 — GA4 event taxonomy that maps to the funnel
I defined the event schema before writing any tracking code:
- `page_view` (with source attribution)
- `scroll_depth` at 25 / 50 / 75 / 100%
- `apply_click` per position
- `phone_click`
- `benefit_card_interaction`
- `position_card_view`
- `time_on_page`

That gives me a five-step funnel in GA4 (visit → scroll → engage → apply-click → phone-click) and a clean answer to "what's our drop-off?"

### Bet 3 — Two domains, one playbook
Separate `charterbusdrivers.com` and `busdriveropportunities.com` lets us A/B test domain-level positioning (charter-bus vs. broader bus-driver framing) without changing the underlying page. Same site, two front doors, attribution disambiguated.

## What I'd Do Differently

- **I'd have set up Google Ads from day one.** I built for organic + job-board paid traffic; we left a paid-search opportunity on the table for the first quarter. Easy fix.
- **The hero image bottleneck was real.** I built the page in a day; sourcing a non-branded motor-coach hero photo took a week. I should have shipped with a placeholder and iterated.
- **I should have tracked applicant→hire conversion, not just applicant volume.** The HR side of the funnel was opaque to my analytics. Fixing that next.

## Results

| Metric | Outcome |
|---|---|
| Cost-per-applicant visibility by channel | **0% → 100%** |
| Position types covered | 4 (Charter Bus, CDL Bus, PT Shuttle, Executive Black Car) |
| Markets | Detroit + Ann Arbor |
| Mobile load | sub-second (vanilla JS, no framework) |
| Channels with attribution | Indeed, ZipRecruiter, LinkedIn, Facebook, organic |

## Why this matters for GCS

This is the exact problem GCS Account Strategists solve for SMBs every day: an owner who knows they have a hiring/sales problem, who's spending money across channels, and who can't tell which channel is working. The answer is always the same — instrument the funnel, attribute the conversion, double down on what's working. I've now lived through that loop on the SMB side. I know what's hard about it (getting the *business* to trust the numbers, not the technology of capturing them).