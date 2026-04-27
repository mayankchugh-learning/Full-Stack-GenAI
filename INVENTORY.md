# Repository inventory

Generated for the bootcamp workspace: session folders by date, assignments, and shared config.  
**Note:** Local virtual environments (`.venv`), Python caches, and Jupyter checkpoints are not listed; they are typically gitignored.

**Order:** Dated folders are listed **oldest → newest** (ascending by session date). Non-dated folders (`Assignment-*`, `Class-*`) are at the end.

---

## Root (project files)

| Item | Role |
|------|------|
| `README.md` | Environment setup (`uv`, Option A/B) |
| `pyproject.toml`, `uv.lock` | Root Python project + lockfile (Option B notebooks) |
| `requirements.txt` | Pointer only; use `uv sync` per README |
| `.gitignore`, `.gitattributes` | Git rules and line endings |
| `.python-version` | Python version hint for `uv`/tooling |
| `main.py` | Small placeholder script at repo root |
| `Notes.txt` | Personal links and notes |
| `Full-Stack GenAI Bootcamp v1.0.pdf`, `Copy of Full-Stack GenAI Bootcamp v1.0 (1).pdf` | Course PDF copies |

---

## Folders by size (approximate; excludes nested `.venv`)

Sorted **by date ascending**, then non-dated.

| Folder | Files | ~Size | Contents (summary) |
|--------|------:|------:|--------------------|
| `01-Day-15Mar26` | 1 | small | Session transcript |
| `02-Day-22Mar26` | 9 | ~13 MB | Zip, UV guide PDFs, notes, transcript |
| `03-Day-28Mar26` | 13+ | varies | Class PDFs, `class/` uv project (see below) |
| `04-Day-29Mar26` | 3 | ~6 MB | Class 03 encoding PDFs, transcript |
| `05-Day-04Apr26` | 4 | ~6 MB | Encoding notebook, notes, PDF |
| `06-Day-05Apr26` | 8 | ~10 MB | Encoding notebook copy, PDFs, transcript |
| `07-Day-09Apr26` | 0 | — | Empty placeholder folder |
| `08-Day-11Apr26` | 6 | ~15 MB | Transcript + Notes + moved Word2Vec notebook/PDF + checklists |
| `09-Day-12Apr26` | 8 | ~35 MB | Word2Vec notebooks, notes, PDFs, `data/` stories |
| `10-Day-18Apr26` | 14 | varies | Class 08 SOTA embeddings assets (notebook copies, PDFs, images, notes/checklist, transcript) |
| `11-Day-19Apr26` | 5 | ~8 MB | Class 09 intro-transformer session (Notion + handwritten PDFs, notes/checklist, transcript) |
| `12-Day-25Ap26` | 4 | ~7 MB | Class 10 handwritten notes PDF + transcript + notes/checklist |
| `13-Day-26Apr26` | 4 | ~7 MB | Class continuation (transformer internals) PDF + transcript + notes/checklist |
| `Assignment-01-Text_Encoding` | 1 | tiny | Assignment PDF |

---

## `01-Day-15Mar26`

| File | Type |
|------|------|
| `session_Recording...transcript.vtt` | WebVTT |

---

## `02-Day-22Mar26` — UV intro / March 22 bundle

| File | Type |
|------|------|
| `22-03-2026.zip` | Archive |
| `22-03-2026/` | Extracted copy: `22-03-2026_notes.pdf`, `a.txt`, `uv_master_guide.pdf` |
| `22-03-2026_handwritten-notes.pdf`, `uv_master_guide.pdf` (also at folder root) | PDF |
| `Notes.txt`, `a.txt` | Notes |
| `Recording.transcript.vtt` | WebVTT |

---

## `03-Day-28Mar26` — March 28 class + `class/` project

| File | Type |
|------|------|
| `class-02-march-28-general discussion.pdf`, `live-class-notion-notes.pdf` | PDF |
| `notes.txt`, `test.py` | Text / Python |
| `Session_Recording...transcript.vtt` | WebVTT |
| **`class/`** | **`uv` project:** `pyproject.toml`, `uv.lock`, `encoding-embedding.ipynb`, `main.py`, `README.md`, `requirements.txt`, `.python-version` (local `.venv` not listed) |

---

## `04-Day-29Mar26` — Class 03 encoding

| File | Type |
|------|------|
| `Class-03-encoding-embedding-handwritten.pdf`, `Class-03-encoding-embedding-notion.pdf` | PDF |
| `modern _Recording.transcript.vtt` | WebVTT |

---

## `05-Day-04Apr26` — Encoding

| File | Type |
|------|------|
| `encoding.ipynb` | Jupyter |
| `session_04Apr26_encoding_embedding_notes.md` | Notes |
| `encoding-handwritten-notes-4-apr.pdf` | PDF |
| `session_Recording...transcript.vtt` | WebVTT (gitignored pattern `**/*.vtt` if rule applied) |

---

## `06-Day-05Apr26` — Embedding / Word2Vec materials

| File | Type |
|------|------|
| `encoding (1).ipynb` | Jupyter (duplicate name) |
| `main.py` | Python |
| `requirements (1).txt`, `gitignore.txt`, `README (2).md` | Config / readme copies |
| `class-05-embedding-encoding-handwritten.pdf`, `word2vec_research_paper.pdf` | PDF |
| `GMT...Recording.transcript.vtt` | WebVTT |

---

## `07-Day-09Apr26`

Empty (no tracked files in inventory snapshot).

---

## `08-Day-11Apr26`

| File | Type |
|------|------|
| `_Recording.transcript.vtt` | WebVTT |
| `Notes.md` | Notes |
| `Class-06-11-Apr-handwritten-notes-word2vec.pdf` | PDF (moved from old class folder) |
| `classical_word_embedding.ipynb` | Jupyter (moved from old class folder) |
| `CHECKLIST.md`, `CHECKLIST-Class-06-11-Apr-Word2vec-with-practical.md` | Checklist files (canonical + legacy redirect) |

---

## `09-Day-12Apr26` — Word2Vec practicals

| File | Type |
|------|------|
| `classical_word_embedding.ipynb`, `custom_word2vec_training.ipynb` | Jupyter |
| `Notes.md` | Notes |
| `Class-06-11-Apr-handwritten-notes-word2vec.pdf`, `Class-07-12-Apr-handwritten-notes.pdf` | PDF |
| `data/story1.txt`, `data/story2.txt` | Corpus text |
| `m_Recording.transcript (1).vtt` | WebVTT |

---

## `10-Day-18Apr26` — April 18 session

| File | Type |
|------|------|
| `Notes.md`, `CHECKLIST.md` | Notes + checklist |
| `SOTA-llm-embedding.ipynb`, `SOTA-llm-embedding-mine.ipynb` | Jupyter (main + personal copy) |
| `Class-08-18-Apr-SOTA-Transformer-Embedding-Methods/SOTA-llm-embedding.ipynb` | Jupyter (nested duplicate path) |
| `Class-08-18-Apr-Notion-Notes.pdf`, `Class-08-18-Apr-Hand-written-notes.pdf` | PDF |
| `images.jpg`, `image/sunny-savita.png` | Session image assets |
| `image/feedforward-nn-multi-layer.png`, `image/feedforward-nn-multi-layer.svg`, `image/attention-is-all-you-need-encoder-decoder-figure1.png` | Diagram assets added for notes |
| `_Recording.transcript.vtt` | WebVTT (local/gitignored by `**/*.vtt`) |
| `.env` | Local environment file (secrets; do not commit) |

---

## `11-Day-19Apr26` — April 19 session (Class 09)

| File | Type |
|------|------|
| `Notes.md`, `CHECKLIST.md` | Notes + checklist |
| `Class-09-19-Apr-Notion-Notes.pdf`, `Class-09-19-Apr-Handwritten-Notes.pdf` | PDF |
| `Recording.transcript.vtt` | WebVTT |

---

## `12-Day-25Ap26` — April 25 session (Class 10)

| File | Type |
|------|------|
| `Notes.md`, `CHECKLIST.md` | Notes + checklist |
| `Class-10-25-Apr-Handwritten-notes.pdf` | PDF (handwritten/scanned board notes) |
| `Recording.transcript_.vtt` | WebVTT |

---

## `13-Day-26Apr26` — April 26 session (Class continuation)

| File | Type |
|------|------|
| `Notes.md`, `CHECKLIST.md` | Notes + checklist |
| `Class-10-25-Apr-Handwritten-notes.pdf` | PDF (handwritten/scanned board notes) |
| `Recording.transcript.vtt` | WebVTT |

---

## `Assignment-01-Text_Encoding`

| File | Type |
|------|------|
| `Text_Feature_Engineering_Assignment.pdf` | Assignment PDF |

---

## `Class-06-11-Apr-Word2vec-with-practical` (migrated)

This folder was removed; files were moved into [`08-Day-11Apr26/`](08-Day-11Apr26/).  
Use `08-Day-11Apr26` as the canonical location.

---

## Legend

- **`.ipynb`** — Run with Jupyter; kernels described in `README.md` (Option A vs B).
- **`.vtt`** — Session transcripts; your `.gitignore` may exclude `**/*.vtt` from commits.
- **`03-Day-28Mar26/class`** — Full ML stack: use `uv sync` inside that directory (Python 3.13+ per its `pyproject.toml`).

To refresh this list after adding files, re-run a folder listing or update this file by hand.
