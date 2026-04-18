# WebVTT (`.vtt`) transcript checklist

Use this file as the **single place** to track whether each session transcript exists on disk and whether you have turned it into study notes. Session-level mastery items stay in [`LEARNING_CHECKLIST.md`](LEARNING_CHECKLIST.md).

**Git note:** `**/*.vtt` is in [`.gitignore`](.gitignore). Files can be **present locally** but hidden from `git status` and some IDE searches—verify with Explorer or `Get-ChildItem -Recurse -Filter *.vtt` if needed.

---

## Legend

| Column | Meaning |
|--------|--------|
| **On disk** | You have the `.vtt` in that folder (local machine). |
| **Notes** | Target notes file (often `Notes.md` in the same folder, or `*_transcript_notes.md`). |
| **Converted** | WebVTT turned into usable notes (outline / bullets / prose). |
| **Done** | You consider this folder’s transcript work finished (notes + quality bar you set). |

---

## Session folders (oldest → newest)

| Folder | Transcript filename | On disk | Notes file (suggested) | Converted | Done |
|--------|---------------------|---------|-------------------------|-----------|------|
| `15Mar26` | `session_Recording.cutfile.20260316041451852.transcript.vtt` | [x] | `Notes.md` or `15Mar26_transcript_notes.md` | [ ] | [ ] |
| `22Mar26` | `Recording.transcript.vtt` | [x] | `Notes.md` or `22Mar26_transcript_notes.md` | [ ] | [ ] |
| `28Mar26` | `Session_Recording.cutfile.20260329093221035.transcript.vtt` | [x] | `Notes.md` or `28Mar26_transcript_notes.md` | [ ] | [ ] |
| `29Mar26` | `modern _Recording.transcript.vtt` | [x] | `Notes.md` or `29Mar26_transcript_notes.md` | [ ] | [ ] |
| `04Apr26` | `session_Recording.cutfile.20260405061846817.transcript.vtt` | [x] | `session_04Apr26_encoding_embedding_notes.md` / `Notes.md` | [ ] | [ ] |
| `05Apr26` | `GMT20260405-142945_Recording.transcript.vtt` | [x] | `Notes.md` or `05Apr26_transcript_notes.md` | [ ] | [ ] |
| `09Apr26` | — | [ ] | _add when transcript exists_ | [ ] | [ ] |
| `11Apr26` | `_Recording.transcript.vtt` | [x] | `Notes.md` or `11Apr26_transcript_notes.md` | [ ] | [ ] |
| `12Apr26` | `m_Recording.transcript (1).vtt` | [x] | `Notes.md` or `12Apr26_transcript_notes.md` | [ ] | [ ] |
| `18Apr26` | _TBD_ | [ ] | _add when folder + `.vtt` exist_ | [ ] | [ ] |

**On-disk column** was aligned with a full-repo scan on a machine that had all eight transcripts above; **re-check** after clone or if you add/remove files.

---

## Folders with no session `.vtt` (by design or empty)

| Folder | Note |
|--------|------|
| Repo root | No session transcript here. |
| `09Apr26` | Empty placeholder folder (no `.vtt` when last checked). |
| `18Apr26` | Folder may be missing in some clones until you add materials. |
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
