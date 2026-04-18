# Session notes — 28 Mar 2026 (from `Session_Recording.cutfile.20260329093221035.transcript.vtt`)

**Focus:** Onboarding (dashboard, resources, syllabus), a full **AI → GenAI roadmap** on the whiteboard, the **“modern route”** stack and frameworks, how the course will sequence topics (encoding/embedding → transformer → LLMs → apps), and **AI coding assistants** vs production systems. Long **live Q&A** after the main teaching.  
**Speaker:** Sunny Savita (main session).  
**Tone of this class:** Intentionally introductory and interactive; from the **next** class the plan is to run in a more “full-fledged” way with less repeated onboarding.

---

## Context from earlier sessions

- **Induction** had already covered logistics; **Monal** ran the session on **UV, VS Code, environments**, and a first **GenAI intro** while Sunny was away.
- Sunny will share **blackboard-style PDFs / mermaid charts** in upcoming classes for clearer visuals.

---

## How to use the learning platform

- Portal: **`learn.krishnak.academy`** (as spoken in session — keep your enrolled email / dashboard link handy).
- After login, open **Courses** and find your **enrolled** course card(s).
- You get **two** course accesses:
  1. **Full Stack GenAI Bootcamp** (current / latest batch).
  2. **Advanced NLP GenAI Bootcamp** — an **older (e.g. ~1 year)** batch included so learners can **fast-track** or fill gaps from the previous live NLP program.

### Sections inside the bootcamp

- **Live session** — recordings of classes (e.g. past sessions listed as recordings).
- **Prerequisite** — extra material; **bare minimum** called out as **Python** for building applications.

### Community and doubts

- **Community chat** on the platform for async questions.
- During **live Zoom**, use **Zoom chat** for doubts so the instructor sees one channel.
- **Email** to Sunny was offered for doubts that should not go in community chat.
- If a question is **missed** in chat or hands-up: **don’t panic** — course runs **~5–6 months**; doubts can be cleared in **post-class doubt sessions**, community, or email.

---

## Central resources (three pillars)

Sunny structured material around three places (links were shared live in chat / to be mirrored in course resources):

1. **Notice board (Google Sheet)** — calendar, **topics per week**, holidays, schedule notes.
2. **GitHub repo** — name given in session as along the lines of **`full stack genai 1.0`** — **class-wise notes**, code, and consolidated downloads in **one place** (also mirrored under **Resources** per class).
3. **Notion** — **commands, links, and live-session snippets**; can be **imported** into GitHub / resource section after class.

**Syllabus** — a separate **syllabus link** was shared to download; teaching is intended to follow it.

---

## Python / environment (recap + guidance)

- Prefer **Python 3.11 or 3.12** for stability; **3.13+** may hit **dependency issues** — avoid for class unless needed.
- **VS Code** setup was in the **previous** session with Monal; Sunny pointed people there for editor/env steps.
- **`uv python list`** (conceptually) shows installable versions; align with **`pyproject` / pin** as in the shared class docs.

---

## Big picture: AI → paths to “intelligence”

High level, **AI** can be approached via:

| Path | Idea |
|------|------|
| **Machine learning** | **Statistics**-based algorithms |
| **Deep learning** | **Neural networks** |
| **Reinforcement learning (classical)** | e.g. **Q-learning** (not the main GenAI thread here) |

**Deep learning** branches (as drawn in session):

1. **ANN** — **MLP** (multi-layer perceptron); foundation of deep learning.
2. **CNN** — **Computer vision** (object detection, segmentation, OCR, etc.).
3. **RNN** — **Sequence / language → NLP** (with **LSTM**, **GRU**, classical **encoder–decoder**).
4. **GAN** — Generative image models (described as advanced relative to CNN/ANN).
5. **Deep RL** — e.g. **PPO**; mentioned in connection with **RLHF** later.

**NLP line:** RNN → LSTM/GRU → **encoder–decoder** → **transformer** (“**Attention Is All You Need**”).  
**GenAI / LLMs** are positioned **after transformers**; **SLM** = Small Language Model; multimodal models sit in the same modern line.

---

## “Modern route” — what this course optimizes for

The **blue / modern path** on the diagram = **today’s Generative AI** track:

- After **transformer**: **LLMs**, **SLMs**, **multimodal LLMs**
- Then: **fine-tuning**, **RAG** (including **multimodal RAG**), **agentic AI**, **LLM Ops**

**Python** is described as **dominating implementation** across this stack (with **MCP** etc. called out as topics for later).

### Data roles (where “analytics” sits)

- **Data analytics (DA)** → then **data engineering (DE)** → **ML / data science** pipelines.  
- **Data science** (in the ML branch) was tied to **EDA**, **feature engineering**, **statistics**, **ML algorithms**.  
- **Data engineering** is stressed as **critical** for real AI projects (pipelines feeding models).

### Classical ML libs vs what to prioritize for GenAI

- **Pandas, NumPy, sklearn**, broad **Keras**, **TensorFlow** depth — **not** the primary focus for this GenAI specialization if time is limited.
- **Dominant focus areas** called out for the modern route (names as spoken):

  - **PyTorch** (basic understanding; main DL framework emphasis)
  - **Hugging Face**
  - **Unsloth**
  - **LangChain**
  - **LlamaIndex**
  - **LangGraph** (agents)
  - **Data parsing** frameworks, **vector databases**, **cloud** connectivity
  - **OpenAI SDK**
  - **Guardrails**
  - **MCP** (**Model Context Protocol**), “fast MCP” mentioned in passing

Sunny showed a **long categorized list** (video + sheet): vector DB examples (e.g. **Chroma**, **pgvector**, **Supabase** named), **Haystack**, **LangSmith**, document AI / parsing tools (**Unstructured**, **PyMuPDF**, etc.), agent frameworks (**AutoGen**, **LangGraph**, **Google ADK**, etc.), cloud, eval/observability, and more — **not every item** will be taught end-to-end; **representative important tools per category** will be covered.

**TensorFlow vs PyTorch:** TensorFlow described as **heavier / more awkward** for how this course teaches; **industry today** for much LLM work is **PyTorch-centric**; course won’t rely on deep low-level TF.

---

## Topic sequencing in the syllabus (theory + practice)

- **Skip deep classical LSTM/GRU training** as a long module; **do** cover **encoding, embedding**, **vectors**, **tokenization** — needed for **RAG**, **transformers**, and **LLM behavior**.
- **Classical encoder–decoder** skimmed in favor of going to **transformer**.
- **Why bother with theory** if Copilot can code: for **interviews**, **understanding LLMs**, and **fundamentals** for serious systems—not only notebook demos.

**LLM Ops** — framed as **deploying / operating** LLM applications (alongside fine-tuning, RAG, agents).

---

## AI coding assistants (Copilot-class) — scope of usefulness

- Examples mentioned: **GitHub Copilot**, **Claude**, **OpenAI Codex**, etc.
- **Strength:** **POC** and **MVP** — very fast initial solutions (days → sometimes **hours**).
- **Limits:** **Scalable, full production** systems still need **architecture**, **testing**, and **supervised** use of assistants; **deployment / full cloud access** to agents is **risky** and **weak** today.
- **Outlook:** for **3–5 years**, human **expertise** still expected for large-scale apps; later unknown.

**POC** = proof of concept; **MVP** = **Minimum Viable Product** (speaker also joked “minimal Bible product” in transcript — interpret as MVP).

---

## Live Q&A themes (condensed)

- **Hardware:** **8 GB RAM** laptops can run **basics and many projects**; **heavy training** → **Google Colab** (notebooks re-connect; instructor will demo when relevant). **Integrated GPU** machines are OK for lighter work.
- **Career:** Full **ML engineering** track **not** mandatory to start GenAI; basic ML vocabulary (**supervised/unsupervised**, train/test, inference) helps when learning LLMs.
- **DevOps:** **GitHub Copilot** is an **AI coding assistant**, separate from **CI/CD**, **Terraform**, **GitHub Actions** — those come up in **deployment / project** phases. **Paid** cloud models (e.g. **Claude**) need **budget / subscription** for best quality.
- **Management / light coding:** **Basics + Copilot** can be enough for many app tasks; **top product companies** may still expect **DSA** (**fresher**) or **DSA + system design** (**experienced**).
- **JavaScript:** For **web dev**, JS ecosystem matters; for **AI-first** career, **Python** first; **React/Next** called out for front-end track.
- **Recorded prerequisite / YouTube:** If links hit **“unusual traffic”**, try **VPN**, **incognito**, or direct **playlist** URL.
- **Mac / UV:** Use **`pip3 install uv`** (not plain `pip`) when `pip` is wrong; **`python3`** vs **`python`** as on Mac docs.

---

## Next session (as stated)

- From **tomorrow onward**: expect **less repeated onboarding** — agenda announced, then **straight into session content** (encoding/embedding thread was queued as the next technical block).

---

*Transcript ~4h 45m; timestamps in the VTT file map to the recording for deep dives on any section.*
