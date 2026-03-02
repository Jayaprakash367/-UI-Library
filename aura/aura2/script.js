/**
 * AURA UI — Component Library Engine
 * script.js  ·  data-driven rendering  ·  search/filter  ·  copy  ·  modal
 *
 * Depends on: data.js (COMPONENTS, CATEGORIES), style.css
 */

(function () {
  'use strict';

  /* ─── Config ─────────────────────────────────────────────── */
  const PAGE_SIZE       = 9;
  const SEARCH_DEBOUNCE = 250;

  /* ─── State ──────────────────────────────────────────────── */
  const state = {
    query:     '',
    category:  'all',
    activeTag: null,
    page:      1,
    theme:     localStorage.getItem('aura-theme') || 'dark',
  };

  /* ─── DOM helpers ────────────────────────────────────────── */
  const $  = id  => document.getElementById(id);
  const $$ = sel => document.querySelectorAll(sel);

  /* ─── Init ───────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(state.theme);
    buildFilterPills();
    buildTagPanel();
    buildHeroStats();
    render();
    bindNavbar();
    bindSearch();
    bindThemeToggle();
    bindScrollTop();
    bindLoadMore();
    bindMobileNav();
    bindModalClose();
  });

  /* ══════════════════════════════════════════════════════════
     THEME
     ══════════════════════════════════════════════════════════ */
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    const btn = $('themeToggle');
    if (btn) btn.textContent = t === 'dark' ? '☀' : '🌙';
    localStorage.setItem('aura-theme', t);
  }
  function bindThemeToggle() {
    const btn = $('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme(state.theme);
    });
  }

  /* ══════════════════════════════════════════════════════════
     NAVBAR
     ══════════════════════════════════════════════════════════ */
  function bindNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    function onScroll() { navbar.classList.toggle('scrolled', window.scrollY > 20); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    const sections = $$('[data-section]');
    const links    = $$('.nav-links a[href^="#"]');
    if (sections.length && links.length) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const id = e.target.dataset.section;
            links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
          }
        });
      }, { rootMargin: '-40% 0px -55% 0px' });
      sections.forEach(s => io.observe(s));
    }
  }

  /* ══════════════════════════════════════════════════════════
     MOBILE NAV
     ══════════════════════════════════════════════════════════ */
  function bindMobileNav() {
    const btn       = $('navHamburger');
    const mobileNav = $('mobileNav');
    if (!btn || !mobileNav) return;
    btn.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open);
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        btn.classList.remove('open');
      });
    });
    document.addEventListener('click', e => {
      if (!btn.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        btn.classList.remove('open');
      }
    });
  }

  /* ══════════════════════════════════════════════════════════
     SCROLL-TO-TOP
     ══════════════════════════════════════════════════════════ */
  function bindScrollTop() {
    const btn = $('scrollTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ══════════════════════════════════════════════════════════
     FILTER PILLS
     ══════════════════════════════════════════════════════════ */
  function buildFilterPills() {
    const wrap = $('filterPills');
    if (!wrap || typeof CATEGORIES === 'undefined') return;
    CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'filter-pill' + (cat.id === state.category ? ' active' : '');
      btn.dataset.cat = cat.id;
      btn.innerHTML = `<span class="filter-pill-icon">${cat.icon}</span>${cat.label}`;
      btn.addEventListener('click', () => {
        state.category = cat.id;
        state.page = 1;
        state.activeTag = null;
        $$('.filter-pill').forEach(p => p.classList.toggle('active', p.dataset.cat === cat.id));
        $$('.tag-item').forEach(t => t.classList.remove('active'));
        render();
      });
      wrap.appendChild(btn);
    });
  }

  /* ══════════════════════════════════════════════════════════
     TAG PANEL
     ══════════════════════════════════════════════════════════ */
  function buildTagPanel() {
    const wrap = $('tagList');
    if (!wrap || typeof COMPONENTS === 'undefined') return;
    const tagMap = {};
    COMPONENTS.forEach(c => c.tags.forEach(t => { tagMap[t] = (tagMap[t] || 0) + 1; }));
    Object.entries(tagMap)
      .sort((a, b) => b[1] - a[1]).slice(0, 18)
      .forEach(([tag, count]) => {
        const div = document.createElement('div');
        div.className = 'tag-item';
        div.dataset.tag = tag;
        div.innerHTML = `${tag}<span class="tag-item-count">${count}</span>`;
        div.addEventListener('click', () => {
          const isActive = state.activeTag === tag;
          state.activeTag = isActive ? null : tag;
          state.page = 1;
          $$('.tag-item').forEach(t => t.classList.toggle('active', t.dataset.tag === state.activeTag));
          render();
        });
        wrap.appendChild(div);
      });
  }

  /* ══════════════════════════════════════════════════════════
     HERO STATS
     ══════════════════════════════════════════════════════════ */
  function buildHeroStats() {
    const el = $('heroComponentCount');
    if (el && typeof COMPONENTS !== 'undefined') el.textContent = COMPONENTS.length + '+';
  }

  /* ══════════════════════════════════════════════════════════
     SEARCH
     ══════════════════════════════════════════════════════════ */
  function bindSearch() {
    const input = $('searchInput');
    if (!input) return;
    let timer;
    input.addEventListener('input', e => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        state.query = e.target.value.trim().toLowerCase();
        state.page  = 1;
        render();
      }, SEARCH_DEBOUNCE);
    });
  }

  /* ══════════════════════════════════════════════════════════
     FILTERING
     ══════════════════════════════════════════════════════════ */
  function filterComponents() {
    if (typeof COMPONENTS === 'undefined') return [];
    return COMPONENTS.filter(c => {
      const matchCat = state.category === 'all' || c.category === state.category;
      const matchTag = !state.activeTag || c.tags.includes(state.activeTag);
      const q = state.query;
      const matchQ = !q ||
        c.title.toLowerCase().includes(q) ||
        c.desc.toLowerCase().includes(q)  ||
        c.tags.some(t => t.toLowerCase().includes(q)) ||
        c.category.toLowerCase().includes(q);
      return matchCat && matchTag && matchQ;
    });
  }

  /* ══════════════════════════════════════════════════════════
     MAIN RENDER
     ══════════════════════════════════════════════════════════ */
  function render() {
    const grid    = $('compGrid');
    const countEl = $('resultCount');
    const loadBtn = $('loadMoreBtn');
    if (!grid) return;
    const filtered = filterComponents();
    const total    = filtered.length;
    const visible  = filtered.slice(0, state.page * PAGE_SIZE);
    if (countEl) countEl.innerHTML = `<span>${total}</span> component${total !== 1 ? 's' : ''}`;
    grid.innerHTML = '';
    if (total === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔭</div>
          <div class="empty-title">No components found</div>
          <div class="empty-desc">Try a different search or clear your filters.</div>
        </div>`;
      if (loadBtn) loadBtn.style.display = 'none';
      return;
    }
    visible.forEach((comp, idx) => {
      const card = createCard(comp);
      card.style.transitionDelay = `${Math.min(idx % PAGE_SIZE, PAGE_SIZE - 1) * 50}ms`;
      grid.appendChild(card);
    });
    observeCards();
    if (loadBtn) {
      loadBtn.style.display = visible.length < total ? 'inline-flex' : 'none';
      loadBtn.textContent   = `Load More (${total - visible.length} remaining)`;
    }
  }

  /* ════════════════════════════════════════════════════════════
     CARD BUILDER
     ════════════════════════════════════════════════════════════ */
  function createCard(comp) {
    const card = document.createElement('article');
    card.className = 'comp-card';
    card.dataset.id = comp.id;
    const badges = [];
    if (comp.isNew)    badges.push(`<span class="comp-badge comp-badge-new">New</span>`);
    if (comp.featured) badges.push(`<span class="comp-badge comp-badge-feat">✦ Featured</span>`);
    const badgesHtml = badges.length ? `<div class="comp-card-badges">${badges.join('')}</div>` : '';
    const tagsHtml = comp.tags.slice(0, 3).map(t => `<span class="comp-tag">${escHtml(t)}</span>`).join('');
    card.innerHTML = `
      ${badgesHtml}
      <div class="card-beam"></div>
      <div class="comp-preview">
        <div class="comp-preview-overlay"></div>
        <iframe title="${escHtml(comp.title)} preview"
          srcdoc="${escAttr(buildPreviewDoc(comp.preview))}"
          loading="lazy"
          sandbox="allow-scripts"></iframe>
      </div>
      <div class="comp-body">
        <div class="comp-card-top">
          <span class="comp-title">${escHtml(comp.title)}</span>
          <span class="comp-cat-pill">${escHtml(comp.category)}</span>
        </div>
        <p class="comp-desc">${escHtml(comp.desc)}</p>
        <div class="comp-tags">${tagsHtml}</div>
      </div>
      <div class="comp-footer">
        <button class="btn-copy" data-id="${comp.id}" aria-label="Copy code"><span>⎘</span> Copy</button>
        <button class="btn-code" data-id="${comp.id}" aria-label="View code"><span>&lt;/&gt;</span> Code</button>
      </div>
      <div class="comp-code-panel" aria-hidden="true">
        <div class="code-panel-bar">
          <span class="code-panel-title"><span>&lt;/&gt;</span> ${escHtml(comp.title)}</span>
          <div class="code-panel-actions">
            <button class="code-panel-copy-btn" aria-label="Copy code">⎘ Copy</button>
            <button class="code-panel-close-btn" aria-label="Close code panel">✕</button>
          </div>
        </div>
        <pre class="code-panel-pre" tabindex="0">${escHtml(comp.code)}</pre>
      </div>`;
    card.querySelector('.btn-copy').addEventListener('click', e => {
      e.stopPropagation();
      copyCode(comp, card.querySelector('.btn-copy'));
    });
    card.querySelector('.btn-code').addEventListener('click', e => {
      e.stopPropagation();

      // Close every other open panel first
      document.querySelectorAll('.comp-card.code-open').forEach(otherCard => {
        if (otherCard === card) return;
        otherCard.classList.remove('code-open');
        otherCard.querySelector('.comp-code-panel').setAttribute('aria-hidden', 'true');
        otherCard.querySelector('.btn-code').innerHTML = '<span>&lt;/&gt;</span> Code';
      });

      const isOpen = card.classList.toggle('code-open');
      const panel  = card.querySelector('.comp-code-panel');
      panel.setAttribute('aria-hidden', !isOpen);
      const codeBtn = card.querySelector('.btn-code');
      if (isOpen) {
        codeBtn.innerHTML = '<span>▲</span> Hide';
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        codeBtn.innerHTML = '<span>&lt;/&gt;</span> Code';
      }
    });
    card.querySelector('.code-panel-close-btn').addEventListener('click', e => {
      e.stopPropagation();
      card.classList.remove('code-open');
      card.querySelector('.comp-code-panel').setAttribute('aria-hidden', 'true');
      card.querySelector('.btn-code').innerHTML = '<span>&lt;/&gt;</span> Code';
    });
    card.querySelector('.code-panel-copy-btn').addEventListener('click', e => {
      e.stopPropagation();
      const cpBtn = card.querySelector('.code-panel-copy-btn');
      copyCode(comp, cpBtn);
      cpBtn.textContent = '✓ Copied!';
      setTimeout(() => { cpBtn.textContent = '⎘ Copy'; }, 2200);
    });
    return card;
  }

  function buildPreviewDoc(bodyHtml) {
    return `<!DOCTYPE html><html><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
<style>*{box-sizing:border-box;margin:0;padding:0;}body{overflow:hidden;font-family:'Inter',sans-serif;}</style>
</head><body>${bodyHtml}</body></html>`;
  }

  /* ══════════════════════════════════════════════════════════
     SCROLL-REVEAL
     ══════════════════════════════════════════════════════════ */
  let revealObserver;
  function observeCards() {
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    $$('.comp-card').forEach(c => revealObserver.observe(c));
  }

  /* ══════════════════════════════════════════════════════════
     LOAD MORE
     ══════════════════════════════════════════════════════════ */
  function bindLoadMore() {
    const btn = $('loadMoreBtn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      state.page++;
      render();
    });
  }

  /* ══════════════════════════════════════════════════════════
     COPY
     ══════════════════════════════════════════════════════════ */
  async function copyCode(comp, btn) {
    try {
      await navigator.clipboard.writeText(comp.code);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = comp.code;
      ta.style.cssText = 'position:fixed;opacity:0;';
      document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
    }
    btn.classList.add('copied');
    btn.innerHTML = '<span>✓</span> Copied!';
    showToast(`Copied "${comp.title}"`, 'success');
    setTimeout(() => { btn.classList.remove('copied'); btn.innerHTML = '<span>⎘</span> Copy'; }, 2200);
  }

  /* ══════════════════════════════════════════════════════════
     CODE MODAL
     ══════════════════════════════════════════════════════════ */
  function openModal(comp) {
    const overlay = $('codeModal');
    const title   = $('modalTitle');
    const pre     = $('modalCode');
    const copyBtn = $('modalCopyBtn');
    if (!overlay) return;
    title.textContent = comp.title + ' — Code';
    pre.textContent   = comp.code;
    copyBtn.onclick = async () => {
      try { await navigator.clipboard.writeText(comp.code); } catch {}
      copyBtn.textContent = '✓ Copied!';
      copyBtn.style.background = 'linear-gradient(135deg,#10b981,#059669)';
      showToast(`Copied "${comp.title}"`, 'success');
      setTimeout(() => { copyBtn.textContent = '⎘ Copy Code'; copyBtn.style.background = ''; }, 2000);
    };
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    overlay.onclick = e => { if (e.target === overlay) closeModal(); };
  }
  function closeModal() {
    const overlay = $('codeModal');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  function bindModalClose() {
    const closeBtn = $('modalCloseBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  }

  /* ══════════════════════════════════════════════════════════
     TOAST
     ══════════════════════════════════════════════════════════ */
  function showToast(msg, type = 'info') {
    let stack = document.querySelector('.toast-stack');
    if (!stack) { stack = document.createElement('div'); stack.className = 'toast-stack'; document.body.appendChild(stack); }
    const icons = { success: '✓', error: '✕', info: 'ℹ' };
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span class="toast-icon toast-icon-wrap">${icons[type]||icons.info}</span><span>${escHtml(msg)}</span>`;
    stack.appendChild(toast);
    const remove = () => { toast.classList.add('toast-exit'); toast.addEventListener('animationend', () => toast.remove(), { once: true }); };
    setTimeout(remove, 3000);
    toast.addEventListener('click', remove);
  }

  /* ══════════════════════════════════════════════════════════
     UTILS
     ══════════════════════════════════════════════════════════ */
  function escHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }
  function escAttr(str) { return String(str).replace(/"/g,'&quot;'); }

  // expose for debugging
  window._auraState = state;

})();





