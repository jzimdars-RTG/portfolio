# Joshua Zimdars
Ann Arbor, MI · 734-730-9150 · jzimdars@umich.edu  
[linkedin.com/in/joshua-zimdars-1321a624b](https://linkedin.com/in/joshua-zimdars-1321a624b) · [github.com/jzimdars-RTG](https://github.com/jzimdars-RTG)


I turn ambiguous business problems into shipped systems. Over the last 18 months, I've effectively run strategy and operations for the CEO and CFO of a multi-state ground-transportation company — rebuilding the way it prices, sells, hires, and serves customers from spreadsheets into a portfolio of data-driven platforms that have saved **2,800+ hours a year** and recovered margin across **100+ markets**. I am a **self-taught engineer** who learned to build production systems using AI as my primary accelerator — GitHub Copilot, Claude, GPT-4, and Azure AI Inference are daily tools, not novelties. I design prompts, build LLM-powered workflows, and evaluate AI output the same way I evaluate any other system component. I can move from executive reporting to acquisition analytics to SQL to stakeholder alignment without losing momentum.

---

## Experience

### Golden Limousine International — Ann Arbor, MI
**Business Systems Specialist & Executive Assistant to the CEO and CFO**  
*Nov 2024 – Present*

I joined as EA to the CEO and CFO. The job description was calendar management. The actual job was to figure out why a company quoting work across 100+ markets was still pricing out of Excel — and to fix it. I architected and shipped the entire strategy & operations stack, self-taught, using AI as my primary building tool.

**Sales operations & pricing strategy**
- Pricing knowledge at Golden Limo was scattered across people, tribal memory, and a patchwork of spreadsheets — no two reservationists priced the same trip the same way. I applied structured problem solving: interviewed every stakeholder, mapped the logic from every silo, and designed the company's **first unified pricing model** — a 7-zone, 4-tier structure (Floor / Market-Pressure / Base / Peak) covering 14 trip types and 14 vehicle classes, with a cost-plus margin engine for multi-day charter and DOT Hours-of-Service compliance built in. The model is built on a 2026 demand calendar (event-by-event, not a heuristic) and feeds the **CEO's weekly revenue forecast** directly. The Excel version came first — intentionally — to prove the model before building the platform.
- Took that unified model and shipped it as the **Quote Calculator** (in active development, in daily use by sales/dispatch): a production platform that AI-parses a customer email (Azure AI / Kimi K2), prices any trip instantly against the demand-aware rate card, validates with the dispatch system, and books the job. Median quote time: **under 3 minutes**, down from 20–34. Reservationists no longer do pricing math — they focus entirely on the customer.
- Re-platformed the rate card into a **.NET 8 / EF Core / Azure SQL pricing API** (9 controllers, 22 entities) with a **10-phase product roadmap** I authored and own — so the same pricing source of truth can power a customer self-service site, an affiliate network, and a mobile PWA without a rebuild.

**Operations tooling & customer experience**
- Shipped 8 internal applications across operations, customer service, and pricing — collectively saving **2,800+ hours/year**.
- Built a **real-time vehicle-tracking PWA** for U-M Hospital shuttles (5,000+ monthly riders) — cut customer status inquiries **40%** and freed **1,095 dispatch hours/year**.
- Built a **real-time vehicle detailing system** (React 19 + Socket.io + Node) with a 14-point QA checklist, manager review workflow, and tablet-optimized UI for the garage floor.
- Stood up a passenger-analytics pipeline (Python / pandas) that now informs renewal conversations with the U-M Hospital account.

**Executive support & cross-functional leadership**
- Prepare CEO/CFO weekly briefings and board-prep materials: translate operational data into actionable recommendations with a clear decision and stated stakes. Pricing, fleet utilization, account health, and acquisition spend each have a number the executive can act on, not a status update.
- Built and own the cross-functional governance cadence that aligns HR, IT, Safety, Fleet, and Operations — and leads change management for every system rollout. The cadence converted two senior dispatchers who resisted the Quote Calculator for six weeks into daily power users.
- Cut IT support tickets **30%** by standardizing **60+ devices** under JAMF Now MDM; reduced deployment time **70%** with PowerShell CI/CD on Azure.
- Initiated a company-wide recognition program that measurably improved retention-survey scores.

**Marketing & acquisition**
- Built a CDL driver recruitment site with full UTM/GA4 attribution for the recruiting team in a day — per-channel campaign URLs across Indeed, ZipRecruiter, LinkedIn, and Facebook gave leadership cost-per-applicant visibility by source for the first time.

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

## Selected Projects · [github.com/jzimdars-RTG/portfolio](https://github.com/jzimdars-RTG/portfolio)

- **Quote Calculator** *(in active development)* — production AI-assisted quoting & dispatch platform; 14 trip types, 14 vehicle classes, Azure AI / Kimi K2 email parser, QuoteBot + Samsara + Azure Maps integration, Playwright suite.
- **Pricing API** — .NET 8 / EF Core / Azure SQL platform; 9 controllers, 22 entities, 10-phase roadmap.
- **Shuttle Tracking PWA** — real-time vehicle map for 5K+ monthly U-M Hospital riders; 40% inquiry drop.
- **Detailer System** — React 19 + Socket.io real-time QA workflow for the garage floor.
- **Driver Recruitment Site** — UTM/GA4 attribution stack built for the recruiting team in a day. Live at charterbusdrivers.com.

---

## Skills

**Strategy & operations** — pricing strategy, unit economics, structured problem solving, cross-functional stakeholder alignment, process and tooling design, operating cadence development, change management, executive communication, board-prep narrative, product roadmapping  
**AI & agent tooling** — LLM prompt engineering and evaluation (Kimi K2, GPT-4, Claude, Gemini), AI-assisted development (GitHub Copilot), Azure AI Inference, agentic workflows, self-taught engineer using AI as primary learning accelerator  
**Marketing analytics** — GA4, UTM attribution, conversion optimization, A/B testing, multi-channel campaign tracking  
**Data & analytics** — SQL, Python (pandas), Excel modeling, A/B framing, data visualization  
**Engineering** — JavaScript (Node, React 19), C# / .NET 8, Python, VBA, PowerShell, REST APIs, Socket.io, Azure (Functions, Static Web Apps, SQL, Maps, AI Inference, Cosmos), CI/CD, Git  
**Certifications** — MaintainX Administrator Foundations (2025) · Deloitte Future of Work Institute (2023)