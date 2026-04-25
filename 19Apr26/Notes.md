# Session notes — 19 Apr 2026 — Class 09: NLP timeline → Transformers (intro)

**Source:** `Recording.transcript.vtt`  
**Instructor:** Sunny Savita  

---

## Materials in this folder (`19Apr26/`)

| File | Role |
|------|------|
| [`Class-09-19-Apr-Notion-Notes.pdf`](Class-09-19-Apr-Notion-Notes.pdf) | Notion export — links, class structure (per live session). |
| [`Class-09-19-Apr-Handwritten-Notes.pdf`](Class-09-19-Apr-Handwritten-Notes.pdf) | Handwritten notes from class. |
| [`Notes.md`](Notes.md) | This summary (merged from transcript). |
| `Recording.transcript.vtt` | Full transcript (often **gitignored**; keep locally next to notes). |

**One-line topic:** **From RNN/LSTM and encoder–decoder to the Transformer** — historical context, **attention vs self-attention** intuition, and the **high-level data path** inside a transformer (tokenize → embed → positional encoding → self-attention → feed-forward).

---

## Bridge from the previous class (`18Apr26`)

- Prior session covered **SOTA embeddings** (transformer-based models), **similarity search** (dot product, cosine similarity, Euclidean distance), and demos on **text** (and briefly **images**); **audio/video** called out of scope for now.
- **Embedding model evaluation** (“best embedding model”) deferred to the **RAG** chapter, with a promise to revisit **similarity metrics** there with examples and math.
- Today officially starts the **transformer** thread; instructor reminds first-timers to catch up via **dashboard recordings** and **community** for missing resources.

---

## NLP / LLM timeline (as narrated in class)

Rough progression discussed (years approximate in speech — verify in papers):

1. **RNN** → **LSTM** / **GRU** (sequence models; process tokens **sequentially**).
2. **Encoder–decoder** (concept; often **LSTM inside** encoder and decoder) — ~2014–15.
3. **Encoder–decoder with attention** — ~2016; **attention** first introduced for **machine translation** (align source ↔ target words); **not** self-attention yet.
4. **ULMFiT** (Universal Language Model Fine-tuning) — pre-train LSTM LM then fine-tune on tasks.
5. **Transformer** — paper **“Attention Is All You Need”** (2017 in transcript as “2018” in one cue — **canonical year is 2017**); enables **parallel** processing and scaling vs LSTM bottlenecks.
6. Path to **LLMs**: instructor cites **LM pre-training + fine-tuning** story (e.g. ULMFiT-style thinking) leading toward large language models; **GPT-2** paper mentioned as a landmark in the “LLM pre-training” storyline.

**Interview framing (per class):** For **GenAI engineer** roles, deep architecture questions often center on the **transformer**, not every legacy block — but the **timeline** is taught for intuition.

---

## RNN/LSTM vs Transformer (high level)

| Aspect | RNN / LSTM | Transformer |
|--------|------------|---------------|
| Processing | **Sequential** steps | **Parallel** over sequence (with attention) |
| Speed / scale | Slower; harder to scale to huge data | Suited to large-scale training |
| Context | Limited by sequential hidden state path | **Self-attention** relates all positions (subject to context window in practice) |

Encoder–decoder with LSTM had drawbacks (e.g. **bottleneck**: forcing context into **one fixed-size vector**); attention helped **alignment** between languages; transformer pushes **self-attention** as the core mechanism.

---

## Attention (2016) vs self-attention (transformer)

- **Attention (encoder–decoder):** Example: **Hindi → English** translation — for a word like “Chalu”, the model learns **which English word(s)** get **more weight** (“on” vs “turn”) — **cross-language alignment**.
- **Self-attention:** Same **language** (e.g. “turn **on** the **light**”) — the model learns which **other tokens in the same sentence** “on” should attend to (**on** ↔ **light**).
- **2016** paper: attention for **MT**; **2017/2018** transformer paper: **self-attention** replaces much of the recurrent stack for the architecture taught here.

---

## Simplified transformer data path (overview for this session)

Order emphasized for training and inference alike:

1. **Tokenization** — text → tokens.
2. **Embedding** — tokens → vectors (paper example **d_model = 512**; **your** model can use other sizes).
3. **Parallel** processing of those vectors through the stack.
4. **Positional encoding (PE)** — inject order (since attention itself is permutation-sensitive without position).
5. **Self-attention** — dynamic mixing of information across positions (**“dynamic embedding”** learning stressed here).
6. **Feed-forward network (FFN)** — standard MLP block per position; **together with self-attention** described as where **most learning** happens.

**One-sentence pitch for a transformer block:** Data moves **in parallel**; core learning is **self-attention** + **feed-forward** layers (details and multi-head blocks → next sessions).

---

## Research papers & study tips (from transcript)

Mentioned or linked in Notion during class (names as spoken):

- **Sequence to sequence learning with neural networks** (encoder–decoder).
- **Neural Machine Translation by Jointly Learning to Align and Translate** — early **attention** (2016).
- **Attention Is All You Need** — transformer architecture.
- **ULMFiT** — universal language model fine-tuning.
- **Language Models are Unsupervised Multitask Learners** (**GPT-2**) — LM pre-training angle.
- Tip: upload a PDF to **ChatGPT / Claude / Notebook LM** and ask for a **plain-language summary** to digest papers faster.

---

## Q&A themes (late session, condensed)

- **Which ML models on top of BoW/TF-IDF?** Classical tabular models (logistic regression, Naive Bayes, etc.) fit **structured/numeric** features; **unstructured** text/images/audio need **neural / transformer** (or CV) pipelines. Evolution: **encoding** → **Word2Vec** → **RNN/LSTM** → **contextual / transformer embeddings** — always “turn data into numbers” then train.
- **Pre-trained embedding / LLM APIs:** Check **vendor docs** (OpenAI, Google) or **Hugging Face** for open models; versioning (e.g. `001`) is normal.
- **Generative use:** Latest transformer LLMs stressed as **generative** (content generation), not only classification.
- **Debugging RAG / doc → features:** Quality depends on **prompt**, **data cleanliness**, **model reasoning capability**; reduce noise; iterate prompts; consider **workspace/notebook corruption** if outputs repeat oddly (try fresh folder/notebook).

---

## Links backward / forward

- **Previous:** [`../18Apr26/Notes.md`](../18Apr26/Notes.md) — SOTA embeddings, similarity, CLIP bridge.
- **Next (per class):** Deeper **transformer architecture** walkthrough (multi-head attention, layer stack) and more **practical** tokenization — instructor referenced prepared low-level notes for a future class.

---

**Study order:** Read this outline → skim **Notion + handwritten PDFs** → replay tricky segments in `Recording.transcript.vtt` by timestamp → keep **`Notes.md`** updated with your own examples.

---

## PDF sync snapshot (auto-updated: 25 Apr 2026)

- `19Apr26/Class-09-19-Apr-Handwritten-Notes.pdf` — 11 pages; scanned/handwritten style (no selectable text extracted). Notes use transcript + manual page review where available.
- `19Apr26/Class-09-19-Apr-Notion-Notes.pdf` — 1 pages; text extracted (900 chars). Key snippet: Class-08-09-18-Apr-19-Apr sentence transformer: https://huggingface.co/sentence-transformers Sentence transformer models: https://huggingface.co/models?library=sentence- transforme

---

## Transcript timing extraction (session + Q&A split)

- Session start time: `00:07:25.020`
- Session conclusion time (teaching concluded cue): `02:45:05.429`
- Q&A segment: `02:52:26.300` to `03:55:56.259` (`01:03:29.959`)
- Full recording span (`.vtt` first cue to last cue): `03:48:31.239`

