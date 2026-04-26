# Session notes — 11 Apr 2026 — Word2Vec (CBOW & skip-gram) + classical notebook

## Transcript timing extraction (session + Q&A split)

- Session start time: `00:03:40.000`
- Session conclusion time (teaching concluded cue): `04:43:16.500`
- Q&A segment: `04:43:15.770` to `04:46:24.929` (`00:03:09.159`)
- Full recording span (`.vtt` first cue to last cue): `04:42:44.929`


**Source:** `_Recording.transcript.vtt` (speech-to-text may garble “Word2Vec” as “word to bag,” “SIBO” for CBOW, etc.)  
**Instructor:** Sunny Savita  

**Related hands-on:** [`classical_word_embedding.ipynb`](classical_word_embedding.ipynb), [`Class-06-11-Apr-handwritten-notes-word2vec.pdf`](Class-06-11-Apr-handwritten-notes-word2vec.pdf), plus [`../09-Day-12Apr26/classical_word_embedding.ipynb`](../09-Day-12Apr26/classical_word_embedding.ipynb) and [`../09-Day-12Apr26/custom_word2vec_training.ipynb`](../09-Day-12Apr26/custom_word2vec_training.ipynb). The **12 Apr** folder has the longer notebook walkthrough in [`../09-Day-12Apr26/Notes.md`](../09-Day-12Apr26/Notes.md).

---

## Opening themes (logistics)

- **Assignment** from prior class: many submissions; solutions promised on a **Monday** timeline; **mega challenge** in ~month 3 with prizes / course access (idea stage).
- **Resources** live on **GitHub** under the shared bootcamp repo; new joiners pointed to **earlier class recordings** and **Notion** notes for commands and links.
- Environment: **Python 3.11** called out for compatibility with **Gensim** vs **3.12** on some stacks.

---

## Word2Vec: two training objectives

| Technique | Idea (high level) |
|-----------|-------------------|
| **CBOW** (continuous bag-of-words) | Predict a **target** word from **context** (surrounding words in a window). |
| **Skip-gram** | Predict **context** from a **target** word. |

**Window size** controls how much context is considered. The research paper (Word2Vec) defines both; a **pretrained** model (e.g. **Google News 300-d**) may be trained primarily with **skip-gram** (as stated in session for that checkpoint).

---

## Where is the “embedding”?

- In a small neural setup for Word2Vec, the **hidden layer** weights (or the corresponding lookup row for a token) serve as the **word vector** — what downstream tasks call the **embedding**.
- **Cosine similarity** and **`most_similar`**-style queries use these vectors to find related words.

---

## Classical pretrained demo

- Notebook **`classical_word_embedding`** (see `09-Day-12Apr26`): load **gensim** downloader model **`word2vec-google-news-300`** — large, pretrained **KeyeVectors**; illustrates **analogies** and similarity.
- **OOV / rare names:** model may return a vector for unseen-like tokens but it can be a **weak** representation (example discussed in Q&A).

---

## Static vs contextual embeddings

- **Word2Vec** (and similar) give **one vector per word type** — **bank** has the same vector whether the meaning is **river** or **money** → limitation for polysemy.
- **Transformers** build **contextual** representations; instructor tied this to **self-attention** and **dynamic** embeddings vs fixed Word2Vec tables.

---

## Day’s closing arc

- Move from Word2Vec intuition toward **sentence embeddings** and **transformer-based** embedding APIs in later classes.
- For notebook details, cell order, and training a **small custom** Word2Vec, use **`09-Day-12Apr26/Notes.md`** as the primary in-repo study guide.

---

*Use the `.vtt` timestamps to replay derivations on the whiteboard and live Q&A.*
