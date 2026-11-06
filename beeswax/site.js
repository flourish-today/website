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

// FAQ: a link to a question opens it
const openAsked = () => {
  const el = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (el && el.tagName === 'DETAILS') { el.open = true; el.scrollIntoView(); }
};
openAsked();
addEventListener('hashchange', openAsked);
