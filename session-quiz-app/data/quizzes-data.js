/**
 * Session quiz bank — one quiz per bootcamp folder (see manifest).
 * Question shape: prompt, choices[4], correctIndex (0–3), rationale.
 * Content is aligned with each folder’s Notes.md / syllabus themes.
 */
window.BOOTCAMP_SESSION_QUIZ = {
  passPercentDefault: 70,

  manifest: [
    {
      id: "15mar26",
      title: "15 Mar — Induction & logistics",
      folder: "01-Day-15Mar26",
      status: "live",
    },
    {
      id: "22mar26",
      title: "22 Mar — UV, environments & GenAI intro",
      folder: "02-Day-22Mar26",
      status: "live",
    },
    {
      id: "28mar26",
      title: "28 Mar — Roadmap, platform & modern route",
      folder: "03-Day-28Mar26",
      status: "live",
    },
    {
      id: "29mar26",
      title: "29 Mar — Encoding & embedding (definitions)",
      folder: "04-Day-29Mar26",
      status: "live",
    },
    {
      id: "04apr26",
      title: "4 Apr — Encoding & embedding (Part 1)",
      folder: "05-Day-04Apr26",
      status: "live",
    },
    {
      id: "05apr26",
      title: "5 Apr — TF-IDF, Word2Vec thread & assignment",
      folder: "06-Day-05Apr26",
      status: "live",
    },
    {
      id: "09apr26",
      title: "9 Apr — Session folder (bridge review)",
      folder: "07-Day-09Apr26",
      status: "live",
    },
    {
      id: "11apr26",
      title: "11 Apr — Word2Vec (CBOW & skip-gram)",
      folder: "08-Day-11Apr26",
      status: "live",
    },
    {
      id: "12apr26",
      title: "12 Apr — Classical & custom Word2Vec notebooks",
      folder: "09-Day-12Apr26",
      status: "live",
    },
    {
      id: "class06word2vec",
      title: "Class 06 — Word2Vec practical",
      folder: "Class-06-11-Apr-Word2vec-with-practical",
      status: "live",
    },
    {
      id: "18apr26",
      title: "18 Apr — SOTA embeddings & transformer bridge",
      folder: "10-Day-18Apr26",
      status: "live",
    },
    {
      id: "assignment01",
      title: "Assignment 01 — Text feature engineering",
      folder: "Assignment-01-Text_Encoding",
      status: "live",
    },
  ],

  quizzes: {
    "15mar26": {
      passPercent: 70,
      questions: [
        {
          prompt:
            "According to the induction notes, about how long is typical access to recordings and materials?",
          choices: [
            "30 days",
            "6 months",
            "About 2 years (as announced for this batch)",
            "Lifetime",
          ],
          correctIndex: 2,
          rationale:
            "The session notes mention extended access (about two years) to dashboard recordings and materials.",
        },
        {
          prompt:
            "Where should cohort discussion primarily happen, per the induction guidance?",
          choices: [
            "Parallel WhatsApp groups for the batch",
            "The official community chat on the learning platform",
            "Only private email to instructors",
            "Public Twitter threads",
          ],
          correctIndex: 1,
          rationale:
            "Notes stress using the official community chat and avoiding parallel WhatsApp groups for the cohort.",
        },
        {
          prompt:
            "What is stressed as a bare-minimum prerequisite for building along the main track?",
          choices: [
            "Rust",
            "Python",
            "COBOL",
            "Excel macros only",
          ],
          correctIndex: 1,
          rationale:
            "Python is called out as the core prerequisite for the hands-on Generative AI path.",
        },
        {
          prompt:
            "How is the ‘Modern’ route characterized in the syllabus overview?",
          choices: [
            "It skips transformers entirely",
            "It assumes some programming/ML familiarity and emphasizes Gen AI + Agentic AI + projects",
            "It is only for people with no coding background",
            "It replaces all cloud content",
          ],
          correctIndex: 1,
          rationale:
            "The modern route is the faster path for learners with some familiarity, starting transformers in live classes with supplementary fundamentals.",
        },
        {
          prompt:
            "What was said about formal certificates versus projects?",
          choices: [
            "A certificate is the primary product goal",
            "Emphasis is on building projects (‘builder’ mindset) rather than collecting certificates",
            "Certificates are mailed automatically each month",
            "Only corporate batches get proof of work",
          ],
          correctIndex: 1,
          rationale:
            "Induction notes emphasize projects and skills over certificate collection, with optional employer documentation on request.",
        },
        {
          prompt:
            "When are live classes typically scheduled (IST), per the induction schedule table?",
          choices: [
            "Monday–Friday mornings only",
            "Saturday and Sunday, 8:00 PM – 11:00 PM IST",
            "Only on public holidays",
            "Random weekdays with no fixed time",
          ],
          correctIndex: 1,
          rationale:
            "The notes list weekend evenings (Sat/Sun, 8–11 PM IST) as the usual live slot.",
        },
        {
          prompt:
            "How soon are recordings usually available on the dashboard after a live session?",
          choices: [
            "After 6 months",
            "Typically within about 24 hours of each session",
            "Never — live only",
            "Only if you pay an extra fee",
          ],
          correctIndex: 1,
          rationale:
            "Induction states recordings are uploaded to the dashboard, often within 24 hours.",
        },
        {
          prompt:
            "How many modules does the updated syllabus overview list (including Cloud Code and extra project)?",
          choices: [
            "12 modules",
            "16 modules",
            "18 modules",
            "24 modules",
          ],
          correctIndex: 2,
          rationale:
            "The notes say the syllabus moved from 16 to 18 modules with added Cloud Code–related content and an extra project.",
        },
        {
          prompt:
            "Which URL matches the learning dashboard stressed in the checklist (verify on your enrollment email if yours differs)?",
          choices: [
            "learn.krishnakacademy.com",
            "example.com/learn",
            "localhost:3000",
            "A random Notion subdomain with no login",
          ],
          correctIndex: 0,
          rationale:
            "Notes point learners to log in at learn.krishnakacademy.com with enrollment credentials.",
        },
        {
          prompt:
            "During the live lecture, what was described about audio from students?",
          choices: [
            "Open mic for everyone at all times",
            "One-way audio from instructors during the main lecture (no open mic mid-lecture)",
            "Voice chat only via Discord",
            "No audio — text-only forever",
          ],
          correctIndex: 1,
          rationale:
            "Session behavior notes describe one-way instructor audio during class to reduce noise, with doubt clearing after.",
        },
      ],
    },

    "22mar26": {
      passPercent: 70,
      questions: [
        {
          prompt:
            "In the session’s nested picture, what does Generative AI specialize in?",
          choices: [
            "Only classification with fixed labels",
            "Learning data distributions and generating new samples (text, images, code, etc.)",
            "Sorting databases only",
            "Replacing Python with another language",
          ],
          correctIndex: 1,
          rationale:
            "GenAI focuses on modeling distributions and generating new content, not only predicting a single label.",
        },
        {
          prompt:
            "Why are virtual environments (venvs) recommended for Python projects?",
          choices: [
            "They make Python slower on purpose",
            "They isolate per-project libraries so versions do not clash between projects",
            "They remove the need for any package manager",
            "They only work on Linux",
          ],
          correctIndex: 1,
          rationale:
            "Venvs give each project its own dependency space; UV extends this with multi-version management.",
        },
        {
          prompt:
            "What does `uv sync` primarily do in the workflow described?",
          choices: [
            "Deletes all Python files",
            "Creates/updates `.venv` from `pyproject.toml` / lock in the project directory",
            "Uninstalls UV",
            "Pins only the OS version",
          ],
          correctIndex: 1,
          rationale:
            "`uv sync` aligns the local environment with the project’s declared dependencies.",
        },
        {
          prompt:
            "Where should you place your own `.py` files relative to `.venv`?",
          choices: [
            "Inside `.venv` next to site-packages",
            "Beside `.venv` in the project root (not inside `.venv`)",
            "Only in `C:\\Windows\\System32`",
            "Only inside `uv.lock`",
          ],
          correctIndex: 1,
          rationale:
            "User code lives in the project root; `.venv` is managed and not for application source.",
        },
        {
          prompt:
            "During live Zoom teaching, where did the instructor ask questions to be posted?",
          choices: [
            "WhatsApp only",
            "Zoom chat (single channel for the mentor)",
            "Fax machine",
            "Postal mail",
          ],
          correctIndex: 1,
          rationale:
            "Notes say to use Zoom chat during live sessions so the mentor sees one channel.",
        },
      ],
    },

    "28mar26": {
      passPercent: 70,
      questions: [
        {
          prompt:
            "On the ‘modern route’ diagram, what typically comes right after transformer foundations?",
          choices: [
            "Only classical SVMs",
            "LLMs, SLMs, multimodal LLMs, then fine-tuning, RAG, agentic AI, LLM Ops",
            "Removing Python from the stack",
            "Disabling GPUs globally",
          ],
          correctIndex: 1,
          rationale:
            "The modern path sequences transformers → modern LLM stack → fine-tuning, RAG, agents, and operations.",
        },
        {
          prompt:
            "Which pairing matches the notes’ emphasis for industry-relevant deep learning today?",
          choices: [
            "Deep TensorFlow-only internals as the sole focus",
            "PyTorch (basics) + Hugging Face ecosystem as dominant for much LLM work",
            "Only spreadsheet formulas",
            "No neural networks at all",
          ],
          correctIndex: 1,
          rationale:
            "The session contrasts heavy TF depth with PyTorch + HF as the practical center for this GenAI track.",
        },
        {
          prompt:
            "What does the session say about data engineering relative to AI projects?",
          choices: [
            "It is optional if you only train on CSVs once",
            "It is critical for pipelines that feed real models",
            "It replaces machine learning entirely",
            "It only applies to batch induction day",
          ],
          correctIndex: 1,
          rationale:
            "Data engineering is stressed as essential for serious AI systems feeding models.",
        },
        {
          prompt:
            "Which portal name appears in the notes for the learning platform?",
          choices: [
            "learn.krishnak.academy (as spoken; keep your enrolled link handy)",
            "example.invalid",
            "localhost:9999 only",
            "A random GitHub gist URL",
          ],
          correctIndex: 0,
          rationale:
            "Notes reference the Academy learning portal; always use your official enrollment link if the domain differs slightly.",
        },
        {
          prompt:
            "What is one reason the session gives for trusting a project’s `pyproject.toml` / pin over generic advice?",
          choices: [
            "Because pins are always wrong",
            "Different repos may require different Python versions; match the project you are running",
            "Because 2.7 is always best",
            "Because UV forbids 3.12",
          ],
          correctIndex: 1,
          rationale:
            "When sample code pins a version, align your environment to that project rather than a global default.",
        },
      ],
    },

    "29mar26": {
      passPercent: 70,
      questions: [
        {
          prompt:
            "In class definitions, what distinguishes classical ‘encoding’ from dense neural ‘embedding’ in NLP?",
          choices: [
            "Encoding is always 300-dimensional",
            "Encoding is often count/frequency-based; embeddings are learned dense vectors carrying more semantic signal",
            "They are identical terms with no difference",
            "Embeddings cannot be vectors",
          ],
          correctIndex: 1,
          rationale:
            "Encoding covers one-hot/BoW/TF-IDF style signals; embeddings are learned dense representations.",
        },
        {
          prompt:
            "Which sequence matches the count-based stack order discussed?",
          choices: [
            "TF-IDF → one-hot → BoW",
            "One-hot → Bag of words → TF-IDF",
            "BM25 → GPT-4 → CLIP",
            "Transformer → ASCII → Unicode",
          ],
          correctIndex: 1,
          rationale:
            "The notes walk one-hot, then BoW, then TF-IDF as the classical encoding ladder.",
        },
        {
          prompt:
            "What limitation of static Word2Vec-style vectors is highlighted vs contextual models?",
          choices: [
            "They are too slow on CPUs",
            "One vector per word type cannot separate meanings like ‘bank’ (river vs finance) by context",
            "They only work on images",
            "They require 10 TB RAM always",
          ],
          correctIndex: 1,
          rationale:
            "Static embeddings lack context-dependent disambiguation that transformers provide.",
        },
        {
          prompt:
            "What role do benchmarks like MTEB play in the notes?",
          choices: [
            "They replace all training data",
            "They help compare and choose embedding models by task",
            "They delete Hugging Face models",
            "They are only for computer vision",
          ],
          correctIndex: 1,
          rationale:
            "MTEB and similar leaderboards inform model selection for embedding quality.",
        },
        {
          prompt:
            "What does ‘count-based’ roughly mean in this module?",
          choices: [
            "Vectors sampled from a normal distribution only",
            "Signals derived from token presence/frequency patterns in text",
            "Random hashing with no statistics",
            "GPU tensor cores only",
          ],
          correctIndex: 1,
          rationale:
            "Count-based methods hinge on how often tokens appear or co-occur, not learned semantics alone.",
        },
      ],
    },

    "04apr26": {
      passPercent: 70,
      questions: [
        {
          prompt:
            "Before vectorizing text, what must you define for a fixed vocabulary approach?",
          choices: [
            "The CPU fan speed",
            "The set of tokens/words you will index (vocabulary)",
            "The instructor’s shoe size",
            "A random seed only",
          ],
          correctIndex: 1,
          rationale:
            "Classical bag-of-words style methods need a vocabulary to map tokens to dimensions.",
        },
        {
          prompt:
            "What is a common interview-style downside of one-hot and BoW representations?",
          choices: [
            "They are always dense and tiny",
            "High sparsity and little semantic nuance",
            "They cannot be used in sklearn",
            "They forbid TF-IDF",
          ],
          correctIndex: 1,
          rationale:
            "Sparse high-dimensional vectors miss semantics and waste space.",
        },
        {
          prompt:
            "What does TF-IDF weight combine intuitively?",
          choices: [
            "Only document length in bytes",
            "Term frequency in a document and inverse document frequency across the corpus",
            "GPU temperature",
            "Number of Jupyter extensions installed",
          ],
          correctIndex: 1,
          rationale:
            "TF-IDF highlights terms frequent in a doc but rare overall.",
        },
        {
          prompt:
            "Where should you go for the step-by-step sklearn tables and snippets for this block?",
          choices: [
            "Delete all markdown files",
            "The folder’s `session_04Apr26_encoding_embedding_notes.md`",
            "Only Wikipedia’s random article",
            "The Windows registry",
          ],
          correctIndex: 1,
          rationale:
            "The canonical write-up linked from Notes.md covers sklearn examples and pros/cons.",
        },
        {
          prompt:
            "Why must text become numbers for classical ML models?",
          choices: [
            "Because PDFs require it",
            "Models operate on numeric features; text must be featurized",
            "Because Python cannot read strings",
            "Only to save disk space",
          ],
          correctIndex: 1,
          rationale:
            "Algorithms expect numeric tensors or matrices; encoding maps text to those features.",
        },
      ],
    },

    "05apr26": {
      passPercent: 70,
      questions: [
        {
          prompt:
            "Why is TF-IDF still called an interview topic even in GenAI-focused roles?",
          choices: [
            "It is the newest architecture",
            "Fundamentals and legacy pipelines still show up in screening",
            "It replaces transformers in production always",
            "It only applies to image models",
          ],
          correctIndex: 1,
          rationale:
            "Notes say TF-IDF remains a common interview staple alongside modern embeddings.",
        },
        {
          prompt:
            "How does the session classify TF-IDF relative to ‘neural embedding’ in strict terminology?",
          choices: [
            "TF-IDF is a 7-billion-parameter transformer",
            "It is an encoding-style statistic, not a learned neural embedding",
            "It is identical to BERT",
            "It requires CUDA 12.9 only",
          ],
          correctIndex: 1,
          rationale:
            "TF-IDF is a weighted term statistic; true semantic embeddings come from trained models.",
        },
        {
          prompt:
            "What Python version did the instructor suggest for some Gensim stacks when 3.12 caused friction?",
          choices: [
            "2.7",
            "3.11",
            "1.0",
            "Only IronPython",
          ],
          correctIndex: 1,
          rationale:
            "Notes mention Python 3.11 as more compatible with certain Gensim installs.",
        },
        {
          prompt:
            "What was the assignment style described in session?",
          choices: [
            "Only handwritten essays",
            "Real-world data (e.g. reviews), preprocessing, and deliberate use of AI coding tools",
            "No code allowed",
            "Only Excel charts",
          ],
          correctIndex: 1,
          rationale:
            "The assignment mirrors production-like text work with AI-assist habits encouraged.",
        },
        {
          prompt:
            "If scraping is hard, what fallback did the notes suggest?",
          choices: [
            "Give up entirely",
            "Use a PDF (e.g. Word2Vec paper), chunk text, experiment with TF-IDF and embeddings",
            "Only train on binary executables",
            "Delete the dataset folder",
          ],
          correctIndex: 1,
          rationale:
            "Chunked PDF text is an acceptable alternative to scraped reviews for practice.",
        },
      ],
    },

    "09apr26": {
      passPercent: 70,
      questions: [
        {
          prompt:
            "This folder’s notes are still a placeholder. What is the safest way to use this quiz?",
          choices: [
            "Assume nothing in the course ever mentioned encoding",
            "Treat questions as a review of the encoding/embedding thread from neighboring sessions",
            "Skip all future classes",
            "Only study operating systems",
          ],
          correctIndex: 1,
          rationale:
            "Until Notes.md is filled in, rely on adjacent sessions (29 Mar–12 Apr) for the same module.",
        },
        {
          prompt:
            "Which pair best contrasts keyword search vs semantic retrieval?",
          choices: [
            "They are identical",
            "Keyword matching on surface strings vs embedding similarity in vector space",
            "Semantic search ignores all vectors",
            "Keyword search requires CLIP only",
          ],
          correctIndex: 1,
          rationale:
            "The embedding module contrasts lexical overlap with meaning-aware vector similarity.",
        },
        {
          prompt:
            "In the encoding ladder, what does ‘inverse document frequency’ down-weight?",
          choices: [
            "Words that appear in almost every document",
            "Words that are rare across the corpus",
            "All verbs",
            "Only punctuation",
          ],
          correctIndex: 0,
          rationale:
            "IDF reduces weight for overly common terms that lack discriminative power.",
        },
        {
          prompt:
            "Why might you average Word2Vec vectors for a sentence (classical hack)?",
          choices: [
            "To get a single fixed-length vector for downstream models",
            "Because sentences have no words",
            "To remove all nouns",
            "To double the dimensionality always",
          ],
          correctIndex: 0,
          rationale:
            "Averaging token embeddings is a simple way to produce one sentence vector from word vectors.",
        },
        {
          prompt:
            "What tool family is central to the ‘modern route’ implementation stack per earlier sessions?",
          choices: [
            "Only COBOL compilers",
            "Hugging Face + PyTorch-oriented tooling for LLM-era work",
            "Only Microsoft Paint",
            "Spreadsheet macros exclusively",
          ],
          correctIndex: 1,
          rationale:
            "The roadmap sessions emphasize HF/PyTorch/LangChain-class tooling for GenAI engineering.",
        },
      ],
    },

    "11apr26": {
      passPercent: 70,
      questions: [
        {
          prompt:
            "In CBOW, what are you predicting?",
          choices: [
            "The next image frame",
            "A target word from surrounding context words",
            "The compiler version",
            "Stock prices only",
          ],
          correctIndex: 1,
          rationale:
            "CBOW predicts the center word from context within a window.",
        },
        {
          prompt:
            "In skip-gram, what is the usual prediction direction?",
          choices: [
            "Context words from a target word",
            "Random UUIDs",
            "Audio waveforms only",
            "CPU temperature",
          ],
          correctIndex: 0,
          rationale:
            "Skip-gram flips CBOW: predict context from the target word.",
        },
        {
          prompt:
            "Where do Word2Vec ‘embeddings’ live in a small neural setup?",
          choices: [
            "Only in the loss function name",
            "Hidden/lookup weights that map tokens to vectors",
            "Exclusively in PDF metadata",
            "Nowhere — Word2Vec has no vectors",
          ],
          correctIndex: 1,
          rationale:
            "Trained embedding weights (lookup rows) become the word vectors.",
        },
        {
          prompt:
            "Which query uses cosine similarity of vectors in Gensim demos?",
          choices: [
            "`len()` on strings",
            "`most_similar` / similarity helpers on KeyedVectors",
            "`format()` on integers",
            "`ping` command",
          ],
          correctIndex: 1,
          rationale:
            "`most_similar` ranks neighbors by vector similarity.",
        },
        {
          prompt:
            "Why is Word2Vec called ‘static’ vs transformers?",
          choices: [
            "Vectors never change after training",
            "One vector per word type — polysemy not split by sentence context",
            "It only runs on GPUs made in 1990",
            "It forbids cosine similarity",
          ],
          correctIndex: 1,
          rationale:
            "Static embeddings lack contextual disambiguation per occurrence.",
        },
      ],
    },

    "12apr26": {
      passPercent: 70,
      questions: [
        {
          prompt:
            "What is an `.ipynb` file under the hood?",
          choices: [
            "A compiled `.exe`",
            "JSON describing ordered cells (code + markdown) for Jupyter",
            "A video codec",
            "A Docker image",
          ],
          correctIndex: 1,
          rationale:
            "Notebooks are JSON documents with cells; the kernel executes code cells.",
        },
        {
          prompt:
            "What does `gensim.downloader.api.load('word2vec-google-news-300')` provide?",
          choices: [
            "KeyedVectors — pretrained word → 300-D vectors",
            "A blank file",
            "Only image tensors",
            "A SQL database",
          ],
          correctIndex: 0,
          rationale:
            "The Google News model exposes 300-dimensional pretrained vectors per token.",
        },
        {
          prompt:
            "Why does `model['i am sunny']` often fail on single-token Word2Vec tables?",
          choices: [
            "Because Python forbids strings",
            "Vocabulary keys are usually tokens, not full sentences",
            "Because gensim only loads on Mac OS 9",
            "Because 300 is not divisible by 2",
          ],
          correctIndex: 1,
          rationale:
            "KeyedVectors map single tokens (or specific multiword keys), not arbitrary phrases.",
        },
        {
          prompt:
            "In the analogy `vec = king - man + woman`, what is the intended geometric idea?",
          choices: [
            "Break linear algebra",
            "Capture semantic offset (e.g., gender) to recover related words like queen",
            "Minimize file size",
            "Convert audio to MIDI",
          ],
          correctIndex: 1,
          rationale:
            "Vector arithmetic in embedding space encodes relational structure.",
        },
        {
          prompt:
            "In Gensim `Word2Vec`, what does `sg=1` select?",
          choices: [
            "CBOW",
            "Skip-gram",
            "Random forest",
            "k-means",
          ],
          correctIndex: 1,
          rationale:
            "`sg=1` enables skip-gram; default CBOW uses `sg=0`.",
        },
      ],
    },

    "class06word2vec": {
      passPercent: 70,
      questions: [
        {
          prompt:
            "This folder pairs with which practical topic?",
          choices: [
            "Only Kubernetes networking",
            "Classical Word2Vec loading/training alongside 11–12 Apr sessions",
            "Quantum chemistry only",
            "Spreadsheet pivot tables",
          ],
          correctIndex: 1,
          rationale:
            "The Class-06 folder hosts Word2Vec notebooks and notes aligned with April Word2Vec classes.",
        },
        {
          prompt:
            "What is a typical use of `most_similar` after loading pretrained vectors?",
          choices: [
            "Delete the model file",
            "Explore nearest neighbors in embedding space",
            "Compile C++ code",
            "Encrypt the hard drive",
          ],
          correctIndex: 1,
          rationale:
            "`most_similar` finds semantically related words via cosine similarity.",
        },
        {
          prompt:
            "Why might OOV tokens like ‘chatGPT’ fail on older Google News vectors?",
          choices: [
            "Because gensim is broken",
            "The token never appeared in the training corpus era",
            "Because vectors must be 2-D",
            "Because Python 4 is required",
          ],
          correctIndex: 1,
          rationale:
            "OOV errors happen when the token was absent from the pretrained vocabulary.",
        },
        {
          prompt:
            "Sentence vector via average Word2Vec loses what information?",
          choices: [
            "All numbers",
            "Word order (bag-of-embeddings)",
            "GPU usage statistics",
            "File extensions",
          ],
          correctIndex: 1,
          rationale:
            "Mean pooling ignores sequence structure—order is dropped.",
        },
        {
          prompt:
            "What does `window` control in Word2Vec training?",
          choices: [
            "IDE theme",
            "How far context words can be from the center word",
            "Screen resolution",
            "Number of PDF pages",
          ],
          correctIndex: 1,
          rationale:
            "Larger windows include broader context for prediction tasks.",
        },
      ],
    },

    "18apr26": {
      passPercent: 70,
      questions: [
        {
          prompt:
            "What does a sentence-transformer model like `all-MiniLM-L6-v2` output for a sentence?",
          choices: [
            "A single ASCII character",
            "A fixed-size dense embedding (e.g., 384 dimensions) after pooling",
            "Only a token ID list",
            "A JPEG image",
          ],
          correctIndex: 1,
          rationale:
            "MiniLM variants produce fixed-dimension sentence vectors suitable for semantic search.",
        },
        {
          prompt:
            "Why compare LangChain wrappers for Gemini vs OpenAI embeddings in the lab?",
          choices: [
            "They are always identical vectors",
            "Same abstraction, different providers/API keys and vector sizes may differ",
            "LangChain cannot call APIs",
            "Only Gemini supports text",
          ],
          correctIndex: 1,
          rationale:
            "The notebook compares provider APIs while keeping a similar embedding interface.",
        },
        {
          prompt:
            "What does CLIP demonstrate in the multimodal part of the session?",
          choices: [
            "Spreadsheet formulas",
            "Image → embedding alongside text embeddings for cross-modal ideas",
            "Only audio transcription",
            "Database indexing without vectors",
          ],
          correctIndex: 1,
          rationale:
            "CLIP-style models map images into embedding space for retrieval and multimodal RAG foundations.",
        },
        {
          prompt:
            "Where should API keys like `OPENAI_API_KEY` live for local notebooks?",
          choices: [
            "Committed to GitHub in `README.md`",
            "A local `.env` file that is not committed",
            "Posted in Zoom chat",
            "In the Windows hosts file only",
          ],
          correctIndex: 1,
          rationale:
            "Secrets belong in ignored `.env` files or secret managers, never in version control.",
        },
        {
          prompt:
            "At a high level, how does BERT-style pretraining differ from autoregressive GPT-style training?",
          choices: [
            "BERT cannot use vectors",
            "BERT uses masked language modeling / encoder objectives; GPT-style models predict next tokens autoregressively",
            "They are literally the same algorithm",
            "BERT only trains on images",
          ],
          correctIndex: 1,
          rationale:
            "Notes contrast encoder-style masked objectives with decoder-style next-token prediction.",
        },
        {
          prompt:
            "Why chunk documents before embedding for RAG-style retrieval?",
          choices: [
            "Chunks remove the need for any LLM",
            "Respect context limits and improve passage-level semantic match to queries",
            "Embeddings only work on one character",
            "Vector databases forbid whole documents",
          ],
          correctIndex: 1,
          rationale:
            "Chunking aligns passages with model limits and finer retrieval granularity.",
        },
        {
          prompt:
            "The 2017 paper “Attention Is All You Need” originally introduced the transformer architecture in what setting?",
          choices: [
            "Image segmentation only",
            "Machine translation–style sequence modeling",
            "Spreadsheet formula evaluation",
            "Hardware GPU driver updates",
          ],
          correctIndex: 1,
          rationale:
            "Notes tie the paper to translation / seq2seq before broader NLP adoption.",
        },
        {
          prompt:
            "In the Sentence Transformers lab, what API typically turns raw text into fixed-size embedding vectors?",
          choices: [
            "`str.upper()` only",
            "`encode()` (or equivalent on the loaded model)",
            "`os.listdir()`",
            "`pip uninstall`",
          ],
          correctIndex: 1,
          rationale:
            "Notes call out `encode()` for word, sentence, or paragraph text with pooling.",
        },
        {
          prompt:
            "How does the session contrast classical Word2Vec with SOTA transformer embeddings?",
          choices: [
            "Neither produces vectors",
            "Word2Vec uses learned lookup/hidden-style vectors; SOTA uses transformers — both yield vectors you index for retrieval",
            "SOTA embeddings cannot be stored",
            "Word2Vec is only for audio",
          ],
          correctIndex: 1,
          rationale:
            "The bridge emphasizes the same retrieval use case with different model families.",
        },
        {
          prompt:
            "Which approach loads key/value pairs from a local `.env` into the notebook environment (as described)?",
          choices: [
            "Manual copy-paste into TikTok",
            "`python-dotenv` / `load_dotenv` pattern",
            "Only `/etc/passwd`",
            "Emailing keys to the instructor",
          ],
          correctIndex: 1,
          rationale:
            "Notes mention loading `.env` via dotenv; never commit secrets to git.",
        },
        {
          prompt:
            "Module 2 is expected to open with roughly 2–3 sessions on which topic?",
          choices: [
            "Transformer architecture (optional from-scratch code mentioned)",
            "Only mainframe JCL",
            "Excel pivot refreshes",
            "DNS reverse lookups",
          ],
          correctIndex: 0,
          rationale:
            "Notes say the Transformers module starts here after the SOTA embedding bridge.",
        },
        {
          prompt:
            "If your kernel’s working directory is the nested `Class-08-…` notebook copy, how might `images.jpg` be found for CLIP?",
          choices: [
            "It cannot be loaded",
            "Use the session folder path or `../images.jpg` relative to cwd, per Notes",
            "Only from `System32`",
            "Rename it to `.env`",
          ],
          correctIndex: 1,
          rationale:
            "Notes warn cwd differs when running the duplicate path; adjust image paths accordingly.",
        },
      ],
    },

    "assignment01": {
      passPercent: 70,
      questions: [
        {
          prompt:
            "Text feature engineering for classical ML usually starts with what?",
          choices: [
            "Deleting all vowels",
            "Cleaning, tokenization, and vocabulary/featurization choices",
            "Installing a new GPU driver only",
            "Converting models to COBOL",
          ],
          correctIndex: 1,
          rationale:
            "Assignments expect thoughtful preprocessing before TF-IDF or similar features.",
        },
        {
          prompt:
            "Why hold out a validation or test set when scoring TF-IDF + classifier pipelines?",
          choices: [
            "To waste disk space",
            "To estimate generalization, not memorize training noise",
            "Because sklearn requires two CPUs",
            "To increase training loss artificially",
          ],
          correctIndex: 1,
          rationale:
            "Held-out data measures real-world-like performance.",
        },
        {
          prompt:
            "What does TF-IDF emphasize in a document?",
          choices: [
            "Only the longest word",
            "Terms frequent in the doc but relatively rare corpus-wide",
            "Random Gaussian noise",
            "The file creation timestamp",
          ],
          correctIndex: 1,
          rationale:
            "TF-IDF highlights discriminative terms for that document.",
        },
        {
          prompt:
            "Why might you lowercase and strip punctuation in a baseline NLP pipeline?",
          choices: [
            "To make text unreadable",
            "To normalize tokens so ‘Run’ and ‘run’ share statistics",
            "To remove all meaning",
            "Because Unicode is banned",
          ],
          correctIndex: 1,
          rationale:
            "Normalization reduces spurious vocabulary splits.",
        },
        {
          prompt:
            "What is a sensible reason to log or cap extreme TF-IDF features?",
          choices: [
            "To guarantee zero accuracy",
            "To reduce outlier dominance and stabilize some linear models",
            "Because logs are always required by law",
            "To convert text to MP3",
          ],
          correctIndex: 1,
          rationale:
            "Feature scaling/capping can help linear models and distance metrics behave better.",
        },
      ],
    },
  },
};
