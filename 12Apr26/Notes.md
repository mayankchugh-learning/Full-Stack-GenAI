# Session notes — Full Stack Generative AI & Agentic AI Bootcamp

**Source:** `m_Recording.transcript (1).vtt` — content below synthesizes this transcript with the notebooks in this folder (see also [`../11Apr26/Notes.md`](../11Apr26/Notes.md) for the paired session).

**ASR note:** Speech-to-text often writes “Word2Vec” as “word to back,” “VirtuBag,” etc.

**Instructor:** Sunny Savita  

**Rough duration:** About 4 hours (session audio in transcript spans ~00:06:30–04:08)

---

## Understanding `*.ipynb` (Jupyter Notebook) files

A **Jupyter Notebook** file uses the extension **`.ipynb`**. Under the hood it is **JSON**: a structured document that lists **cells** in order. You open it in **Jupyter**, **JupyterLab**, **VS Code**, or **Cursor** and attach a **Python kernel** so code cells can run.

| Piece | Role |
|--------|------|
| **Code cells** | Python (or other language) you execute; output (prints, plots, errors) is saved below the cell if you run and save the notebook. |
| **Markdown cells** | Notes, headings, and math for humans—rendered as formatted text, not executed as code. |
| **Kernel / session** | Running code builds **in-memory state** (imports, variables). Order matters: a cell that uses `custom_model` must run **after** the cell that creates it. |
| **Outputs** | Can include text, images, and tracebacks—useful for teaching, but large outputs make the file heavy in git. |

**Why instructors use notebooks:** mix explanation with runnable demos, rerun one cell after a fix, and share the exact flow of a lesson. **Caveat:** paths like `D:\complete_content_new\...` in a notebook are from the instructor’s machine; on your machine use paths relative to the project (for example `./data/story1.txt`).

---

## Notebook walkthrough — complete logic

The repo includes two complementary notebooks; together they move from **pretrained** classical embeddings to **training your own** small Word2Vec model.

### 1. `classical_word_embedding.ipynb` — pretrained Google News Word2Vec

**Purpose:** Load a **fixed, pretrained** embedding table (no training step in your notebook). Explore what **good** Word2Vec looks like when trained on **billions** of words (Google News), then see how to turn **words** into **sentence** vectors by averaging.

**Logic flow:**

1. **Imports:** `Word2Vec` and `KeyedVectors` from Gensim, plus `gensim.downloader as api`. The lesson mainly uses **`api.load`**—you get **`KeyedVectors`**: a lookup table **word → 300-dimensional vector**.

2. **Load model:** `api.load("word2vec-google-news-300")`. The name encodes the fact: vectors have **300** dimensions (the hidden layer size of that published model). Training data was **Google News**–style text (not chat logs or code).

3. **Single-token lookup:** `model["sunny"]` returns a NumPy vector of length 300. **Phrases are not keys:** `model["i am sunny"]` raises **`KeyError`** because the vocabulary is **single tokens** (and some multiword tokens exist only if they appeared as fused tokens in training, e.g. with underscores).

4. **Similarity and neighborhoods:** `model.most_similar("man")` ranks other words by **cosine similarity** of vectors—neighbors are often semantically related (`woman`, `boy`, …). `model.similarity("man","woman")` returns one number (here, high—related concepts). Unrelated pairs (e.g. `man` vs `python`) score lower. **Self-similarity** is **1.0** for the same token.

5. **Case sensitivity:** `similarity('sunny','Sunny')` is **not** 1.0—the model treats different casings as different keys if both exist; capitalization matters for lookup.

6. **Analogies (vector arithmetic):** `vec = model['king'] - model['man'] + model['woman']` implements the famous **“king − man + woman ≈ queen”** idea in embedding space. `model.most_similar([vec])` finds words closest to that **result vector**—`queen` ranks high because the offset captures **gender** in the royal context.

7. **`doesnt_match`:** From a small set of words, Gensim picks the one whose vector is **least compatible** with the others (e.g. `DOG` among programming languages)—a crude **clustering** sanity check.

8. **Average Word2Vec for a sentence:** Words are not enough for downstream tasks that need a **single vector per sentence**. The notebook shows the classic recipe: split sentence → lowercase tokens → **`model[word]`** for each word that exists in the vocabulary → **`np.mean(word_vectors, axis=0)`** → one vector of size **300**. That is **bag-of-words at the embedding level**: word order is lost; rare or OOV words need handling (skip, or use a fallback vector).

9. **Limitations demonstrated:** `model["chatGPT"]` fails—**OOV** (out-of-vocabulary): the Google News corpus predates that token, so it was never learned. **Static** embeddings also cannot give different vectors for **“bank”** (river vs finance) in different sentences; that motivates **contextual** models (Transformers) in later classes.

---

### 2. `custom_word2vec_training.ipynb` — train Word2Vec on your own corpus

**Purpose:** Reproduce the **pipeline** the theory describes: **raw text → sentences → token lists → Gensim `Word2Vec` → inspect vectors**. The network weights are learned from **`story1.txt` / `story2.txt`** only, so quality is limited by **data size** and **hyperparameters**—that is intentional for teaching.

**Logic flow:**

1. **Imports:** `pandas`, `numpy`, `os`, `gensim`, `nltk`—core pieces are **NLTK** (sentence splitting) and **Gensim** (training).

2. **NLTK data:** `nltk.download('all')` pulls corpora and tokenizers (heavy; for production you’d download only what you need, e.g. **`punkt`** for `sent_tokenize`).

3. **Sentence segmentation:** `sent_tokenize(corpus)` splits raw text into **sentence strings** using language-aware rules.

4. **Tokenization for Word2Vec:** `simple_preprocess` from Gensim lowercases, tokenizes, and strips punctuation—each sentence becomes a **list of strings**. That matches what Gensim expects: a **corpus** = list of **documents**, where each “document” here is one **sentence** (a list of tokens).

5. **Building the full corpus:** The notebook loops over every file in a **`data/`** folder, reads each file’s text, sentence-splits, then appends `simple_preprocess(sent)` to **`story`**. Result: **`story`** is a **list of lists**—e.g. 44 sentences total in the saved run—with **`len(story)`** = number of training **documents** (here, sentences used as documents).

6. **Hyperparameters (conceptual):**
   - **`vector_size=150`:** embedding dimension (your “hidden” size)—smaller than Google’s 300 in the demo.
   - **`window=10`:** max distance between center word and context word within a sentence—larger window = broader context.
   - **`min_count=1`:** ignore tokens with frequency below this; set to **1** so rare words still appear in a **tiny** corpus (instructor lowered this so words like “farmer” / “ai” remain).
   - **`sg`:** not set → **CBOW by default** (`sg=0`); `sg=1` would be Skip-gram (see earlier theory section).

7. **Vocabulary and training:** `custom_model.build_vocab(story)` scans the corpus and builds word frequencies and index maps. **`corpus_count`** becomes the number of “documents” passed in (here, 44). `custom_model.train(story, total_examples=custom_model.corpus_count, epochs=10)` runs **10 passes** over the data; the printed tuple like `(3371, 5220)` is internal training stats (effective word counts / job sizing)—**not** “line count of your text file.”

8. **Using trained vectors:** `custom_model.wv["arjun"]` is the **150-D** vector for “arjun”. `most_similar`, `similarity`, and `doesnt_match` work like the pretrained notebook, but neighbors are **noisy** on small data—similarity may even be **negative** for words that co-occur oddly.

9. **Instructor notes in cells:** Examples like `sunny->100` are informal **frequency / analogy** scribbles, not executable code. The closing cells suggest **homework:** more data, more epochs, tune **`vector_size`**, and “play with all parameters.”

10. **Paths:** Replace any absolute path with your project’s **`./data/`** (or `os.path.join` from a variable) so the notebook runs on any machine.

---

## What this session actually covered

This class **completed the first syllabus module on embeddings** (neural Word2Vec / CBOW & Skip-gram) and added a **hands-on custom Word2Vec training** lab. **Transformers and “SOTA” embedding models were introduced as the next module**, not taught as the main technical content in this recording.

---

## Opening and plan

- Standard live checks (audio, screen share, chat confirmation).
- **Syllabus order:** embeddings and encoding first; **Transformers** come next (student question about “SOTA and Transformer today” was answered with: show **custom training** first—small amount of code—then move on in following classes).
- Instructor planned to **finish remaining Bag-of-words / Word2Vec concepts** (including revision), then **practical custom training**, then later sessions for Transformers / APIs (e.g. OpenAI, Gemini mentioned in passing).

---

## Revision — Word2Vec framing

- **Word2Vec** is described as **neural network–based training** to learn word representations (not just a single formula).
- **Pipeline reviewed:** build **vocabulary** → **one-hot** vectors → **windowed training data** (context / target) with **window size** as a **hyperparameter**.
- **Two variants:** **CBOW** (Continuous Bag of Words) and **Skip-gram** (two ways to implement Word2Vec).

---

## Theory — CBOW vs Skip-gram (as taught)

### Training diagram (CBOW-style walkthrough)

- Layers: **input → hidden → output** (with weight matrices, e.g. dimensions discussed such as **5×3** for input-to-hidden in the slide example).
- **Hidden-layer output** is treated as the **embedding vector** for that step.
- **Softmax** on the **output layer** was mentioned as the activation for producing probabilities over vocabulary (formula left to prerequisites / revision).
- **Embedding layer:** instructor noted that in the **Word2Vec paper**, **no activation** is used in the embedding/hidden block the way some other nets use activations—point was to read the paper’s setup.
- Clarification: **“Input-to-hidden weights” vs “output of hidden layer”** — the precise wording was adjusted in class; the takeaway was that the **meaningful vector you use as the word representation** comes from the **trained hidden / embedding side** of the network, after training.

### Skip-gram idea

- **Skip-gram** maps **one input word** to **multiple target / context predictions** (one-to-many structure in the training objective), contrasted with CBOW’s **many context words → one target**.

### Practical differences (summary from slides + discussion)

| Topic | CBOW | Skip-gram |
|--------|------|-----------|
| **Speed** | Faster | Slower |
| **Accuracy** (relative, per paper) | Medium | Higher |
| **Rare words** | Weaker | Stronger |
| **Data needed** | Can work with **less** data | Typically needs **more** data |
| **Inputs** | Multiple context words as inputs | **One** word as input |
| **Hidden layer** | **Averaging** across multiple input paths | **No averaging**; direct path to embedding update |

- **Rare words / “king” example:** in Skip-gram, the rare word’s embedding is **trained more directly**; in CBOW it’s **averaged** with context, so signal can be **weaker** for rare tokens (as explained in session).

---

## Practical — custom Word2Vec with Gensim

*(For a **cell-by-cell logic** of `custom_word2vec_training.ipynb` and the companion `classical_word_embedding.ipynb`, see **Notebook walkthrough — complete logic** near the top of this file.)*

### Repo / files (from class)

- Work continued under a **GitHub folder** named along the lines of **Class 6 & 7, 11–12 Apr, Word2Vec with practical** (instructor renamed/extended the existing class folder).
- New notebook (name as spoken): roughly **`custom_word2vec_training.ipynb`** (underscore-separated pieces: custom, word2vec, training).
- **`requirements.txt`:** add **`nltk`** (among other deps).
- **Data folder** with at least **`story1.txt`** and **`story2.txt`** — small custom corpus for training a **from-scratch** model (pull from GitHub after instructor push: `git add`, `git commit`, `git push`).

### Libraries and steps

- **NLTK** (*Natural Language Toolkit*): text preprocessing; **`nltk.download(...)`** to pull resources for **tokenization**, **stopwords**, **sentence/word tokenization**, **WordNet**, **POS**, etc.
- **Gensim:** e.g. **`Word2Vec`** (and related APIs) to train the model in **one line** after preprocessing (instructor emphasized simplicity of the training call vs manual NN loops).
- Load text from disk (`open`, path under `data/`, encoding such as Unicode handling as shown).
- **Hyperparameters discussed in demo:**
  - **`min_count`:** dropping rare tokens; with **small corpora**, setting **`min_count`** too high can **remove** words that barely repeat—instructor **lowered** it so words like “farmer” / “AI” appeared in similarity queries.
  - **`epochs`:** increasing epochs improved behavior in the demo; instructor said **tune epochs** for better results, with caveats about small data.
  - **`sg`:** **`sg=0` → CBOW**, **`sg=1` → Skip-gram** (instructor walked through this; always **confirm default** for your Gensim version in docs).
- **Gensim display quirks:** e.g. **corpus / document counts** in logs may not match a manual line count—instructor said **don’t rely** on that number as a simple manual tally; backend chunking differs.

### Exercises shown

- Inspect **vocabulary**, **vector size**, **most similar words** to tokens like names and “AI,” “engineer,” “data,” etc.
- **Odd-one-out** style reasoning (e.g. which word doesn’t fit a set)—used to sanity-check the small model; **errors** motivate gathering **more data** or tuning settings.

### Environment note (Q&A)

- Instructor told students to use **Python 3.11** for this practical; one student had used **3.12** and hit install issues. On **Windows**, **Gensim** (or a dependency) may require **Visual C++ build tools** for some Python versions—the instructor called that a heavy install and preferred the **3.11** path that worked in class. If installs fail, delete the bad **venv**, recreate with **3.11**, and reinstall **`requirements.txt`** (steps also in **Class 2** PDF / Notion notes). *The spoken line “Gensim is not supporting 3.11” in the transcript conflicts with “use 3.11”; treat that as a likely misstatement for **3.12** or a build-tool issue on the student’s setup.*

---

## Other topics touched briefly

- **Google’s pretrained Word2Vec:** clarification — **300 dimensions** per word for the common pretrained model (not “3 million dimensions”; that was a student misunderstanding corrected live).
- **Higher embedding dimensions (e.g. 1000+):** instructor noted very large dims often matter more in **Transformer** setups than in this **shallow Word2Vec NN** context; **embedding size** is a **hyperparameter** (grid search / experimentation).
- **Evaluating embeddings:** **MTEB** (*Massive Text Embedding Benchmark*) mentioned for **modern / LLM-oriented** embedding models—not the same as ad-hoc checks on a tiny Gensim toy model.
- **Weights:** reference to instructor’s **LoRA** video for intuition on what **weights** mean.
- **Training vs inference:** discussion that **during training** the network is learning weights; **the embedding you use in production** is the one implied **after training** when you **look up** or **infer** vectors (two phases: train vs predict).

---

## Homework and what’s next

- **This week:** **No new full official assignment**—extend **prior** homework (e.g. add Word2Vec work **on top of** earlier notebook / tasks). A **larger formal assignment** is planned **after the Transformer module**.
- **Submit** prior/extended work via the course **Google Form** when applicable; instructor clarified **dropdown** options for assignment types in Q&A.
- **Next classes:** **SOTA-style embeddings** and **Transformer** theory (instructor estimated **about 3–4 sessions** for Transformer **theory**); then roadmap includes **fine-tuning LLMs** and more **practice-heavy** blocks later in the bootcamp.

---

## Limitations of these notes

- Transcript **ASR errors** (CBOW → “CBOG,” “SIBO,” etc.) were normalized here to standard terms.
- **Exact code cells, hyperparameter numbers, and defaults** should be taken from the **GitHub notebook** and **Gensim version** you use, not only from speech.
- **Transformer architecture, attention, and SOTA models** were **not** the main taught block in this `.vtt`; follow the next sessions for that content.

---

## PDF sync snapshot (auto-updated: 25 Apr 2026)

- `12Apr26/Class-06-11-Apr-handwritten-notes-word2vec.pdf` — 26 pages; scanned/handwritten style (no selectable text extracted). Notes use transcript + manual page review where available.
- `12Apr26/Class-07-12-Apr-handwritten-notes.pdf` — 38 pages; scanned/handwritten style (no selectable text extracted). Notes use transcript + manual page review where available.

---

## Transcript timing extraction (session + Q&A split)

- Session start time: `00:06:30.020`
- Session conclusion time (teaching concluded cue): `03:56:03.860`
- Q&A segment: `04:04:20.460` to `04:07:57.949` (`00:03:37.489`)
- Full recording span (`.vtt` first cue to last cue): `04:01:27.929`

