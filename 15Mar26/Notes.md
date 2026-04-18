# Session notes — 15 Mar 2026 (Induction)

Source: `session_Recording.cutfile.20260316041451852.transcript.vtt` — **Modern Route**: Full-Stack Generative AI & Agentic AI Bootcamp (Krish Naik, Sunny Savita).

This session was **induction and logistics**, not a technical deep-dive. Technical teaching starts from the **next** class (setup, tools, etc.).

---

## Schedule and format

| Item | Detail |
|------|--------|
| Batch start | 15 March 2026 |
| Duration | About **5–6 months** |
| Live classes | **Saturday & Sunday**, **8:00 PM – 11:00 PM IST** |
| Session length | Often 3–4+ hours; **doubt clearing after** live teaching; historically sessions have run **4–8+ hours** when needed |
| Recordings | **Yes** — uploaded to the dashboard, typically **within 24 hours** of each live session |
| Weekday classes | **Rare** — only if a **weekend is lost to holidays**; may schedule a **Wednesday** (or similar) so the syllabus stays on track |

---

## Platforms and access

- **Public site / roadmaps:** Referenced in-session as the Academy website (e.g. **krishnag.in** and similar — **confirm the exact domain** on your enrollment page or email).
- **Learning dashboard:** **`https://learn.krishnakacademy.com`** — log in with the **phone/email used at enrollment**.
- **Dashboard provider:** **TagMango** (hosts video, course access, etc.).
- **Mobile app:** **Krishnak Academy** (iOS & Play Store) — notifications, course links, join links; no extra courses sold inside the app.
- **Course access duration:** **2 years** of access to recordings/materials (announced as extended from 1.5 years).
- **Two courses in “Courses”:** (1) **Previous batch** — full Generative AI / Agentic AI bootcamp recordings; (2) **Current batch** — this Modern Route run (richer/updated syllabus vs ~6–7 months prior).

### Dashboard areas (high level)

1. **Feed** — social-style updates (learning posts, similar idea to LinkedIn).
2. **Workshop / live session** — **Zoom link appears ~15 minutes before class**; links often scheduled **Wed/Thu** for the **upcoming weekend**.
3. **Courses** — recordings, modules, prerequisites, resources.
4. **Messages** — **community chat** (primary place for cohort discussion; see etiquette below).
5. **Level up** — planned for **quizzes / assignments / hackathons**; not necessarily enabled for all plans at launch.

### Prerequisites (in dashboard)

Under the current course, links for refresher content, e.g.:

- Python  
- Machine learning (e.g. “complete ML in 6 hours”)  
- NLP  
- Deep learning (e.g. “in 5 hours”)  

Python is stressed as a **prerequisite** for the main track.

### Email

- Class/join info from support; if missing, check **spam**.  
- Support email mentioned in-session as **`hi@...`** (transcript audio: “hi at Krish Naik Academy”) — **confirm the exact address** in your inbox.

---

## Session behavior

- **During class:** **One-way audio** from instructors; **no open mic** mid-lecture (reduces noise).  
- **After class:** **Doubt clearing** — raise hand, **be patient**; intent is to cover **everyone** (same doubt often helps many).  
- **Time zones:** If needed, you can **request to go earlier** in the queue; still expect fairness for all.

---

## Community and off-platform groups

- **Use the official community chat** on the platform.  
- **Do not create parallel WhatsApp groups** for the cohort — instruction was strong: stay on the provided platform for learning focus (avoid casual/off-topic group drift).

---

## Certification and “proof of completion”

- **No formal certificate** as a product goal — emphasis on **building projects** (“builder world,” not “certificate collector”).  
- **Completion / reimbursement letter** for **employer reimbursement** may be available **on request** (ask if your company needs documentation).

---

## Roadmaps (on the public Academy site — “Roadmaps” section)

Three conceptual paths:

1. **Traditional** — DS → ML/CV/NLP foundation → Gen AI → Agentic AI.  
2. **Modern** (**this batch**) — faster path for people with **some programming/ML familiarity** who want Gen AI + Agentic AI + projects; **starts from transformers** in live classes; fundamentals parallel/supplementary.  
3. **Advanced** — parallel/deeper track for very experienced learners.

Roadmap pages mix **free videos**, **Udemy**, and **paid live** options (difference = amount of **hand-holding**).

**AI Pro** (yearly subscription): access multiple batches; **counseling team** can explain; course fees may be **adjusted** toward AI Pro upgrade (details from sales/counseling).

**Industry-ready projects** (~68 listed on site) — **separate** subscription from AI Pro; has its **own** Sat/Sun sessions.

---

## Course syllabus overview (18 modules)

Updated from 16 modules: **+ Cloud Code–related module**, **+ extra project** → **18 modules** total. Themes include:

| Area | Topics mentioned |
|------|------------------|
| Foundations | Transformers, embeddings, encodings; **“Attention Is All You Need”** paper |
| Models | LLM, SLM, **multimodal** LLMs |
| Access | APIs: OpenAI, Claude, Grok, **Open Router**, Hugging Face, local download; **managed**: e.g. **Azure AI Foundry** (formerly Azure OpenAI), **AWS Bedrock** |
| Fine-tuning | Hugging Face ecosystem; **Llama Factory**, **Axolotl**, **Unsloth**, etc. |
| Hosting | e.g. **AWS SageMaker** — train, deploy as API |
| Practical core | **Prompt engineering** (many techniques: ReAct, conditional, config-level, templates/hubs) |
| RAG | End-to-end: parsing → ingestion → retrieval → augmentation → generation; **multimodal RAG**; **context engineering** inside RAG/agents |
| Agents | **Agentic & multi-agent** systems; **MCP (Model Context Protocol)** for tools/context |
| Quality & safety | **Evaluation** (metrics, **LLM-as-judge** / AI as reviewer); **guardrails** (e.g. **NeMo Guardrails**, OpenAI, **guardrails.ai**, LangChain partial support) |
| Cloud | **Gen AI on AWS** as primary; names of Azure/GCP equivalents; possible extra demos on Azure/GCP |
| Low-code | **n8n** and similar — business automation (not full custom agent parity) |
| AI coding | **Cursor**, **GitHub Copilot**, **Claude Code**, **Cloud Code**, **Cloud Co-Work** — mix of **manual + AI-assisted** coding (not 100% from-scratch typing) |
| Capstone | **Three end-to-end projects** (integrated learning); deployment |

**Module timing:** Roughly **3–4 classes** for smaller modules, up to **~8 classes** for larger ones (~**5–6 classes per module** mentioned as a rough band).

---

## Hardware and tooling (Sunny’s guidance)

- **Not** a heavy local-training course for most work — **APIs and cloud** for heavy lifts.  
- **Minimum practical:** e.g. **i5 / Ryzen 5 + 16 GB RAM** ( **8 GB RAM** minimum but laggy for many tabs/IDEs).  
- **GPU:** Optional; **RTX 40/50 series** or **≥8 GB VRAM** nice for **Ollama** / quantized local inference — **not mandatory**.  
- **Mac:** M1/M2 + **16 GB** generally OK.  
- **Training:** Often **Google Colab** (Pro if needed) or **cloud** when training is required.  
- **IDE:** e.g. **VS Code** — confirmed as fine.  
- **Cloud accounts:** **AWS / Azure / GCP** free tiers for learning; instructors show how to create; you can use **any** cloud with mapping to services taught.

---

## Projects philosophy

- Projects are **POC-level**, **domain-agnostic** (e.g. document portal, SDLC automation, report generation) — applicable across industries.  
- Code is written **live** with students (**not** only pre-baked notebooks).  
- **Stock/trading** projects deliberately **not** emphasized (risk/liability; AI not treated as auto-trading advice).

---

## Jobs and visibility

- **Job leads** from partner companies may be **posted in the community** (emails/contacts to apply) — **no job guarantee**.  
- **LinkedIn / GitHub:** strongly encouraged — post learnings, tag instructors; builds **portfolio and inbound interest**.  
- Phrase used: **“Share your knowledge before it becomes meaningless”** (fast-moving AI field).

---

## Events and extras

- **NVIDIA GTC** — **virtual pass** link shared in session; **hackathons with NVIDIA** mentioned as planned.  
- Sunny: **6+ years** DS/Gen AI; enterprise experience (e.g. **Big Four**), domains pharma/finance/FMCG; **RAG, agents, fine-tuning**; YouTube + live teaching.

---

## Q&A highlights (from transcript)

- **Vector DBs:** Roadmap/playlists cover **multiple** DBs (MongoDB vector, FAISS, etc.); core ideas overlap across vendors.  
- **Java / Spring AI** — mentioned as another stack for Gen AI; course is **Python-centric**.  
- **Career:** Add **Gen AI + agentic skills** on top of current role; **don’t fake years** of Gen AI experience; replicate work POCs in new stack for **honest** resume stories.  
- **DSA:** Less emphasis than classical SWE prep; **basic** structures + problem-solving still matter where LLMs don’t replace judgment.

---

## Your checklist

1. Install **Krishnak Academy** app and enable notifications.  
2. Log into **`learn.krishnakacademy.com`** and confirm **both** course tiles and **community** access.  
3. Bookmark **workshop/live** link pattern; join Zoom **~15 min** early.  
4. Skim **prerequisite** Python/ML/NLP/DL refreshers if needed.  
5. Plan **Saturday–Sunday nights IST** + buffer for **post-class doubts**.  
6. Prepare **VS Code**, **Python**, and (when instructed) **cloud** free-tier accounts.  
7. Follow **roadmap PDF/syllabus** link from enrollment page — **18-module** version with **Cloud Code** and **three** capstone projects.

---

*Notes synthesized from the session transcript; verify URLs, email addresses, and policy details against your latest dashboard and official emails.*
