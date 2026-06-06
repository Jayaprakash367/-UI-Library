/**
 * AURA UI — Clean Animations & Simulation Driver
 * animations.js · Console Logs · Typewriter · Scroll Reveal · Counters
 * Fully optimized for zero GPU rendering load.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initCompilerTerminalLogs();
    initTypewriter();
    initScrollReveal();
    initCountUp();
    initBentoGlow();
    initShowcase3DTilt();
    initCard3DTilt();
    initScrollProgressBar();
    initMagneticButtons();
  });

  /* ═══════════════════════════════════════════════════
     AWS-STYLE MONOSPACE COMPILER LOGGER SIMULATOR
     ═══════════════════════════════════════════════════ */
  function initCompilerTerminalLogs() {
    const container = document.getElementById('compilerLogs');
    if (!container) return;

    const logs = [
      '[info] Awaiting Figma webhook triggers...',
      '[info] Sync token manifest version v4.0.2',
      '[info] Figma tokens webhook trigger detected...',
      '[info] Fetching tokens from source API...',
      '[info] Successfully pulled 34 theme tokens.',
      '[info] Compilation engine parsing token nodes...',
      '[info] Generating layout templates: navigation, buttons, charts...',
      '[success] Output compiled size: 2.14KB (gzipped).',
      '[success] Synchronization complete. Live console active.',
      '[info] Entering cooling stage (idle mode)...'
    ];

    let currentLogIndex = 0;
    container.innerHTML = '';

    function printNextLog() {
      if (currentLogIndex >= logs.length) {
        // Pause at completion, then loop back
        setTimeout(() => {
          container.innerHTML = '';
          currentLogIndex = 0;
          printNextLog();
        }, 5000);
        return;
      }

      const logText = logs[currentLogIndex];
      const div = document.createElement('div');
      div.className = 'log-line';

      if (logText.includes('[success]')) {
        div.className = 'log-line success';
      } else if (logText.includes('[warn]')) {
        div.className = 'log-line warn';
      }

      div.textContent = logText;
      container.appendChild(div);

      // Auto scroll terminal to bottom
      container.scrollTop = container.scrollHeight;

      currentLogIndex++;

      // Variable print speed for realism
      let nextDelay = 800;
      if (logText.includes('Fetching') || logText.includes('Compilation')) {
        nextDelay = 1800;
      } else if (logText.includes('success')) {
        nextDelay = 1200;
      }

      setTimeout(printNextLog, nextDelay);
    }

    // Start printing
    printNextLog();
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
     3D MOUSE PARALLAX FOR INTERACTIVE GALLERY
     ═══════════════════════════════════════════════════ */
  function initShowcase3DTilt() {
    const showcase = document.getElementById('interactiveGallery');
    const container = showcase ? showcase.querySelector('.iso-scene') : null;
    if (!showcase || !container) return;

    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
    
    showcase.addEventListener('mousemove', e => {
      const rect = showcase.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Cinematic floating (max 10 deg)
      targetX = ((centerY - y) / centerY) * 10;
      targetY = ((x - centerX) / centerX) * 10;
    });

    showcase.addEventListener('mouseleave', () => { targetX = 0; targetY = 0; });

    function tick() {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      container.style.transform = `rotateX(${55 + currentX}deg) rotateZ(${-35 + currentY}deg)`;
      requestAnimationFrame(tick);
    }
    tick();
  }

  /* ═══════════════════════════════════════════════════
     3D CARD HOVER TILT (Event Delegation)
     ═══════════════════════════════════════════════════ */
  function initCard3DTilt() {
    // We combine Bento and Comp Card tracking into one high-def loop
    const trackables = document.querySelectorAll('.comp-card, .bento-card');
    
    trackables.forEach(card => {
      let rect, targetX = 0, targetY = 0, currentX = 0, currentY = 0;
      let targetMx = 50, targetMy = 50, currentMx = 50, currentMy = 50;
      let isHovered = false;

      card.addEventListener('mouseenter', () => {
        rect = card.getBoundingClientRect();
        isHovered = true;
      });

      card.addEventListener('mousemove', e => {
        if (!rect) rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        targetX = ((centerY - y) / centerY) * 6; // Max 6 deg tilt
        targetY = ((x - centerX) / centerX) * -6;
        
        targetMx = (x / rect.width) * 100;
        targetMy = (y / rect.height) * 100;
      });

      card.addEventListener('mouseleave', () => {
        isHovered = false;
        targetX = 0; targetY = 0;
        targetMx = 50; targetMy = 50;
      });

      function tick() {
        currentX += (targetX - currentX) * 0.15;
        currentY += (targetY - currentY) * 0.15;
        currentMx += (targetMx - currentMx) * 0.15;
        currentMy += (targetMy - currentMy) * 0.15;

        // Apply properties to be used by CSS
        card.style.setProperty('--rx', `${currentX}deg`);
        card.style.setProperty('--ry', `${currentY}deg`);
        card.style.setProperty('--mx', `${currentMx}%`);
        card.style.setProperty('--my', `${currentMy}%`);

        requestAnimationFrame(tick);
      }
      tick();
    });
  }

  function initBentoGlow() {
    // Merged into initCard3DTilt for unified physics loop
  }

  /* ═══════════════════════════════════════════════════
     SCROLL PROGRESS BAR
     ═══════════════════════════════════════════════════ */
  function initScrollProgressBar() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    }, { passive: true });
  }

  /* ═══════════════════════════════════════════════════
     MAGNETIC SNAPPING BUTTONS
     ═══════════════════════════════════════════════════ */
  function initMagneticButtons() {
    const magneticElems = document.querySelectorAll('.magnetic');
    if (!magneticElems.length) return;

    magneticElems.forEach(el => {
      let rect = null;
      let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
      let isHovered = false;

      el.addEventListener('mouseenter', () => {
        rect = el.getBoundingClientRect();
        isHovered = true;
        el.style.transition = 'none'; // Disable CSS transition for JS physics
      });

      el.addEventListener('mousemove', e => {
        if (!rect) return;
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const relX = e.clientX - centerX;
        const relY = e.clientY - centerY;

        const maxDisplacement = 20;
        targetX = Math.max(-maxDisplacement, Math.min(maxDisplacement, relX * 0.4));
        targetY = Math.max(-maxDisplacement, Math.min(maxDisplacement, relY * 0.4));
      });

      el.addEventListener('mouseleave', () => {
        isHovered = false;
        targetX = 0; targetY = 0;
      });

      function tick() {
        // High tension spring lerp
        currentX += (targetX - currentX) * 0.25;
        currentY += (targetY - currentY) * 0.25;
        
        if (Math.abs(currentX) > 0.01 || Math.abs(currentY) > 0.01) {
          el.style.transform = `translate(${currentX}px, ${currentY}px)`;
        } else {
          el.style.transform = 'translate(0px, 0px)';
        }
        
        if (!isHovered && Math.abs(currentX) < 0.1 && Math.abs(currentY) < 0.1) {
          el.style.transform = '';
          el.style.transition = 'transform var(--transition-spring)'; // Restore CSS
        }
        
        requestAnimationFrame(tick);
      }
      tick();
    });
  }

})();
