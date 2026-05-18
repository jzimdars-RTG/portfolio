# Joshua Zimdars
Ann Arbor, MI · 734-730-9150 · jzimdars@umich.edu  
[linkedin.com/in/joshua-zimdars-1321a624b](https://linkedin.com/in/joshua-zimdars-1321a624b) · [jzimdars-rtg.github.io/portfolio](https://jzimdars-rtg.github.io/portfolio)


I build and ship production AI systems and help teams adopt them. Over 18 months embedded at a 35-year-old SMB, I've functioned as a forward-deployed builder: identifying production blockers, shipping agentic workflows against live customer infrastructure, and converting field-observed friction into reusable systems. I write production code in JavaScript and Python, deploy on GCP and Azure, and treat observability as a design requirement — not an afterthought.

---

## Experience

### Golden Limousine International — Ann Arbor, MI
**Business Systems Specialist & Executive Assistant to the CEO and CFO**  
*Nov 2024 – Present*

Embedded builder across pricing, operations, and customer experience at a 100-market ground transportation SMB. Identify high-friction workflows, prototype solutions rapidly, and ship production systems against live infrastructure — including APIs, legacy data, and non-technical operator workflows.

**AI systems, agentic workflows, and production deployment**
- Designed and shipped the **Quote Calculator** *(in active daily use by sales and dispatch)*: a production agentic LLM workflow that parses inbound customer emails with Gemini 2.0 Flash on **Vertex AI (GCP)**, populates a pricing engine across 14 trip types × 14 vehicles, and routes through a LangGraph multi-agent graph with ReAct and self-reflection. Cut median time-to-quote from 20–34 minutes to **2–3 minutes**.
- Built and maintain **`jz-genai-agent-toolkit`** ([github.com/jzimdars-RTG/JZ-genai-](https://github.com/jzimdars-RTG/JZ-genai-)): an open-source vendor-agnostic agentic core in **JavaScript (LangGraph.js)** and **Python (LangGraph + langchain-google-vertexai)**. Features: multi-provider LLM routing (Vertex AI / Azure AI), self-reflection loop, **RAG retrieval** (cosine similarity over Vertex AI `text-embedding-004`), human-in-the-loop gate, and per-call **LLM-native observability** (tokens, cost, latency, p50/p95) emitted as JSONL.
- Instrumented a Playwright-based **LLM eval pipeline** across 12 parser scenarios after discovering the model was reliably wrong on multi-leg itineraries; re-prompting against eval output raised accuracy to production standard.
- Introduced AI-assisted workflows and prompt engineering practices for executives, sales, dispatch, and operations teams; led hands-on adoption sessions until teams preferred the new systems.

**Engineering and platform**
- Re-platformed the rate card into a **.NET 8 / EF Core / Azure SQL pricing API** *(9 controllers, 22 entities)* with a **10-phase product roadmap**.
- Built a **real-time vehicle-tracking PWA** for U-M Hospital shuttles *(5,000+ monthly riders)* — cut customer status inquiries **40%** and freed **1,095 dispatch hours/year**.
- Built a **real-time vehicle detailing system** *(React 19 + Socket.io + Node)* with a 14-point QA checklist and tablet-optimized UI.
- Built a **Python/pandas passenger-analytics pipeline** now used in account renewal conversations with U-M Hospital.
- Shipped 8 internal applications collectively saving **2,800+ hours/year**.

**Executive support and operations**
- Prepare CEO/CFO weekly briefings and board-prep materials; lead cross-functional governance cadence across HR, IT, Safety, Fleet, and Operations.
- Cut IT support tickets **30%** by standardizing **60+ devices** under JAMF MDM; reduced deployment time **70%** with PowerShell CI/CD on Azure.
- Built a CDL driver recruitment site with full UTM/GA4 attribution in a day, giving leadership visibility into recruiting-channel performance across 4 job boards and 4 CDL roles.

---

### University of Michigan, Institute for Social Research — Ann Arbor, MI
**Research Assistant** · May – Aug 2022  
Synthesized international health-policy datasets into briefings for senior researchers; produced quantitative and qualitative analyses presented at academic forums.

### Earlier
**Server**, Barton Hills Country Club (2024) and Palio Restaurant (2021–2023) — consultative, top-of-floor sales performer; built repeat clientele in high-touch hospitality settings.  
**Volunteer**, Delonis Homeless Shelter (2022).

---

## Education

**University of Michigan**, Ann Arbor, MI  
**B.A., Sociology of Health and Medicine** · May 2024 · Michigan Club Lacrosse (2 yrs)

---

## Selected Projects · [jzimdars-rtg.github.io/portfolio](https://jzimdars-rtg.github.io/portfolio)

- **GenAI Agent Toolkit** — vendor-agnostic LangGraph agentic core in **JavaScript and Python**; multi-provider LLM routing, self-reflection, **RAG retrieval** (Vertex AI embeddings + cosine similarity), human-in-the-loop gate, LLM-native observability (tokens, cost, p50/p95 latency). [github.com/jzimdars-RTG/JZ-genai-](https://github.com/jzimdars-RTG/JZ-genai-)
- **Quote Calculator** *(in active development)* — production AI-assisted quoting and dispatch platform; Gemini 2.0 Flash on Vertex AI, LangGraph multi-agent graph, 14 trip types × 14 vehicles, LLM eval pipeline.
- **Pricing API** — .NET 8 / EF Core / Azure SQL; 9 controllers, 22 entities, 10-phase roadmap.
- **Shuttle Tracking PWA** — real-time vehicle map for 5K+ monthly U-M Hospital riders; reduced inquiry volume 40%.
- **Driver Recruitment Site** — UTM/GA4 attribution stack. Live at charterbusdrivers.com.

---

## Skills

**AI engineering & agentic systems** — prompt engineering, Retrieval-Augmented Generation (RAG), multi-agent orchestration (ReAct, self-reflection, hierarchical delegation), LLM evaluation pipelines, human-in-the-loop workflows, agentic framework development  
**Languages** — JavaScript (Node.js, React 19), **Python** (LangGraph, pandas, data pipelines), C# / .NET 8, PowerShell, SQL, VBA  
**AI platforms** — Google Vertex AI (Gemini 2.0 Flash, text-embedding-004), Azure AI Inference (Kimi K2), OpenAI, Claude, GitHub Copilot  
**Agentic frameworks** — LangGraph.js, LangGraph (Python), langchain-google-vertexai; patterns: ReAct, self-reflection, human-in-the-loop  
**LLM-native observability** — per-call token accounting, cost-per-request, latency (p50/p95), JSONL tracing, error rate  
**Cloud platforms** — Google Cloud Platform (Vertex AI, GCP), Azure (Functions, Static Web Apps, SQL, Maps, AI Inference, MDM/Intune)  
**Engineering** — REST APIs, Socket.io, ES modules, .NET 8 / EF Core, PowerShell CI/CD, Playwright (LLM eval), JAMF Now MDM  
**Data & analytics** — SQL, Python/pandas, Excel modeling, GA4, UTM attribution, dashboarding  
**Strategy & operations** — pricing strategy, unit economics, stakeholder alignment, change management, governance cadence  
**Certifications** — MaintainX Administrator Foundations (2025) · Deloitte Future of Work Institute (2023)
