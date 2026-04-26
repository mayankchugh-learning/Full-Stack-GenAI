# Full Stack Generative AI & Agentic AI Bootcamp
## Session Notes — 4th April 2026
**Topic: Encoding & Embedding (Part 1)**
**Instructor: Sunny Savita (Krishnak Academy)**
**Coverage: First 2h 40min — One-Hot Encoding + Bag of Words**

---

## Session Roadmap (Overall Module Plan)

This session is part of a larger progression:

1. **Encoding & Embedding** ← *current module (today + tomorrow)*
2. Transformer Architecture
3. Core Generative AI (APIs, fine-tuning, RAG, Multimodal RAG, Agents, Agentic AI, Cloud)
4. End-to-End Projects

> Key message: Encoding/Embedding fundamentals are directly prerequisite to understanding RAG and Transformers. These will appear in GenAI interviews.

---

## Why Text Must Be Converted to Numbers

Machine learning and deep learning algorithms cannot operate on raw text. Text must be converted into numerical vectors before it can be fed to any algorithm.

The historical progression of text vectorisation techniques:

| Era | Technique | Used With |
|-----|-----------|-----------|
| Pre-2015 (Classical NLP) | One-Hot Encoding | Logistic Regression, Naïve Bayes |
| ~2015 (Classical NLP) | Bag of Words | Naïve Bayes, RNN, LSTM |
| ~2015 (Classical NLP) | TF-IDF | Naïve Bayes, classical ML |
| Post-2017 (Deep Learning / GenAI) | Word2Vec | RNN, LSTM, GRU |
| Current (GenAI era) | Transformer-based Embeddings | LLMs, RAG, Agents |

> In interviews for GenAI roles, you **will** be asked about encoding methods. Do not underestimate TF-IDF.

---

## Core Concept: Vocabulary

**Vocabulary = the set of unique words extracted from your data.**

This is the foundational step in all encoding methods.

**Example data (4 documents):**
```
D1: People watch movie
D2: People watch cricket
D3: People like movie
D4: People like cricket
```

**Vocabulary (5 unique words):** `people, watch, like, movie, cricket`

> **Critical Rule:** Vocabulary size = vector dimension.
> - If vocabulary size = 5 → vector dimension = 5
> - If vocabulary size = 10,000 → vector dimension = 10,000
> - If vocabulary size = 50,000 → vector dimension = 50,000

In code, vocabulary is automatically sorted **alphabetically** by sklearn libraries.

---

## Method 1: One-Hot Encoding

### Concept
Represents the **presence or absence** of each vocabulary word in a document.
- Word present → `1`
- Word absent → `0`

### Two Representations

**Document-level (used in classical ML):**
Each document → single vector of 0s and 1s.

| | people | watch | like | movie | cricket |
|--|--|--|--|--|--|
| D1 | 1 | 1 | 0 | 1 | 0 |
| D2 | 1 | 1 | 0 | 0 | 1 |
| D3 | 1 | 0 | 1 | 1 | 0 |
| D4 | 1 | 0 | 1 | 0 | 1 |

**Word-level (used in Deep Learning — RNN, LSTM, GRU):**
Each **word** → a separate vector.

Example: Sentence = "People watch movie" (vocabulary: people, watch, like, movie, cricket)

| Word | people | watch | like | movie | cricket |
|------|--------|-------|------|-------|---------|
| people | 1 | 0 | 0 | 0 | 0 |
| watch | 0 | 1 | 0 | 0 | 0 |
| movie | 0 | 0 | 0 | 1 | 0 |

Dimension = **3 × 5** (3 words × 5 vocabulary size)

### Pros
- Extremely easy to understand and implement
- Simple binary representation (0 and 1)
- No model training required — direct mapping
- Anyone can explain this in an interview

### Cons (Interview-Critical)

| Problem | Explanation |
|---------|-------------|
| **Sparse Matrix** | With vocabulary of 10,000 words, a 3-word sentence produces a vector with 9,997 zeros — wasteful, no information |
| **High Dimensionality** | Larger vocabulary → larger vectors → memory and compute problems |
| **No Semantic Understanding** | `0` and `1` carry no meaning — "like" and "love" are treated identically |
| **Out-of-Vocabulary (OOV)** | If a new word appears at inference time that wasn't in training vocabulary, it cannot be represented — must be compensated with `0` |

> **OOV Example:** Vocabulary built on D1–D4. New sentence: *"People enjoy movie."* The word `enjoy` is not in vocabulary → compensated with `0`. This is information loss.

### sklearn Implementation

```python
from sklearn.preprocessing import OneHotEncoder
import numpy as np

documents = [
    "people watch movie",
    "people watch cricket",
    "people like movie",
    "people like cricket"
]

# Tokenise
tokens = [sentence.lower().split() for sentence in documents]

# Reshape to 2D word matrix (required format for OneHotEncoder)
all_words = [[word] for sentence in tokens for word in sentence]

# Create encoder object
encoder = OneHotEncoder(sparse_output=False)

# Fit: learns vocabulary, validates data
encoder.fit(all_words)

# Check vocabulary
print(encoder.categories_[0])

# Transform each sentence
for sentence in tokens:
    for word in sentence:
        encoded = encoder.transform([[word]])
        print(encoded)
```

**Key parameter:** `sparse_output=False` → returns a dense NumPy array instead of sparse matrix, making it human-readable.

---

## sklearn: fit() vs transform() vs fit_transform()

This pattern appears in **every** sklearn class. Understanding it is fundamental.

| Method | What It Does |
|--------|-------------|
| `fit(data)` | Learns/validates the data. Builds vocabulary. Keeps data internally. Does NOT transform yet. |
| `transform(data)` | Applies the actual logic. Converts data to vector representation. |
| `fit_transform(data)` | Calls both in one step. Efficient shortcut. |

> `fit` = prepare/validate the data
> `transform` = apply the conversion logic

---

## Method 2: Bag of Words (BoW)

### Concept
Represents the **frequency (count)** of each vocabulary word in a document. Unlike one-hot encoding, it captures how many times a word appears.

> If a word appears more often, it is assumed to be more important.

**Same example data (extended with repetition for illustration):**

Vocabulary (8 unique words after stop word removal): `again, and, cricket, like, lot, movie, people, watch`

| | again | and | cricket | like | lot | movie | people | watch |
|--|--|--|--|--|--|--|--|--|
| D1 | 1 | 1 | 0 | 0 | 0 | 1 | 2 | 2 |
| D2 | 0 | 1 | 2 | 0 | 0 | 0 | 1 | 2 |

> Vector dimension = 8 (vocabulary size). For D1: dimension = 1×8.

### One-Hot vs Bag of Words — Key Distinction

| Sentence | One-Hot (D1) | Bag of Words (D1) |
|----------|--------------|-------------------|
| "People watch cricket, watch cricket" | people=1, watch=1, cricket=1 | people=1, watch=2, cricket=2 |

**One-Hot only cares about presence. Bag of Words cares about presence AND occurrence.**

### Critical Problem Example — Word Order Is Lost

Dog bites man → `[1, 1, 1]`
Man bites dog → `[1, 1, 1]`

Same vector. Completely different meaning. BoW cannot distinguish these.

### Pros
- Easy to understand and implement
- Captures word frequency (higher occurrence = higher importance)
- No model training required
- Works well for classical NLP tasks (text classification, spam detection, sentiment analysis)

### Cons (Interview-Critical)

| Problem | Explanation |
|---------|-------------|
| **Ignores Word Order** | "Dog bites man" and "Man bites dog" produce identical vectors |
| **No Semantic Understanding** | "like" and "love" are unrelated in this representation |
| **High Dimensionality** | Vocabulary of 50,000 → vector of dimension 50,000 |
| **Sparse Representation** | Still mostly zeros for large vocabularies |
| **Out-of-Vocabulary (OOV)** | Same problem as one-hot: unknown words → 0 |
| **Overemphasis on Frequent Words** | "Movie movie movie" gets high importance despite being meaningless |

> OOV in BoW: If `lion` is not in vocabulary and you transform "Lion bites man", the word `lion` maps to `0`. The vector loses information about that word entirely. To fix it, you must call `fit()` again with the updated data.

### sklearn Implementation

```python
from sklearn.feature_extraction.text import CountVectorizer

documents = [
    "people watch movie",
    "people watch cricket",
    "people like movie",
    "people like cricket"
]

# Create object
bow = CountVectorizer()

# fit_transform: fit + transform in one call
bow_matrix = bow.fit_transform(documents)

# View the matrix
print(bow_matrix.toarray())

# View vocabulary
print(bow.get_feature_names_out())
```

**Separating fit and transform (for real-world train/test scenarios):**

```python
bow.fit(train_documents)          # Learn vocabulary from training data
bow_matrix = bow.transform(test_documents)  # Apply to test data
```

> **Why separate?** In production, you fit on training data only, then transform new/unseen data. You never refit on test data.

---

## Method 3: TF-IDF (Term Frequency — Inverse Document Frequency)

> Full form: **Term Frequency × Inverse Document Frequency**
> Core idea: Not just how often a word appears, but **how important** it is across the entire corpus.

### The Problem TF-IDF Solves

BoW overemphasises frequent but meaningless words (e.g. "the", "is", "a"). TF-IDF **reduces the weight of common words** and **increases the weight of more informative/rare words**.

### Formulas

**TF (Term Frequency):**
```
TF(word, D) = Occurrences of word in sentence D
              ─────────────────────────────────
              Total words in sentence D
```

**IDF (Inverse Document Frequency):**
```
IDF(word) = log( Total number of sentences
                 ──────────────────────────────────────── )
                 Number of sentences containing the word
```

**TF-IDF Score:**
```
TF-IDF(word, D) = TF(word, D) × IDF(word)
```

### Why Multiply TF × IDF?

| Component | What it captures |
|-----------|-----------------|
| TF | Importance of the word **within** a specific document |
| IDF | Importance of the word **across** the entire corpus |
| TF × IDF | Combined: high score only if word is frequent in this doc AND rare across all docs |

### Why log() in IDF?

Without log, raw IDF values become too extreme and destabilise the model:

| Word type | Documents (N=1000) | Raw IDF (N/DF) | log(N/DF) |
|-----------|-------------------|-----------------|-----------|
| Rare (appears in 1 doc) | 1 | 1000 | ≈ 6.9 |
| Medium (appears in 10 docs) | 10 | 100 | ≈ 4.6 |
| Common (appears in 500 docs) | 500 | 2 | ≈ 0.69 |

Without log: values are 1000 vs 100 vs 2 — rare word dominates everything.
With log: values are 6.9 vs 4.6 vs 0.69 — balanced, order preserved.

> Log smooths extreme differences while keeping the importance order intact. It compresses large values so rare words don't overpower everything.

### Worked Example

**Data:**
```
D1 → people watch cricket
D2 → cricket watch cricket
D3 → people give comment
D4 → cricket give comment
```

**Vocabulary:** `['comment', 'cricket', 'give', 'people', 'watch']`

**Log values used:**
- log(4/3) ≈ 0.28768
- log(4/2) = log(2) ≈ 0.69315

**TF-IDF Matrix (formula values):**

| | comment | cricket | give | people | watch |
|--|---------|---------|------|--------|-------|
| D1 | 0 | (1/3)×log(4/3) | 0 | (1/3)×log(4/2) | (1/3)×log(4/2) |
| D2 | 0 | (2/3)×log(4/3) | 0 | 0 | (1/3)×log(4/2) |
| D3 | (1/3)×log(4/2) | 0 | (1/3)×log(4/2) | (1/3)×log(4/2) | 0 |
| D4 | (1/3)×log(4/2) | (1/3)×log(4/3) | (1/3)×log(4/2) | 0 | 0 |

**TF-IDF Matrix (computed values):**

| | comment | cricket | give | people | watch |
|--|---------|---------|------|--------|-------|
| D1 | 0 | 0.096 | 0 | 0.231 | 0.231 |
| D2 | 0 | 0.191 | 0 | 0 | 0.231 |
| D3 | 0.231 | 0 | 0.231 | 0.231 | 0 |
| D4 | 0.231 | 0.096 | 0.231 | 0 | 0 |

**Interpretation:**
- `cricket` appears in 3 of 4 documents → low IDF → low score (0.096 in D1)
- `comment` appears in only 2 documents → higher IDF → higher score (0.231 in D3, D4)
- `people` is rare enough to score 0.231 in documents where it appears

### Pros

| Advantage | Detail |
|-----------|--------|
| **Captures word importance** | Not just count, but discriminative weight — rare words get higher weight |
| **Reduces common word dominance** | IDF penalises words that appear everywhere (stop words) |
| **Better than BoW for relevance** | Used in search engines, information retrieval, document ranking |
| **No training required** | Direct mathematical calculation, same as BoW |
| **Interpretable** | TF × IDF logic is clear and mathematically grounded |

### Cons

| Problem | Detail |
|---------|--------|
| **Ignores word order** | Same problem as BoW — "dog bites man" = "man bites dog" |
| **No semantic understanding** | "car" and "automobile" treated as completely different |
| **Still sparse and high-dimensional** | Vocabulary size = vector size, many zeros |
| **Doesn't handle context** | "bank" (river) vs "bank" (finance) → same vector |
| **OOV problem** | New words not in vocabulary → ignored |

> **Critical summary:** TF-IDF improves over BoW by adding importance weighting, but **still fails to understand meaning and context**. This is the fundamental limitation that embeddings solve.

---

## Method 4: Embeddings (Preview — Next Session)

> Core question: **"What is the meaning of the text in context?"** (word, sentence, paragraph, corpus)

### The Problem All Previous Methods Share

OHE, BoW, and TF-IDF all treat words as isolated symbols with no relationship to each other.

**Example:**
- Sentence 1: "I like this movie"
- Sentence 2: "I love this film"

| Method | "like" vs "love" | "movie" vs "film" | Model conclusion |
|--------|-----------------|-------------------|-----------------|
| OHE / BoW / TF-IDF | ≠ (different) | ≠ (different) | Sentences are completely different |
| **Embeddings** | ≈ (similar) | ≈ (similar) | Sentences are semantically similar |

Embeddings capture **semantic + contextual understanding** — words with similar meaning have similar vector representations.

### Evolution of Embedding Methods

```
Word2Vec  →  Transformer-based Models (BERT, OpenAI Embeddings, etc.)
```

- **Word2Vec** — foundational model; important for understanding the concept
- **Transformer-based models** — current state-of-the-art; used in all modern GenAI/RAG systems

> Embeddings are the **bridge** between classical NLP encoding and modern GenAI. Understanding why OHE/BoW/TF-IDF fall short is what motivates the need for embeddings.

---

## What Is Covered in the Next Session (Deferred)

- **Word2Vec** — theory + practical
- **Transformer-based Embeddings** — mechanism and usage
- **Sentence Embeddings** — practical implementation
- **Assignment walkthrough** — full encoding + embedding assignment

---

## Tools & Environment Notes

- **Python version used:** 3.11 (instructor had issues with 3.12)
- **Virtual environment:** `env` (custom venv)
- **Libraries:** `scikit-learn`, `numpy`
- **Notebook:** Jupyter (`.ipynb`)
- **AI Coding Assistants shown:** GitHub Copilot, Claude Code (in VS Code)

> Instructor's philosophy: *Learn the concept first. Then use AI coding assistants (Copilot, Claude Code) to generate/verify implementation. Concept clarity is what lets you validate AI-generated code.*

---

## Key Interview Questions (Full Module)

**One-Hot Encoding**
1. What is One-Hot Encoding? What does it represent?
2. What are the pros and cons of One-Hot Encoding?
3. What is the Out-of-Vocabulary (OOV) problem? Give an example.
4. What is a sparse matrix? Why is it a problem?
5. What is the relationship between vocabulary size and vector dimension?
6. What is the difference between document-level and word-level OHE representation?

**Bag of Words**
7. How does Bag of Words differ from One-Hot Encoding?
8. What happens to word order in Bag of Words? Give a concrete example.
9. Why does BoW fail on "movie movie movie"?
10. What is the OOV problem in BoW? How is it handled?

**TF-IDF**
11. What is the full form of TF-IDF?
12. Write the formula for TF and IDF.
13. Why do we use log in IDF? What happens without it?
14. Why multiply TF × IDF? What does each component capture?
15. What does TF-IDF fail to capture that embeddings solve?
16. What is the "context problem" in TF-IDF? (Example: "bank")

**sklearn**
17. In sklearn, what is the difference between `fit()`, `transform()`, and `fit_transform()`?
18. Why should you NEVER call `fit()` on test data?
19. What is `CountVectorizer`? What is `TfidfVectorizer`?

**Embeddings (conceptual)**
20. Why are OHE/BoW/TF-IDF insufficient for modern NLP?
21. How do embeddings represent "like" ≈ "love"?
22. What is the progression from Word2Vec to transformer-based embeddings?

---

## Quick Concept Cheat Sheet

| Term | Definition |
|------|-----------|
| **Vocabulary** | Set of unique words extracted from training data |
| **Vector** | A collection of numbers representing a document or word |
| **Vector Dimension** | Equals vocabulary size |
| **Sparse Matrix** | A matrix where most values are zero |
| **Dense Matrix** | A matrix where most values are non-zero (what embeddings produce) |
| **OOV** | Out-of-Vocabulary: a word that wasn't in training data vocabulary |
| **Document-level representation** | Entire sentence → single vector |
| **Word-level representation** | Each word → individual vector |
| **fit()** | Learns/prepares data, builds vocabulary |
| **transform()** | Converts data into numerical representation |
| **fit_transform()** | Does both in one call |
| **Stop words** | Common words (a, the, is) typically removed during pre-processing |
| **CountVectorizer** | sklearn class implementing Bag of Words |
| **OneHotEncoder** | sklearn class implementing One-Hot Encoding |
| **TfidfVectorizer** | sklearn class implementing TF-IDF |
| **TF** | Term Frequency = word count in doc / total words in doc |
| **IDF** | Inverse Document Frequency = log(total docs / docs containing word) |
| **TF-IDF** | TF × IDF — importance of word in a doc relative to corpus |
| **Semantic understanding** | Knowing that "like" ≈ "love", "car" ≈ "automobile" |
| **Embedding** | Dense vector capturing semantic + contextual meaning of text |
| **Word2Vec** | Foundational embedding model (pre-transformer) |
| **Transformer-based embedding** | Current SOTA — used in LLMs, RAG, semantic search |
