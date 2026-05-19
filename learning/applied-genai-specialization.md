# Applied Generative AI Specialization — Self-Study Roadmap
*Joshua Zimdars · In Progress*

This is my structured self-study curriculum for the Applied Generative AI Specialization. I'm documenting this publicly because I believe in showing the work — not just the output. Each unit maps directly to skills I'm applying (or have already applied) in production.

---

## Curriculum Map

1. [Foundations of AI & LLMs](#unit-1--foundations-of-ai--llms)
2. [Prompt Engineering](#unit-2--prompt-engineering)
3. [LangChain & Agentic Frameworks](#unit-3--langchain--agentic-ai-frameworks)
4. [RAG (Retrieval-Augmented Generation)](#unit-4--rag-retrieval-augmented-generation)
5. [MCP (Model Context Protocol)](#unit-5--mcp-model-context-protocol)
6. [Claude Code & Copilot Development](#unit-6--claude-code--ai-copilot-development)
7. [Multimodal AI](#unit-7--multimodal-ai-images-audio-video)
8. [Azure OpenAI & Cloud Deployment](#unit-8--azure-openai--cloud-deployment)
9. [Capstone Projects](#unit-9--capstone-projects)

---

## Unit 1 — Foundations of AI & LLMs

**What I need to understand:**
- How transformers work (attention mechanism)
- How LLMs are trained (pre-training, fine-tuning, RLHF)
- Tokens, embeddings, temperature, top-p, context windows

**Why it matters to me:** I'm already calling Gemini 2.0 Flash in production. Understanding what's happening under the hood — why temperature affects structured output reliability, why context window size affects multi-leg itinerary parsing — makes me a better builder, not just an API consumer.

**Watch:**
| Resource | Link |
|---|---|
| 3Blue1Brown — Neural Networks series | youtube.com/3blue1brown |
| Andrej Karpathy — "Let's build GPT from scratch" | youtube.com/watch?v=kCc8FmEb1nY |
| Andrej Karpathy — "Intro to LLMs" | youtube.com/watch?v=zjkBMFhNj_g |
| Stanford CS224N (NLP with Deep Learning) | web.stanford.edu/class/cs224n |

**Read:**
- "Attention Is All You Need" — arxiv.org/abs/1706.03762
- "The Illustrated Transformer" by Jay Alammar — jalammar.github.io/illustrated-transformer
- "The Illustrated GPT-2" by Jay Alammar — jalammar.github.io/illustrated-gpt2
- fast.ai Practical Deep Learning — course.fast.ai

---

## Unit 2 — Prompt Engineering

**What I need to understand:**
- Zero-shot, few-shot, chain-of-thought (CoT) prompting
- ReAct, Tree of Thoughts, Self-Consistency
- System prompts, role prompting, prompt injection/security

**Why it matters to me:** I already do this in production — I re-prompted against eval output to hit accuracy thresholds on the Quote Calculator. This unit formalizes the instincts I've developed and gives me language to describe them precisely.

**Watch:**
| Resource | Link |
|---|---|
| DeepLearning.AI — ChatGPT Prompt Engineering for Developers | deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers |
| Andrew Ng — Prompt Engineering overview | DeepLearning.AI YouTube |

**Read:**
- Anthropic Prompt Engineering Guide — docs.anthropic.com/en/docs/build-with-claude/prompt-engineering
- OpenAI Prompt Engineering Guide — platform.openai.com/docs/guides/prompt-engineering
- "Chain-of-Thought Prompting Elicits Reasoning" — arxiv.org/abs/2201.11903
- Prompt Engineering Guide — promptingguide.ai

**Practice:** OpenAI Playground · Anthropic Console

---

## Unit 3 — LangChain & Agentic AI Frameworks

**What I need to understand:**
- Chains, agents, tools, memory
- LangGraph for stateful multi-agent workflows
- AutoGen, CrewAI, LlamaIndex as alternatives

**Why it matters to me:** LangGraph is the core of my production Quote Calculator and my open-source `jz-genai-agent-toolkit`. This unit deepens my understanding of the state machine primitives, checkpointing, and multi-agent delegation patterns I'm already using — and introduces me to the broader framework ecosystem I'd need to navigate as an FDE across different customer stacks.

**Watch:**
| Resource | Link |
|---|---|
| LangChain official YouTube | youtube.com/@LangChain |
| Greg Kamradt — Practical LangChain | youtube.com/@DataIndependent |
| Sam Witteveen — LangChain & Agents deep dives | youtube.com/@samwitteveenai |
| DeepLearning.AI — LangChain for LLM App Development | deeplearning.ai/short-courses/langchain-for-llm-application-development |
| DeepLearning.AI — LangGraph Multi-Agent Workflows | deeplearning.ai/short-courses/ai-agents-in-langgraph |

**Read:**
- LangChain Docs — python.langchain.com/docs
- LangGraph Docs — langchain-ai.github.io/langgraph
- "ReAct: Synergizing Reasoning and Acting in LLMs" — arxiv.org/abs/2210.03629

**Practice Projects:**
- Simple Q&A chatbot with memory
- Agent that can search the web + do math
- Multi-agent research pipeline with LangGraph

---

## Unit 4 — RAG (Retrieval-Augmented Generation)

**What I need to understand:**
- Embeddings & vector databases (Chroma, Pinecone, Weaviate, pgvector)
- Chunking strategies, semantic search
- Advanced RAG: re-ranking, hybrid search, HyDE

**Why it matters to me:** I've already implemented RAG retrieval using Vertex AI `text-embedding-004` + cosine similarity in my agent toolkit. This unit pushes me beyond basic semantic search into production-grade retrieval — re-ranking, hybrid search, and evaluation — which is where real customer RAG deployments break down.

**Watch:**
| Resource | Link |
|---|---|
| DeepLearning.AI — Building and Evaluating Advanced RAG | deeplearning.ai/short-courses/building-evaluating-advanced-rag |
| Pinecone — RAG from scratch | youtube.com/@pinecone-io |
| Lance Martin (LangChain) — RAG from Scratch | LangChain YouTube |

**Read:**
- Original RAG paper — arxiv.org/abs/2005.11401
- LlamaIndex RAG guide — docs.llamaindex.ai
- Pinecone Learning Center — pinecone.io/learn

**Practice Projects:**
- RAG over personal PDF documents
- Customer support bot from a knowledge base
- Hybrid search (keyword + semantic)

---

## Unit 5 — MCP (Model Context Protocol)

**What I need to understand:**
- What MCP is: a standard protocol for connecting LLMs to external tools and data sources
- MCP servers, clients, transports (stdio, HTTP/SSE)
- How to build, host, and consume MCP servers
- Why MCP matters: it's becoming the standard "connective tissue" layer between frontier models and enterprise data systems — exactly what FDEs build

**Why it matters to me:** The Google Cloud FDE job description specifically calls out MCP servers as a production deliverable. This is the protocol layer that replaces one-off custom integrations with a standardized, reusable connection model. Understanding it deeply means I can build integrations that are maintainable and hand-offable — not just ones that work once.

**Watch:**
| Resource | Link |
|---|---|
| Anthropic MCP Introduction | youtube.com/@Anthropic |
| Dave Ebbelaar — MCP tutorials | youtube.com/@daveebbelaar |
| Community explainers — "MCP explained" | YouTube search |

**Read:**
- Official MCP Docs — modelcontextprotocol.io/introduction *(start here)*
- Anthropic MCP announcement — anthropic.com/news/model-context-protocol
- MCP reference implementations — github.com/modelcontextprotocol/servers

**Practice Projects:**
- MCP server exposing a filesystem tool
- Connect Claude Desktop to a custom MCP server
- MCP server that queries a live database

---

## Unit 6 — Claude Code & AI Copilot Development

**What I need to understand:**
- Claude API: Messages API, streaming, tool use
- Claude Code CLI for agentic coding workflows
- Building copilot-style development tools

**Watch:**
| Resource | Link |
|---|---|
| Anthropic YouTube | youtube.com/@anthropic-ai |
| AI Jason — Claude tool use | youtube.com/@AIJasonZ |

**Read:**
- Anthropic Developer Docs — docs.anthropic.com
- Claude Code Docs — docs.anthropic.com/en/docs/claude-code
- Anthropic Cookbook — github.com/anthropics/anthropic-cookbook

---

## Unit 7 — Multimodal AI (Images, Audio, Video)

**What I need to understand:**
- How diffusion models work (Stable Diffusion / DALL-E)
- Vision-language models (GPT-4o Vision, Claude 3 Vision, LLaVA)
- Text-to-speech, speech-to-text (Whisper)

**Watch:**
| Resource | Link |
|---|---|
| Computerphile — How diffusion models work | YouTube search |
| fast.ai — Stable Diffusion from scratch | course.fast.ai/Lessons/part2 |
| DeepLearning.AI — How Diffusion Models Work | deeplearning.ai/short-courses/how-diffusion-models-work |

**Read:**
- Stable Diffusion paper — arxiv.org/abs/2112.10752
- Hugging Face Diffusers docs — huggingface.co/docs/diffusers

---

## Unit 8 — Azure OpenAI & Cloud Deployment

**What I need to understand:**
- Azure OpenAI Service setup and API usage
- Deploying AI apps: Azure Container Apps, App Service
- Azure AI Search for RAG pipelines

**Why it matters to me:** I already deploy on Azure (Functions, Static Web Apps, Azure SQL, MDM/Intune). This unit closes the gap between infrastructure deployment and AI-specific Azure services, and prepares me to speak fluently across both GCP and Azure customer environments.

**Watch / Read:**
- Microsoft Learn — Azure OpenAI — learn.microsoft.com/en-us/azure/ai-services/openai
- John Savill's Azure AI series — youtube.com/@NTFAQGuy
- Azure OpenAI cookbook — github.com/Azure-Samples/openai

**Free Certification:**
- Microsoft Azure AI Fundamentals (AI-900) — learn.microsoft.com

---

## Unit 9 — Capstone Projects

Each project is designed to be shippable, demonstrable, and specific — not tutorial clones.

| # | Project | Skills |
|---|---|---|
| 1 | PDF Chatbot | RAG, embeddings, vector DB, LangChain |
| 2 | Web Research Agent | Agents, tools, ReAct, LangGraph |
| 3 | Code Review Copilot | Claude API, tool use, GitHub API |
| 4 | Customer Support Bot | RAG, memory, evaluation |
| 5 | Image Generation App | Stable Diffusion, multimodal |
| 6 | Multi-Agent Data Analyst | LangGraph, hierarchical delegation |
| 7 | Full-Stack AI SaaS App | FastAPI + Next.js + GCP/Azure deployment |

---

## Recommended Free Courses (In Order)

**DeepLearning.AI Short Courses** — deeplearning.ai/short-courses
1. ChatGPT Prompt Engineering for Developers
2. LangChain for LLM App Development
3. Building Systems with the ChatGPT API
4. LangGraph Multi-Agent Workflows
5. Building and Evaluating Advanced RAG
6. How Diffusion Models Work

**Hugging Face NLP Course** — huggingface.co/learn/nlp-course

**fast.ai Practical Deep Learning** — course.fast.ai

**Google Generative AI Learning Path** — cloudskillsboost.google/paths/118

---

## Stay Current

| Type | Resource |
|---|---|
| Newsletter | The Batch by Andrew Ng — deeplearning.ai/the-batch |
| Newsletter | TLDR AI — tldr.tech/ai |
| Newsletter | Ahead of AI — magazine.sebastianraschka.com |
| Papers | Arxiv Sanity — arxiv-sanity-lite.com |
| Community | r/LocalLLaMA |
| Community | Hugging Face Discord |
| Follow | @karpathy · @ylecun · @sama · @AnthropicAI · @LangChainAI |

---

## 16-Week Study Schedule

| Weeks | Focus |
|---|---|
| 1–2 | LLM Foundations — Karpathy videos + Illustrated Transformer |
| 3–4 | Prompt Engineering — DeepLearning.AI + promptingguide.ai |
| 5–7 | LangChain + Agents + LangGraph |
| 8–9 | RAG — build a PDF chatbot |
| 10–11 | MCP — build a custom MCP server |
| 12–13 | Multimodal AI + Azure AI deployment |
| 14–16 | Capstone project end-to-end |
