# Joshua Zimdars
**Commercial Solutions Engineer**
Ann Arbor, MI · 734-730-9150 · jzimdars@umich.edu
[linkedin.com/in/joshua-zimdars-1321a624b](https://linkedin.com/in/joshua-zimdars-1321a624b) · [jzimdars-rtg.github.io/portfolio](https://jzimdars-rtg.github.io/portfolio) · [github.com/jzimdars-RTG](https://github.com/jzimdars-RTG)

---

## Summary

Technical solutions engineer who bridges complex systems and business outcomes — translating deep platform expertise into customer-facing value. For 18 months I've been the sole engineer embedded in a live production environment, owning discovery, architecture, implementation, and adoption end-to-end. I've led hands-on technical evaluations with non-technical and technical stakeholders alike, earned buy-in for new tooling by proving ROI before purchase, and driven 2,800+ hours/year in documented operational savings. I'm fluent across Azure, GCP, REST APIs, and cloud security hardening — and I build with AI to amplify every phase of work.

---

## Technical Skills

**Cloud platforms** — Azure (App Service, Functions, Static Web Apps, SQL, Maps, AI Foundry, Key Vault, managed identity), Google Cloud (Vertex AI); familiar with AWS architecture patterns
**Security & compliance** — endpoint security hardening (Cloudflare Turnstile, rate limiting, CORS, security headers), JAMF MDM device management, managed identity / least-privilege access, DOT regulatory compliance (HOS), Azure Key Vault secrets management
**Languages & scripting** — JavaScript (Node.js, React 19), Python (LangGraph, pandas), C# / .NET 8, PowerShell, SQL
**Integrations & APIs** — REST APIs, Socket.io, Freshdesk (ticketing automation), Samsara (fleet telematics), .NET 8 / EF Core, PowerShell CI/CD
**AI & agentic systems** — LLM fine-tuning (Azure AI Foundry), multi-provider LLM routing & fallback chains, RAG pipeline design, prompt engineering, LangGraph.js + Python, ReAct, human-in-the-loop workflows
**AI platforms & models** — Azure AI Foundry (fine-tuned gpt-4.1-mini), Vertex AI (Gemini 2.0 Flash, text-embedding-004), OpenAI, Claude, Kimi K2.6
**Observability & eval** — per-call token/cost/latency (p50/p95) tracing via JSONL + live overlay; 15-spec Playwright regression suite; snapshot-regression golden harness
**Certifications** — MaintainX Administrator Foundations (2025) · Deloitte Future of Work Institute (2023)

---

## Experience

### Golden Limousine International — Ann Arbor, MI
**Business Systems Specialist (Technical Solutions Engineer)** · *Nov 2024 – Present*

Sole engineer serving as the internal solutions consultant for a 35-year-old, 100-market ground transportation SMB. Responsible for full-cycle technical ownership: discovery with business stakeholders, solution design, proof-of-value, implementation, and post-launch adoption. Every project required earning trust with non-technical decision-makers by demonstrating measurable impact before committing to a build.

**Customer-facing discovery, evaluation & adoption**
- Led structured **technical discovery sessions** with sales, dispatch, and executive stakeholders to identify high-friction workflows, define success criteria, and align solutions to business priorities — mirroring the pre-sales SE motion.
- Drove **rapid proof-of-value cycles**: prototyped and demoed solutions to stakeholders before full builds, securing organizational buy-in through live walkthroughs of working systems against defined acceptance criteria.
- Delivered **hands-on adoption sessions** for the Quote Calculator with sales and dispatch teams, translating a complex agentic AI system into daily operational use — moving teams off legacy spreadsheets within two weeks.
- Served as the **primary technical advisor** for all platform and integration decisions, translating technical tradeoffs into plain-language business impact for non-technical leadership.

**Platform security & compliance hardening**
- Hardened the public-facing booking endpoint with **Cloudflare Turnstile, rate limiting, CORS, and security headers** — implementing layered controls aligned to zero-trust principles.
- Deployed secrets management via **Azure Key Vault + managed identity**, eliminating credential exposure across all production services.
- Standardized **60+ endpoints under JAMF MDM**, reducing IT tickets 30% and enforcing consistent device security policy.
- Built a **DOT Hours-of-Service compliance check** into the OTR pricing engine — automated regulatory enforcement embedded in a production workflow.
- Integrated **Freshdesk ticketing automation** for the Tigers Game-Day Platform, creating an auditable record of every customer booking request.

**Technical architecture & integrations**
- Architected and shipped a **production agentic LLM workflow** (Quote Calculator) — a LangGraph multi-graph system integrating Azure AI Foundry, OpenAI, Vertex AI, and Samsara telematics; in active daily use by sales and dispatch.
- Designed a **multi-provider LLM fallback chain** (fine-tuned Foundry → OpenAI → Kimi K2.6) with runtime-switchable backends, health probes, and A/B-comparable outputs — a reference architecture for resilient AI integrations.
- Re-platformed the rate card into a **.NET 8 / EF Core / Azure SQL pricing API** (9 controllers, 22 entities), replacing a fragile spreadsheet system with a maintainable, auditable REST service.
- Integrated **Samsara fleet telematics API** for real-time vehicle tracking, surfacing live status data within the booking and dispatch workflow.
- Built a **real-time shuttle-tracking PWA** for U-M Hospital *(5,000+ monthly riders)* — cut status inquiries **40%** and freed **1,095 dispatch hours/year**.
- Built PowerShell CI/CD on Azure, cutting deployment time **70%**; shipped 10+ internal applications collectively saving **2,800+ hours/year**.

**AI systems & observability**
- Built an **end-to-end LLM fine-tuning pipeline** on Azure AI Foundry: dataset harvesting from production, correction datasets from eval failures, fine-tune job submission and evaluation.
- Implemented **per-call token/cost/latency tracing** (p50/p95 via JSONL + live overlay) — giving stakeholders full visibility into AI operational costs and SLA performance.
- Stood up a **15-spec Playwright eval + snapshot-regression suite** ("golden quotes" harness) — raising quote accuracy from ~75% to 90%+ and providing a repeatable proof-of-quality artifact.
- Built and maintain **`jz-genai-agent-toolkit`** — an open-source vendor-agnostic agentic core (LangGraph.js + Python); multi-provider routing, ReAct, self-reflection, hierarchical delegation, RAG pipeline, human-in-the-loop.

---

## Education

**University of Michigan**, Ann Arbor, MI — **B.A., Sociology of Health and Medicine** · May 2024
*Equivalent practical experience in cloud architecture, API integrations, security hardening, AI/ML systems engineering, and full-cycle technical solutioning — acquired entirely through production work.*

---

## Selected Projects · [jzimdars-rtg.github.io/portfolio](https://jzimdars-rtg.github.io/portfolio)

- **Quote Calculator** *(production)* — agentic AI workflow in daily use by sales & dispatch; fine-tuned gpt-4.1-mini on Azure Foundry, multi-provider fallback chain, LangGraph graph, Samsara telematics, DOT HOS compliance, 15-spec Playwright eval + golden regression harness.
- **Tigers Game-Day Platform** *(production)* — booking funnel + RAG research assistant; Freshdesk ticketing orchestration, Azure Foundry RAG, Key Vault + managed identity; full audit trail on every transaction.
- **GenAI Agent Toolkit** — vendor-agnostic LangGraph core (JS + Python); multi-provider routing, self-reflection, RAG, ReAct, hierarchical delegation, human-in-the-loop. [github.com/jzimdars-RTG/JZ-GenAI-Agent-Toolkit](https://github.com/jzimdars-RTG/JZ-GenAI-Agent-Toolkit)
- **Pricing API** — .NET 8 / EF Core / Azure SQL; 9 controllers, 22 entities; replaced legacy spreadsheet with auditable REST service.
- **Shuttle Tracking PWA** — real-time map for 5K+ monthly U-M Hospital riders; cut inquiries 40%, freed 1,095 dispatch hours/year.
