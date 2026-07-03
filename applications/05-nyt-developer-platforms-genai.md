# New York Times — Senior Engineer, Developer Platforms & GenAI
**Apply:** https://job-boards.greenhouse.io/thenewyorktimes/jobs/4696589005  
**Location:** New York, NY (hybrid)  
**Salary:** ~$150,000–$220,000  
**ATS:** Greenhouse — create account at greenhouse.io

---

## 🎯 Why This Fits

The NYT Developer Platforms & GenAI role is building the internal AI developer platform for their engineering org. Key responsibilities:
- Build GenAI-powered developer tooling (prompts, IDE integrations, LLM routing)
- Own guardrails and observability for agentic workflows
- Integrate with cloud infrastructure (AWS/GCP), Kubernetes, GitHub, CI/CD
- Ensure safe, auditable interactions with LLMs

Your match:
- You've built LLM routing, fallback chains, and observability from scratch in production
- Your PowerShell CI/CD and Azure infrastructure work maps to their DevOps requirements
- Your JSONL telemetry pipeline is the exact observability-for-AI pattern they're building
- Your Sociology background + journalistic ethics = rare alignment with NYT's values around responsible AI

**Honest gap:** They ask for Go and 5+ years. You don't have Go. Counter: your Node.js/Python/C# full-stack breadth + production AI depth is stronger than most Go engineers applying for this role. Address it directly.

---

## 📝 Cover Letter

Dear New York Times Hiring Team,

I'm applying for the Senior Engineer, Developer Platforms & GenAI role. I've spent the past 18 months building exactly what this role describes: LLM routing infrastructure, guardrails, observability for agentic workflows, and the CI/CD and security hardening that makes AI systems safe to run in production.

At Golden Limousine International I built a multi-provider LLM routing layer — a runtime-switchable fallback chain (Azure AI Foundry → OpenAI → Kimi K2.6) with per-backend health probes, A/B comparison, and a `llmClient` interface that decouples the application from the provider. I built JSONL telemetry capturing tokens, cost, latency p50/p95, and error rate per call. I built a 15-spec Playwright regression suite with golden-output fixtures — the eval harness that tells you whether a prompt change was an improvement or a regression. And I hardened the public endpoint: Cloudflare Turnstile, rate limiting, CORS, security headers, secrets in Azure Key Vault via managed identity.

That's the pattern for a responsible AI developer platform: routing + fallback + observability + guardrails + security + eval harness. I've built each piece in production as a solo engineer, which means I understand how they fit together.

I want to address one thing directly: the job description mentions Go, and I write primarily JavaScript, Python, and C#. I can learn Go quickly — I've picked up every language I use through production necessity — but I'd rather be honest about it upfront than pretend it isn't a gap.

What I bring that's unusual: 18 months of production AI engineering with no team, which means I've had to think about every layer simultaneously. A Sociology degree that makes me think about how people actually use AI systems, not just how they're supposed to. And a genuine alignment with The Times's commitment to ethical, transparent AI — the kind of work that deserves to be measured and auditable.

I'm based in Michigan and open to relocating to New York.

Joshua Zimdars  
jzimdars@umich.edu · 734-730-9150  
jzimdars-rtg.github.io/portfolio · github.com/jzimdars-RTG

---

## ✍️ Common Application Questions

### "Tell us about yourself"
I'm a production AI engineer who has built LLM routing infrastructure, multi-agent orchestration, eval pipelines, and security-hardened cloud deployments from scratch at a live company. 18 months, sole engineer, real users. My background is Sociology from U-M, but everything I know about AI/platform engineering I built in production. I care about responsible AI in exactly the way The Times does: measurable, auditable, reversible.

### "Why the New York Times?"
The Times is one of the few organizations that has thought seriously about what responsible AI development looks like in the context of a journalism mission. The Developer Platforms & GenAI role sits at the intersection of platform engineering and responsible AI adoption — building the guardrails, observability, and routing infrastructure that lets engineers use AI safely. That's the exact work I find most meaningful.

### "Describe your experience building LLM routing/infrastructure"
Built a multi-provider routing layer from scratch: a `llmClient` interface abstraction that routes to Azure AI Foundry (fine-tuned gpt-4.1-mini), OpenAI, or Kimi K2.6. Runtime-switchable backends, health probes, A/B comparison. The application never knows which provider it's talking to — the abstraction is enforced at the interface boundary. Similar to LiteLLM's pattern but purpose-built.

### "Describe your observability/guardrails experience"
Per-call JSONL telemetry: operation name, provider, model, tokens, cost in USD, latency, p50/p95 across runs, success/failure. Live in-browser trace overlay visualizing every LangGraph node in real time. Self-reflection loop that scores LLM output confidence before passing it downstream. Human-in-the-loop gate before final output. 15-spec Playwright regression suite with golden-output fixtures.

### "What's your CI/CD and cloud infrastructure experience?"
Built PowerShell CI/CD on Azure — cut deployment time 70%. Azure App Service + Static Web Apps + Azure SQL + Functions. Secrets in Key Vault via managed identity. Cloudflare Turnstile, rate limiting, CORS, security headers on the public endpoint. Also standardized 60+ devices under JAMF MDM (cut IT tickets 30%).

### "What languages/tools do you use?"
JavaScript (Node.js, React 19), Python (LangGraph, pandas), C# / .NET 8, PowerShell, SQL. Azure, Google Cloud (Vertex AI). I don't currently write Go — I'd be learning it on the job, which I'm transparent about. Every language I use today I learned through production necessity.

---

## 🔑 Three Talking Points to Lead With

1. **"I've built the full developer platform stack for AI"** — LLM routing layer, fallback chains, health probes, JSONL telemetry, regression eval harness, security hardening. Every piece in production.

2. **"I built guardrails and human-in-the-loop before it was expected"** — Self-reflection confidence scoring, HITL approval gate, correction-dataset feedback loop. I don't ship AI that I can't measure.

3. **"I'm aligned with your mission"** — My Sociology background makes me think about how AI affects people, not just whether it works. Responsible AI isn't a compliance checkbox for me — it's the reason I build observability from day one.

---

## 📋 Application Checklist

- [ ] Create Greenhouse account
- [ ] Apply: https://job-boards.greenhouse.io/thenewyorktimes/jobs/4696589005
- [ ] Upload resume PDF
- [ ] Paste cover letter above — note: directly address the Go gap
- [ ] Note: open to relocation to New York
- [ ] Portfolio: https://jzimdars-rtg.github.io/portfolio
- [ ] GitHub: https://github.com/jzimdars-RTG
