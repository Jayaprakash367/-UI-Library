/**
 * AURA UI — Component Library Engine
 * app.js · Efficient data-driven rendering · Search/filter · Copy · Modal
 * Built for scale — handles massive component libraries with lazy loading
 */

(function () {
  'use strict';

  /* ─── CONFIG ────────────────────────────────────── */
  const PAGE_SIZE       = 12;       // cards per page load
  const SEARCH_DEBOUNCE = 200;      // ms
  const LAZY_THRESHOLD  = 100;      // px before viewport to load iframes

  /* ─── CATEGORIES ────────────────────────────────── */
  if (typeof CATEGORIES === 'undefined') {
    window.CATEGORIES = [
      { id: 'all',        label: 'All',         icon: '✦' },
      { id: 'button',     label: 'Buttons',     icon: '◉' },
      { id: 'card',       label: 'Cards',       icon: '▣' },
      { id: 'animation',  label: 'Animations',  icon: '✧' },
      { id: 'background', label: 'Backgrounds', icon: '◐' },
      { id: 'input',      label: 'Inputs',      icon: '▤' },
      { id: 'badge',      label: 'Badges',      icon: '◈' },
    ];
  }

  /* ─── STATE ─────────────────────────────────────── */
  const state = {
    query:      '',
    category:   'all',
    activeTag:  null,
    page:       1,
    theme:      localStorage.getItem('aura-theme') || 'dark',
    viewMode:   'grid', // 'grid' or 'list'
    searchIndex: null,    // pre-built search index
  };

  /* ─── DOM HELPERS ───────────────────────────────── */
  const $ = id => document.getElementById(id);
  const $$ = sel => document.querySelectorAll(sel);

  /* ─── INIT ──────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    buildSearchIndex();
    applyTheme(state.theme);
    buildFilterPills();
    buildTagPanel();
    updateHeroStats();
    render();
    bindNavbar();
    bindSearch();
    bindThemeToggle();
    bindScrollTop();
    bindLoadMore();
    bindMobileNav();
    bindModalClose();
    bindKeyboard();
    bindViewToggle();
    bindInstallCopy();

    // Hide loader
    setTimeout(() => {
      const loader = $('pageLoader');
      if (loader) loader.classList.add('done');
    }, 1000);
  });

  /* ═══════════════════════════════════════════════════
     SEARCH INDEX — Pre-build for efficient filtering
     ═══════════════════════════════════════════════════ */
  function buildSearchIndex() {
    if (typeof COMPONENTS === 'undefined') return;
    state.searchIndex = COMPONENTS.map((c, i) => ({
      idx: i,
      text: [
        c.title,
        c.desc,
        c.category,
        ...c.tags
      ].join(' ').toLowerCase()
    }));
  }

  /* ═══════════════════════════════════════════════════
     THEME
     ═══════════════════════════════════════════════════ */
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('aura-theme', t);
    state.theme = t;
  }

  function bindThemeToggle() {
    const btn = $('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const next = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  /* ═══════════════════════════════════════════════════
     NAVBAR
     ═══════════════════════════════════════════════════ */
  function bindNavbar() {
    const navbar = $('navbar');
    if (!navbar) return;
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ═══════════════════════════════════════════════════
     MOBILE NAV
     ═══════════════════════════════════════════════════ */
  function bindMobileNav() {
    const btn = $('navHamburger');
    const nav = $('mobileNav');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', isOpen);
    });

    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', e => {
      if (!btn.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
        btn.classList.remove('open');
      }
    });
  }

  /* ═══════════════════════════════════════════════════
     SCROLL TO TOP
     ═══════════════════════════════════════════════════ */
  function bindScrollTop() {
    const btn = $('scrollTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ═══════════════════════════════════════════════════
     KEYBOARD SHORTCUTS
     ═══════════════════════════════════════════════════ */
  function bindKeyboard() {
    document.addEventListener('keydown', e => {
      // "/" to focus search
      if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        const input = $('searchInput');
        const active = document.activeElement;
        if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) return;
        e.preventDefault();
        if (input) input.focus();
      }
      // Escape to close modal
      if (e.key === 'Escape') closeModal();
    });
  }

  /* ═══════════════════════════════════════════════════
     VIEW TOGGLE
     ═══════════════════════════════════════════════════ */
  function bindViewToggle() {
    const gridBtn = $('gridViewBtn');
    const listBtn = $('listViewBtn');
    const grid = $('compGrid');
    if (!gridBtn || !listBtn || !grid) return;

    gridBtn.addEventListener('click', () => {
      state.viewMode = 'grid';
      grid.classList.remove('list-view');
      gridBtn.classList.add('active');
      listBtn.classList.remove('active');
    });

    listBtn.addEventListener('click', () => {
      state.viewMode = 'list';
      grid.classList.add('list-view');
      listBtn.classList.add('active');
      gridBtn.classList.remove('active');
    });
  }

  /* ═══════════════════════════════════════════════════
     INSTALL COPY
     ═══════════════════════════════════════════════════ */
  function bindInstallCopy() {
    const btn = $('installCopyBtn');
    const cmd = $('installCmd');
    if (!btn || !cmd) return;
    btn.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(cmd.textContent); } catch {}
      showToast('Install command copied!', 'success');
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';
      setTimeout(() => {
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>';
      }, 2000);
    });
  }

  /* ═══════════════════════════════════════════════════
     FILTER PILLS
     ═══════════════════════════════════════════════════ */
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

  /* ═══════════════════════════════════════════════════
     TAG PANEL
     ═══════════════════════════════════════════════════ */
  function buildTagPanel() {
    const wrap = $('tagList');
    if (!wrap || typeof COMPONENTS === 'undefined') return;

    const tagMap = {};
    COMPONENTS.forEach(c => c.tags.forEach(t => { tagMap[t] = (tagMap[t] || 0) + 1; }));

    Object.entries(tagMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
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

  /* ═══════════════════════════════════════════════════
     HERO STATS
     ═══════════════════════════════════════════════════ */
  function updateHeroStats() {
    const el = $('heroComponentCount');
    if (el && typeof COMPONENTS !== 'undefined') {
      el.dataset.target = COMPONENTS.length;
    }
  }

  /* ═══════════════════════════════════════════════════
     SEARCH
     ═══════════════════════════════════════════════════ */
  function bindSearch() {
    const input = $('searchInput');
    if (!input) return;
    let timer;
    input.addEventListener('input', e => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        state.query = e.target.value.trim().toLowerCase();
        state.page = 1;
        render();
      }, SEARCH_DEBOUNCE);
    });
  }

  /* ═══════════════════════════════════════════════════
     FILTERING — Efficient indexed search
     ═══════════════════════════════════════════════════ */
  function filterComponents() {
    if (typeof COMPONENTS === 'undefined') return [];

    return COMPONENTS.filter((c, i) => {
      // Category filter
      if (state.category !== 'all' && c.category !== state.category) return false;

      // Tag filter
      if (state.activeTag && !c.tags.includes(state.activeTag)) return false;

      // Search filter (use pre-built index for speed)
      if (state.query) {
        if (state.searchIndex && state.searchIndex[i]) {
          return state.searchIndex[i].text.includes(state.query);
        }
        // Fallback
        const q = state.query;
        return c.title.toLowerCase().includes(q) ||
               c.desc.toLowerCase().includes(q) ||
               c.tags.some(t => t.toLowerCase().includes(q)) ||
               c.category.toLowerCase().includes(q);
      }

      return true;
    });
  }

  /* ═══════════════════════════════════════════════════
     MAIN RENDER
     ═══════════════════════════════════════════════════ */
  function render() {
    const grid    = $('compGrid');
    const countEl = $('resultCount');
    const loadBtn = $('loadMoreBtn');
    if (!grid) return;

    const filtered = filterComponents();
    const total    = filtered.length;
    const visible  = filtered.slice(0, state.page * PAGE_SIZE);

    // Update count
    if (countEl) {
      countEl.innerHTML = `<span>${total}</span> component${total !== 1 ? 's' : ''}`;
    }

    // Clear grid
    grid.innerHTML = '';

    // Empty state
    if (total === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔭</div>
          <div class="empty-title">No components found</div>
          <div class="empty-desc">Try a different search term or clear your filters.</div>
        </div>`;
      if (loadBtn) loadBtn.style.display = 'none';
      return;
    }

    // Build cards using DocumentFragment for performance
    const frag = document.createDocumentFragment();
    visible.forEach((comp, idx) => {
      const card = createCard(comp);
      card.style.transitionDelay = `${Math.min(idx % PAGE_SIZE, PAGE_SIZE - 1) * 40}ms`;
      frag.appendChild(card);
    });
    grid.appendChild(frag);

    // Observe for scroll reveal + lazy iframe loading
    observeCards();

    // Load more button
    if (loadBtn) {
      const remaining = total - visible.length;
      loadBtn.style.display = remaining > 0 ? 'inline-flex' : 'none';
      loadBtn.textContent = `Load More (${remaining} remaining)`;
    }
  }

  /* ═══════════════════════════════════════════════════
     CARD BUILDER
     ═══════════════════════════════════════════════════ */
  function createCard(comp) {
    const card = document.createElement('article');
    card.className = 'comp-card';
    card.dataset.id = comp.id;
    card.setAttribute('role', 'listitem');

    // Badges
    const badges = [];
    if (comp.isNew)    badges.push('<span class="comp-badge comp-badge-new">New</span>');
    if (comp.featured) badges.push('<span class="comp-badge comp-badge-feat">✦ Featured</span>');
    const badgesHtml = badges.length ? `<div class="comp-card-badges">${badges.join('')}</div>` : '';

    // Tags (max 3)
    const tagsHtml = comp.tags.slice(0, 3).map(t =>
      `<span class="comp-tag">${escHtml(t)}</span>`
    ).join('');

    // Use lazy iframe loading — srcdoc set only when visible
    card.innerHTML = `
      ${badgesHtml}
      <div class="card-beam"></div>
      <div class="comp-preview">
        <div class="comp-preview-overlay"></div>
        <iframe title="${escHtml(comp.title)} preview"
          data-srcdoc="${escAttr(buildPreviewDoc(comp.preview))}"
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
            <button class="code-panel-close-btn" aria-label="Close">✕</button>
          </div>
        </div>
        <pre class="code-panel-pre" tabindex="0">${escHtml(comp.code)}</pre>
      </div>`;

    // ─── Event: Copy button
    card.querySelector('.btn-copy').addEventListener('click', e => {
      e.stopPropagation();
      copyCode(comp, card.querySelector('.btn-copy'));
    });

    // ─── Event: Code toggle
    card.querySelector('.btn-code').addEventListener('click', e => {
      e.stopPropagation();

      // Close others
      document.querySelectorAll('.comp-card.code-open').forEach(other => {
        if (other === card) return;
        other.classList.remove('code-open');
        other.querySelector('.comp-code-panel').setAttribute('aria-hidden', 'true');
        other.querySelector('.btn-code').innerHTML = '<span>&lt;/&gt;</span> Code';
      });

      const isOpen = card.classList.toggle('code-open');
      card.querySelector('.comp-code-panel').setAttribute('aria-hidden', !isOpen);

      if (isOpen) {
        card.querySelector('.btn-code').innerHTML = '<span>▲</span> Hide';
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        card.querySelector('.btn-code').innerHTML = '<span>&lt;/&gt;</span> Code';
      }
    });

    // ─── Event: Code panel close
    card.querySelector('.code-panel-close-btn').addEventListener('click', e => {
      e.stopPropagation();
      card.classList.remove('code-open');
      card.querySelector('.comp-code-panel').setAttribute('aria-hidden', 'true');
      card.querySelector('.btn-code').innerHTML = '<span>&lt;/&gt;</span> Code';
    });

    // ─── Event: Code panel copy
    card.querySelector('.code-panel-copy-btn').addEventListener('click', e => {
      e.stopPropagation();
      const btn = card.querySelector('.code-panel-copy-btn');
      copyCode(comp, btn);
      btn.textContent = '✓ Copied!';
      setTimeout(() => { btn.textContent = '⎘ Copy'; }, 2200);
    });

    // ─── Event: Card click → open modal
    card.querySelector('.comp-preview').addEventListener('click', e => {
      e.stopPropagation();
      openModal(comp);
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

  /* ═══════════════════════════════════════════════════
     LAZY IFRAME LOADING & SCROLL REVEAL
     ═══════════════════════════════════════════════════ */
  let cardObserver;

  function observeCards() {
    if (cardObserver) cardObserver.disconnect();

    cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;

          // Reveal animation
          card.classList.add('visible');

          // Lazy load iframe
          const iframe = card.querySelector('iframe[data-srcdoc]');
          if (iframe && !iframe.srcdoc) {
            iframe.srcdoc = iframe.dataset.srcdoc;
          }

          cardObserver.unobserve(card);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: `0px 0px ${LAZY_THRESHOLD}px 0px`
    });

    $$('.comp-card').forEach(c => cardObserver.observe(c));
  }

  /* ═══════════════════════════════════════════════════
     LOAD MORE
     ═══════════════════════════════════════════════════ */
  function bindLoadMore() {
    const btn = $('loadMoreBtn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      state.page++;
      render();
    });
  }

  /* ═══════════════════════════════════════════════════
     COPY CODE
     ═══════════════════════════════════════════════════ */
  async function copyCode(comp, btn) {
    try {
      await navigator.clipboard.writeText(comp.code);
    } catch {
      // Fallback for http
      const ta = document.createElement('textarea');
      ta.value = comp.code;
      ta.style.cssText = 'position:fixed;opacity:0;';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }

    btn.classList.add('copied');
    const origHTML = btn.innerHTML;
    btn.innerHTML = '<span>✓</span> Copied!';
    showToast(`Copied "${comp.title}"`, 'success');

    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = origHTML || '<span>⎘</span> Copy';
    }, 2200);
  }

  /* ═══════════════════════════════════════════════════
     CODE MODAL
     ═══════════════════════════════════════════════════ */
  function openModal(comp) {
    const overlay = $('codeModal');
    const title   = $('modalTitle');
    const pre     = $('modalCode');
    const copyBtn = $('modalCopyBtn');
    const langEl  = $('modalCodeLang');
    if (!overlay) return;

    title.textContent = comp.title;
    pre.textContent = comp.code;

    // Determine language label
    const hasJs = comp.code.includes('<script');
    const hasCss = comp.code.includes('<style') || comp.code.includes('{');
    if (langEl) {
      langEl.textContent = hasJs ? 'HTML + CSS + JS' : hasCss ? 'HTML + CSS' : 'HTML';
    }

    // Copy button handler
    copyBtn.onclick = async () => {
      try { await navigator.clipboard.writeText(comp.code); } catch {
        const ta = document.createElement('textarea');
        ta.value = comp.code;
        ta.style.cssText = 'position:fixed;opacity:0;';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      copyBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
      showToast(`Copied "${comp.title}"`, 'success');
      setTimeout(() => {
        copyBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copy Code';
      }, 2200);
    };

    // Modal tabs
    $$('.modal-tab').forEach(tab => {
      tab.onclick = () => {
        $$('.modal-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const mode = tab.dataset.tab;
        if (mode === 'all') {
          pre.textContent = comp.code;
          if (langEl) langEl.textContent = 'All Code';
        } else if (mode === 'html') {
          pre.textContent = extractHtml(comp.code);
          if (langEl) langEl.textContent = 'HTML';
        } else if (mode === 'css') {
          pre.textContent = extractCss(comp.code);
          if (langEl) langEl.textContent = 'CSS';
        } else if (mode === 'js') {
          pre.textContent = extractJs(comp.code);
          if (langEl) langEl.textContent = 'JavaScript';
        }
      };
    });

    // Show modal
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Click outside to close
    overlay.onclick = e => { if (e.target === overlay) closeModal(); };
  }

  function closeModal() {
    const overlay = $('codeModal');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function bindModalClose() {
    const btn = $('modalCloseBtn');
    if (btn) btn.addEventListener('click', closeModal);
  }

  /* ─── Code extraction helpers ─────────────────── */
  function extractHtml(code) {
    return code.replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<script[\s\S]*?<\/script>/gi, '').trim() || '<!-- No HTML in this component -->';
  }
  function extractCss(code) {
    const matches = code.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
    if (!matches) return '/* No CSS in this component */';
    return matches.map(m => m.replace(/<\/?style[^>]*>/gi, '')).join('\n\n').trim();
  }
  function extractJs(code) {
    const matches = code.match(/<script[^>]*>([\s\S]*?)<\/script>/gi);
    if (!matches) return '// No JavaScript in this component';
    return matches.map(m => m.replace(/<\/?script[^>]*>/gi, '')).join('\n\n').trim();
  }

  /* ═══════════════════════════════════════════════════
     TOAST
     ═══════════════════════════════════════════════════ */
  function showToast(msg, type = 'info') {
    let stack = document.querySelector('.toast-stack');
    if (!stack) {
      stack = document.createElement('div');
      stack.className = 'toast-stack';
      document.body.appendChild(stack);
    }

    const icons = { success: '✓', error: '✕', info: 'ℹ' };
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span class="toast-icon toast-icon-wrap">${icons[type] || icons.info}</span><span>${escHtml(msg)}</span>`;
    stack.appendChild(toast);

    const remove = () => {
      toast.classList.add('toast-exit');
      toast.addEventListener('animationend', () => toast.remove(), { once: true });
    };

    setTimeout(remove, 3000);
    toast.addEventListener('click', remove);
  }

  /* ═══════════════════════════════════════════════════
     UTILS
     ═══════════════════════════════════════════════════ */
  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escAttr(str) {
    return String(str).replace(/"/g, '&quot;');
  }

  // Expose for debugging
  window._auraState = state;

})();
