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
];
