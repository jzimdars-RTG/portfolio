# LangChain — Deployed Engineer
**Apply:** https://jobs.ashbyhq.com/langchain  
**Location:** Remote / SF / NYC / Austin / Chicago / Atlanta  
**Salary:** $150,000–$270,000 + equity  
**ATS:** Ashby — create account at jobs.ashbyhq.com/langchain

---

## 🎯 Why This Is Your #1 Application

Your portfolio IS this job description. You have:
- Production LangGraph system running daily at a real company with real users
- Built the exact agentic patterns they care about: ReAct, self-reflection, human-in-the-loop, multi-agent orchestration
- Open-source toolkit (`jz-genai-agent-toolkit`) that is literally a deployable reference implementation
- 18 months of sitting next to non-technical users driving adoption — the hardest part of deployed AI work
- Python + JavaScript LangGraph fluency (both languages, same patterns)

---

## 📝 Cover Letter

Dear LangChain Hiring Team,

For the past 18 months I've been the sole engineer at a ground transportation company, taking broken workflows and shipping production AI systems to non-technical users — owning everything from problem discovery to code, evals, and adoption. My primary tool has been LangGraph.

The Quote Calculator I built is a production multi-agent LangGraph system: a fine-tuned gpt-4.1-mini parser on Azure AI Foundry feeds a 14-node state graph that routes across 14 trip types and 14 vehicle classes, with ReAct retry, self-reflection, and a human-approval gate. It runs daily. Sales and dispatch teams moved off legacy spreadsheets within two weeks. I also built a 15-spec Playwright eval harness with golden-quote regression and JSONL telemetry tracking tokens, cost, p50/p95 latency per provider.

Because I kept extracting the same patterns, I built `jz-genai-agent-toolkit` — a vendor-agnostic LangGraph core in JavaScript and Python with multi-provider routing, self-reflection, RAG (Vertex AI embeddings + cosine similarity), human-in-the-loop, and structured per-call observability. It's designed to be vendored via git subtree into any project.

What draws me to the Deployed Engineer role is the specific combination: co-building with customer engineering teams, owning the technical win, and extracting reusable patterns from field deployments. That is exactly what I've been doing — without a team, without a playbook, at a company with no prior AI infrastructure. The difference at LangChain is I'd be doing it with the team that built the framework I'm already using in production, with customers who are a step ahead of where I started.

I'm based in Michigan and open to relocating or traveling up to 40%. I'd welcome the chance to walk through the Quote Calculator architecture or the toolkit — everything is production code with real users depending on it.

Joshua Zimdars  
jzimdars@umich.edu · 734-730-9150  
jzimdars-rtg.github.io/portfolio · github.com/jzimdars-RTG

---

## ✍️ Common Application Questions

### "Tell us about yourself / introduce yourself"
I'm a production AI engineer with 18 months of hands-on experience building and shipping LLM systems at a live company. I've fine-tuned and deployed a gpt-4.1-mini parser on Azure AI Foundry, built multi-agent LangGraph workflows with ReAct + self-reflection + human-in-the-loop, and shipped 10+ internal tools saving 2,800+ hours/year — all as the sole engineer. My degree is in Sociology from U-M; everything I know about AI engineering I built in production with real users depending on it.

### "Why LangChain?"
I'm already using LangGraph in production daily. The Deployed Engineer role is the closest analog to what I've been doing for 18 months — finding broken workflows, architecting an AI solution, shipping it, and driving adoption with non-technical users. Doing that *with* the team that built the framework, for customers who are making large-scale bets on it, is the exact next step in my trajectory.

### "Describe a production AI system you've built"
The Quote Calculator: a production agentic LLM workflow that parses inbound customer emails via a fine-tuned gpt-4.1-mini parser (Azure AI Foundry), routes through a 14-node LangGraph state graph (14 trip types × 14 vehicle classes), with ReAct retry, self-reflection, and a human-approval gate. It also includes a multi-provider fallback chain (Foundry → OpenAI → Kimi K2.6), a 15-spec Playwright eval harness, and JSONL telemetry capturing tokens/cost/latency p50/p95 per node and provider. It's in active daily use — median quote time dropped from 20–34 minutes to 2–3 minutes.

### "What's your experience with LangGraph specifically?"
I've built two LangGraph systems in production: the Quote Calculator (Node.js/LangGraph.js) and my open-source `jz-genai-agent-toolkit` (both JS and Python). Both implement ReAct loops, self-reflection with configurable confidence thresholds, conditional edge routing, and human-in-the-loop gates. I've debugged state graph transitions under production load, handled streaming SSE node-by-node progress, and built snapshot-regression evals against the graph output. I also maintain the Python port using LangGraph (Python) + langchain-google-vertexai.

### "What experience do you have working with customers / non-technical stakeholders?"
Every user of my systems is non-technical. I spent 6 weeks sitting next to dispatchers at the dispatch desk to understand why they weren't adopting the new workflow. The biggest adoption lift came from moving one button's position. I've run hands-on adoption sessions that moved sales and dispatch teams from legacy spreadsheets to daily tool use within two weeks. I also translate architecture decisions and AI system behavior into plain business terms for the CEO/CFO regularly.

### "What are your compensation expectations?"
I'm targeting $150,000–$200,000 base, flexible based on equity and the full package. Open to discussion.

### "Are you open to travel?"
Yes — up to 40% travel as described in the job posting.

### "Are you authorized to work in the US?"
Yes — US citizen.

---

## 🔑 Three Talking Points to Lead With

1. **"I've shipped LangGraph to production with real users"** — Not a tutorial, not a demo. The Quote Calculator is used daily by sales and dispatch teams at a 35-year-old company. I fine-tuned the parser model, built the evals, and drove adoption.

2. **"I extracted the toolkit from the field"** — `jz-genai-agent-toolkit` is literally the "field patterns → reusable modules" loop the job description talks about. Same patterns, JS and Python.

3. **"I own the full lifecycle"** — Discovery → architecture → code → evals → adoption → business outcome measurement. No handoffs. Every part of the Deployed Engineer job description maps to something I've already done.

---

## 📋 Application Checklist

- [ ] Create account at jobs.ashbyhq.com
- [ ] Upload `joshua-zimdars-resume.md` (converted to PDF)
- [ ] Paste cover letter above
- [ ] Answer screening questions using answers above
- [ ] Portfolio link: https://jzimdars-rtg.github.io/portfolio
- [ ] GitHub link: https://github.com/jzimdars-RTG
