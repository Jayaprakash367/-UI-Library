/* ================================================================
   AURA UI v2.0 — animations.js
   Beam canvas, spotlight cursor, typewriter, counter animations,
   particles, scroll reveals, magnetic buttons, ripple, smooth scroll
   ================================================================ */

(function () {
  'use strict';

  /* ── Loader ─────────────────────────────────────────────────── */
  function initLoader() {
    const loader = document.getElementById('pageLoader');
    if (!loader) return;
    window.addEventListener('load', function () {
      setTimeout(function () {
        loader.classList.add('loaded');
        document.body.style.overflow = '';
      }, 800);
    });
    document.body.style.overflow = 'hidden';
    // Fallback
    setTimeout(function () {
      loader.classList.add('loaded');
      document.body.style.overflow = '';
    }, 3000);
  }

  /* ── Background Beams (Canvas) ───────────────────────────────── */
  function initBeams() {
    var canvas = document.getElementById('beamsCanvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var beams = [];
    var NUM_BEAMS = 12;
    var raf;

    function resize() {
      canvas.width  = canvas.offsetWidth  || window.innerWidth;
      canvas.height = canvas.offsetHeight || window.innerHeight;
    }

    function randomRange(min, max) {
      return min + Math.random() * (max - min);
    }

    function createBeam() {
      var side = Math.random() < 0.5 ? 'left' : 'right';
      var cw = canvas.width;
      var ch = canvas.height;
      var startX = side === 'left' ? randomRange(-80, cw * 0.2) : randomRange(cw * 0.8, cw + 80);
      var startY = randomRange(-60, ch * 0.35);
      var angle  = side === 'left'
        ? randomRange(25, 60) * (Math.PI / 180)
        : (180 - randomRange(25, 60)) * (Math.PI / 180);
      return {
        x:      startX,
        y:      startY,
        angle:  angle,
        speed:  randomRange(0.35, 0.8),
        length: randomRange(180, 380),
        width:  randomRange(0.5, 1.8),
        alpha:  0,
        maxAlpha: randomRange(0.04, 0.14),
        fadeIn:  true,
        life:    0,
        maxLife: randomRange(200, 500)
      };
    }

    function initBeamPool() {
      beams = [];
      for (var i = 0; i < NUM_BEAMS; i++) {
        var b = createBeam();
        b.life = Math.floor(Math.random() * b.maxLife);
        beams.push(b);
      }
    }

    function drawBeam(b) {
      var endX = b.x + Math.cos(b.angle) * b.length;
      var endY = b.y + Math.sin(b.angle) * b.length;
      var grad = ctx.createLinearGradient(b.x, b.y, endX, endY);
      grad.addColorStop(0,   'rgba(139,92,246,0)');
      grad.addColorStop(0.3, 'rgba(139,92,246,' + b.alpha + ')');
      grad.addColorStop(0.7, 'rgba(96,165,250,'  + (b.alpha * 0.7) + ')');
      grad.addColorStop(1,   'rgba(96,165,250,0)');

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(b.x, b.y);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = grad;
      ctx.lineWidth   = b.width;
      ctx.lineCap     = 'round';
      ctx.stroke();
      ctx.restore();
    }

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      beams.forEach(function (b, i) {
        b.life++;
        // Alpha fade
        var half = b.maxLife / 2;
        if (b.life < half) {
          b.alpha = (b.life / half) * b.maxAlpha;
        } else {
          b.alpha = ((b.maxLife - b.life) / half) * b.maxAlpha;
        }
        // Move
        b.x += Math.cos(b.angle) * b.speed;
        b.y += Math.sin(b.angle) * b.speed;
        drawBeam(b);
        // Respawn
        if (b.life >= b.maxLife) {
          beams[i] = createBeam();
        }
      });
      raf = requestAnimationFrame(tick);
    }

    resize();
    initBeamPool();
    tick();

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        resize();
        initBeamPool();
      }, 200);
    });

    // Pause when not visible
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        tick();
      }
    });
  }

  /* ── Spotlight Cursor Glow ───────────────────────────────────── */
  function initSpotlight() {
    var el = document.getElementById('spotlight');
    if (!el) return;
    var mx = window.innerWidth / 2, my = window.innerHeight / 2;
    var cx = mx, cy = my;
    var raf;

    function lerp(a, b, t) { return a + (b - a) * t; }

    function animate() {
      cx = lerp(cx, mx, 0.09);
      cy = lerp(cy, my, 0.09);
      el.style.left = cx + 'px';
      el.style.top  = cy + 'px';
      raf = requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', function (e) {
      mx = e.clientX;
      my = e.clientY;
    });

    animate();
  }

  /* ── Custom Cursor ───────────────────────────────────────────── */
  function initCursor() {
    var ring = document.getElementById('cursorRing');
    var dot  = document.getElementById('cursorDot');
    if (!ring || !dot) return;
    if (window.matchMedia('(pointer: coarse)').matches) {
      ring.style.display = 'none';
      dot.style.display  = 'none';
      return;
    }

    var rx = 0, ry = 0, rax = 0, ray = 0;
    var isHover = false;

    function lerpCursor() {
      rax = rax + (rx - rax) * 0.18;
      ray = ray + (ry - ray) * 0.18;
      ring.style.left = rax + 'px';
      ring.style.top  = ray + 'px';
      requestAnimationFrame(lerpCursor);
    }

    document.addEventListener('mousemove', function (e) {
      rx = e.clientX; ry = e.clientY;
      dot.style.left = e.clientX + 'px';
      dot.style.top  = e.clientY + 'px';
    });

    document.addEventListener('mouseover', function (e) {
      if (e.target.closest('a,button,[data-cursor]')) {
        ring.style.transform = 'translate(-50%,-50%) scale(1.6)';
        ring.style.borderColor = 'rgba(139,92,246,.9)';
      } else {
        ring.style.transform = 'translate(-50%,-50%) scale(1)';
        ring.style.borderColor = 'rgba(139,92,246,.6)';
      }
    });

    lerpCursor();
  }

  /* ── Particles ───────────────────────────────────────────────── */
  function initParticles() {
    var canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var particles = [];
    var NUM = 55;

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function create() {
      return {
        x:  Math.random() * canvas.width,
        y:  Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r:  Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.35 + 0.05
      };
    }

    resize();
    for (var i = 0; i < NUM; i++) particles.push(create());

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(function (p) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139,92,246,' + p.alpha + ')';
        ctx.fill();
      });
      requestAnimationFrame(tick);
    }
    tick();

    window.addEventListener('resize', function () {
      resize();
      particles = [];
      for (var i = 0; i < NUM; i++) particles.push(create());
    });
  }

  /* ── Typewriter ──────────────────────────────────────────────── */
  function initTypewriter() {
    var el = document.getElementById('typewriterTarget');
    if (!el) return;
    var phrases = [
      'Copy. Paste. Ship.',
      'Accessible by design.',
      'Zero dependencies.',
      'Dark & light themes.',
      '60 fps guaranteed.',
      'Production-grade code.'
    ];
    var phraseIdx = 0, charIdx = 0, deleting = false;
    var DELAY_TYPE = 70, DELAY_DELETE = 38, DELAY_PAUSE = 2000, DELAY_START = 1200;

    function type() {
      var phrase = phrases[phraseIdx];
      if (!deleting) {
        el.textContent = phrase.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === phrase.length) {
          deleting = true;
          setTimeout(type, DELAY_PAUSE);
          return;
        }
      } else {
        el.textContent = phrase.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          setTimeout(type, DELAY_START);
          return;
        }
      }
      setTimeout(type, deleting ? DELAY_DELETE : DELAY_TYPE);
    }

    setTimeout(type, DELAY_START);
  }

  /* ── Counter Animation ───────────────────────────────────────── */
  function initCounters() {
    var els = document.querySelectorAll('.stat-num[data-target]');
    if (!els.length) return;
    var started = false;

    function countUp(el) {
      var target = parseInt(el.getAttribute('data-target'), 10);
      if (target === 0) { el.textContent = '0'; return; }
      var start = 0, duration = 1600;
      var t0 = performance.now();
      function step(now) {
        var prog = Math.min((now - t0) / duration, 1);
        // Ease out cubic
        var ease = 1 - Math.pow(1 - prog, 3);
        el.textContent = Math.floor(ease * target);
        if (prog < 1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      requestAnimationFrame(step);
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !started) {
          started = true;
          els.forEach(function (el) { countUp(el); });
          observer.disconnect();
        }
      });
    }, { threshold: 0.4 });

    observer.observe(els[0].closest('.hero-stats') || els[0]);
  }

  /* ── Scroll Reveal ───────────────────────────────────────────── */
  function initScrollAnimation() {
    var items = document.querySelectorAll('.will-animate');
    if (!items.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ── Card Visibility Reveal ──────────────────────────────────── */
  function initCardReveal() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

    // Observe new cards as they're added to DOM
    var grid = document.getElementById('compGrid');
    if (!grid) return;

    var mutation = new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        m.addedNodes.forEach(function (node) {
          if (node.nodeType === 1 && node.classList.contains('comp-card')) {
            observer.observe(node);
          }
        });
      });
    });

    mutation.observe(grid, { childList: true });

    // Observe existing cards
    grid.querySelectorAll('.comp-card').forEach(function (c) { observer.observe(c); });
  }

  /* ── Navbar Behavior ─────────────────────────────────────────── */
  function initNavbar() {
    var nav = document.querySelector('.navbar');
    if (!nav) return;
    var lastY = 0;
    var ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var y = window.scrollY;
          if (y > 60) {
            nav.classList.add('scrolled');
          } else {
            nav.classList.remove('scrolled');
          }
          if (y > lastY && y > 140) {
            nav.classList.add('hidden');
          } else {
            nav.classList.remove('hidden');
          }
          lastY = y;
          ticking = false;
        });
        ticking = true;
      }
    });

    // Hamburger
    var hamburger = document.getElementById('navHamburger');
    var mobileNav = document.getElementById('mobileNav');
    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', function () {
        var open = mobileNav.classList.toggle('open');
        hamburger.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', open);
      });
      // Close on link click
      mobileNav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          mobileNav.classList.remove('open');
          hamburger.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  /* ── Theme Toggle ────────────────────────────────────────────── */
  function initTheme() {
    var btn  = document.getElementById('themeToggle');
    var html = document.documentElement;
    if (!btn) return;

    var saved = localStorage.getItem('aura-theme');
    if (saved) html.setAttribute('data-theme', saved);

    btn.addEventListener('click', function () {
      var current = html.getAttribute('data-theme');
      var next = current === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      localStorage.setItem('aura-theme', next);
    });
  }

  /* ── Smooth Scroll for anchors ───────────────────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id  = link.getAttribute('href').slice(1);
        var target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        var offset = 80;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  /* ── Scroll-to-Top Button ────────────────────────────────────── */
  function initScrollTop() {
    var btn = document.getElementById('scrollTop');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      btn.classList.toggle('visible', window.scrollY > 500);
    });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Magnetic Buttons ────────────────────────────────────────── */
  function initMagneticButtons() {
    var btns = document.querySelectorAll('.magnetic');
    if (!btns.length || window.matchMedia('(pointer: coarse)').matches) return;

    btns.forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width  / 2;
        var y = e.clientY - rect.top  - rect.height / 2;
        btn.style.transform = 'translate(' + x * 0.22 + 'px,' + y * 0.22 + 'px)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
        btn.style.transition = 'transform .4s ' + 'cubic-bezier(.34,1.56,.64,1)';
        setTimeout(function () { btn.style.transition = ''; }, 400);
      });
    });
  }

  /* ── Ripple Effect ───────────────────────────────────────────── */
  function initRipple() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.btn,.btn-copy,.btn-code,.filter-pill');
      if (!btn) return;
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
      ripple.style.cssText = 'left:' + x + 'px;top:' + y + 'px;width:' + btn.offsetWidth * 2 + 'px;height:' + btn.offsetWidth * 2 + 'px;margin-left:-' + btn.offsetWidth + 'px;margin-top:-' + btn.offsetWidth + 'px;';
      btn.style.position = btn.style.position || 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      setTimeout(function () { if (ripple.parentNode) ripple.parentNode.removeChild(ripple); }, 600);
    });
  }

  /* ── Search keyboard shortcut "/" ───────────────────────────── */
  function initSearchShortcut() {
    var input = document.getElementById('searchInput');
    if (!input) return;
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement !== input &&
          !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        input.focus();
        input.select();
      }
      if (e.key === 'Escape' && document.activeElement === input) {
        input.blur();
      }
    });
  }

  /* ── Mouse parallax on hero grid ────────────────────────────── */
  function initParallax() {
    var grid = document.querySelector('.hero-grid');
    var lamp = document.querySelector('.hero-lamp');
    if (!grid || window.matchMedia('(pointer: coarse)').matches) return;
    var cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    window.addEventListener('mousemove', function (e) {
      var dx = (e.clientX - cx) / cx;
      var dy = (e.clientY - cy) / cy;
      grid.style.transform = 'translate3d(' + dx * 10 + 'px,' + dy * 10 + 'px,0)';
      if (lamp) lamp.style.transform = 'translateX(calc(-50% + ' + dx * 18 + 'px))';
    });
  }

  /* ── No-op stubs (left in for script.js compatibility) ────────── */
  function initHoverEffects() {}
  function initCardHover() {}

  /* ── Boot ────────────────────────────────────────────────────── */
  function boot() {
    initLoader();
    initTheme();
    initNavbar();
    initBeams();
    initSpotlight();
    initCursor();
    initParticles();
    initTypewriter();
    initCounters();
    initScrollAnimation();
    initCardReveal();
    initMagneticButtons();
    initRipple();
    initSmoothScroll();
    initScrollTop();
    initSearchShortcut();
    initParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
