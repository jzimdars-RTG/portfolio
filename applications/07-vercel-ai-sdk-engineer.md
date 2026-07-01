# Vercel — Software Engineer, AI SDK
**Apply:** https://vercel.com/careers  
**Backup:** https://job-boards.greenhouse.io/vercel/jobs/5517523004  
**Location:** San Francisco, CA (hybrid) / Remote  
**Salary:** ~$160,000–$260,000 + equity  
**ATS:** Greenhouse

---

## 🎯 Why This Fits

Vercel's AI SDK is the developer-facing toolkit for building AI-powered web applications. The role involves:
- Building the AI SDK infrastructure (streaming, providers, tool-calling)
- Developer experience for AI-native web apps
- Node.js / TypeScript full-stack engineering
- Working with LLM provider APIs (OpenAI, Anthropic, Google, etc.)

Your match:
- You've built a vendor-agnostic LLM client abstraction with multi-provider routing — the same problem Vercel's AI SDK solves
- Production Node.js + React 19 experience
- LangGraph.js (JavaScript LangGraph) — you're in the exact ecosystem
- Your `jz-genai-agent-toolkit` is an SDK with a similar design philosophy to Vercel's AI SDK

---

## 📝 Cover Letter

Dear Vercel Hiring Team,

I'm applying for the Software Engineer, AI SDK role. I've been building in this exact space for 18 months: vendor-agnostic LLM client abstractions, multi-provider routing, streaming, and developer-facing agentic SDKs.

My open-source `jz-genai-agent-toolkit` is a vendor-agnostic LangGraph core in JavaScript and Python. The design philosophy is directly aligned with Vercel's AI SDK: a single `llmClient` interface that routes to Vertex AI (Gemini 2.0 Flash) or Azure AI Inference (Kimi-K2) — the graph never knows which provider it's talking to. Provider-switching is a config change, not a refactor. Multi-provider fallback activates on failure. The toolkit supports streaming (SSE), per-call observability (JSONL telemetry), and is designed to be consumed via git subtree rather than an npm package.

I've built on top of Vercel's AI SDK in my own production systems — I understand the DX decisions it makes and the patterns it enables. The streaming abstractions, the tool-calling interface, the provider adapters — I've built similar things from scratch, so I understand the tradeoffs at the implementation level.

On the full-stack side: React 19 + Node.js production systems, Azure App Service + Static Web Apps, REST APIs, Socket.io real-time, PowerShell CI/CD. I can own the full stack from SDK internals to the demo app that ships with a new feature.

I'm based in Michigan and open to relocating to San Francisco or working remotely.

Joshua Zimdars  
jzimdars@umich.edu · 734-730-9150  
jzimdars-rtg.github.io/portfolio · github.com/jzimdars-RTG

---

## ✍️ Common Application Questions

### "Tell us about yourself"
Production AI engineer, 18 months. Built a vendor-agnostic LLM SDK (`jz-genai-agent-toolkit`) with multi-provider routing, streaming, RAG, and observability. Built production LangGraph.js and LangGraph (Python) systems. Full-stack: Node.js, React 19, .NET 8, Azure. I build for other engineers the same way I'd want to use it.

### "Why Vercel?"
Vercel's AI SDK is the abstraction layer that lets web developers build AI-native apps without fighting provider APIs. That's the exact problem I've been solving for my own systems — and I've hit the same design decisions. I want to work on the SDK that other developers use, at the scale Vercel operates.

### "Describe a developer-facing SDK or tool you've built"
`jz-genai-agent-toolkit`: a vendor-agnostic LangGraph core in JS and Python. Single `llmClient` interface routing to Vertex AI or Azure AI Inference. Self-reflection loop. RAG (embeddings + cosine similarity, TF-IDF fallback). Human-in-the-loop gate. JSONL observability. Designed to be vendored via git subtree. The same patterns in both JS and Python because the teams I build for use both.

### "What's your experience with streaming / SSE?"
Built SSE streaming for the Quote Calculator's LangGraph node-by-node progress — the browser overlay visualizes each node firing as it happens. Also built Socket.io real-time backend for the shuttle tracking PWA (5K+ monthly users). Comfortable with streaming as a first-class design requirement.

### "What's your Node.js / JavaScript experience?"
Production Node.js systems: Quote Calculator proxy (Azure App Service), GenAI Agent Toolkit (LangGraph.js + Node 20+), shuttle tracking backend (Socket.io), Tigers booking platform. React 19 frontend. ES modules throughout. No build step on the Quote Calculator by design — I know when to use a bundler and when not to.

### "What's your open source experience?"
Maintainer of `jz-genai-agent-toolkit` at github.com/jzimdars-RTG/JZ-genai-. Active development. Both JS and Python implementations. Designed for adoption via git subtree. README-first engineering — "can another engineer understand this in 10 minutes" is my design bar.

---

## 🔑 Three Talking Points to Lead With

1. **"I've built the same abstraction Vercel's AI SDK provides"** — Vendor-agnostic `llmClient` interface, multi-provider routing, streaming, observability. I understand the design decisions at the implementation level.

2. **"I'm in the LangGraph.js ecosystem"** — LangGraph.js in production, Node 20+, React 19. I'm already building in the toolchain Vercel's AI SDK powers.

3. **"I design for other engineers"** — The toolkit is built to be handed to another engineer in 10 minutes. That's the same bar as a good SDK.

---

## 📋 Application Checklist

- [ ] Create Greenhouse account
- [ ] Apply: https://job-boards.greenhouse.io/vercel/jobs/5517523004 OR https://vercel.com/careers
- [ ] Upload resume PDF
- [ ] Paste cover letter above
- [ ] Link to `jz-genai-agent-toolkit` GitHub prominently
- [ ] Portfolio: https://jzimdars-rtg.github.io/portfolio
- [ ] GitHub: https://github.com/jzimdars-RTG
