# Joshua Zimdars
**AI / Solutions Engineer**
Ann Arbor, MI · 734-730-9150 · jzimdars@umich.edu  
[linkedin.com/in/joshua-zimdars-1321a624b](https://linkedin.com/in/joshua-zimdars-1321a624b) · [jzimdars-rtg.github.io/portfolio](https://jzimdars-rtg.github.io/portfolio) · [github.com/jzimdars-RTG](https://github.com/jzimdars-RTG)

---

## Summary

AI engineer who ships production LLM systems and drives them to daily adoption. For 18 months I've been the sole engineer embedded in a live production environment — owning the full lifecycle from broken workflow to shipped code, evals, and live use by real teams. I translate technical systems into business outcomes for non-technical stakeholders. I've fine-tuned and deployed a production parser model, built multi-agent LangGraph workflows, and shipped 10+ internal applications saving **2,800+ hours/year**. My degree is in Sociology; everything I know about AI engineering I built in production, with real users depending on the output. I'm not transitioning into this field — I'm already in it.

---

## Technical Skills

**AI & agentic systems** — LLM fine-tuning (dataset harvesting, correction datasets, job submission + eval on Azure AI Foundry), multi-provider LLM routing & fallback chains, prompt engineering, RAG (embedding retrieval + keyword fallback), multi-agent orchestration (ReAct, self-reflection, hierarchical delegation), human-in-the-loop, LLM eval & snapshot-regression pipelines, MCP patterns  
**Languages & frameworks** — JavaScript / TypeScript (Node.js, React 19, Next.js 16 App Router), Python (LangGraph, pandas), C# / .NET 8, PowerShell, SQL  
**AI platforms & models** — Azure AI Foundry (fine-tuned gpt-4.1-mini), Vertex AI (Gemini 2.0 Flash, text-embedding-004), Azure AI Inference (Kimi K2.6), Azure OpenAI, OpenAI, Claude  
**Frameworks & observability** — LangGraph.js, LangGraph (Python), langchain-google-vertexai; per-call token/cost/latency (p50/p95) tracing via JSONL + live overlay  
**Cloud & identity** — Azure (App Service, Functions, Static Web Apps, SQL, Maps, AI Foundry, Key Vault, managed identity), Microsoft Entra ID (RBAC, OAuth 2.0, Easy Auth), Google Cloud (Vertex AI)  
**Engineering & integrations** — REST APIs, Socket.io, .NET 8 / EF Core, React Hook Form + Zod, Tailwind CSS v4, Framer Motion, Playwright (eval + regression), PowerShell CI/CD, Cloudflare Turnstile, rate limiting / CORS / security headers; QuoteBot, Freshdesk, Samsara telematics, Azure Maps  
**Certifications** — MaintainX Administrator Foundations (2025) · Deloitte Future of Work Institute (2023)

---

## Experience

### Golden Limousine International — Ann Arbor, MI
**Business Systems Specialist** · *Nov 2024 – Present*

Sole engineer at a 35-year-old, 100-market ground transportation SMB. Identify high-friction workflows, prototype rapidly, and ship production systems to non-technical stakeholders — owning everything from problem discovery to code, evals, adoption, and business outcome measurement.

**Customer-facing products & pricing platform**
- Built a **customer-facing self-service booking web app** (3-step trip → vehicle → reserve flow) that instantly prices trips in-browser and captures leads, reusing the internal pricing engine as a single source of truth while hiding margin/cost internals from customers.
- Implemented a multi-date **"season" charter builder** that prices an entire schedule of trips (e.g., a sports team's away-game season) in one pass — auto-switching long hauls to per-mile road-trip rates and itemizing driver lodging & per-diem into one combined total.
- Extracted a shared, DOM-free **charter/OTR pricing module** (`charter-legs.js`) so the internal Event Builder and customer season builder produce identical quotes, eliminating rate-table drift between two surfaces.
- Added **long-haul point-to-point pricing** (per-mile past a mileage threshold) and automatic **toll estimation** by matching route text against known toll regions.
- Integrated **Freshdesk ticket creation** so every reservation generates a detailed internal pricing ticket for dispatch/billing, decoupled from the simplified customer-facing quote.
- Architected a **zero-build SPA + single-file Node.js proxy** that injects all third-party secrets server-side (no API keys shipped to the browser); authored an **Azure App Service deployment plan** gated behind **Microsoft Entra** invite-only auth.
- Built a **wedding-transportation booking web app in Next.js 16 (App Router) + React 19 + TypeScript**, replacing a legacy static HTML form with a guided 5-step flow (services → details → plan → contact → confirmation).
- Designed a deterministic, **AI-optional plan engine** that instantly generates a day-of transportation timeline and capacity-based vehicle recommendations, with graceful fallback so the experience never depends on the AI layer.
- Integrated an **AI concierge (Azure OpenAI)** that chats with customers and programmatically mutates the live booking (adds services, swaps vehicles, appends notes) through a typed action system; wired server-validated lead capture to Freshdesk + QuoteBot.

**AI systems, fine-tuning & agentic workflows**
- Designed and shipped the **Quote Calculator** *(in active daily use by sales and dispatch)* — a production agentic LLM workflow that parses inbound customer emails, routes across a **LangGraph multi-agent graph** (14 trip types × 14 vehicle classes), and outputs structured quotes, eliminating a manual, error-prone process.
- Built an **end-to-end LLM fine-tuning pipeline**: harvested production quotes into training data, generated correction datasets from eval failures, and submitted/evaluated fine-tune jobs on **Azure AI Foundry** — shipping a fine-tuned **gpt-4.1-mini** parser to production.
- Engineered a **multi-provider LLM fallback chain** — fine-tuned Foundry (gpt-4.1-mini, ~1–2s) → OpenAI → Kimi K2.6 — with runtime-switchable, A/B-comparable backends and a health probe reporting which provider is live.
- Stood up an **LLM eval + snapshot-regression suite** (15 Playwright specs) — a "golden quotes" harness locking pricing output against known-good fixtures plus a QuoteBot replay harness — raising multi-leg-itinerary accuracy to production threshold.
- Built and maintain **`jz-genai-agent-toolkit`** — an open-source vendor-agnostic agentic core (LangGraph.js + Python); multi-provider routing, ReAct, self-reflection, hierarchical delegation, RAG (Vertex AI embeddings + cosine similarity), human-in-the-loop. [github.com/jzimdars-RTG/JZ-genai-](https://github.com/jzimdars-RTG/JZ-genai-)

**Engineering & platform**
- Built a 14-model pricing engine including an **OTR cost-plus engine** with a **DOT Hours-of-Service compliance check** and a 2026 demand calendar driving dynamic multipliers.
- Integrated **Samsara fleet telematics** for real-time vehicle status, and hardened public endpoints (Cloudflare Turnstile, rate limiting, CORS, security headers) on **Azure App Service + Static Web App** with secrets in **Key Vault** via managed identity.
- Re-platformed the rate card into a **.NET 8 / EF Core / Azure SQL pricing API** (9 controllers, 22 entities).
- Built a **real-time shuttle-tracking PWA** for U-M Hospital *(5,000+ monthly riders)* — cut status inquiries **40%** and freed **1,095 dispatch hours/year**.
- Shipped 10+ internal applications collectively saving **2,800+ hours/year**.

---

## Education

**University of Michigan**, Ann Arbor, MI — **B.A., Sociology of Health and Medicine** · May 2024  
*Equivalent practical experience in AI/ML systems engineering, agentic workflows, LLM fine-tuning, and cloud deployment — acquired entirely through production work.*

---

## Selected Projects · [jzimdars-rtg.github.io/portfolio](https://jzimdars-rtg.github.io/portfolio)

- **Customer Booking & Reservation Platform** *(production)* — self-service quote-to-reservation web app sharing a single pricing engine with the internal dispatcher tool; season/charter builder, long-haul + toll pricing, Freshdesk ticketing, zero-build SPA on a secret-brokering Node.js proxy, Azure App Service + Microsoft Entra auth.
- **Wedding Transportation Booking App** *(production)* — Next.js 16 / React 19 / TypeScript 5-step guided flow; deterministic AI-optional plan engine, Azure OpenAI concierge with live booking mutation, Zod-validated form state with session persistence, Tailwind v4 + Framer Motion design system.
- **GenAI Agent Toolkit** — vendor-agnostic LangGraph core (JS + Python); multi-provider routing, self-reflection, RAG, ReAct, hierarchical delegation, human-in-the-loop. [github.com/jzimdars-RTG/JZ-genai-](https://github.com/jzimdars-RTG/JZ-genai-)
- **Quote Calculator** *(production)* — fine-tuned gpt-4.1-mini on Azure Foundry, multi-provider fallback, LangGraph graph, Samsara telematics, OTR engine with DOT HOS, 15-spec Playwright eval + golden-quotes regression.
- **Tigers Game-Day Platform** *(production)* — booking funnel + RAG assistant; QuoteBot + Freshdesk orchestration, Azure Foundry RAG, deployed on Azure with Key Vault + managed identity.
- **Pricing API** — .NET 8 / EF Core / Azure SQL; 9 controllers, 22 entities.
- **Shuttle Tracking PWA** — real-time map for 5K+ monthly U-M Hospital riders; cut inquiries 40%.
