# WebVTT (`.vtt`) transcript checklist

Use this file as the **single place** to track whether each session transcript exists on disk and whether you have turned it into study notes. Session-level mastery items stay in [`LEARNING_CHECKLIST.md`](LEARNING_CHECKLIST.md); each folder also has a **`CHECKLIST.md`** mirroring its section there.

**Git note:** `**/*.vtt` is in [`.gitignore`](.gitignore). Files can be **present locally** but hidden from `git status` and some IDE searches—verify with Explorer or `Get-ChildItem -Recurse -Filter *.vtt` if needed.

**Protocol:** Transcript → `Notes.md` synthesis and **Converted** / **Done** columns follow [`LEARNING_PROTOCOL.md`](LEARNING_PROTOCOL.md).

**Timing rule:** Each session `Notes.md` should keep `## Transcript timing extraction (session + Q&A split)` **at the top**, right below the `#` title.

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
| `19Apr26` | `Recording.transcript.vtt` | [x] | [`Notes.md`](19Apr26/Notes.md) | [x] | [x] |
| `25Ap26` | `Recording.transcript_.vtt` | [x] | [`Notes.md`](25Ap26/Notes.md) | [x] | [x] |

### Timing extraction snapshot (session + Q&A split)

| Folder | Session start | Session concluded | Q&A start | Q&A end | Q&A duration |
|--------|---------------|-------------------|-----------|---------|--------------|
| `15Mar26` | `00:00:01.663` | `04:24:26.683` | `04:46:13.193` | `05:18:10.722` | `00:31:57.529` |
| `22Mar26` | `00:00:52.590` | `04:45:16.739` | `04:56:23.160` | `05:15:48.490` | `00:19:25.330` |
| `28Mar26` | `00:00:09.627` | `03:57:54.906` | `04:02:54.307` | `04:57:53.696` | `00:54:59.389` |
| `29Mar26` | `00:02:56.640` | `04:47:36.430` | `05:08:34.850` | `05:08:45.779` | `00:00:10.929` |
| `04Apr26` | `00:00:07.859` | `04:09:58.099` | `04:49:25.969` | `05:27:02.968` | `00:37:36.999` |
| `05Apr26` | `00:06:58.290` | `03:51:13.989` | `04:14:02.810` | `04:39:00.160` | `00:24:57.350` |
| `11Apr26` | `00:03:40.000` | `04:43:16.500` | `04:43:15.770` | `04:46:24.929` | `00:03:09.159` |
| `12Apr26` | `00:06:30.020` | `03:56:03.860` | `04:04:20.460` | `04:07:57.949` | `00:03:37.489` |
| `18Apr26` | `00:04:21.060` | `02:57:56.630` | `03:09:38.770` | `04:51:56.300` | `01:42:17.530` |
| `19Apr26` | `00:07:25.020` | `02:23:34.000` | `02:28:34.000` | `03:47:12.000` | `01:18:38.000` |
| `25Ap26` | `00:08:24.140` | `02:42:00.820` | `02:42:00.820` | `04:08:24.640` | `01:26:23.820` |

Timing values above were refreshed from local `.vtt` files on 2026-04-25 and mirrored into each session `Notes.md`.

**On-disk column** — last full scan: 2026-04-25 (ten dated `.vtt` files through `19Apr26`). Re-check after clone or if you add/remove files.

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
