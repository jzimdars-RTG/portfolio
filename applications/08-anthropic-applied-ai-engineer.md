# Anthropic — Applied AI Engineer / Software Engineer
**Apply:** https://www.anthropic.com/careers/jobs  
**Location:** San Francisco, CA  
**Salary:** ~$180,000–$280,000 + equity  
**ATS:** Greenhouse

---

## 🎯 Why Apply

Anthropic builds Claude, which you use in production. Applied AI Engineer roles at Anthropic focus on:
- Building internal AI tools and workflows using Claude
- Evaluating model outputs and building eval infrastructure
- Bridging the gap between research models and real-world applications
- Contributing to safety, reliability, and measurement

Your match:
- You use Claude in production (multi-provider routing includes Claude)
- LLM eval infrastructure is your strongest differentiator
- Production agentic systems with full lifecycle ownership
- Your Sociology background is actually an asset at a safety-focused org — you think about how AI affects people

**Honest gap:** Anthropic typically hires at Senior+ level or researchers with published work. You're likely applying below the bar on credentials. However: your production track record + eval pipeline + open-source toolkit is a stronger application than many theoretical candidates. Apply and let the screening decide.

---

## 📝 Cover Letter

Dear Anthropic Hiring Team,

I'm applying because I've spent the past 18 months building production AI systems using Claude, evaluating their output quality, and thinking about what "working correctly" means for agentic AI — which turns out to be exactly the question Anthropic is trying to answer.

I use Claude as one of the providers in my multi-provider LLM routing chain at Golden Limousine International. My fine-tuned gpt-4.1-mini is the primary backend; Claude is available as a fallback and for specific tasks where its reasoning depth is worth the latency. That means I've been thinking about when Claude is the right tool, what it does better than other models, and how to evaluate its output in a domain-specific context.

The eval work I've done is directly aligned with Anthropic's focus: I built a self-reflection loop that scores LLM output confidence before passing it downstream (the pattern for reducing hallucinations without human review on every call). I built a golden-output regression suite so prompt changes don't silently degrade quality. I built a correction-dataset pipeline from eval failures back to fine-tuning. These aren't academic exercises — they're production safeguards for a system that real people depend on daily.

I want to be direct about one thing: I don't have a PhD or published research. What I have is 18 months of building production AI systems with real users, real eval requirements, and real consequences when something breaks. My Sociology degree means I think about AI's effects on people as a first-order concern, not an afterthought — which I believe is aligned with why Anthropic exists.

I'm open to relocating to San Francisco.

Joshua Zimdars  
jzimdars@umich.edu · 734-730-9150  
jzimdars-rtg.github.io/portfolio · github.com/jzimdars-RTG

---

## ✍️ Common Application Questions

### "Tell us about yourself"
Production AI engineer. 18 months building LLM systems, eval pipelines, agentic orchestration, and observability from scratch at a live company. I use Claude in production. My background is Sociology from U-M — I think about how AI affects people as a first-order concern. I've built eval infrastructure because I believe you can't trust what you can't measure.

### "Why Anthropic?"
Anthropic's core question — how do you build AI that is reliable, safe, and beneficial — is the same question I've been asking in production. Not theoretically. If my eval suite doesn't catch a regression, real users get wrong quotes. That's a small-stakes version of the problem Anthropic is solving at large scale. I want to work on the larger version.

### "What's your experience evaluating LLM outputs?"
Golden-quote regression harness (15 Playwright specs), self-reflection confidence scoring node, correction-dataset pipeline from eval failures to fine-tuning, per-call JSONL telemetry tracking accuracy/cost/latency trends. I've also built multi-provider A/B comparison infrastructure — you can switch backends at runtime and compare output quality across providers.

### "What's your experience with Claude specifically?"
I route to Claude as part of a multi-provider fallback chain (Azure AI Foundry → OpenAI → Claude depending on task and latency requirements). I've evaluated Claude's output vs. other models on domain-specific tasks. I've used Claude for reasoning-heavy subtasks where its depth is worth the tradeoff. I'm familiar with its API, its prompt engineering patterns, and its behavior under edge cases.

### "What makes you different from other applicants?"
I've shipped production AI systems with real users, real eval requirements, and real consequences. Most applicants at AI labs either have research backgrounds (theory-heavy, limited production experience) or senior engineering backgrounds (production-heavy, limited AI depth). I have 18 months of production AI engineering and deep interest in the safety/eval questions that define Anthropic's mission.

---

## 🔑 Three Talking Points to Lead With

1. **"I use Claude in production"** — Not as a chatbot. As one provider in a multi-provider routing chain, evaluated against alternatives on domain-specific tasks.

2. **"I've built eval infrastructure because I believe in it"** — Not because a ticket said to. Golden-output regression, self-reflection scoring, correction-dataset loop. Production safety discipline.

3. **"My Sociology background is relevant here"** — Anthropic's safety mission is fundamentally about how AI affects people. A Sociology degree from U-M means I think about that as a first-order concern.

---

## 📋 Application Checklist

- [ ] Create Greenhouse account
- [ ] Apply: https://www.anthropic.com/careers/jobs (look for Applied AI Engineer, Software Engineer, or Research Engineer)
- [ ] Upload resume PDF
- [ ] Paste cover letter above
- [ ] Note: willingness to relocate to San Francisco
- [ ] Portfolio: https://jzimdars-rtg.github.io/portfolio
- [ ] GitHub: https://github.com/jzimdars-RTG
