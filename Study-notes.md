# Study notes

## Git: remote repo and branch

Here’s what your repo shows right now, and how to check it anytime.

### Your workspace

| What | Value |
|------|--------|
| Remote | `origin` → https://github.com/mayankchugh-learning/Full-Stack-GenAI.git |
| Branch | `main` (tracks `origin/main`) |
| Latest commit | `40e5bd0` — “Add README for 28Mar26/class directory…” |

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
