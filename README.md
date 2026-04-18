# Full-Stack GenAI Bootcamp - environment setup

## Course links

| Resource | Link |
|----------|------|
| **Excel / schedule (Google Sheet)** | [Open spreadsheet](https://docs.google.com/spreadsheets/d/1M7Dyr5EjDwu9EHIL5hvSJBmIQXifGH8QavIo_tbh8gk/htmlview?usp=sharing&pru=AAABnV4bqLk*lEZIACDNvHZ-zT7-uvVvAQ) |
| **GitHub** (course materials repo) | [sunnysavita10/Full-Stack-GenAI-Bootcamp-1.0](https://github.com/sunnysavita10/Full-Stack-GenAI-Bootcamp-1.0) |
| **Notion** (e.g. Class 01 — Intro, GenAI, LLMs) | [Notion page](https://www.notion.so/Class-01-Intro-GenAI-LLMs-331893f0ead0801faf10cde239077308) |
| **Holidays** (same Google Sheet as schedule) | [Open spreadsheet](https://docs.google.com/spreadsheets/d/1M7Dyr5EjDwu9EHIL5hvSJBmIQXifGH8QavIo_tbh8gk/htmlview?usp=sharing&pru=AAABnV4bqLk*lEZIACDNvHZ-zT7-uvVvAQ) |

---

## Prerequisites

- **Python:** 3.11+ for most notebooks. The **`28Mar26/class`** project declares **`>=3.13`** in `pyproject.toml`; use Python 3.13 there if the resolver complains.
- **Git** (to clone this repo).
- **[uv](https://docs.astral.sh/uv/getting-started/installation/)** for installing packages (this repo uses **uv**, not standalone **pip**).

Install uv (pick one):

- **Windows (PowerShell):** `irm https://astral.sh/uv/install.ps1 | iex`
- **pip (one-time, to get uv):** `pip install uv`

---

## Option A - Full ML stack (`28Mar26/class`)

Use this for the **encoding/embedding** project with PyTorch, `sentence-transformers`, LangChain, etc.

```powershell
cd 28Mar26\class
uv venv
uv sync
```

Activate the venv if you prefer not to prefix every command with `uv run`:

- **Windows:** `.\.venv\Scripts\Activate.ps1`
- **macOS/Linux:** `source .venv/bin/activate`

Register a Jupyter kernel (optional):

```powershell
uv run python -m ipykernel install --user --name bootcamp-28mar-class
```

Open notebooks and choose the **`bootcamp-28mar-class`** kernel.

---

## Option B - Lighter setup (`04Apr26`, `12Apr26` notebooks)

From the **repository root**, dependencies live in **`pyproject.toml`** (locked in **`uv.lock`**). Install **without pip**:

```powershell
uv venv
uv sync
```

Optional: activate the venv (`.\.venv\Scripts\Activate.ps1` on Windows), or keep using **`uv run ...`** in front of commands.

**NLTK** (Word2Vec / tokenization): download only what you need (smaller than `nltk.download("all")`):

```powershell
uv run python -c "import nltk; nltk.download('punkt'); nltk.download('punkt_tab'); nltk.download('stopwords')"
```

Register Jupyter kernel:

```powershell
uv run python -m ipykernel install --user --name bootcamp-notes
```

---

## Jupyter

- Start: `uv run jupyter notebook` or `uv run jupyter lab`
- In Cursor/VS Code: **Select Kernel** -> **`bootcamp-notes`** or **`bootcamp-28mar-class`**, or the Python from `.venv`

---

## API keys (LangChain / Google / OpenAI)

- Do **not** commit secrets. Create a **`.env`** file in the repo root with your keys (or set variables in your OS).
- `.env` is in `.gitignore`.

---

## Troubleshooting

| Issue | What to try |
|--------|-------------|
| **Torch / CUDA / large installs** | Use **Option A** (`28Mar26/class` + `uv sync`) so versions match that folder's `pyproject.toml` / `uv.lock`. |
| **`ModuleNotFoundError`** | Run installs from the same directory as the matching `pyproject.toml`, then `uv sync` again. Use **`uv run python ...`** so the project venv is used. |
| **Nested `class` / Git errors** | `28Mar26/class` should not contain its own `.git` inside this repo. Do not commit `.venv`. |

---

## Layout reference

| Path | Notes |
|------|--------|
| `pyproject.toml`, `uv.lock` (repo root) | Option B: `uv sync` for encoding + Word2Vec notebooks |
| `28Mar26/class/` | Option A: separate `pyproject.toml` + `uv.lock`, full stack |
| `requirements.txt` | Legacy reference only; installs go through **uv** and root `pyproject.toml` |
