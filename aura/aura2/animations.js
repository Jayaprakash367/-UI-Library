/**
 * AURA UI — Animations Layer
 * animations.js · Particles · Cursor · Typewriter · Scroll reveals · Counters
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initParticles();
    initTypewriter();
    initScrollReveal();
    initCountUp();
    initBentoGlow();
  });

  /* ═══════════════════════════════════════════════════
     CUSTOM CURSOR
     ═══════════════════════════════════════════════════ */
  function initCursor() {
    const ring = document.getElementById('cursorRing');
    const dot  = document.getElementById('cursorDot');
    if (!ring || !dot) return;

    // Only on devices with fine pointer
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';
    }, { passive: true });

    function trackRing() {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(trackRing);
    }
    trackRing();

    // Hover effects
    const interactives = 'a, button, input, [role="button"], .comp-card, .bento-card, .magnetic';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(interactives)) {
        ring.style.width = '50px';
        ring.style.height = '50px';
        ring.style.borderColor = 'rgba(167,139,250,.6)';
      }
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(interactives)) {
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.borderColor = '';
      }
    });
  }

  /* ═══════════════════════════════════════════════════
     PARTICLE SYSTEM (Hero background)
     ═══════════════════════════════════════════════════ */
  function initParticles() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let w, h;
    const particles = [];
    const PARTICLE_COUNT = 60;

    function resize() {
      w = canvas.width  = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Create particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    draw();
  }

  /* ═══════════════════════════════════════════════════
     TYPEWRITER
     ═══════════════════════════════════════════════════ */
  function initTypewriter() {
    const el = document.getElementById('typewriterTarget');
    if (!el) return;

    const phrases = [
      'Beautiful interfaces in seconds.',
      'Copy. Paste. Ship.',
      'Zero dependencies, infinite possibilities.',
      'Built for developers who refuse to compromise.',
      'Production-ready UI components.',
      'From prototype to production in minutes.',
    ];

    let phraseIdx = 0, charIdx = 0, isDeleting = false;

    function tick() {
      const phrase = phrases[phraseIdx];

      if (!isDeleting) {
        el.textContent = phrase.slice(0, ++charIdx);
        if (charIdx === phrase.length) {
          isDeleting = true;
          setTimeout(tick, 2000); // Pause at full phrase
          return;
        }
      } else {
        el.textContent = phrase.slice(0, --charIdx);
        if (charIdx === 0) {
          isDeleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
        }
      }

      setTimeout(tick, isDeleting ? 40 : 70);
    }

    // Start after a brief delay
    setTimeout(tick, 1500);
  }

  /* ═══════════════════════════════════════════════════
     SCROLL REVEAL (for bento cards + check items)
     ═══════════════════════════════════════════════════ */
  function initScrollReveal() {
    const items = document.querySelectorAll('.will-animate');
    if (!items.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger the reveal
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    items.forEach(item => observer.observe(item));
  }

  /* ═══════════════════════════════════════════════════
     COUNT UP (Hero stats)
     ═══════════════════════════════════════════════════ */
  function initCountUp() {
    const statNums = document.querySelectorAll('.stat-num[data-target]');
    if (!statNums.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);

          if (isNaN(target) || target === 0) {
            el.textContent = '0';
            observer.unobserve(el);
            return;
          }

          let current = 0;
          const increment = Math.max(1, Math.ceil(target / 50));
          const duration = 1200;
          const stepTime = duration / (target / increment);

          const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = target;
              clearInterval(counter);
            } else {
              el.textContent = current;
            }
          }, stepTime);

          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNums.forEach(el => observer.observe(el));
  }

  /* ═══════════════════════════════════════════════════
     BENTO CARD GLOW (mouse tracking)
     ═══════════════════════════════════════════════════ */
  function initBentoGlow() {
    document.querySelectorAll('.bento-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

})();
