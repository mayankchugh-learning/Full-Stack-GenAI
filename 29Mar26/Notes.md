# Session notes — 29 Mar 2026 — Class 03: encoding & embedding (start)

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

- **Hands-on encoding notebook:** [`../04Apr26/encoding.ipynb`](../04Apr26/encoding.ipynb) and detailed write-up [`../04Apr26/session_04Apr26_encoding_embedding_notes.md`](../04Apr26/session_04Apr26_encoding_embedding_notes.md).
- **Earlier roadmap / stack:** [`../28Mar26/Notes.md`](../28Mar26/Notes.md) (syllabus + “modern route”).
- **Continuation:** [`../05Apr26/Notes.md`](../05Apr26/Notes.md) (TF-IDF emphasis, Word2Vec practical thread, assignments).

---

*Transcript is long; use timestamps in the `.vtt` file to revisit derivations and live Q&A.*
