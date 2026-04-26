# Session notes — 25 Apr 2026 — Class 10: Transformer internals (encoder stack focus)

## Transcript timing extraction (session + Q&A split)

- Session start time: `00:08:24.140`
- Session conclusion time (teaching concluded cue): `02:42:00.820`
- Q&A segment: `02:42:00.820` to `04:08:24.640` (`01:26:23.820`)
- Full recording span (`.vtt` first cue to last cue): `04:00:12.880`

Note: the "any doubt" handoff at `02:42:00.820` is used as the class-to-Q&A boundary.

**Source:** `Recording.transcript_.vtt`  
**Instructor:** Sunny Savita

---

## Materials in this folder (`25Ap26/`)

| File | Role |
|------|------|
| [`Class-10-25-Apr-Handwritten-notes.pdf`](Class-10-25-Apr-Handwritten-notes.pdf) | Handwritten board notes (12 pages; scanned). |
| [`Notes.md`](Notes.md) | This consolidated summary from transcript + handwritten pages. |
| `Recording.transcript_.vtt` | Full session transcript (local; usually gitignored). |

**One-line topic:** Why transformer blocks are repeated, and what each core encoder component does: positional encoding, self-attention, residual connection, layer normalization, and FFN.

---

## Session flow (high level)

- Class opens with assignment follow-up and recap from prior transformer-intro sessions.
- Main teaching focus is interview-style understanding of transformer internals, not only definitions.
- Repeated emphasis that encoder/decoder "stack depth" is a hyperparameter, not a fixed law.
- Late session transitions into learner questions and troubleshooting discussions.

---

## Handwritten PDF mapping (12-page review)

Coverage note: all 12 pages were reviewed visually. The PDF is scanned/handwritten, so notes below are semantic extraction rather than OCR-exact transcription.

### Page 1
- Self-attention intuition with bank-word disambiguation examples ("money bank" vs "river bank").
- Q/K/V attention formula recap and the weighted-combination idea.

### Page 2
- Transformer pipeline recap: tokenization -> embedding -> positional encoding -> self-attention -> FFN -> output.
- Clarifies that transformer embedding layer is trainable and not a frozen pretrained Word2Vec table by default.
- Encoder/decoder stack visual with "why multiple stacks" prompt.

### Page 3
- "Why 6 encoder blocks?" explanation:
  - 6 in original paper is a chosen design point.
  - Depth helps capture deeper/hierarchical context.
  - Modern models vary (for example, 12/24/96+).
- Each layer incrementally refines representation from word-level to deeper context.

### Page 4
- Detailed "stack of encoder/decoder" visual where each block is identical in structure but has separate learned weights.

### Page 5
- Expanded encoder block sketch showing residual additions, normalization, and self-attention/FFN sequencing.
- Reinforces that positional + token embeddings pass forward and then are repeatedly transformed by stacked blocks.

### Page 6
- Training vs inference framing around embeddings and prediction flow.
- Contrasts pretrained model usage with custom model training concepts.

### Page 7
- Whiteboard checklist of key interview prompts:
  1. Positional encoding
  2. Self-attention
  3. Layer normalization
  4. Residual connection
  5. Why FFN is required

### Page 8
- Quick recap board and "high-level vs mathematical depth" framing for interviews.
- Concatenation vs addition examples to explain vector operations used in transformer pipelines.
- Sentence order / meaning-shift motivation for positional encoding.

### Page 9
- Why positional encoding matters when processing tokens in parallel.
- Residual/skip-connection intuition with "retain original information while adding learned transformation."

### Page 10
- Residual connection motivation:
  - helps gradient flow,
  - stabilizes deep training,
  - reduces information loss,
  - enables deeper stacks.

### Page 11
- Why FFN after self-attention:
  - adds non-linearity,
  - learns richer token-wise transformations,
  - captures complex patterns beyond linear mixing.

### Page 12
- Clean text recap of layer-depth argument (paper default vs modern larger depths).

---

## Consolidated conceptual takeaways

1. **Stack depth is tunable:** "6 layers" is historical/default from the original paper, not mandatory.
2. **Self-attention + FFN is the core learning pair:** attention mixes cross-token context; FFN adds non-linear transformation.
3. **Residual + normalization are training enablers:** they preserve stable gradients and information across deep blocks.
4. **Positional encoding is mandatory for order awareness:** without it, parallel token processing loses sequence structure.
5. **Same block shape, different weights:** repeated encoder blocks are structurally identical but learn different abstractions.

---

## Interview-style quick answers (from class emphasis)

- **Why multiple encoder blocks?** To progressively learn deeper context and hierarchy; each layer refines prior representations.
- **Why residual connections?** To keep original signal path, improve gradient flow, and stabilize deep training.
- **Why FFN if self-attention already exists?** Self-attention is relational mixing; FFN provides non-linear feature transformation per token.
- **Why positional encoding?** Transformer runs tokens in parallel, so order must be injected explicitly.

---

## PDF sync snapshot (auto-updated: 26 Apr 2026)

- `25Ap26/Class-10-25-Apr-Handwritten-notes.pdf` — 12 pages; scanned/handwritten style (no selectable text in direct extraction). Notes updated using page-by-page visual review plus transcript alignment.
