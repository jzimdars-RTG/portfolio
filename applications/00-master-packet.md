# Master Application Packet — Joshua Zimdars
*Use this file for any application. Customize the "Why [Company]" section only.*

---

## 📞 Phone Screen Script — "Tell Me About Yourself" (60 seconds)

> "I'm a production AI engineer. For the past 18 months I've been the sole engineer at a 100-market ground transportation company, building LLM systems from the ground up — no team, no playbook, real users depending on the output daily.
>
> The main system I've built is called the Quote Calculator: it takes an inbound customer email, parses it with a fine-tuned LLM I trained on Azure AI Foundry, routes it through a LangGraph multi-agent graph, and outputs a structured quote. Median quote time went from 20–34 minutes to 2–3 minutes. It's in active daily use.
>
> I've also built the eval infrastructure: a Playwright regression suite with golden-output fixtures, JSONL telemetry tracking tokens/cost/latency p50/p95 per node, and a correction-dataset pipeline from eval failures back to fine-tuning.
>
> I have a Sociology degree from U-M — not CS — but everything I know about AI engineering I built in production. I'm not transitioning into this field. I'm already in it."

---

## 📧 Cold Outreach / LinkedIn Message Template

> Hi [Name],
>
> I'm a production AI engineer with 18 months of hands-on experience building LangGraph multi-agent systems, fine-tuning LLMs on Azure AI Foundry, and shipping AI tools to non-technical users. I've been following [Company] for [specific reason] and noticed [specific role].
>
> My strongest differentiator: I've built a production agentic system that real teams use daily, including the eval pipeline and observability layer — not just the demo. Portfolio: jzimdars-rtg.github.io/portfolio
>
> Would a 15-minute call be worth your time?
>
> Joshua

---

## 🔑 Master Answer Bank

### "Walk me through a project you're proud of"
The Quote Calculator at Golden Limousine International. It started as a single-prompt LLM call to parse customer emails. Today it's a production multi-agent LangGraph state graph — fine-tuned gpt-4.1-mini parser (Azure AI Foundry), 14 routing nodes across trip types and vehicle classes, ReAct retry, self-reflection, human-in-the-loop, multi-provider fallback chain. 15-spec eval suite, JSONL telemetry, live trace overlay. Median quote time: 20–34 min → 2–3 min. The thing I'm proudest of isn't the architecture — it's that dispatchers who preferred the old workflow for six weeks now use the new one every day. Adoption is the actual output.

### "What's your biggest technical achievement?"
Building an end-to-end LLM fine-tuning pipeline from scratch: harvesting production quotes into training data, generating correction datasets from eval failures, submitting fine-tune jobs to Azure AI Foundry, evaluating the fine-tuned model vs. the base on a golden-quote test set, and shipping to production. The fine-tuned gpt-4.1-mini runs at ~1–2s latency. Most engineers I've talked to have used pre-trained models — they haven't built the pipeline that creates them.

### "Tell me about a time you failed / got something wrong"
I shipped the AI email parser before I instrumented it. I lost a month before I added field-level logging and discovered the parser was reliably wrong on multi-leg event itineraries. I fixed it with a specialized second prompt — but the lesson is: build the observability before you ship, not after you notice the problem. That's now my default. JSONL telemetry is a first-class design requirement, not an afterthought.

### "How do you handle working with non-technical stakeholders?"
I spent six weeks sitting next to dispatchers at the dispatch desk to understand why they weren't adopting the new workflow. The biggest adoption lift came from moving one button's position. That's the actual lesson: the technical system being correct is table stakes. Understanding how people actually work — their habits, their anxieties, what they're optimizing for — is the job. My Sociology degree turned out to be useful for this.

### "What's your experience with prompt engineering?"
Production prompt engineering across multiple models and domains: email parsing (structured JSON extraction from unstructured text), self-reflection scoring (confidence threshold 0.7), multi-leg itinerary handling (specialized second prompt after discovering base failure mode), correction prompts (max 2 retries before human gate), RAG context injection (top-K chunks from Vertex AI embeddings). I've versioned every prompt change and tracked the eval impact.

### "Why do you want to leave your current role?"
I've built a production AI platform at GLI from scratch and driven it to daily adoption. I've proved I can do this solo. Now I want to do it with a team, at larger scale, with harder problems and more experienced peers. I've learned as much as I can learn without working alongside other AI engineers.

### "What are your salary expectations?"
I'm targeting $150,000–$200,000 base, depending on the role, company stage, and total comp package (equity, benefits). I'm flexible — what matters most to me is the work and the team.

### "Are you open to relocation?"
Yes — I'm based in Ann Arbor, Michigan and open to relocating anywhere for the right role. San Francisco, New York, LA, Seattle, Boston — all fair game.

### "Why AI engineering specifically?"
Because I started building things that solved real problems and kept running into the same pattern: the most useful tool I could give someone was one that understood their context and reasoned about it. I built a quote calculator that reads emails. I built a RAG assistant over a knowledge base. Every time I added an AI capability the adoption impact was 10x a traditional automation. I'm not in AI because it's trendy — I'm in it because it's the most effective tool I've found for the problems I care about.

---

## 🏃 Quick-Apply List (No Cover Letter Required — Just Resume + Links)

For these roles, paste a 2-sentence "why me" in the message/notes field instead of a full cover letter:

> "Production AI engineer: fine-tuned gpt-4.1-mini on Azure AI Foundry, built multi-agent LangGraph systems, shipped eval + observability pipelines. 18 months sole engineer at a live company — portfolio at jzimdars-rtg.github.io/portfolio."

| Company | Role | Apply |
|---|---|---|
| Planera | Senior AI Agent Engineer | https://jobs.lever.co/planera/7c093176-3b7e-4603-8ca0-02d51b9aecf4 |
| Simfluent | AI Engineer | https://jobs.lever.co/Simfluent/001b9022-f3fd-450a-9948-cc8bc565d913 |
| RYZ Labs | Full Stack AI Engineer | https://jobs.lever.co/ryzlabs/340f70d9-7018-41e7-b8ee-ca85165367aa |
| ValGenesis | AI/ML Engineer | https://jobs.lever.co/valgenesis/71c1f6d6-2a22-437c-abe2-bfeb362f58cc |
| American Express | AI Engineer III | https://careers.americanexpress.com (search "AI Engineer") |
| Retool | AI Engineer | https://retool.com/careers |
| Notion | Software Engineer (AI) | https://www.notion.com/careers |
| HubSpot | AI Engineer | https://www.hubspot.com/careers/jobs/all |
| Intercom | AI Engineer – Fin AI | https://www.intercom.com/careers |
| Linear | AI Engineer | https://linear.app/careers |
| Airtable | AI Engineer | https://airtable.com/careers |
| Cursor | AI Engineer | https://www.cursor.com/careers |
| Instacart | ML Engineer | https://instacart.careers |
| DoorDash | ML Engineer | https://careersatdoordash.com |
| Shopify | AI Engineer | https://www.shopify.com/careers |
| Together AI | AI Engineer | https://www.together.ai/careers |
| Groq | AI Engineer | https://groq.com/careers |
| Weights & Biases | AI Engineer | https://wandb.ai/site/company/careers |
| Scale AI | AI Engineer | https://scale.com/careers |

---

## 📋 ATS Account Setup Checklist (Do This Once)

| ATS | Used By | Create Account |
|---|---|---|
| **Ashby** | LangChain, many startups | jobs.ashbyhq.com |
| **Greenhouse** | NYT, Glean, Anthropic, Vercel, LangChain | greenhouse.io |
| **Lever** | AppZen, Planera, Simfluent, RYZ Labs | lever.co |
| **Workday** | Disney, Warner Bros, Condé Nast, Oracle | disneycareers.com (create once) |
| **Taleo/Oracle HCM** | Capital One, American Express, JPMorgan | capitalonecareers.com |
| **Bloomberg Careers** | Bloomberg | careers.bloomberg.com |
| **Samsara portal** | Samsara | samsara.com/company/careers |

---

## 🔗 Your Standard Links (Copy-Paste These Everywhere)

- **Portfolio:** https://jzimdars-rtg.github.io/portfolio
- **GitHub:** https://github.com/jzimdars-RTG
- **GenAI Toolkit:** https://github.com/jzimdars-RTG/JZ-genai-
- **LinkedIn:** https://linkedin.com/in/joshua-zimdars-1321a624b
- **Email:** jzimdars@umich.edu
- **Phone:** 734-730-9150
- **Location:** Ann Arbor, MI — **open to relocation nationwide**

---

## 📊 Application Tracker

| # | Company | Role | Date Applied | ATS | Status | Notes |
|---|---|---|---|---|---|---|
| 1 | LangChain | Deployed Engineer | | Ashby | | |
| 2 | Samsara | AI Engineer IV | | Portal | | |
| 3 | Disney | Sr. SW Eng AI & Observability | | Workday | | |
| 4 | Capital One | Lead AI Engineer Agentic AI | | Taleo | | |
| 5 | NYT | Sr. Eng Developer Platforms GenAI | | Greenhouse | | |
| 6 | Glean | ML Engineer LLM Evals | | Greenhouse | | |
| 7 | Vercel | SW Engineer AI SDK | | Greenhouse | | |
| 8 | Anthropic | Applied AI Engineer | | Greenhouse | | |
| 9 | AppZen | AI Engineer | | Lever | | |
| 10 | Bloomberg | Senior ML Platform Engineer | | Bloomberg | | |
| 11 | Planera | Senior AI Agent Engineer | | Lever | | |
| 12 | American Express | AI Engineer III | | Taleo | | |
| 13 | Retool | AI Engineer | | | | |
| 14 | Notion | Software Engineer (AI) | | | | |
| 15 | HubSpot | AI Engineer | | | | |
| 16 | Intercom | AI Engineer | | | | |
| 17 | Simfluent | AI Engineer | | Lever | | |
| 18 | Cursor | AI Engineer | | | | |
| 19 | Linear | AI Engineer | | | | |
| 20 | Together AI | AI Engineer | | | | |
