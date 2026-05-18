# Cover Letter — Generative AI Forward Deployed Engineer, Google Cloud

**Joshua Zimdars** · Ann Arbor, MI · jzimdars@umich.edu · [Portfolio](https://jzimdars-rtg.github.io/portfolio)

---

Hiring team,

The job description for the GenAI Forward Deployed Engineer role reads like a description of what I have been doing — quietly, inside a 35-year-old transportation SMB — for the last eighteen months.

I am a Business Systems Specialist and Executive Assistant to the CEO/CFO at Golden Limousine International. The title undersells the work. I have shipped eight internal applications, including a production AI-assisted quoting platform that processes live customer emails through a LangGraph multi-agent workflow — Gemini 2.0 Flash on Vertex AI (with Azure AI Kimi as a swappable second provider), ReAct retry with self-reflection, human-in-the-loop approval, full LLM-native observability (per-call tokens, cost, latency, JSONL tracing). Median time-to-quote dropped from 20–34 minutes to 2–3 minutes. Pricing variance across reps went to zero.

The generic agentic core does not live in the company repo. I extracted it into a personal open-source project ([`jz-genai-agent-toolkit`](https://github.com/jzimdars19/jz-genai-agent-toolkit)) — vendor-agnostic, fully synthetic test fixtures, MIT-licensed — and the Golden Limo production stack now consumes it via git subtree. That separation is deliberate: it is exactly the "field insight → reusable module → formal product feature request" loop the JD describes, except I built it for myself before anyone asked.

What the JD calls "connective tissue" is the work I find most interesting. Frontier models are extraordinary; the production gap is in the integration complexity, the data readiness, the state management, the legacy APIs, the security perimeters, the humans who need to trust the output. Six weeks of sitting next to dispatchers until they preferred the new workflow taught me more about what "enterprise-grade maturity" means than any of the code.

I am not the standard candidate. My degree is in Sociology of Health and Medicine; my path to AI engineering is through having shipped it. I would welcome the chance to talk about whether the work I have done — and the way I think about doing it — is the kind of builder you are hiring.

Thank you for your time.

— Joshua Zimdars
