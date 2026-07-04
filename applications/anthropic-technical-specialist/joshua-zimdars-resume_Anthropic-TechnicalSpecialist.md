# Joshua Zimdars
**Technical Specialist & Enablement Lead**
Ann Arbor, MI · 734-730-9150 · jzimdars@umich.edu
[linkedin.com/in/joshua-zimdars-1321a624b](https://linkedin.com/in/joshua-zimdars-1321a624b) · [jzimdars-rtg.github.io/portfolio](https://jzimdars-rtg.github.io/portfolio) · [github.com/jzimdars-RTG](https://github.com/jzimdars-RTG)

---

## Summary

Technical specialist who turns complex AI capabilities into deep, lasting adoption. For 18 months I've been the sole business systems owner embedded inside a live 100-market operation — gathering requirements directly from executive stakeholders, designing bespoke enablement programs, and shipping 10+ production systems that teams adopted from day one. I build with Claude Code daily — it is core infrastructure in how I work, not a tool I reach for occasionally. I've shipped a production agentic toolkit on LangGraph.js with multi-provider LLM routing, RAG, self-reflection, and LLM-native observability. I translate complex technical capabilities into outcomes engineers and business leaders both understand — 2,800+ hours/year saved, 10x faster sales response, 40% reduction in dispatch inquiries.

---

## Core Skills

**Technical enablement & adoption** — bespoke enablement program design, workshop facilitation, role-based curricula (engineering, ops, executive), hands-on adoption sessions, change management, champion enablement, hackathon design and execution

**Customer-facing technical engagement** — requirements gathering (direct executive stakeholders), pilot scoping and execution, post-sale activation, stakeholder management, live demos and technical talks

**AI & agentic systems** — Claude Code (daily), Claude Developer Platform, LLM fine-tuning (Azure AI Foundry), multi-provider LLM routing & fallback chains, prompt engineering, RAG (vector retrieval, cosine similarity), ReAct + self-reflection loops, human-in-the-loop workflows, agent observability (tokens, cost, latency tracing)

**Languages & frameworks** — JavaScript (Node.js, React 19), Python (LangGraph), C# / .NET 8, SQL, PowerShell; LangGraph.js, LangGraph (Python), langchain-google-vertexai

**AI platforms & models** — Claude Code, Claude Developer Platform, Azure AI Foundry (fine-tuned gpt-4.1-mini), Vertex AI (Gemini 2.0 Flash, text-embedding-004), Azure AI Inference (Kimi K2.6)

**Cloud & integrations** — Azure (App Service, Functions, SQL, Key Vault, Managed Identity, AI Foundry), Google Cloud (Vertex AI), REST APIs, Socket.io, Playwright (eval + regression), PowerShell CI/CD

**Tools & platforms** — Freshdesk, Samsara fleet telematics, JAMF MDM, Microsoft Entra ID, MaintainX, Microsoft Teams

**Certifications** — MaintainX Administrator Foundations (2025) · Deloitte Future of Work Institute (2023)

---

## Experience

### Golden Limousine International — Ann Arbor, MI
**Business Systems Specialist & EA to the CEO/CFO** · *Nov 2024 – Present*

Sole business systems owner embedded in a live 100-market ground transportation operation. Identified highest-friction workflows, gathered requirements directly from the CEO and CFO, and drove systems from discovery through full adoption — owning every phase from requirements and design through enablement, training, and measurable outcome delivery.

**Technical enablement & adoption**
- Designed and delivered role-based enablement programs for sales, dispatch, and executive teams — moving all users off legacy spreadsheet workflows and onto new production systems within two weeks of launch.
- Led hands-on adoption sessions, office hours, and live walkthroughs tailored to each audience's stack and workflows — credibility came from building the systems myself and being in the room to answer every follow-on question.
- Enabled internal champions (operations manager, CEO, CFO) to scale adoption without me in the room — arming them with documentation, reference implementations, and structured escalation workflows.
- Ran pilot-to-production cycles for every system shipped: scoped success criteria upfront, instrumented outcomes, and carried pilot context seamlessly into post-launch activation.

**AI systems & agentic workflows (built with Claude Code)**
- Designed and shipped the **Quote Calculator** — a production agentic LLM workflow built with Claude Code that parses inbound customer emails, routes across a LangGraph.js graph (parse → reflect → enrich → decide → human approval), and delivers structured quotes; fine-tuned gpt-4.1-mini on Azure AI Foundry, multi-provider fallback chain, raised quote accuracy from ~75% to 90%+.
- Built an end-to-end LLM fine-tuning pipeline using Claude Code: harvested production quotes into training data, generated correction datasets from eval failures, submitted and evaluated fine-tune jobs on Azure AI Foundry.
- Built and maintain **`jz-genai-agent-toolkit`** — an open-source vendor-agnostic agentic core (LangGraph.js + Python) built entirely with Claude Code; multi-provider routing, ReAct, self-reflection, RAG, human-in-the-loop, LLM-native observability (tokens, cost, latency per call).
- Stood up a 15-spec Playwright eval + snapshot-regression suite using Claude Code — a "golden quotes" harness locking pricing output against known-good fixtures; raised quote accuracy from ~75% to 90%+.

**Engineering & platform**
- Built a 14-model pricing engine including an OTR cost-plus engine with DOT Hours-of-Service compliance check and dynamic demand multipliers — reused as single source of truth across internal and customer-facing tools.
- Designed and delivered a customer-facing self-service booking platform — requirements-driven quote-to-reservation flow with automated Freshdesk ticketing for every booking.
- Built a real-time shuttle-tracking PWA for U-M Hospital (5,000+ monthly riders) — cut dispatch inquiries **40%**, freed **1,095 dispatch hours/year**.
- Re-platformed 35-year-old Excel/VBA rate card into a .NET 8 / EF Core / Azure SQL pricing API.
- Standardized 60+ devices under JAMF MDM — reduced IT support tickets **30%**.
- Shipped 10+ internal and customer-facing systems collectively saving **2,800+ hours/year**.

---

## Education

**University of Michigan**, Ann Arbor, MI — **B.A., Sociology of Health and Medicine** · May 2024
*Practical experience in technical enablement, AI/agentic systems, requirements gathering, and production system delivery acquired through 18 months of sole-owner production work.*

---

## Selected Projects · [jzimdars-rtg.github.io/portfolio](https://jzimdars-rtg.github.io/portfolio)

- **GenAI Agent Toolkit** *(built with Claude Code)* — vendor-agnostic LangGraph core (JS + Python); multi-provider routing, self-reflection, RAG, ReAct, human-in-the-loop, LLM-native observability. [github.com/jzimdars-RTG/JZ-genai-](https://github.com/jzimdars-RTG/JZ-genai-)
- **Quote Calculator** *(production, built with Claude Code)* — fine-tuned gpt-4.1-mini on Azure Foundry, LangGraph agentic graph, multi-provider fallback, 15-spec Playwright eval suite, Samsara telematics, OTR engine with DOT HOS; 10x faster sales response.
- **Customer Booking & Reservation Platform** *(production)* — requirements-driven self-service quote-to-reservation tool sharing one pricing model with the internal dispatch system; automated Freshdesk ticketing for every booking.
- **Shuttle Tracking PWA** — real-time map for 5K+ monthly U-M Hospital riders; cut dispatch inquiries 40%, freed 1,095 hours/year.
- **Pricing API** — .NET 8 / EF Core / Azure SQL; 9 controllers, 22 entities; single source of truth reused across internal and customer-facing tools.

---

## By the Numbers

| Metric | Result |
|---|---|
| Hours saved annually (across all systems) | **2,800+** |
| Sales response time reduction (Quote Calculator) | **10× faster** (20–34 min → 2–3 min) |
| Quote accuracy improvement (Playwright eval suite) | **~75% → 90%+** |
| Dispatch inquiry reduction (Shuttle Tracking) | **40%** |
| Dispatch hours freed annually | **1,095** |
| Deployment time reduction (PowerShell CI/CD) | **70%** |
| IT ticket reduction (JAMF MDM) | **30%** |
| Devices standardized under MDM | **60+** |
| Production applications shipped | **10+** |
