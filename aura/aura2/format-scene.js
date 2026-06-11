const visual = document.getElementById('formatVisual');
const modeButtons = document.querySelectorAll('[data-format-mode]');

if (visual) {
  initFormatVisual();
}

function initFormatVisual() {
  const shell = visual.closest('.format-scene-shell');
  if (!shell) return;

  modeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const mode = button.dataset.formatMode || 'flow';
      visual.dataset.mode = mode;
      modeButtons.forEach(item => item.classList.toggle('active', item === button));
    });
  });

  shell.addEventListener('pointermove', event => {
    const rect = shell.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    visual.style.setProperty('--tilt-x', `${-y * 7}deg`);
    visual.style.setProperty('--tilt-y', `${x * 10}deg`);
  }, { passive: true });

  shell.addEventListener('pointerleave', () => {
    visual.style.setProperty('--tilt-x', '0deg');
    visual.style.setProperty('--tilt-y', '0deg');
  }, { passive: true });
}
