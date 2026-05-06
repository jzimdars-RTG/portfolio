# Real-Time Vehicle Detailing for the Garage Floor
### React 19 + Socket.io workflow that gave dispatch live visibility into vehicle readiness

**Author:** Joshua Zimdars  
**Status:** Production ✅  
**Stack:** Node.js + Express, Socket.io, React 19, PWA, Azure (deployment-ready)

---

## TL;DR
Vehicle detailing was a black box: dispatch had no visibility into which vehicles were clean and ready until a chauffeur radioed in. I built a real-time tablet app for the garage floor with a 14-point cleaning checklist, automatic time-tracking, manager review, and live updates across every device. Dispatch can now see vehicle readiness in real time and prioritize accordingly.

## The Problem
The detailing bay was the operational blind spot of the company. Three groups had three different problems:
- **Detailers** had no clear queue or accountability.
- **Managers** had no way to verify quality without walking the bay.
- **Dispatch** had no visibility into when a vehicle would actually be ready.

## The Approach
- **One screen per role.** Detailers see *their* shift's queue; managers see review queues; dispatch sees the prioritization view. Same data, three lenses.
- **Real-time by default.** Socket.io rooms keyed by shift mean every device updates instantly when a status changes. No refresh, no polling lag.
- **Structured QA, not free-form notes.** A 14-point checklist (6 essential + 8 detail tasks) means *quality is verifiable*, not just claimed.
- **Tablet-first UI.** 44px touch targets, high-contrast for garage lighting, PWA so it works offline if Wi-Fi drops.

## What I'd Do Differently
- Started with JSON file storage; should have gone to Cosmos DB on day one. Migration is in progress.
- The manager review workflow shipped before I'd validated it with an actual manager. They asked for two changes within the first day.

## Result
Dispatch can now answer "is the Sprinter ready?" without walking to the bay. Manager review caught quality issues before vehicles went out. The system is the daily tool for the garage floor.