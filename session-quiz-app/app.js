(function () {
  "use strict";

  const STORAGE_KEY = "bootcampSessionQuiz.v1";

  const els = {
    viewHome: document.getElementById("view-home"),
    viewQuiz: document.getElementById("view-quiz"),
    viewResult: document.getElementById("view-result"),
    sessionList: document.getElementById("session-list"),
    btnBack: document.getElementById("btn-back"),
    quizTitle: document.getElementById("quiz-title"),
    progressBar: document.getElementById("progress-bar"),
    questionPrompt: document.getElementById("question-prompt"),
    choices: document.getElementById("choices"),
    btnPrev: document.getElementById("btn-prev"),
    btnNext: document.getElementById("btn-next"),
    rationale: document.getElementById("rationale"),
    resultTitle: document.getElementById("result-title"),
    resultBody: document.getElementById("result-body"),
    resultScore: document.getElementById("result-score"),
    btnRetry: document.getElementById("btn-retry"),
    btnHome: document.getElementById("btn-home"),
  };

  const data = window.BOOTCAMP_SESSION_QUIZ;
  if (!data || !data.manifest) {
    document.body.innerHTML =
      "<p style='padding:2rem;color:#ccc'>Load data/quizzes-data.js before app.js.</p>";
    return;
  }

  let sessionId = null;
  let quiz = null;
  let index = 0;
  /** @type {number[]} */
  let answers = [];

  function loadStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  function saveResult(entry) {
    const all = loadStorage();
    all[sessionId] = {
      ...entry,
      at: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    } catch {
      /* ignore quota */
    }
  }

  function getQuizForSession(id) {
    const q = data.quizzes[id];
    if (!q || !Array.isArray(q.questions)) return null;
    return q;
  }

  function renderHome() {
    els.sessionList.innerHTML = "";
    const storedAll = loadStorage();
    for (const m of data.manifest) {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "session-card";
      const live = m.status === "live" && getQuizForSession(m.id);
      const qCount = live ? getQuizForSession(m.id).questions.length : 0;
      const prev = storedAll[m.id];
      const lastBit =
        prev && typeof prev.scorePercent === "number"
          ? ` · Last try: ${prev.scorePercent}%${
              prev.passed ? " (pass)" : " (below bar)"
            }`
          : "";

      card.innerHTML = `
        <div>
          <div>${escapeHtml(m.title)}</div>
          <div class="meta">${escapeHtml(m.folder)} · ${qCount} question(s)${escapeHtml(lastBit)}</div>
        </div>
        <span class="badge ${live ? "badge-live" : "badge-planned"}">${live ? "Open quiz" : "Planned"}</span>
      `;
      if (!live) {
        card.disabled = true;
        card.title = "Add questions in data/quizzes-data.js and set status to live.";
      } else {
        card.addEventListener("click", () => startQuiz(m.id));
      }
      els.sessionList.appendChild(card);
    }
    showView("home");
  }

  function showView(name) {
    els.viewHome.classList.toggle("hidden", name !== "home");
    els.viewQuiz.classList.toggle("hidden", name !== "quiz");
    els.viewResult.classList.toggle("hidden", name !== "result");
  }

  function startQuiz(id) {
    sessionId = id;
    quiz = getQuizForSession(id);
    if (!quiz || quiz.questions.length === 0) return;
    index = 0;
    answers = quiz.questions.map(() => -1);
    const meta = data.manifest.find((x) => x.id === id);
    els.quizTitle.textContent = meta ? meta.title : id;
    renderQuestion();
    showView("quiz");
  }

  function renderQuestion() {
    const total = quiz.questions.length;
    const q = quiz.questions[index];
    const pct = ((index + 1) / total) * 100;
    els.progressBar.style.width = pct + "%";
    els.questionPrompt.textContent = `Q${index + 1} of ${total}: ${q.prompt}`;
    els.choices.innerHTML = "";
    const selected = answers[index];

    q.choices.forEach((text, i) => {
      const label = document.createElement("label");
      label.className = "choice";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "q";
      input.value = String(i);
      if (selected === i) input.checked = true;
      input.addEventListener("change", () => {
        answers[index] = i;
        updateNav();
      });
      const span = document.createElement("span");
      span.textContent = text;
      label.appendChild(input);
      label.appendChild(span);
      els.choices.appendChild(label);
    });

    els.rationale.classList.add("hidden");
    els.rationale.innerHTML = "";

    els.btnPrev.disabled = index === 0;
    updateNav();
  }

  function updateNav() {
    const total = quiz.questions.length;
    const last = index === total - 1;
    els.btnNext.textContent = last ? "Finish" : "Next";
    els.btnNext.disabled = answers[index] < 0;
  }

  function finishQuiz() {
    let correct = 0;
    quiz.questions.forEach((q, i) => {
      if (answers[i] === q.correctIndex) correct++;
    });
    const total = quiz.questions.length;
    const pct = Math.round((correct / total) * 100);
    const passAt = quiz.passPercent ?? data.passPercentDefault ?? 70;
    const passed = pct >= passAt;

    saveResult({ scorePercent: pct, correct, total, passed, passAt });

    els.resultTitle.textContent = passed
      ? "Session checkpoint passed"
      : "Not yet — review and retry";
    els.resultTitle.className = passed ? "result-pass" : "result-fail";
    els.resultScore.textContent = `${pct}% (${correct}/${total})`;
    els.resultBody.innerHTML = passed
      ? `You met the ${passAt}% bar for this session quiz. This is a self-check only — keep using your notes and labs for depth.`
      : `You need at least <strong>${passAt}%</strong> correct. Review the session materials and try again.`;

    showView("result");
  }

  els.btnBack.addEventListener("click", renderHome);
  els.btnPrev.addEventListener("click", () => {
    if (index > 0) {
      index--;
      renderQuestion();
    }
  });
  els.btnNext.addEventListener("click", () => {
    if (answers[index] < 0) return;
    const total = quiz.questions.length;
    if (index < total - 1) {
      index++;
      renderQuestion();
    } else {
      finishQuiz();
    }
  });

  els.btnRetry.addEventListener("click", () => startQuiz(sessionId));
  els.btnHome.addEventListener("click", renderHome);

  function escapeHtml(s) {
    const d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  renderHome();
})();
