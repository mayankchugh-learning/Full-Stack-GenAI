# Full-Stack Generative AI Bootcamp — Course Syllabus

**Version:** 1.0  
**Reference:** `Copy of Full-Stack GenAI Bootcamp v1.0 (1).pdf` (Krish Naik Academy)

Use this document as the canonical syllabus reference for the bootcamp.

---

## Overview

This course targets **AI engineers, software developers, and technical leaders** who want to move from theoretical Generative AI knowledge to **production-ready** skills. You will work toward architecting and fine-tuning modern LLMs, building **RAG** and **multi-agent** systems, integrating **secure APIs** with **safety guardrails**, and deploying **scalable, cloud-native** AI applications.

**Hands-on projects** include:

- Enterprise **Intelligent Document Intelligence** platform  
- **AI-Powered Software Lifecycle Automation** system  
- **Autonomous multi-agent report generation** system  

You will design, evaluate, and deploy enterprise-grade solutions on **AWS** and **Azure** with evaluation, monitoring, and safety in mind.

---

## Duration and level

| Item | Detail |
|------|--------|
| **Estimated time** | 5–6 months, ~6 hours/week |
| **Level** | Intermediate |

---

## Prerequisites

- Strong **Python** and basic **machine learning** familiarity  
- **REST APIs**, **JSON**, **command line**, and **Git**  
- **NumPy**, **pandas**, and conceptual **neural networks** are highly beneficial  
- **AWS/Azure basics** or prior **LLM API** experience helps with deployment and orchestration modules  

---

## Learning objectives

- **LLM foundations:** Transformers, embeddings, tokenization; landscape (LLMs, SLMs, multimodal).  
- **Build and deploy AI APIs:** Commercial and cloud-managed LLMs; cost control; provider abstraction.  
- **Fine-tuning:** Full and parameter-efficient methods (**LoRA**, **QLoRA**); Hugging Face **PEFT**, **Unsloth**.  
- **Production RAG:** Ingestion, vector search, advanced retrieval, re-ranking, multimodal grounding.  
- **Agents:** Single and multi-agent systems; planning, tools, memory; frameworks such as **LangGraph**.  
- **Safety and quality:** Guardrails; input/output validation; prompt-injection awareness; evaluation (**LLM-as-a-judge**, **RAGAS**, etc.).  
- **Toolchain:** **LangChain**; vector DBs (**Pinecone**, **Qdrant**); MLOps (**MLflow**).  
- **Cloud-native deployment:** **AWS** (e.g. ECS, SageMaker) and **Azure** (e.g. AKS, AI Foundry).  

---

## Team (as listed in course materials)

| Name | Role |
|------|------|
| Krish Naik | Chief AI Engineer |
| Mayank Aggrawal | Senior ML Engineer |
| Darius B. | Head of Product |
| Sunny Savita | GenAI Engineer |
| Monal Singh | Data Scientist |
| Sourangshu Pal | Senior Data Scientist |

---

## Modules

### Module 1 — Foundations of Modern GenAI

**Topics**

| Topic | Summary |
|-------|---------|
| Introduction to Modern GenAI & LLMs | What GenAI is; how LLMs work at a high level |
| Transformer architecture | Why transformers underpin modern LLMs |
| Text encoding & tokenization | Encoding, tokenization, vocabulary, subword tokens |
| Evolution of text representations | Classical encodings → word embeddings |
| Embeddings, vector space & similarity | Word, contextual, sentence embeddings; similarity |

---

### Module 2 — Understanding LLMs, SLMs & Multimodal LLMs

**Topics**

| Topic | Summary |
|-------|---------|
| LLMs vs SLMs vs multimodal | Differentiation and use cases |
| Major LLM families | GPT, Gemini, Claude, LLaMA, Mistral, Qwen |
| Small & efficient language models (SLMs) | Phi, Gemma; low-cost / low-latency cases |
| Specialized models (code & multimodal) | CodeLLaMA, StarCoder/StarCoder2, DeepSeek-Coder, Phi-3-Mini (Code), LLaVA, BLIP, BLIP-2, CLIP |
| Model selection strategy | Task, cost, latency, modality, deployment |

---

### Module 3 — API for Accessing LLMs

**Topics**

| Topic | Summary |
|-------|---------|
| LLM API ecosystem | OpenAI, Anthropic, Gemini, Groq, OpenRouter |
| Making LLM API calls | Prompt → request → response; temperature, max tokens; streaming |
| Token usage, cost & latency | Token counting, pricing, cost control |
| Provider switching & abstraction | Same structure across OpenAI ↔ Groq ↔ OpenRouter |
| Cloud-managed LLM APIs | Azure OpenAI, AWS Bedrock, GCP Vertex AI |

---

### Module 4 — Fine-Tuning Techniques

**Topics**

| Topic | Summary |
|-------|---------|
| Foundations of fine-tuning | Classical DL; RNN/LSTM limits; why transformers scale |
| Fine-tuning landscape in GenAI | Hugging Face vs LangChain (training vs orchestration) |
| Strategies for LLMs & SLMs | Full vs parameter-efficient |
| Parameter-efficient fine-tuning (PEFT) | LoRA, QLoRA, PEFT overview |
| Dataset preparation | Instruction data, formatting, cleaning, splits |
| Advanced optimization | Knowledge distillation and quantization |
| Frameworks & tooling | Hugging Face Transformers, PEFT, Unsloth, Axolotl |
| API-based fine-tuning | Provider workflows and limits |
| Model packaging & distribution | Checkpoints, Safetensors, GGUF, GGML |
| Advanced paradigms | RLHF, DPO, ORPO, GRPO (conceptual) |
| Specialized fine-tuning | Embedding models; vision-language fine-tuning |

---

### Module 5 — LLM Hosting on Your Own Server and Exposing as an API

**Topics**

| Topic | Summary |
|-------|---------|
| Fine-tuning on AWS SageMaker | LoRA-based training on managed infrastructure |
| Deploying LLMs as SageMaker endpoints | Real-time inference; scaling basics |
| API exposure & traffic management | API Gateway or ALB |
| Inference compute | Lambda (light/burst); ECS Fargate (containerized scale) |
| Client integration | Calling the deployed API from apps |

---

### Module 6 — Prompt Engineering

**Topics**

| Topic | Summary |
|-------|---------|
| Core prompting | System vs user; zero-shot, few-shot |
| Reasoning-based techniques | Chain-of-Thought, self-consistency, ReAct |
| Prompt design | Task-wise and domain-specific prompts |
| Production prompt management | Libraries, Jinja2, YAML config |
| Structured & controlled prompting | JSON/YAML outputs, schema-based prompts |
| Optimization & cost | Token and context-window optimization |

---

### Module 7 — Retrieval-Augmented Generation (RAG) Systems

**Topics**

| Topic | Summary |
|-------|---------|
| Why LLMs hallucinate & why RAG | Grounding with external knowledge |
| End-to-end RAG architecture | Ingestion → indexing → retrieval → generation |
| Data ingestion & parsing | PDFs, docs, web; structured vs unstructured |
| Chunking strategies | When to chunk; overlap trade-offs |
| Embeddings & vector databases | Selection; local, OSS, managed |
| Metadata design & filtering | Schemas, filters, scoped retrieval |
| Retrieval, ranking & re-ranking | Similarity, MMR, cross-encoder re-ranking |
| Prompting with retrieved context | Context injection, grounding, citations |

---

### Module 8 — Advanced RAG & Multimodal Systems

**Topics**

| Topic | Summary |
|-------|---------|
| Context engineering & memory | Context window; memory vs retrieval |
| Caching & performance | Response cache, embedding cache, cost |
| RAG evaluation & reliability | Faithfulness, relevance, retrieval quality |
| Multimodal RAG | Text + image; vision-language grounding |
| Common failure modes | Bad chunks, noisy retrieval, missing context, long prompts |

---

### Module 9 — Agents, Multi-Agent & Deep Agent Systems

**Topics**

| Topic | Summary |
|-------|---------|
| Agentic AI fundamentals | Agents vs simple LLM pipelines |
| Single-agent architectures | Plan, reason, act in one agent |
| Multi-agent designs | Supervisor, hierarchical, network |
| Deep agent systems | Long-horizon planning, reflection, iteration |
| LLMs as reasoning core | Planning, tool selection, decisions |
| Tools as interfaces | APIs, search, RAG, code execution |
| Agent orchestration | LangGraph / CrewAI (conceptual) |
| Memory & state | Short/long-term; shared state |
| Prompting for agents | Role, planner, executor prompts |
| Human-in-the-loop | Approvals, feedback, interrupt & resume |
| Safety & loop prevention | Max steps, termination, errors |
| Cost & execution | Token budgets, limits, cost-aware agents |
| Agentic RAG | Retrieval + grounded reasoning |
| Inter-agent collaboration | Delegation, aggregation, conflict handling |

---

### Module 10 — Evaluation Strategies

**Topics**

| Topic | Summary |
|-------|---------|
| Observability & debugging | Logging, monitoring, tracing prompts/context/tools |
| Why classical evaluation breaks for GenAI | Limits of traditional ML metrics |
| Model-level vs system-level evaluation | Model vs full GenAI system |
| Core evaluation strategies | LLM-as-judge, HITL, offline vs online |
| Evaluating RAG & agents | Grounding, relevance, faithfulness, hallucinations |
| System metrics beyond accuracy | Cost, latency, UX, quality–speed–cost |
| Classical metrics & limitations | Perplexity, loss, token-level (research vs production) |
| Task-specific metrics | Accuracy, BLEU, ROUGE, exact vs semantic match |
| Anti-patterns | Single-metric obsession; ignoring cost/latency; over-trusting judges |

---

### Module 11 — Guardrails

**Topics**

| Topic | Summary |
|-------|---------|
| Foundations of guardrails | Why GenAI systems need them |
| Traditional software vs GenAI | Validation before/after LLMs |
| Core objectives | Safety, reliability, compliance, trust |
| Input validation | Sanitization, length, content filtering |
| Output validation | Checks, format, refusal logic |
| Schema-based guardrails | Pydantic for structured outputs |
| Prompt injection | Types and defenses |
| Tools & frameworks | Guardrails.ai, OpenAI Guardrails, custom rules |

---

### Module 12 — MCP (Model Context Protocol)

**Topics**

| Topic | Summary |
|-------|---------|
| Introduction to MCP | What it is and why it exists |
| MCP vs traditional tool calling | vs plugins vs function calling |
| MCP in the ecosystem | With RAG, agents, workflows |
| Architecture | Client ↔ Server ↔ LLM |
| Core components | Host, Client, Server |
| Transports | STDIO, SSE, Streamable HTTP; stateful vs stateless; security |
| Python SDK & tooling | FastMCP vs low-level; CLI |
| Building MCP servers | Structure, FastMCP, lifecycle |
| Capabilities | Tools, structured outputs, prompts, context |
| Advanced concepts | Auth, OAuth, pagination, large data |
| Agentic systems | MCP as tool layer for multi-agent |

---

### Module 13 — Cloud Services for GenAI (AWS)

**Topics**

| Topic | Summary |
|-------|---------|
| Core ML & MLOps | Amazon SageMaker |
| Generative AI & agents | Amazon Bedrock, Agent Core, Amazon OpenSearch Service |
| Specialized AI & media | Textract, Comprehend, Rekognition, Transcribe |

---

### Module 14 — No-Code Agent Tools (n8n)

**Topics**

| Topic | Summary |
|-------|---------|
| AI automation with n8n | Role in GenAI automation |
| n8n basics | Setup, nodes, workflows, JSON |
| APIs & AI in n8n | LLMs inside workflows |
| Agents & multi-agent patterns | Chain, parallel, controller, hierarchical |
| RAG with n8n | Supabase / Pinecone integration |
| MCP + n8n | Cloud vs self-hosted |
| Real use cases | Social, GitHub PR, WhatsApp / assistant flows |

---

### Module 15 — Claude Automation Mastery

**Topics**

| Topic | Summary |
|-------|---------|
| Claude API & models | Families, structured outputs, rate limits, production |
| Claude Code | Multi-file reasoning, debugging, refactoring, large codebases |
| Claude Co-Work mode | Collaborative workflows, shared context |
| Claude MCP integration | Tool exposure, servers, enterprise assistants |

---

### Module 16 — Capstone: Enterprise Document Intelligence System

**Topics**

| Topic | Summary |
|-------|---------|
| Document ingestion pipeline | Upload → parse → chunk → embed → index; async scale |
| Advanced RAG | Query rewriting, MMR, re-ranking, citations |
| Single & multi-document chat | Memory, condensation, source-grounded answers |
| Document comparison | Semantic comparison; Q&A side-by-side |
| LLM orchestration | Model routing (Groq / OpenAI / local); policies |
| Caching & performance | Redis, Cache-Augmented Generation (CAG), embedding reuse |
| Scalability & reliability | Stateless APIs, autoscaling, queues, retries, fallbacks |
| Evaluation & guardrails | Faithfulness, relevance, safety, refusal on weak context |
| Cloud-native deployment | AWS ECS/Fargate, S3, RDS, vector DB, CI/CD, observability |

---

### Module 17 — Capstone: AI-Powered Report Automation System

**Topics**

| Topic | Summary |
|-------|---------|
| Agentic foundations | Single vs multi-agent; roles; async orchestration |
| LLM & tooling | OpenAI / Groq; tool calling; function schemas |
| Agent roles | Search, Reader, Analyst, Generator, Coordinator |
| Orchestration | LangGraph / CrewAI / AutoGen; state graphs |
| Memory & communication | Shared state; short vs long-term context |
| Research toolkits | Web search, Arxiv/PDF parsers, loaders |
| RAG for grounded research | Vector DB, citations |
| Human-in-the-loop | Checkpoints, approvals, interrupt & resume |
| UI & backend | FastAPI dispatcher, previews, agent logs & traces |

---

### Module 18 — Capstone: AI-Powered Software Lifecycle Automation System

**Topics**

| Topic | Summary |
|-------|---------|
| Problem framing | Enterprise dev workflows; requirement-to-testing lifecycle |
| Knowledge base & ingestion | BRD/PRD/test docs; parsing, chunking, embeddings, vector DB |
| RAG architecture | Retrieval, metadata, citations, traceability |
| Agentic workflow | User Story, Test Case, Refinement agents; coordinator |
| Memory & communication | Shared state; short vs long-term context |
| Tool & enterprise integration | PM and test management systems |
| Deployment & production | Docker, cloud, logging, monitoring, evaluation, AI safety |

---

## Document notes

- Original PDF pagination: **30 pages**; module titles and topic tables match that source.  
- Some PDF footers use the spelling **“Verson”** instead of “Version.”  
