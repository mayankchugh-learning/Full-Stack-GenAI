# Learning / checklist protocol (bootcamp repo)

**Audience:** You (the learner) and any AI assistant working in this repository.

**Purpose:** Checklists track **your** execution, understanding, and attestation—not the assistant’s guesses. This file is the **single reference** for that boundary.

---

## What only the learner may mark complete

*(Does **not** apply to checklist rows covered by **§ WebVTT** below — those follow the transcript→notes rules there.)*

Do **not** have an assistant tick `[x]`, “Done”, “You confirm”, or equivalent for items that mean **you**:

1. **Ran** something — e.g. opened a notebook, executed cells, `uv sync`, ran `main.py` or any project script, fixed kernel/import issues.
2. **Understand** something — e.g. session topics, code in this repo, dependencies you chose to care about, how a lab ties to the syllabus.
3. **Attest** to quality on **learner-only** lines — e.g. “session understanding” as *your* study goal, final comfort with material, or any checkbox **not** in the **§ WebVTT** transcript row (the assistant may close the **VTT row** after merging `.vtt` into `Notes.md`).

Those stay **`[ ]`** until **you** say you did them and ask for an update (if you want the file edited).

---

## What an assistant may do without your confirmation

- Fix **formatting** (alignment, tables, links).
- Add or clarify **wording** in notes or checklists.
- **Report in chat** what exists on disk (e.g. “these paths are present”) without flipping your personal completion checkboxes.
- Leave or add explicit **`[ ]`** and short cues like _(you confirm after running / reading)_.

---

## Files this protocol applies to

Typical targets include per-session **`CHECKLIST.md`**, repo-wide **`LEARNING_CHECKLIST.md`**, **`VTT_CHECKLIST.md`**, and any checklist-style table with **mastery**, **confirm**, or **done** columns.

---

## WebVTT (`.vtt`) — assistant workflow (exception to §1 for conversion work)

When the assistant **finds or is given** a session **`.vtt`** file (usually under a dated folder such as `28Mar26/`):

1. **Read and understand** the transcript — for long files, work in logical chunks (or by timestamp sections) so coverage is faithful; note speaker/topic shifts where helpful.
2. **Incorporate** that understanding into that folder’s **`Notes.md`** — merge with existing content, fix gaps, preserve structure; **create `Notes.md`** if it is missing and the folder is a session folder.
3. **Mark related checklist items complete** for the **transcript → notes** track:
   - In that folder’s **`CHECKLIST.md`**: set **Converted?** to `[x]` and **You confirm done** to `[x]` on the **`.vtt` → notes** table row (once `Notes.md` reflects the transcript).
   - In **`VTT_CHECKLIST.md`**: set **Converted** and **Done** to `[x]` for that folder’s transcript row.
   - In **`LEARNING_CHECKLIST.md`**: mirror the same `.vtt` row for that session, if present.

This **does not** authorize checking off **mastery** lines (e.g. “run notebook”, “relate to April”, “session understanding” in the sense of *you* having studied the material) — those stay **§1** / learner-only. If you want to keep a personal sign-off column independent of the assistant, rename or add a separate note in that folder’s checklist; otherwise the **VTT row** is considered closed after step 2.

---

## Summary for assistants

| Safe without user saying “I completed it” | Not safe — user must confirm first |
|------------------------------------------|-------------------------------------|
| Edit prose, structure, links | Mark notebook / env / run tasks complete |
| Align markdown, add unchecked items | Mark understanding / mastery items complete |
| After **§ WebVTT workflow**: update `Notes.md` from `.vtt`, mark **Converted?**, **You confirm done**, **Done** on the VTT row(s) `[x]` | Mark mastery / “run notebook” / personal study lines complete without user saying so |
| Summarize findings in the reply | (no change to §1 learner-only rows) |

If unsure, **leave the box unchecked** and describe what you observed in the conversation instead.
