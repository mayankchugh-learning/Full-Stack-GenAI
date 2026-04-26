# Positional Encoding — Visual Intuition

An interactive, slide-based deep-dive into **sinusoidal positional encoding**, the mechanism that lets Transformer models understand the order of words in a sentence.

Built as a self-contained HTML deck — no build step, no dependencies, just open it in a browser.

![Slide preview](https://img.shields.io/badge/format-HTML%20deck-f5f1e8?style=flat-square&labelColor=1a1612)
![Slides](https://img.shields.io/badge/slides-12-c8821e?style=flat-square&labelColor=1a1612)

---

## What's inside

A 12-slide walkthrough that builds intuition from first principles:

| # | Slide | Idea |
|---|---|---|
| 01 | Cover | Table of contents |
| 02 | The problem | Self-attention is order-blind |
| 03 | The fix | Add a position vector to each embedding |
| 04 | Naïve attempts | Why integers, normalization, and one-hot all fail |
| 05 | Binary clock analogy | Bits flip at different frequencies — combination is unique |
| 06 | The sinusoidal formula | Term-by-term breakdown of `PE(pos, 2i) = sin(pos / 10000^(2i/d))` |
| 07 | Frequency plot | How each dimension oscillates at its own wavelength |
| 08 | Full PE heatmap | Visualizing all positions × all dimensions at once |
| 09 | Sin/cos pairs | Animated unit circle — position as a rotating point |
| 10 | Relative positions | Shifting `pos` by `k` is a fixed rotation |
| 11 | **Interactive** | Drag the slider to inspect any position's vector and its "clocks" |
| 12 | Recap | Five takeaways |

---

## How to use

### Option A — Standalone file (easiest)
Open **`positional-encoding-standalone.html`** in any modern browser. Everything is bundled into a single file — works offline, no server needed.

### Option B — Multi-file (for editing)
Serve the project folder over any static server, then open `positional-encoding.html`:

```bash
# any of these work
python3 -m http.server 8000
npx serve
```

### Option C — GitHub Pages
1. Push this repo to GitHub
2. Go to **Settings → Pages → Source: `main` branch**
3. Open `https://<username>.github.io/<repo>/positional-encoding.html`

---

## Navigation

| Action | Key |
|---|---|
| Next slide | `→` &nbsp; or &nbsp; `Space` |
| Previous slide | `←` |
| Jump to slide N | type `N` then `Enter` |
| Print to PDF | `Ctrl/Cmd + P` (one slide per page) |

---

## Files

```
.
├── positional-encoding.html              # main deck (multi-file)
├── positional-encoding-standalone.html   # single-file bundle
├── deck-stage.js                         # slide shell (scaling, nav, print)
├── visuals.js                            # canvas/SVG visualizations
└── README.md
```

---

## Topic in one paragraph

A Transformer processes all tokens in parallel, so it has no built-in notion of order — to it, *"cat chased dog"* and *"dog chased cat"* would look identical. Positional encoding solves this by adding a unique vector to each word embedding that encodes *where* the word sits in the sequence. The clever choice in *Attention is All You Need* is to build that vector from a stack of **sine and cosine waves at geometrically increasing wavelengths** — like the bits in a binary counter, but smooth. Each (sin, cos) pair traces a point on a circle that rotates as position advances, and shifting position by *k* is just a fixed rotation — a property that makes relative positions easy for attention to learn.

---

## License

Free to use, share, and adapt for educational purposes.

## Credits

Based on the positional encoding scheme from *Attention is All You Need* (Vaswani et al., 2017).
