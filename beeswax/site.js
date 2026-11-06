for (const b of document.querySelectorAll('[data-copy]')) {
  b.hidden = false;
  b.addEventListener('click', async () => {
    const el = document.getElementById(b.dataset.copy);
    const text = el.textContent.trim();
    try { await navigator.clipboard.writeText(text); }
    catch { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); document.execCommand('copy'); s.removeAllRanges(); }
    b.classList.add('ok'); b.setAttribute('aria-label', 'Copied');
    setTimeout(() => { b.classList.remove('ok'); b.setAttribute('aria-label', 'Copy'); }, 1600);
  });
}
for (const b of document.querySelectorAll('.buzz')) {
  b.addEventListener('click', () => {
    b.classList.add('say');
    clearTimeout(b.t); b.t = setTimeout(() => b.classList.remove('say'), 1400);
  });
}

// Small pages (Setup, FAQ, Privacy and security, Monero): a new sky on every visit, laid out around the real page.
// Like the main page: few bees, each beside a heading in open sky, and clouds spread out around them.
// Nothing overlaps: bees keep clear of clouds, other bees, the title and the text.
(() => {
  const main = document.querySelector('main.page');
  if (!main) return;
  const PATHS = ['M4 20C40 0 60 70 100 60S160 38 196 38', 'M4 70C26 84 52 74 64 56s0-34-16-26 2 40 40 38 72-30 108-30',
    'M4 60C30 70 50 30 80 40s10 34-12 26S90 10 130 18s46 30 66 22'];
  let seed = crypto.getRandomValues(new Uint32Array(1))[0];
  const rand = () => { seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const between = (a, b) => a + rand() * (b - a);
  const pick = list => list[Math.floor(rand() * list.length)];
  const box = el => { const r = el.getBoundingClientRect(), m = main.getBoundingClientRect(); return { x: r.left - m.left, y: r.top - m.top, w: r.width, h: r.height }; };
  const hit = (a, b, pad) => a.x < b.x + b.w + pad && b.x < a.x + a.w + pad && a.y < b.y + b.h + pad && b.y < a.y + a.h + pad;
  const centre = b => [b.x + b.w / 2, b.y + b.h / 2];
  const dist = (a, b) => { const [ax, ay] = centre(a), [bx, by] = centre(b); return Math.hypot(ax - bx, ay - by); };
  const make = html => { const t = document.createElement('div'); t.innerHTML = html; return t.firstElementChild; };
  let items = [], laidW = 0, laidH = 0, lastBee = 0;

  function bee() {
    const el = make(`<div class="flight sky${rand() < .5 ? ' to-left' : ''}${rand() < .5 ? ' flip' : ''}" style="--w:${Math.round(between(130, 200))}px;--tilt:${Math.round(between(-20, 20))}deg;left:0;top:0" aria-hidden="true"><svg class="path" viewBox="0 0 200 90"><path d="${pick(PATHS)}" fill="none" stroke="#5E8FBA" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="2 9" opacity=".7" vector-effect="non-scaling-stroke"/></svg><span class="buzz"><svg><use href="#bee"/></svg><span class="bzz">${pick(['bz', 'bzz', 'bzzz', 'bzzzz'])}</span></span></div>`);
    const b = el.querySelector('.buzz');
    b.addEventListener('click', () => { b.classList.add('say'); clearTimeout(b.t); b.t = setTimeout(() => b.classList.remove('say'), 1400); });
    main.append(el);
    // The bee pokes out past its path, so its footprint is the union of both, measured once at 0,0
    const f = box(el), g = box(b), x = Math.min(f.x, g.x), y = Math.min(f.y, g.y);
    return { el, fx: x, fy: y, w: Math.max(f.x + f.w, g.x + g.w) - x, h: Math.max(f.y + f.h, g.y + g.h) - y };
  }

  function layout(full) {
    const W = main.clientWidth, H = main.scrollHeight;
    if (full) { for (const it of items) it.el.remove(); items = []; laidH = 0; lastBee = 0; }
    const from = laidH; laidW = W; laidH = H;
    const text = box(main.querySelector('.doc, .faq'));
    const title = [main.querySelector('.page-head h1'), main.querySelector('.fl-page'), main.querySelector('.fl-page .buzz')].filter(Boolean).map(box);
    if (!lastBee) lastBee = Math.max(...title.map(t => t.y + t.h));
    const gutters = [[8, text.x - 20], [text.x + text.w + 20, W - 8]];
    const clear = (b, pad) => !title.some(t => hit(b, t, pad)) && !items.some(i => hit(b, i, i.bee ? 48 : pad));

    // Bees: beside a heading, 1100 to 1700px apart, in a side margin wide enough to hold the whole bee
    for (const a of [...main.querySelectorAll('.doc h2, .faq details')].map(box)) {
      if (a.y < from || a.y - lastBee < between(1100, 1700)) continue;
      const b = bee();
      let placed = false;
      for (const side of rand() < .5 ? [0, 1] : [1, 0]) {
        const [g0, g1] = gutters[side];
        if (g1 - g0 < b.w) continue;
        for (let k = 0; k < 12 && !placed; k++) {
          const p = { x: between(g0, g1 - b.w), y: a.y + between(-50, 30), w: b.w, h: b.h, bee: true };
          if (!clear(p, 48)) continue;
          b.el.style.left = `${p.x - b.fx}px`; b.el.style.top = `${p.y - b.fy}px`;
          items.push({ ...p, el: b.el }); lastBee = a.y; placed = true;
        }
        if (placed) break;
      }
      if (!placed) b.el.remove();
    }

    // Clouds: about one per 500px, each the best spread of 15 tries; up to 40% may tuck behind the text
    const n = Math.round((H - from) / between(450, 560));
    for (let c = 0; c < n; c++) {
      let best = null, score = -1;
      for (let k = 0; k < 15; k++) {
        const kind = rand() < .5 ? 'cloud' : 'cloud-b', w = Math.round(130 + rand() ** 1.1 * 160), h = Math.round(w * (kind === 'cloud' ? .383 : .4));
        const behind = text.x > .9 * w ? .4 : .7;
        const [lo, hi] = rand() < .5 ? [-.35 * w, text.x + behind * w - w] : [text.x + text.w - behind * w, W - .65 * w];
        if (hi < lo) continue;
        const p = { x: between(lo, hi), y: between(Math.max(from, 0), H - h - 10), w, h, kind };
        if (!clear(p, 26)) continue;
        const s = Math.min(1e9, ...items.map(i => dist(p, i) * (i.bee ? 1.3 : 1)));
        if (s > score) { score = s; best = p; }
      }
      if (!best) continue;
      const el = make(`<svg class="cloud sky" aria-hidden="true" style="left:${best.x.toFixed(0)}px;top:${best.y.toFixed(0)}px;width:${best.w}px;height:${best.h}px;opacity:${between(.4, .7).toFixed(2)}"><use href="#${best.kind}"/></svg>`);
      main.append(el); items.push({ ...best, el });
    }
  }

  let t;
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => {
    layout(true);
    // A new width lays the sky out again; a taller page (an opened answer) only adds sky below
    new ResizeObserver(() => { clearTimeout(t); t = setTimeout(() => {
      if (Math.abs(main.clientWidth - laidW) > 1) layout(true); else if (main.scrollHeight > laidH + 150) layout(false);
    }, 150); }).observe(main);
  });
})();

// FAQ: a link to a question opens it
const openAsked = () => {
  const el = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (el && el.tagName === 'DETAILS') { el.open = true; el.scrollIntoView(); }
};
openAsked();
addEventListener('hashchange', openAsked);
