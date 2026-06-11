/**
 * AURA UI v5.0 — Premium Animation Engine
 * ─────────────────────────────────────────
 * Smooth Scroll · Particle Canvas · Custom Cursor · Text Mask Reveals
 * Parallax · 3D Tilt · Magnetic Snap · Page Loader · Horizontal Scroll
 *
 * Zero external dependencies. Pure vanilla JS.
 */

(function () {
  'use strict';

  /* ─── Global refs ──────────────────────────────── */
  let scrollY = 0;
  let windowH = window.innerHeight;
  let windowW = window.innerWidth;
  const isMobile = () => windowW < 1024;

  /* ─── Boot sequence ────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initPageLoader();
  });

  function bootAnimations() {
    initScrollProgress();
    initTextReveal();
    initScrollReveal();
    initCountUp();
    initTypewriter();
    initBentoGlow();
    initCard3DTilt();
    initShowcase3DTilt();
    initMagneticButtons();
    initParticleCanvas();
    initHorizontalScroll();
    initNavbarScroll();

    window.addEventListener('resize', () => {
      windowH = window.innerHeight;
      windowW = window.innerWidth;
    }, { passive: true });

    window.addEventListener('scroll', () => {
      scrollY = window.scrollY || window.pageYOffset;
    }, { passive: true });
  }

  /* ═══════════════════════════════════════════════════
     PAGE LOADER (Docky-style percentage counter)
     ═══════════════════════════════════════════════════ */
  function initPageLoader() {
    const loader = document.getElementById('pageLoader');
    const percent = document.getElementById('loaderPercent');
    const bar = document.getElementById('loaderBar');
    if (!loader || !percent || !bar) { bootAnimations(); return; }

    let current = 0;
    const target = 100;
    const duration = 2200; // ms
    const start = performance.now();

    function updateLoader(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Easing: ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.floor(eased * target);

      percent.textContent = current;
      bar.style.width = `${current}%`;

      if (progress < 1) {
        requestAnimationFrame(updateLoader);
      } else {
        percent.textContent = '100';
        bar.style.width = '100%';
        setTimeout(() => {
          loader.classList.add('done');
          document.body.style.overflow = '';
          bootAnimations();
        }, 400);
      }
    }

    document.body.style.overflow = 'hidden';
    requestAnimationFrame(updateLoader);
  }

  /* ═══════════════════════════════════════════════════
     SCROLL PROGRESS BAR
     ═══════════════════════════════════════════════════ */
  function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
      const h = document.documentElement.scrollHeight - windowH;
      const pct = h > 0 ? ((window.scrollY || 0) / h) * 100 : 0;
      bar.style.width = `${pct}%`;
    }, { passive: true });
  }

  /* ═══════════════════════════════════════════════════
     NAVBAR SCROLL EFFECT
     ═══════════════════════════════════════════════════ */
  function initNavbarScroll() {
    const nav = document.getElementById('navbar');
    const hamburger = document.getElementById('navHamburger');
    const mobileNav = document.getElementById('mobileNav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // Hamburger toggle
    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileNav.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', mobileNav.classList.contains('open'));
      });

      // Close on link click
      mobileNav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          hamburger.classList.remove('open');
          mobileNav.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  /* ═══════════════════════════════════════════════════
     TEXT MASK REVEAL (Vibor-style translateY reveals)
     ═══════════════════════════════════════════════════ */
  function initTextReveal() {
    const reveals = document.querySelectorAll('[data-reveal]');
    if (!reveals.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.dataset.delay || '0', 10);
          setTimeout(() => {
            el.classList.add('revealed');
          }, delay);
          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -60px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  /* ═══════════════════════════════════════════════════
     SCROLL REVEAL (for bento cards, check items, trust cards)
     ═══════════════════════════════════════════════════ */
  function initScrollReveal() {
    const items = document.querySelectorAll('.will-animate');
    if (!items.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Find index among siblings for stagger
          const siblings = Array.from(entry.target.parentElement.querySelectorAll('.will-animate'));
          const idx = siblings.indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, idx * 100);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
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

          const duration = 1800;
          const startTime = performance.now();

          function animate(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              el.textContent = target;
            }
          }

          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNums.forEach(el => observer.observe(el));
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
          setTimeout(tick, 2000);
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

    setTimeout(tick, 2500);
  }

  /* ═══════════════════════════════════════════════════
     BENTO GLOW (Mouse-tracking radial glow)
     ═══════════════════════════════════════════════════ */
  function initBentoGlow() {
    // Handled inside initCard3DTilt for unified loop
  }

  /* ═══════════════════════════════════════════════════
     3D CARD HOVER TILT + GLOW (Unified physics loop)
     ═══════════════════════════════════════════════════ */
  function initCard3DTilt() {
    // We use event delegation for better performance with dynamic cards
    const grid = document.getElementById('compGrid');
    const bentoGrid = document.querySelector('.bento-grid-interactive');

    function setupCardTilt(card) {
      let rect, targetMx = 50, targetMy = 50, currentMx = 50, currentMy = 50;
      let isHovered = false;
      let raf;

      card.addEventListener('mouseenter', () => {
        rect = card.getBoundingClientRect();
        isHovered = true;
        if (!raf) tick();
      });

      card.addEventListener('mousemove', e => {
        if (!rect) rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        targetMx = (x / rect.width) * 100;
        targetMy = (y / rect.height) * 100;
      });

      card.addEventListener('mouseleave', () => {
        isHovered = false;
        targetMx = 50; targetMy = 50;
      });

      function tick() {
        currentMx += (targetMx - currentMx) * 0.15;
        currentMy += (targetMy - currentMy) * 0.15;

        card.style.setProperty('--mx', `${currentMx}%`);
        card.style.setProperty('--my', `${currentMy}%`);

        if (isHovered || Math.abs(targetMx - currentMx) > 0.5 || Math.abs(targetMy - currentMy) > 0.5) {
          raf = requestAnimationFrame(tick);
        } else {
          raf = null;
        }
      }
    }

    // Setup for existing bento cards
    if (bentoGrid) {
      bentoGrid.querySelectorAll('.bento-card').forEach(setupCardTilt);
    }

    // Observe comp-grid for dynamically added cards
    if (grid) {
      const mo = new MutationObserver(mutations => {
        mutations.forEach(m => {
          m.addedNodes.forEach(node => {
            if (node.nodeType === 1 && node.classList.contains('comp-card')) {
              setupCardTilt(node);
            }
          });
        });
      });
      mo.observe(grid, { childList: true });
      grid.querySelectorAll('.comp-card').forEach(setupCardTilt);
    }
  }

  /* ═══════════════════════════════════════════════════
     3D SHOWCASE PARALLAX (Hero gallery)
     ═══════════════════════════════════════════════════ */
  function initShowcase3DTilt() {
    const showcase = document.getElementById('interactiveGallery');
    if (!showcase || isMobile()) return;
    const container = showcase.querySelector('.gallery-container');
    if (!container) return;

    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

    showcase.addEventListener('mousemove', e => {
      const rect = showcase.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      targetX = ((centerY - y) / centerY) * 8;
      targetY = ((x - centerX) / centerX) * 8;
    });

    showcase.addEventListener('mouseleave', () => { targetX = 0; targetY = 0; });

    function tick() {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      container.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
      requestAnimationFrame(tick);
    }
    tick();
  }

  /* ═══════════════════════════════════════════════════
     MAGNETIC BUTTONS (data-magnetic attribute)
     ═══════════════════════════════════════════════════ */
  function initMagneticButtons() {
    if (isMobile()) return;

    const magneticElems = document.querySelectorAll('[data-magnetic]');
    if (!magneticElems.length) return;

    magneticElems.forEach(el => {
      let rect = null;
      let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
      let isHovered = false;

      el.addEventListener('mouseenter', () => {
        rect = el.getBoundingClientRect();
        isHovered = true;
        el.style.transition = 'none';
      });

      el.addEventListener('mousemove', e => {
        if (!rect) return;
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const relX = e.clientX - centerX;
        const relY = e.clientY - centerY;
        const maxD = 12;
        targetX = Math.max(-maxD, Math.min(maxD, relX * 0.35));
        targetY = Math.max(-maxD, Math.min(maxD, relY * 0.35));
      });

      el.addEventListener('mouseleave', () => {
        isHovered = false;
        targetX = 0; targetY = 0;
      });

      function tick() {
        currentX += (targetX - currentX) * 0.2;
        currentY += (targetY - currentY) * 0.2;

        if (Math.abs(currentX) > 0.01 || Math.abs(currentY) > 0.01) {
          el.style.transform = `translate(${currentX}px, ${currentY}px)`;
        } else {
          el.style.transform = 'translate(0px, 0px)';
        }

        if (!isHovered && Math.abs(currentX) < 0.1 && Math.abs(currentY) < 0.1) {
          el.style.transform = '';
          el.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
        }

        requestAnimationFrame(tick);
      }
      tick();
    });
  }

  /* ═══════════════════════════════════════════════════
     PARTICLE CANVAS (ChainGPT-style hero background)
     ═══════════════════════════════════════════════════ */
  function initParticleCanvas() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas || isMobile()) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0, mouseY = 0;
    let animId;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    function createParticles() {
      const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.5 + 0.1,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      const maxDist = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.15;
            ctx.strokeStyle = `rgba(255, 153, 0, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        // Mouse attraction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 0) {
          p.vx += (dx / dist) * 0.01;
          p.vy += (dy / dist) * 0.01;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Damping
        p.vx *= 0.998;
        p.vy *= 0.998;

        // Wrap edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 153, 0, ${p.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    }

    canvas.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }, { passive: true });

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    }, { passive: true });

    // Pause when not visible
    const hero = document.getElementById('hero');
    if (hero) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            cancelAnimationFrame(animId);
          } else {
            draw();
          }
        });
      }, { threshold: 0.1 });
      obs.observe(hero);
    }
  }

  /* ═══════════════════════════════════════════════════
     HORIZONTAL SCROLL (Raven/Bruut style drag scroll)
     ═══════════════════════════════════════════════════ */
  function initHorizontalScroll() {
    const wrap = document.getElementById('hscrollWrap');
    if (!wrap) return;

    let isDown = false;
    let startX, scrollLeft;

    wrap.addEventListener('mousedown', e => {
      isDown = true;
      wrap.style.cursor = 'grabbing';
      startX = e.pageX - wrap.offsetLeft;
      scrollLeft = wrap.scrollLeft;
    });

    wrap.addEventListener('mouseleave', () => {
      isDown = false;
      wrap.style.cursor = 'grab';
    });

    wrap.addEventListener('mouseup', () => {
      isDown = false;
      wrap.style.cursor = 'grab';
    });

    wrap.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - wrap.offsetLeft;
      const walk = (x - startX) * 1.5;
      wrap.scrollLeft = scrollLeft - walk;
    });

    // Touch support
    wrap.addEventListener('touchstart', e => {
      startX = e.touches[0].pageX;
      scrollLeft = wrap.scrollLeft;
    }, { passive: true });

    wrap.addEventListener('touchmove', e => {
      const x = e.touches[0].pageX;
      const walk = (startX - x) * 1.2;
      wrap.scrollLeft = scrollLeft + walk;
    }, { passive: true });
  }

})();
