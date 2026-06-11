# Cover Letter — [Target Company Cloud], Generative AI Forward Deployed Engineer
Joshua Zimdars

---

I have spent the last 18 months doing exactly the job you posted.

The role involved directly addressing customer challenges by identifying integration issues and data readiness gaps that were blocking AI implementation. I developed the necessary solutions and remained engaged until the new systems were fully implemented and operational. This experience occurred while I served as the sole engineer at a long-established ground transportation company that lacked a robust technical infrastructure, requiring a hands-on approach to problem-solving.

The degree on my resume says Sociology. I'm not going to pretend that's a small thing to overlook. What I'll ask you to do instead is look at what I actually built.

I designed and shipped a production agentic quoting system — Gemini 2.0 Flash on Vertex AI, a LangGraph multi-agent graph covering 14 trip types and 14 vehicle classes, structured output piped directly into the sales workflow. It is in active daily use. Partway through, I discovered the model was reliably wrong on multi-leg itineraries. I didn't patch around it. I built a Playwright-based eval pipeline across 12 parser scenarios, ran it against the failure cases, re-prompted against the output, and didn't ship until accuracy hit the threshold I'd set. That is a full observability-and-correction loop on a live agentic system. That is also precisely what you described in the responsibilities section of this posting.

I also built the toolkit I wished existed: a vendor-agnostic LangGraph core in JavaScript and Python, with multi-provider routing, ReAct, self-reflection, hierarchical delegation, RAG retrieval over Vertex AI embeddings, and human-in-the-loop checkpointing. I open-sourced it not because it was finished, but because the patterns I kept rebuilding from scratch needed a home. That instinct — turning a recurring field friction point into a reusable module — is the exact feedback loop your job description says an FDE should be providing to [Target Company]'s engineering teams.

The honest gap in my profile is this: I have one customer, deeply. A Forward Deployed Engineer works across many. I know that. What 18 months inside one non-technical organization gave me is something that's actually hard to simulate from the outside: I know what it costs a company to trust a system enough to run their business on it. I've sat in the room when the model was wrong, watched the dispatch team lose confidence, and rebuilt that trust line by line. I understand that the job isn't done when the demo works. It's done when the people who never asked for AI would rather have it than not.

I want to bring that to [Target Company Cloud] customers at scale, with Gemini, Vertex AI, and the full platform behind me — not as an aspirational goal, but as the logical next step from where I already am.

I am not a candidate who checked the boxes on a degree requirement.
I am a candidate who has been doing the job.

I'd welcome the conversation.

Joshua Zimdars  
[LinkedIn] · [jzimdars-rtg.github.io/portfolio](https://jzimdars-rtg.github.io/portfolio)
