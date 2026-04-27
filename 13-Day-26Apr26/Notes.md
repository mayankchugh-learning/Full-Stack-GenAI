# Session notes — 26 Apr 2026 — Transformer internals (positional encoding deep-dive + extended Q&A)

## Transcript timing extraction (session + Q&A split)

- Session start time: `00:07:45.990`
- Session conclusion time (teaching concluded cue): `02:33:34.870`
- Q&A segment: `02:43:27.790` to `04:24:50.890` (`01:41:23.100`)
- Full recording span (`.vtt` first cue to last cue): `04:17:04.900`

Note: the class is explicitly wrapped at `02:33:34.870` ("thank you, bye, take care..."), followed by a 5-minute break and then formal doubt-session start at `02:43:27.790`.

**Source:** `Recording.transcript.vtt`  
**Instructor:** Sunny Savita

---

## Materials in this folder (`13-Day-26Apr26/`)

| File | Role |
|------|------|
| `Recording.transcript.vtt` | Full class transcript (local; usually gitignored). |
| [`Class-10-25-Apr-Handwritten-notes.pdf`](Class-10-25-Apr-Handwritten-notes.pdf) | Handwritten board notes PDF (12 pages, scanned/no selectable text extracted). |
| [`Notes.md`](Notes.md) | Consolidated summary from transcript + available PDF context. |

---

## Session flow (high level)

- Recap of prior transformer class and why fundamentals are being covered in depth before practicals.
- Core teaching revisits encoder-side concepts with interview-style framing.
- Heavy focus on positional encoding math and intuition (sin/cos values, vector dimensions, index mapping, sequence-order preservation).
- Transition into learner questions, then a long Q&A/troubleshooting block.
- Q&A includes conceptual clarifications (decoder-only transformers, RLHF impact, positional index reset per sentence) and environment-debug support.

---

## Core concepts covered in teaching segment

1. **Transformer roadmap**
   - Instructor outlines remaining topics: positional encoding, self-attention, multi-head extension, cross-attention, masked attention, layer normalization, and end-to-end encoder-decoder flow.
   - Emphasis that transformer understanding is the base needed to read modern LLM papers.

2. **Positional encoding (main deep-dive)**
   - Position vectors are generated from sinusoidal functions (sine and cosine) across dimensions.
   - Formula walkthrough includes index logic (`2i` and `2i+1`) and mapping values to vector slots.
   - Positional vector is added to token embedding before entering self-attention.
   - Intuition repeated: this injects order information into otherwise parallel token processing.

3. **Vector shape and indexing clarifications**
   - Multiple learner doubts addressed around how vector dimension aligns with embedding dimension.
   - Clarifies that each sentence's positional indexing starts again from zero.
   - Distinguishes between "token position encoding" and inter-sentence context building.

4. **Preview topics for next class**
   - Q/K/V flow and complete self-attention intuition are deferred for cleaner explanation in follow-up class.
   - Decoder-side concepts (cross-attention, masked self-attention) are queued for upcoming sessions.

---

## Q&A highlights (post-session)

- **Class boundary + doubts:** class wraps, notes uploaded, then doubts are invited after a break.
- **Conceptual correction:** "decoder-only transformer" phrasing clarified when discussing GPT/Claude-style architectures.
- **Training discussion:** RLHF and LoRA-style fine-tuning explained as weight-update strategy differences.
- **Positional encoding doubt:** confirms index reset pattern across sentences and explains positional values as position indicators.
- **Hands-on troubleshooting:** long support thread on VS Code environment issues, activation paths, requirements install, kernel setup, missing env variables, and possible system/toolchain issues.

---

## PDF sync snapshot (auto-updated: 28 Apr 2026)

- `13-Day-26Apr26/Class-10-25-Apr-Handwritten-notes.pdf` is present but appears scanned/image-only in direct extraction (12 pages detected, no selectable text content returned).
- Transcript already captures the same topic arc in detail; this notes file is synchronized to transcript-first content with PDF presence recorded.
