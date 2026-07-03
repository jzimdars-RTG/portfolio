# Disney — Sr. Software Engineer, AI & Observability
**Apply:** https://jobs.disneycareers.com/search-jobs/AI  
**Location:** Burbank CA / Glendale CA / Seattle WA / New York NY  
**Salary:** ~$175,000–$235,000  
**ATS:** Workday — create account at disneycareers.com

---

## 🎯 Why This Fits

Disney's AI & Observability team builds AI-driven systems that monitor and maintain Disney+/Hulu/ESPN reliability at scale. The role combines:
- **AI engineering** — agentic systems for root cause analysis, anomaly detection, automated insights
- **Observability** — telemetry pipelines, alerting, dashboards, system health automation
- **Production systems** — real-time, high-throughput, distributed

Your match: Production agentic LLM systems + purpose-built JSONL observability layer + real-time Azure infrastructure. Your eval pipeline and JSONL telemetry are exactly the "observability for AI systems" work this role does.

---

## 📝 Cover Letter

Dear Disney Hiring Team,

I'm applying for the Sr. Software Engineer, AI & Observability role because I've spent the past 18 months building exactly the intersection this role lives in: production agentic systems with purpose-built observability.

At Golden Limousine International I built the Quote Calculator — a multi-agent LangGraph system processing live customer data daily. From day one I built the observability layer alongside the system: per-call JSONL telemetry capturing tokens, cost, latency, p50/p95, and error rate per backend and per LangGraph node. A live in-browser trace overlay visualizes every node firing in real time. A 15-spec Playwright regression suite locks pricing output against golden fixtures. When something breaks, I know exactly where in the graph it broke, on which provider, at what latency.

That's the pattern Disney's AI & Observability team is building at scale for Disney+, Hulu, and ESPN: intelligent agents that monitor system behavior, detect anomalies, surface root cause, and enable fast resolution. I've built the same pattern in a smaller domain, and I understand the design decisions that make observability work in production versus in a demo.

On the infrastructure side: Azure App Service + Static Web Apps + Azure SQL, deployed via PowerShell CI/CD (cut deployment time 70%). Real-time shuttle tracking PWA using Socket.io for 5,000+ monthly U-M Hospital riders. I'm comfortable building distributed, real-time systems — and I know how to make them observable.

I'm based in Michigan and open to relocating to any Disney office.

Joshua Zimdars  
jzimdars@umich.edu · 734-730-9150  
jzimdars-rtg.github.io/portfolio · github.com/jzimdars-RTG

---

## ✍️ Common Application Questions

### "Tell us about yourself"
I'm a production AI engineer who has spent 18 months building LLM systems, agentic workflows, and observability infrastructure at a live company. I built a fine-tuned LLM parser, multi-agent LangGraph workflows, real-time Azure infrastructure, and — critically — a purpose-built observability layer: JSONL telemetry per node, Playwright regression suite, live trace overlay. I own the full lifecycle from broken workflow to shipped code with real users depending on it.

### "Why Disney?"
Disney is building AI-driven observability for the streaming infrastructure that millions of people use daily. That's the same pattern I've been building at smaller scale — agentic systems that monitor, detect, and explain system behavior, with observability designed from the start. I want to work on that problem at Disney's scale, with Disney's engineering team, for products I care about.

### "Describe your observability experience"
Built a JSONL telemetry pipeline that captures: operation name, provider, model, input tokens, output tokens, total cost in USD, latency in ms, p50/p95 across a run, error rate, and success status — for every LLM call in the system. Built a real-time in-browser agent-trace overlay that shows every LangGraph node firing as it happens. Built a 15-spec Playwright regression suite with golden-quote fixtures. `agent.printSummary()` aggregates all of the above across a full run.

### "What distributed/real-time systems have you built?"
Real-time shuttle tracking PWA: Socket.io backend + Azure infrastructure, serving 5,000+ monthly U-M Hospital riders. Cut status inquiry calls 40% and freed 1,095 dispatch hours/year. Also hardened the public booking endpoint on Azure App Service + Static Web Apps with Cloudflare Turnstile, rate limiting, CORS, and security headers.

### "What cloud experience do you have?"
Azure: App Service, Functions, Static Web Apps, SQL, Maps, AI Foundry (fine-tuning + inference), Key Vault + managed identity, PowerShell CI/CD. Google Cloud: Vertex AI (Gemini 2.0 Flash + text-embedding-004). Everything in production.

### "What programming languages do you use?"
JavaScript (Node.js, React 19), Python (LangGraph, pandas), C# / .NET 8, PowerShell, SQL. Production systems in all of them.

---

## 🔑 Three Talking Points to Lead With

1. **"I built the observability layer for a production AI system"** — JSONL telemetry per LangGraph node, p50/p95 latency, cost-per-call, live trace overlay, Playwright regression. That's directly what Disney's AI & Observability team builds.

2. **"I've shipped real-time systems at scale"** — Shuttle PWA (5,000+ monthly riders), Socket.io, Azure infrastructure, 40% reduction in status calls.

3. **"I own the full lifecycle including reliability"** — Hardened public endpoints, CI/CD, Key Vault + managed identity, eval regression suite. I've never had a team to hand reliability off to.

---

## 📋 Application Checklist

- [ ] Create Workday account at disneycareers.com
- [ ] Search "AI Observability" or "AI Core Engineering" — apply to all relevant SW Engineer roles
- [ ] Upload resume PDF
- [ ] Paste cover letter above
- [ ] In the application form, note willingness to relocate to Burbank/Glendale/Seattle/NY
- [ ] Portfolio: https://jzimdars-rtg.github.io/portfolio
- [ ] GitHub: https://github.com/jzimdars-RTG
