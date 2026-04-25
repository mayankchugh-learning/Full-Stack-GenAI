# Session notes — 5 Apr 2026 — Encoding & embedding (TF-IDF, Word2Vec thread, assignment)

## Transcript timing extraction (session + Q&A split)

- Session start time: `00:06:58.290`
- Session conclusion time (teaching concluded cue): `03:51:13.989`
- Q&A segment: `04:14:02.810` to `04:39:00.160` (`00:24:57.350`)
- Full recording span (`.vtt` first cue to last cue): `04:32:01.870`


**Source:** `GMT20260405-142945_Recording.transcript.vtt`  
**Instructor:** Sunny Savita  
**Materials in folder:** `encoding (1).ipynb`, handwritten PDF, Word2Vec paper PDF, `main.py`, `README (2).md`, `requirements (1).txt`.

---

## Session focus

Roughly the **third** class on **encoding & embedding**. Plan: solidify **TF-IDF** (theory + practical), move into **classical word embeddings** (Word2Vec line — “Word2Vec” / “word to bag” in transcript ASR), contrast **legacy encodings** with **modern LLM embeddings**, and release a **real-world assignment** (reviews / scraping — with flexibility if scraping is hard).

---

## TF-IDF

- Treated as a core **interview topic** even in GenAI interviews (alongside newer embedding methods).
- **Practical** walked through in class; disadvantages called out: **older** technique; production systems often use **LLM / transformer embeddings** instead of TF-IDF vectors alone.
- Clarification: **TF-IDF** is an **encoding**-style signal (weighted term statistics), not a full **neural embedding** in the modern sense — but language in interviews may blur “embedding” vs “vector”; instructor stressed associating true **semantic** neural methods with **trained models**.

---

## Classical vs state-of-the-art embeddings

- **OpenAI** and **Google (Gemini / “Gemini embedding”)** APIs mentioned as ways to get **dense embeddings** from pretrained models.
- **Transformers** internally turn **tokens → embeddings**; Word2Vec-style ideas connect to how early layers think about subword/token vectors.
- Instructor offered optional **custom Word2Vec training** practical (pretrained vs train-your-own) depending on class appetite — **gensim** / environment caveats (Python **3.11** suggested over **3.12** for some library stacks in session).

---

## Assignment & workflow

- **Assignment** published in **GitHub** repo — **real-world style** data (e.g. reviews); learners expected to **preprocess**, apply techniques, and use **AI coding assistants** deliberately (“make a habit”).
- **Scraping** (e.g. e-commerce) was discussed; fallback: use a **PDF** (e.g. Word2Vec paper), **chunk** text, experiment with **TF-IDF** and embedding steps.
- **Gensim** install issues:** if `requirements` causes breakage, follow instructor’s pinned approach (e.g. **Python 3.11**, adjusted `requirements`) — check chat/GitHub notes from session.
- **Submission** process to be announced in **community**; **solutions** discussed on a later timeline.

---

## Pedagogy / pacing

- **N-grams** de-emphasized for this pass — course depth targets **GenAI** units (fine-tuning, RAG, agents, MCP, guardrails, projects).
- Embedding chapter might need **one more session** to close Word2Vec + **SOTA** demos cleanly before **transformer** embedding emphasis.

---

## Links

- Previous formal notes session: [`../04Apr26/session_04Apr26_encoding_embedding_notes.md`](../04Apr26/session_04Apr26_encoding_embedding_notes.md)  
- Next practical depth: [`../12Apr26/Notes.md`](../12Apr26/Notes.md) (notebooks + Word2Vec walkthrough)

---

*ASR in the transcript often writes “Word2Vec” as “word to bag” / similar — interpret in context.*

---

## PDF sync snapshot (auto-updated: 25 Apr 2026)

- `05Apr26/class-05-embedding-encoding-handwritten.pdf` — 19 pages; scanned/handwritten style (no selectable text extracted). Notes use transcript + manual page review where available.
- `05Apr26/word2vec_research_paper.pdf` — 12 pages; text extracted (38744 chars). Key snippet: Efﬁcient Estimation of Word Representations in Vector Space Tomas Mikolov Google Inc., Mountain View, CA tmikolov@google.com Kai Chen Google Inc., Mountain View, CA kaichen@google. | than a few hundred of millions of words, with a modest dimensionality of the word vectors between 50 - 100. We use recently proposed techniques for measuring the quality of the res
