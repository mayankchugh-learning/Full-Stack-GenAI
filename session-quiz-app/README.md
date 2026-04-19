# Session quiz app

Browser-based quizzes aligned with each dated session folder (and related class/assignment folders). Questions live in `data/quizzes-data.js`; scores for your last attempt are stored **only in this browser** (localStorage).

---

## How to open the application

### Option A — Local web server (recommended)

Serving files over `http://` avoids odd browser behavior with multiple scripts and matches how you’d deploy a static site.

1. Open a terminal.
2. Go to either location below (pick one).

**From the repository root** (same folder as `README.md`):

```powershell
cd "path\to\Full-Stack GenAI Bootcamp v1.0 - forked"
python -m http.server 8080
```

**From this folder** (`session-quiz-app`):

```powershell
cd "path\to\Full-Stack GenAI Bootcamp v1.0 - forked\session-quiz-app"
python -m http.server 8080
```

3. In your browser:

| If the server’s folder was… | Open this URL |
|----------------------------|----------------|
| Repository **root** | [http://localhost:8080/session-quiz-app/](http://localhost:8080/session-quiz-app/) — or [http://localhost:8080/](http://localhost:8080/) if the root `index.html` redirect is present |
| **`session-quiz-app`** only | [http://localhost:8080/](http://localhost:8080/) |

4. Stop the server: focus the terminal and press **Ctrl+C**.

**Open a specific session quiz directly:** append `?session=` and the quiz id, e.g.  
`http://localhost:8080/session-quiz-app/?session=15mar26` for **`15Mar26`**.

**Note:** If you start the server at the **repository root** and open only `http://localhost:8080/` with **no** `index.html` at the root, the browser may show a **directory listing**. Use **`/session-quiz-app/`** or rely on the root redirect `index.html` at repo root.

---

### Option B — Open the file directly

1. In File Explorer, open `session-quiz-app\index.html` with your browser (double-click or drag onto a browser tab).

2. If anything fails to load, use **Option A** instead (some environments restrict local file access for scripts).

---

## Changing questions or adding a session

Edit **`data/quizzes-data.js`**:

- Add an entry to **`manifest`** (`id`, `title`, `folder`, `status: "live"`).
- Add a matching key under **`quizzes`** with `passPercent` (optional) and **`questions`** (each needs `prompt`, `choices`, `correctIndex`, `rationale`).

Reload the page after saving.

---

## Related repo files

- **[`../LEARNING_PROTOCOL.md`](../LEARNING_PROTOCOL.md)** — what counts as *your* completion vs assistant edits on checklists.
- Root **[`../README.md`](../README.md)** — Python / uv setup for notebooks.
