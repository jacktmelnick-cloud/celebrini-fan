(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const buzz = (ms = 15) => { try { navigator.vibrate && navigator.vibrate(ms); } catch (e) {} };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- name ----------
  if (HER_NAME) {
    $("#her-name").textContent = HER_NAME;
    $$(".her-name-inline").forEach(el => (el.textContent = HER_NAME));
  }

  // ---------- poem ----------
  $("#poem-title").textContent = POEM.title;
  $("#poem-by").textContent = POEM.by;
  POEM.text.trim().split(/\n\s*\n/).forEach(st => {
    const p = document.createElement("p");
    p.textContent = st.trim();
    $("#poem-body").appendChild(p);
  });

  // ---------- floating hearts ----------
  const heartLayer = $("#hearts");
  const heartChars = ["💖", "🦈", "✨", "💕", "🏒", "💗"];
  function spawnHeart() {
    const h = document.createElement("span");
    h.textContent = heartChars[(Math.random() * heartChars.length) | 0];
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = 14 + Math.random() * 22 + "px";
    h.style.animationDuration = 7 + Math.random() * 7 + "s";
    heartLayer.appendChild(h);
    setTimeout(() => h.remove(), 15000);
  }
  if (!reduced) setInterval(spawnHeart, 900);

  // ---------- confetti ----------
  const cv = $("#confetti"), ctx = cv.getContext("2d");
  let bits = [], raf = null;
  function confetti(n = 140) {
    if (reduced) return;
    cv.width = innerWidth * devicePixelRatio; cv.height = innerHeight * devicePixelRatio;
    const colors = ["#FF6FB5", "#00a3ad", "#ffffff", "#ffd23d", "#ff8a3d"];
    for (let i = 0; i < n; i++) bits.push({
      x: Math.random() * cv.width, y: -20 - Math.random() * cv.height * 0.4,
      vx: (Math.random() - 0.5) * 4, vy: 3 + Math.random() * 5,
      r: (4 + Math.random() * 6) * devicePixelRatio, rot: Math.random() * 6, c: colors[(Math.random() * 5) | 0],
    });
    if (!raf) tick();
  }
  function tick() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    bits.forEach(b => {
      b.x += b.vx; b.y += b.vy; b.rot += 0.1;
      ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.rot);
      ctx.fillStyle = b.c; ctx.fillRect(-b.r / 2, -b.r / 4, b.r, b.r / 2); ctx.restore();
    });
    bits = bits.filter(b => b.y < cv.height + 20);
    raf = bits.length ? requestAnimationFrame(tick) : (ctx.clearRect(0, 0, cv.width, cv.height), null);
  }

  // ---------- navigation ----------
  const tabbar = $("#tabbar");
  function go(id) {
    $$(".screen").forEach(s => s.classList.toggle("active", s.id === id));
    $$("#tabbar button").forEach(b => b.classList.toggle("on", b.dataset.go === id));
    buzz(8);
  }
  $$("[data-go]").forEach(b => b.addEventListener("click", () => go(b.dataset.go)));
  $("#enter").addEventListener("click", () => {
    tabbar.classList.remove("hidden");
    go("home");
    confetti(90);
  });

  // ---------- gallery ----------
  const track = $("#gallery-track");
  GALLERY.forEach((g, i) => {
    const card = document.createElement("article");
    card.className = `g-card lv${g.level}`;
    card.innerHTML = `
      <div class="g-badge">${i + 1}/${GALLERY.length}</div>
      <div class="g-media"><div class="g-art">${g.art}</div></div>
      <div class="g-text"><h3></h3><p></p></div>`;
    $("h3", card).textContent = g.title;
    $("p", card).textContent = g.caption;
    if (g.img) {
      const img = new Image();
      img.loading = i < 2 ? "eager" : "lazy"; img.alt = g.title; img.src = g.img;
      if (g.pos) img.style.objectPosition = g.pos;
      const credit = document.createElement("small");
      credit.className = "g-credit"; credit.textContent = g.credit ? "📷 " + g.credit : "";
      img.onerror = () => { img.remove(); credit.remove(); }; // fall back to the drawn art
      $(".g-media", card).appendChild(img);
      if (g.credit) $(".g-media", card).appendChild(credit);
    }
    track.appendChild(card);
  });
  let lastLevel = 1;
  track.addEventListener("scroll", () => {
    const cards = track.children;
    const w = cards[0].getBoundingClientRect().width + 14;
    const idx = Math.min(GALLERY.length - 1, Math.max(0, Math.round(track.scrollLeft / w)));
    const level = GALLERY[idx].level;
    $("#meter-fill").style.width = ((idx + 1) / GALLERY.length) * 100 + "%";
    $("#meter-label").textContent = LEVEL_NAMES[level];
    if (level !== lastLevel) { buzz(25); if (level === 5) confetti(60); lastLevel = level; }
  }, { passive: true });
  $("#meter-fill").style.width = (1 / GALLERY.length) * 100 + "%";

  // ---------- swipe game ----------
  const deck = $("#deck");
  let swipeIdx = 0, swoons = 0;
  function renderDeck() {
    deck.innerHTML = "";
    // render current card on top + one behind it
    for (let i = Math.min(swipeIdx + 1, SWIPE_CARDS.length - 1); i >= swipeIdx; i--) {
      const c = SWIPE_CARDS[i];
      const el = document.createElement("div");
      el.className = "s-card" + (i > swipeIdx ? " back" : "");
      el.innerHTML = `<div class="stamp yes">SWOON</div><div class="stamp no">SNOOZE</div>
        <div class="art">${c.art}</div><div class="txt"></div><div class="count">${i + 1} / ${SWIPE_CARDS.length}</div>`;
      $(".txt", el).textContent = c.text;
      deck.appendChild(el);
      if (i === swipeIdx) attachDrag(el);
    }
  }
  function attachDrag(el) {
    let sx = 0, sy = 0, dx = 0, dy = 0, dragging = false;
    const yes = $(".stamp.yes", el), no = $(".stamp.no", el);
    el.addEventListener("pointerdown", e => {
      dragging = true; sx = e.clientX; sy = e.clientY; el.setPointerCapture(e.pointerId);
      el.style.transition = "none";
    });
    el.addEventListener("pointermove", e => {
      if (!dragging) return;
      dx = e.clientX - sx; dy = e.clientY - sy;
      el.style.transform = `translate(${dx}px, ${dy * 0.3}px) rotate(${dx / 14}deg)`;
      yes.style.opacity = Math.max(0, Math.min(1, dx / 90));
      no.style.opacity = Math.max(0, Math.min(1, -dx / 90));
    });
    const end = () => {
      if (!dragging) return;
      dragging = false;
      if (Math.abs(dx) > 90) fling(el, dx > 0);
      else {
        el.style.transition = "transform .3s ease";
        el.style.transform = ""; yes.style.opacity = 0; no.style.opacity = 0;
      }
      dx = dy = 0;
    };
    el.addEventListener("pointerup", end);
    el.addEventListener("pointercancel", end);
  }
  function fling(el, isSwoon) {
    if (!el || el.dataset.gone) return;
    el.dataset.gone = "1";
    $(isSwoon ? ".stamp.yes" : ".stamp.no", el).style.opacity = 1;
    el.style.transition = "transform .35s ease-in";
    el.style.transform = `translate(${isSwoon ? 600 : -600}px, -40px) rotate(${isSwoon ? 30 : -30}deg)`;
    if (isSwoon) { swoons++; buzz(20); } else buzz(8);
    swipeIdx++;
    setTimeout(() => (swipeIdx >= SWIPE_CARDS.length ? showSwipeResult() : renderDeck()), 300);
  }
  function topCard() { return deck.querySelector(".s-card:not(.back)"); }
  $("#btn-swoon").addEventListener("click", () => fling(topCard(), true));
  $("#btn-snooze").addEventListener("click", () => fling(topCard(), false));
  function showSwipeResult() {
    deck.classList.add("hidden"); $("#swipe-buttons").classList.add("hidden");
    const r = SWIPE_RESULTS.find(r => swoons >= r.min);
    const box = $("#swipe-result");
    box.innerHTML = `<div class="r-emoji">💘</div><div class="score">${swoons}/${SWIPE_CARDS.length}</div>
      <h3></h3><p></p><button class="btn" id="swipe-again">Swipe again 🔁</button>`;
    $("h3", box).textContent = r.title; $("p", box).textContent = r.text;
    box.classList.remove("hidden");
    $("#swipe-again").addEventListener("click", () => {
      swipeIdx = 0; swoons = 0; box.classList.add("hidden");
      deck.classList.remove("hidden"); $("#swipe-buttons").classList.remove("hidden"); renderDeck();
    });
    if (swoons >= 6) confetti();
  }
  renderDeck();

  // ---------- quiz ----------
  let qIdx = 0, score = 0;
  const qCard = $("#quiz-card");
  function renderQ() {
    const q = QUIZ[qIdx];
    $("#quiz-progress").textContent = `Question ${qIdx + 1} of ${QUIZ.length} · Score ${score}`;
    qCard.innerHTML = `<p class="q-text"></p><div class="q-opts"></div>`;
    $(".q-text", qCard).textContent = q.q;
    q.options.forEach((o, i) => {
      const b = document.createElement("button");
      b.className = "q-opt"; b.textContent = o;
      b.addEventListener("click", () => answer(i, b));
      $(".q-opts", qCard).appendChild(b);
    });
  }
  function answer(i, btn) {
    const q = QUIZ[qIdx];
    const opts = $$(".q-opt", qCard);
    if (opts.some(o => o.disabled)) return;
    opts.forEach(o => (o.disabled = true));
    opts[q.answer].classList.add("right");
    if (i === q.answer) { score++; buzz(20); confetti(35); } else { btn.classList.add("wrong"); buzz([30, 40, 30]); }
    $("#quiz-progress").textContent = `Question ${qIdx + 1} of ${QUIZ.length} · Score ${score}`;
    const fact = document.createElement("p");
    fact.className = "q-fact"; fact.textContent = (i === q.answer ? "✅ " : "💔 ") + q.fact;
    const next = document.createElement("button");
    next.className = "btn btn-pink q-next";
    next.textContent = qIdx === QUIZ.length - 1 ? "See my score 🏆" : "Next ➜";
    next.addEventListener("click", () => { qIdx++; qIdx >= QUIZ.length ? showQuizResult() : renderQ(); });
    qCard.append(fact, next);
    next.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  function showQuizResult() {
    qCard.classList.add("hidden");
    $("#quiz-progress").textContent = "All done!";
    const r = QUIZ_RANKS.find(r => score >= r.min);
    const box = $("#quiz-result");
    box.innerHTML = `<div class="r-emoji">🏆</div><div class="score">${score}/${QUIZ.length}</div>
      <h3></h3><p></p><button class="btn" id="quiz-again">Play again 🔁</button>`;
    $("h3", box).textContent = r.title; $("p", box).textContent = r.text;
    box.classList.remove("hidden");
    $("#quiz-again").addEventListener("click", () => {
      qIdx = 0; score = 0; box.classList.add("hidden"); qCard.classList.remove("hidden"); renderQ();
    });
    confetti(score >= 7 ? 200 : 80);
  }
  renderQ();
})();
