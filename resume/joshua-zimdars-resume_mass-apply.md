# Joshua Zimdars
**AI Engineer · Solutions Engineer · ML Engineer**

Ann Arbor, MI (open to remote) · 734-730-9150 · jzimdars@umich.edu  
[linkedin.com/in/joshua-zimdars-1321a624b](https://linkedin.com/in/joshua-zimdars-1321a624b) · [jzimdars-rtg.github.io/portfolio](https://jzimdars-rtg.github.io/portfolio) · [github.com/jzimdars-RTG](https://github.com/jzimdars-RTG)

---

## Summary

Production AI engineer with 18 months of end-to-end ownership building and deploying customer-facing LLM systems. My agentic quoting system is mission-critical infrastructure that transportation customers rely on daily — it is not a prototype. I fine-tuned a production LLM on Azure AI Foundry, built multi-agent LangGraph orchestration graphs, designed RAG pipelines on Vertex AI, and shipped an LLM eval + snapshot-regression suite. I own the full lifecycle: problem discovery, architecture, code, evals, deployment, adoption, and outcome measurement. I've delivered 10+ production applications saving 2,800+ hours/year. Self-taught in production — I'm not entering this field, I'm already shipping in it.

---

## Technical Skills

**Agentic AI & LLM Systems** — Multi-agent orchestration (LangGraph, LangGraph.js), ReAct, self-reflection, hierarchical delegation, human-in-the-loop, LLM fine-tuning (dataset harvesting, correction datasets, Azure AI Foundry), multi-provider LLM routing & fallback chains, prompt engineering, RAG (embedding retrieval + keyword fallback), LLM eval & snapshot-regression pipelines, MCP patterns, agentic workflow design

**Languages** — Python (LangGraph, pandas), JavaScript / TypeScript (Node.js, React 19), C# / .NET 8, PowerShell, SQL

**AI Platforms & Models** — Azure AI Foundry (fine-tuned gpt-4.1-mini), OpenAI API (GPT-4o, GPT-4.1-mini), Anthropic Claude, Vertex AI (Gemini 2.0 Flash, text-embedding-004), Azure AI Inference (Kimi K2.6), LangChain, LangGraph

**MLOps & Observability** — LLM eval suites, snapshot-regression testing, per-call token/cost/latency tracing (p50/p95) via JSONL + live overlay, Playwright test automation, CI/CD pipeline development, model versioning, A/B backend comparison

**Cloud & Infrastructure** — Azure (App Service, Functions, Static Web Apps, Azure SQL, AI Foundry, Key Vault, Managed Identity, Azure Maps, Cloudflare Turnstile), Google Cloud Platform (Vertex AI), REST APIs, rate limiting, CORS, security headers

**Engineering** — .NET 8 / EF Core, Socket.io (real-time), React 19, PowerShell CI/CD, JAMF MDM, Samsara telematics API, Freshdesk API, QuoteBot, Azure Maps integration

**Certifications** — MaintainX Administrator Foundations (2025) · Deloitte Future of Work Institute (2023)

---

## Experience

### Golden Limousine International — Ann Arbor, MI
**AI / Business Systems Engineer** · *November 2024 – Present*

Sole engineer at a 35-year-old, 100-market ground transportation SMB operating in a live production environment. Identify broken workflows, architect solutions, ship production code, build evals, drive user adoption, and measure business outcomes — entirely end-to-end, without a team.

**Customer-Facing Production AI Systems**
- Designed and shipped the **Quote Calculator** — a customer-facing, mission-critical agentic LLM system that parses inbound customer emails and routes them through a **LangGraph multi-agent graph** (14 trip types × 14 vehicle classes) to produce structured, accurate transportation quotes. Customers submit requests that flow through this system in real time. **In daily production use by sales and dispatch teams.**
- Built an **end-to-end LLM fine-tuning pipeline** from scratch: harvested production quotes into training datasets, generated correction datasets from eval failures, submitted and evaluated fine-tune jobs on **Azure AI Foundry**, and deployed a fine-tuned **gpt-4.1-mini** parser to production.
- Engineered a **multi-provider LLM fallback chain** — fine-tuned Foundry model (gpt-4.1-mini, ~1–2s) → OpenAI → Kimi K2.6 — with runtime-switchable backends, A/B-comparable provider outputs, and a health probe reporting which model is active in production.
- Implemented **self-reflection and human-in-the-loop** directly in the live agent graph: failed parses auto-route through a correction prompt (max 2 retries) before surfacing a human-approval gate; node-by-node progress streams over SSE to the UI.
- Built an **LLM eval + snapshot-regression suite** (15 Playwright specs): a "golden quotes" harness locking pricing outputs against known-good fixtures, plus a QuoteBot replay harness — raised multi-leg itinerary accuracy to production threshold.
- Led hands-on adoption sessions with non-technical sales and dispatch teams; moved users from legacy spreadsheet workflows to daily tool use **within two weeks**.
- Built and maintain **`jz-genai-agent-toolkit`** — open-source, vendor-agnostic agentic framework (LangGraph.js + Python); multi-provider routing, ReAct, self-reflection, hierarchical delegation, RAG (Vertex AI embeddings + cosine similarity), human-in-the-loop. [github.com/jzimdars-RTG/JZ-genai-](https://github.com/jzimdars-RTG/JZ-genai-)
- Shipped a **Detroit Tigers game-day booking + RAG research platform** (production): booking funnel orchestrating the full QuoteBot lifecycle with automated Freshdesk ticketing, plus a **RAG research assistant** over a custom knowledge base via Azure AI Foundry.

**Platform Engineering & Integrations**
- Built a 14-model pricing engine with an **OTR cost-plus module**, **DOT Hours-of-Service compliance check**, and a dynamic demand calendar for 2026 multipliers.
- Integrated **Samsara fleet telematics API** for real-time vehicle status; hardened the public booking endpoint with Cloudflare Turnstile, rate limiting, CORS, and security headers deployed on **Azure App Service + Static Web App** with secrets in Key Vault via managed identity.
- Re-platformed the legacy rate card into a **.NET 8 / EF Core / Azure SQL Pricing API** (9 controllers, 22 entities, full REST surface).
- Built a **real-time shuttle-tracking PWA** for U-M Hospital *(5,000+ monthly riders)* — reduced inbound status calls **40%** and freed **1,095 dispatch hours/year**.
- Standardized 60+ employee devices under JAMF MDM (reduced IT tickets **30%**); deployed PowerShell CI/CD on Azure (cut deployment time **70%**).
- Shipped **10+ internal production applications** collectively saving **2,800+ hours/year** in manual work.

---

## Education

**University of Michigan** — Ann Arbor, MI  
**B.A., Sociology of Health and Medicine** · May 2024  
*All AI/ML, cloud, and software engineering skills self-acquired through 18 months of production work. Equivalent practical experience in LLM fine-tuning, agentic orchestration, MLOps, and cloud deployment.*

---

## Selected Projects · [jzimdars-rtg.github.io/portfolio](https://jzimdars-rtg.github.io/portfolio)

**GenAI Agent Toolkit** *(Open Source)*  
Vendor-agnostic agentic core in LangGraph.js + Python. Features: multi-provider LLM routing & fallback, ReAct agent loop, self-reflection, hierarchical agent delegation, RAG (Vertex AI text-embedding-004 + cosine similarity), human-in-the-loop approval gates.  
→ [github.com/jzimdars-RTG/JZ-genai-](https://github.com/jzimdars-RTG/JZ-genai-)

**Quote Calculator** *(Production — customer-facing)*  
Fine-tuned gpt-4.1-mini on Azure AI Foundry; multi-provider fallback chain; LangGraph multi-agent orchestration graph; Samsara telematics integration; OTR pricing engine with DOT HOS compliance; 15-spec Playwright eval + golden-quotes regression harness.

**Tigers Game-Day Platform** *(Production)*  
Customer booking funnel with RAG research assistant. QuoteBot + Freshdesk API orchestration; Azure AI Foundry RAG over custom knowledge base; deployed on Azure App Service + Key Vault + managed identity.

**Pricing API** *(Production)*  
.NET 8 / EF Core / Azure SQL REST API; 9 controllers, 22 entities; 14 pricing models including OTR cost-plus, DOT HOS, and dynamic demand multipliers.

**Shuttle Tracking PWA** *(Production — 5,000+ monthly users)*  
Real-time vehicle tracking map for U-M Hospital riders via Socket.io + Azure Maps + Samsara telematics. Reduced status inquiry calls 40%, freed 1,095 dispatch hours/year.
