# Glean — Machine Learning Engineer, LLM Evals & Observability
**Apply:** https://job-boards.greenhouse.io/gleanwork/jobs/4694716005  
**Location:** Palo Alto, CA (hybrid) / Remote  
**Salary:** ~$160,000–$280,000 + equity  
**ATS:** Greenhouse

---

## 🎯 Why This Is a Top-5 Application

This role is almost a job description written from your portfolio:
- **"Design and curate evaluation datasets"** → You built a golden-quote harness + correction-dataset pipeline from production eval failures
- **"Build large-scale evaluation pipelines"** → 15-spec Playwright eval suite with snapshot regression
- **"Develop LLM-powered judges"** → Self-reflection node that scores LLM output confidence at the graph level
- **"Agent observability"** → JSONL telemetry per LangGraph node, p50/p95, live trace overlay
- **"Continuous quality improvement"** → Eval failures generate correction datasets for the next fine-tune cycle

You are literally doing this job in production. The title is "ML Engineer" but the work is pure applied AI eval + observability engineering.

---

## 📝 Cover Letter

Dear Glean Hiring Team,

I'm applying for the ML Engineer, LLM Evals & Observability role. I've spent the past 18 months building exactly this stack in production: evaluation datasets, eval pipelines, LLM-powered scoring, and agent observability — all for a live agentic system with real users depending on daily output quality.

At Golden Limousine International I built the Quote Calculator: a production multi-agent LangGraph system that parses customer emails, routes across 14 trip types and 14 vehicle classes, and outputs structured quotes. From day one I built the eval and observability infrastructure:

**Evaluation pipeline:** 15 Playwright specs covering the parser, the multi-leg itinerary routing, and the pricing engine output. A "golden quotes" harness locks known-good pricing output against fixtures — any regression in model behavior fails the suite. A QuoteBot replay harness reruns historical requests against the current model. These are the evaluation datasets and pipelines from the Glean job description.

**LLM-powered judge:** A `reflect` node scores the parser's own output with a configurable confidence threshold (default 0.7). Below threshold: route back to `parse` (max 2 retries). Above threshold: pass downstream. That's the LLM-powered judge pattern applied at the graph level.

**Agent observability:** Per-call JSONL telemetry: operation name, provider, model, input tokens, output tokens, cost in USD, latency in ms, success/failure. `agent.printSummary()` aggregates call count, total cost, error rate, and p50/p95 latency across a full run. Live in-browser trace overlay visualizes every LangGraph node firing in real time.

**Continuous improvement loop:** Eval failures generate correction datasets. Correction datasets feed the next fine-tune cycle on Azure AI Foundry. The pipeline closes the loop between what the model gets wrong in production and what the next version learns.

That's the full stack this role describes. I've built it in production, understood why every design decision matters, and would bring that grounded perspective to Glean's enterprise AI eval infrastructure.

I'm based in Michigan and open to relocating to Palo Alto.

Joshua Zimdars  
jzimdars@umich.edu · 734-730-9150  
jzimdars-rtg.github.io/portfolio · github.com/jzimdars-RTG

---

## ✍️ Common Application Questions

### "Tell us about yourself"
I'm a production AI engineer who has built LLM eval pipelines, agent observability, and LLM-powered output scoring from scratch for a live agentic system. I've built golden-output regression harnesses, correction-dataset pipelines from eval failures, per-call JSONL telemetry with p50/p95, and self-reflection scoring nodes in a production LangGraph graph. 18 months, sole engineer, real users.

### "Why Glean?"
Glean's AI assistants run across enterprise tools that millions of people depend on — the correctness and reliability bar is high. The ML Engineer, LLM Evals & Observability role is building the measurement infrastructure that makes that reliability possible. That's the work I find most compelling: not just building the system but building the scaffold that tells you whether the system is actually working.

### "Describe your evaluation pipeline experience"
15-spec Playwright eval suite: golden-quote harness (known-good pricing fixtures), QuoteBot replay harness (historical request replay), multi-leg itinerary coverage, parser accuracy across trip types. Correction-dataset pipeline: eval failures get labeled and fed into the next fine-tune cycle on Azure AI Foundry. Every config change is committed so any historical decision is replayable.

### "Describe your LLM-powered judge implementation"
Self-reflection `reflect` node in the LangGraph graph: after `parse`, the node runs the LLM against its own output with a scoring prompt. Confidence below 0.7 → retry edge back to `parse` (max 2 retries). Confidence above 0.7 → pass to next node. The judge is the same LLM as the parser; the scoring prompt is separate and tuned to the domain. This pattern reduces hallucinations without requiring human review on every call.

### "Describe your observability implementation"
Every LLM call emits a JSONL line to `traces/run-{timestamp}.jsonl`: timestamp, operation name, provider, model, input tokens, output tokens, total tokens, cost in USD, latency in ms, success boolean. `agent.printSummary()` aggregates across a run: total calls, total cost, error rate, p50 and p95 latency. Live in-browser trace overlay shows every LangGraph node firing in real time.

### "What's your infrastructure/backend engineering experience?"
.NET 8 / EF Core / Azure SQL REST API (9 controllers, 22 entities). Azure App Service, Functions, Static Web Apps, Key Vault + managed identity. PowerShell CI/CD (cut deployment time 70%). Node.js proxy with Cloudflare Turnstile, rate limiting, CORS, security headers. Real-time Socket.io PWA (5K+ monthly users).

---

## 🔑 Three Talking Points to Lead With

1. **"I've built the full eval stack you're describing"** — Golden-output regression, LLM-powered scoring (self-reflection node), correction-dataset loop, per-call JSONL telemetry, live trace overlay. In production.

2. **"My eval pipeline closes the loop to fine-tuning"** — Eval failures → correction datasets → Azure AI Foundry fine-tune job → eval again. The measurement directly improves the model.

3. **"I built observability for a production agent before it was standard practice"** — Not an afterthought. JSONL telemetry was a first-class design requirement from day one.

---

## 📋 Application Checklist

- [ ] Create Greenhouse account
- [ ] Apply: https://job-boards.greenhouse.io/gleanwork/jobs/4694716005
- [ ] Upload resume PDF
- [ ] Paste cover letter above
- [ ] Note: open to relocating to Palo Alto OR interested in remote option
- [ ] Portfolio: https://jzimdars-rtg.github.io/portfolio
- [ ] GitHub: https://github.com/jzimdars-RTG
