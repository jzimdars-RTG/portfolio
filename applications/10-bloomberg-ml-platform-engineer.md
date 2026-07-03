# Bloomberg — Senior ML Platform Engineer
**Apply:** https://careers.bloomberg.com  
**Location:** New York, NY  
**Salary:** ~$160,000–$240,000  
**ATS:** Bloomberg proprietary (careers.bloomberg.com)

---

## 🎯 Why This Fits

Bloomberg's AI Engineering department has 400+ practitioners. The ML Platform Engineer role builds:
- Multi-tenant AI systems and platforms
- Continuous model training and monitoring (MLOps)
- Kubernetes + Kubeflow + Argo pipelines
- NLP and GenAI for financial data

Your match:
- MLOps pattern: eval pipeline, regression harness, JSONL telemetry, CI/CD automation
- Production AI systems with observability from day one
- .NET 8 / Azure SQL backend engineering for high-throughput data systems
- Financial domain awareness (pricing models, cost-basis calculation)

**Honest gap:** Bloomberg's stack is Kubernetes/Kubeflow/Argo/Go — infrastructure-heavy. Your stack is Azure/LangGraph/Node.js. The patterns transfer but the tools are different. Address it directly.

---

## 📝 Cover Letter

Dear Bloomberg Engineering Team,

I'm applying for the Senior ML Platform Engineer role. I've spent the past 18 months building production AI systems with MLOps discipline from day one — eval pipelines, regression harnesses, observability, and CI/CD automation — and I'm looking to apply that approach at Bloomberg's scale.

My engineering background is Azure-centric rather than Kubernetes-native, so I want to be direct about the gap: I haven't worked with Kubeflow or Argo workflows, and my cloud-native experience is Azure App Service/Functions rather than raw Kubernetes. The MLOps patterns I've applied — continuous eval, snapshot regression, per-call telemetry, config versioning — are directly transferable, and I can pick up Kubernetes tooling quickly. I'm not claiming to be a day-one fit for the platform infrastructure; I'm claiming to bring the AI engineering rigor that makes platforms worth building.

What I've built: a fine-tuned gpt-4.1-mini parser on Azure AI Foundry (end-to-end pipeline from dataset harvesting to correction datasets to eval to production), multi-agent LangGraph orchestration, a 15-spec Playwright regression suite with golden-output fixtures, JSONL telemetry capturing tokens/cost/latency p50/p95 per operation, and a .NET 8 / EF Core / Azure SQL pricing API (9 controllers, 22 entities, production data). That's the ML platform engineering pattern applied to a smaller domain — and the discipline transfers to Bloomberg's infrastructure at scale.

Bloomberg's problem space — NLP for financial data, real-time MLOps, multi-tenant AI systems at massive scale — is technically compelling. I'd be learning the infrastructure stack while contributing AI engineering rigor from day one.

I'm based in Michigan and open to relocating to New York.

Joshua Zimdars  
jzimdars@umich.edu · 734-730-9150  
jzimdars-rtg.github.io/portfolio · github.com/jzimdars-RTG

---

## ✍️ Common Application Questions

### "Tell us about yourself"
Production AI engineer with MLOps discipline: eval pipelines, regression harnesses, per-call observability, CI/CD automation. Built a fine-tuned LLM pipeline end-to-end, multi-agent LangGraph orchestration, and .NET 8 / Azure SQL backend engineering. 18 months, sole engineer, real production systems.

### "Why Bloomberg?"
400+ AI practitioners working on NLP for financial data, real-time MLOps, and multi-tenant AI systems — that's a technically rich environment that would push my capabilities significantly beyond what I can build solo. Bloomberg's scale and the complexity of financial NLP is exactly the kind of challenge I want to be working on.

### "What's your MLOps experience?"
Eval pipeline: 15-spec Playwright regression suite + golden-output fixtures. Correction-dataset loop: eval failures → labeled dataset → Azure AI Foundry fine-tune. Config versioning: every rate card change is committed so any historical quote is replayable. PowerShell CI/CD on Azure (cut deployment time 70%). JSONL telemetry for cost/quality/latency trending.

### "What's your experience with data pipelines and large-scale systems?"
.NET 8 / EF Core / Azure SQL pricing API: 9 controllers, 22 entities, production data for 100+ market ground transportation company. 14-model pricing engine with demand calendar. JSONL trace files aggregating across production runs. Real-time shuttle tracking PWA (5K+ monthly users, Socket.io).

### "What's your Kubernetes/container experience?"
Limited — my production deployments are Azure App Service/Functions/Static Web Apps rather than raw Kubernetes. I understand containers (Docker), CI/CD pipelines (PowerShell on Azure), and the principles of MLOps orchestration. Kubeflow and Argo are tools I'd be picking up — the patterns (DAG-based workflows, model versioning, continuous evaluation) are already part of how I work.

---

## 🔑 Three Talking Points to Lead With

1. **"MLOps discipline from day one"** — Eval pipeline, regression harness, config versioning, CI/CD automation. Production AI with measurement built in.
2. **"Fine-tuning pipeline end-to-end"** — Dataset harvesting → correction datasets → Azure AI Foundry → eval → production. The full loop.
3. **"Honest about the infrastructure gap"** — Azure-centric, not Kubernetes-native. The MLOps patterns transfer; the tooling is learnable.

---

## 📋 Application Checklist

- [ ] Create account at careers.bloomberg.com
- [ ] Search "ML Platform Engineer" — apply to matching roles
- [ ] Upload resume PDF
- [ ] Paste cover letter above
- [ ] Note: open to relocating to New York
- [ ] Portfolio: https://jzimdars-rtg.github.io/portfolio
- [ ] GitHub: https://github.com/jzimdars-RTG
