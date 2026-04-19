# Session notes — 18 Apr 2026 — SOTA (transformer-based) embeddings → start of Transformers module

**Source:** `_Recording.transcript.vtt`  
**Instructor:** Sunny Savita  

---

## Materials in this folder (`18Apr26/`)

| File | Role |
|------|------|
| [`SOTA-llm-embedding.ipynb`](SOTA-llm-embedding.ipynb) | Main lab: **SOTA text embeddings** (Sentence Transformers / `all-MiniLM-L6-v2`, 384-d), **LangChain** wrappers for **Gemini** & **OpenAI** embeddings, **CLIP** image embeddings, **semantic vs keyword** retrieval — see notebook title cell. |
| [`Class-08-18-Apr-SOTA-Transformer-Embedding-Methods/SOTA-llm-embedding.ipynb`](Class-08-18-Apr-SOTA-Transformer-Embedding-Methods/SOTA-llm-embedding.ipynb) | Same notebook under the **Class 8** subfolder (use one copy; keep paths consistent when you run cells). |
| [`Class-08-18-Apr-Notion-Notes.pdf`](Class-08-18-Apr-Notion-Notes.pdf) | Notion export — commands, links, snippets from class. |
| [`Class-08-18-Apr-Hand-written-notes.pdf`](Class-08-18-Apr-Hand-written-notes.pdf) | Handwritten board notes for this session. |
| [`images.jpg`](images.jpg) | Sample **image** asset for CLIP / vision-embedding demos in the notebook (path may be referenced from the working directory). |
| [`Notes.md`](Notes.md) | This summary. |
| `_Recording.transcript.vtt` | Full transcript (often **gitignored**; keep locally next to notes). |

**Environment:** The notebook expects a **`.env`** file with `GOOGLE_API_KEY`, `HF_TOKEN`, and/or `OPENAI_API_KEY` as needed (see first code cell — **never commit** secrets). The first cell loads **`.env`** from the current working directory or the **parent** folder. The **CLIP** image cell resolves **`images.jpg`** from the session folder (or `../images.jpg` if your kernel cwd is the nested `Class-08-…` directory). Install deps from your project `requirements.txt` / uv env as for other class folders.

**One-line topic:** **State-of-the-art (transformer-based) text & image embeddings** and how they connect to **RAG** — bridge from module 1 into the **Transformers** module.

---

## Where this sits in the syllabus

- **Module 1 (encoding & embedding)** is treated as **complete** from a syllabus perspective; one conceptual bridge remained: **SOTA embeddings** (transformer-based) before fully opening **Transformers**.
- **Module 2** starts here: **Transformer** architecture — described as **2–3 sessions** with optional **from-scratch** code to run; then **LLMs/SLMs and APIs**, then **fine-tuning**, **RAG**, **agentic RAG**, etc.
- **Assignment** from the embedding block: solution was being pushed to **Resources** + **GitHub** (per class admin — verify in your dashboard/repo).

---

## Why this session matters (even if you only “ship” RAG apps)

- For **pure app wiring**, you may rarely implement attention by hand — but **interviews** and **LLM intuition** lean on **self-attention**, **multi-head attention**, and how **decoder-only** models (e.g. **GPT**) relate to **pre-training** and **next-token prediction**.
- **SOTA embeddings** (sentence-transformers, OpenAI, Gemini, etc.) are positioned as **directly reused in RAG** and later **agentic** chapters — same vectors you store and retrieve.

---

## SOTA embedding — live coding themes (aligned with `SOTA-llm-embedding.ipynb`)

- **`sentence-transformers`** (Hugging Face Hub): **`all-MiniLM-L6-v2`** → **384-dimensional** dense vectors; **`encode()`** for word, sentence, or paragraph (fixed output dim after pooling).
- **LangChain** abstractions for **Google Gemini** and **OpenAI** embedding APIs — same notebook compares providers and vector sizes where applicable.
- **Contrast** with earlier **Word2Vec**: classical models expose **hidden-layer** style vectors; **SOTA** stacks use **transformers**; embeddings remain the **vectors you index** for retrieval.
- **Multimodal:** **CLIP** (and related) for **image → embedding**; ties to multimodal RAG later.
- **Retrieval angle:** notebook frames **semantic** vs **keyword** search using these embeddings (foundation for **vector DB** chapters).
- **Secrets:** **`.env`** with `GOOGLE_API_KEY`, `HF_TOKEN`, `OPENAI_API_KEY` — loaded in the notebook via **`python-dotenv`**; **do not commit** keys.

---

## Transformer storyline (high level, continues next classes)

- **2017 “Attention Is All You Need”**: transformer originally for **machine translation**; then broader **NLP** (classification, summarization, translation, generation).
- **GPT**-style models: **decoder** stack; **pre-training** ≈ **next-token / next-word** prediction on large text.
- **BERT**: **encoder**-style story; **masked language modeling** and related objectives (contrasted with autoregressive **GPT** training in discussion).
- **Modern route** in this batch: **no** long standalone “classical neural networks” module — **transformer** is the spine after your encoding/embedding prep.

---

## Links backward / forward

- **Earlier:** [`../12Apr26/Notes.md`](../12Apr26/Notes.md) (Word2Vec, classical embeddings), [`../05Apr26/Notes.md`](../05Apr26/Notes.md) (TF-IDF / assignment thread).
- **Next:** full **transformer** math + code; **vector databases** and **RAG** use the same embedding objects introduced here.

---

*Transcript is long; use timestamps in `_Recording.transcript.vtt` to replay demos. Cross-check commands and links with the **Notion PDF**; board structure with the **handwritten PDF**.*

**Study order:** skim **Notion + handwritten PDFs** → run **`SOTA-llm-embedding.ipynb`** from the folder that matches your kernel cwd → keep **`Notes.md`** as your verbal summary for revision.
