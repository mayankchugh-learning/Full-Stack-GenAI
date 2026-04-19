# Session notes — 22 Mar 2026 (from `Recording.transcript.vtt`)

**Focus:** Development environment setup (UV, Python, VS Code) and high-level introduction to Generative AI.  
**Speakers:** Krish Naik (logistics, course direction); Monal (main teaching — setup + GenAI intro).  
**Next up:** Transformers (with Sunny, next session).

---

## Logistics and how to get help

- Class links: check email (also spam) or the **workshop / course dashboard** section if mail was missed.
- **One ~15 minute break** during the session (not micro-breaks every hour).
- **Doubts after the main session:** mentor **Sunny** runs doubt clearing; today Monal covered installation.
- **Chat:** use **Zoom chat only** for questions during live sessions (not community or Q&A), so the mentor can track one channel.
- **International students:** academy is exploring **timezone-friendly** options (mentors, possible webinars); feedback may be collected by email/form.

---

## Session agenda (as stated)

1. **Tool setup** — UV, Python version management, virtual environments, VS Code, running a small Python file end-to-end.
2. **Introduction to Generative AI** — concepts only, not deep theory (that comes with transformers and later topics).

---

## Why tools? Big picture

- **Goal:** learn **Generative AI** (a field within AI).
- **AI:** systems that learn and make decisions; implementation uses **code** (instructions to the machine).
- **Language:** the course uses **Python** — the de facto language for data science / most GenAI libraries and research. Python ≠ GenAI; Python is the programming vehicle.

---

## Writing code: editor vs code editor vs IDE

| Kind | Role |
|------|------|
| **Editor** | Create/edit/save files (e.g. Notepad). Minimal. |
| **Code editor** | Editor **plus** syntax highlighting, better project/file workflow (e.g. **VS Code**, Cursor builds on similar ideas). |
| **IDE** (Integrated Development Environment) | Code-editor features **plus** heavier tooling (debugging, deep language integration). Often larger (e.g. IntelliJ, PyCharm). |

**Why VS Code here:** lightweight, extensible via **extensions**, widely used in production for many stacks. Full Python IDEs (e.g. PyCharm) are optional and not the install path for this class.

---

## Getting Python: three approaches (conceptual)

1. **python.org** — install a single system Python (like installing any desktop app).
2. **Anaconda / Miniconda** — Python **plus** conda ecosystem; powerful but heavier.
3. **UV** (chosen for this course) — fast, **Rust**-based, lightweight; manages **multiple Python versions**, **venvs**, and acts as a **package manager**-style workflow.

**VENV (virtual environment):** ships with Python as a **module**. It isolates **per-project** libraries so different projects can use different package versions without clashing. System Python effectively has one “global” `lib`; each venv gets its own `lib`-like tree.

**UV vs plain venv:** plain venv helps separate *dependencies* for one Python version; **real projects often need multiple Python versions** — UV installs and pins versions and wraps project creation/sync cleanly.

---

## UV workflow (conceptual checklist)

Commands and exact order are in the **shared class document** (community); transcript emphasizes **ideas**:

1. **Install Python version(s)** via UV as needed (e.g. 3.12).
2. **`uv python pin <version>`** — lock the Python version **for this project** before/init in a consistent state.
3. **`uv init`** — create project metadata (`pyproject.toml`, lock files, etc.). **Do not delete** these files; UV tracks revisions.
4. **`uv sync`** — create/update **`.venv`** from the project files in the **current directory** (must match where `pyproject.toml` lives).
5. **Activate** the venv so the shell knows which Python to use:
   - **Windows:** run the `activate` script under `.venv\Scripts\` (often easier in **CMD** than PowerShell if activation scripts fail).
   - **Mac/Linux:** `source` the activate script (often under `.venv/bin/`).
6. **Run code:** **`uv run python your_script.py`** — UV uses the project’s tracked environment (analogy: prefix the normal `python script.py` with `uv run` for consistency). After activation, `python script.py` may work, but `uv run` is stressed for reliability.

**Project layout:** put your own `.py` files in the **project root**, **not inside `.venv`** (`.venv` is managed; user code beside it).

**Streamlit / other apps:** same pattern — e.g. `uv run streamlit run app.py` (concept: always run through UV for the project env).

### UV files and commands (from `uv_master_guide.pdf`)

**Two files to trust:** `pyproject.toml` is where **you** declare dependencies and project intent; **`uv.lock`** is where **uv** records exact versions and hashes so everyone gets the same environment. Do not hand-edit `uv.lock`.

**Install uv (Windows):** PowerShell (admin): `powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"` — or `winget install --id astral-sh.uv -e` (same idea as class `winget` path). If `uv` is not found after install, add `%USERPROFILE%\.local\bin` to **PATH**.

**Handy commands:** `uv add <pkg>` (updates `pyproject.toml` and the env); `uv lock` (refresh lock without changing installed packages); `uv venv --python 3.11` (venv with a specific Python, downloads if needed). **Migrating old pip projects:** `uv pip freeze > requirements.txt` then `uv add -r requirements.txt`.

**Jupyter in VS Code:** `uv add ipykernel`, then register a kernel, e.g. `uv run python -m ipykernel install --user --name="my-env" --display-name="Python (UV-Project)"`; pick that kernel in the notebook (or **Developer: Reload Window** if it does not appear). If the kernel hangs: `uv pip install --force-reinstall ipykernel`, upgrade `ensurepip`, restart VS Code.

**When downloads or TLS act up (e.g. corporate proxy):** try `UV_NATIVE_TLS=true` (Windows: `set UV_NATIVE_TLS=true`). **Weird cache:** `uv cache clean`.

### Five `uv` commands to actually use (starter cheat sheet)

1. `uv sync` — make `.venv` match `pyproject.toml` / `uv.lock`.
2. `uv add <package>` — add a dependency and update the project.
3. `uv run python script.py` (or `uv run streamlit run app.py`) — run with the project environment.
4. `uv python pin 3.12` — pin Python for the project (writes `.python-version`).
5. `uv lock` — refresh the lock file when you need it without a full sync story (or use `uv init` when starting a new project).

Adjust the list to your workflow; `uv python install 3.12` and activation scripts are still valid when you are not using `uv run` for everything.

---

## Common issues (from Q&A in session)

- **Pin / version mismatch:** if `pyproject.toml` or lock state says 3.14 but you pinned 3.12, clean the folder steps or align pin → init → sync (mentor walked through deleting generated files except user scripts and redoing pin/init).
- **PowerShell vs CMD:** activation errors → try **CMD**.
- **Conda users:** can follow the course with Conda if comfortable; some materials may still show UV — know both activation models.
- **Debugging:** use logic + **ChatGPT/Gemini** with full error text — treated as a core skill.

---

## Introduction to Generative AI (high level)

### Nested picture

**AI** ⊃ **Machine Learning** ⊃ **Deep Learning** ⊃ **Generative AI** (specialization).

- **AI:** machines programmed for **human-like decision-making** on tasks.
- **Machine learning:** learns **patterns from data** **without** hand-writing every formula — models **fit** relationships in data (“fit the line” / decision boundaries in traditional ML).
- **Deep learning:** ML using **multi-layer neural networks** — flexible, data-hungry; one architecture family can handle many data types.
- **Generative AI:** specialization focused on **learning the *distribution* of data** and **generating** new samples (text, images, audio, code, etc.), not only classifying or predicting a single label.

### Why “generative” became huge

- Neural nets need **lots of data**; many domains (e.g. medical imaging) have **little** labeled data.
- Need: learn **distribution** and produce **realistic synthetic data** (or **generate** answers token-by-token like ChatGPT), not only draw a boundary between classes.

### Discriminative vs generative (simplified)

| | **Discriminative (classic ML / many DL tasks)** | **Generative AI** |
|---|-----------------------------------------------|-------------------|
| **Analogy** | Fit boundaries / predict from patterns | Learn distribution; **generate** new content |
| **Example** | Weather **prediction** from past days | **Synthetic** weather **series** or creative text — not the same problem as “will it rain tomorrow” as a probability from the same framing |

ChatGPT is **not** “a bag of classical ML algorithms” in the sklearn sense — it’s a **different architecture** (transformer-based) aimed at **generation** (and tool use when extended).

### Agentic AI (intro)

- **Generative AI** can **understand** context.
- **Agentic AI** adds **action**: systems that understand **and** use **tools** (terminal, VS Code, APIs, etc.) to carry out steps — closer to “full” AI as **understand + decide + act** (contrast: chat-only generation without tools).

---

## Historical thread (very brief, as in class)

- **~2013 — VAEs (Variational Autoencoders):** compress / reconstruct data — intuition like zip/unzip; generation from latent space.
- **~2014 — GANs:** generator vs discriminator; famous for early “weird” then improving image/video generations.
- **2017 — Transformers:** strong **context** modeling + **parallel** training; foundation for **BERT**, **GPT**, modern LLMs; **ChatGPT** is in this lineage.

---

## Prerequisites and homework (stressed in session)

- **Python:** at least basics through **OOP** on your own if not solid — course will **not** teach Python from zero.
- **“Strong foundation”** in syllabus ≈ **solid basics** + willingness to self-study; for jobs, expectations go higher.
- **ML:** ~2 hours of high-level ML from Krish’s materials “better than nothing”; aim to know **flow** of several algorithms (e.g. ~4), not necessarily every proof.
- **Debugging** and **using AI assistants** for errors intentionally encouraged.

---

## Artifacts

- **UV / setup guide** and command list were shared in the **community** during class; use that as the source of truth for copy-paste steps.
- **`uv_master_guide.pdf`** (same content in `22Mar26/` and `22Mar26/22-03-2026/`): study **one** copy; the guide text above is a summary of the PDF.
- **`22-03-2026_handwritten-notes.pdf`** and **`22-03-2026_notes.pdf`:** open in a viewer — text extraction here looked **empty** (likely scanned or image-based pages), so they are not duplicated below.
- **`a.txt`** (root and `22-03-2026/`): identical short reminders (VS Code zoom, `winget install uv`, `uv python install`, venv activate paths); nothing extra beyond this file and the sections above.
- LinkedIn: habit of **posting a short session summary** was suggested for visibility to recruiters.

---

## Course links (from `Notes.txt`)

- **Bootcamp repo:** [github.com/sunnysavita10/Full-Stack-GenAI-Bootcamp-1.0](https://github.com/sunnysavita10/Full-Stack-GenAI-Bootcamp-1.0)
- **Class 01 (Notion):** [Intro — GenAI / LLMs](https://www.notion.so/Class-01-Intro-GenAI-LLMs-331893f0ead0801faf10cde239077308)
- **Schedule / holidays (spreadsheet):** [Google Sheet](https://docs.google.com/spreadsheets/d/1M7Dyr5EjDwu9EHIL5hvSJBmIQXifGH8QavIo_tbh8gk/htmlview?usp=sharing&pru=AAABnV4bqLk*lEZIACDNvHZ-zT7-uvVvAQ)
- **Optional artifact (Claude):** [public artifact](https://claude.ai/public/artifacts/3664345c-1156-401c-abdd-902ea175a9a3) (same link as in `Notes.txt`; embed markup there is for HTML pages, not required here)

---

## Source

Derived from `22Mar26/Recording.transcript.vtt` (Full-Stack GenAI Bootcamp session, 22 Mar 2026). Supplemented from `uv_master_guide.pdf`, `a.txt`, and `Notes.txt` as listed above.
