# Session notes — 4 Apr 2026 — Encoding & embedding (Part 1)

## Transcript timing extraction (session + Q&A split)

- Session start time: `00:00:07.859`
- Session conclusion time (teaching concluded cue): `04:09:58.099`
- Q&A segment: `04:49:25.969` to `05:27:02.968` (`00:37:36.999`)
- Full recording span (`.vtt` first cue to last cue): `05:26:55.109`


**Source:** `session_Recording.cutfile.20260405061846817.transcript.vtt`  
**Instructor:** Sunny Savita (Krishnak Academy)

This file is the **folder index** for the session. Step-by-step theory, sklearn examples, and exam-style pros/cons are in the dedicated write-up below.

---

## Canonical technical write-up

**→ [`session_04Apr26_encoding_embedding_notes.md`](session_04Apr26_encoding_embedding_notes.md)**  

That document covers:

- Roadmap (encoding/embedding → transformers → GenAI stack)
- Why text must become numbers; **vocabulary** definition
- **One-hot**, **BoW**, **TF-IDF** with tables and sklearn snippets
- Interview-focused **cons** (sparsity, OOV, no semantics)
- Transition toward **embeddings** and later modules

---

## Other assets in this folder

| Asset | Role |
|-------|------|
| [`encoding.ipynb`](encoding.ipynb) | Live coding / exercises for the session |
| [`encoding-handwritten-notes-4-apr.pdf`](encoding-handwritten-notes-4-apr.pdf) | Handwritten board notes |
| `.vtt` (local, gitignored) | Full transcript with timestamps |

---

## What to study first

1. Skim this **`Notes.md`** (you are here).  
2. Work through **`session_04Apr26_encoding_embedding_notes.md`** top to bottom.  
3. Run **`encoding.ipynb`** when you are doing hands-on mastery (see folder [`CHECKLIST.md`](CHECKLIST.md)).

---

## See also

- [`../04-Day-29Mar26/Notes.md`](../04-Day-29Mar26/Notes.md) — class 03 setup and definitions  
- [`../06-Day-05Apr26/Notes.md`](../06-Day-05Apr26/Notes.md) — next session (TF-IDF emphasis, assignment, Word2Vec thread)

---

## PDF sync snapshot (auto-updated: 25 Apr 2026)

- `05-Day-04Apr26/encoding-handwritten-notes-4-apr.pdf` — 16 pages; scanned/handwritten style (no selectable text extracted). Notes use transcript + manual page review where available.
