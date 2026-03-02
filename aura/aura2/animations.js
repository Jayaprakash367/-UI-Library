/**
 * AURA UI — Premium Animation Engine
 * animations.js  ·  particles  ·  cursor  ·  tilt  ·  magnetic  ·  ripple  ·  parallax  ·  scroll
 *
 * Modules:
 *   initLoader()          — page-load shimmer screen, fades out after content ready
 *   initParticles()       — canvas particle network reacting to mouse
 *   initScrollAnimation() — Intersection Observer fade-slide-in for sections
 *   initHoverEffects()    — 3D perspective tilt on component cards
 *   initCursor()          — custom ring+dot cursor with hover-grow  *   initMagneticButtons() — magnetic pull on primary/ghost buttons
 *   initRipple()          — material-style ripple on button clicks
 *   initParallax()        — aurora orbs parallax on scroll
 */

(function () {
  'use strict';

  /* ─── Helpers ────────────────────────────────────────────── */
  const $ = id => document.getElementById(id);
  const isTouch = () => window.matchMedia('(pointer: coarse)').matches;
  const isMobile = () => window.innerWidth < 768;

  /* ══════════════════════════════════════════════════════════
     1. PAGE LOADER
        Shows a branded overlay, fades away once window loads.
     ══════════════════════════════════════════════════════════ */
  function initLoader() {
    const loader = $('pageLoader');
    if (!loader) return;

    const hide = () => {
      loader.classList.add('loader-out');
      loader.addEventListener('transitionend', () => loader.remove(), { once: true });
    };

    if (document.readyState === 'complete') {
      setTimeout(hide, 350);
    } else {
      window.addEventListener('load', () => setTimeout(hide, 350), { once: true });
    }
  }

  /* ══════════════════════════════════════════════════════════
     2. PARTICLE CANVAS
        Floating glow dots + connecting lines.
        Mouse proximity repels nearby particles.
     ══════════════════════════════════════════════════════════ */
  function initParticles() {
    const canvas = $('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H;
    const mouse = { x: -9999, y: -9999 };
    const COUNT       = isTouch() || isMobile() ? 35 : 72;
    const CONNECT     = 120;   // px — max connection distance
    const REPEL_R     = 90;    // px — mouse repel radius
    const REPEL_FORCE = 0.45;
    const SPEED_MAX   = 1.1;
    let particles     = [];

    /* palette — violet / blue / cyan dots */
    const HUES = [255, 220, 190];

    function rnd(a, b) { return Math.random() * (b - a) + a; }

    function mkParticle() {
      return {
        x:   rnd(0, W),
        y:   rnd(0, H),
        vx:  rnd(-0.32, 0.32),
        vy:  rnd(-0.32, 0.32),
        r:   rnd(0.5, 2.0),
        a:   rnd(0.18, 0.60),
        hue: HUES[Math.floor(Math.random() * HUES.length)],
      };
    }

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function tick() {
      ctx.clearRect(0, 0, W, H);

      /* update + draw each particle */
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        /* mouse repulsion */
        const mdx  = p.x - mouse.x;
        const mdy  = p.y - mouse.y;
        const mdst = Math.hypot(mdx, mdy);
        if (mdst < REPEL_R && mdst > 0) {
          const force = (REPEL_R - mdst) / REPEL_R;
          p.vx += (mdx / mdst) * force * REPEL_FORCE;
          p.vy += (mdy / mdst) * force * REPEL_FORCE;
        }

        /* damping */
        p.vx *= 0.984;
        p.vy *= 0.984;

        /* speed cap */
        const sp = Math.hypot(p.vx, p.vy);
        if (sp > SPEED_MAX) {
          p.vx = (p.vx / sp) * SPEED_MAX;
          p.vy = (p.vy / sp) * SPEED_MAX;
        }

        p.x += p.vx;
        p.y += p.vy;

        /* edge wrap */
        if (p.x < -8)    p.x = W + 8;
        if (p.x > W + 8) p.x = -8;
        if (p.y < -8)    p.y = H + 8;
        if (p.y > H + 8) p.y = -8;

        /* draw glow dot */
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},82%,72%,${p.a})`;
        ctx.fill();
      }

      /* draw connecting lines */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.hypot(dx, dy);
          if (d < CONNECT) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139,92,246,${(1 - d / CONNECT) * 0.16})`;
            ctx.lineWidth   = 0.65;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(tick);
    }

    /* init */
    resize();
    particles = Array.from({ length: COUNT }, mkParticle);
    tick();

    window.addEventListener('resize',    resize,             { passive: true });
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });
  }

  /* ══════════════════════════════════════════════════════════
     3. SCROLL ANIMATIONS
        Elements slide-up + fade-in when entering viewport.
        Uses IntersectionObserver — no scroll event overhead.
     ══════════════════════════════════════════════════════════ */
  function initScrollAnimation() {
    const SELECTORS = [
      '.hero-eyebrow',
      '.hero-title',
      '.hero-sub',
      '.hero-cta',
      '.hero-metrics',
      '.section-header',
      '.tag-panel',
      '.bento-card',
      '.about-section .section-heading',
      '.about-text',
      '.about-features',
      '.footer-inner',
    ];

    const targets = [];
    SELECTORS.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if (!el.classList.contains('will-animate')) {
          el.classList.add('will-animate');
          targets.push(el);
        }
      });
    });

    /* stagger delay by order */
    targets.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 6) * 0.07}s`;
    });

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('animate-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    targets.forEach(el => io.observe(el));
  }

  /* ══════════════════════════════════════════════════════════
     4. CARD HOVER — 3D TILT
        Perspective rotateX / rotateY following mouse inside
        the card bounds. Also increases glow shadow.
        Auto-attaches to dynamically added cards via
        MutationObserver watching #compGrid.
     ══════════════════════════════════════════════════════════ */
  function initHoverEffects() {
    if (isTouch()) return;

    function attachTilt(card) {
      if (card._tiltBound) return;
      card._tiltBound = true;

      card.addEventListener('mousemove', e => {
        const r  = card.getBoundingClientRect();
        const cx = r.left + r.width  / 2;
        const cy = r.top  + r.height / 2;

        /* tilt degrees ±10 */
        const rotX = ((e.clientY - cy) / (r.height / 2)) * -9;
        const rotY = ((e.clientX - cx) / (r.width  / 2)) *  9;

        /* dynamic shadow offset follows tilt */
        const shX = ((e.clientX - cx) / r.width)  * -14;
        const shY = ((e.clientY - cy) / r.height) * -14;

        card.style.transform =
          `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-5px) scale(1.025)`;
        card.style.boxShadow =
          `${shX}px ${shY + 10}px 40px rgba(124,58,237,0.25),
           0 12px 36px rgba(0,0,0,0.55)`;
        card.style.borderColor = 'rgba(139,92,246,.55)';
        card.style.transition  = 'border-color .15s ease, box-shadow .15s ease';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform   = '';
        card.style.boxShadow   = '';
        card.style.borderColor = '';
        card.style.transition  =
          'transform .5s cubic-bezier(0.34,1.56,0.64,1), border-color .3s ease, box-shadow .3s ease';
      });
    }

    /* attach to existing cards */
    document.querySelectorAll('.comp-card').forEach(attachTilt);

    /* watch for newly rendered cards */
    const grid = $('compGrid') || document.body;
    new MutationObserver(muts => {
      muts.forEach(m =>
        m.addedNodes.forEach(n => {
          if (n.nodeType !== 1) return;
          if (n.classList && n.classList.contains('comp-card')) attachTilt(n);
          n.querySelectorAll && n.querySelectorAll('.comp-card').forEach(attachTilt);
        })
      );
    }).observe(grid, { childList: true, subtree: true });
  }

  /* ══════════════════════════════════════════════════════════
     5. CUSTOM CURSOR
        Two-layer: exact dot + smooth ring follower.
        Ring grows on interactive elements.
     ══════════════════════════════════════════════════════════ */
  function initCursor() {
    if (isTouch() || isMobile()) return;

    const ring = $('cursorRing');
    const dot  = $('cursorDot');
    if (!ring || !dot) return;

    document.body.classList.add('custom-cursor');

    let mx = -200, my = -200; /* mouse coords */
    let rx = -200, ry = -200; /* ring lerp coords */

    /* dot tracks cursor exactly */
    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    }, { passive: true });

    /* ring lerps to mouse for smooth trail */
    (function lerpRing() {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(lerpRing);
    })();

    /* grow on hover */
    const HOVER_SEL = 'a, button, [role="button"], input, .comp-card, .filter-pill, .tag-item';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(HOVER_SEL)) ring.classList.add('cursor-hover');
    });
    document.addEventListener('mouseout', e => {
      if (!e.relatedTarget || !e.relatedTarget.closest(HOVER_SEL)) {
        ring.classList.remove('cursor-hover');
      }
    });

    /* hide when leaving window */
    document.addEventListener('mouseleave', () => {
      ring.style.opacity = '0';
      dot.style.opacity  = '0';
    });
    document.addEventListener('mouseenter', () => {
      ring.style.opacity = '1';
      dot.style.opacity  = '1';
    });
  }

  /* ══════════════════════════════════════════════════════════
     6. MAGNETIC BUTTONS
        .btn-primary and .btn-ghost buttons slightly
        attract toward cursor while hovering, spring back on leave.
     ══════════════════════════════════════════════════════════ */
  function initMagneticButtons() {
    if (isTouch()) return;

    function attachMagnetic(el) {
      if (el._magnetBound) return;
      el._magnetBound = true;

      el.addEventListener('mousemove', e => {
        const r  = el.getBoundingClientRect();
        const cx = r.left + r.width  / 2;
        const cy = r.top  + r.height / 2;
        const dx = (e.clientX - cx) * 0.28;
        const dy = (e.clientY - cy) * 0.28;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    }

    /* initial pass */
    document.querySelectorAll('.btn-primary, .btn-ghost, .scroll-top, .theme-toggle').forEach(attachMagnetic);

    /* watch for new buttons (e.g. load more) */
    new MutationObserver(() => {
      document.querySelectorAll('.btn-primary, .btn-ghost').forEach(attachMagnetic);
    }).observe(document.body, { childList: true, subtree: true });
  }

  /* ══════════════════════════════════════════════════════════
     7. RIPPLE CLICK EFFECT
        Material-style ripple on any .btn, .filter-pill,
        .btn-copy, .btn-code click.
     ══════════════════════════════════════════════════════════ */
  function initRipple() {
    document.addEventListener('click', e => {
      const btn = e.target.closest(
        '.btn, .btn-copy, .btn-code, .filter-pill, .scroll-top, .theme-toggle'
      );
      if (!btn) return;

      const rect   = btn.getBoundingClientRect();
      const size   = Math.max(rect.width, rect.height) * 2.2;
      const x      = e.clientX - rect.left - size / 2;
      const y      = e.clientY - rect.top  - size / 2;

      const span = document.createElement('span');
      span.className = 'ripple-fx';
      span.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;

      /* ensure btn can contain absolute children */
      if (getComputedStyle(btn).position === 'static') btn.style.position = 'relative';
      if (btn.style.overflow !== 'hidden') btn.style.overflow = 'hidden';

      btn.appendChild(span);
      span.addEventListener('animationend', () => span.remove(), { once: true });
    });
  }

  /* ══════════════════════════════════════════════════════════
     8. PARALLAX SCROLL
        Hero aurora orb container scrolls at 35% speed,
        creating a depth illusion. Uses rAF throttle.
     ══════════════════════════════════════════════════════════ */
  function initParallax() {
    const heroMesh = document.querySelector('.hero-mesh');
    if (!heroMesh) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const sy = window.scrollY;
        /* only while hero is in viewport range */
        if (sy < 900) {
          heroMesh.style.transform = `translateY(${sy * 0.32}px)`;
        }
        ticking = false;
      });
    }, { passive: true });
  }

  /* ══════════════════════════════════════════════════════════
     ADVANCED CARD HOVER — spotlight + 3-D tilt + shimmer
     ══════════════════════════════════════════════════════════ */
  function initCardHover() {
    const grid = document.getElementById('compGrid');
    if (!grid) return;

    // Re-attach whenever new cards are rendered
    const mo = new MutationObserver(() => attachCardHover());
    mo.observe(grid, { childList: true });
    attachCardHover();

    function attachCardHover() {
      grid.querySelectorAll('.comp-card:not([data-hover-init])').forEach(card => {
        card.dataset.hoverInit = '1';

        card.addEventListener('mousemove', e => {
          const r  = card.getBoundingClientRect();
          const x  = e.clientX - r.left;
          const y  = e.clientY - r.top;
          const cx = r.width  / 2;
          const cy = r.height / 2;
          const nx = (x - cx) / cx;   // -1 … +1
          const ny = (y - cy) / cy;

          // 2D effects: subtle scale & translate based on cursor position
          const scaleBoost = 1 + (Math.abs(nx) + Math.abs(ny)) * 0.015;  // up to +3%
          const txShift = nx * 2;   // ±2px horizontal
          const tyShift = -Math.abs(ny) * 3;  // up to -3px (lift up)

          card.style.setProperty('--mx', `${(x / r.width  * 100).toFixed(1)}%`);
          card.style.setProperty('--my', `${(y / r.height * 100).toFixed(1)}%`);
          card.style.setProperty('--scale', scaleBoost.toFixed(3));
          card.style.setProperty('--tx', `${txShift.toFixed(1)}px`);
          card.style.setProperty('--ty', `${tyShift.toFixed(1)}px`);
          card.style.setProperty('--glow-op', '1');
          card.style.transition = 'transform .08s linear, border-color .35s ease, box-shadow .35s ease';
        });

        card.addEventListener('mouseenter', () => {
          // Reset shimmer so CSS transition re-fires
          card.style.setProperty('--shimmer-x', '-120%');
        });

        card.addEventListener('mouseleave', () => {
          card.style.setProperty('--glow-op', '0');
          card.style.setProperty('--scale', '1');
          card.style.setProperty('--tx', '0px');
          card.style.setProperty('--ty', '0px');
          // Spring-back on release
          card.style.transition = 'transform .5s cubic-bezier(0.34,1.56,0.64,1), border-color .35s ease, box-shadow .35s ease';
        });
      });
    }
  }

  /* ══════════════════════════════════════════════════════════
     SMOOTH SCROLL — anchor clicks w/ offset for fixed navbar
     ══════════════════════════════════════════════════════════ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const offset = 72; /* navbar height */
        const top    = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ══════════════════════════════════════════════════════════
     INIT ALL — waits for DOM ready
     ══════════════════════════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initParticles();
    initScrollAnimation();
    initHoverEffects();
    initCursor();
    initMagneticButtons();
    initRipple();
    initParallax();
    initSmoothScroll();
    initCardHover();
  });

})();
