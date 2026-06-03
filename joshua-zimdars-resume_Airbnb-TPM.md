# Joshua Zimdars
**Business Systems Specialist | Workflow Automation & Process Improvement**
Ann Arbor, MI · 734-730-9150 · jzimdars@umich.edu
[linkedin.com/in/joshua-zimdars-1321a624b](https://linkedin.com/in/joshua-zimdars-1321a624b) · [jzimdars-rtg.github.io/portfolio](https://jzimdars-rtg.github.io/portfolio) · [github.com/jzimdars-RTG](https://github.com/jzimdars-RTG)

---

## Summary

Technical systems professional with 18 months of hands-on experience decomposing complex operational workflows, implementing tooling improvements, and driving measurable business outcomes. Sole engineer embedded in a live production environment — owning end-to-end system design, stakeholder requirements gathering, and cross-functional delivery. Proven track record automating high-friction workflows, building observability into production systems, and translating technical architecture into operational enablement for non-technical teams. Champion of data-driven decision-making and continuous improvement, with a bias toward rapid prototyping, measurable results, and durable process design.

---

## Technical Skills

**Process & workflow design** — end-to-end business process decomposition, logical system design diagrams, workflow automation, requirements gathering from operations stakeholders
**Languages & scripting** — JavaScript (Node.js, React 19), Python (LangGraph, pandas), C# / .NET 8, PowerShell, SQL
**Cloud & infrastructure** — Azure (App Service, Functions, Static Web Apps, SQL, Maps, AI Foundry, Key Vault, managed identity), Google Cloud (Vertex AI)
**AI & agentic systems** — LLM fine-tuning (Azure AI Foundry), multi-provider LLM routing & fallback chains, RAG pipeline design, LangGraph.js + Python, ReAct, human-in-the-loop workflows
**Integrations & APIs** — REST APIs, Socket.io, Freshdesk (ticketing automation), Samsara (fleet telematics), .NET 8 / EF Core
**Observability & QA** — per-call token/cost/latency (p50/p95) tracing via JSONL + live overlay; 15-spec Playwright regression suite; snapshot-regression golden harness; JAMF MDM
**Project delivery** — cross-functional stakeholder management, iterative delivery (Agile-aligned), PowerShell CI/CD, requirement-to-production ownership
**Certifications** — MaintainX Administrator Foundations (2025) · Deloitte Future of Work Institute (2023)

---

## Experience

### Golden Limousine International — Ann Arbor, MI
**Business Systems Specialist** · *Nov 2024 – Present*

Sole engineer embedded in a 35-year-old, 100-market ground transportation SMB. Responsible for identifying high-friction operational workflows, leading requirements gathering with business stakeholders, designing logical process and system architectures, and delivering production tooling that drives measurable efficiency gains across dispatch, sales, compliance, and IT operations.

**Workflow analysis, process design & operational improvement**
- Facilitated **structured discovery sessions** with sales, dispatch, compliance, and executive stakeholders to decompose existing workflows, identify inefficiencies, and define measurable success criteria — translating operational pain points into actionable technical requirements for cross-functional delivery.
- Drove **rapid proof-of-value cycles**: prototyped and demoed solutions against defined success criteria before full builds, securing organizational buy-in through working system walkthroughs — an iterative, Agile-aligned delivery approach.
- Delivered **hands-on adoption sessions** for the Quote Calculator with sales and dispatch teams, translating a complex agentic AI system into daily operational use — moving teams off legacy spreadsheet workflows within two weeks.
- Shipped **10+ internal applications collectively saving 2,800+ hours/year**, each scoped through requirements gathering, process design, and measured post-launch against defined performance baselines.

**System design, tooling implementation & cross-functional delivery**
- Architected and shipped a **production agentic LLM workflow** (Quote Calculator) — a LangGraph multi-graph system with a logical process interaction model spanning email parsing, pricing calculation, telematics integration, and human-approval gates; in active daily use by sales and dispatch.
- Designed a **multi-provider LLM fallback chain** (fine-tuned Foundry → OpenAI → Kimi K2.6) with runtime-switchable backends and health probes — a reference architecture for system reliability and scalability.
- Re-platformed the rate card into a **.NET 8 / EF Core / Azure SQL pricing API** (9 controllers, 22 entities), replacing a fragile spreadsheet system with a maintainable, auditable REST service aligned to multi-year platform strategy.
- Built a **real-time shuttle-tracking PWA** for U-M Hospital *(5,000+ monthly riders)* — cut status inquiries **40%** and freed **1,095 dispatch hours/year**.
- Integrated **Freshdesk ticketing automation** for the Tigers Game-Day Platform, creating a fully auditable record of every customer booking request and removing manual dispatch overhead.

**Observability, quality assurance & data-driven performance management**
- Implemented **per-call token/cost/latency tracing** (p50/p95 via JSONL + live overlay) — giving stakeholders full visibility into AI operational costs and SLA performance, enabling data-driven platform decisions.
- Stood up a **15-spec Playwright eval + snapshot-regression suite** ("golden quotes" harness) — a repeatable QA process raising quote accuracy from ~75% to 90%+ and providing a proof-of-quality artifact for business stakeholders.
- Built a **DOT Hours-of-Service compliance check** into the OTR pricing engine — automated regulatory enforcement embedded directly in a production workflow.

**Platform security, compliance & IT operations**
- Hardened the public-facing booking endpoint with **Cloudflare Turnstile, rate limiting, CORS, and security headers** — layered controls aligned to zero-trust principles.
- Deployed secrets management via **Azure Key Vault + managed identity**, eliminating credential exposure across all production services.
- Standardized **60+ endpoints under JAMF MDM**, reducing IT tickets **30%** and enforcing consistent device security policy at scale.
- Built **PowerShell CI/CD on Azure**, cutting deployment time **70%** and enabling consistent, repeatable releases across all production services.

---

## Education

**University of Michigan**, Ann Arbor, MI — **B.A., Sociology of Health and Medicine** · May 2024
*Equivalent practical experience in cloud architecture, API integrations, workflow automation, AI/ML systems engineering, and full-cycle technical solutioning — acquired entirely through production work.*

---

## Selected Projects · [jzimdars-rtg.github.io/portfolio](https://jzimdars-rtg.github.io/portfolio)

- **Quote Calculator** *(production)* — end-to-end agentic workflow: requirements → system design → implementation → stakeholder adoption; LangGraph, Azure AI Foundry fine-tuned gpt-4.1-mini, multi-provider fallback, Samsara telematics, 15-spec Playwright eval harness.
- **Tigers Game-Day Platform** *(production)* — booking funnel + RAG research assistant; Freshdesk ticketing orchestration, Azure Foundry RAG, Key Vault + managed identity; full audit trail on every transaction.
- **GenAI Agent Toolkit** — open-source vendor-agnostic LangGraph core (JS + Python); multi-provider routing, self-reflection, RAG, ReAct, hierarchical delegation, human-in-the-loop. [github.com/jzimdars-RTG/JZ-GenAI-Agent-Toolkit](https://github.com/jzimdars-RTG/JZ-GenAI-Agent-Toolkit)
- **Pricing API** — .NET 8 / EF Core / Azure SQL; 9 controllers, 22 entities; replaced legacy spreadsheet with auditable REST service aligned to multi-year platform strategy.
- **Shuttle Tracking PWA** — real-time map for 5K+ monthly U-M Hospital riders; cut inquiries 40%, freed 1,095 dispatch hours/year.
