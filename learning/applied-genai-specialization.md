# Applied Generative AI Specialization — Complete Self-Study Guide

A deep, structured curriculum covering everything in the Applied GenAI program, with the best free and paid resources to watch, read, and practice. Built to give you the vocabulary, depth, and real projects to speak fluently about any of these topics in technical interviews — including Google Cloud FDE.

---

## 🗺️ The Full Curriculum Map

1. Foundations of AI & LLMs
2. Prompt Engineering
3. LangChain & Agentic Frameworks
4. RAG (Retrieval-Augmented Generation)
5. MCP (Model Context Protocol)
6. Claude Code & Copilot Development
7. Multimodal AI (Stable Diffusion, Vision)
8. Google Cloud Platform & Vertex AI *(priority for FDE role)*
9. Building & Shipping Real Projects

---

## 📚 UNIT 1 — Foundations of AI & LLMs

### What you need to understand:
- How transformers work (attention mechanism)
- How LLMs are trained (pre-training, fine-tuning, RLHF)
- Tokens, embeddings, temperature, top-p, context windows

### 🎥 Watch:
| Resource | Link | Why |
|---|---|---|
| 3Blue1Brown — Neural Networks series | youtube.com/3blue1brown | Best visual intuition for how NNs work |
| Andrej Karpathy — "Let's build GPT from scratch" | youtube.com/watch?v=kCc8FmEb1nY | The single best LLM deep dive that exists |
| Andrej Karpathy — "Intro to LLMs" | youtube.com/watch?v=zjkBMFhNj_g | 1-hour conceptual overview, perfect starting point |
| Stanford CS224N (NLP with Deep Learning) | web.stanford.edu/class/cs224n | Full university course, free lectures on YouTube |

### 📖 Read:
- "Attention Is All You Need" (original transformer paper) — arxiv.org/abs/1706.03762
- "The Illustrated Transformer" by Jay Alammar — jalammar.github.io/illustrated-transformer *(essential visual explainer)*
- "The Illustrated GPT-2" by Jay Alammar — jalammar.github.io/illustrated-gpt2
- Fast.ai Practical Deep Learning for Coders — course.fast.ai

### 🧠 Key concepts to explain out loud:
- What is an attention head and why does it matter?
- What's the difference between pre-training and fine-tuning?
- What does "temperature" actually control, in plain English?
- What is a token? Why do LLMs charge by token?
- What is a context window and what happens when you exceed it?

---

## 📚 UNIT 2 — Prompt Engineering

### What you need to understand:
- Zero-shot, few-shot, chain-of-thought (CoT) prompting
- ReAct, Tree of Thoughts, Self-Consistency
- System prompts, role prompting, prompt injection & security

### 🎥 Watch:
| Resource | Link |
|---|---|
| DeepLearning.AI — ChatGPT Prompt Engineering for Developers | deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers *(free, ~1.5 hrs)* |
| Andrew Ng — Prompt Engineering overview | DeepLearning.AI YouTube channel |

### 📖 Read:
- Anthropic Prompt Engineering Guide — docs.anthropic.com/en/docs/build-with-claude/prompt-engineering
- OpenAI Prompt Engineering Guide — platform.openai.com/docs/guides/prompt-engineering
- "Chain-of-Thought Prompting Elicits Reasoning" paper — arxiv.org/abs/2201.11903
- Prompt Engineering Guide (community) — promptingguide.ai *(extremely comprehensive)*

### 🛠️ Practice:
- OpenAI Playground — test prompting techniques live
- Anthropic Console — console.anthropic.com

### 🧠 Key concepts to explain out loud:
- What is chain-of-thought prompting and when does it help?
- What is few-shot prompting? Give a real example.
- What is ReAct and how does it combine reasoning + action?
- What is prompt injection and why is it a security concern in production?
- What's the difference between a system prompt and a user prompt?

---

## 📚 UNIT 3 — LangChain & Agentic Frameworks

### What you need to understand:
- Chains, agents, tools, memory
- LangGraph for stateful multi-agent workflows
- AutoGen, CrewAI as alternatives
- Agent patterns: ReAct, self-reflection, hierarchical delegation, human-in-the-loop

### 🎥 Watch:
| Resource | Link |
|---|---|
| LangChain official YouTube | youtube.com/@LangChain |
| Greg Kamradt — Practical LangChain tutorials | youtube.com/@DataIndependent |
| Sam Witteveen — LangChain & Agents deep dives | youtube.com/@samwitteveenai |
| DeepLearning.AI — LangChain for LLM App Development | deeplearning.ai/short-courses/langchain-for-llm-application-development *(free)* |
| DeepLearning.AI — LangGraph: Multi-Agent Workflows | deeplearning.ai/short-courses/ai-agents-in-langgraph *(free)* |

### 📖 Read:
- LangChain Docs — python.langchain.com/docs
- LangGraph Docs — langchain-ai.github.io/langgraph
- "ReAct: Synergizing Reasoning and Acting in LLMs" — arxiv.org/abs/2210.03629

### 🛠️ Practice Projects:
- Build a simple Q&A chatbot with memory
- Build an agent that can search the web + do math
- Build a multi-agent research pipeline with LangGraph

### 🧠 Key concepts to explain out loud:
- What is the difference between a chain and an agent?
- What is a LangGraph "graph" — what are nodes and edges in this context?
- What does "stateful" mean for a multi-agent workflow?
- What is human-in-the-loop and when would you use it in production?
- What is hierarchical delegation in a multi-agent system?
- How does self-reflection work as an agent pattern?

---

## 📚 UNIT 4 — RAG (Retrieval-Augmented Generation)

### What you need to understand:
- Embeddings & vector databases (Chroma, Pinecone, Weaviate, pgvector)
- Chunking strategies, semantic search
- Advanced RAG: re-ranking, hybrid search, HyDE
- Why RAG exists: solving context window limits and hallucination

### 🎥 Watch:
| Resource | Link |
|---|---|
| DeepLearning.AI — Building and Evaluating Advanced RAG | deeplearning.ai/short-courses/building-evaluating-advanced-rag *(free)* |
| Pinecone — RAG from scratch video series | youtube.com/@pinecone-io |
| Lance Martin (LangChain) — RAG from Scratch | LangChain YouTube channel |

### 📖 Read:
- "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks" — arxiv.org/abs/2005.11401 *(original RAG paper)*
- LlamaIndex RAG guide — docs.llamaindex.ai
- Pinecone Learning Center — pinecone.io/learn

### 🛠️ Practice Projects:
- RAG over your own PDF documents
- Build a customer support bot from a knowledge base
- Implement hybrid search (keyword + semantic)

### 🧠 Key concepts to explain out loud:
- What problem does RAG solve that fine-tuning doesn't?
- What is an embedding? What does cosine similarity measure?
- What is chunking and why does chunk size matter?
- What is hybrid search and when would you use it over pure semantic search?
- What is HyDE (Hypothetical Document Embeddings)?
- What is re-ranking and where does it fit in the RAG pipeline?

---

## 📚 UNIT 5 — MCP (Model Context Protocol)

### What you need to understand:
- What MCP is: an open standard for connecting LLMs to tools and data sources
- MCP servers, clients, transports (stdio, HTTP/SSE)
- The difference between MCP and function calling / tool use
- How to build and consume MCP servers
- Why MCP matters: the "USB standard" for AI integrations

### 🎥 Watch:
| Resource | Link |
|---|---|
| Anthropic MCP Introduction | youtube.com/@Anthropic — search "MCP" |
| Dave Ebbelaar — MCP tutorials | youtube.com/@daveebbelaar |
| Community explainers | Search YouTube: "Model Context Protocol explained" |

### 📖 Read:
- Official MCP Docs — modelcontextprotocol.io/introduction *(read the full intro)*
- Anthropic MCP announcement — anthropic.com/news/model-context-protocol
- MCP GitHub repo — github.com/modelcontextprotocol/servers *(read the reference implementations)*

### 🛠️ Practice Projects:
- Build a simple MCP server exposing a filesystem tool
- Connect Claude Desktop to a custom MCP server
- Build an MCP server that queries a database and exposes it to an LLM

### 🧠 Key concepts to explain out loud:
- What is MCP and why was it created?
- What is the difference between an MCP server and an MCP client?
- What are the three transport types (stdio, HTTP, SSE) and when would you use each?
- What is the difference between MCP "tools", "resources", and "prompts"?
- How does MCP differ from traditional function calling in the OpenAI/Anthropic API?
- Why does MCP matter for enterprise AI deployments specifically?
- What does it mean that MCP is "model-agnostic"?

---

## 📚 UNIT 6 — Claude Code & AI Copilot Development

### What you need to understand:
- Claude API (Messages API, streaming, tool use / function calling)
- Claude Code CLI — agentic coding workflows
- Building copilot-style tools: code review, code generation, repo Q&A

### 🎥 Watch:
| Resource | Link |
|---|---|
| Anthropic YouTube — Claude tutorials | youtube.com/@anthropic-ai |
| AI Jason — Claude + tool use tutorials | youtube.com/@AIJasonZ |

### 📖 Read:
- Anthropic Developer Docs — docs.anthropic.com *(especially Tool Use and Vision sections)*
- Claude Code Docs — docs.anthropic.com/en/docs/claude-code
- Anthropic Cookbook (GitHub) — github.com/anthropics/anthropic-cookbook

### 🧠 Key concepts to explain out loud:
- What is tool use (function calling) in the Claude API?
- What is Claude Code and how does it differ from using the API directly?
- What is streaming and why does it matter for UX in production AI apps?
- How do you implement a multi-turn conversation with memory using the Messages API?

---

## 📚 UNIT 7 — Multimodal AI (Images, Audio, Video)

### What you need to understand:
- Stable Diffusion / DALL-E — how diffusion models work
- Vision-language models (GPT-4o Vision, Gemini Vision, Claude 3 Vision)
- Text-to-speech, speech-to-text (Whisper)

### 🎥 Watch:
| Resource | Link |
|---|---|
| Computerphile — How diffusion models work | Search YouTube: "Computerphile diffusion models" |
| Andrej Karpathy — "Generative Models" lecture | CS231n Stanford, available on YouTube |
| Fast.ai — Stable Diffusion from scratch | course.fast.ai/Lessons/part2 |
| DeepLearning.AI — How Diffusion Models Work | deeplearning.ai/short-courses/how-diffusion-models-work *(free)* |

### 📖 Read:
- "High-Resolution Image Synthesis with Latent Diffusion Models" — arxiv.org/abs/2112.10752
- Hugging Face Diffusers docs — huggingface.co/docs/diffusers

### 🧠 Key concepts to explain out loud:
- What is a diffusion model and how does it generate images?
- What is a latent space?
- What is CLIP and how does it connect text to images?
- What is Whisper and what problem does it solve?

---

## 📚 UNIT 8 — Google Cloud Platform & Vertex AI *(Priority for FDE Role)*

### What you need to understand:
- Vertex AI: Gemini models, text-embedding-004, Model Garden, Agent Builder
- GCP core services: Cloud Run, Cloud Functions, BigQuery, Pub/Sub, Cloud Storage
- Vertex AI Grounding and RAG on GCP
- Azure OpenAI Service (for breadth — you already have this)

### 🎥 Watch:
| Resource | Link |
|---|---|
| Google Cloud Skills Boost — GenAI learning path | cloudskillsboost.google/paths/118 *(free + hands-on labs)* |
| Google Cloud YouTube — Vertex AI tutorials | youtube.com/@googlecloud |
| Microsoft — Azure OpenAI Getting Started | learn.microsoft.com/en-us/azure/ai-services/openai |
| John Savill's Azure AI series | youtube.com/@NTFAQGuy |

### 📖 Read:
- Vertex AI Docs — cloud.google.com/vertex-ai/docs
- Google Cloud GenAI samples — github.com/GoogleCloudPlatform/generative-ai
- Microsoft Azure AI Fundamentals (AI-900) — free on Microsoft Learn
- Azure OpenAI cookbook — github.com/Azure-Samples/openai

### 🎓 Free Certifications:
- Google Cloud Digital Leader — cloud.google.com/learn/certification/cloud-digital-leader
- Microsoft Azure AI Fundamentals (AI-900) — learn.microsoft.com

### 🧠 Key concepts to explain out loud:
- What is Vertex AI and how does it relate to Google Cloud broadly?
- What is the difference between Gemini 2.0 Flash and Gemini 1.5 Pro — when would you use each?
- What is text-embedding-004 and what is it used for?
- What is Cloud Run and when would you deploy an AI app there vs App Engine?
- What is BigQuery and how could it feed into an AI pipeline?
- What is Vertex AI Agent Builder and what does "grounding" mean?
- What is Pub/Sub and where would you use it in an agentic workflow?

---

## 📚 UNIT 9 — Full Projects to Build (Capstone-Level)

Build these progressively. Each one gives you something concrete to walk through in interviews.

| # | Project | Skills Covered |
|---|---|---|
| 1 | PDF Chatbot | RAG, embeddings, vector DB, LangChain |
| 2 | Web Research Agent | Agents, tools, ReAct, LangGraph |
| 3 | Code Review Copilot | Claude API, tool use, GitHub API |
| 4 | Customer Support Bot | RAG, memory, eval pipeline |
| 5 | Image Generation App | Stable Diffusion, multimodal |
| 6 | Multi-Agent Data Analyst | LangGraph, multi-agent orchestration |
| 7 | MCP Server + Client | MCP, tool exposure, Claude Desktop |
| 8 | Full-Stack AI SaaS App | FastAPI + Next.js + GCP/Vertex AI deployment |

---

## 🎓 Best Structured Free Courses (Do These In Order)

**DeepLearning.AI Short Courses (all free)** — deeplearning.ai/short-courses

1. ChatGPT Prompt Engineering for Developers
2. LangChain for LLM App Development
3. Building Systems with the ChatGPT API
4. LangGraph: AI Agents in LangGraph
5. Building and Evaluating Advanced RAG
6. How Diffusion Models Work

**Other essentials (all free):**
- Hugging Face NLP Course — huggingface.co/learn/nlp-course
- Fast.ai Practical Deep Learning — course.fast.ai
- Google Cloud GenAI learning path — cloudskillsboost.google/paths/118

---

## 🗞️ Stay Current

| Type | Resource |
|---|---|
| Newsletter | The Batch by Andrew Ng — deeplearning.ai/the-batch |
| Newsletter | TLDR AI — tldr.tech/ai |
| Newsletter | Ahead of AI by Sebastian Raschka — magazine.sebastianraschka.com |
| Papers | Arxiv Sanity — arxiv-sanity-lite.com |
| Community | r/LocalLLaMA on Reddit |
| Community | Hugging Face Discord |
| X/Twitter | @karpathy, @ylecun, @sama, @AnthropicAI, @LangChainAI, @googlecloud |

---

## 🏁 Suggested 16-Week Study Schedule

| Weeks | Focus |
|---|---|
| 1–2 | LLM Foundations — Karpathy videos + Illustrated Transformer |
| 3–4 | Prompt Engineering — DeepLearning.AI courses + promptingguide.ai |
| 5–7 | LangChain + Agents + LangGraph — build a working agent |
| 8–9 | RAG — build a PDF chatbot end to end |
| 10–11 | MCP — read full docs, build a custom MCP server |
| 12–13 | GCP / Vertex AI deep dive — complete Google Cloud Skills Boost GenAI path |
| 14–16 | Capstone: multi-agent system on Vertex AI with an MCP server |

---

## 💬 How to Use This for Interview Prep

For every unit, the goal isn't to memorize — it's to be able to:

1. **Explain the concept in plain English** to a non-technical person
2. **Explain the concept technically** to an engineer (name the mechanisms)
3. **Give a real example** from something you built or studied
4. **Name the tradeoffs** — when would you use this vs something else?

The "Key concepts to explain out loud" sections in each unit are your interview prep checklist. If you can answer all of them fluently, you can hold your own in any GenAI technical conversation — including a Google Cloud FDE interview.
