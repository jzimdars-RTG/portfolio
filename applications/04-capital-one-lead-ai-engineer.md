# Capital One — Lead AI Engineer, AI Foundations, LLM Core & Agentic AI
**Apply:** https://www.capitalonecareers.com/job/new-york/lead-ai-engineer-ai-foundations-llm-core-and-agentic-ai/1732/93698172720  
**Location:** New York NY / McLean VA  
**Salary:** ~$170,000–$280,000  
**ATS:** Taleo/Oracle HCM — create account at capitalonecareers.com

---

## 🎯 Why This Fits

Capital One's Lead AI Engineer role on the Agentic AI team focuses on:
- LLM fine-tuning and inference at scale
- Agentic architectures (LangGraph-style orchestration)
- LLM eval, observability, and guardrails
- Production-grade GenAI systems with governance

Your match is unusually direct:
- Built an **end-to-end fine-tuning pipeline** (Azure AI Foundry, gpt-4.1-mini)
- **Multi-agent LangGraph** orchestration in production with ReAct + self-reflection + HITL
- **LLM eval + regression suite** (Playwright golden-quote harness)
- **Multi-provider routing + fallback** with health probes
- The "Lead" title is a stretch given tenure, but your output evidence is stronger than many senior engineers

---

## 📝 Cover Letter

Dear Capital One AI Team,

I'm applying for the Lead AI Engineer role on the Agentic AI team. My background is production LLM engineering: fine-tuning, agentic orchestration, eval pipelines, and shipping systems to real users at a live company.

In the past 18 months at Golden Limousine International I built an end-to-end LLM fine-tuning pipeline from scratch: harvested production quotes into training data, generated correction datasets from eval failures, submitted fine-tune jobs to Azure AI Foundry, evaluated output quality against a golden-quote harness, and shipped a fine-tuned gpt-4.1-mini parser to production. That parser feeds a multi-agent LangGraph graph with 14 routing paths, ReAct retry, self-reflection (confidence threshold 0.7), and a human-in-the-loop approval gate. Failed parses route through a correction prompt before human review, with node-by-node progress streamed over SSE.

I also built the observability layer: per-call JSONL telemetry capturing tokens, cost, latency, p50/p95 per backend and per operation. A 15-spec Playwright regression suite locks output against known-good golden fixtures — the same pattern as a guardrail + regression harness. A multi-provider fallback chain (fine-tuned Foundry → OpenAI → Kimi K2.6) with a health probe that reports which provider is live.

Capital One's focus on responsible AI in a highly regulated environment matches my instinct around production AI: you build the eval suite before you trust the output, you version every config change so you can replay any decision, you build the human-approval gate before you remove it. That's the engineering discipline I've applied in production from day one.

I'm based in Michigan and open to relocating to New York or McLean.

Joshua Zimdars  
jzimdars@umich.edu · 734-730-9150  
jzimdars-rtg.github.io/portfolio · github.com/jzimdars-RTG

---

## ✍️ Common Application Questions

### "Tell us about yourself"
Production AI engineer, 18 months building LLM systems from the ground up. Fine-tuned and deployed a production parser model (Azure AI Foundry), built multi-agent LangGraph workflows (ReAct + self-reflection + HITL), built eval + regression pipelines, and engineered multi-provider fallback chains with health probes. Shipped 10+ production tools saving 2,800+ hours/year. U-M Sociology; all AI/engineering knowledge built in production.

### "Why Capital One?"
Capital One is building production agentic AI at scale in a regulated environment where correctness and explainability matter. That's the exact discipline I've applied building my own systems: golden-quote regression, config versioning so every decision is replayable, human-in-the-loop gates, per-call telemetry. I want to work on that problem at Capital One's scale.

### "Describe your LLM fine-tuning experience"
End-to-end pipeline: (1) harvested 100s of production quotes into training data, (2) ran eval on the base model to identify failure modes, (3) generated correction datasets from those failures, (4) submitted fine-tune job to Azure AI Foundry (gpt-4.1-mini), (5) evaluated fine-tuned model vs. base on a golden-quote test set, (6) shipped to production. The fine-tuned model runs at ~1–2s latency as the primary backend in a multi-provider fallback chain.

### "Describe your agentic AI experience"
Multi-agent LangGraph state graph: 14 routing nodes (trip type × vehicle class), parse node → reflect node (confidence threshold, max 2 retries) → human approval gate. ReAct retry edges, self-reflection loop, conditional routing based on state. Node-by-node progress streamed to browser via SSE. In production daily with sales and dispatch teams.

### "What's your experience with LLM eval and guardrails?"
Built a 15-spec Playwright eval suite: "golden quotes" harness locking pricing output against known-good fixtures, QuoteBot replay harness. Also built a correction-dataset pipeline where eval failures generate training data for the next fine-tune cycle. Per-call JSONL telemetry tracks accuracy, cost, and latency trends across production calls.

### "What's your experience with multi-provider LLM routing?"
Built a runtime-switchable fallback chain: fine-tuned Azure Foundry (gpt-4.1-mini, primary, ~1–2s) → OpenAI (secondary) → Kimi K2.6 (tertiary). Health probe reports which provider is live. A/B comparable backends — you can switch providers at runtime and compare output. The graph doesn't know which provider it's talking to; the abstraction is at the `llmClient` interface boundary.

---

## 🔑 Three Talking Points to Lead With

1. **"I built a full fine-tuning pipeline in production"** — Dataset harvesting → correction datasets from evals → Azure AI Foundry → golden-quote eval → production. End-to-end.

2. **"I built eval and governance from day one"** — Golden-quote regression, config versioning so every decision is replayable, human approval gate before auto-approval. Production AI discipline.

3. **"I shipped an agentic system that people depend on daily"** — Not a demo. Sales and dispatch teams use this every day. I can explain every design decision.

---

## 📋 Application Checklist

- [ ] Create Taleo/Oracle HCM account at capitalonecareers.com
- [ ] Apply: https://www.capitalonecareers.com/job/new-york/lead-ai-engineer-ai-foundations-llm-core-and-agentic-ai/1732/93698172720
- [ ] Upload resume PDF
- [ ] Paste cover letter above
- [ ] In location preference: note open to New York or McLean VA
- [ ] Portfolio: https://jzimdars-rtg.github.io/portfolio
- [ ] GitHub: https://github.com/jzimdars-RTG
