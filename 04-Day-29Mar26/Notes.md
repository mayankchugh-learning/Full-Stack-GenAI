# Session notes — 29 Mar 2026 — Class 03: encoding & embedding (start)

## Transcript timing extraction (session + Q&A split)

- Session start time: `00:02:56.640`
- Session conclusion time (teaching concluded cue): `04:47:36.430`
- Q&A segment: `05:08:34.850` to `05:08:45.779` (`00:00:10.929`)
- Full recording span (`.vtt` first cue to last cue): `05:05:49.139`


**Source:** `modern _Recording.transcript.vtt`  
**Instructor:** Sunny Savita  
**Companion PDFs:** `Class-03-encoding-embedding-handwritten.pdf`, `Class-03-encoding-embedding-notion.pdf`

---

## Session purpose

First technical block of the **encoding / embedding** module: align on **vectors**, **definitions**, **count-based encodings** vs **neural embeddings**, and set up **Jupyter** + project files (`Encoding` / encoding–embedding notebook naming in session) before deeper labs (continued 4–5 Apr and beyond).

---

## Core definitions (as stated in class)

| Term | Idea |
|------|------|
| **Encoding** | **Numerical representation** of data (often text → numbers / vectors) **without** necessarily preserving rich **semantic** meaning — **count-based** / **frequency-based** methods (one-hot, BoW, TF-IDF, BM25 mentioned). |
| **Embedding** | **Meaningful** numerical representation — still a **vector** of numbers; in NLP/AI the word **embedding** is standard, in math you might say **vector** for the same structure. |
| **Vector** | List of numbers from linear algebra; both encodings and embeddings are represented as vectors. |

**Framing:** classical **encoding** methods are **sparse** (many zeros); **dense** embeddings (neural) pack more meaning per dimension. Multimodal use was mentioned: text, image, video, audio can all be turned into **embeddings** with modern models.

---

## Count-based stack (encoding path)

Order discussed for building intuition:

1. **One-hot encoding**
2. **Bag of words (BoW)**
3. **TF-IDF**  
   (Plus mentions of **BM25**, **GloVe** as names; emphasis that **one-hot + BoW + TF-IDF** are enough to grasp the *encoding* line before neural embeddings.)

---

## Neural / embedding path

- **Embeddings** are **not** count-based in the same way; modern embedding models (including those behind **OpenAI**, **Google / Gemini** naming in session) produce **dense** vectors.
- **MTEB** and similar **benchmarks** were referenced for **choosing** embedding models by task.
- **Keyword vs semantic search** — practical contrast (keyword matching vs embedding-based retrieval) was queued for the hands-on thread.
- **Sentence-level work:** discussion moved toward **sentence embeddings** and **chunking** for real pipelines (RAG-style), vs relying only on classical word-level views.

---

## Q&A themes (condensed)

- **“Count-based”** = frequency / presence patterns in the text (e.g. how often tokens appear in a doc), not learned semantics.
- **Word2Vec (static) limitation:** same word (e.g. “bank”) can get **one** vector regardless of **context** (river vs money) — contrast with **contextual** / **transformer** embeddings.
- **Where classical methods still matter:** interviews and **fundamentals**; GenAI stack leans on **transformer** embeddings and LLM internals, but encoding vocabulary shows up in screening.

---

## Links to other folders

- **Hands-on encoding notebook:** [`../05-Day-04Apr26/encoding.ipynb`](../05-Day-04Apr26/encoding.ipynb) and detailed write-up [`../05-Day-04Apr26/session_04Apr26_encoding_embedding_notes.md`](../05-Day-04Apr26/session_04Apr26_encoding_embedding_notes.md).
- **Earlier roadmap / stack:** [`../03-Day-28Mar26/Notes.md`](../03-Day-28Mar26/Notes.md) (syllabus + “modern route”).
- **Continuation:** [`../06-Day-05Apr26/Notes.md`](../06-Day-05Apr26/Notes.md) (TF-IDF emphasis, Word2Vec practical thread, assignments).

---

*Transcript is long; use timestamps in the `.vtt` file to revisit derivations and live Q&A.*

---

## PDF sync snapshot (auto-updated: 25 Apr 2026)

- `04-Day-29Mar26/Class-03-encoding-embedding-handwritten.pdf` — 10 pages; scanned/handwritten style (no selectable text extracted). Notes use transcript + manual page review where available.
- `04-Day-29Mar26/Class-03-encoding-embedding-notion.pdf` — 1 pages; text extracted (463 chars). Key snippet: Class-03-Embedding-Encoding imp note: use python 3.11 for this practical use only cpython interpreter uv python list uv python install <give the specific version of the python> uv
