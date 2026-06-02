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
    const container = showcase ? showcase.querySelector('.gallery-container') : null;
    if (!showcase || !container) return;

    let requestRef;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    showcase.addEventListener('mousemove', e => {
      const rect = showcase.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation angles (max 15 deg)
      targetX = ((centerY - y) / centerY) * 15;
      targetY = ((x - centerX) / centerX) * 15;
      
      if (!requestRef) {
        requestRef = requestAnimationFrame(updateTransform);
      }
    });

    showcase.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
      if (!requestRef) {
        requestRef = requestAnimationFrame(updateTransform);
      }
    });

    function updateTransform() {
      // Lerp for smooth easing
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      
      container.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
      
      if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
        requestRef = requestAnimationFrame(updateTransform);
      } else {
        requestRef = null;
      }
    }
  }

  /* ═══════════════════════════════════════════════════
     3D CARD HOVER TILT (Event Delegation)
     ═══════════════════════════════════════════════════ */
  function initCard3DTilt() {
    const grid = document.getElementById('compGrid');
    if (!grid) return;

    grid.addEventListener('mousemove', e => {
      const card = e.target.closest('.comp-card');
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Subtle tilt of max 8 degrees
      const rotateX = ((centerY - y) / centerY) * 8;
      const rotateY = ((x - centerX) / centerX) * -8;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
      card.style.boxShadow = `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(255, 153, 0, 0.05)`;
    });

    grid.addEventListener('mouseout', e => {
      const card = e.target.closest('.comp-card');
      if (!card) return;
      const related = e.relatedTarget;
      if (!related || !card.contains(related)) {
        resetCard(card);
      }
    });

    function resetCard(card) {
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
      card.style.boxShadow = '';
      setTimeout(() => {
        card.style.transition = '';
      }, 550);
    }
  }

})();
