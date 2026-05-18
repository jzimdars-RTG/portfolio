# Cover Letter — Generative AI Forward Deployed Engineer, Google Cloud

**Joshua Zimdars** · Ann Arbor, MI · jzimdars@umich.edu · [Portfolio](https://jzimdars-rtg.github.io/portfolio) · [GitHub](https://github.com/jzimdars-RTG)

---

Hiring team,

The job description for the GenAI Forward Deployed Engineer role reads like a description of what I have been doing — embedded, inside a production environment, against real customer infrastructure — for the last eighteen months.

I am a Business Systems Specialist and Executive Assistant to the CEO/CFO at Golden Limousine International. The title undersells the work. I function as a forward-deployed builder: I identify the blockers preventing AI from reaching production maturity, write the code to remove them, and stay embedded until teams adopt what was shipped. I have shipped eight internal applications, including a production agentic LLM workflow — the Quote Calculator — that parses inbound customer emails with Gemini 2.0 Flash on Vertex AI, routes through a LangGraph multi-agent graph with ReAct and self-reflection, and runs in daily use by sales and dispatch. It cut median time-to-quote from 20–34 minutes to 2–3 minutes.

After shipping it, I discovered that the LLM parser was silently wrong on a specific input class — multi-leg event itineraries. I hadn't instrumented it before going live. I fixed that by building a Playwright-based LLM eval pipeline across 12 scenarios, identified the failure mode, re-prompted against the eval output, and raised accuracy to production standard. That experience — instrumenting, measuring, and improving an agentic system under real load — is the one I'd replicate on every customer engagement.

The reusable patterns from that work live in [`jz-genai-agent-toolkit`](https://github.com/jzimdars-RTG/JZ-genai-): an open-source vendor-agnostic agentic core in both JavaScript (LangGraph.js) and Python (LangGraph + langchain-google-vertexai). It includes multi-provider LLM routing with Vertex AI / Azure AI fallover, a self-reflection loop, RAG retrieval grounded in Vertex AI text-embedding-004, a human-in-the-loop approval gate, and per-call LLM-native observability — tokens, cost-per-request, latency, p50/p95 — emitted as JSONL on every run. This is the instrumentation layer I'd embed in every customer deployment.

What the JD calls "connective tissue" is the work I find most interesting. Frontier models are extraordinary; the production gap is in the integration complexity, the data readiness, and the state management that keeps AI from reaching enterprise-grade maturity. I have been solving that gap — against legacy systems, non-technical operators, and real cost constraints — since before I had a framework for naming it. The feedback loop runs the other direction too: I convert what I observe in the field into reusable modules and documented patterns. That is the dual purpose the role describes.

I am not the standard candidate. My degree is in Sociology of Health and Medicine; my path to AI engineering is through having shipped it. I would welcome the chance to show you the work and talk about whether the fit is right.

Thank you for your time.

— Joshua Zimdars
