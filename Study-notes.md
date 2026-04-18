# Study notes

## Git: remote repo and branch

Here’s what your repo shows right now, and how to check it anytime.

### Your workspace

| What | Value |
|------|--------|
| Remote | `origin` → https://github.com/mayankchugh-learning/Full-Stack-GenAI.git |
| Branch | `main` (tracks `origin/main`) |
| Latest commit | `88cd5cf` — “Add study notes for Git remote and branch commands” |

Values above are a snapshot; run `git log -1` and `git status -sb` for the current state.

### Commands to use (Git Bash, CMD, or PowerShell)

**Remotes (URL and names)**

```bash
git remote -v
```

**Current branch and upstream**

```bash
git branch -vv
```

The line with `*` is your current branch; `[origin/main]` means it tracks that remote branch.

**Short status (branch vs remote)**

```bash
git status -sb
```

Lines like `main...origin/main` show you’re on `main` compared to `origin/main`.

**All remote branches**

```bash
git branch -r
```

**Detailed tracking info**

```bash
git rev-parse --abbrev-ref HEAD
```

→ current branch name

```bash
git rev-parse --abbrev-ref --symbolic-full-name @{u}
```

→ upstream (e.g. `origin/main`), if set

If `git remote -v` is empty, no remote is configured; add one with `git remote add origin <url>`.

### Deleted a folder — why `git pull` may do nothing

`git pull` only **fetches and merges new commits** from the remote. It does not mean “sync my disk to match GitHub.” If your branch is already up to date with `origin`, pull often prints **Already up to date** and **will not** bring back files you removed locally.

To **restore a tracked file or folder** you deleted but have **not committed** the deletion yet, recover it from the **last commit** (`HEAD`):

```bash
git restore path/to/deleted/folder
```

Equivalent older form:

```bash
git checkout HEAD -- path/to/deleted/folder
```

Check what Git thinks changed:

```bash
git status
```

**If the folder was never committed** (untracked), Git has no copy — pull/restore cannot recreate it; use a backup or copy from elsewhere.

**If you already committed the deletion**, pull will not restore the folder unless new remote commits re-add it. You would **revert** that commit or **reset** to an earlier commit (reset only if appropriate for your workflow).

---

## Jupyter and ipykernel (this repo)

**ipykernel** is the package that lets Jupyter and editors run notebook code. There is no separate “start ipykernel” daemon; the IDE or Jupyter starts a Python process that uses it.

Dependencies (`jupyter`, `ipykernel`) are listed in `pyproject.toml`. At the repo root, install/sync everything with:

```bash
uv sync
```

### Cursor / VS Code

1. Open an `.ipynb` file.
2. Use **Select Kernel** (top right).
3. Choose **Python Environments** and pick this project’s interpreter (often `.venv\Scripts\python.exe` after `uv sync`).

### Jupyter Lab in the browser

From the repo root:

```bash
uv run jupyter lab
```

Use the URL printed in the terminal (often `http://localhost:8888`).

### Optional: register a named kernel

Useful if you want a fixed label in Jupyter’s kernel picker:

```bash
uv run python -m ipykernel install --user --name=full-stack-genai --display-name "Full-Stack GenAI"
```

---

## uv / dependencies: why `PIL` was changed to `Pillow`

**What went wrong:** Running `uv add -r requirements.txt` failed with a message like “there are no versions of **pil**” (and resolution could also fail for other Python version markers, e.g. `python_full_version >= '3.14'`).

**Reason:** **`PIL` is not the name of a package on PyPI.** It is the *module* you import in Python for imaging (`from PIL import Image`). The project that publishes that API on PyPI is **`Pillow`**. If you list `PIL` in a requirements file, the resolver looks for a distribution literally named `pil`, which does not exist, so dependency resolution fails.

**Fix applied:** Use **`Pillow`** in `requirements.txt` and declare **`pillow`** (same project; lowercase is normal in `pyproject.toml`) in `pyproject.toml`. Your notebook code can keep using `import PIL` unchanged.

**Commands that should work after the fix:**

```bash
uv lock
uv add -r requirements.txt
uv sync
```
