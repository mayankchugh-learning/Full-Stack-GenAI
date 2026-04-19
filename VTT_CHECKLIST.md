# WebVTT (`.vtt`) transcript checklist

Use this file as the **single place** to track whether each session transcript exists on disk and whether you have turned it into study notes. Session-level mastery items stay in [`LEARNING_CHECKLIST.md`](LEARNING_CHECKLIST.md); each folder also has a **`CHECKLIST.md`** mirroring its section there.

**Git note:** `**/*.vtt` is in [`.gitignore`](.gitignore). Files can be **present locally** but hidden from `git status` and some IDE searches—verify with Explorer or `Get-ChildItem -Recurse -Filter *.vtt` if needed.

**Protocol:** Transcript → `Notes.md` synthesis and **Converted** / **Done** columns follow [`LEARNING_PROTOCOL.md`](LEARNING_PROTOCOL.md).

---

## Legend

| Column | Meaning |
|--------|--------|
| **On disk** | You have the `.vtt` in that folder (local machine). |
| **Notes** | Target notes file (often `Notes.md` in the same folder, or `*_transcript_notes.md`). |
| **Converted** | WebVTT turned into usable notes (outline / bullets / prose). |
| **Done** | Transcript row closed per protocol (notes merged; checklist row can be `[x]`). |

---

## Session folders (oldest → newest)

| Folder | Transcript filename | On disk | Notes file (suggested) | Converted | Done |
|--------|---------------------|---------|-------------------------|-----------|------|
| `15Mar26` | `session_Recording.cutfile.20260316041451852.transcript.vtt` | [x] | [`Notes.md`](15Mar26/Notes.md) | [x] | [x] |
| `22Mar26` | `Recording.transcript.vtt` | [x] | [`Notes.md`](22Mar26/Notes.md) | [x] | [x] |
| `28Mar26` | `Session_Recording.cutfile.20260329093221035.transcript.vtt` | [x] | [`Notes.md`](28Mar26/Notes.md) | [x] | [x] |
| `29Mar26` | `modern _Recording.transcript.vtt` | [x] | [`Notes.md`](29Mar26/Notes.md) | [x] | [x] |
| `04Apr26` | `session_Recording.cutfile.20260405061846817.transcript.vtt` | [x] | [`Notes.md`](04Apr26/Notes.md) + [`session_04Apr26_encoding_embedding_notes.md`](04Apr26/session_04Apr26_encoding_embedding_notes.md) | [x] | [x] |
| `05Apr26` | `GMT20260405-142945_Recording.transcript.vtt` | [x] | [`Notes.md`](05Apr26/Notes.md) | [x] | [x] |
| `09Apr26` | — | [ ] | _add when transcript exists_ | [ ] | [ ] |
| `11Apr26` | `_Recording.transcript.vtt` | [x] | [`Notes.md`](11Apr26/Notes.md) | [x] | [x] |
| `12Apr26` | `m_Recording.transcript (1).vtt` | [x] | [`Notes.md`](12Apr26/Notes.md) | [x] | [x] |
| `18Apr26` | `_Recording.transcript.vtt` | [x] | [`Notes.md`](18Apr26/Notes.md) | [x] | [x] |

**On-disk column** — last full scan: 2026-04-19 (nine dated `.vtt` files including `18Apr26`). Re-check after clone or if you add/remove files.

---

## Folders with no session `.vtt` (by design or empty)

| Folder | Note |
|--------|------|
| Repo root | No session transcript here. |
| `09Apr26` | Placeholder `Notes.md` only until you add session materials (no `.vtt` when last checked). |
| `Assignment-01-Text_Encoding` | Assignment PDF only. |
| `Class-06-11-Apr-Word2vec-with-practical` | Notes + notebook; no `.vtt`. |

---

## Re-scan (PowerShell, repo root)

```powershell
Get-ChildItem -Recurse -Filter "*.vtt" -File | ForEach-Object { $_.FullName }
```

Update the **On disk** column after you run this on your machine.

---

*Keep the original `.vtt` in the session folder; add or update notes in a separate file.*
