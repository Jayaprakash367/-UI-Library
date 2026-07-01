/**
 * AURA UI — Component Library Data
 * Each entry drives one card in the component grid.
 * Fields:
 *   id        — unique slug
 *   title     — display name
 *   category  — button | card | animation | background | input | badge
 *   tags      — string[]
 *   desc      — short description
 *   featured  — boolean (shows in featured strip)
 *   isNew     — boolean (shows "New" badge)
 *   preview   — complete HTML string rendered live inside an iframe
 *   code      — the snippet copied to clipboard
 */
const COMPONENTS = [
  /* ───────────────────────── BUTTONS ───────────────────────── */
  {
    id: 'shimmer-button',
    title: 'Shimmer Button',
    category: 'button',
    tags: ['hover', 'animation', 'gradient'],
    desc: 'Sweeping shimmer light effect on hover.',
    featured: true,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .shimmer-btn{position:relative;padding:14px 36px;font-size:15px;font-weight:700;
          color:#fff;background:linear-gradient(135deg,#7c3aed,#2563eb);
          border:none;border-radius:10px;cursor:pointer;overflow:hidden;
          letter-spacing:.3px;transition:transform .3s cubic-bezier(.34,1.56,.64,1),
          box-shadow .3s ease;}
        .shimmer-btn::before{content:'';position:absolute;top:0;left:-100%;
          width:60%;height:100%;
          background:linear-gradient(120deg,transparent,rgba(255,255,255,.35),transparent);
          transform:skewX(-20deg);transition:left .6s ease;}
        .shimmer-btn:hover{transform:translateY(-3px);
          box-shadow:0 12px 40px rgba(124,58,237,.55);}
        .shimmer-btn:hover::before{left:150%;}
      </style>
      <button class="shimmer-btn">Get Started</button>`,
    code: `<button class="shimmer-btn">Get Started</button>

<style>
.shimmer-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #7c3aed, #2563eb);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s ease;
}
.shimmer-btn::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 60%; height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,.35), transparent);
  transform: skewX(-20deg);
  transition: left .6s ease;
}
.shimmer-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(124,58,237,.55); }
.shimmer-btn:hover::before { left: 150%; }
</style>`
  },

  {
    id: 'neon-outline-button',
    title: 'Neon Outline',
    category: 'button',
    tags: ['neon', 'glow', 'outline'],
    desc: 'Cyberpunk-style neon glow border button.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .neon-btn{padding:13px 34px;font-size:14px;font-weight:700;
          color:#a78bfa;background:transparent;
          border:2px solid #7c3aed;border-radius:8px;cursor:pointer;
          letter-spacing:.5px;text-transform:uppercase;
          box-shadow:0 0 10px rgba(124,58,237,.3), inset 0 0 10px rgba(124,58,237,.05);
          transition:all .35s ease;}
        .neon-btn:hover{color:#fff;background:rgba(124,58,237,.15);
          box-shadow:0 0 25px rgba(124,58,237,.7), 0 0 50px rgba(124,58,237,.3),
          inset 0 0 20px rgba(124,58,237,.1);
          border-color:#a78bfa;transform:translateY(-2px);}
      </style>
      <button class="neon-btn">Launch App</button>`,
    code: `<button class="neon-btn">Launch App</button>

<style>
.neon-btn {
  padding: 13px 34px;
  font-size: 14px;
  font-weight: 700;
  color: #a78bfa;
  background: transparent;
  border: 2px solid #7c3aed;
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: .5px;
  text-transform: uppercase;
  box-shadow: 0 0 10px rgba(124,58,237,.3), inset 0 0 10px rgba(124,58,237,.05);
  transition: all .35s ease;
}
.neon-btn:hover {
  color: #fff;
  background: rgba(124,58,237,.15);
  box-shadow: 0 0 25px rgba(124,58,237,.7), 0 0 50px rgba(124,58,237,.3);
  border-color: #a78bfa;
  transform: translateY(-2px);
}
</style>`
  },

  {
    id: 'pulse-cta-button',
    title: 'Pulse CTA',
    category: 'button',
    tags: ['pulse', 'animation', 'cta'],
    desc: 'Button with expanding ring pulse for CTAs.',
    featured: true,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .pulse-wrap{position:relative;display:inline-flex;}
        .pulse-ring{position:absolute;inset:-6px;border-radius:14px;
          border:2px solid rgba(139,92,246,.6);
          animation:pulseRing 2s ease-out infinite;}
        .pulse-ring:nth-child(2){animation-delay:.6s;
          border-color:rgba(59,130,246,.4);}
        @keyframes pulseRing{0%{opacity:1;transform:scale(1);}
          100%{opacity:0;transform:scale(1.5);}}
        .pulse-btn{position:relative;z-index:1;padding:14px 38px;
          font-size:15px;font-weight:700;color:#fff;
          background:linear-gradient(135deg,#8b5cf6,#3b82f6);
          border:none;border-radius:10px;cursor:pointer;
          transition:transform .3s ease;}
        .pulse-btn:hover{transform:scale(1.04);}
      </style>
      <div class="pulse-wrap">
        <div class="pulse-ring"></div>
        <div class="pulse-ring"></div>
        <button class="pulse-btn">Start Free Trial</button>
      </div>`,
    code: `<div class="pulse-wrap">
  <div class="pulse-ring"></div>
  <div class="pulse-ring"></div>
  <button class="pulse-btn">Start Free Trial</button>
</div>

<style>
.pulse-wrap { position: relative; display: inline-flex; }
.pulse-ring {
  position: absolute; inset: -6px;
  border-radius: 14px;
  border: 2px solid rgba(139,92,246,.6);
  animation: pulseRing 2s ease-out infinite;
}
.pulse-ring:nth-child(2) { animation-delay: .6s; border-color: rgba(59,130,246,.4); }
@keyframes pulseRing {
  0%   { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.5); }
}
.pulse-btn {
  position: relative; z-index: 1;
  padding: 14px 38px; font-size: 15px; font-weight: 700; color: #fff;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  border: none; border-radius: 10px; cursor: pointer;
  transition: transform .3s ease;
}
.pulse-btn:hover { transform: scale(1.04); }
</style>`
  },

  {
    id: 'gradient-border-button',
    title: 'Gradient Border',
    category: 'button',
    tags: ['gradient', 'border', 'hover'],
    desc: 'Animated rotating gradient border.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .gb-wrap{position:relative;display:inline-block;
          border-radius:12px;padding:2px;
          background:linear-gradient(90deg,#7c3aed,#2563eb,#06b6d4,#7c3aed);
          background-size:300% 100%;
          animation:gradBorder 3s linear infinite;}
        @keyframes gradBorder{0%{background-position:0% 50%;}
          100%{background-position:300% 50%;}}
        .gb-inner{display:block;padding:13px 34px;font-size:14px;font-weight:700;
          color:#fff;background:#0b0f1a;border-radius:10px;
          cursor:pointer;border:none;letter-spacing:.3px;
          transition:background .3s;}
        .gb-wrap:hover .gb-inner{background:#13182a;}
      </style>
      <div class="gb-wrap"><button class="gb-inner">Explore Docs</button></div>`,
    code: `<div class="gb-wrap"><button class="gb-inner">Explore Docs</button></div>

<style>
.gb-wrap {
  position: relative; display: inline-block;
  border-radius: 12px; padding: 2px;
  background: linear-gradient(90deg, #7c3aed, #2563eb, #06b6d4, #7c3aed);
  background-size: 300% 100%;
  animation: gradBorder 3s linear infinite;
}
@keyframes gradBorder {
  0%   { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}
.gb-inner {
  display: block; padding: 13px 34px; font-size: 14px;
  font-weight: 700; color: #fff; background: #0b0f1a;
  border-radius: 10px; cursor: pointer; border: none;
  transition: background .3s;
}
.gb-wrap:hover .gb-inner { background: #13182a; }
</style>`
  },

  {
    id: 'icon-button',
    title: 'Icon Button',
    category: 'button',
    tags: ['icon', 'minimal', 'hover'],
    desc: 'Clean icon button with sliding reveal label.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .icon-btn{display:inline-flex;align-items:center;gap:0;
          overflow:hidden;padding:12px 16px;
          background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);
          border-radius:50px;cursor:pointer;color:#c4b5fd;font-size:14px;
          font-weight:600;transition:all .4s cubic-bezier(.25,.8,.25,1);}
        .icon-btn .lbl{max-width:0;overflow:hidden;white-space:nowrap;
          opacity:0;transition:max-width .4s ease, opacity .3s ease, margin .4s ease;}
        .icon-btn:hover{background:rgba(124,58,237,.2);border-color:#7c3aed;
          color:#fff;padding:12px 22px;}
        .icon-btn:hover .lbl{max-width:120px;opacity:1;margin-left:8px;}
        .icon-btn svg{width:18px;height:18px;flex-shrink:0;fill:currentColor;}
      </style>
      <button class="icon-btn">
        <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm1-9v-3l5 4-5 4v-3H6v-2h7z"/></svg>
        <span class="lbl">Launch</span>
      </button>`,
    code: `<button class="icon-btn">
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 9H6v2h7v3l5-4-5-4v3z"/>
  </svg>
  <span class="lbl">Launch</span>
</button>

<style>
.icon-btn {
  display: inline-flex; align-items: center;
  overflow: hidden; padding: 12px 16px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 50px; cursor: pointer; color: #c4b5fd;
  font-size: 14px; font-weight: 600;
  transition: all .4s cubic-bezier(.25,.8,.25,1);
}
.icon-btn .lbl {
  max-width: 0; overflow: hidden; white-space: nowrap; opacity: 0;
  transition: max-width .4s ease, opacity .3s ease, margin .4s ease;
}
.icon-btn:hover { background: rgba(124,58,237,.2); border-color: #7c3aed; color: #fff; padding: 12px 22px; }
.icon-btn:hover .lbl { max-width: 120px; opacity: 1; margin-left: 8px; }
</style>`
  },

  /* ───────────────────────── CARDS ───────────────────────── */
  {
    id: 'glass-card',
    title: 'Glass Card',
    category: 'card',
    tags: ['glassmorphism', 'blur', 'backdrop'],
    desc: 'Frosted glass card with blur and border glow.',
    featured: true,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;
          background:linear-gradient(135deg,#0b0f1a 0%,#1a0b3b 50%,#0b1f3a 100%);
          font-family:Inter,sans-serif;}
        .glass{width:240px;padding:28px 24px;
          background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.12);
          border-radius:20px;
          backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);
          box-shadow:0 8px 40px rgba(124,58,237,.2);}
        .glass-icon{width:48px;height:48px;border-radius:12px;margin-bottom:16px;
          background:linear-gradient(135deg,#7c3aed,#2563eb);
          display:flex;align-items:center;justify-content:center;
          font-size:22px;}
        .glass h3{margin:0 0 8px;font-size:17px;font-weight:700;color:#fff;}
        .glass p{margin:0;font-size:13px;color:rgba(255,255,255,.55);line-height:1.6;}
      </style>
      <div class="glass">
        <div class="glass-icon">✦</div>
        <h3>Glass Card</h3>
        <p>Frosted glass effect with subtle border and deep shadow.</p>
      </div>`,
    code: `<div class="glass-card">
  <div class="glass-icon">✦</div>
  <h3>Card Title</h3>
  <p>Description text goes here with subtle contrast.</p>
</div>

<style>
.glass-card {
  width: 280px; padding: 28px 24px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 20px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 8px 40px rgba(124,58,237,.2);
}
.glass-icon {
  width: 48px; height: 48px; border-radius: 12px; margin-bottom: 16px;
  background: linear-gradient(135deg, #7c3aed, #2563eb);
  display: flex; align-items: center; justify-content: center; font-size: 22px;
}
.glass-card h3 { margin: 0 0 8px; font-size: 17px; font-weight: 700; color: #fff; }
.glass-card p  { margin: 0; font-size: 13px; color: rgba(255,255,255,.55); line-height: 1.6; }
</style>`
  },

  {
    id: 'spotlight-card',
    title: 'Spotlight Card',
    category: 'card',
    tags: ['spotlight', 'mouse-track', 'hover'],
    desc: 'Radial spotlight follows your cursor.',
    featured: true,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .sp-card{position:relative;width:240px;padding:28px 24px;
          background:#0f1629;border:1px solid rgba(255,255,255,.07);
          border-radius:16px;overflow:hidden;cursor:default;
          transition:border-color .3s;}
        .sp-card::before{content:'';position:absolute;inset:0;
          background:radial-gradient(600px circle at var(--mx,50%) var(--my,50%),
            rgba(124,58,237,.12),transparent 50%);
          transition:opacity .3s;opacity:0;}
        .sp-card:hover::before{opacity:1;}
        .sp-card:hover{border-color:rgba(124,58,237,.4);}
        .sp-card h3{margin:0 0 8px;font-size:17px;font-weight:700;color:#fff;position:relative;}
        .sp-card p{margin:0;font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;position:relative;}
        .sp-card .sp-badge{display:inline-block;padding:4px 10px;margin-bottom:14px;
          font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;
          background:rgba(124,58,237,.15);border:1px solid rgba(124,58,237,.3);
          border-radius:50px;color:#a78bfa;position:relative;}
      </style>
      <script>
        document.addEventListener('DOMContentLoaded',()=>{
          document.querySelectorAll('.sp-card').forEach(card=>{
            card.addEventListener('mousemove',e=>{
              const r=card.getBoundingClientRect();
              card.style.setProperty('--mx',e.clientX-r.left+'px');
              card.style.setProperty('--my',e.clientY-r.top+'px');
            });
          });
        });
      </script>
      <div class="sp-card">
        <span class="sp-badge">Featured</span>
        <h3>Spotlight Card</h3>
        <p>Move your cursor over the card to see the spotlight effect.</p>
      </div>`,
    code: `<div class="sp-card">
  <span class="sp-badge">Featured</span>
  <h3>Spotlight Card</h3>
  <p>Hover to see the spotlight follow your cursor.</p>
</div>

<style>
.sp-card {
  position: relative; width: 280px; padding: 28px 24px;
  background: #0f1629; border: 1px solid rgba(255,255,255,.07);
  border-radius: 16px; overflow: hidden; cursor: default;
  transition: border-color .3s;
}
.sp-card::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(600px circle at var(--mx,50%) var(--my,50%),
    rgba(124,58,237,.12), transparent 50%);
  opacity: 0; transition: opacity .3s;
}
.sp-card:hover::before { opacity: 1; }
.sp-card:hover { border-color: rgba(124,58,237,.4); }
</style>

<script>
document.querySelectorAll('.sp-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', e.clientX - r.left + 'px');
    card.style.setProperty('--my', e.clientY - r.top + 'px');
  });
});
</script>`
  },

  {
    id: 'profile-card',
    title: 'Profile Card',
    category: 'card',
    tags: ['profile', 'social', 'hover-reveal'],
    desc: 'Social-style profile card with hover social overlay.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .pcard{width:220px;background:#0f1629;
          border:1px solid rgba(255,255,255,.08);border-radius:20px;
          overflow:hidden;text-align:center;padding-bottom:20px;}
        .pcard-cover{height:80px;background:linear-gradient(135deg,#7c3aed,#2563eb,#06b6d4);}
        .pcard-avatar{width:64px;height:64px;border-radius:50%;margin:-32px auto 0;
          background:linear-gradient(135deg,#8b5cf6,#3b82f6);
          border:3px solid #0f1629;display:flex;align-items:center;
          justify-content:center;font-size:24px;font-weight:800;color:#fff;
          position:relative;z-index:1;}
        .pcard h3{margin:12px 0 4px;font-size:15px;font-weight:700;color:#fff;}
        .pcard .role{font-size:12px;color:rgba(255,255,255,.45);margin:0 0 14px;}
        .pcard-stats{display:flex;justify-content:center;gap:20px;
          padding:12px 0;border-top:1px solid rgba(255,255,255,.06);
          border-bottom:1px solid rgba(255,255,255,.06);}
        .pcard-stats div{text-align:center;}
        .pcard-stats strong{display:block;font-size:16px;font-weight:800;color:#fff;}
        .pcard-stats span{font-size:11px;color:rgba(255,255,255,.4);}
        .pcard-follow{margin-top:14px;padding:9px 24px;
          background:linear-gradient(135deg,#7c3aed,#2563eb);
          border:none;border-radius:50px;color:#fff;
          font-size:13px;font-weight:700;cursor:pointer;
          transition:transform .3s ease;}
        .pcard-follow:hover{transform:scale(1.05);}
      </style>
      <div class="pcard">
        <div class="pcard-cover"></div>
        <div class="pcard-avatar">JP</div>
        <h3>Jay Park</h3>
        <p class="role">UI Designer & Developer</p>
        <div class="pcard-stats">
          <div><strong>248</strong><span>Projects</span></div>
          <div><strong>14k</strong><span>Followers</span></div>
          <div><strong>92</strong><span>Reviews</span></div>
        </div>
        <button class="pcard-follow">Follow</button>
      </div>`,
    code: `<div class="pcard">
  <div class="pcard-cover"></div>
  <div class="pcard-avatar">JP</div>
  <h3>Jay Park</h3>
  <p class="role">UI Designer</p>
  <div class="pcard-stats">
    <div><strong>248</strong><span>Projects</span></div>
    <div><strong>14k</strong><span>Followers</span></div>
  </div>
  <button class="pcard-follow">Follow</button>
</div>

<style>
.pcard { width: 220px; background: #0f1629; border: 1px solid rgba(255,255,255,.08); border-radius: 20px; overflow: hidden; text-align: center; padding-bottom: 20px; }
.pcard-cover { height: 80px; background: linear-gradient(135deg, #7c3aed, #2563eb, #06b6d4); }
.pcard-avatar { width: 64px; height: 64px; border-radius: 50%; margin: -32px auto 0; background: linear-gradient(135deg,#8b5cf6,#3b82f6); border: 3px solid #0f1629; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 800; color: #fff; position: relative; z-index: 1; }
.pcard h3 { margin: 12px 0 4px; font-size: 15px; font-weight: 700; color: #fff; }
.pcard .role { font-size: 12px; color: rgba(255,255,255,.45); margin: 0 0 14px; }
.pcard-stats { display: flex; justify-content: center; gap: 20px; padding: 12px 0; border-top: 1px solid rgba(255,255,255,.06); border-bottom: 1px solid rgba(255,255,255,.06); }
.pcard-stats strong { display: block; font-size: 16px; font-weight: 800; color: #fff; }
.pcard-stats span { font-size: 11px; color: rgba(255,255,255,.4); }
.pcard-follow { margin-top: 14px; padding: 9px 24px; background: linear-gradient(135deg, #7c3aed, #2563eb); border: none; border-radius: 50px; color: #fff; font-size: 13px; font-weight: 700; cursor: pointer; transition: transform .3s; }
.pcard-follow:hover { transform: scale(1.05); }
</style>`
  },

  {
    id: 'stats-card',
    title: 'Stats Card',
    category: 'card',
    tags: ['stats', 'analytics', 'data'],
    desc: 'Metric card with animated count-up and trend badge.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .scard{width:220px;padding:24px;background:#0f1629;
          border:1px solid rgba(255,255,255,.08);border-radius:16px;}
        .scard-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;}
        .scard-title{font-size:12px;font-weight:600;
          color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.07em;}
        .scard-badge{padding:3px 8px;font-size:11px;font-weight:700;
          border-radius:50px;background:rgba(16,185,129,.15);
          color:#34d399;border:1px solid rgba(16,185,129,.25);}
        .scard-value{font-size:32px;font-weight:900;color:#fff;
          letter-spacing:-.02em;line-height:1;}
        .scard-sub{font-size:12px;color:rgba(255,255,255,.35);margin-top:6px;}
        .scard-bar{height:4px;border-radius:4px;margin-top:16px;
          background:rgba(255,255,255,.06);}
        .scard-prog{height:100%;border-radius:4px;
          background:linear-gradient(90deg,#7c3aed,#2563eb);width:72%;}
      </style>
      <div class="scard">
        <div class="scard-header">
          <span class="scard-title">Total Revenue</span>
          <span class="scard-badge">+18%</span>
        </div>
        <div class="scard-value">$48,234</div>
        <div class="scard-sub">↑ $6,800 from last month</div>
        <div class="scard-bar"><div class="scard-prog"></div></div>
      </div>`,
    code: `<div class="scard">
  <div class="scard-header">
    <span class="scard-title">Total Revenue</span>
    <span class="scard-badge">+18%</span>
  </div>
  <div class="scard-value">$48,234</div>
  <div class="scard-sub">↑ $6,800 from last month</div>
  <div class="scard-bar"><div class="scard-prog"></div></div>
</div>

<style>
.scard { width: 240px; padding: 24px; background: #0f1629; border: 1px solid rgba(255,255,255,.08); border-radius: 16px; }
.scard-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
.scard-title { font-size: 12px; font-weight: 600; color: rgba(255,255,255,.5); text-transform: uppercase; letter-spacing: .07em; }
.scard-badge { padding: 3px 8px; font-size: 11px; font-weight: 700; border-radius: 50px; background: rgba(16,185,129,.15); color: #34d399; border: 1px solid rgba(16,185,129,.25); }
.scard-value { font-size: 32px; font-weight: 900; color: #fff; letter-spacing: -.02em; }
.scard-sub { font-size: 12px; color: rgba(255,255,255,.35); margin-top: 6px; }
.scard-bar { height: 4px; border-radius: 4px; margin-top: 16px; background: rgba(255,255,255,.06); }
.scard-prog { height: 100%; border-radius: 4px; background: linear-gradient(90deg,#7c3aed,#2563eb); width: 72%; }
</style>`
  },

  {
    id: 'pricing-card',
    title: 'Pricing Card',
    category: 'card',
    tags: ['pricing', 'popular', 'featured'],
    desc: 'Popular-tier pricing card with glowing accent.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .prc{width:210px;padding:28px 22px;background:#0f1629;
          border:1px solid #7c3aed;border-radius:20px;text-align:center;
          box-shadow:0 0 40px rgba(124,58,237,.25);position:relative;}
        .prc-pill{position:absolute;top:-12px;left:50%;transform:translateX(-50%);
          padding:4px 14px;font-size:11px;font-weight:700;
          background:linear-gradient(135deg,#7c3aed,#2563eb);
          border-radius:50px;color:#fff;white-space:nowrap;}
        .prc h3{margin:12px 0 0;font-size:17px;font-weight:700;color:#fff;}
        .prc .amt{font-size:38px;font-weight:900;color:#fff;
          letter-spacing:-.03em;margin:10px 0 2px;}
        .prc .amt span{font-size:15px;font-weight:500;color:rgba(255,255,255,.4);}
        .prc ul{list-style:none;margin:16px 0;padding:0;text-align:left;}
        .prc li{padding:6px 0;font-size:13px;color:rgba(255,255,255,.6);
          display:flex;gap:8px;align-items:center;}
        .prc li::before{content:'✓';color:#7c3aed;font-weight:700;}
        .prc-btn{width:100%;padding:11px;background:linear-gradient(135deg,#7c3aed,#2563eb);
          border:none;border-radius:10px;color:#fff;font-size:14px;
          font-weight:700;cursor:pointer;margin-top:4px;transition:opacity .2s;}
        .prc-btn:hover{opacity:.85;}
      </style>
      <div class="prc">
        <span class="prc-pill">⭐ Most Popular</span>
        <h3>Pro Plan</h3>
        <div class="amt">$29<span>/mo</span></div>
        <ul>
          <li>All components</li>
          <li>Figma kit included</li>
          <li>Priority support</li>
        </ul>
        <button class="prc-btn">Upgrade Now</button>
      </div>`,
    code: `<div class="price-card">
  <span class="prc-pill">⭐ Most Popular</span>
  <h3>Pro Plan</h3>
  <div class="amt">$29<span>/mo</span></div>
  <ul>
    <li>All components</li>
    <li>Figma kit included</li>
    <li>Priority support</li>
  </ul>
  <button class="prc-btn">Upgrade Now</button>
</div>

<style>
.price-card { width: 240px; padding: 28px 22px; background: #0f1629; border: 1px solid #7c3aed; border-radius: 20px; text-align: center; box-shadow: 0 0 40px rgba(124,58,237,.25); position: relative; }
.prc-pill { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); padding: 4px 14px; font-size: 11px; font-weight: 700; background: linear-gradient(135deg,#7c3aed,#2563eb); border-radius: 50px; color: #fff; }
.price-card h3 { margin: 12px 0 0; font-size: 17px; font-weight: 700; color: #fff; }
.amt { font-size: 38px; font-weight: 900; color: #fff; letter-spacing: -.03em; margin: 10px 0 2px; }
.price-card ul { list-style: none; margin: 14px 0; padding: 0; text-align: left; }
.price-card li { padding: 6px 0; font-size: 13px; color: rgba(255,255,255,.6); display: flex; gap: 8px; }
.price-card li::before { content: '✓'; color: #7c3aed; font-weight: 700; }
.prc-btn { width: 100%; padding: 11px; background: linear-gradient(135deg,#7c3aed,#2563eb); border: none; border-radius: 10px; color: #fff; font-size: 14px; font-weight: 700; cursor: pointer; }
</style>`
  },

  /* ──────────────────────── ANIMATIONS ──────────────────────── */
  {
    id: 'typewriter',
    title: 'Typewriter',
    category: 'animation',
    tags: ['text', 'typing', 'loop'],
    desc: 'Looping typewriter with blinking cursor.',
    featured: true,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;flex-direction:column;align-items:center;
          justify-content:center;height:100vh;background:#0b0f1a;
          font-family:Inter,sans-serif;gap:8px;}
        .tw-label{font-size:12px;font-weight:600;text-transform:uppercase;
          letter-spacing:.1em;color:rgba(255,255,255,.3);}
        .tw{font-size:28px;font-weight:800;color:#fff;display:inline-flex;
          align-items:center;gap:2px;}
        .tw-word{background:linear-gradient(135deg,#a78bfa,#60a5fa);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
          background-clip:text;}
        .tw-cursor{display:inline-block;width:3px;height:1.1em;
          background:#a78bfa;border-radius:2px;
          animation:cursorBlink 1s step-end infinite;}
        @keyframes cursorBlink{0%,100%{opacity:1}50%{opacity:0}}
      </style>
      <script>
        const words=['Components','Interfaces','Experiences','Designs','Animations'];
        let wi=0,ci=0,del=false;
        function type(){
          const el=document.getElementById('tw-word');
          if(!el)return;
          const w=words[wi];
          if(!del){el.textContent=w.slice(0,++ci);
            if(ci===w.length){del=true;setTimeout(type,1400);return;}}
          else{el.textContent=w.slice(0,--ci);
            if(ci===0){del=false;wi=(wi+1)%words.length;}}
          setTimeout(type,del?55:90);
        }
        document.addEventListener('DOMContentLoaded',type);
      </script>
      <span class="tw-label">Build Stunning</span>
      <div class="tw"><span class="tw-word" id="tw-word">Components</span><span class="tw-cursor"></span></div>`,
    code: `<div class="tw">
  <span class="tw-word" id="tw-word">Components</span>
  <span class="tw-cursor"></span>
</div>

<style>
.tw { font-size: 36px; font-weight: 800; color: #fff; display: inline-flex; align-items: center; }
.tw-word { background: linear-gradient(135deg, #a78bfa, #60a5fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.tw-cursor { display: inline-block; width: 3px; height: 1.1em; background: #a78bfa; border-radius: 2px; margin-left: 2px; animation: cursorBlink 1s step-end infinite; }
@keyframes cursorBlink { 0%,100% { opacity:1 } 50% { opacity:0 } }
</style>

<script>
const words = ['Components','Interfaces','Experiences','Designs'];
let wi = 0, ci = 0, del = false;
function type() {
  const el = document.getElementById('tw-word');
  const w = words[wi];
  if (!del) { el.textContent = w.slice(0, ++ci); if (ci === w.length) { del = true; setTimeout(type, 1400); return; } }
  else { el.textContent = w.slice(0, --ci); if (ci === 0) { del = false; wi = (wi + 1) % words.length; } }
  setTimeout(type, del ? 55 : 90);
}
type();
</script>`
  },

  {
    id: 'glitch-text',
    title: 'Glitch Text',
    category: 'animation',
    tags: ['glitch', 'cyberpunk', 'hover'],
    desc: 'Cyberpunk RGB glitch effect on hover.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:'Inter',monospace;}
        .glitch{position:relative;font-size:38px;font-weight:900;
          color:#fff;cursor:default;letter-spacing:-.02em;
          text-transform:uppercase;}
        .glitch::before,.glitch::after{content:attr(data-text);position:absolute;
          top:0;left:0;width:100%;height:100%;}
        .glitch::before{color:#f43f5e;animation:glitchTop 2.5s infinite;
          clip-path:polygon(0 0,100% 0,100% 40%,0 40%);}
        .glitch::after{color:#06b6d4;animation:glitchBot 2.5s infinite;
          clip-path:polygon(0 60%,100% 60%,100% 100%,0 100%);}
        @keyframes glitchTop{
          0%,90%,100%{transform:translateX(0);}
          91%{transform:translateX(-3px);}93%{transform:translateX(3px);}
          95%{transform:translateX(-2px);}97%{transform:translateX(2px);}
          99%{transform:translateX(-1px);}
        }
        @keyframes glitchBot{
          0%,88%,100%{transform:translateX(0);}
          89%{transform:translateX(3px);}91%{transform:translateX(-3px);}
          93%{transform:translateX(2px);}95%{transform:translateX(-1px);}
        }
      </style>
      <span class="glitch" data-text="GLITCH">GLITCH</span>`,
    code: `<span class="glitch" data-text="GLITCH">GLITCH</span>

<style>
.glitch {
  position: relative; font-size: 48px; font-weight: 900;
  color: #fff; letter-spacing: -.02em; text-transform: uppercase;
}
.glitch::before, .glitch::after {
  content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%;
}
.glitch::before { color: #f43f5e; animation: glitchTop 2.5s infinite; clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%); }
.glitch::after  { color: #06b6d4; animation: glitchBot 2.5s infinite; clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%); }
@keyframes glitchTop {
  0%,90%,100% { transform: translateX(0); }
  91% { transform: translateX(-3px); } 93% { transform: translateX(3px); }
}
@keyframes glitchBot {
  0%,88%,100% { transform: translateX(0); }
  89% { transform: translateX(3px); } 91% { transform: translateX(-3px); }
}
</style>`
  },

  {
    id: 'gradient-text',
    title: 'Gradient Text',
    category: 'animation',
    tags: ['gradient', 'text', 'animated'],
    desc: 'Flowing animated gradient across text.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;
          flex-direction:column;gap:10px;text-align:center;}
        .grad-h{font-size:36px;font-weight:900;letter-spacing:-.03em;
          background:linear-gradient(90deg,#7c3aed,#2563eb,#06b6d4,#7c3aed);
          background-size:300% 100%;
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
          background-clip:text;
          animation:flowGrad 4s linear infinite;}
        .grad-sub{font-size:14px;color:rgba(255,255,255,.4);}
        @keyframes flowGrad{0%{background-position:0% 50%;}
          100%{background-position:300% 50%;}}
      </style>
      <span class="grad-h">Beautiful</span>
      <span class="grad-sub">Animated gradient text</span>`,
    code: `<h1 class="grad-text">Beautiful</h1>

<style>
.grad-text {
  font-size: 56px; font-weight: 900; letter-spacing: -.03em;
  background: linear-gradient(90deg, #7c3aed, #2563eb, #06b6d4, #7c3aed);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: flowGrad 4s linear infinite;
}
@keyframes flowGrad {
  0%   { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}
</style>`
  },

  {
    id: 'text-reveal',
    title: 'Text Reveal',
    category: 'animation',
    tags: ['reveal', 'scroll', 'mask'],
    desc: 'Words emerge from a sliding mask on scroll.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .reveal-wrap{display:flex;flex-wrap:wrap;gap:8px;max-width:300px;
          justify-content:center;}
        .reveal-word{overflow:hidden;display:inline-block;}
        .reveal-inner{display:inline-block;
          transform:translateY(110%);
          animation:revealUp .7s cubic-bezier(.16,1,.3,1) forwards;}
        .reveal-word:nth-child(1) .reveal-inner{animation-delay:0s;}
        .reveal-word:nth-child(2) .reveal-inner{animation-delay:.1s;}
        .reveal-word:nth-child(3) .reveal-inner{animation-delay:.2s;}
        .reveal-word:nth-child(4) .reveal-inner{animation-delay:.3s;}
        .reveal-word:nth-child(5) .reveal-inner{animation-delay:.4s;}
        @keyframes revealUp{to{transform:translateY(0);}}
        span.rw{font-size:30px;font-weight:800;color:#fff;}
        span.rw.col{background:linear-gradient(135deg,#a78bfa,#60a5fa);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
          background-clip:text;}
      </style>
      <div class="reveal-wrap">
        <div class="reveal-word"><span class="rw reveal-inner">Build</span></div>
        <div class="reveal-word"><span class="rw reveal-inner">Stunning</span></div>
        <div class="reveal-word"><span class="rw col reveal-inner">UI</span></div>
        <div class="reveal-word"><span class="rw col reveal-inner">Components</span></div>
        <div class="reveal-word"><span class="rw reveal-inner">Today</span></div>
      </div>`,
    code: `<div class="reveal-wrap">
  <div class="reveal-word"><span class="rw reveal-inner">Build</span></div>
  <div class="reveal-word"><span class="rw reveal-inner">Stunning</span></div>
  <div class="reveal-word"><span class="rw col reveal-inner">UI</span></div>
</div>

<style>
.reveal-wrap { display: flex; flex-wrap: wrap; gap: 10px; }
.reveal-word { overflow: hidden; display: inline-block; }
.reveal-inner { display: inline-block; transform: translateY(110%); animation: revealUp .7s cubic-bezier(.16,1,.3,1) forwards; }
.reveal-word:nth-child(2) .reveal-inner { animation-delay: .12s; }
.reveal-word:nth-child(3) .reveal-inner { animation-delay: .24s; }
@keyframes revealUp { to { transform: translateY(0); } }
.rw { font-size: 48px; font-weight: 800; color: #fff; }
.rw.col { background: linear-gradient(135deg,#a78bfa,#60a5fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
</style>`
  },

  /* ──────────────────────── BACKGROUNDS ──────────────────────── */
  {
    id: 'aurora-bg',
    title: 'Aurora Background',
    category: 'background',
    tags: ['aurora', 'animated', 'gradient'],
    desc: 'Slow-moving aurora borealis gradient orbs.',
    featured: true,
    isNew: false,
    preview: `
      <style>
        body{margin:0;overflow:hidden;height:100vh;background:#030712;}
        .aurora{position:relative;width:100%;height:100%;overflow:hidden;
          display:flex;align-items:center;justify-content:center;}
        .orb{position:absolute;border-radius:50%;filter:blur(80px);}
        .orb-1{width:350px;height:350px;background:#7c3aed;opacity:.35;
          top:-10%;left:-5%;animation:float1 18s ease-in-out infinite alternate;}
        .orb-2{width:300px;height:300px;background:#2563eb;opacity:.3;
          bottom:-10%;right:-5%;animation:float2 15s ease-in-out infinite alternate;}
        .orb-3{width:250px;height:250px;background:#06b6d4;opacity:.25;
          top:30%;left:40%;animation:float3 20s ease-in-out infinite alternate;}
        @keyframes float1{0%{transform:translate(0,0) scale(1);}
          100%{transform:translate(30px,-30px) scale(1.1);}}
        @keyframes float2{0%{transform:translate(0,0) scale(1);}
          100%{transform:translate(-20px,20px) scale(1.05);}}
        @keyframes float3{0%{transform:translate(0,0);}
          100%{transform:translate(20px,30px) scale(.95);}}
        .aurora-label{position:relative;z-index:1;text-align:center;
          font-family:Inter,sans-serif;}
        .aurora-label h2{margin:0;font-size:24px;font-weight:800;color:#fff;}
        .aurora-label p{margin:6px 0 0;font-size:13px;color:rgba(255,255,255,.45);}
      </style>
      <div class="aurora">
        <div class="orb orb-1"></div><div class="orb orb-2"></div><div class="orb orb-3"></div>
        <div class="aurora-label"><h2>Aurora Effect</h2><p>Animated gradient orbs</p></div>
      </div>`,
    code: `<div class="aurora">
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>
  <div class="content">Your content here</div>
</div>

<style>
.aurora { position: relative; width: 100%; height: 100vh; overflow: hidden; background: #030712; }
.orb { position: absolute; border-radius: 50%; filter: blur(80px); }
.orb-1 { width: 500px; height: 500px; background: #7c3aed; opacity: .35; top: -15%; left: -10%; animation: float1 18s ease-in-out infinite alternate; }
.orb-2 { width: 450px; height: 450px; background: #2563eb; opacity: .30; bottom: -10%; right: -5%; animation: float2 15s ease-in-out infinite alternate; }
.orb-3 { width: 400px; height: 400px; background: #06b6d4; opacity: .25; top: 30%; left: 40%; animation: float3 22s ease-in-out infinite alternate; }
@keyframes float1 { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(60px,-60px) scale(1.15); } }
@keyframes float2 { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(-40px,40px) scale(1.08); } }
@keyframes float3 { 0% { transform: translate(0,0); } 100% { transform: translate(40px,50px) scale(.9); } }
.content { position: relative; z-index: 1; }
</style>`
  },

  {
    id: 'dot-grid',
    title: 'Dot Grid',
    category: 'background',
    tags: ['grid', 'dots', 'pattern'],
    desc: 'Subtle radial dot pattern background.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;height:100vh;overflow:hidden;
          background:#0b0f1a;
          background-image:radial-gradient(rgba(139,92,246,.3) 1.5px, transparent 1.5px);
          background-size:20px 20px;
          display:flex;align-items:center;justify-content:center;
          font-family:Inter,sans-serif;}
        .dot-label{text-align:center;padding:28px 36px;
          background:rgba(11,15,26,.85);border:1px solid rgba(255,255,255,.07);
          border-radius:16px;backdrop-filter:blur(10px);}
        .dot-label h3{margin:0 0 6px;font-size:18px;font-weight:700;color:#fff;}
        .dot-label p{margin:0;font-size:13px;color:rgba(255,255,255,.4);}
      </style>
      <div class="dot-label">
        <h3>Dot Grid</h3>
        <p>Radial dot pattern background</p>
      </div>`,
    code: `<div class="dot-grid-bg">
  <div class="content">Your content</div>
</div>

<style>
.dot-grid-bg {
  width: 100%; height: 100vh;
  background-color: #0b0f1a;
  background-image: radial-gradient(rgba(139,92,246,.3) 1.5px, transparent 1.5px);
  background-size: 22px 22px;
}
</style>`
  },

  {
    id: 'gradient-mesh',
    title: 'Gradient Mesh',
    category: 'background',
    tags: ['mesh', 'organic', 'animated'],
    desc: 'Organic animated mesh gradient background.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;height:100vh;overflow:hidden;font-family:Inter,sans-serif;}
        .mesh{width:100%;height:100%;
          background:linear-gradient(to right bottom,#1e0533,#0b1845,#03303e);
          display:flex;align-items:center;justify-content:center;
          position:relative;overflow:hidden;}
        .mesh::before{content:'';position:absolute;inset:0;
          background:
            radial-gradient(at 80% 0%,#7c3aed55 0%,transparent 50%),
            radial-gradient(at 0% 100%,#2563eb44 0%,transparent 50%),
            radial-gradient(at 80% 100%,#06b6d433 0%,transparent 50%),
            radial-gradient(at 0% 0%,#8b5cf622 0%,transparent 50%);
          animation:meshMove 8s ease-in-out infinite alternate;}
        @keyframes meshMove{
          0%{filter:hue-rotate(0deg) blur(0px);}
          100%{filter:hue-rotate(20deg) blur(0px);}
        }
        .mesh-label{position:relative;z-index:1;text-align:center;}
        .mesh-label h3{margin:0;font-size:20px;font-weight:800;color:#fff;}
        .mesh-label p{margin:6px 0 0;font-size:12px;color:rgba(255,255,255,.45);}
      </style>
      <div class="mesh">
        <div class="mesh-label"><h3>Mesh Gradient</h3><p>Animated multi-point gradient</p></div>
      </div>`,
    code: `<div class="mesh-bg">
  <div class="content">Your content</div>
</div>

<style>
.mesh-bg {
  width: 100%; height: 100vh; position: relative; overflow: hidden;
  background: linear-gradient(to right bottom, #1e0533, #0b1845, #03303e);
}
.mesh-bg::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(at 80% 0%,  rgba(124,58,237,.35) 0%, transparent 50%),
    radial-gradient(at 0%  100%, rgba(37,99,235,.27)  0%, transparent 50%),
    radial-gradient(at 80% 100%, rgba(6,182,212,.2)   0%, transparent 50%);
  animation: meshMove 8s ease-in-out infinite alternate;
}
@keyframes meshMove {
  0%   { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(20deg); }
}
.content { position: relative; z-index: 1; }
</style>`
  },

  {
    id: 'grid-lines-bg',
    title: 'Grid Lines',
    category: 'background',
    tags: ['grid', 'lines', 'minimal'],
    desc: 'Clean intersecting line grid background.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;height:100vh;overflow:hidden;font-family:Inter,sans-serif;}
        .grid-bg{width:100%;height:100%;background:#0b0f1a;
          background-image:
            linear-gradient(rgba(139,92,246,.08) 1px,transparent 1px),
            linear-gradient(90deg,rgba(139,92,246,.08) 1px,transparent 1px);
          background-size:50px 50px;
          display:flex;align-items:center;justify-content:center;}
        .grid-card{padding:24px 32px;background:rgba(15,22,41,.8);
          border:1px solid rgba(255,255,255,.08);border-radius:14px;
          backdrop-filter:blur(8px);text-align:center;}
        .grid-card h3{margin:0 0 6px;font-size:18px;font-weight:700;color:#fff;}
        .grid-card p{margin:0;font-size:13px;color:rgba(255,255,255,.4);}
      </style>
      <div class="grid-bg">
        <div class="grid-card"><h3>Grid Lines</h3><p>Subtle CSS grid background pattern</p></div>
      </div>`,
    code: `<div class="grid-lines-bg">
  <div class="content">Your content</div>
</div>

<style>
.grid-lines-bg {
  width: 100%; height: 100vh;
  background-color: #0b0f1a;
  background-image:
    linear-gradient(rgba(139,92,246,.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139,92,246,.08) 1px, transparent 1px);
  background-size: 50px 50px;
}
.content { position: relative; z-index: 1; }
</style>`
  },

  /* ─────────────────────────── INPUT ─────────────────────────── */
  {
    id: 'floating-label-input',
    title: 'Floating Label',
    category: 'input',
    tags: ['form', 'label', 'floating', 'focus'],
    desc: 'Input with label that floats up on focus/fill.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .fl-group{position:relative;width:260px;}
        .fl-input{width:100%;padding:20px 16px 8px;font-size:15px;
          color:#fff;background:#0f1629;
          border:1px solid rgba(255,255,255,.1);border-radius:10px;
          outline:none;box-sizing:border-box;
          transition:border-color .3s,box-shadow .3s;}
        .fl-input:focus{border-color:#7c3aed;box-shadow:0 0 0 3px rgba(124,58,237,.2);}
        .fl-label{position:absolute;left:16px;top:50%;
          transform:translateY(-50%);
          font-size:14px;color:rgba(255,255,255,.4);
          pointer-events:none;
          transition:all .25s cubic-bezier(.16,1,.3,1);}
        .fl-input:focus~.fl-label,
        .fl-input:not(:placeholder-shown)~.fl-label{
          top:8px;font-size:11px;color:#a78bfa;letter-spacing:.02em;}
      </style>
      <div class="fl-group">
        <input class="fl-input" type="text" placeholder=" " id="fi1"/>
        <label class="fl-label" for="fi1">Email address</label>
      </div>`,
    code: `<div class="fl-group">
  <input class="fl-input" type="text" placeholder=" " id="email" />
  <label class="fl-label" for="email">Email address</label>
</div>

<style>
.fl-group { position: relative; }
.fl-input {
  width: 100%; padding: 20px 16px 8px; font-size: 15px;
  color: #fff; background: #0f1629;
  border: 1px solid rgba(255,255,255,.1); border-radius: 10px;
  outline: none; box-sizing: border-box;
  transition: border-color .3s, box-shadow .3s;
}
.fl-input:focus { border-color: #7c3aed; box-shadow: 0 0 0 3px rgba(124,58,237,.2); }
.fl-label {
  position: absolute; left: 16px; top: 50%; transform: translateY(-50%);
  font-size: 14px; color: rgba(255,255,255,.4); pointer-events: none;
  transition: all .25s cubic-bezier(.16,1,.3,1);
}
.fl-input:focus ~ .fl-label,
.fl-input:not(:placeholder-shown) ~ .fl-label {
  top: 8px; font-size: 11px; color: #a78bfa;
}
</style>`
  },

  {
    id: 'glow-search',
    title: 'Glow Search',
    category: 'input',
    tags: ['search', 'glow', 'focus'],
    desc: 'Search input with expanding glow on focus.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .gs-wrap{position:relative;width:280px;}
        .gs-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);
          font-size:14px;color:rgba(255,255,255,.3);pointer-events:none;}
        .gs-input{width:100%;padding:13px 16px 13px 40px;font-size:14px;
          color:#fff;background:#0f1629;
          border:1px solid rgba(255,255,255,.08);border-radius:50px;
          outline:none;box-sizing:border-box;
          transition:all .35s ease;}
        .gs-input::placeholder{color:rgba(255,255,255,.3);}
        .gs-input:focus{border-color:#7c3aed;
          box-shadow:0 0 0 4px rgba(124,58,237,.18),0 0 30px rgba(124,58,237,.25);}
      </style>
      <div class="gs-wrap">
        <span class="gs-icon">🔍</span>
        <input class="gs-input" type="text" placeholder="Search components…"/>
      </div>`,
    code: `<div class="gs-wrap">
  <span class="gs-icon">🔍</span>
  <input class="gs-input" type="text" placeholder="Search components…" />
</div>

<style>
.gs-wrap { position: relative; }
.gs-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); font-size: 14px; color: rgba(255,255,255,.3); pointer-events: none; }
.gs-input {
  width: 100%; padding: 13px 16px 13px 42px; font-size: 14px; color: #fff;
  background: #0f1629; border: 1px solid rgba(255,255,255,.08); border-radius: 50px;
  outline: none; box-sizing: border-box; transition: all .35s ease;
}
.gs-input::placeholder { color: rgba(255,255,255,.3); }
.gs-input:focus { border-color: #7c3aed; box-shadow: 0 0 0 4px rgba(124,58,237,.18), 0 0 30px rgba(124,58,237,.25); }
</style>`
  },

  /* ─────────────────────────── BADGE ─────────────────────────── */
  {
    id: 'animated-badge',
    title: 'Animated Badge',
    category: 'badge',
    tags: ['badge', 'status', 'pulse', 'live'],
    desc: 'Live status badge with pulsing dot.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;gap:12px;background:#0b0f1a;font-family:Inter,sans-serif;
          flex-direction:column;}
        .badge{display:inline-flex;align-items:center;gap:7px;
          padding:5px 12px;border-radius:50px;font-size:12px;font-weight:700;}
        .badge-live{background:rgba(16,185,129,.12);border:1px solid rgba(16,185,129,.25);color:#34d399;}
        .badge-beta{background:rgba(124,58,237,.12);border:1px solid rgba(124,58,237,.25);color:#a78bfa;}
        .badge-warn{background:rgba(245,158,11,.12);border:1px solid rgba(245,158,11,.25);color:#fbbf24;}
        .bdot{width:7px;height:7px;border-radius:50%;}
        .bdot-live{background:#34d399;animation:badgePulse 1.5s ease-in-out infinite;}
        @keyframes badgePulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:.5;transform:scale(1.5);}}
      </style>
      <span class="badge badge-live"><span class="bdot bdot-live"></span>Live</span>
      <span class="badge badge-beta">⭐ Beta</span>
      <span class="badge badge-warn">⚠ Deprecated</span>`,
    code: `<span class="badge badge-live">
  <span class="bdot bdot-live"></span> Live
</span>
<span class="badge badge-beta">⭐ Beta</span>

<style>
.badge { display: inline-flex; align-items: center; gap: 7px; padding: 5px 12px; border-radius: 50px; font-size: 12px; font-weight: 700; }
.badge-live { background: rgba(16,185,129,.12); border: 1px solid rgba(16,185,129,.25); color: #34d399; }
.badge-beta { background: rgba(124,58,237,.12); border: 1px solid rgba(124,58,237,.25); color: #a78bfa; }
.bdot { width: 7px; height: 7px; border-radius: 50%; }
.bdot-live { background: #34d399; animation: badgePulse 1.5s ease-in-out infinite; }
@keyframes badgePulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:.5; transform:scale(1.5); } }
</style>`
  },

  {
    id: 'tag-chips',
    title: 'Tag Chips',
    category: 'badge',
    tags: ['tag', 'chip', 'removable'],
    desc: 'Interactive tag chips with remove action.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .chips{display:flex;flex-wrap:wrap;gap:8px;max-width:280px;justify-content:center;}
        .chip{display:inline-flex;align-items:center;gap:6px;
          padding:5px 10px;border-radius:6px;font-size:12px;font-weight:600;
          cursor:default;transition:all .2s;}
        .chip-purple{background:rgba(124,58,237,.15);border:1px solid rgba(124,58,237,.3);color:#c4b5fd;}
        .chip-blue{background:rgba(37,99,235,.15);border:1px solid rgba(37,99,235,.3);color:#93c5fd;}
        .chip-cyan{background:rgba(6,182,212,.15);border:1px solid rgba(6,182,212,.3);color:#67e8f9;}
        .chip-rose{background:rgba(244,63,94,.15);border:1px solid rgba(244,63,94,.3);color:#fda4af;}
        .chip-green{background:rgba(16,185,129,.15);border:1px solid rgba(16,185,129,.3);color:#6ee7b7;}
        .chip:hover{transform:scale(1.05);}
        .chip-x{cursor:pointer;opacity:.5;font-size:13px;line-height:1;transition:opacity .2s;}
        .chip-x:hover{opacity:1;}
      </style>
      <div class="chips">
        <span class="chip chip-purple">React <span class="chip-x">×</span></span>
        <span class="chip chip-blue">TypeScript <span class="chip-x">×</span></span>
        <span class="chip chip-cyan">Tailwind <span class="chip-x">×</span></span>
        <span class="chip chip-rose">Animations <span class="chip-x">×</span></span>
        <span class="chip chip-green">Design <span class="chip-x">×</span></span>
      </div>`,
    code: `<div class="chips">
  <span class="chip chip-purple">React <span class="chip-x">×</span></span>
  <span class="chip chip-blue">TypeScript <span class="chip-x">×</span></span>
  <span class="chip chip-cyan">Tailwind <span class="chip-x">×</span></span>
</div>

<style>
.chips { display: flex; flex-wrap: wrap; gap: 8px; }
.chip { display: inline-flex; align-items: center; gap: 6px; padding: 5px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; transition: transform .2s; }
.chip-purple { background: rgba(124,58,237,.15); border: 1px solid rgba(124,58,237,.3); color: #c4b5fd; }
.chip-blue   { background: rgba(37,99,235,.15);  border: 1px solid rgba(37,99,235,.3);  color: #93c5fd; }
.chip-cyan   { background: rgba(6,182,212,.15);  border: 1px solid rgba(6,182,212,.3);  color: #67e8f9; }
.chip:hover { transform: scale(1.04); }
.chip-x { cursor: pointer; opacity: .5; font-size: 13px; }
.chip-x:hover { opacity: 1; }
</style>`
  },

  /* ═══════════════════ EXTRA BUTTONS ═══════════════════ */

  {
    id: 'glow-button',
    title: 'Glow Button',
    category: 'button',
    tags: ['glow', 'hover', 'shadow'],
    desc: 'Button with expanding radial glow halo on hover.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .glow-btn{position:relative;padding:14px 38px;font-size:15px;font-weight:700;
          color:#fff;background:#0f1629;
          border:1px solid rgba(124,58,237,.5);border-radius:10px;cursor:pointer;
          overflow:visible;transition:all .35s ease;isolation:isolate;}
        .glow-btn::after{content:'';position:absolute;inset:-2px;
          border-radius:12px;z-index:-1;
          background:linear-gradient(135deg,#7c3aed,#2563eb,#06b6d4);
          opacity:0;filter:blur(14px);
          transition:opacity .4s ease;}
        .glow-btn:hover{border-color:transparent;color:#fff;}
        .glow-btn:hover::after{opacity:.85;}
      </style>
      <button class="glow-btn">Hover Glow</button>`,
    code: `<button class="glow-btn">Hover Glow</button>

<style>
.glow-btn {
  position: relative;
  padding: 14px 38px; font-size: 15px; font-weight: 700;
  color: #fff; background: #0f1629;
  border: 1px solid rgba(124,58,237,.5); border-radius: 10px; cursor: pointer;
  transition: all .35s ease; isolation: isolate;
}
.glow-btn::after {
  content: ''; position: absolute; inset: -2px; border-radius: 12px; z-index: -1;
  background: linear-gradient(135deg, #7c3aed, #2563eb, #06b6d4);
  opacity: 0; filter: blur(14px); transition: opacity .4s ease;
}
.glow-btn:hover { border-color: transparent; }
.glow-btn:hover::after { opacity: .85; }
</style>`
  },

  {
    id: 'split-button',
    title: 'Split Button',
    category: 'button',
    tags: ['group', 'action', 'dropdown'],
    desc: 'Action button with a split dropdown toggle.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .sp-grp{display:inline-flex;border-radius:10px;overflow:hidden;
          border:1px solid rgba(124,58,237,.4);}
        .sp-main{padding:12px 22px;font-size:14px;font-weight:700;color:#fff;
          background:linear-gradient(135deg,#7c3aed,#2563eb);border:none;cursor:pointer;
          transition:opacity .2s;}
        .sp-main:hover{opacity:.85;}
        .sp-div{width:1px;background:rgba(255,255,255,.2);}
        .sp-drop{padding:12px 14px;font-size:13px;color:#fff;
          background:linear-gradient(135deg,#7c3aed,#2563eb);border:none;cursor:pointer;
          transition:background .2s;}
        .sp-drop:hover{background:rgba(124,58,237,.6);}
      </style>
      <div class="sp-grp">
        <button class="sp-main">Deploy Now</button>
        <div class="sp-div"></div>
        <button class="sp-drop">▾</button>
      </div>`,
    code: `<div class="sp-grp">
  <button class="sp-main">Deploy Now</button>
  <div class="sp-div"></div>
  <button class="sp-drop">▾</button>
</div>

<style>
.sp-grp { display: inline-flex; border-radius: 10px; overflow: hidden; border: 1px solid rgba(124,58,237,.4); }
.sp-main { padding: 12px 22px; font-size: 14px; font-weight: 700; color: #fff; background: linear-gradient(135deg, #7c3aed, #2563eb); border: none; cursor: pointer; transition: opacity .2s; }
.sp-main:hover { opacity: .85; }
.sp-div { width: 1px; background: rgba(255,255,255,.2); }
.sp-drop { padding: 12px 14px; font-size: 13px; color: #fff; background: linear-gradient(135deg, #7c3aed, #2563eb); border: none; cursor: pointer; }
.sp-drop:hover { background: rgba(124,58,237,.6); }
</style>`
  },

  {
    id: 'loading-button',
    title: 'Loading Button',
    category: 'button',
    tags: ['loading', 'spinner', 'state'],
    desc: 'Button that toggles into a loading spinner state.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .ld-btn{display:inline-flex;align-items:center;gap:10px;
          padding:13px 32px;font-size:14px;font-weight:700;color:#fff;
          background:linear-gradient(135deg,#7c3aed,#2563eb);
          border:none;border-radius:10px;cursor:pointer;
          transition:opacity .2s;min-width:150px;justify-content:center;}
        .ld-btn:hover{opacity:.85;}
        .ld-spin{width:16px;height:16px;border-radius:50%;
          border:2px solid rgba(255,255,255,.3);border-top-color:#fff;
          animation:ldSpin .7s linear infinite;display:none;}
        .ld-btn.loading .ld-spin{display:block;}
        .ld-btn.loading .ld-txt{display:none;}
        @keyframes ldSpin{to{transform:rotate(360deg);}}
      </style>
      <script>
        function triggerLoad(){
          const btn=document.getElementById('ldbtn');
          if(btn.classList.contains('loading'))return;
          btn.classList.add('loading');
          setTimeout(()=>btn.classList.remove('loading'),2200);
        }
      </script>
      <button class="ld-btn" id="ldbtn" onclick="triggerLoad()">
        <span class="ld-spin"></span>
        <span class="ld-txt">Submit Form</span>
      </button>`,
    code: `<button class="ld-btn" id="ldbtn" onclick="triggerLoad()">
  <span class="ld-spin"></span>
  <span class="ld-txt">Submit Form</span>
</button>

<style>
.ld-btn { display: inline-flex; align-items: center; gap: 10px; padding: 13px 32px; font-size: 14px; font-weight: 700; color: #fff; background: linear-gradient(135deg, #7c3aed, #2563eb); border: none; border-radius: 10px; cursor: pointer; min-width: 150px; justify-content: center; }
.ld-spin { width: 16px; height: 16px; border-radius: 50%; border: 2px solid rgba(255,255,255,.3); border-top-color: #fff; animation: ldSpin .7s linear infinite; display: none; }
.ld-btn.loading .ld-spin { display: block; }
.ld-btn.loading .ld-txt  { display: none; }
@keyframes ldSpin { to { transform: rotate(360deg); } }
</style>

<script>
function triggerLoad() {
  const btn = document.getElementById('ldbtn');
  btn.classList.add('loading');
  setTimeout(() => btn.classList.remove('loading'), 2200);
}
</script>`
  },

  {
    id: 'copy-button',
    title: 'Copy Button',
    category: 'button',
    tags: ['copy', 'clipboard', 'feedback'],
    desc: 'Click to copy with animated checkmark feedback.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;gap:12px;
          flex-direction:column;}
        .code-block{background:#131d33;border:1px solid rgba(255,255,255,.08);
          border-radius:10px;padding:16px 20px;display:flex;align-items:center;
          justify-content:space-between;gap:16px;width:260px;}
        .code-block code{font-size:13px;color:#a78bfa;font-family:monospace;}
        .cp-btn{display:inline-flex;align-items:center;gap:6px;
          padding:7px 14px;font-size:12px;font-weight:700;
          background:rgba(124,58,237,.15);border:1px solid rgba(124,58,237,.3);
          color:#a78bfa;border-radius:6px;cursor:pointer;
          transition:all .25s;}
        .cp-btn:hover{background:rgba(124,58,237,.25);}
        .cp-btn.copied{background:rgba(16,185,129,.15);border-color:rgba(16,185,129,.3);color:#34d399;}
      </style>
      <script>
        function doCopy(el){
          el.classList.add('copied');el.textContent='✓ Copied';
          setTimeout(()=>{el.classList.remove('copied');el.textContent='⎘ Copy';},2000);
        }
      </script>
      <div class="code-block">
        <code>npm install aura-ui</code>
        <button class="cp-btn" onclick="doCopy(this)">⎘ Copy</button>
      </div>`,
    code: `<div class="code-block">
  <code>npm install aura-ui</code>
  <button class="cp-btn" onclick="doCopy(this)">⎘ Copy</button>
</div>

<style>
.code-block { background: #131d33; border: 1px solid rgba(255,255,255,.08); border-radius: 10px; padding: 14px 18px; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.code-block code { font-size: 13px; color: #a78bfa; font-family: monospace; }
.cp-btn { display: inline-flex; align-items: center; gap: 5px; padding: 7px 14px; font-size: 12px; font-weight: 700; background: rgba(124,58,237,.15); border: 1px solid rgba(124,58,237,.3); color: #a78bfa; border-radius: 6px; cursor: pointer; transition: all .25s; }
.cp-btn:hover  { background: rgba(124,58,237,.25); }
.cp-btn.copied { background: rgba(16,185,129,.15); border-color: rgba(16,185,129,.3); color: #34d399; }
</style>

<script>
function doCopy(el) {
  el.classList.add('copied'); el.textContent = '✓ Copied';
  setTimeout(() => { el.classList.remove('copied'); el.textContent = '⎘ Copy'; }, 2000);
}
</script>`
  },

  /* ═══════════════════ EXTRA CARDS ═══════════════════ */

  {
    id: 'notification-card',
    title: 'Notification Card',
    category: 'card',
    tags: ['notification', 'alert', 'inbox'],
    desc: 'Stacked notification cards with unread dot.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .noti-list{display:flex;flex-direction:column;gap:8px;width:270px;}
        .noti{display:flex;align-items:flex-start;gap:12px;
          padding:14px 16px;background:#0f1629;
          border:1px solid rgba(255,255,255,.07);border-radius:12px;
          transition:border-color .2s;}
        .noti:hover{border-color:rgba(124,58,237,.35);}
        .noti.unread{border-left:3px solid #7c3aed;}
        .noti-icon{width:36px;height:36px;border-radius:9px;flex-shrink:0;
          display:flex;align-items:center;justify-content:center;font-size:16px;}
        .ni-v{background:rgba(124,58,237,.2);}
        .ni-g{background:rgba(16,185,129,.2);}
        .ni-b{background:rgba(37,99,235,.2);}
        .noti-body{flex:1;min-width:0;}
        .noti-title{font-size:13px;font-weight:700;color:#fff;margin-bottom:2px;}
        .noti-desc{font-size:12px;color:rgba(255,255,255,.4);line-height:1.4;}
        .noti-time{font-size:11px;color:rgba(255,255,255,.25);margin-top:4px;}
      </style>
      <div class="noti-list">
        <div class="noti unread">
          <div class="noti-icon ni-v">✦</div>
          <div class="noti-body">
            <div class="noti-title">New component added</div>
            <div class="noti-desc">Spotlight Card is now available</div>
            <div class="noti-time">2 min ago</div>
          </div>
        </div>
        <div class="noti">
          <div class="noti-icon ni-g">✓</div>
          <div class="noti-body">
            <div class="noti-title">Build successful</div>
            <div class="noti-desc">v2.4.1 deployed to production</div>
            <div class="noti-time">1 hour ago</div>
          </div>
        </div>
        <div class="noti">
          <div class="noti-icon ni-b">★</div>
          <div class="noti-body">
            <div class="noti-title">8 new stars on GitHub</div>
            <div class="noti-desc">aura-ui/components reached 400★</div>
            <div class="noti-time">3 hours ago</div>
          </div>
        </div>
      </div>`,
    code: `<div class="noti-list">
  <div class="noti unread">
    <div class="noti-icon ni-v">✦</div>
    <div class="noti-body">
      <div class="noti-title">New component added</div>
      <div class="noti-desc">Spotlight Card is now available</div>
      <div class="noti-time">2 min ago</div>
    </div>
  </div>
  <div class="noti">
    <div class="noti-icon ni-g">✓</div>
    <div class="noti-body">
      <div class="noti-title">Build successful</div>
      <div class="noti-desc">v2.4.1 deployed to production</div>
      <div class="noti-time">1 hour ago</div>
    </div>
  </div>
</div>

<style>
.noti-list { display: flex; flex-direction: column; gap: 8px; }
.noti { display: flex; align-items: flex-start; gap: 12px; padding: 14px 16px; background: #0f1629; border: 1px solid rgba(255,255,255,.07); border-radius: 12px; transition: border-color .2s; }
.noti:hover { border-color: rgba(124,58,237,.35); }
.noti.unread { border-left: 3px solid #7c3aed; }
.noti-icon { width: 36px; height: 36px; border-radius: 9px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 16px; }
.ni-v { background: rgba(124,58,237,.2); } .ni-g { background: rgba(16,185,129,.2); }
.noti-title { font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 2px; }
.noti-desc { font-size: 12px; color: rgba(255,255,255,.4); }
.noti-time { font-size: 11px; color: rgba(255,255,255,.25); margin-top: 4px; }
</style>`
  },

  {
    id: 'feature-card',
    title: 'Feature Card',
    category: 'card',
    tags: ['feature', 'icon', 'highlight'],
    desc: 'Feature highlight card with gradient icon + hover lift.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;gap:12px;}
        .feat{width:130px;padding:22px 18px;background:#0f1629;
          border:1px solid rgba(255,255,255,.07);border-radius:16px;
          text-align:center;cursor:default;
          transition:all .35s cubic-bezier(.34,1.56,.64,1);}
        .feat:hover{transform:translateY(-6px);border-color:rgba(124,58,237,.4);
          box-shadow:0 12px 40px rgba(124,58,237,.2);}
        .feat-ic{width:44px;height:44px;border-radius:12px;margin:0 auto 12px;
          display:flex;align-items:center;justify-content:center;font-size:20px;}
        .ic-v{background:linear-gradient(135deg,rgba(124,58,237,.3),rgba(124,58,237,.1));}
        .ic-b{background:linear-gradient(135deg,rgba(37,99,235,.3),rgba(37,99,235,.1));}
        .ic-c{background:linear-gradient(135deg,rgba(6,182,212,.3),rgba(6,182,212,.1));}
        .feat h4{margin:0 0 5px;font-size:13px;font-weight:700;color:#fff;}
        .feat p{margin:0;font-size:11px;color:rgba(255,255,255,.4);line-height:1.5;}
      </style>
      <div class="feat">
        <div class="feat-ic ic-v">⚡</div>
        <h4>Fast</h4><p>Zero runtime overhead</p>
      </div>
      <div class="feat">
        <div class="feat-ic ic-b">🛡</div>
        <h4>Secure</h4><p>XSS-safe by default</p>
      </div>
      <div class="feat">
        <div class="feat-ic ic-c">✦</div>
        <h4>Beautiful</h4><p>Premium dark theme</p>
      </div>`,
    code: `<div class="feat-card">
  <div class="feat-ic">⚡</div>
  <h4>Lightning Fast</h4>
  <p>Zero runtime overhead, pure CSS animations.</p>
</div>

<style>
.feat-card { padding: 24px 20px; background: #0f1629; border: 1px solid rgba(255,255,255,.07); border-radius: 16px; text-align: center; transition: all .35s cubic-bezier(.34,1.56,.64,1); }
.feat-card:hover { transform: translateY(-6px); border-color: rgba(124,58,237,.4); box-shadow: 0 12px 40px rgba(124,58,237,.18); }
.feat-ic { width: 44px; height: 44px; border-radius: 12px; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; background: linear-gradient(135deg, rgba(124,58,237,.3), rgba(124,58,237,.1)); }
.feat-card h4 { margin: 0 0 5px; font-size: 15px; font-weight: 700; color: #fff; }
.feat-card p { margin: 0; font-size: 13px; color: rgba(255,255,255,.4); line-height: 1.5; }
</style>`
  },

  {
    id: 'testimonial-card',
    title: 'Testimonial Card',
    category: 'card',
    tags: ['testimonial', 'quote', 'review'],
    desc: 'Customer quote card with avatar and star rating.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .testi{width:250px;padding:24px;background:#0f1629;
          border:1px solid rgba(255,255,255,.08);border-radius:18px;
          position:relative;}
        .testi-quote{font-size:28px;color:rgba(124,58,237,.4);line-height:1;margin-bottom:10px;}
        .testi-text{font-size:13px;color:rgba(255,255,255,.65);line-height:1.65;margin:0 0 16px;}
        .testi-footer{display:flex;align-items:center;gap:10px;}
        .testi-av{width:38px;height:38px;border-radius:50%;flex-shrink:0;
          background:linear-gradient(135deg,#7c3aed,#2563eb);
          display:flex;align-items:center;justify-content:center;
          font-size:14px;font-weight:800;color:#fff;}
        .testi-name{font-size:13px;font-weight:700;color:#fff;margin-bottom:2px;}
        .testi-role{font-size:11px;color:rgba(255,255,255,.35);}
        .testi-stars{color:#fbbf24;font-size:11px;margin-top:3px;letter-spacing:1px;}
      </style>
      <div class="testi">
        <div class="testi-quote">"</div>
        <p class="testi-text">AURA UI saved us weeks of design work. Every component looks absolutely premium out of the box.</p>
        <div class="testi-footer">
          <div class="testi-av">SL</div>
          <div>
            <div class="testi-name">Sarah Lee</div>
            <div class="testi-role">Lead Designer @ Vercel</div>
            <div class="testi-stars">★★★★★</div>
          </div>
        </div>
      </div>`,
    code: `<div class="testi">
  <div class="testi-quote">"</div>
  <p class="testi-text">AURA UI saved us weeks of design work. Every component looks absolutely premium out of the box.</p>
  <div class="testi-footer">
    <div class="testi-av">SL</div>
    <div>
      <div class="testi-name">Sarah Lee</div>
      <div class="testi-role">Lead Designer @ Vercel</div>
      <div class="testi-stars">★★★★★</div>
    </div>
  </div>
</div>

<style>
.testi { padding: 24px; background: #0f1629; border: 1px solid rgba(255,255,255,.08); border-radius: 18px; max-width: 320px; }
.testi-quote { font-size: 32px; color: rgba(124,58,237,.4); line-height: 1; margin-bottom: 10px; }
.testi-text { font-size: 14px; color: rgba(255,255,255,.65); line-height: 1.65; margin: 0 0 16px; }
.testi-footer { display: flex; align-items: center; gap: 10px; }
.testi-av { width: 38px; height: 38px; border-radius: 50%; background: linear-gradient(135deg,#7c3aed,#2563eb); display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; color: #fff; flex-shrink: 0; }
.testi-name { font-size: 13px; font-weight: 700; color: #fff; }
.testi-role { font-size: 11px; color: rgba(255,255,255,.35); }
.testi-stars { color: #fbbf24; font-size: 12px; letter-spacing: 1px; margin-top: 3px; }
</style>`
  },

  {
    id: 'product-card',
    title: 'Product Card',
    category: 'card',
    tags: ['product', 'ecommerce', 'hover'],
    desc: 'E-commerce product card with image placeholder, price, and add-to-cart.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .prod{width:200px;background:#0f1629;border:1px solid rgba(255,255,255,.07);
          border-radius:16px;overflow:hidden;
          transition:all .35s cubic-bezier(.34,1.56,.64,1);}
        .prod:hover{transform:translateY(-5px);box-shadow:0 12px 40px rgba(124,58,237,.2);}
        .prod-img{height:140px;
          background:linear-gradient(135deg,#1a0b3b,#0b1845);
          display:flex;align-items:center;justify-content:center;font-size:40px;
          position:relative;overflow:hidden;}
        .prod-img::after{content:'';position:absolute;inset:0;
          background:linear-gradient(180deg,transparent 60%,rgba(15,22,41,.8));}
        .prod-body{padding:14px;}
        .prod-cat{font-size:10px;font-weight:700;text-transform:uppercase;
          letter-spacing:.07em;color:#a78bfa;margin-bottom:5px;}
        .prod-name{font-size:14px;font-weight:700;color:#fff;margin-bottom:3px;}
        .prod-price{font-size:18px;font-weight:900;color:#fff;}
        .prod-price span{font-size:12px;font-weight:400;color:rgba(255,255,255,.3);
          text-decoration:line-through;margin-left:6px;}
        .prod-btn{width:100%;margin-top:12px;padding:9px;
          background:linear-gradient(135deg,#7c3aed,#2563eb);
          border:none;border-radius:8px;color:#fff;font-size:13px;font-weight:700;
          cursor:pointer;transition:opacity .2s;}
        .prod-btn:hover{opacity:.85;}
      </style>
      <div class="prod">
        <div class="prod-img">🎧</div>
        <div class="prod-body">
          <div class="prod-cat">Electronics</div>
          <div class="prod-name">Pro Headphones</div>
          <div class="prod-price">$129 <span>$179</span></div>
          <button class="prod-btn">Add to Cart</button>
        </div>
      </div>`,
    code: `<div class="prod-card">
  <div class="prod-img">🎧</div>
  <div class="prod-body">
    <div class="prod-cat">Electronics</div>
    <div class="prod-name">Pro Headphones</div>
    <div class="prod-price">$129 <span>$179</span></div>
    <button class="prod-btn">Add to Cart</button>
  </div>
</div>

<style>
.prod-card { width: 220px; background: #0f1629; border: 1px solid rgba(255,255,255,.07); border-radius: 16px; overflow: hidden; transition: all .35s cubic-bezier(.34,1.56,.64,1); }
.prod-card:hover { transform: translateY(-5px); box-shadow: 0 12px 40px rgba(124,58,237,.2); }
.prod-img { height: 140px; background: linear-gradient(135deg, #1a0b3b, #0b1845); display: flex; align-items: center; justify-content: center; font-size: 44px; }
.prod-body { padding: 14px; }
.prod-cat { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .07em; color: #a78bfa; margin-bottom: 5px; }
.prod-name { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 4px; }
.prod-price { font-size: 18px; font-weight: 900; color: #fff; }
.prod-price span { font-size: 12px; font-weight: 400; color: rgba(255,255,255,.3); text-decoration: line-through; margin-left: 6px; }
.prod-btn { width: 100%; margin-top: 12px; padding: 9px; background: linear-gradient(135deg, #7c3aed, #2563eb); border: none; border-radius: 8px; color: #fff; font-size: 13px; font-weight: 700; cursor: pointer; }
</style>`
  },

  /* ═══════════════════ EXTRA ANIMATIONS ═══════════════════ */

  {
    id: 'count-up',
    title: 'Count Up',
    category: 'animation',
    tags: ['counter', 'number', 'stats'],
    desc: 'Animated number counter that counts up on load.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .cu-row{display:flex;gap:32px;}
        .cu-item{text-align:center;}
        .cu-num{font-size:40px;font-weight:900;letter-spacing:-.03em;
          background:linear-gradient(135deg,#a78bfa,#60a5fa);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
          background-clip:text;}
        .cu-lbl{font-size:11px;font-weight:700;text-transform:uppercase;
          letter-spacing:.1em;color:rgba(255,255,255,.35);margin-top:4px;}
      </style>
      <script>
        function countUp(el,target,dur){
          let start=0,ts=null;
          function step(t){
            if(!ts)ts=t;
            const p=Math.min((t-ts)/dur,1);
            el.textContent=Math.floor(p*target).toLocaleString()+(p<1?'':'+');
            if(p<1)requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        }
        document.addEventListener('DOMContentLoaded',()=>{
          countUp(document.getElementById('c1'),14800,1800);
          countUp(document.getElementById('c2'),320,1600);
          countUp(document.getElementById('c3'),99,1400);
        });
      </script>
      <div class="cu-row">
        <div class="cu-item"><div class="cu-num" id="c1">0</div><div class="cu-lbl">Downloads</div></div>
        <div class="cu-item"><div class="cu-num" id="c2">0</div><div class="cu-lbl">Stars</div></div>
        <div class="cu-item"><div class="cu-num" id="c3">0</div><div class="cu-lbl">% Uptime</div></div>
      </div>`,
    code: `<div class="cu-row">
  <div class="cu-item">
    <div class="cu-num" id="c1">0</div>
    <div class="cu-lbl">Downloads</div>
  </div>
  <div class="cu-item">
    <div class="cu-num" id="c2">0</div>
    <div class="cu-lbl">Stars</div>
  </div>
</div>

<style>
.cu-row { display: flex; gap: 32px; }
.cu-item { text-align: center; }
.cu-num { font-size: 44px; font-weight: 900; letter-spacing: -.03em; background: linear-gradient(135deg, #a78bfa, #60a5fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.cu-lbl { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; color: rgba(255,255,255,.35); margin-top: 4px; }
</style>

<script>
function countUp(el, target, dur) {
  let ts = null;
  function step(t) {
    if (!ts) ts = t;
    const p = Math.min((t - ts) / dur, 1);
    el.textContent = Math.floor(p * target).toLocaleString() + (p < 1 ? '' : '+');
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
countUp(document.getElementById('c1'), 14800, 1800);
countUp(document.getElementById('c2'), 320, 1600);
</script>`
  },

  {
    id: 'bounce-loader',
    title: 'Bounce Loader',
    category: 'animation',
    tags: ['loader', 'dots', 'bounce'],
    desc: 'Three bouncing dots loading indicator.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;flex-direction:column;align-items:center;
          justify-content:center;gap:28px;height:100vh;background:#0b0f1a;
          font-family:Inter,sans-serif;}
        .loader-row{display:flex;align-items:center;gap:22px;}
        .dots{display:flex;gap:8px;align-items:center;}
        .dot-d{width:10px;height:10px;border-radius:50%;
          animation:dotBounce .9s ease-in-out infinite;}
        .dot-d:nth-child(1){background:#a78bfa;animation-delay:0s;}
        .dot-d:nth-child(2){background:#60a5fa;animation-delay:.18s;}
        .dot-d:nth-child(3){background:#67e8f9;animation-delay:.36s;}
        @keyframes dotBounce{0%,80%,100%{transform:translateY(0);}
          40%{transform:translateY(-14px);}}
        .pulse-dots{display:flex;gap:8px;}
        .pdot{width:10px;height:10px;border-radius:50%;background:#a78bfa;
          animation:pdotPls 1.4s ease-in-out infinite;}
        .pdot:nth-child(2){animation-delay:.2s;background:#60a5fa;}
        .pdot:nth-child(3){animation-delay:.4s;background:#67e8f9;}
        @keyframes pdotPls{0%,100%{transform:scale(.6);opacity:.4;}
          50%{transform:scale(1.2);opacity:1;}}
        .bar-spin{width:38px;height:38px;border-radius:50%;
          border:3px solid rgba(167,139,250,.2);border-top-color:#a78bfa;
          animation:barSpin .8s linear infinite;}
        @keyframes barSpin{to{transform:rotate(360deg);}}
      </style>
      <div class="loader-row">
        <div class="dots"><div class="dot-d"></div><div class="dot-d"></div><div class="dot-d"></div></div>
        <div class="pulse-dots"><div class="pdot"></div><div class="pdot"></div><div class="pdot"></div></div>
        <div class="bar-spin"></div>
      </div>`,
    code: `<!-- Bouncing Dots -->
<div class="dots">
  <div class="dot-d"></div>
  <div class="dot-d"></div>
  <div class="dot-d"></div>
</div>

<style>
.dots { display: flex; gap: 8px; align-items: center; }
.dot-d { width: 10px; height: 10px; border-radius: 50%; animation: dotBounce .9s ease-in-out infinite; }
.dot-d:nth-child(1) { background: #a78bfa; animation-delay: 0s; }
.dot-d:nth-child(2) { background: #60a5fa; animation-delay: .18s; }
.dot-d:nth-child(3) { background: #67e8f9; animation-delay: .36s; }
@keyframes dotBounce {
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-14px); }
}
</style>`
  },

  {
    id: 'floating-elements',
    title: 'Floating Elements',
    category: 'animation',
    tags: ['float', 'orbit', 'ambient'],
    desc: 'Icon elements floating in staggered orbits.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .float-scene{position:relative;width:200px;height:200px;}
        .float-center{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
          width:56px;height:56px;border-radius:16px;
          background:linear-gradient(135deg,#7c3aed,#2563eb);
          display:flex;align-items:center;justify-content:center;
          font-size:24px;z-index:2;
          box-shadow:0 0 30px rgba(124,58,237,.5);}
        .floater{position:absolute;width:36px;height:36px;border-radius:10px;
          background:#131d33;border:1px solid rgba(255,255,255,.1);
          display:flex;align-items:center;justify-content:center;font-size:16px;}
        .fl1{top:5%;left:50%;margin-left:-18px;animation:fl 4s ease-in-out infinite;}
        .fl2{bottom:5%;left:50%;margin-left:-18px;animation:fl 4s ease-in-out infinite .5s;}
        .fl3{left:5%;top:50%;margin-top:-18px;animation:fl 4s ease-in-out infinite 1s;}
        .fl4{right:5%;top:50%;margin-top:-18px;animation:fl 4s ease-in-out infinite 1.5s;}
        @keyframes fl{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
      </style>
      <div class="float-scene">
        <div class="float-center">✦</div>
        <div class="floater fl1">⚡</div>
        <div class="floater fl2">🛡</div>
        <div class="floater fl3">⊞</div>
        <div class="floater fl4">◈</div>
      </div>`,
    code: `<div class="float-scene">
  <div class="float-center">✦</div>
  <div class="floater fl1">⚡</div>
  <div class="floater fl2">🛡</div>
  <div class="floater fl3">⊞</div>
  <div class="floater fl4">◈</div>
</div>

<style>
.float-scene { position: relative; width: 220px; height: 220px; }
.float-center { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 56px; height: 56px; border-radius: 16px; background: linear-gradient(135deg,#7c3aed,#2563eb); display: flex; align-items: center; justify-content: center; font-size: 24px; box-shadow: 0 0 30px rgba(124,58,237,.5); }
.floater { position: absolute; width: 36px; height: 36px; border-radius: 10px; background: #131d33; border: 1px solid rgba(255,255,255,.1); display: flex; align-items: center; justify-content: center; font-size: 16px; }
.fl1 { top: 5%; left: 50%; margin-left: -18px; animation: fl 4s ease-in-out infinite; }
.fl2 { bottom: 5%; left: 50%; margin-left: -18px; animation: fl 4s ease-in-out infinite .5s; }
.fl3 { left: 5%; top: 50%; margin-top: -18px; animation: fl 4s ease-in-out infinite 1s; }
.fl4 { right: 5%; top: 50%; margin-top: -18px; animation: fl 4s ease-in-out infinite 1.5s; }
@keyframes fl { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
</style>`
  },

  {
    id: 'marquee-scroll',
    title: 'Marquee Scroll',
    category: 'animation',
    tags: ['marquee', 'scroll', 'infinite', 'ticker'],
    desc: 'Infinite auto-scrolling horizontal marquee strip.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;
          overflow:hidden;}
        .marq-wrap{width:100%;overflow:hidden;
          -webkit-mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);
          mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);}
        .marq-track{display:flex;width:max-content;
          animation:marqScroll 18s linear infinite;}
        .marq-track:hover{animation-play-state:paused;}
        .marq-item{display:inline-flex;align-items:center;gap:8px;
          padding:8px 20px;margin:0 8px;
          background:rgba(255,255,255,.03);
          border:1px solid rgba(255,255,255,.08);border-radius:50px;
          font-size:13px;font-weight:600;color:rgba(255,255,255,.55);
          white-space:nowrap;}
        .marq-item span{font-size:14px;}
        @keyframes marqScroll{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
      </style>
      <div class="marq-wrap">
        <div class="marq-track">
          <span class="marq-item"><span>⚛</span>React</span>
          <span class="marq-item"><span>🔷</span>TypeScript</span>
          <span class="marq-item"><span>✦</span>AURA UI</span>
          <span class="marq-item"><span>🎨</span>Tailwind</span>
          <span class="marq-item"><span>⚡</span>Vite</span>
          <span class="marq-item"><span>🌿</span>Next.js</span>
          <span class="marq-item"><span>🔧</span>Node.js</span>
          <span class="marq-item"><span>⚛</span>React</span>
          <span class="marq-item"><span>🔷</span>TypeScript</span>
          <span class="marq-item"><span>✦</span>AURA UI</span>
          <span class="marq-item"><span>🎨</span>Tailwind</span>
          <span class="marq-item"><span>⚡</span>Vite</span>
          <span class="marq-item"><span>🌿</span>Next.js</span>
          <span class="marq-item"><span>🔧</span>Node.js</span>
        </div>
      </div>`,
    code: `<div class="marq-wrap">
  <div class="marq-track">
    <span class="marq-item"><span>⚛</span>React</span>
    <span class="marq-item"><span>🔷</span>TypeScript</span>
    <span class="marq-item"><span>✦</span>AURA UI</span>
    <span class="marq-item"><span>🎨</span>Tailwind</span>
    <!-- duplicate items for seamless loop -->
    <span class="marq-item"><span>⚛</span>React</span>
    <span class="marq-item"><span>🔷</span>TypeScript</span>
    <span class="marq-item"><span>✦</span>AURA UI</span>
    <span class="marq-item"><span>🎨</span>Tailwind</span>
  </div>
</div>

<style>
.marq-wrap { width: 100%; overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent); mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent); }
.marq-track { display: flex; width: max-content; animation: marqScroll 18s linear infinite; }
.marq-track:hover { animation-play-state: paused; }
.marq-item { display: inline-flex; align-items: center; gap: 8px; padding: 8px 20px; margin: 0 8px; background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.08); border-radius: 50px; font-size: 13px; font-weight: 600; color: rgba(255,255,255,.55); white-space: nowrap; }
@keyframes marqScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
</style>`
  },

  /* ═══════════════════ EXTRA BACKGROUNDS ═══════════════════ */

  {
    id: 'noise-texture',
    title: 'Noise Texture',
    category: 'background',
    tags: ['noise', 'grain', 'texture'],
    desc: 'SVG grain noise overlay for depth and texture.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;height:100vh;overflow:hidden;font-family:Inter,sans-serif;}
        .noise-bg{width:100%;height:100%;position:relative;
          background:linear-gradient(135deg,#0b0f1a 0%,#1a0b3b 100%);
          display:flex;align-items:center;justify-content:center;}
        .noise-bg::after{content:'';position:absolute;inset:0;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
          pointer-events:none;opacity:.45;}
        .noise-card{position:relative;z-index:1;text-align:center;
          padding:28px 36px;background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.1);border-radius:18px;
          backdrop-filter:blur(12px);}
        .noise-card h3{margin:0 0 6px;font-size:20px;font-weight:700;color:#fff;}
        .noise-card p{margin:0;font-size:13px;color:rgba(255,255,255,.4);}
      </style>
      <div class="noise-bg">
        <div class="noise-card"><h3>Noise Texture</h3><p>SVG grain overlay for depth</p></div>
      </div>`,
    code: `<div class="noise-bg">
  <div class="content">Your content</div>
</div>

<style>
.noise-bg {
  position: relative;
  background: linear-gradient(135deg, #0b0f1a 0%, #1a0b3b 100%);
  width: 100%; height: 100vh;
}
.noise-bg::after {
  content: ''; position: absolute; inset: 0; pointer-events: none; opacity: .45;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
}
.content { position: relative; z-index: 1; }
</style>`
  },

  {
    id: 'conic-gradient-bg',
    title: 'Conic Gradient',
    category: 'background',
    tags: ['conic', 'gradient', 'spinning'],
    desc: 'Slowly rotating conic gradient with radial mask.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        body{margin:0;height:100vh;overflow:hidden;font-family:Inter,sans-serif;}
        .conic-bg{width:100%;height:100%;position:relative;background:#030712;
          display:flex;align-items:center;justify-content:center;overflow:hidden;}
        .conic-orb{position:absolute;width:500px;height:500px;border-radius:50%;
          background:conic-gradient(from 0deg,#7c3aed,#2563eb,#06b6d4,#7c3aed);
          filter:blur(80px);opacity:.2;
          animation:conicSpin 12s linear infinite;}
        @keyframes conicSpin{to{transform:rotate(360deg);}}
        .conic-card{position:relative;z-index:1;text-align:center;
          padding:28px 36px;
          background:rgba(3,7,18,.7);
          border:1px solid rgba(255,255,255,.08);border-radius:18px;
          backdrop-filter:blur(16px);}
        .conic-card h3{margin:0 0 6px;font-size:20px;font-weight:700;color:#fff;}
        .conic-card p{margin:0;font-size:13px;color:rgba(255,255,255,.4);}
      </style>
      <div class="conic-bg">
        <div class="conic-orb"></div>
        <div class="conic-card"><h3>Conic Gradient</h3><p>Rotating conic background orb</p></div>
      </div>`,
    code: `<div class="conic-bg">
  <div class="conic-orb"></div>
  <div class="content">Your content</div>
</div>

<style>
.conic-bg { width: 100%; height: 100vh; position: relative; background: #030712; overflow: hidden; }
.conic-orb { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 600px; height: 600px; border-radius: 50%; background: conic-gradient(from 0deg, #7c3aed, #2563eb, #06b6d4, #7c3aed); filter: blur(90px); opacity: .2; animation: conicSpin 12s linear infinite; }
@keyframes conicSpin { to { transform: translate(-50%,-50%) rotate(360deg); } }
.content { position: relative; z-index: 1; }
</style>`
  },

  /* ═══════════════════ EXTRA INPUTS ═══════════════════ */

  {
    id: 'otp-input',
    title: 'OTP Input',
    category: 'input',
    tags: ['otp', 'code', 'verification', 'form'],
    desc: '6-digit OTP boxes with auto-advance focus.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        body{margin:0;display:flex;flex-direction:column;align-items:center;
          justify-content:center;gap:14px;height:100vh;background:#0b0f1a;
          font-family:Inter,sans-serif;}
        .otp-label{font-size:13px;font-weight:600;color:rgba(255,255,255,.4);}
        .otp-row{display:flex;gap:10px;}
        .otp-inp{width:44px;height:52px;text-align:center;font-size:20px;font-weight:800;
          color:#fff;background:#0f1629;
          border:1px solid rgba(255,255,255,.1);border-radius:10px;outline:none;
          transition:all .25s;}
        .otp-inp:focus{border-color:#7c3aed;box-shadow:0 0 0 3px rgba(124,58,237,.2);}
        .otp-inp.filled{border-color:rgba(124,58,237,.4);
          background:rgba(124,58,237,.08);}
      </style>
      <script>
        document.addEventListener('DOMContentLoaded',()=>{
          const inputs=[...document.querySelectorAll('.otp-inp')];
          inputs.forEach((inp,i)=>{
            inp.addEventListener('input',e=>{
              e.target.value=e.target.value.slice(-1);
              if(e.target.value){e.target.classList.add('filled');if(i<inputs.length-1)inputs[i+1].focus();}
              else e.target.classList.remove('filled');
            });
            inp.addEventListener('keydown',e=>{
              if(e.key==='Backspace'&&!e.target.value&&i>0)inputs[i-1].focus();
            });
          });
        });
      </script>
      <div class="otp-label">Enter verification code</div>
      <div class="otp-row">
        <input class="otp-inp" type="text" maxlength="1" inputmode="numeric"/>
        <input class="otp-inp" type="text" maxlength="1" inputmode="numeric"/>
        <input class="otp-inp" type="text" maxlength="1" inputmode="numeric"/>
        <input class="otp-inp" type="text" maxlength="1" inputmode="numeric"/>
        <input class="otp-inp" type="text" maxlength="1" inputmode="numeric"/>
        <input class="otp-inp" type="text" maxlength="1" inputmode="numeric"/>
      </div>`,
    code: `<p>Enter verification code</p>
<div class="otp-row">
  <input class="otp-inp" type="text" maxlength="1" inputmode="numeric" />
  <input class="otp-inp" type="text" maxlength="1" inputmode="numeric" />
  <input class="otp-inp" type="text" maxlength="1" inputmode="numeric" />
  <input class="otp-inp" type="text" maxlength="1" inputmode="numeric" />
  <input class="otp-inp" type="text" maxlength="1" inputmode="numeric" />
  <input class="otp-inp" type="text" maxlength="1" inputmode="numeric" />
</div>

<style>
.otp-row { display: flex; gap: 10px; }
.otp-inp { width: 44px; height: 52px; text-align: center; font-size: 20px; font-weight: 800; color: #fff; background: #0f1629; border: 1px solid rgba(255,255,255,.1); border-radius: 10px; outline: none; transition: all .25s; }
.otp-inp:focus { border-color: #7c3aed; box-shadow: 0 0 0 3px rgba(124,58,237,.2); }
.otp-inp.filled { border-color: rgba(124,58,237,.4); background: rgba(124,58,237,.08); }
</style>

<script>
const inputs = [...document.querySelectorAll('.otp-inp')];
inputs.forEach((inp, i) => {
  inp.addEventListener('input', e => {
    e.target.value = e.target.value.slice(-1);
    if (e.target.value) { e.target.classList.add('filled'); if (i < inputs.length - 1) inputs[i+1].focus(); }
    else e.target.classList.remove('filled');
  });
  inp.addEventListener('keydown', e => {
    if (e.key === 'Backspace' && !e.target.value && i > 0) inputs[i-1].focus();
  });
});
</script>`
  },

  {
    id: 'password-strength',
    title: 'Password Strength',
    category: 'input',
    tags: ['password', 'strength', 'validation', 'form'],
    desc: 'Password input with real-time strength meter.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .pw-group{width:270px;}
        .pw-wrap{position:relative;}
        .pw-input{width:100%;padding:13px 44px 13px 16px;font-size:14px;
          color:#fff;background:#0f1629;
          border:1px solid rgba(255,255,255,.1);border-radius:10px;
          outline:none;box-sizing:border-box;transition:border-color .3s;}
        .pw-input:focus{border-color:#7c3aed;}
        .pw-toggle{position:absolute;right:12px;top:50%;transform:translateY(-50%);
          background:none;border:none;cursor:pointer;font-size:16px;color:rgba(255,255,255,.4);
          transition:color .2s;}
        .pw-toggle:hover{color:rgba(255,255,255,.8);}
        .pw-bars{display:flex;gap:4px;margin-top:8px;}
        .pw-bar{flex:1;height:3px;border-radius:3px;background:rgba(255,255,255,.07);
          transition:background .35s;}
        .pw-label{font-size:11px;font-weight:700;margin-top:5px;color:rgba(255,255,255,.35);transition:color .35s;}
        .str1 .pw-bar:nth-child(1){background:#f43f5e;}
        .str2 .pw-bar:nth-child(1),.str2 .pw-bar:nth-child(2){background:#f59e0b;}
        .str3 .pw-bar:nth-child(1),.str3 .pw-bar:nth-child(2),.str3 .pw-bar:nth-child(3){background:#10b981;}
        .str4 .pw-bar{background:linear-gradient(90deg,#7c3aed,#06b6d4);}
        .str1 .pw-label{color:#f43f5e;} .str2 .pw-label{color:#f59e0b;}
        .str3 .pw-label{color:#10b981;} .str4 .pw-label{color:#a78bfa;}
      </style>
      <script>
        function scorePassword(v){
          if(v.length<4)return 0;
          let s=0;
          if(v.length>=8)s++;if(/[A-Z]/.test(v))s++;
          if(/[0-9]/.test(v))s++;if(/[^A-Za-z0-9]/.test(v))s++;
          return s;
        }
        function onPwInput(e){
          const val=e.target.value,score=val?scorePassword(val):0;
          const wrap=document.getElementById('pwGroup');
          const lbl=document.getElementById('pwLbl');
          wrap.className='pw-group'+(score?(' str'+score):'');
          const labels=['','Weak','Fair','Good','Strong'];
          lbl.textContent=val?(labels[score]||''):'';
        }
        function togglePw(){
          const inp=document.getElementById('pwInp');
          inp.type=inp.type==='password'?'text':'password';
        }
      </script>
      <div class="pw-group" id="pwGroup">
        <div class="pw-wrap">
          <input class="pw-input" type="password" placeholder="Enter password" id="pwInp" oninput="onPwInput(event)"/>
          <button class="pw-toggle" onclick="togglePw()" type="button">👁</button>
        </div>
        <div class="pw-bars">
          <div class="pw-bar"></div><div class="pw-bar"></div>
          <div class="pw-bar"></div><div class="pw-bar"></div>
        </div>
        <div class="pw-label" id="pwLbl"></div>
      </div>`,
    code: `<div class="pw-group" id="pwGroup">
  <div class="pw-wrap">
    <input class="pw-input" type="password" placeholder="Enter password" id="pwInp" oninput="onPwInput(event)" />
    <button class="pw-toggle" onclick="togglePw()" type="button">👁</button>
  </div>
  <div class="pw-bars">
    <div class="pw-bar"></div><div class="pw-bar"></div>
    <div class="pw-bar"></div><div class="pw-bar"></div>
  </div>
  <div class="pw-label" id="pwLbl"></div>
</div>

<style>
.pw-group { width: 300px; }
.pw-wrap { position: relative; }
.pw-input { width: 100%; padding: 13px 44px 13px 16px; font-size: 14px; color: #fff; background: #0f1629; border: 1px solid rgba(255,255,255,.1); border-radius: 10px; outline: none; box-sizing: border-box; transition: border-color .3s; }
.pw-input:focus { border-color: #7c3aed; }
.pw-toggle { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; font-size: 16px; color: rgba(255,255,255,.4); }
.pw-bars { display: flex; gap: 4px; margin-top: 8px; }
.pw-bar { flex: 1; height: 3px; border-radius: 3px; background: rgba(255,255,255,.07); transition: background .35s; }
.pw-label { font-size: 11px; font-weight: 700; margin-top: 5px; color: rgba(255,255,255,.35); }
.str1 .pw-bar:nth-child(1) { background: #f43f5e; }
.str2 .pw-bar:nth-child(-n+2) { background: #f59e0b; }
.str3 .pw-bar:nth-child(-n+3) { background: #10b981; }
.str4 .pw-bar { background: linear-gradient(90deg,#7c3aed,#06b6d4); }
.str1 .pw-label { color: #f43f5e; } .str2 .pw-label { color: #f59e0b; }
.str3 .pw-label { color: #10b981; } .str4 .pw-label { color: #a78bfa; }
</style>

<script>
function scorePassword(v) {
  if (v.length < 4) return 0;
  let s = 0;
  if (v.length >= 8) s++; if (/[A-Z]/.test(v)) s++;
  if (/[0-9]/.test(v)) s++; if (/[^A-Za-z0-9]/.test(v)) s++;
  return s;
}
function onPwInput(e) {
  const val = e.target.value, score = val ? scorePassword(val) : 0;
  document.getElementById('pwGroup').className = 'pw-group' + (score ? ' str' + score : '');
  const labels = ['','Weak','Fair','Good','Strong'];
  document.getElementById('pwLbl').textContent = val ? (labels[score] || '') : '';
}
function togglePw() {
  const inp = document.getElementById('pwInp');
  inp.type = inp.type === 'password' ? 'text' : 'password';
}
</script>`
  },

  {
    id: 'range-slider',
    title: 'Styled Range Slider',
    category: 'input',
    tags: ['range', 'slider', 'input', 'custom'],
    desc: 'Custom gradient range slider with a live value bubble.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;flex-direction:column;align-items:center;
          justify-content:center;gap:24px;height:100vh;background:#0b0f1a;
          font-family:Inter,sans-serif;}
        .slider-wrap{width:260px;}
        .slider-header{display:flex;justify-content:space-between;margin-bottom:12px;}
        .slider-label{font-size:13px;font-weight:600;color:rgba(255,255,255,.55);}
        .slider-val{font-size:14px;font-weight:800;color:#a78bfa;}
        input[type=range].aura-range{width:100%;-webkit-appearance:none;height:5px;
          border-radius:5px;outline:none;cursor:pointer;
          background:linear-gradient(90deg,#7c3aed var(--pct,50%),rgba(255,255,255,.1) var(--pct,50%));}
        input[type=range].aura-range::-webkit-slider-thumb{-webkit-appearance:none;
          width:18px;height:18px;border-radius:50%;
          background:linear-gradient(135deg,#a78bfa,#7c3aed);
          border:2px solid #0b0f1a;cursor:pointer;box-shadow:0 0 8px rgba(124,58,237,.6);
          transition:box-shadow .2s;}
        input[type=range].aura-range::-webkit-slider-thumb:hover{box-shadow:0 0 16px rgba(124,58,237,.9);}
        input[type=range].aura-range::-moz-range-thumb{width:18px;height:18px;border-radius:50%;
          background:linear-gradient(135deg,#a78bfa,#7c3aed);border:2px solid #0b0f1a;cursor:pointer;}
      </style>
      <script>
        function updateSlider(el){
          const pct=(el.value-el.min)/(el.max-el.min)*100;
          el.style.setProperty('--pct',pct+'%');
          document.getElementById('slVal').textContent=el.value+'%';
        }
      </script>
      <div class="slider-wrap">
        <div class="slider-header">
          <span class="slider-label">Opacity</span>
          <span class="slider-val" id="slVal">50%</span>
        </div>
        <input type="range" class="aura-range" min="0" max="100" value="50" oninput="updateSlider(this)"/>
      </div>`,
    code: `<div class="slider-wrap">
  <div class="slider-header">
    <span class="slider-label">Opacity</span>
    <span class="slider-val" id="slVal">50%</span>
  </div>
  <input type="range" class="aura-range" min="0" max="100" value="50" oninput="updateSlider(this)" />
</div>

<style>
.slider-wrap { width: 100%; max-width: 320px; }
.slider-header { display: flex; justify-content: space-between; margin-bottom: 10px; }
.slider-label { font-size: 13px; font-weight: 600; color: rgba(255,255,255,.55); }
.slider-val { font-size: 14px; font-weight: 800; color: #a78bfa; }
input[type=range].aura-range { width: 100%; -webkit-appearance: none; height: 5px; border-radius: 5px; outline: none; cursor: pointer; background: linear-gradient(90deg, #7c3aed var(--pct, 50%), rgba(255,255,255,.1) var(--pct, 50%)); }
input[type=range].aura-range::-webkit-slider-thumb { -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%; background: linear-gradient(135deg,#a78bfa,#7c3aed); border: 2px solid #0b0f1a; cursor: pointer; box-shadow: 0 0 8px rgba(124,58,237,.6); }
</style>

<script>
function updateSlider(el) {
  const pct = (el.value - el.min) / (el.max - el.min) * 100;
  el.style.setProperty('--pct', pct + '%');
  document.getElementById('slVal').textContent = el.value + '%';
}
</script>`
  },

  /* ═══════════════════ EXTRA BADGES / MISC ═══════════════════ */

  {
    id: 'notification-badge',
    title: 'Notification Badge',
    category: 'badge',
    tags: ['badge', 'count', 'notification', 'icon'],
    desc: 'Bell or icon with animated count badge overlay.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;gap:28px;background:#0b0f1a;font-family:Inter,sans-serif;}
        .nb-wrap{position:relative;display:inline-flex;}
        .nb-icon{width:46px;height:46px;border-radius:12px;
          background:#131d33;border:1px solid rgba(255,255,255,.08);
          display:flex;align-items:center;justify-content:center;font-size:20px;
          cursor:pointer;transition:background .2s;}
        .nb-icon:hover{background:rgba(124,58,237,.15);}
        .nb-count{position:absolute;top:-6px;right:-6px;
          min-width:18px;height:18px;border-radius:50px;
          background:#f43f5e;border:2px solid #0b0f1a;
          font-size:10px;font-weight:800;color:#fff;
          display:flex;align-items:center;justify-content:center;
          padding:0 4px;
          animation:nbPop .4s cubic-bezier(.34,1.56,.64,1);}
        .nb-dot{position:absolute;top:-4px;right:-4px;
          width:10px;height:10px;border-radius:50%;
          background:#10b981;border:2px solid #0b0f1a;
          animation:dotPls 2s ease-in-out infinite;}
        @keyframes nbPop{from{transform:scale(0);}to{transform:scale(1);}}
        @keyframes dotPls{0%,100%{transform:scale(1);}50%{transform:scale(1.4);}}
      </style>
      <div class="nb-wrap"><div class="nb-icon">🔔</div><span class="nb-count">12</span></div>
      <div class="nb-wrap"><div class="nb-icon">✉</div><span class="nb-count">5</span></div>
      <div class="nb-wrap"><div class="nb-icon">👤</div><span class="nb-dot"></span></div>`,
    code: `<div class="nb-wrap">
  <div class="nb-icon">🔔</div>
  <span class="nb-count">12</span>
</div>
<div class="nb-wrap">
  <div class="nb-icon">👤</div>
  <span class="nb-dot"></span>
</div>

<style>
.nb-wrap { position: relative; display: inline-flex; }
.nb-icon { width: 46px; height: 46px; border-radius: 12px; background: #131d33; border: 1px solid rgba(255,255,255,.08); display: flex; align-items: center; justify-content: center; font-size: 20px; cursor: pointer; }
.nb-count { position: absolute; top: -6px; right: -6px; min-width: 18px; height: 18px; border-radius: 50px; background: #f43f5e; border: 2px solid #0b0f1a; font-size: 10px; font-weight: 800; color: #fff; display: flex; align-items: center; justify-content: center; padding: 0 4px; animation: nbPop .4s cubic-bezier(.34,1.56,.64,1); }
.nb-dot { position: absolute; top: -4px; right: -4px; width: 10px; height: 10px; border-radius: 50%; background: #10b981; border: 2px solid #0b0f1a; animation: dotPls 2s ease-in-out infinite; }
@keyframes nbPop { from { transform: scale(0); } to { transform: scale(1); } }
@keyframes dotPls { 0%,100% { transform: scale(1); } 50% { transform: scale(1.4); } }
</style>`
  },

  {
    id: 'progress-badge',
    title: 'Progress Badge',
    category: 'badge',
    tags: ['progress', 'circular', 'percentage'],
    desc: 'Circular SVG progress ring with percentage label.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;gap:28px;background:#0b0f1a;font-family:Inter,sans-serif;}
        .prog-ring{position:relative;width:80px;height:80px;display:inline-flex;
          align-items:center;justify-content:center;}
        .prog-ring svg{position:absolute;top:0;left:0;transform:rotate(-90deg);}
        .prog-track{fill:none;stroke:rgba(255,255,255,.06);stroke-width:5;}
        .prog-fill{fill:none;stroke-width:5;stroke-linecap:round;
          stroke-dasharray:219.9;
          transition:stroke-dashoffset .8s cubic-bezier(.16,1,.3,1);}
        .prog-v{background:linear-gradient(135deg,#7c3aed,#a78bfa);}
        .prog-g{background:linear-gradient(135deg,#10b981,#34d399);}
        .prog-b{background:linear-gradient(135deg,#2563eb,#60a5fa);}
        .prog-lbl{font-size:16px;font-weight:900;color:#fff;position:relative;z-index:1;}
        .prog-name{font-size:11px;font-weight:700;text-transform:uppercase;
          letter-spacing:.07em;color:rgba(255,255,255,.35);margin-top:6px;text-align:center;}
      </style>
      <script>
        document.addEventListener('DOMContentLoaded',()=>{
          document.querySelectorAll('.prog-fill').forEach(el=>{
            const pct=parseFloat(el.dataset.pct||0);
            el.style.strokeDashoffset=219.9*(1-pct/100);
          });
        });
      </script>
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
        <div class="prog-ring">
          <svg viewBox="0 0 72 72" width="80" height="80">
            <circle class="prog-track" cx="36" cy="36" r="35"/>
            <circle class="prog-fill" cx="36" cy="36" r="35" data-pct="78" stroke="url(#gv)" style="stroke-dashoffset:48.4;"/>
            <defs><linearGradient id="gv" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient></defs>
          </svg>
          <span class="prog-lbl">78%</span>
        </div>
        <span class="prog-name">Design</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
        <div class="prog-ring">
          <svg viewBox="0 0 72 72" width="80" height="80">
            <circle class="prog-track" cx="36" cy="36" r="35"/>
            <circle class="prog-fill" cx="36" cy="36" r="35" stroke="url(#gg)" style="stroke-dashoffset:32.9;"/>
            <defs><linearGradient id="gg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#34d399"/></linearGradient></defs>
          </svg>
          <span class="prog-lbl">85%</span>
        </div>
        <span class="prog-name">Dev</span>
      </div>`,
    code: `<div class="prog-ring">
  <svg viewBox="0 0 72 72" width="80" height="80">
    <circle class="prog-track" cx="36" cy="36" r="35"/>
    <circle class="prog-fill" cx="36" cy="36" r="35" data-pct="78"
      stroke="url(#gv)" style="stroke-dashoffset:48.4"/>
    <defs>
      <linearGradient id="gv" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#7c3aed"/>
        <stop offset="100%" stop-color="#a78bfa"/>
      </linearGradient>
    </defs>
  </svg>
  <span class="prog-lbl">78%</span>
</div>

<style>
.prog-ring { position: relative; width: 80px; height: 80px; display: inline-flex; align-items: center; justify-content: center; }
.prog-ring svg { position: absolute; top: 0; left: 0; transform: rotate(-90deg); }
.prog-track { fill: none; stroke: rgba(255,255,255,.06); stroke-width: 5; }
.prog-fill { fill: none; stroke-width: 5; stroke-linecap: round; stroke-dasharray: 219.9; transition: stroke-dashoffset .8s cubic-bezier(.16,1,.3,1); }
.prog-lbl { font-size: 16px; font-weight: 900; color: #fff; position: relative; z-index: 1; }
</style>`
  },

  {
    id: 'toggle-switch',
    title: 'Toggle Switch',
    category: 'input',
    tags: ['toggle', 'switch', 'boolean', 'form'],
    desc: 'Smooth animated toggle switch with three size variants.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;gap:24px;background:#0b0f1a;font-family:Inter,sans-serif;
          flex-direction:column;}
        .tog-row{display:flex;align-items:center;gap:14px;}
        .tog-lbl{font-size:13px;font-weight:600;color:rgba(255,255,255,.55);}
        .toggle{position:relative;display:inline-block;width:48px;height:26px;}
        .toggle input{opacity:0;width:0;height:0;}
        .tog-sl{position:absolute;cursor:pointer;inset:0;
          background:rgba(255,255,255,.08);border-radius:26px;
          border:1px solid rgba(255,255,255,.12);
          transition:background .3s,border-color .3s;}
        .tog-sl::before{content:'';position:absolute;height:18px;width:18px;
          left:3px;bottom:3px;border-radius:50%;background:#fff;
          transition:transform .3s cubic-bezier(.34,1.56,.64,1),background .3s;}
        input:checked~.tog-sl{background:linear-gradient(135deg,#7c3aed,#2563eb);
          border-color:transparent;}
        input:checked~.tog-sl::before{transform:translateX(22px);}
      </style>
      <div class="tog-row">
        <span class="tog-lbl">Dark Mode</span>
        <label class="toggle"><input type="checkbox" checked/><span class="tog-sl"></span></label>
      </div>
      <div class="tog-row">
        <span class="tog-lbl">Notifications</span>
        <label class="toggle"><input type="checkbox"/><span class="tog-sl"></span></label>
      </div>
      <div class="tog-row">
        <span class="tog-lbl">Auto-Save</span>
        <label class="toggle"><input type="checkbox" checked/><span class="tog-sl"></span></label>
      </div>`,
    code: `<div class="tog-row">
  <span class="tog-lbl">Dark Mode</span>
  <label class="toggle">
    <input type="checkbox" checked />
    <span class="tog-sl"></span>
  </label>
</div>

<style>
.tog-row { display: flex; align-items: center; gap: 14px; }
.tog-lbl { font-size: 13px; font-weight: 600; color: rgba(255,255,255,.55); }
.toggle { position: relative; display: inline-block; width: 48px; height: 26px; }
.toggle input { opacity: 0; width: 0; height: 0; }
.tog-sl { position: absolute; cursor: pointer; inset: 0; background: rgba(255,255,255,.08); border-radius: 26px; border: 1px solid rgba(255,255,255,.12); transition: background .3s, border-color .3s; }
.tog-sl::before { content: ''; position: absolute; height: 18px; width: 18px; left: 3px; bottom: 3px; border-radius: 50%; background: #fff; transition: transform .3s cubic-bezier(.34,1.56,.64,1); }
input:checked ~ .tog-sl { background: linear-gradient(135deg, #7c3aed, #2563eb); border-color: transparent; }
input:checked ~ .tog-sl::before { transform: translateX(22px); }
</style>`
  },

  /* ─────────────────────── ONBOARDING / SAAS FLOWS ─────────────────────── */

  {
    id: 'onboarding-stepper',
    title: 'Onboarding Stepper',
    category: 'onboarding',
    tags: ['stepper', 'wizard', 'progress', 'multi-step'],
    desc: 'Multi-step onboarding wizard with active, complete and upcoming states.',
    featured: true,
    isNew: true,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .stepper{width:320px;}
        .step-row{display:flex;align-items:flex-start;gap:14px;margin-bottom:0;}
        .step-left{display:flex;flex-direction:column;align-items:center;gap:0;}
        .step-circle{width:36px;height:36px;border-radius:50%;display:flex;
          align-items:center;justify-content:center;font-size:13px;font-weight:800;
          flex-shrink:0;transition:all .3s ease;}
        .step-circle.done{background:linear-gradient(135deg,#10b981,#059669);color:#fff;}
        .step-circle.active{background:linear-gradient(135deg,#7c3aed,#2563eb);color:#fff;
          box-shadow:0 0 20px rgba(124,58,237,.4);}
        .step-circle.pending{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.3);}
        .step-line{width:2px;flex:1;min-height:24px;margin:4px 0;border-radius:2px;}
        .step-line.done{background:linear-gradient(to bottom,#10b981,#7c3aed);}
        .step-line.pending{background:rgba(255,255,255,.07);}
        .step-body{padding:4px 0 24px;}
        .step-title{font-size:14px;font-weight:700;color:#fff;margin-bottom:3px;}
        .step-title.done{color:rgba(255,255,255,.5);}
        .step-title.active{color:#fff;}
        .step-title.pending{color:rgba(255,255,255,.3);}
        .step-desc{font-size:12px;color:rgba(255,255,255,.4);line-height:1.5;}
        .step-active-card{background:rgba(124,58,237,.08);border:1px solid rgba(124,58,237,.2);
          border-radius:10px;padding:12px 14px;margin-top:8px;}
        .step-active-card p{font-size:12px;color:rgba(255,255,255,.55);margin:0 0 10px;}
        .step-btn{padding:7px 18px;font-size:12px;font-weight:700;
          background:linear-gradient(135deg,#7c3aed,#2563eb);
          border:none;border-radius:6px;color:#fff;cursor:pointer;transition:opacity .2s;}
        .step-btn:hover{opacity:.85;}
      </style>
      <div class="stepper">
        <div class="step-row">
          <div class="step-left">
            <div class="step-circle done">✓</div>
            <div class="step-line done"></div>
          </div>
          <div class="step-body"><div class="step-title done">Create account</div><div class="step-desc">Your profile is set up</div></div>
        </div>
        <div class="step-row">
          <div class="step-left">
            <div class="step-circle active">2</div>
            <div class="step-line pending"></div>
          </div>
          <div class="step-body">
            <div class="step-title active">Connect workspace</div>
            <div class="step-active-card"><p>Invite your team or connect your existing tools to get started.</p><button class="step-btn">Continue →</button></div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-left"><div class="step-circle pending">3</div></div>
          <div class="step-body"><div class="step-title pending">Launch project</div><div class="step-desc">Start building something great</div></div>
        </div>
      </div>`,
    code: `<div class="stepper">
  <div class="step-row">
    <div class="step-left">
      <div class="step-circle done">✓</div>
      <div class="step-line done"></div>
    </div>
    <div class="step-body">
      <div class="step-title done">Create account</div>
      <div class="step-desc">Your profile is set up</div>
    </div>
  </div>
  <div class="step-row">
    <div class="step-left">
      <div class="step-circle active">2</div>
      <div class="step-line pending"></div>
    </div>
    <div class="step-body">
      <div class="step-title active">Connect workspace</div>
      <div class="step-active-card">
        <p>Invite your team or connect your existing tools.</p>
        <button class="step-btn">Continue →</button>
      </div>
    </div>
  </div>
  <div class="step-row">
    <div class="step-left"><div class="step-circle pending">3</div></div>
    <div class="step-body">
      <div class="step-title pending">Launch project</div>
    </div>
  </div>
</div>

<style>
.stepper { width: 320px; }
.step-row { display: flex; align-items: flex-start; gap: 14px; }
.step-left { display: flex; flex-direction: column; align-items: center; }
.step-circle {
  width: 36px; height: 36px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 800; flex-shrink: 0;
}
.step-circle.done   { background: linear-gradient(135deg,#10b981,#059669); color: #fff; }
.step-circle.active { background: linear-gradient(135deg,#7c3aed,#2563eb); color: #fff; box-shadow: 0 0 20px rgba(124,58,237,.4); }
.step-circle.pending{ background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); color: rgba(255,255,255,.3); }
.step-line { width: 2px; flex: 1; min-height: 24px; margin: 4px 0; border-radius: 2px; }
.step-line.done    { background: linear-gradient(to bottom,#10b981,#7c3aed); }
.step-line.pending { background: rgba(255,255,255,.07); }
.step-body { padding: 4px 0 24px; }
.step-title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 3px; }
.step-title.done    { color: rgba(255,255,255,.5); }
.step-title.pending { color: rgba(255,255,255,.3); }
.step-active-card { background: rgba(124,58,237,.08); border: 1px solid rgba(124,58,237,.2); border-radius: 10px; padding: 12px 14px; margin-top: 8px; }
.step-btn { padding: 7px 18px; font-size: 12px; font-weight: 700; background: linear-gradient(135deg,#7c3aed,#2563eb); border: none; border-radius: 6px; color: #fff; cursor: pointer; }
</style>`
  },

  {
    id: 'onboarding-checklist',
    title: 'Activation Checklist',
    category: 'onboarding',
    tags: ['checklist', 'gamification', 'activation', 'progress'],
    desc: 'Gamified onboarding checklist with animated completion and progress bar.',
    featured: true,
    isNew: true,
    preview: `
      <style>
        @media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;}}
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .checklist{width:300px;background:#0f1629;border:1px solid rgba(255,255,255,.07);
          border-radius:16px;padding:20px;}
        .cl-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;}
        .cl-title{font-size:14px;font-weight:800;color:#fff;}
        .cl-pct{font-size:12px;font-weight:700;color:#a78bfa;}
        .cl-bar-wrap{height:4px;background:rgba(255,255,255,.06);border-radius:4px;margin-bottom:16px;}
        .cl-bar{height:100%;width:60%;background:linear-gradient(90deg,#7c3aed,#2563eb);border-radius:4px;
          transition:width .6s cubic-bezier(.34,1.56,.64,1);}
        .cl-item{display:flex;align-items:center;gap:12px;padding:10px 0;
          border-bottom:1px solid rgba(255,255,255,.04);cursor:pointer;}
        .cl-item:last-child{border-bottom:none;}
        .cl-check{width:20px;height:20px;border-radius:50%;flex-shrink:0;display:flex;
          align-items:center;justify-content:center;font-size:11px;transition:all .3s ease;}
        .cl-check.done{background:linear-gradient(135deg,#10b981,#059669);color:#fff;}
        .cl-check.todo{border:2px solid rgba(255,255,255,.15);background:transparent;}
        .cl-check.todo:hover{border-color:#7c3aed;}
        .cl-label{font-size:13px;font-weight:600;transition:all .2s;}
        .cl-label.done{color:rgba(255,255,255,.35);text-decoration:line-through;}
        .cl-label.todo{color:rgba(255,255,255,.75);}
        .cl-pts{margin-left:auto;font-size:10px;font-weight:700;
          color:#a78bfa;background:rgba(124,58,237,.12);padding:2px 7px;border-radius:50px;}
      </style>
      <div class="checklist">
        <div class="cl-header"><span class="cl-title">🚀 Get Started</span><span class="cl-pct">3/5 done</span></div>
        <div class="cl-bar-wrap"><div class="cl-bar"></div></div>
        <div class="cl-item"><div class="cl-check done">✓</div><span class="cl-label done">Create your account</span><span class="cl-pts">+10</span></div>
        <div class="cl-item"><div class="cl-check done">✓</div><span class="cl-label done">Complete your profile</span><span class="cl-pts">+20</span></div>
        <div class="cl-item"><div class="cl-check done">✓</div><span class="cl-label done">Add your first project</span><span class="cl-pts">+30</span></div>
        <div class="cl-item"><div class="cl-check todo"></div><span class="cl-label todo">Invite a team member</span><span class="cl-pts">+25</span></div>
        <div class="cl-item"><div class="cl-check todo"></div><span class="cl-label todo">Connect an integration</span><span class="cl-pts">+40</span></div>
      </div>`,
    code: `<div class="checklist">
  <div class="cl-header">
    <span class="cl-title">🚀 Get Started</span>
    <span class="cl-pct" id="cl-pct">0/5 done</span>
  </div>
  <div class="cl-bar-wrap"><div class="cl-bar" id="cl-bar"></div></div>
  <div class="cl-item" data-done="true">
    <div class="cl-check done">✓</div>
    <span class="cl-label done">Create your account</span>
    <span class="cl-pts">+10</span>
  </div>
  <div class="cl-item" data-done="false">
    <div class="cl-check todo"></div>
    <span class="cl-label todo">Invite a team member</span>
    <span class="cl-pts">+25</span>
  </div>
</div>

<style>
.checklist { width: 300px; background: #0f1629; border: 1px solid rgba(255,255,255,.07); border-radius: 16px; padding: 20px; }
.cl-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
.cl-title { font-size: 14px; font-weight: 800; color: #fff; }
.cl-pct { font-size: 12px; font-weight: 700; color: #a78bfa; }
.cl-bar-wrap { height: 4px; background: rgba(255,255,255,.06); border-radius: 4px; margin-bottom: 16px; }
.cl-bar { height: 100%; background: linear-gradient(90deg,#7c3aed,#2563eb); border-radius: 4px; transition: width .6s cubic-bezier(.34,1.56,.64,1); }
.cl-item { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,.04); cursor: pointer; }
.cl-check { width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 11px; }
.cl-check.done { background: linear-gradient(135deg,#10b981,#059669); color: #fff; }
.cl-check.todo { border: 2px solid rgba(255,255,255,.15); }
.cl-label.done { color: rgba(255,255,255,.35); text-decoration: line-through; }
.cl-label.todo { color: rgba(255,255,255,.75); font-size: 13px; font-weight: 600; }
.cl-pts { margin-left: auto; font-size: 10px; font-weight: 700; color: #a78bfa; background: rgba(124,58,237,.12); padding: 2px 7px; border-radius: 50px; }
</style>`
  },

  {
    id: 'welcome-modal',
    title: 'Welcome Modal',
    category: 'onboarding',
    tags: ['modal', 'welcome', 'first-run', 'dialog'],
    desc: 'Branded first-run welcome dialog with animated entry and feature highlights.',
    featured: true,
    isNew: true,
    preview: `
      <style>
        @media(prefers-reduced-motion:reduce){*{animation:none!important;}}
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:rgba(5,8,16,.85);font-family:Inter,sans-serif;
          backdrop-filter:blur(4px);}
        @keyframes modalIn{from{opacity:0;transform:scale(.92) translateY(16px);}to{opacity:1;transform:scale(1) translateY(0);}}
        .wm{width:320px;background:#0f1629;border:1px solid rgba(255,255,255,.09);
          border-radius:20px;overflow:hidden;animation:modalIn .4s cubic-bezier(.34,1.56,.64,1) forwards;}
        .wm-cover{height:100px;background:linear-gradient(135deg,#7c3aed,#2563eb,#06b6d4);
          display:flex;align-items:center;justify-content:center;position:relative;}
        .wm-logo{width:52px;height:52px;border-radius:14px;background:rgba(255,255,255,.15);
          backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;
          font-size:24px;border:1px solid rgba(255,255,255,.2);}
        .wm-body{padding:20px 22px;}
        .wm h2{font-size:18px;font-weight:900;color:#fff;margin-bottom:6px;}
        .wm p{font-size:13px;color:rgba(255,255,255,.55);line-height:1.6;margin-bottom:16px;}
        .wm-feats{display:flex;flex-direction:column;gap:8px;margin-bottom:18px;}
        .wm-feat{display:flex;gap:10px;align-items:center;}
        .wm-feat-icon{width:28px;height:28px;border-radius:8px;
          background:rgba(124,58,237,.15);border:1px solid rgba(124,58,237,.2);
          display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;}
        .wm-feat-text{font-size:12px;font-weight:600;color:rgba(255,255,255,.7);}
        .wm-actions{display:flex;gap:8px;}
        .wm-btn-primary{flex:1;padding:10px;background:linear-gradient(135deg,#7c3aed,#2563eb);
          border:none;border-radius:10px;color:#fff;font-size:13px;font-weight:700;cursor:pointer;}
        .wm-btn-skip{padding:10px 14px;background:transparent;border:1px solid rgba(255,255,255,.1);
          border-radius:10px;color:rgba(255,255,255,.45);font-size:12px;cursor:pointer;}
        .wm-btn-skip:hover{color:rgba(255,255,255,.7);}
      </style>
      <div class="wm">
        <div class="wm-cover"><div class="wm-logo">✦</div></div>
        <div class="wm-body">
          <h2>Welcome to AURA ✨</h2>
          <p>You're all set! Here's what you can do right away.</p>
          <div class="wm-feats">
            <div class="wm-feat"><div class="wm-feat-icon">⚡</div><span class="wm-feat-text">Browse 100+ production-ready components</span></div>
            <div class="wm-feat"><div class="wm-feat-icon">📋</div><span class="wm-feat-text">Copy code with one click — no setup needed</span></div>
            <div class="wm-feat"><div class="wm-feat-icon">🎨</div><span class="wm-feat-text">Dark & light theme support built-in</span></div>
          </div>
          <div class="wm-actions">
            <button class="wm-btn-primary">Get Started →</button>
            <button class="wm-btn-skip">Skip</button>
          </div>
        </div>
      </div>`,
    code: `<!-- Welcome Modal -->
<div class="modal-backdrop" id="welcomeModal" role="dialog" aria-modal="true" aria-labelledby="wm-title">
  <div class="wm">
    <div class="wm-cover">
      <div class="wm-logo" aria-hidden="true">✦</div>
    </div>
    <div class="wm-body">
      <h2 id="wm-title">Welcome to AURA ✨</h2>
      <p>You're all set! Here's what you can do right away.</p>
      <div class="wm-feats">
        <div class="wm-feat"><div class="wm-feat-icon">⚡</div><span>Browse 100+ production-ready components</span></div>
        <div class="wm-feat"><div class="wm-feat-icon">📋</div><span>Copy code with one click</span></div>
        <div class="wm-feat"><div class="wm-feat-icon">🎨</div><span>Dark & light themes built-in</span></div>
      </div>
      <div class="wm-actions">
        <button class="wm-btn-primary" onclick="document.getElementById('welcomeModal').style.display='none'">Get Started →</button>
        <button class="wm-btn-skip"   onclick="document.getElementById('welcomeModal').style.display='none'">Skip</button>
      </div>
    </div>
  </div>
</div>

<style>
@keyframes modalIn { from { opacity:0; transform: scale(.92) translateY(16px); } to { opacity:1; transform: scale(1) translateY(0); } }
@media (prefers-reduced-motion: reduce) { .wm { animation: none; } }
.modal-backdrop { position: fixed; inset: 0; background: rgba(5,8,16,.85); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 2000; }
.wm { width: 340px; background: #0f1629; border: 1px solid rgba(255,255,255,.09); border-radius: 20px; overflow: hidden; animation: modalIn .4s cubic-bezier(.34,1.56,.64,1) forwards; }
.wm-cover { height: 100px; background: linear-gradient(135deg,#7c3aed,#2563eb,#06b6d4); display: flex; align-items: center; justify-content: center; }
.wm-logo { width: 52px; height: 52px; border-radius: 14px; background: rgba(255,255,255,.15); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; font-size: 24px; border: 1px solid rgba(255,255,255,.2); }
.wm-body { padding: 20px 22px; }
.wm h2 { font-size: 18px; font-weight: 900; color: #fff; margin-bottom: 6px; }
.wm p { font-size: 13px; color: rgba(255,255,255,.55); line-height: 1.6; margin-bottom: 16px; }
.wm-feats { display: flex; flex-direction: column; gap: 8px; margin-bottom: 18px; }
.wm-feat { display: flex; gap: 10px; align-items: center; font-size: 12px; font-weight: 600; color: rgba(255,255,255,.7); }
.wm-feat-icon { width: 28px; height: 28px; border-radius: 8px; background: rgba(124,58,237,.15); border: 1px solid rgba(124,58,237,.2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.wm-actions { display: flex; gap: 8px; }
.wm-btn-primary { flex: 1; padding: 10px; background: linear-gradient(135deg,#7c3aed,#2563eb); border: none; border-radius: 10px; color: #fff; font-size: 13px; font-weight: 700; cursor: pointer; }
.wm-btn-skip { padding: 10px 14px; background: transparent; border: 1px solid rgba(255,255,255,.1); border-radius: 10px; color: rgba(255,255,255,.45); font-size: 12px; cursor: pointer; }
</style>`
  },

  {
    id: 'progress-ring',
    title: 'Progress Ring',
    category: 'onboarding',
    tags: ['progress', 'circular', 'svg', 'animated'],
    desc: 'Circular SVG progress ring with animated fill and centre counter.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        @media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;}}
        body{margin:0;display:flex;align-items:center;justify-content:center;gap:32px;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;flex-wrap:wrap;}
        .ring-wrap{display:flex;flex-direction:column;align-items:center;gap:10px;}
        .ring-svg{transform:rotate(-90deg);}
        .ring-track{fill:none;stroke:rgba(255,255,255,.06);stroke-width:8;}
        .ring-fill{fill:none;stroke-width:8;stroke-linecap:round;
          stroke-dasharray:220;stroke-dashoffset:220;
          transition:stroke-dashoffset 1.4s cubic-bezier(.34,1.56,.64,1);}
        .ring-fill.violet{stroke:url(#rg1);}
        .ring-fill.cyan{stroke:url(#rg2);}
        .ring-fill.green{stroke:url(#rg3);}
        .ring-label{font-size:22px;font-weight:900;color:#fff;text-anchor:middle;dominant-baseline:central;transform:rotate(90deg);}
        .ring-sub{font-size:10px;font-weight:600;color:rgba(255,255,255,.4);text-anchor:middle;dominant-baseline:central;transform:rotate(90deg);y:14;}
        .ring-name{font-size:12px;font-weight:600;color:rgba(255,255,255,.5);}
      </style>
      <script>
        document.addEventListener('DOMContentLoaded',()=>{
          document.querySelectorAll('.ring-fill').forEach(el=>{
            const pct=parseFloat(el.dataset.pct)||0;
            const offset=220-(220*(pct/100));
            setTimeout(()=>{el.style.strokeDashoffset=offset;},200);
          });
        });
      </script>
      <div class="ring-wrap">
        <svg class="ring-svg" width="90" height="90" viewBox="0 0 90 90">
          <defs>
            <linearGradient id="rg1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#2563eb"/>
            </linearGradient>
          </defs>
          <circle class="ring-track" cx="45" cy="45" r="35"/>
          <circle class="ring-fill violet" cx="45" cy="45" r="35" data-pct="72"/>
          <text class="ring-label" x="45" y="42">72%</text>
          <text class="ring-sub" x="45" y="58" font-size="10" fill="rgba(255,255,255,.4)" text-anchor="middle" transform="rotate(90,45,45)">Tasks</text>
        </svg>
        <span class="ring-name">Completion</span>
      </div>
      <div class="ring-wrap">
        <svg class="ring-svg" width="90" height="90" viewBox="0 0 90 90">
          <defs>
            <linearGradient id="rg3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/>
            </linearGradient>
          </defs>
          <circle class="ring-track" cx="45" cy="45" r="35"/>
          <circle class="ring-fill green" cx="45" cy="45" r="35" data-pct="45"/>
          <text class="ring-label" x="45" y="42">45%</text>
        </svg>
        <span class="ring-name">Health</span>
      </div>`,
    code: `<div class="ring-wrap">
  <svg class="ring-svg" width="120" height="120" viewBox="0 0 120 120" aria-label="72% complete">
    <defs>
      <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#7c3aed"/>
        <stop offset="100%" stop-color="#2563eb"/>
      </linearGradient>
    </defs>
    <circle class="ring-track" cx="60" cy="60" r="50"/>
    <circle class="ring-fill" cx="60" cy="60" r="50" data-pct="72"/>
    <text class="ring-label" x="60" y="56">72%</text>
    <text class="ring-sub"   x="60" y="74">Complete</text>
  </svg>
</div>

<style>
.ring-svg { transform: rotate(-90deg); }
.ring-track { fill: none; stroke: rgba(255,255,255,.06); stroke-width: 10; }
.ring-fill  { fill: none; stroke: url(#ring-grad); stroke-width: 10; stroke-linecap: round;
  stroke-dasharray: 314; stroke-dashoffset: 314;
  transition: stroke-dashoffset 1.4s cubic-bezier(.34,1.56,.64,1); }
@media (prefers-reduced-motion: reduce) { .ring-fill { transition: none; } }
.ring-label { font-size: 22px; font-weight: 900; fill: #fff; text-anchor: middle; dominant-baseline: central; transform: rotate(90deg); }
.ring-sub   { font-size: 11px; fill: rgba(255,255,255,.45); text-anchor: middle; dominant-baseline: central; transform: rotate(90deg); }
</style>

<script>
document.querySelectorAll('.ring-fill').forEach(el => {
  const pct = parseFloat(el.dataset.pct) || 0;
  const r   = parseFloat(el.getAttribute('r'));
  const circ = 2 * Math.PI * r;
  el.style.strokeDasharray  = circ;
  el.style.strokeDashoffset = circ;
  setTimeout(() => { el.style.strokeDashoffset = circ - (circ * pct / 100); }, 200);
});
</script>`
  },

  {
    id: 'trial-banner',
    title: 'Trial Banner',
    category: 'onboarding',
    tags: ['banner', 'trial', 'upgrade', 'sticky'],
    desc: 'Sticky top banner with live countdown timer urging users to upgrade.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        @media(prefers-reduced-motion:reduce){*{animation:none!important;}}
        body{margin:0;background:#0b0f1a;font-family:Inter,sans-serif;}
        @keyframes shimBanner{0%{background-position:0 50%}100%{background-position:200% 50%}}
        .trial-banner{
          display:flex;align-items:center;justify-content:center;gap:16px;
          padding:10px 20px;
          background:linear-gradient(90deg,#4c1d95,#1d4ed8,#0e7490,#4c1d95);
          background-size:200% 100%;
          animation:shimBanner 6s linear infinite;
          flex-wrap:wrap;}
        .tb-text{font-size:13px;font-weight:600;color:rgba(255,255,255,.9);}
        .tb-countdown{display:flex;gap:6px;align-items:center;}
        .tb-seg{text-align:center;}
        .tb-num{display:block;font-size:16px;font-weight:900;color:#fff;line-height:1;}
        .tb-lbl{font-size:9px;color:rgba(255,255,255,.5);font-weight:600;text-transform:uppercase;letter-spacing:.06em;}
        .tb-colon{font-size:16px;font-weight:900;color:rgba(255,255,255,.4);line-height:1.1;}
        .tb-btn{padding:6px 18px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.25);
          border-radius:50px;color:#fff;font-size:12px;font-weight:700;cursor:pointer;
          backdrop-filter:blur(4px);transition:background .2s;}
        .tb-btn:hover{background:rgba(255,255,255,.25);}
        .tb-close{width:24px;height:24px;background:rgba(255,255,255,.1);border:none;
          border-radius:50%;color:rgba(255,255,255,.6);font-size:14px;cursor:pointer;
          display:flex;align-items:center;justify-content:center;}
      </style>
      <script>
        function tick(){
          const end=new Date();end.setHours(23,59,59,0);
          const diff=Math.max(0,end-Date.now());
          const h=Math.floor(diff/36e5).toString().padStart(2,'0');
          const m=Math.floor((diff%36e5)/6e4).toString().padStart(2,'0');
          const s=Math.floor((diff%6e4)/1e3).toString().padStart(2,'0');
          document.getElementById('tb-h').textContent=h;
          document.getElementById('tb-m').textContent=m;
          document.getElementById('tb-s').textContent=s;
        }
        tick();setInterval(tick,1000);
      </script>
      <div class="trial-banner">
        <span class="tb-text">⚡ Free trial ends today — Upgrade now and save 40%</span>
        <div class="tb-countdown">
          <div class="tb-seg"><span class="tb-num" id="tb-h">08</span><span class="tb-lbl">hrs</span></div>
          <span class="tb-colon">:</span>
          <div class="tb-seg"><span class="tb-num" id="tb-m">42</span><span class="tb-lbl">min</span></div>
          <span class="tb-colon">:</span>
          <div class="tb-seg"><span class="tb-num" id="tb-s">17</span><span class="tb-lbl">sec</span></div>
        </div>
        <button class="tb-btn">Upgrade →</button>
        <button class="tb-close" aria-label="Dismiss">✕</button>
      </div>`,
    code: `<div class="trial-banner" role="banner" aria-label="Trial upgrade prompt">
  <span class="tb-text">⚡ Free trial ends today — Upgrade now and save 40%</span>
  <div class="tb-countdown" aria-live="polite" aria-label="Time remaining">
    <div class="tb-seg"><span class="tb-num" id="tb-h">08</span><span class="tb-lbl">hrs</span></div>
    <span class="tb-colon" aria-hidden="true">:</span>
    <div class="tb-seg"><span class="tb-num" id="tb-m">42</span><span class="tb-lbl">min</span></div>
    <span class="tb-colon" aria-hidden="true">:</span>
    <div class="tb-seg"><span class="tb-num" id="tb-s">17</span><span class="tb-lbl">sec</span></div>
  </div>
  <button class="tb-btn">Upgrade →</button>
  <button class="tb-close" aria-label="Dismiss banner">✕</button>
</div>

<style>
@keyframes shimBanner { 0% { background-position: 0 50%; } 100% { background-position: 200% 50%; } }
@media (prefers-reduced-motion: reduce) { .trial-banner { animation: none; } }
.trial-banner {
  display: flex; align-items: center; justify-content: center; gap: 16px;
  padding: 10px 20px; flex-wrap: wrap;
  background: linear-gradient(90deg, #4c1d95, #1d4ed8, #0e7490, #4c1d95);
  background-size: 200% 100%;
  animation: shimBanner 6s linear infinite;
}
.tb-text { font-size: 13px; font-weight: 600; color: rgba(255,255,255,.9); }
.tb-num  { display: block; font-size: 16px; font-weight: 900; color: #fff; line-height: 1; }
.tb-lbl  { font-size: 9px; color: rgba(255,255,255,.5); font-weight: 600; text-transform: uppercase; }
.tb-btn  { padding: 6px 18px; background: rgba(255,255,255,.15); border: 1px solid rgba(255,255,255,.25); border-radius: 50px; color: #fff; font-size: 12px; font-weight: 700; cursor: pointer; }
.tb-close{ width: 24px; height: 24px; background: rgba(255,255,255,.1); border: none; border-radius: 50%; color: rgba(255,255,255,.6); cursor: pointer; }
</style>

<script>
function tick() {
  const end = new Date(); end.setHours(23,59,59,0);
  const diff = Math.max(0, end - Date.now());
  document.getElementById('tb-h').textContent = String(Math.floor(diff/36e5)).padStart(2,'0');
  document.getElementById('tb-m').textContent = String(Math.floor((diff%36e5)/6e4)).padStart(2,'0');
  document.getElementById('tb-s').textContent = String(Math.floor((diff%6e4)/1e3)).padStart(2,'0');
}
tick(); setInterval(tick, 1000);
document.querySelector('.tb-close').addEventListener('click', e => e.target.closest('.trial-banner').remove());
</script>`
  },

  {
    id: 'empty-state-hero',
    title: 'Empty State',
    category: 'onboarding',
    tags: ['empty-state', 'zero-data', 'first-run', 'illustration'],
    desc: 'Illustrated empty state component for first-run zero-data screens.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        @media(prefers-reduced-motion:reduce){*{animation:none!important;}}
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        @keyframes floatIll{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
        .empty{text-align:center;padding:20px;max-width:280px;}
        .empty-ill{position:relative;margin:0 auto 20px;width:120px;height:120px;
          animation:floatIll 4s ease-in-out infinite;}
        .empty-ill-ring{position:absolute;inset:0;border-radius:50%;
          border:2px dashed rgba(124,58,237,.2);animation:floatIll 4s ease-in-out infinite reverse;}
        .empty-ill-inner{position:absolute;inset:12px;border-radius:50%;
          background:linear-gradient(135deg,rgba(124,58,237,.12),rgba(37,99,235,.08));
          border:1px solid rgba(124,58,237,.2);display:flex;align-items:center;justify-content:center;}
        .empty-ill-icon{font-size:36px;}
        .empty-title{font-size:17px;font-weight:800;color:#fff;margin-bottom:8px;}
        .empty-desc{font-size:13px;color:rgba(255,255,255,.45);line-height:1.65;margin-bottom:20px;}
        .empty-btn{padding:10px 24px;background:linear-gradient(135deg,#7c3aed,#2563eb);
          border:none;border-radius:10px;color:#fff;font-size:13px;font-weight:700;cursor:pointer;
          transition:transform .3s cubic-bezier(.34,1.56,.64,1);}
        .empty-btn:hover{transform:translateY(-2px);}
        .empty-hint{margin-top:10px;font-size:11px;color:rgba(255,255,255,.25);}
      </style>
      <div class="empty" role="status">
        <div class="empty-ill">
          <div class="empty-ill-ring"></div>
          <div class="empty-ill-inner"><span class="empty-ill-icon">📂</span></div>
        </div>
        <div class="empty-title">No projects yet</div>
        <p class="empty-desc">You haven't created any projects. Start by adding your first one — it only takes a minute.</p>
        <button class="empty-btn">+ Create First Project</button>
        <p class="empty-hint">No credit card required</p>
      </div>`,
    code: `<div class="empty-state" role="status" aria-label="No content available">
  <div class="empty-ill" aria-hidden="true">
    <div class="empty-ill-ring"></div>
    <div class="empty-ill-inner">
      <span class="empty-ill-icon">📂</span>
    </div>
  </div>
  <h3 class="empty-title">No projects yet</h3>
  <p class="empty-desc">You haven't created any projects yet. Start by adding your first one.</p>
  <button class="empty-btn">+ Create First Project</button>
  <p class="empty-hint">No credit card required</p>
</div>

<style>
@keyframes floatIll { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
@media (prefers-reduced-motion: reduce) { .empty-ill, .empty-ill-ring { animation: none; } }
.empty-state { text-align: center; padding: 40px 20px; max-width: 320px; margin: 0 auto; }
.empty-ill { position: relative; width: 120px; height: 120px; margin: 0 auto 20px; animation: floatIll 4s ease-in-out infinite; }
.empty-ill-ring { position: absolute; inset: 0; border-radius: 50%; border: 2px dashed rgba(124,58,237,.25); animation: floatIll 4s ease-in-out infinite reverse; }
.empty-ill-inner { position: absolute; inset: 12px; border-radius: 50%; background: linear-gradient(135deg,rgba(124,58,237,.12),rgba(37,99,235,.08)); border: 1px solid rgba(124,58,237,.2); display: flex; align-items: center; justify-content: center; }
.empty-ill-icon { font-size: 36px; }
.empty-title { font-size: 17px; font-weight: 800; color: #fff; margin-bottom: 8px; }
.empty-desc  { font-size: 13px; color: rgba(255,255,255,.45); line-height: 1.65; margin-bottom: 20px; }
.empty-btn   { padding: 10px 24px; background: linear-gradient(135deg,#7c3aed,#2563eb); border: none; border-radius: 10px; color: #fff; font-size: 13px; font-weight: 700; cursor: pointer; transition: transform .3s ease; }
.empty-btn:hover { transform: translateY(-2px); }
.empty-hint  { margin-top: 10px; font-size: 11px; color: rgba(255,255,255,.25); }
</style>`
  },

  {
    id: 'feature-spotlight',
    title: 'Feature Spotlight',
    category: 'onboarding',
    tags: ['tooltip', 'coach-mark', 'feature-discovery', 'onboarding'],
    desc: 'Pulsing coach mark tooltip for in-app feature discovery and walkthroughs.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        @media(prefers-reduced-motion:reduce){*{animation:none!important;}}
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        @keyframes coachPulse{0%{transform:scale(1);opacity:.6;}100%{transform:scale(2.4);opacity:0;}}
        .spotlight-demo{position:relative;display:inline-flex;padding:40px;}
        .target-btn{padding:11px 24px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);
          border-radius:10px;color:rgba(255,255,255,.7);font-size:13px;font-weight:600;cursor:pointer;}
        .coach-anchor{position:absolute;top:14px;right:14px;}
        .coach-pulse{position:relative;width:14px;height:14px;}
        .coach-dot{position:absolute;inset:3px;background:#7c3aed;border-radius:50%;}
        .coach-ring{position:absolute;inset:0;border-radius:50%;border:2px solid #7c3aed;
          animation:coachPulse 1.6s ease-out infinite;}
        .coach-ring2{position:absolute;inset:0;border-radius:50%;border:2px solid #7c3aed;
          animation:coachPulse 1.6s ease-out .5s infinite;}
        .coach-tooltip{position:absolute;bottom:calc(100% + 12px);right:0;
          width:210px;background:#1a2035;border:1px solid rgba(124,58,237,.3);
          border-radius:12px;padding:14px 16px;box-shadow:0 8px 40px rgba(0,0,0,.5);}
        .coach-tooltip::after{content:'';position:absolute;bottom:-7px;right:3px;
          width:12px;height:12px;background:#1a2035;border-right:1px solid rgba(124,58,237,.3);
          border-bottom:1px solid rgba(124,58,237,.3);transform:rotate(45deg);}
        .ct-badge{display:inline-block;padding:2px 8px;font-size:10px;font-weight:700;
          background:rgba(124,58,237,.2);color:#a78bfa;border-radius:50px;margin-bottom:8px;}
        .ct-title{font-size:13px;font-weight:800;color:#fff;margin-bottom:4px;}
        .ct-desc{font-size:11px;color:rgba(255,255,255,.5);line-height:1.55;margin-bottom:10px;}
        .ct-actions{display:flex;gap:6px;}
        .ct-skip{font-size:11px;color:rgba(255,255,255,.35);cursor:pointer;background:none;border:none;padding:0;}
        .ct-next{font-size:11px;font-weight:700;color:#fff;background:linear-gradient(135deg,#7c3aed,#2563eb);
          border:none;border-radius:6px;padding:5px 12px;cursor:pointer;}
        .ct-counter{font-size:10px;color:rgba(255,255,255,.3);margin-left:auto;}
      </style>
      <div class="spotlight-demo">
        <button class="target-btn">AI Summarise</button>
        <div class="coach-anchor">
          <div class="coach-pulse">
            <div class="coach-dot"></div>
            <div class="coach-ring"></div>
            <div class="coach-ring2"></div>
          </div>
          <div class="coach-tooltip">
            <span class="ct-badge">✨ New</span>
            <div class="ct-title">AI Summarise is here!</div>
            <p class="ct-desc">Instantly condense any document or thread into a 3-line brief using GPT-4.</p>
            <div class="ct-actions">
              <button class="ct-skip">Skip tour</button>
              <button class="ct-next">Next tip →</button>
              <span class="ct-counter">1 / 4</span>
            </div>
          </div>
        </div>
      </div>`,
    code: `<div style="position:relative; display:inline-block;">
  <!-- Your target element -->
  <button class="target-btn">AI Summarise</button>

  <!-- Coach mark -->
  <div class="coach-anchor" role="tooltip" id="coach-1">
    <div class="coach-pulse" aria-hidden="true">
      <div class="coach-dot"></div>
      <div class="coach-ring"></div>
      <div class="coach-ring2"></div>
    </div>
    <div class="coach-tooltip">
      <span class="ct-badge">✨ New</span>
      <div class="ct-title">AI Summarise is here!</div>
      <p class="ct-desc">Instantly condense any document into a 3-line brief.</p>
      <div class="ct-actions">
        <button class="ct-skip" onclick="document.getElementById('coach-1').remove()">Skip</button>
        <button class="ct-next">Next →</button>
        <span class="ct-counter">1 / 4</span>
      </div>
    </div>
  </div>
</div>

<style>
@keyframes coachPulse { 0% { transform: scale(1); opacity: .6; } 100% { transform: scale(2.4); opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .coach-ring, .coach-ring2 { animation: none; } }
.coach-anchor { position: absolute; top: -6px; right: -6px; }
.coach-pulse  { position: relative; width: 14px; height: 14px; }
.coach-dot    { position: absolute; inset: 3px; background: #7c3aed; border-radius: 50%; }
.coach-ring   { position: absolute; inset: 0; border-radius: 50%; border: 2px solid #7c3aed; animation: coachPulse 1.6s ease-out infinite; }
.coach-ring2  { position: absolute; inset: 0; border-radius: 50%; border: 2px solid #7c3aed; animation: coachPulse 1.6s ease-out .5s infinite; }
.coach-tooltip { position: absolute; bottom: calc(100% + 12px); right: 0; width: 220px; background: #1a2035; border: 1px solid rgba(124,58,237,.3); border-radius: 12px; padding: 14px 16px; box-shadow: 0 8px 40px rgba(0,0,0,.5); }
.ct-badge  { display: inline-block; padding: 2px 8px; font-size: 10px; font-weight: 700; background: rgba(124,58,237,.2); color: #a78bfa; border-radius: 50px; margin-bottom: 8px; }
.ct-title  { font-size: 13px; font-weight: 800; color: #fff; margin-bottom: 4px; }
.ct-desc   { font-size: 11px; color: rgba(255,255,255,.5); line-height: 1.55; margin-bottom: 10px; }
.ct-actions{ display: flex; gap: 6px; align-items: center; }
.ct-skip   { font-size: 11px; color: rgba(255,255,255,.35); cursor: pointer; background: none; border: none; }
.ct-next   { font-size: 11px; font-weight: 700; color: #fff; background: linear-gradient(135deg,#7c3aed,#2563eb); border: none; border-radius: 6px; padding: 5px 12px; cursor: pointer; }
.ct-counter{ font-size: 10px; color: rgba(255,255,255,.3); margin-left: auto; }
</style>`
  },

  {
    id: 'user-avatar-group',
    title: 'Avatar Group',
    category: 'onboarding',
    tags: ['avatar', 'team', 'social-proof', 'stacked'],
    desc: 'Stacked avatar group with overflow count and social-proof CTA.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        body{margin:0;display:flex;flex-direction:column;align-items:center;justify-content:center;
          gap:28px;height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .avatar-group{display:flex;align-items:center;}
        .av{width:40px;height:40px;border-radius:50%;border:2.5px solid #0b0f1a;
          display:flex;align-items:center;justify-content:center;
          font-size:13px;font-weight:800;color:#fff;margin-left:-10px;flex-shrink:0;
          transition:transform .2s ease;}
        .av:first-child{margin-left:0;}
        .av:hover{transform:translateY(-4px);z-index:10;}
        .av-1{background:linear-gradient(135deg,#7c3aed,#4c1d95);}
        .av-2{background:linear-gradient(135deg,#2563eb,#1e40af);}
        .av-3{background:linear-gradient(135deg,#10b981,#065f46);}
        .av-4{background:linear-gradient(135deg,#f59e0b,#b45309);}
        .av-5{background:linear-gradient(135deg,#06b6d4,#0e7490);}
        .av-more{background:rgba(255,255,255,.08);border-color:#0b0f1a;
          font-size:12px;color:rgba(255,255,255,.6);border:2.5px solid #0b0f1a;}
        .ag-text{font-size:13px;color:rgba(255,255,255,.5);margin-top:10px;}
        .ag-text strong{color:#fff;}
        .ag-proof{display:flex;flex-direction:column;align-items:center;gap:6px;
          padding:16px 24px;background:#0f1629;border:1px solid rgba(255,255,255,.07);border-radius:16px;}
        .ag-stars{color:#f59e0b;font-size:14px;letter-spacing:2px;}
        .ag-sub{font-size:12px;color:rgba(255,255,255,.4);}
      </style>
      <div class="ag-proof">
        <div class="avatar-group" aria-label="Team members">
          <div class="av av-1" title="Alex">A</div>
          <div class="av av-2" title="Blake">B</div>
          <div class="av av-3" title="Casey">C</div>
          <div class="av av-4" title="Dana">D</div>
          <div class="av av-5" title="Evan">E</div>
          <div class="av av-more">+48k</div>
        </div>
        <div class="ag-stars">★★★★★</div>
        <p class="ag-sub">Loved by <strong style="color:#fff">50,000+</strong> developers worldwide</p>
      </div>`,
    code: `<div class="ag-proof">
  <div class="avatar-group" aria-label="50000 developers use this">
    <div class="av av-1" title="Alex"    aria-label="Alex">A</div>
    <div class="av av-2" title="Blake"   aria-label="Blake">B</div>
    <div class="av av-3" title="Casey"   aria-label="Casey">C</div>
    <div class="av av-4" title="Dana"    aria-label="Dana">D</div>
    <div class="av av-5" title="Evan"    aria-label="Evan">E</div>
    <div class="av av-more" aria-label="48000 more">+48k</div>
  </div>
  <div class="ag-stars" aria-label="5 star rating">★★★★★</div>
  <p class="ag-sub">Loved by <strong>50,000+</strong> developers worldwide</p>
</div>

<style>
.avatar-group { display: flex; align-items: center; }
.av { width: 40px; height: 40px; border-radius: 50%; border: 2.5px solid #0b0f1a;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 800; color: #fff; margin-left: -10px;
  transition: transform .2s ease; cursor: default; }
.av:first-child { margin-left: 0; }
.av:hover { transform: translateY(-4px); z-index: 10; }
.av-1 { background: linear-gradient(135deg,#7c3aed,#4c1d95); }
.av-2 { background: linear-gradient(135deg,#2563eb,#1e40af); }
.av-3 { background: linear-gradient(135deg,#10b981,#065f46); }
.av-4 { background: linear-gradient(135deg,#f59e0b,#b45309); }
.av-5 { background: linear-gradient(135deg,#06b6d4,#0e7490); }
.av-more { background: rgba(255,255,255,.08); font-size: 12px; color: rgba(255,255,255,.6); }
.ag-proof { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.ag-stars  { color: #f59e0b; font-size: 14px; letter-spacing: 2px; }
.ag-sub    { font-size: 13px; color: rgba(255,255,255,.5); }
</style>`
  },

  {
    id: 'onboarding-checklist-mini',
    title: 'Quick Start Widget',
    category: 'onboarding',
    tags: ['checklist', 'sidebar', 'widget', 'compact'],
    desc: 'Compact collapsible quick-start widget for dashboards and sidebars.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        @media(prefers-reduced-motion:reduce){*{transition:none!important;}}
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .qs-widget{width:240px;background:#0f1629;border:1px solid rgba(255,255,255,.07);
          border-radius:14px;overflow:hidden;}
        .qs-head{display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;
          user-select:none;border-bottom:1px solid rgba(255,255,255,.05);}
        .qs-ring-mini{width:32px;height:32px;flex-shrink:0;}
        .qs-ring-mini svg{transform:rotate(-90deg);}
        .qs-head-text{flex:1;}
        .qs-head-label{font-size:12px;font-weight:800;color:#fff;}
        .qs-head-sub{font-size:10px;color:rgba(255,255,255,.35);margin-top:1px;}
        .qs-chevron{color:rgba(255,255,255,.3);font-size:11px;transition:transform .25s;}
        .qs-chevron.open{transform:rotate(180deg);}
        .qs-body{padding:0 14px;}
        .qs-item{display:flex;align-items:center;gap:8px;padding:8px 0;
          border-bottom:1px solid rgba(255,255,255,.04);font-size:12px;cursor:pointer;}
        .qs-item:last-child{border-bottom:none;}
        .qs-dot{width:16px;height:16px;border-radius:50%;flex-shrink:0;
          display:flex;align-items:center;justify-content:center;font-size:9px;}
        .qs-dot.done{background:rgba(16,185,129,.2);color:#34d399;}
        .qs-dot.todo{border:1.5px solid rgba(255,255,255,.15);color:transparent;}
        .qs-name{flex:1;color:rgba(255,255,255,.65);}
        .qs-name.done{text-decoration:line-through;color:rgba(255,255,255,.3);}
        .qs-arrow{color:rgba(255,255,255,.2);font-size:11px;}
      </style>
      <div class="qs-widget">
        <div class="qs-head">
          <div class="qs-ring-mini">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="12" fill="none" stroke="rgba(255,255,255,.07)" stroke-width="4"/>
              <circle cx="16" cy="16" r="12" fill="none" stroke="url(#qg)" stroke-width="4"
                stroke-linecap="round" stroke-dasharray="75" stroke-dashoffset="28"/>
              <defs><linearGradient id="qg" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#2563eb"/>
              </linearGradient></defs>
            </svg>
          </div>
          <div class="qs-head-text">
            <div class="qs-head-label">Quick Start</div>
            <div class="qs-head-sub">3 of 5 complete</div>
          </div>
          <span class="qs-chevron open">▼</span>
        </div>
        <div class="qs-body">
          <div class="qs-item"><div class="qs-dot done">✓</div><span class="qs-name done">Create account</span></div>
          <div class="qs-item"><div class="qs-dot done">✓</div><span class="qs-name done">Set up workspace</span></div>
          <div class="qs-item"><div class="qs-dot done">✓</div><span class="qs-name done">Add team members</span></div>
          <div class="qs-item"><div class="qs-dot todo"></div><span class="qs-name">Connect integrations</span><span class="qs-arrow">›</span></div>
          <div class="qs-item"><div class="qs-dot todo"></div><span class="qs-name">Launch first project</span><span class="qs-arrow">›</span></div>
        </div>
      </div>`,
    code: `<div class="qs-widget">
  <div class="qs-head" onclick="this.nextElementSibling.classList.toggle('hidden')">
    <div class="qs-ring-mini" aria-hidden="true"><!-- SVG ring here --></div>
    <div class="qs-head-text">
      <div class="qs-head-label">Quick Start</div>
      <div class="qs-head-sub">3 of 5 complete</div>
    </div>
    <span class="qs-chevron">▼</span>
  </div>
  <div class="qs-body">
    <div class="qs-item"><div class="qs-dot done">✓</div><span class="qs-name done">Create account</span></div>
    <div class="qs-item"><div class="qs-dot todo"></div><span class="qs-name">Connect integrations</span><span class="qs-arrow">›</span></div>
  </div>
</div>

<style>
.qs-widget { width: 240px; background: #0f1629; border: 1px solid rgba(255,255,255,.07); border-radius: 14px; overflow: hidden; }
.qs-head   { display: flex; align-items: center; gap: 10px; padding: 12px 14px; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,.05); }
.qs-head-label { font-size: 12px; font-weight: 800; color: #fff; }
.qs-head-sub   { font-size: 10px; color: rgba(255,255,255,.35); }
.qs-chevron    { color: rgba(255,255,255,.3); font-size: 11px; transition: transform .25s; }
.qs-item  { display: flex; align-items: center; gap: 8px; padding: 8px 14px; border-bottom: 1px solid rgba(255,255,255,.04); cursor: pointer; }
.qs-dot   { width: 16px; height: 16px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 9px; }
.qs-dot.done { background: rgba(16,185,129,.2); color: #34d399; }
.qs-dot.todo { border: 1.5px solid rgba(255,255,255,.15); }
.qs-name  { flex: 1; font-size: 12px; color: rgba(255,255,255,.65); }
.qs-name.done { text-decoration: line-through; color: rgba(255,255,255,.3); }
</style>`
  },

  {
    id: 'notification-toast',
    title: 'Toast Notifications',
    category: 'onboarding',
    tags: ['toast', 'notification', 'alert', 'dismissable'],
    desc: 'Premium stacked toast notification system with success, error and info variants.',
    featured: false,
    isNew: false,
    preview: `
      <style>
        @media(prefers-reduced-motion:reduce){*{animation:none!important;}}
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        @keyframes toastIn{from{opacity:0;transform:translateY(12px) scale(.96);}
          to{opacity:1;transform:translateY(0) scale(1);}}
        .toast-demo{display:flex;flex-direction:column;gap:8px;width:290px;}
        .toast-item{display:flex;align-items:flex-start;gap:12px;padding:12px 14px;
          border-radius:12px;border-left:3px solid transparent;
          animation:toastIn .35s cubic-bezier(.34,1.56,.64,1) forwards;}
        .toast-success{background:rgba(16,185,129,.08);border-color:#10b981;border:1px solid rgba(16,185,129,.2);border-left:3px solid #10b981;}
        .toast-error{background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.2);border-left:3px solid #ef4444;}
        .toast-info{background:rgba(124,58,237,.08);border:1px solid rgba(124,58,237,.2);border-left:3px solid #7c3aed;}
        .toast-icon{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;
          justify-content:center;font-size:11px;flex-shrink:0;margin-top:1px;}
        .ti-success{background:rgba(16,185,129,.2);color:#34d399;}
        .ti-error{background:rgba(239,68,68,.2);color:#f87171;}
        .ti-info{background:rgba(124,58,237,.2);color:#a78bfa;}
        .toast-body{flex:1;}
        .toast-title{font-size:13px;font-weight:700;color:#fff;margin-bottom:2px;}
        .toast-msg{font-size:11px;color:rgba(255,255,255,.5);line-height:1.5;}
        .toast-close{color:rgba(255,255,255,.25);background:none;border:none;font-size:14px;
          cursor:pointer;padding:0;line-height:1;align-self:center;}
        .toast-close:hover{color:rgba(255,255,255,.6);}
        .toast-item:nth-child(2){animation-delay:.1s;}
        .toast-item:nth-child(3){animation-delay:.2s;}
      </style>
      <div class="toast-demo" role="region" aria-label="Notifications">
        <div class="toast-item toast-success" role="alert">
          <div class="toast-icon ti-success">✓</div>
          <div class="toast-body">
            <div class="toast-title">Saved successfully</div>
            <div class="toast-msg">Your changes have been saved and synced.</div>
          </div>
          <button class="toast-close" aria-label="Dismiss">✕</button>
        </div>
        <div class="toast-item toast-error" role="alert">
          <div class="toast-icon ti-error">✕</div>
          <div class="toast-body">
            <div class="toast-title">Upload failed</div>
            <div class="toast-msg">File exceeds the 10 MB limit. Try compressing it.</div>
          </div>
          <button class="toast-close" aria-label="Dismiss">✕</button>
        </div>
        <div class="toast-item toast-info" role="status">
          <div class="toast-icon ti-info">✦</div>
          <div class="toast-body">
            <div class="toast-title">Update available</div>
            <div class="toast-msg">A new version of the app is ready to install.</div>
          </div>
          <button class="toast-close" aria-label="Dismiss">✕</button>
        </div>
      </div>`,
    code: `<!-- Toast container — place near </body> -->
<div class="toast-stack" role="region" aria-label="Notifications" aria-live="polite" id="toastStack"></div>

<style>
@keyframes toastIn { from { opacity:0; transform: translateY(12px) scale(.96); } to { opacity:1; transform: translateY(0) scale(1); } }
@keyframes toastOut { to { opacity:0; transform: translateY(-8px) scale(.95); } }
@media (prefers-reduced-motion: reduce) { .toast-item { animation: none; } }
.toast-stack { position: fixed; bottom: 24px; right: 24px; z-index: 3000; display: flex; flex-direction: column; gap: 8px; }
.toast-item  { display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px; border-radius: 12px; min-width: 280px; max-width: 340px; animation: toastIn .35s cubic-bezier(.34,1.56,.64,1) forwards; }
.toast-item.exit { animation: toastOut .25s forwards; }
.toast-success { background: rgba(16,185,129,.08); border: 1px solid rgba(16,185,129,.2); border-left: 3px solid #10b981; }
.toast-error   { background: rgba(239,68,68,.08);  border: 1px solid rgba(239,68,68,.2);  border-left: 3px solid #ef4444; }
.toast-info    { background: rgba(124,58,237,.08); border: 1px solid rgba(124,58,237,.2); border-left: 3px solid #7c3aed; }
.toast-title   { font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 2px; }
.toast-msg     { font-size: 11px; color: rgba(255,255,255,.5); line-height: 1.5; }
.toast-close   { color: rgba(255,255,255,.25); background: none; border: none; font-size: 14px; cursor: pointer; align-self: center; margin-left: auto; }
</style>

<script>
function showToast(title, msg, type = 'info', duration = 4000) {
  const stack = document.getElementById('toastStack');
  const el    = document.createElement('div');
  el.className = \`toast-item toast-\${type}\`;
  el.setAttribute('role', type === 'error' ? 'alert' : 'status');
  el.innerHTML = \`<div class="toast-body"><div class="toast-title">\${title}</div><div class="toast-msg">\${msg}</div></div><button class="toast-close" aria-label="Dismiss">✕</button>\`;
  stack.appendChild(el);
  el.querySelector('.toast-close').onclick = () => dismiss(el);
  setTimeout(() => dismiss(el), duration);
}
function dismiss(el) {
  el.classList.add('exit');
  el.addEventListener('animationend', () => el.remove(), { once: true });
}
// Usage:
// showToast('Saved!', 'Your changes were saved.', 'success');
</script>`
  },

  /* ─────────────────────── CHECKOUT / E-COMMERCE ─────────────────────── */

  {
    id: 'checkout-stepper',
    title: 'Checkout Steps',
    category: 'checkout',
    tags: ['checkout', 'stepper', 'e-commerce', 'cart'],
    desc: '3-step checkout progress indicator: Cart → Payment → Confirmation.',
    featured: true,
    isNew: true,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .cs-wrap{width:320px;}
        .cs-steps{display:flex;align-items:center;margin-bottom:20px;}
        .cs-step{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1;}
        .cs-num{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;
          justify-content:center;font-size:12px;font-weight:800;transition:all .3s;}
        .cs-num.done{background:linear-gradient(135deg,#10b981,#059669);color:#fff;}
        .cs-num.active{background:linear-gradient(135deg,#7c3aed,#2563eb);color:#fff;
          box-shadow:0 0 20px rgba(124,58,237,.4);}
        .cs-num.pending{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);
          color:rgba(255,255,255,.3);}
        .cs-label{font-size:10px;font-weight:700;text-align:center;white-space:nowrap;}
        .cs-label.done{color:rgba(255,255,255,.45);}
        .cs-label.active{color:#a78bfa;}
        .cs-label.pending{color:rgba(255,255,255,.25);}
        .cs-connector{flex:1;height:2px;background:rgba(255,255,255,.07);border-radius:2px;margin:0 6px;margin-bottom:22px;}
        .cs-connector.done{background:linear-gradient(90deg,#10b981,#7c3aed);}
        .cs-panel{background:#0f1629;border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:20px;}
        .cs-panel-title{font-size:15px;font-weight:800;color:#fff;margin-bottom:14px;}
        .cs-row{display:flex;gap:10px;margin-bottom:10px;}
        .cs-input{flex:1;padding:10px 12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);
          border-radius:8px;color:#fff;font-size:12px;font-family:Inter,sans-serif;outline:none;}
        .cs-input::placeholder{color:rgba(255,255,255,.2);}
        .cs-input:focus{border-color:#7c3aed;}
        .cs-pay-btn{width:100%;padding:11px;background:linear-gradient(135deg,#7c3aed,#2563eb);
          border:none;border-radius:10px;color:#fff;font-size:13px;font-weight:800;cursor:pointer;margin-top:6px;}
        .cs-pay-btn:hover{opacity:.9;}
        .cs-secure{display:flex;align-items:center;justify-content:center;gap:5px;
          margin-top:8px;font-size:10px;color:rgba(255,255,255,.3);}
      </style>
      <div class="cs-wrap">
        <div class="cs-steps">
          <div class="cs-step"><div class="cs-num done">✓</div><span class="cs-label done">Cart</span></div>
          <div class="cs-connector done"></div>
          <div class="cs-step"><div class="cs-num active">2</div><span class="cs-label active">Payment</span></div>
          <div class="cs-connector"></div>
          <div class="cs-step"><div class="cs-num pending">3</div><span class="cs-label pending">Confirm</span></div>
        </div>
        <div class="cs-panel">
          <div class="cs-panel-title">💳 Payment Details</div>
          <div class="cs-row"><input class="cs-input" placeholder="Card number" style="flex:2"/><input class="cs-input" placeholder="MM/YY"/></div>
          <div class="cs-row"><input class="cs-input" placeholder="Cardholder name" style="flex:2"/><input class="cs-input" placeholder="CVV"/></div>
          <button class="cs-pay-btn">Pay $49.00 →</button>
          <div class="cs-secure">🔒 256-bit SSL encrypted · Powered by Stripe</div>
        </div>
      </div>`,
    code: `<div class="cs-wrap">
  <!-- Step indicators -->
  <div class="cs-steps" role="list" aria-label="Checkout progress">
    <div class="cs-step" role="listitem" aria-current="false">
      <div class="cs-num done" aria-label="Step 1 complete">✓</div>
      <span class="cs-label done">Cart</span>
    </div>
    <div class="cs-connector done" aria-hidden="true"></div>
    <div class="cs-step" role="listitem" aria-current="step">
      <div class="cs-num active" aria-label="Step 2 current">2</div>
      <span class="cs-label active">Payment</span>
    </div>
    <div class="cs-connector" aria-hidden="true"></div>
    <div class="cs-step" role="listitem">
      <div class="cs-num pending" aria-label="Step 3 upcoming">3</div>
      <span class="cs-label pending">Confirm</span>
    </div>
  </div>

  <!-- Payment form -->
  <div class="cs-panel">
    <div class="cs-panel-title">💳 Payment Details</div>
    <div class="cs-row">
      <input class="cs-input" type="text" placeholder="Card number"      inputmode="numeric" autocomplete="cc-number"   maxlength="19">
      <input class="cs-input" type="text" placeholder="MM/YY"            inputmode="numeric" autocomplete="cc-exp"      maxlength="5">
    </div>
    <div class="cs-row">
      <input class="cs-input" type="text" placeholder="Cardholder name"                      autocomplete="cc-name">
      <input class="cs-input" type="password" placeholder="CVV"          inputmode="numeric" autocomplete="cc-csc"      maxlength="4">
    </div>
    <button class="cs-pay-btn">Pay $49.00 →</button>
    <p class="cs-secure" aria-label="Secure payment">🔒 256-bit SSL encrypted · Powered by Stripe</p>
  </div>
</div>

<style>
.cs-wrap { width: 360px; }
.cs-steps { display: flex; align-items: center; margin-bottom: 20px; }
.cs-step  { display: flex; flex-direction: column; align-items: center; gap: 6px; flex: 1; }
.cs-num   { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; }
.cs-num.done    { background: linear-gradient(135deg,#10b981,#059669); color: #fff; }
.cs-num.active  { background: linear-gradient(135deg,#7c3aed,#2563eb); color: #fff; box-shadow: 0 0 20px rgba(124,58,237,.4); }
.cs-num.pending { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); color: rgba(255,255,255,.3); }
.cs-label.done    { font-size: 10px; font-weight: 700; color: rgba(255,255,255,.45); }
.cs-label.active  { font-size: 10px; font-weight: 700; color: #a78bfa; }
.cs-label.pending { font-size: 10px; font-weight: 700; color: rgba(255,255,255,.25); }
.cs-connector { flex: 1; height: 2px; background: rgba(255,255,255,.07); border-radius: 2px; margin: 0 6px 22px; }
.cs-connector.done { background: linear-gradient(90deg,#10b981,#7c3aed); }
.cs-panel { background: #0f1629; border: 1px solid rgba(255,255,255,.07); border-radius: 16px; padding: 20px; }
.cs-panel-title { font-size: 15px; font-weight: 800; color: #fff; margin-bottom: 14px; }
.cs-row   { display: flex; gap: 10px; margin-bottom: 10px; }
.cs-input { flex: 1; padding: 10px 12px; background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.09); border-radius: 8px; color: #fff; font-size: 12px; font-family: inherit; outline: none; }
.cs-input:focus { border-color: #7c3aed; box-shadow: 0 0 0 3px rgba(124,58,237,.15); }
.cs-pay-btn { width: 100%; padding: 11px; background: linear-gradient(135deg,#7c3aed,#2563eb); border: none; border-radius: 10px; color: #fff; font-size: 13px; font-weight: 800; cursor: pointer; margin-top: 6px; }
.cs-secure  { text-align: center; margin-top: 8px; font-size: 10px; color: rgba(255,255,255,.3); }
</style>`
  },

  {
    id: 'order-summary-card',
    title: 'Order Summary',
    category: 'checkout',
    tags: ['order', 'summary', 'cart', 'pricing'],
    desc: 'Sticky order summary card with line items, discounts and total breakdown.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .order-card{width:280px;background:#0f1629;border:1px solid rgba(255,255,255,.08);
          border-radius:16px;padding:20px;}
        .oc-title{font-size:14px;font-weight:800;color:#fff;margin-bottom:16px;}
        .oc-item{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;gap:8px;}
        .oc-item-img{width:36px;height:36px;border-radius:8px;flex-shrink:0;
          background:linear-gradient(135deg,rgba(124,58,237,.2),rgba(37,99,235,.2));
          border:1px solid rgba(124,58,237,.15);display:flex;align-items:center;justify-content:center;font-size:16px;}
        .oc-item-info{flex:1;}
        .oc-item-name{font-size:12px;font-weight:700;color:#fff;}
        .oc-item-sub{font-size:10px;color:rgba(255,255,255,.35);margin-top:1px;}
        .oc-item-price{font-size:13px;font-weight:800;color:#fff;}
        .oc-divider{height:1px;background:rgba(255,255,255,.05);margin:12px 0;}
        .oc-row{display:flex;justify-content:space-between;margin-bottom:6px;font-size:12px;}
        .oc-row-label{color:rgba(255,255,255,.4);}
        .oc-row-val{color:rgba(255,255,255,.75);font-weight:600;}
        .oc-row-val.discount{color:#34d399;}
        .oc-total{display:flex;justify-content:space-between;align-items:baseline;padding-top:10px;}
        .oc-total-label{font-size:14px;font-weight:800;color:#fff;}
        .oc-total-val{font-size:22px;font-weight:900;color:#fff;letter-spacing:-.03em;}
        .oc-badge{display:inline-block;padding:2px 8px;font-size:10px;font-weight:700;
          color:#34d399;background:rgba(16,185,129,.12);border:1px solid rgba(16,185,129,.2);
          border-radius:50px;margin-bottom:14px;}
      </style>
      <div class="order-card">
        <div class="oc-title">Order Summary</div>
        <div class="oc-item">
          <div class="oc-item-img">✦</div>
          <div class="oc-item-info"><div class="oc-item-name">AURA Pro Plan</div><div class="oc-item-sub">Annual · Up to 10 users</div></div>
          <div class="oc-item-price">$348</div>
        </div>
        <div class="oc-item">
          <div class="oc-item-img">🧩</div>
          <div class="oc-item-info"><div class="oc-item-name">Component Pack</div><div class="oc-item-sub">One-time purchase</div></div>
          <div class="oc-item-price">$49</div>
        </div>
        <div class="oc-divider"></div>
        <div class="oc-badge">🎉 SAVE40 applied</div>
        <div class="oc-row"><span class="oc-row-label">Subtotal</span><span class="oc-row-val">$397.00</span></div>
        <div class="oc-row"><span class="oc-row-label">Discount (40%)</span><span class="oc-row-val discount">−$158.80</span></div>
        <div class="oc-row"><span class="oc-row-label">Tax (18%)</span><span class="oc-row-val">$43.06</span></div>
        <div class="oc-divider"></div>
        <div class="oc-total"><span class="oc-total-label">Total</span><span class="oc-total-val">$281.26</span></div>
      </div>`,
    code: `<aside class="order-card" aria-label="Order summary">
  <h2 class="oc-title">Order Summary</h2>

  <!-- Line items -->
  <div class="oc-item">
    <div class="oc-item-img" aria-hidden="true">✦</div>
    <div class="oc-item-info">
      <div class="oc-item-name">AURA Pro Plan</div>
      <div class="oc-item-sub">Annual · Up to 10 users</div>
    </div>
    <div class="oc-item-price">$348</div>
  </div>

  <div class="oc-divider" role="separator"></div>

  <!-- Applied coupon -->
  <div class="oc-badge" role="status">🎉 SAVE40 applied</div>

  <!-- Price breakdown -->
  <dl class="oc-breakdown">
    <div class="oc-row"><dt class="oc-row-label">Subtotal</dt><dd class="oc-row-val">$397.00</dd></div>
    <div class="oc-row"><dt class="oc-row-label">Discount (40%)</dt><dd class="oc-row-val discount">−$158.80</dd></div>
    <div class="oc-row"><dt class="oc-row-label">Tax (18%)</dt><dd class="oc-row-val">$43.06</dd></div>
  </dl>
  <div class="oc-divider"></div>
  <div class="oc-total">
    <span class="oc-total-label">Total due</span>
    <strong class="oc-total-val">$281.26</strong>
  </div>
</aside>

<style>
.order-card { width: 300px; background: #0f1629; border: 1px solid rgba(255,255,255,.08); border-radius: 16px; padding: 20px; }
.oc-title   { font-size: 14px; font-weight: 800; color: #fff; margin-bottom: 16px; }
.oc-item    { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
.oc-item-img{ width: 36px; height: 36px; border-radius: 8px; flex-shrink: 0; background: rgba(124,58,237,.15); border: 1px solid rgba(124,58,237,.15); display: flex; align-items: center; justify-content: center; }
.oc-item-name { font-size: 12px; font-weight: 700; color: #fff; }
.oc-item-sub  { font-size: 10px; color: rgba(255,255,255,.35); }
.oc-item-price{ font-size: 13px; font-weight: 800; color: #fff; margin-left: auto; }
.oc-divider { height: 1px; background: rgba(255,255,255,.05); margin: 12px 0; }
.oc-row     { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 12px; }
.oc-row-label { color: rgba(255,255,255,.4); }
.oc-row-val   { color: rgba(255,255,255,.75); font-weight: 600; }
.oc-row-val.discount { color: #34d399; }
.oc-total   { display: flex; justify-content: space-between; align-items: baseline; }
.oc-total-label { font-size: 14px; font-weight: 800; color: #fff; }
.oc-total-val   { font-size: 22px; font-weight: 900; color: #fff; letter-spacing: -.03em; }
.oc-badge   { display: inline-block; padding: 2px 8px; font-size: 10px; font-weight: 700; color: #34d399; background: rgba(16,185,129,.12); border: 1px solid rgba(16,185,129,.2); border-radius: 50px; margin-bottom: 14px; }
</style>`
  },

  {
    id: 'coupon-input',
    title: 'Coupon Field',
    category: 'checkout',
    tags: ['coupon', 'discount', 'input', 'promo'],
    desc: 'Expand-on-click coupon input with loading state and success/error validation.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        @media(prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important;}}
        body{margin:0;display:flex;flex-direction:column;align-items:center;justify-content:center;
          gap:24px;height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .coupon-wrap{width:280px;}
        .coupon-toggle{display:flex;align-items:center;gap:6px;cursor:pointer;
          font-size:12px;font-weight:600;color:rgba(255,255,255,.45);user-select:none;
          transition:color .2s;border:none;background:none;padding:0;}
        .coupon-toggle:hover{color:rgba(255,255,255,.7);}
        .coupon-toggle svg{transition:transform .25s;}
        .coupon-toggle.open svg{transform:rotate(180deg);}
        .coupon-field{display:flex;gap:8px;margin-top:10px;max-height:0;overflow:hidden;
          transition:max-height .35s cubic-bezier(.4,0,.2,1),opacity .25s;}
        .coupon-field.open{max-height:60px;opacity:1;}
        .coupon-field{opacity:0;}
        .c-input{flex:1;padding:10px 12px;background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.1);border-radius:8px;
          color:#fff;font-size:12px;font-family:Inter,sans-serif;outline:none;
          transition:border-color .2s;}
        .c-input:focus{border-color:#7c3aed;}
        .c-input.success{border-color:#10b981;color:#34d399;}
        .c-input.error{border-color:#ef4444;}
        .c-apply{padding:10px 14px;background:linear-gradient(135deg,#7c3aed,#2563eb);
          border:none;border-radius:8px;color:#fff;font-size:12px;font-weight:700;
          cursor:pointer;white-space:nowrap;transition:opacity .2s;}
        .c-apply:hover{opacity:.85;}
        .c-msg{margin-top:6px;font-size:11px;height:14px;transition:all .2s;}
        .c-msg.success{color:#34d399;}
        .c-msg.error{color:#f87171;}
      </style>
      <script>
        function toggleCoupon(){
          const f=document.getElementById('couponField');
          const t=document.getElementById('couponToggle');
          const open=f.classList.toggle('open');
          t.classList.toggle('open',open);
          if(open)document.getElementById('couponIn').focus();
        }
        function applyCoupon(){
          const inp=document.getElementById('couponIn');
          const msg=document.getElementById('couponMsg');
          const btn=document.getElementById('couponBtn');
          const v=inp.value.trim().toUpperCase();
          btn.textContent='Checking…';btn.disabled=true;
          setTimeout(()=>{
            btn.textContent='Apply';btn.disabled=false;
            if(v==='SAVE40'){
              inp.classList.add('success');inp.classList.remove('error');
              msg.textContent='🎉 40% off applied!';msg.className='c-msg success';
            }else{
              inp.classList.add('error');inp.classList.remove('success');
              msg.textContent='Invalid code. Try SAVE40.';msg.className='c-msg error';
            }
          },900);
        }
      </script>
      <div class="coupon-wrap">
        <button class="coupon-toggle" id="couponToggle" onclick="toggleCoupon()" aria-expanded="false">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          Have a promo code?
        </button>
        <div class="coupon-field" id="couponField">
          <input class="c-input" id="couponIn" placeholder="Enter code e.g. SAVE40" aria-label="Promo code" onkeydown="if(event.key==='Enter')applyCoupon()"/>
          <button class="c-apply" id="couponBtn" onclick="applyCoupon()">Apply</button>
        </div>
        <div class="c-msg" id="couponMsg"></div>
      </div>`,
    code: `<div class="coupon-wrap">
  <button class="coupon-toggle" id="couponToggle" onclick="toggleCoupon()" aria-expanded="false" aria-controls="couponField">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
    Have a promo code?
  </button>
  <div class="coupon-field" id="couponField" aria-hidden="true">
    <input class="c-input" id="couponIn" type="text" placeholder="e.g. SAVE40" aria-label="Promo code" autocapitalize="characters">
    <button class="c-apply" id="couponBtn" onclick="applyCoupon()">Apply</button>
  </div>
  <div class="c-msg" id="couponMsg" aria-live="polite"></div>
</div>

<style>
@media (prefers-reduced-motion: reduce) { .coupon-field { transition: none; } }
.coupon-toggle { display: flex; align-items: center; gap: 6px; cursor: pointer; font-size: 12px; font-weight: 600; color: rgba(255,255,255,.45); border: none; background: none; padding: 0; }
.coupon-toggle svg { transition: transform .25s; }
.coupon-toggle.open svg { transform: rotate(180deg); }
.coupon-field { display: flex; gap: 8px; margin-top: 10px; max-height: 0; overflow: hidden; opacity: 0; transition: max-height .35s ease, opacity .25s; }
.coupon-field.open { max-height: 60px; opacity: 1; }
.c-input { flex: 1; padding: 10px 12px; background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.1); border-radius: 8px; color: #fff; font-size: 12px; font-family: inherit; outline: none; transition: border-color .2s; }
.c-input:focus { border-color: #7c3aed; box-shadow: 0 0 0 3px rgba(124,58,237,.15); }
.c-input.success { border-color: #10b981; color: #34d399; }
.c-input.error   { border-color: #ef4444; }
.c-apply { padding: 10px 14px; background: linear-gradient(135deg,#7c3aed,#2563eb); border: none; border-radius: 8px; color: #fff; font-size: 12px; font-weight: 700; cursor: pointer; }
.c-msg.success { color: #34d399; font-size: 11px; margin-top: 6px; }
.c-msg.error   { color: #f87171; font-size: 11px; margin-top: 6px; }
</style>

<script>
function toggleCoupon() {
  const field  = document.getElementById('couponField');
  const toggle = document.getElementById('couponToggle');
  const isOpen = field.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
  field.setAttribute('aria-hidden', !isOpen);
  if (isOpen) document.getElementById('couponIn').focus();
}
function applyCoupon() {
  const inp = document.getElementById('couponIn');
  const msg = document.getElementById('couponMsg');
  const btn = document.getElementById('couponBtn');
  const code = inp.value.trim().toUpperCase();
  btn.textContent = 'Checking…'; btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Apply'; btn.disabled = false;
    if (code === 'SAVE40') {
      inp.className = 'c-input success';
      msg.textContent = '🎉 40% discount applied!';
      msg.className = 'c-msg success';
    } else {
      inp.className = 'c-input error';
      msg.textContent = 'Invalid code. Try SAVE40.';
      msg.className = 'c-msg error';
    }
  }, 900);
}
</script>`
  },

  {
    id: 'checkout-success',
    title: 'Order Confirmation',
    category: 'checkout',
    tags: ['success', 'confirmation', 'order', 'animated'],
    desc: 'Animated order confirmation screen with confetti burst and order details.',
    featured: true,
    isNew: true,
    preview: `
      <style>
        @media(prefers-reduced-motion:reduce){*{animation:none!important;}}
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;overflow:hidden;}
        @keyframes successPop{0%{transform:scale(0);opacity:0;}60%{transform:scale(1.15);}100%{transform:scale(1);opacity:1;}}
        @keyframes confettiDrop{0%{transform:translateY(-20px) rotate(0);opacity:1;}100%{transform:translateY(180px) rotate(720deg);opacity:0;}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}
        .conf-wrap{position:relative;text-align:center;padding:20px;width:280px;}
        .conf-piece{position:absolute;width:7px;height:7px;border-radius:2px;
          animation:confettiDrop 1.4s ease-in forwards;}
        .success-ring{width:70px;height:70px;border-radius:50%;
          background:linear-gradient(135deg,rgba(16,185,129,.15),rgba(5,150,105,.1));
          border:2px solid rgba(16,185,129,.3);display:flex;align-items:center;
          justify-content:center;margin:0 auto 16px;
          animation:successPop .5s cubic-bezier(.34,1.56,.64,1) .2s both;}
        .success-check{font-size:30px;}
        .success-title{font-size:20px;font-weight:900;color:#fff;margin-bottom:6px;
          animation:fadeUp .4s ease .5s both;}
        .success-sub{font-size:13px;color:rgba(255,255,255,.45);margin-bottom:18px;
          animation:fadeUp .4s ease .6s both;}
        .success-card{background:#0f1629;border:1px solid rgba(255,255,255,.07);border-radius:12px;
          padding:14px 16px;margin-bottom:14px;animation:fadeUp .4s ease .7s both;}
        .sc-row{display:flex;justify-content:space-between;font-size:12px;padding:4px 0;}
        .sc-key{color:rgba(255,255,255,.4);}
        .sc-val{color:#fff;font-weight:600;}
        .success-btn{width:100%;padding:10px;background:linear-gradient(135deg,#7c3aed,#2563eb);
          border:none;border-radius:10px;color:#fff;font-size:13px;font-weight:700;cursor:pointer;
          animation:fadeUp .4s ease .8s both;}
      </style>
      <script>
        document.addEventListener('DOMContentLoaded',()=>{
          const colors=['#7c3aed','#2563eb','#10b981','#f59e0b','#06b6d4','#a78bfa'];
          const wrap=document.querySelector('.conf-wrap');
          for(let i=0;i<18;i++){
            const el=document.createElement('div');
            el.className='conf-piece';
            el.style.cssText=\`left:\${10+Math.random()*80}%;top:20px;background:\${colors[i%colors.length]};
              animation-delay:\${Math.random()*.6}s;animation-duration:\${1.2+Math.random()*.6}s;
              transform:rotate(\${Math.random()*360}deg);\`;
            wrap.appendChild(el);
          }
        });
      </script>
      <div class="conf-wrap">
        <div class="success-ring"><span class="success-check">✓</span></div>
        <div class="success-title">Order Confirmed!</div>
        <p class="success-sub">Check your email for the receipt — you're all set.</p>
        <div class="success-card">
          <div class="sc-row"><span class="sc-key">Order #</span><span class="sc-val">AU-28491</span></div>
          <div class="sc-row"><span class="sc-key">Plan</span><span class="sc-val">AURA Pro · Annual</span></div>
          <div class="sc-row"><span class="sc-key">Amount</span><span class="sc-val">$281.26</span></div>
          <div class="sc-row"><span class="sc-key">Email</span><span class="sc-val">you@example.com</span></div>
        </div>
        <button class="success-btn">Go to Dashboard →</button>
      </div>`,
    code: `<div class="conf-wrap" id="confWrap">
  <div class="success-ring" aria-hidden="true"><span class="success-check">✓</span></div>
  <h1 class="success-title">Order Confirmed!</h1>
  <p  class="success-sub">Check your email for the receipt.</p>
  <div class="success-card">
    <dl>
      <div class="sc-row"><dt class="sc-key">Order #</dt><dd class="sc-val">AU-28491</dd></div>
      <div class="sc-row"><dt class="sc-key">Plan</dt><dd class="sc-val">AURA Pro · Annual</dd></div>
      <div class="sc-row"><dt class="sc-key">Amount</dt><dd class="sc-val">$281.26</dd></div>
    </dl>
  </div>
  <button class="success-btn">Go to Dashboard →</button>
</div>

<style>
@keyframes successPop { 0% { transform: scale(0); opacity: 0; } 60% { transform: scale(1.15); } 100% { transform: scale(1); opacity: 1; } }
@keyframes fadeUp     { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
@keyframes confDrop   { 0% { transform: translateY(-20px) rotate(0); opacity: 1; } 100% { transform: translateY(200px) rotate(720deg); opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .success-ring, .success-title, .success-sub, .success-card, .success-btn, .conf-piece { animation: none; opacity: 1; transform: none; } }
.conf-wrap    { position: relative; text-align: center; padding: 24px; overflow: hidden; }
.conf-piece   { position: absolute; width: 7px; height: 7px; border-radius: 2px; animation: confDrop 1.4s ease-in forwards; }
.success-ring { width: 70px; height: 70px; border-radius: 50%; background: rgba(16,185,129,.12); border: 2px solid rgba(16,185,129,.3); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; animation: successPop .5s cubic-bezier(.34,1.56,.64,1) .2s both; }
.success-check{ font-size: 30px; }
.success-title{ font-size: 22px; font-weight: 900; color: #fff; margin-bottom: 6px; animation: fadeUp .4s ease .5s both; }
.success-sub  { font-size: 13px; color: rgba(255,255,255,.45); margin-bottom: 18px; animation: fadeUp .4s ease .6s both; }
.success-card { background: #0f1629; border: 1px solid rgba(255,255,255,.07); border-radius: 12px; padding: 14px 16px; margin-bottom: 14px; animation: fadeUp .4s ease .7s both; }
.sc-row { display: flex; justify-content: space-between; font-size: 12px; padding: 4px 0; }
.sc-key { color: rgba(255,255,255,.4); }
.sc-val { color: #fff; font-weight: 600; }
.success-btn  { width: 100%; padding: 10px; background: linear-gradient(135deg,#7c3aed,#2563eb); border: none; border-radius: 10px; color: #fff; font-size: 13px; font-weight: 700; cursor: pointer; animation: fadeUp .4s ease .8s both; }
</style>

<script>
// Confetti burst
const colors = ['#7c3aed','#2563eb','#10b981','#f59e0b','#06b6d4'];
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const wrap = document.getElementById('confWrap');
  for (let i = 0; i < 24; i++) {
    const el = document.createElement('div');
    el.className = 'conf-piece';
    el.style.cssText = \`left:\${10+Math.random()*80}%;top:10px;background:\${colors[i%colors.length]};animation-delay:\${Math.random()*.6}s;animation-duration:\${1.2+Math.random()*.6}s;\`;
    wrap.appendChild(el);
  }
}
</script>`
  },

  {
    id: 'pricing-toggle',
    title: 'Billing Toggle',
    category: 'checkout',
    tags: ['pricing', 'toggle', 'billing', 'annual'],
    desc: 'Monthly/Annual billing toggle with animated savings badge.',
    featured: false,
    isNew: true,
    preview: `
      <style>
        @media(prefers-reduced-motion:reduce){*{transition:none!important;}}
        body{margin:0;display:flex;align-items:center;justify-content:center;
          height:100vh;background:#0b0f1a;font-family:Inter,sans-serif;}
        .pt-wrap{text-align:center;}
        .pt-toggle{display:inline-flex;align-items:center;gap:14px;
          background:#0f1629;border:1px solid rgba(255,255,255,.08);
          border-radius:50px;padding:6px 16px;margin-bottom:24px;}
        .pt-label{font-size:13px;font-weight:600;cursor:pointer;padding:4px 0;
          transition:color .2s;}
        .pt-label.active{color:#fff;}
        .pt-label.inactive{color:rgba(255,255,255,.3);}
        .pt-pill{position:relative;width:44px;height:24px;background:linear-gradient(135deg,#7c3aed,#2563eb);
          border-radius:12px;cursor:pointer;transition:opacity .2s;}
        .pt-knob{position:absolute;top:3px;left:3px;width:18px;height:18px;
          background:#fff;border-radius:50%;
          transition:transform .3s cubic-bezier(.34,1.56,.64,1);}
        .pt-knob.annual{transform:translateX(20px);}
        .pt-save{display:inline-block;padding:3px 10px;font-size:10px;font-weight:700;
          color:#34d399;background:rgba(16,185,129,.12);border:1px solid rgba(16,185,129,.2);
          border-radius:50px;opacity:0;transition:opacity .3s;}
        .pt-save.visible{opacity:1;}
        .pt-cards{display:flex;gap:12px;}
        .pt-card{width:130px;background:#0f1629;border:1px solid rgba(255,255,255,.07);
          border-radius:14px;padding:16px;text-align:center;transition:border-color .3s;}
        .pt-card.selected{border-color:#7c3aed;box-shadow:0 0 30px rgba(124,58,237,.2);}
        .pt-plan{font-size:12px;font-weight:700;color:rgba(255,255,255,.5);margin-bottom:8px;}
        .pt-price{font-size:26px;font-weight:900;color:#fff;letter-spacing:-.03em;line-height:1;}
        .pt-per{font-size:10px;color:rgba(255,255,255,.3);margin-top:3px;}
        .pt-orig{font-size:11px;color:rgba(255,255,255,.25);text-decoration:line-through;margin-top:3px;}
      </style>
      <script>
        let annual=true;
        function toggleBilling(){
          annual=!annual;
          document.getElementById('ptKnob').classList.toggle('annual',annual);
          document.getElementById('ptSave').classList.toggle('visible',annual);
          document.getElementById('ptLblMonth').classList.toggle('active',!annual);
          document.getElementById('ptLblMonth').classList.toggle('inactive',annual);
          document.getElementById('ptLblYear').classList.toggle('active',annual);
          document.getElementById('ptLblYear').classList.toggle('inactive',!annual);
          document.getElementById('ptBasicPrice').textContent=annual?'$9':'$15';
          document.getElementById('ptProPrice').textContent=annual?'$29':'$49';
          document.getElementById('ptBasicPer').textContent=annual?'/mo billed yearly':'/month';
          document.getElementById('ptProPer').textContent=annual?'/mo billed yearly':'/month';
          document.getElementById('ptBasicOrig').style.display=annual?'block':'none';
          document.getElementById('ptProOrig').style.display=annual?'block':'none';
        }
      </script>
      <div class="pt-wrap">
        <div class="pt-toggle">
          <span class="pt-label inactive" id="ptLblMonth">Monthly</span>
          <div class="pt-pill" onclick="toggleBilling()" role="switch" aria-checked="true">
            <div class="pt-knob annual" id="ptKnob"></div>
          </div>
          <span class="pt-label active" id="ptLblYear">Annual</span>
        </div>
        <div style="margin-top:-16px;margin-bottom:20px;">
          <span class="pt-save visible" id="ptSave">Save 40%</span>
        </div>
        <div class="pt-cards">
          <div class="pt-card">
            <div class="pt-plan">Starter</div>
            <div class="pt-price" id="ptBasicPrice">$9</div>
            <div class="pt-per" id="ptBasicPer">/mo billed yearly</div>
            <div class="pt-orig" id="ptBasicOrig">$15/mo</div>
          </div>
          <div class="pt-card selected">
            <div class="pt-plan">Pro ⭐</div>
            <div class="pt-price" id="ptProPrice">$29</div>
            <div class="pt-per" id="ptProPer">/mo billed yearly</div>
            <div class="pt-orig" id="ptProOrig">$49/mo</div>
          </div>
        </div>
      </div>`,
    code: `<div class="pt-wrap">
  <div class="pt-toggle">
    <span class="pt-label inactive" id="ptLblMonth">Monthly</span>
    <button class="pt-pill" id="ptSwitch" onclick="toggleBilling()"
      role="switch" aria-checked="true" aria-label="Toggle annual billing">
      <div class="pt-knob annual" id="ptKnob"></div>
    </button>
    <span class="pt-label active" id="ptLblYear">Annual</span>
  </div>
  <div class="pt-save-wrap">
    <span class="pt-save visible" id="ptSave" aria-live="polite">Save 40%</span>
  </div>
  <div class="pt-cards">
    <div class="pt-card">
      <div class="pt-plan">Starter</div>
      <div class="pt-price" id="ptBasicPrice">$9</div>
      <div class="pt-per"   id="ptBasicPer">/mo billed yearly</div>
      <div class="pt-orig"  id="ptBasicOrig">$15/mo</div>
    </div>
    <div class="pt-card selected">
      <div class="pt-plan">Pro ⭐</div>
      <div class="pt-price" id="ptProPrice">$29</div>
      <div class="pt-per"   id="ptProPer">/mo billed yearly</div>
      <div class="pt-orig"  id="ptProOrig">$49/mo</div>
    </div>
  </div>
</div>

<style>
@media (prefers-reduced-motion: reduce) { .pt-knob, .pt-save { transition: none; } }
.pt-toggle { display: inline-flex; align-items: center; gap: 14px; background: #0f1629; border: 1px solid rgba(255,255,255,.08); border-radius: 50px; padding: 6px 16px; }
.pt-label  { font-size: 13px; font-weight: 600; cursor: pointer; }
.pt-label.active   { color: #fff; }
.pt-label.inactive { color: rgba(255,255,255,.3); }
.pt-pill   { position: relative; width: 44px; height: 24px; background: linear-gradient(135deg,#7c3aed,#2563eb); border-radius: 12px; border: none; cursor: pointer; }
.pt-knob   { position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; background: #fff; border-radius: 50%; transition: transform .3s cubic-bezier(.34,1.56,.64,1); }
.pt-knob.annual { transform: translateX(20px); }
.pt-save   { display: inline-block; padding: 3px 10px; font-size: 10px; font-weight: 700; color: #34d399; background: rgba(16,185,129,.12); border: 1px solid rgba(16,185,129,.2); border-radius: 50px; opacity: 0; transition: opacity .3s; }
.pt-save.visible { opacity: 1; }
.pt-cards  { display: flex; gap: 12px; }
.pt-card   { flex: 1; background: #0f1629; border: 1px solid rgba(255,255,255,.07); border-radius: 14px; padding: 16px; text-align: center; transition: border-color .3s; }
.pt-card.selected { border-color: #7c3aed; box-shadow: 0 0 30px rgba(124,58,237,.2); }
.pt-plan   { font-size: 12px; font-weight: 700; color: rgba(255,255,255,.5); margin-bottom: 8px; }
.pt-price  { font-size: 26px; font-weight: 900; color: #fff; letter-spacing: -.03em; }
.pt-per    { font-size: 10px; color: rgba(255,255,255,.3); margin-top: 3px; }
.pt-orig   { font-size: 11px; color: rgba(255,255,255,.25); text-decoration: line-through; }
</style>

<script>
let annual = true;
function toggleBilling() {
  annual = !annual;
  document.getElementById('ptSwitch').setAttribute('aria-checked', annual);
  document.getElementById('ptKnob').classList.toggle('annual', annual);
  document.getElementById('ptSave').classList.toggle('visible', annual);
  ['ptLblMonth','ptLblYear'].forEach((id,i) => {
    const isActive = annual ? i === 1 : i === 0;
    document.getElementById(id).className = 'pt-label ' + (isActive ? 'active' : 'inactive');
  });
  document.getElementById('ptBasicPrice').textContent = annual ? '$9'  : '$15';
  document.getElementById('ptProPrice').textContent   = annual ? '$29' : '$49';
  document.getElementById('ptBasicPer').textContent   = annual ? '/mo billed yearly' : '/month';
  document.getElementById('ptProPer').textContent     = annual ? '/mo billed yearly' : '/month';
  ['ptBasicOrig','ptProOrig'].forEach(id => document.getElementById(id).style.display = annual ? 'block' : 'none');
}
</script>`
  }

];

/* ─── Category manifest (drives filter pills) ─── */
const CATEGORIES = [
  { id: 'all',          label: 'All',           icon: '⊞' },
  { id: 'button',       label: 'Buttons',       icon: '⬡' },
  { id: 'card',         label: 'Cards',         icon: '▣' },
  { id: 'animation',    label: 'Animations',    icon: '✦' },
  { id: 'background',   label: 'Backgrounds',   icon: '⬤' },
  { id: 'input',        label: 'Inputs',        icon: '□' },
  { id: 'badge',        label: 'Badges',        icon: '◈' },
  { id: 'navbar',       label: 'Navigation',    icon: '☰' },
  { id: 'hero',         label: 'Hero Sections', icon: '▲' },
  { id: 'pricing',      label: 'Pricing',       icon: '$' },
  { id: 'testimonial',  label: 'Testimonials',  icon: '★' },
  { id: 'footer',       label: 'Footers',       icon: '▬' },
  { id: 'form',         label: 'Forms',         icon: '✎' },
  { id: 'table',        label: 'Tables',        icon: '▦' },
  { id: 'modal',        label: 'Modals',        icon: '◻' },
  { id: 'sidebar',      label: 'Sidebars',      icon: '◧' },
  { id: 'dashboard',    label: 'Dashboard',     icon: '◫' },
  { id: 'ecommerce',    label: 'E-Commerce',    icon: '🛒'},
  { id: 'auth',         label: 'Auth',          icon: '🔒'},
  { id: 'feature',      label: 'Features',      icon: '✧' },
  { id: 'cta',          label: 'CTA Sections',  icon: '▶' },
  { id: 'loader',       label: 'Loaders',       icon: '◌' },
  { id: 'toggle',       label: 'Toggles',       icon: '⇄' },
  { id: 'tooltip',      label: 'Tooltips',      icon: '💬'},
  { id: 'onboarding',   label: 'Onboarding',    icon: '🚀'},
  { id: 'checkout',     label: 'Checkout',      icon: '💳'},
  { id: 'advanced',     label: 'Advanced',      icon: '⚙️'},
];
