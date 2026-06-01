/* AURA UI V4 — Enterprise Component Library */
const V4_COMPONENTS = [
  // ─── HERO SECTIONS (8 COMPONENTS) ───
  {
    id: 'hero-saas',
    title: 'SaaS Hero',
    category: 'hero',
    tags: ['hero', 'saas', 'dashboard', 'preview'],
    desc: 'Modern SaaS hero section featuring a glowing dashboard mockup and clear CTAs.',
    featured: true,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; display: flex; align-items: center; justify-content: center; min-height: 100vh; overflow: hidden; color: #fff; padding: 20px; }
      .hero { text-align: center; max-width: 500px; }
      .badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(108, 99, 255, 0.1); border: 1px solid rgba(108, 99, 255, 0.3); color: #00D4FF; padding: 4px 12px; border-radius: 50px; font-size: 10px; font-weight: 600; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.05em; }
      .title { font-size: 26px; font-weight: 800; color: #fff; line-height: 1.2; margin: 0 0 10px 0; }
      .title span { background: linear-gradient(135deg, #6C63FF, #00D4FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      .desc { font-size: 12px; color: #94A3B8; margin-bottom: 16px; line-height: 1.5; }
      .actions { display: flex; gap: 10px; justify-content: center; margin-bottom: 20px; }
      .btn { padding: 8px 16px; border-radius: 8px; font-size: 11px; font-weight: 700; border: none; cursor: pointer; transition: all 0.2s; text-decoration: none; display: inline-block; }
      .btn-p { background: linear-gradient(135deg, #6C63FF, #8B5CF6); color: #fff; box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3); }
      .btn-p:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(108, 99, 255, 0.4); }
      .btn-s { background: rgba(255,255,255,0.05); color: #fff; border: 1px solid rgba(255,255,255,0.1); }
      .btn-s:hover { background: rgba(255,255,255,0.1); }
      .mockup { width: 100%; max-width: 420px; height: 120px; background: rgba(11, 18, 32, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; margin: 0 auto; position: relative; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
      .mockup::before { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, transparent, #050816); z-index: 2; pointer-events: none; }
      .mockup-header { height: 18px; border-bottom: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; padding: 0 8px; gap: 4px; }
      .dot { width: 4px; height: 4px; border-radius: 50%; background: rgba(255,255,255,0.2); }
      .mockup-body { padding: 10px; display: flex; gap: 8px; }
      .sidebar { width: 25%; height: 80px; background: rgba(255,255,255,0.02); border-radius: 4px; }
      .main { flex: 1; display: flex; flex-direction: column; gap: 6px; }
      .chart { height: 40px; background: linear-gradient(180deg, rgba(108, 99, 255, 0.2), transparent); border: 1px solid rgba(108, 99, 255, 0.4); border-radius: 4px; }
      .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; }
      .grid-item { height: 16px; background: rgba(255,255,255,0.03); border-radius: 2px; }
      @media(prefers-reduced-motion: reduce) {
        .btn { transition: none !important; }
        .btn-p:hover { transform: none !important; }
      }
    </style>
    <div class="hero">
      <div class="badge">Aura V4 Release</div>
      <h1 class="title">Next Gen <span>SaaS Platform</span></h1>
      <p class="desc">Automate your design-to-code workflow with the world's most premium component library. Zero dependencies, pure performance.</p>
      <div class="actions">
        <a class="btn btn-p">Get Started</a>
        <a class="btn btn-s">Watch Demo</a>
      </div>
      <div class="mockup">
        <div class="mockup-header">
          <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        </div>
        <div class="mockup-body">
          <div class="sidebar"></div>
          <div class="main">
            <div class="chart"></div>
            <div class="grid">
              <div class="grid-item"></div><div class="grid-item"></div><div class="grid-item"></div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    code: `<section class="hero-saas-section">
  <div class="hero-container">
    <div class="hero-badge">Aura V4 Release</div>
    <h1 class="hero-title">Next Gen <span class="gradient-text">SaaS Platform</span></h1>
    <p class="hero-desc">Automate your design-to-code workflow with the world's most premium component library. Zero dependencies, pure performance.</p>
    <div class="hero-actions">
      <a href="#" class="hero-btn primary-btn">Get Started</a>
      <a href="#" class="hero-btn secondary-btn">Watch Demo</a>
    </div>
    <div class="dashboard-mockup">
      <div class="mockup-header">
        <span class="mockup-dot"></span>
        <span class="mockup-dot"></span>
        <span class="mockup-dot"></span>
      </div>
      <div class="mockup-content">
        <div class="mockup-sidebar"></div>
        <div class="mockup-main">
          <div class="mockup-chart"></div>
          <div class="mockup-grid">
            <div class="mockup-grid-card"></div>
            <div class="mockup-grid-card"></div>
            <div class="mockup-grid-card"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
@media (prefers-reduced-motion: reduce) {
  .hero-btn, .dashboard-mockup { transition: none !important; }
}
.hero-saas-section { background-color: #050816; color: #ffffff; padding: 120px 24px 80px; display: flex; justify-content: center; overflow: hidden; font-family: 'Inter', sans-serif; }
.hero-container { max-width: 1200px; width: 100%; text-align: center; display: flex; flex-direction: column; align-items: center; }
.hero-badge { display: inline-flex; align-items: center; background: rgba(108, 99, 255, 0.1); border: 1px solid rgba(108, 99, 255, 0.3); color: #00D4FF; padding: 6px 16px; border-radius: 50px; font-size: 13px; font-weight: 600; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 0.05em; }
.hero-title { font-size: 64px; font-weight: 800; line-height: 1.1; letter-spacing: -0.02em; margin: 0 0 24px 0; max-width: 800px; }
.gradient-text { background: linear-gradient(135deg, #6C63FF, #00D4FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.hero-desc { font-size: 18px; color: #94A3B8; max-width: 600px; margin-bottom: 40px; line-height: 1.6; }
.hero-actions { display: flex; gap: 16px; margin-bottom: 64px; }
.hero-btn { padding: 14px 28px; border-radius: 10px; font-size: 15px; font-weight: 700; text-decoration: none; transition: all 0.3s ease; }
.primary-btn { background: linear-gradient(135deg, #6C63FF, #8B5CF6); color: #ffffff; box-shadow: 0 4px 20px rgba(108, 99, 255, 0.4); }
.primary-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(108, 99, 255, 0.6); }
.secondary-btn { background: rgba(255, 255, 255, 0.05); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.1); }
.secondary-btn:hover { background: rgba(255, 255, 255, 0.1); }
.dashboard-mockup { width: 100%; max-width: 1000px; background: rgba(11, 18, 32, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; overflow: hidden; box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6); position: relative; }
.dashboard-mockup::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 60%, #050816); pointer-events: none; }
.mockup-header { height: 40px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; padding: 0 16px; gap: 8px; }
.mockup-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255, 255, 255, 0.2); }
.mockup-content { padding: 24px; display: flex; gap: 16px; height: 380px; }
.mockup-sidebar { width: 200px; background: rgba(255, 255, 255, 0.02); border-radius: 12px; }
.mockup-main { flex: 1; display: flex; flex-direction: column; gap: 16px; }
.mockup-chart { height: 200px; background: linear-gradient(180deg, rgba(108, 99, 255, 0.15), transparent); border: 1px solid rgba(108, 99, 255, 0.3); border-radius: 12px; }
.mockup-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; flex: 1; }
.mockup-grid-card { background: rgba(255, 255, 255, 0.03); border-radius: 12px; }
</style>`
  },
  {
    id: 'hero-ai',
    title: 'AI Chat Hero',
    category: 'hero',
    tags: ['hero', 'ai', 'chatbot', 'input'],
    desc: 'Chat-centric hero featuring a prompt input bar and glowing feedback bubbles.',
    featured: true,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; display: flex; align-items: center; justify-content: center; min-height: 100vh; overflow: hidden; color: #fff; padding: 20px; }
      .hero { text-align: center; max-width: 480px; width: 100%; }
      .title { font-size: 24px; font-weight: 800; margin-bottom: 12px; }
      .title span { background: linear-gradient(135deg, #00D4FF, #8B5CF6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      .desc { font-size: 11px; color: #94A3B8; margin-bottom: 20px; line-height: 1.5; }
      .chat-box { background: rgba(11, 18, 32, 0.8); border: 1px solid rgba(108, 99, 255, 0.25); border-radius: 12px; padding: 12px; margin-bottom: 15px; box-shadow: 0 10px 30px rgba(108, 99, 255, 0.1); position: relative; }
      .chat-bubble { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 10px; text-align: left; }
      .avatar { width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; color: #fff; }
      .av-u { background: #6C63FF; }
      .av-ai { background: linear-gradient(135deg, #00D4FF, #8B5CF6); }
      .bubble-content { font-size: 10px; line-height: 1.4; padding: 6px 10px; border-radius: 8px; background: rgba(255,255,255,0.03); max-width: 80%; }
      .chat-input-wrap { display: flex; gap: 6px; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); padding: 4px 6px; border-radius: 8px; }
      .chat-input { flex: 1; background: transparent; border: none; outline: none; color: #fff; font-size: 10px; padding: 4px; }
      .chat-btn { padding: 4px 10px; border-radius: 6px; border: none; background: #6C63FF; color: #fff; font-weight: bold; font-size: 9px; cursor: pointer; }
    </style>
    <div class="hero">
      <h1 class="title">Deploy <span>AI Agents</span> Instantly</h1>
      <p class="desc">The world's first AI-powered component designer. Converse with your layout and watch it compile in real time.</p>
      <div class="chat-box">
        <div class="chat-bubble">
          <div class="avatar av-u">U</div>
          <div class="bubble-content">Build me a premium dark layout with cyan accents.</div>
        </div>
        <div class="chat-bubble">
          <div class="avatar av-ai">AI</div>
          <div class="bubble-content">Certainly. Generating AURA V4 design specifications now...</div>
        </div>
        <div class="chat-input-wrap">
          <input class="chat-input" type="text" placeholder="Ask AI to design anything..." readonly>
          <button class="chat-btn">Generate</button>
        </div>
      </div>
    </div>`,
    code: `<section class="hero-ai-section">
  <div class="ai-hero-container">
    <h1 class="ai-title">Deploy <span class="gradient-glow">AI Agents</span> Instantly</h1>
    <p class="ai-desc">The world's first AI-powered component designer. Converse with your layout and watch it compile in real time.</p>
    <div class="ai-chat-box">
      <div class="ai-bubble user-bubble">
        <div class="ai-avatar">U</div>
        <div class="ai-message">Build me a premium dark layout with cyan accents.</div>
      </div>
      <div class="ai-bubble agent-bubble">
        <div class="ai-avatar agent-av">AI</div>
        <div class="ai-message">Certainly. Generating AURA V4 design specifications now...</div>
      </div>
      <form class="ai-input-form" onsubmit="event.preventDefault()">
        <input type="text" class="ai-prompt-input" placeholder="Ask AI to design anything...">
        <button type="submit" class="ai-submit-btn">Generate</button>
      </form>
    </div>
  </div>
</section>

<style>
.hero-ai-section { background: #050816; color: #fff; padding: 100px 24px; display: flex; justify-content: center; font-family: 'Inter', sans-serif; }
.ai-hero-container { max-width: 800px; width: 100%; text-align: center; }
.ai-title { font-size: 56px; font-weight: 800; margin-bottom: 20px; letter-spacing: -0.02em; }
.gradient-glow { background: linear-gradient(135deg, #00D4FF, #8B5CF6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.ai-desc { font-size: 18px; color: #94A3B8; max-width: 600px; margin: 0 auto 48px; line-height: 1.6; }
.ai-chat-box { background: rgba(11, 18, 32, 0.8); border: 1px solid rgba(108, 99, 255, 0.2); border-radius: 16px; padding: 24px; text-align: left; box-shadow: 0 20px 50px rgba(108, 99, 255, 0.08); }
.ai-bubble { display: flex; gap: 12px; margin-bottom: 16px; }
.ai-avatar { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; background: #6C63FF; flex-shrink: 0; }
.agent-av { background: linear-gradient(135deg, #00D4FF, #8B5CF6); }
.ai-message { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); padding: 12px 18px; border-radius: 12px; font-size: 14px; line-height: 1.5; color: #e2e8f0; }
.ai-input-form { display: flex; gap: 12px; background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.08); padding: 6px 8px; border-radius: 12px; margin-top: 24px; }
.ai-prompt-input { flex: 1; background: transparent; border: none; outline: none; color: #fff; font-size: 14px; padding: 6px 12px; }
.ai-submit-btn { background: #6C63FF; border: none; color: #fff; padding: 10px 20px; border-radius: 8px; font-weight: 700; cursor: pointer; transition: background 0.2s; }
.ai-submit-btn:hover { background: #5a52e6; }
</style>`
  },
  {
    id: 'hero-startup',
    title: 'Startup Hero',
    category: 'hero',
    tags: ['hero', 'startup', 'saas', 'clean'],
    desc: 'Impactful design tailored for fast-growing startups, showcasing a floating metrics chart.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; display: flex; align-items: center; justify-content: center; min-height: 100vh; overflow: hidden; color: #fff; padding: 20px; }
      .hero { text-align: center; max-width: 440px; }
      .tagline { color: #8B5CF6; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 8px; }
      .title { font-size: 24px; font-weight: 800; line-height: 1.2; margin: 0 0 10px 0; }
      .desc { font-size: 11px; color: #94A3B8; margin-bottom: 16px; line-height: 1.5; }
      .action-row { display: flex; gap: 8px; justify-content: center; margin-bottom: 24px; }
      .btn { padding: 8px 14px; border-radius: 6px; font-size: 10px; font-weight: 700; border: none; cursor: pointer; text-decoration: none; }
      .btn-p { background: #6C63FF; color: #fff; }
      .btn-s { background: transparent; color: #94A3B8; border: 1px solid rgba(255,255,255,0.1); }
      .visual-box { background: rgba(11, 18, 32, 0.4); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 10px; display: flex; align-items: center; justify-content: space-between; }
      .v-item { text-align: left; }
      .v-num { font-size: 16px; font-weight: 800; color: #00D4FF; }
      .v-lbl { font-size: 8px; color: #94A3B8; }
    </style>
    <div class="hero">
      <div class="tagline">Next-Generation Infrastructure</div>
      <h1 class="title">The Platform for Global Scale</h1>
      <p class="desc">Spin up servers in milliseconds, manage container workloads, and secure network infrastructure instantly.</p>
      <div class="action-row">
        <a class="btn btn-p">Deploy Free</a>
        <a class="btn btn-s">Book Demo</a>
      </div>
      <div class="visual-box">
        <div class="v-item"><div class="v-num">99.99%</div><div class="v-lbl">Uptime SLA</div></div>
        <div class="v-item"><div class="v-num">240+</div><div class="v-lbl">Edge Locations</div></div>
        <div class="v-item"><div class="v-num">&lt; 15ms</div><div class="v-lbl">Global Latency</div></div>
      </div>
    </div>`,
    code: `<section class="hero-startup-section">
  <div class="startup-hero-container">
    <div class="startup-tagline">Next-Generation Infrastructure</div>
    <h1 class="startup-title">The Platform for Global Scale</h1>
    <p class="startup-desc">Spin up servers in milliseconds, manage container workloads, and secure network infrastructure instantly.</p>
    <div class="startup-actions">
      <a href="#" class="startup-btn primary-btn">Deploy Free</a>
      <a href="#" class="startup-btn secondary-btn">Book Demo</a>
    </div>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-num">99.99%</div>
        <div class="stat-label">Uptime SLA</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">240+</div>
        <div class="stat-label">Edge Locations</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">&lt; 15ms</div>
        <div class="stat-label">Global Latency</div>
      </div>
    </div>
  </div>
</section>

<style>
.hero-startup-section { background: #050816; color: #fff; padding: 110px 24px; display: flex; justify-content: center; font-family: 'Inter', sans-serif; }
.startup-hero-container { max-width: 1000px; width: 100%; text-align: center; }
.startup-tagline { color: #8B5CF6; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 16px; }
.startup-title { font-size: 60px; font-weight: 800; line-height: 1.1; margin-bottom: 24px; }
.startup-desc { font-size: 18px; color: #94A3B8; max-width: 650px; margin: 0 auto 40px; line-height: 1.6; }
.startup-actions { display: flex; gap: 16px; justify-content: center; margin-bottom: 64px; }
.startup-btn { padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 700; text-decoration: none; transition: all 0.2s; }
.stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 700px; margin: 0 auto; background: rgba(11, 18, 32, 0.4); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; padding: 24px; }
.stat-num { font-size: 32px; font-weight: 800; color: #00D4FF; margin-bottom: 4px; }
.stat-label { font-size: 12px; color: #94A3B8; text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em; }
</style>`
  },
  {
    id: 'hero-glass',
    title: 'Glass Hero',
    category: 'hero',
    tags: ['hero', 'glassmorphism', 'backdrop', 'premium'],
    desc: 'Elegant hero styling wrapped in frosted glass sheets with glowing backdrops.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; display: flex; align-items: center; justify-content: center; min-height: 100vh; overflow: hidden; color: #fff; padding: 20px; position: relative; }
      .bg-glow { position: absolute; width: 120px; height: 120px; background: radial-gradient(circle, rgba(108,99,255,0.4) 0%, transparent 70%); top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1; pointer-events: none; }
      .glass-card { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 24px; max-width: 400px; text-align: center; z-index: 2; box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
      .title { font-size: 22px; font-weight: 800; margin: 0 0 10px 0; }
      .desc { font-size: 11px; color: #CBD5E1; line-height: 1.5; margin-bottom: 16px; }
      .btn { padding: 8px 16px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; color: #fff; font-size: 10px; font-weight: 700; cursor: pointer; text-decoration: none; display: inline-block; transition: all 0.2s; }
      .btn:hover { background: #fff; color: #050816; }
    </style>
    <div class="bg-glow"></div>
    <div class="glass-card">
      <h1 class="title">Pure Glassmorphism</h1>
      <p class="desc">A design aesthetic built with high-fidelity frosted backdrops, subtle outlines, and organic colored light glows.</p>
      <a class="btn">Explore System</a>
    </div>`,
    code: `<div class="glass-hero-wrapper">
  <div class="radial-glow-element"></div>
  <section class="glass-card-hero">
    <h1 class="glass-title">Pure Glassmorphism</h1>
    <p class="glass-desc">A design aesthetic built with high-fidelity frosted backdrops, subtle outlines, and organic colored light glows.</p>
    <a href="#" class="glass-action-btn">Explore System</a>
  </section>
</div>

<style>
.glass-hero-wrapper { background: #050816; display: flex; align-items: center; justify-content: center; padding: 120px 24px; position: relative; overflow: hidden; width: 100%; box-sizing: border-box; }
.radial-glow-element { position: absolute; width: 450px; height: 450px; background: radial-gradient(circle, rgba(108,99,255,0.3) 0%, transparent 70%); top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1; pointer-events: none; }
.glass-card-hero { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 24px; padding: 48px; max-width: 600px; text-align: center; z-index: 2; box-shadow: 0 30px 60px rgba(0,0,0,0.4); }
.glass-title { font-size: 48px; font-weight: 800; color: #fff; margin: 0 0 20px 0; }
.glass-desc { font-size: 16px; color: #e2e8f0; line-height: 1.6; margin-bottom: 32px; }
.glass-action-btn { display: inline-block; padding: 14px 28px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15); border-radius: 10px; color: #fff; font-size: 14px; font-weight: 700; text-decoration: none; transition: all 0.2s; }
.glass-action-btn:hover { background: #fff; color: #050816; border-color: #fff; }
</style>`
  },
  {
    id: 'hero-split',
    title: 'Split Hero',
    category: 'hero',
    tags: ['hero', 'split', 'grid', 'interactive'],
    desc: 'A grid split hero layout with copy on the left and interactive stats component on the right.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; display: flex; align-items: center; justify-content: center; min-height: 100vh; overflow: hidden; color: #fff; padding: 20px; }
      .container { display: flex; gap: 20px; max-width: 500px; align-items: center; }
      .col-left { flex: 1.2; text-align: left; }
      .col-right { flex: 0.8; }
      .title { font-size: 20px; font-weight: 800; margin: 0 0 8px 0; }
      .desc { font-size: 10px; color: #94A3B8; line-height: 1.4; margin-bottom: 12px; }
      .btn { padding: 6px 12px; background: #6C63FF; color: #fff; border: none; border-radius: 6px; font-size: 10px; font-weight: 700; cursor: pointer; text-decoration: none; display: inline-block; }
      .interactive-panel { background: #0b1220; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 10px; display: flex; flex-direction: column; gap: 6px; }
      .panel-row { height: 16px; background: rgba(255,255,255,0.03); border-radius: 4px; display: flex; align-items: center; padding: 0 6px; }
      .bar { height: 4px; background: #00D4FF; border-radius: 2px; }
    </style>
    <div class="container">
      <div class="col-left">
        <h1 class="title">Sync Your Workflows</h1>
        <p class="desc">Connect all your workspace tools in a single click. Keep developer workflows and tracking synchronized effortlessly.</p>
        <a class="btn">Connect App</a>
      </div>
      <div class="col-right">
        <div class="interactive-panel">
          <div class="panel-row" style="font-size: 7px; color: #00D4FF;">GitHub Node</div>
          <div class="panel-row"><div class="bar" style="width: 80%;"></div></div>
          <div class="panel-row" style="font-size: 7px; color: #8B5CF6;">Vercel Hook</div>
          <div class="panel-row"><div class="bar" style="width: 45%; background: #8B5CF6;"></div></div>
        </div>
      </div>
    </div>`,
    code: `<section class="hero-split-section">
  <div class="split-container">
    <div class="split-left">
      <h1 class="split-title">Sync Your Workflows</h1>
      <p class="split-desc">Connect all your workspace tools in a single click. Keep developer workflows and tracking synchronized effortlessly.</p>
      <div class="split-actions">
        <a href="#" class="btn-primary">Connect App</a>
      </div>
    </div>
    <div class="split-right">
      <div class="interactive-panel">
        <div class="panel-header">Integration Pipeline</div>
        <div class="panel-card">
          <div class="card-meta"><span>GitHub Node</span><span class="active-status">Active</span></div>
          <div class="progress-bar"><div class="fill" style="width: 80%"></div></div>
        </div>
        <div class="panel-card">
          <div class="card-meta"><span>Vercel Deploy</span><span class="active-status cyan">Running</span></div>
          <div class="progress-bar"><div class="fill purple" style="width: 50%"></div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
.hero-split-section { background: #050816; color: #fff; padding: 120px 24px; display: flex; justify-content: center; font-family: 'Inter', sans-serif; }
.split-container { max-width: 1100px; width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
.split-title { font-size: 52px; font-weight: 800; line-height: 1.1; margin-bottom: 20px; }
.split-desc { font-size: 18px; color: #94A3B8; line-height: 1.6; margin-bottom: 32px; }
.btn-primary { display: inline-block; padding: 14px 28px; background: #6C63FF; color: #fff; font-weight: 700; text-decoration: none; border-radius: 8px; transition: background 0.2s; }
.btn-primary:hover { background: #5a52e6; }
.interactive-panel { background: #0b1220; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
.panel-header { font-size: 14px; font-weight: 700; text-transform: uppercase; color: #94A3B8; letter-spacing: 0.1em; }
.panel-card { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); padding: 16px; border-radius: 10px; }
.card-meta { display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; margin-bottom: 8px; }
.active-status { font-size: 11px; color: #00D4FF; }
.active-status.cyan { color: #00D4FF; }
.active-status.purple { color: #8B5CF6; }
.progress-bar { height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; }
.fill { height: 100%; background: #6C63FF; border-radius: 3px; }
.fill.purple { background: #8B5CF6; }
@media (max-width: 768px) {
  .split-container { grid-template-columns: 1fr; }
}
</style>`
  },
  {
    id: 'hero-minimal',
    title: 'Minimal Hero',
    category: 'hero',
    tags: ['hero', 'minimalist', 'clean', 'modern'],
    desc: 'Clean and readable typography with unified colors and single search input mockup.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; display: flex; align-items: center; justify-content: center; min-height: 100vh; overflow: hidden; color: #fff; padding: 20px; }
      .hero { text-align: center; max-width: 420px; }
      .title { font-size: 24px; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 10px 0; color: #fff; }
      .desc { font-size: 11px; color: #94A3B8; line-height: 1.5; margin-bottom: 18px; }
      .input-box { display: flex; align-items: center; background: #0b1220; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 4px 8px; max-width: 320px; margin: 0 auto; }
      .input-box input { border: none; background: transparent; outline: none; color: #fff; font-size: 11px; flex: 1; padding: 4px; }
      .input-box button { background: #6C63FF; border: none; border-radius: 6px; color: #fff; font-size: 10px; font-weight: 700; padding: 4px 10px; cursor: pointer; }
    </style>
    <div class="hero">
      <h1 class="title">Create with Confidence</h1>
      <p class="desc">A minimal frontend layout framework for building blazing fast user interfaces. Search our code archive below.</p>
      <div class="input-box">
        <input type="text" placeholder="Search templates..." readonly>
        <button>Search</button>
      </div>
    </div>`,
    code: `<section class="hero-minimalist">
  <div class="min-hero-container">
    <h1 class="min-title">Create with Confidence</h1>
    <p class="min-desc">A minimal frontend layout framework for building blazing fast user interfaces. Search our code archive below.</p>
    <form class="min-search-bar" onsubmit="event.preventDefault()">
      <input type="text" class="search-input" placeholder="Search templates...">
      <button type="submit" class="search-submit">Search</button>
    </form>
  </div>
</section>

<style>
.hero-minimalist { background: #050816; color: #fff; padding: 120px 24px; display: flex; justify-content: center; font-family: 'Inter', sans-serif; }
.min-hero-container { max-width: 700px; width: 100%; text-align: center; }
.min-title { font-size: 52px; font-weight: 700; color: #fff; margin-bottom: 16px; letter-spacing: -0.02em; }
.min-desc { font-size: 18px; color: #94A3B8; line-height: 1.6; margin-bottom: 32px; }
.min-search-bar { display: flex; align-items: center; background: #0b1220; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 6px 8px; max-width: 480px; margin: 0 auto; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
.search-input { border: none; background: transparent; outline: none; color: #fff; font-size: 14px; flex: 1; padding: 8px 12px; }
.search-submit { background: #6C63FF; border: none; border-radius: 8px; color: #fff; font-size: 13px; font-weight: 700; padding: 10px 20px; cursor: pointer; transition: background 0.2s; }
.search-submit:hover { background: #5a52e6; }
</style>`
  },
  {
    id: 'hero-gradient',
    title: 'Gradient Mesh Hero',
    category: 'hero',
    tags: ['hero', 'gradient', 'mesh', 'animation'],
    desc: 'Stunning layout incorporating a slowly shifting colored mesh gradient background.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; display: flex; align-items: center; justify-content: center; min-height: 100vh; overflow: hidden; color: #fff; padding: 20px; position: relative; }
      .mesh { position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle at 30% 20%, rgba(108,99,255,0.15) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(0,212,255,0.15) 0%, transparent 40%); animation: spin 20s linear infinite; z-index: 1; pointer-events: none; }
      .content { text-align: center; max-width: 400px; z-index: 2; }
      .title { font-size: 26px; font-weight: 900; margin: 0 0 10px 0; background: linear-gradient(135deg, #fff 40%, #00D4FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      .desc { font-size: 11px; color: #94A3B8; margin-bottom: 16px; line-height: 1.5; }
      .btn { padding: 8px 18px; background: linear-gradient(135deg, #6C63FF, #8B5CF6); border: none; border-radius: 8px; color: #fff; font-size: 10px; font-weight: 700; cursor: pointer; text-decoration: none; display: inline-block; }
      @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      @media(prefers-reduced-motion: reduce) { .mesh { animation: none !important; } }
    </style>
    <div class="mesh"></div>
    <div class="content">
      <h1 class="title">Atmospheric Mesh</h1>
      <p class="desc">Deploy immersive design systems using interactive animated radial spheres. Perfectly optimized for GPU-accelerated graphics.</p>
      <a class="btn">Explore Library</a>
    </div>`,
    code: `<div class="mesh-hero-container">
  <div class="mesh-background"></div>
  <section class="mesh-hero-content">
    <h1 class="mesh-title">Atmospheric Mesh</h1>
    <p class="mesh-desc">Deploy immersive design systems using interactive animated radial spheres. Perfectly optimized for GPU-accelerated graphics.</p>
    <a href="#" class="mesh-btn">Explore Library</a>
  </section>
</div>

<style>
@media(prefers-reduced-motion: reduce) {
  .mesh-background { animation: none !important; }
}
.mesh-hero-container { background: #050816; position: relative; width: 100%; padding: 140px 24px; display: flex; justify-content: center; overflow: hidden; box-sizing: border-box; }
.mesh-background { position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle at 30% 20%, rgba(108,99,255,0.18) 0%, transparent 40%), radial-gradient(circle at 75% 65%, rgba(0,212,255,0.18) 0%, transparent 40%); animation: rotateMesh 25s linear infinite; pointer-events: none; z-index: 1; }
.mesh-hero-content { max-width: 600px; text-align: center; z-index: 2; position: relative; }
.mesh-title { font-size: 56px; font-weight: 900; margin-bottom: 20px; background: linear-gradient(135deg, #fff 50%, #00D4FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.mesh-desc { font-size: 18px; color: #94A3B8; line-height: 1.6; margin-bottom: 36px; }
.mesh-btn { display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #6C63FF, #8B5CF6); color: #fff; font-weight: 700; border-radius: 10px; text-decoration: none; border: none; cursor: pointer; transition: transform 0.2s; }
.mesh-btn:hover { transform: translateY(-2px); }
@keyframes rotateMesh {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>`
  },
  {
    id: 'hero-product',
    title: 'Product Hero',
    category: 'hero',
    tags: ['hero', 'product', 'ecommerce', 'showcase'],
    desc: 'Mockup product showcase card highlighting a physical or digital product with custom ratings.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; display: flex; align-items: center; justify-content: center; min-height: 100vh; overflow: hidden; color: #fff; padding: 20px; }
      .container { display: flex; gap: 20px; max-width: 460px; align-items: center; }
      .left { flex: 1.1; }
      .right { flex: 0.9; }
      .title { font-size: 20px; font-weight: 800; margin: 0 0 6px 0; }
      .desc { font-size: 10px; color: #94A3B8; margin-bottom: 12px; line-height: 1.4; }
      .stars { font-size: 10px; color: #00D4FF; margin-bottom: 8px; }
      .price { font-size: 14px; font-weight: 700; margin-bottom: 12px; }
      .btn { padding: 6px 12px; background: #6C63FF; border: none; border-radius: 6px; color: #fff; font-size: 9px; font-weight: 700; cursor: pointer; text-decoration: none; }
      .prod-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 12px; position: relative; overflow: hidden; text-align: center; }
      .prod-box { height: 70px; background: linear-gradient(135deg, #6C63FF, #8B5CF6); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px; }
    </style>
    <div class="container">
      <div class="left">
        <div class="stars">★★★★★ 4.9 Rating</div>
        <h1 class="title">Aura Key Cap Set</h1>
        <p class="desc">A customized cherry MX profile custom double-shot PBT keycap setup for mechanical keyboard enthusiasts.</p>
        <div class="price">$89.00</div>
        <a class="btn">Order Now</a>
      </div>
      <div class="right">
        <div class="prod-card">
          <div class="prod-box">⌨</div>
          <div style="font-size: 8px; margin-top: 8px; color: #94A3B8;">Collector's Limited Box</div>
        </div>
      </div>
    </div>`,
    code: `<section class="hero-product-section">
  <div class="product-hero-container">
    <div class="product-details">
      <div class="rating-badge">★★★★★ 4.9 Customer Rating</div>
      <h1 class="product-title">Aura Key Cap Set</h1>
      <p class="product-desc">A customized cherry MX profile custom double-shot PBT keycap setup for mechanical keyboard enthusiasts.</p>
      <div class="product-price-row">
        <span class="price-amount">$89.00</span>
        <span class="price-muted">/ Limited Pack</span>
      </div>
      <a href="#" class="order-btn">Order Now</a>
    </div>
    <div class="product-preview-card">
      <div class="box-graphics">⌨</div>
      <p class="graphics-label">Collector's Edition Box</p>
    </div>
  </div>
</section>

<style>
.hero-product-section { background: #050816; color: #fff; padding: 120px 24px; display: flex; justify-content: center; font-family: 'Inter', sans-serif; }
.product-hero-container { max-width: 1000px; width: 100%; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 48px; align-items: center; }
.rating-badge { font-size: 13px; color: #00D4FF; font-weight: 600; margin-bottom: 12px; }
.product-title { font-size: 48px; font-weight: 800; margin-bottom: 16px; }
.product-desc { font-size: 16px; color: #94A3B8; line-height: 1.6; margin-bottom: 24px; }
.product-price-row { display: flex; align-items: baseline; gap: 8px; margin-bottom: 32px; }
.price-amount { font-size: 32px; font-weight: 800; color: #fff; }
.price-muted { font-size: 14px; color: #94A3B8; }
.order-btn { display: inline-block; padding: 14px 28px; background: #6C63FF; color: #fff; font-weight: 700; border-radius: 8px; text-decoration: none; transition: background 0.2s; }
.order-btn:hover { background: #5a52e6; }
.product-preview-card { background: #0b1220; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 40px; text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
.box-graphics { height: 180px; background: linear-gradient(135deg, #6C63FF, #8B5CF6); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 64px; }
.graphics-label { font-size: 12px; color: #94A3B8; margin-top: 16px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em; }
@media (max-width: 768px) {
  .product-hero-container { grid-template-columns: 1fr; }
}
</style>`
  },

  // ─── NAVIGATION (2 OF 6 COMPONENTS) ───
  {
    id: 'navbar-sticky',
    title: 'Sticky Navbar',
    category: 'navbar',
    tags: ['nav', 'sticky', 'glass', 'header'],
    desc: 'Sticky desktop navigation bar with frosted glass backdrop blur and scroll shrinkage.',
    featured: true,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; min-height: 100vh; color: #fff; }
      .navbar { position: fixed; top: 10px; left: 10px; right: 10px; display: flex; align-items: center; justify-content: space-between; padding: 8px 16px; background: rgba(11, 18, 32, 0.7); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; z-index: 100; }
      .logo { font-size: 12px; font-weight: 800; background: linear-gradient(135deg, #6C63FF, #00D4FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      .links { display: flex; gap: 12px; }
      .links a { color: #94A3B8; text-decoration: none; font-size: 10px; font-weight: 500; transition: color 0.2s; }
      .links a:hover { color: #fff; }
      .btn { padding: 4px 10px; background: #6C63FF; border: none; border-radius: 6px; color: #fff; font-size: 9px; font-weight: 700; cursor: pointer; text-decoration: none; }
    </style>
    <nav class="navbar">
      <span class="logo">AURA V4</span>
      <div class="links">
        <a href="#">Features</a>
        <a href="#">Solutions</a>
        <a href="#">Pricing</a>
      </div>
      <a class="btn">Launch</a>
    </nav>
    <div style="padding-top: 80px; text-align: center; font-size: 10px; color: #94A3B8;">Scroll simulator active</div>`,
    code: `<nav class="sticky-nav-bar">
  <div class="nav-brand">AURA V4</div>
  <div class="nav-links">
    <a href="#">Features</a>
    <a href="#">Solutions</a>
    <a href="#">Pricing</a>
    <a href="#">Docs</a>
  </div>
  <div class="nav-actions">
    <a href="#" class="nav-action-btn">Launch App</a>
  </div>
</nav>

<style>
.sticky-nav-bar { position: fixed; top: 16px; left: 16px; right: 16px; display: flex; align-items: center; justify-content: space-between; padding: 12px 24px; background: rgba(5, 8, 22, 0.7); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; z-index: 1000; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }
.nav-brand { font-size: 18px; font-weight: 800; background: linear-gradient(135deg, #6C63FF, #00D4FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.nav-links { display: flex; gap: 24px; }
.nav-links a { color: #94A3B8; text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
.nav-links a:hover { color: #fff; }
.nav-action-btn { background: #6C63FF; color: #fff; text-decoration: none; padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: 700; transition: background 0.2s; }
.nav-action-btn:hover { background: #5a52e6; }
</style>`
  },
  {
    id: 'navbar-mega-menu',
    title: 'Mega Menu Nav',
    category: 'navbar',
    tags: ['nav', 'mega-menu', 'dropdown', 'features'],
    desc: 'Sophisticated navigation dropdown displaying multiple features lists side-by-side.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; min-height: 100vh; color: #fff; }
      .navbar { display: flex; align-items: center; padding: 10px 20px; background: #0b1220; border-bottom: 1px solid rgba(255,255,255,0.06); }
      .logo { font-size: 12px; font-weight: 800; color: #fff; margin-right: 20px; }
      .menu-item { position: relative; display: inline-block; padding: 8px 0; cursor: pointer; }
      .menu-label { font-size: 11px; color: #94A3B8; font-weight: 600; }
      .menu-label:hover { color: #fff; }
      .mega-menu { position: absolute; top: 100%; left: 0; width: 280px; background: #0e1726; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 12px; display: none; grid-template-columns: repeat(2, 1fr); gap: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); z-index: 200; }
      .menu-item:hover .mega-menu { display: grid; }
      .sub-title { font-size: 9px; font-weight: 700; text-transform: uppercase; color: #00D4FF; margin-bottom: 4px; }
      .sub-link { display: block; font-size: 9px; color: #94A3B8; text-decoration: none; padding: 2px 0; }
      .sub-link:hover { color: #fff; }
    </style>
    <nav class="navbar">
      <span class="logo">AURA</span>
      <div class="menu-item">
        <span class="menu-label">Solutions ▼</span>
        <div class="mega-menu">
          <div>
            <div class="sub-title">Developers</div>
            <a class="sub-link">Components</a>
            <a class="sub-link">CLI Utility</a>
          </div>
          <div>
            <div class="sub-title">Enterprise</div>
            <a class="sub-link">Analytics</a>
            <a class="sub-link">Team Access</a>
          </div>
        </div>
      </div>
    </nav>
    <div style="padding: 10px; font-size: 9px; color: #64748B;">Hover "Solutions" to reveal the Mega Menu grid.</div>`,
    code: `<nav class="mega-menu-nav">
  <div class="logo">AURA UI</div>
  <div class="nav-items">
    <div class="menu-trigger">
      <span class="trigger-label">Solutions</span>
      <div class="dropdown-pane">
        <div class="pane-column">
          <h4>Developers</h4>
          <a href="#">Components</a>
          <a href="#">Design Tokens</a>
          <a href="#">CLI Tools</a>
        </div>
        <div class="pane-column">
          <h4>Enterprise</h4>
          <a href="#">Analytics Portal</a>
          <a href="#">Access Control</a>
          <a href="#">SLA Assurances</a>
        </div>
      </div>
    </div>
    <a href="#" class="nav-item">Pricing</a>
  </div>
</nav>

<style>
.mega-menu-nav { display: flex; align-items: center; padding: 16px 32px; background: #0b1220; border-bottom: 1px solid rgba(255,255,255,0.06); font-family: 'Inter', sans-serif; }
.logo { font-size: 20px; font-weight: 800; color: #fff; margin-right: 48px; }
.nav-items { display: flex; gap: 32px; }
.nav-item { color: #94A3B8; text-decoration: none; font-size: 15px; font-weight: 500; }
.nav-item:hover { color: #fff; }
.menu-trigger { position: relative; cursor: pointer; padding-bottom: 8px; }
.trigger-label { color: #94A3B8; font-size: 15px; font-weight: 500; }
.trigger-label:hover { color: #fff; }
.dropdown-pane { position: absolute; top: 100%; left: -20px; width: 400px; background: #0e1726; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 24px; display: none; grid-template-columns: repeat(2, 1fr); gap: 24px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5); z-index: 1000; }
.menu-trigger:hover .dropdown-pane { display: grid; }
.pane-column h4 { font-size: 12px; color: #00D4FF; text-transform: uppercase; font-weight: 700; margin: 0 0 12px 0; letter-spacing: 0.05em; }
.pane-column a { display: block; color: #94A3B8; text-decoration: none; font-size: 14px; padding: 6px 0; transition: color 0.2s; }
.pane-column a:hover { color: #fff; }
</style>`
  },
  {
    id: 'navbar-docs',
    title: 'Documentation Navbar',
    category: 'navbar',
    tags: ['nav', 'docs', 'search', 'minimal'],
    desc: 'Documentation navbar featuring a mock search field, version selector, and GitHub link.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; min-height: 100vh; }
      .nav { display: flex; align-items: center; justify-content: space-between; padding: 10px 20px; background: #0b1220; border-bottom: 1px solid rgba(255,255,255,0.06); }
      .logo-group { display: flex; align-items: center; gap: 8px; }
      .logo { font-size: 11px; font-weight: 800; }
      .badge { font-size: 8px; background: rgba(0,212,255,0.1); border: 1px solid rgba(0,212,255,0.3); color: #00D4FF; padding: 2px 6px; border-radius: 4px; }
      .search-box { display: flex; align-items: center; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); padding: 4px 8px; border-radius: 6px; width: 140px; }
      .search-box input { border: none; background: transparent; outline: none; color: #fff; font-size: 9px; width: 100%; }
      .kb-key { font-size: 8px; background: rgba(255,255,255,0.1); padding: 1px 4px; border-radius: 2px; color: #94A3B8; }
      .links { display: flex; gap: 10px; align-items: center; }
      .links a { color: #94A3B8; font-size: 10px; text-decoration: none; }
      .links a:hover { color: #fff; }
    </style>
    <nav class="nav">
      <div class="logo-group">
        <span class="logo">AURA DOCS</span>
        <span class="badge">v4.0</span>
      </div>
      <div class="search-box">
        <input type="text" placeholder="Search docs..." readonly>
        <span class="kb-key">/</span>
      </div>
      <div class="links">
        <a href="#">Guides</a>
        <a href="#">API</a>
        <a href="#" style="font-size: 12px;">🐱</a>
      </div>
    </nav>`,
    code: `<nav class="docs-navbar">
  <div class="docs-nav-left">
    <span class="docs-logo">AURA DOCS</span>
    <span class="docs-version-badge">v4.0</span>
  </div>
  <div class="docs-nav-center">
    <div class="docs-search-field">
      <span class="search-icon">🔍</span>
      <input type="text" class="docs-search-input" placeholder="Search documentation...">
      <span class="kbd-shortcut">⌘K</span>
    </div>
  </div>
  <div class="docs-nav-right">
    <a href="#" class="docs-link">Guides</a>
    <a href="#" class="docs-link">API Reference</a>
    <a href="#" class="docs-github-icon" aria-label="GitHub">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    </a>
  </div>
</nav>

<style>
.docs-navbar { display: flex; align-items: center; justify-content: space-between; padding: 14px 32px; background: #0b1220; border-bottom: 1px solid rgba(255, 255, 255, 0.06); font-family: 'Inter', sans-serif; }
.docs-nav-left { display: flex; align-items: center; gap: 12px; }
.docs-logo { font-size: 16px; font-weight: 800; color: #fff; letter-spacing: -0.01em; }
.docs-version-badge { font-size: 11px; background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.3); color: #00D4FF; padding: 3px 8px; border-radius: 6px; font-weight: 600; }
.docs-nav-center { flex: 1; max-width: 480px; margin: 0 32px; }
.docs-search-field { display: flex; align-items: center; background: rgba(0, 0, 0, 0.2); border: 1px solid rgba(255, 255, 255, 0.08); padding: 8px 14px; border-radius: 8px; gap: 8px; }
.docs-search-input { flex: 1; border: none; background: transparent; color: #fff; font-size: 13px; outline: none; }
.kbd-shortcut { font-size: 11px; background: rgba(255, 255, 255, 0.08); padding: 2px 6px; border-radius: 4px; color: #94A3B8; }
.docs-nav-right { display: flex; align-items: center; gap: 20px; }
.docs-link { color: #94A3B8; text-decoration: none; font-size: 14px; transition: color 0.2s; }
.docs-link:hover { color: #fff; }
.docs-github-icon { color: #94A3B8; transition: color 0.2s; }
.docs-github-icon:hover { color: #fff; }
</style>`
  },
  {
    id: 'navbar-saas',
    title: 'SaaS Navbar',
    category: 'navbar',
    tags: ['nav', 'saas', 'actions', 'profile'],
    desc: 'Dual-functional SaaS navbar featuring interactive developer modes and a user account picker.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; min-height: 100vh; }
      .nav { display: flex; align-items: center; justify-content: space-between; padding: 10px 20px; background: #0b1220; border-bottom: 1px solid rgba(255,255,255,0.06); }
      .left { display: flex; align-items: center; gap: 12px; }
      .status { display: flex; align-items: center; gap: 4px; font-size: 9px; color: #34d399; }
      .dot { width: 4px; height: 4px; border-radius: 50%; background: #34d399; }
      .right { display: flex; align-items: center; gap: 10px; }
      .avatar { width: 22px; height: 22px; border-radius: 50%; background: linear-gradient(135deg, #6C63FF, #8B5CF6); display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; }
    </style>
    <nav class="nav">
      <div class="left">
        <span style="font-weight: 800; font-size: 12px;">CONSOLE</span>
        <div class="status"><div class="dot"></div>API Online</div>
      </div>
      <div class="right">
        <span style="font-size: 10px; color: #94A3B8;">Sandbox Mode</span>
        <div class="avatar">JP</div>
      </div>
    </nav>`,
    code: `<nav class="saas-navbar">
  <div class="saas-nav-left">
    <span class="saas-brand">AURA CONSOLE</span>
    <div class="system-status-indicator">
      <span class="status-pulse-dot"></span>
      <span class="status-text">All Systems Operational</span>
    </div>
  </div>
  <div class="saas-nav-right">
    <button class="nav-toggle-btn">Sandbox Mode</button>
    <div class="user-avatar-profile">
      <span class="profile-initials">JP</span>
    </div>
  </div>
</nav>

<style>
.saas-navbar { display: flex; align-items: center; justify-content: space-between; padding: 12px 32px; background: #0b1220; border-bottom: 1px solid rgba(255,255,255,0.06); font-family: 'Inter', sans-serif; }
.saas-brand { font-size: 16px; font-weight: 800; color: #fff; }
.system-status-indicator { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #22C55E; background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.15); padding: 4px 10px; border-radius: 50px; }
.status-pulse-dot { width: 6px; height: 6px; border-radius: 50%; background: #22C55E; box-shadow: 0 0 10px #22C55E; }
.saas-nav-right { display: flex; align-items: center; gap: 16px; }
.nav-toggle-btn { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer; }
.user-avatar-profile { width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #6C63FF, #8B5CF6); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: #fff; }
</style>`
  },
  {
    id: 'navbar-dashboard',
    title: 'Dashboard Navbar',
    category: 'navbar',
    tags: ['nav', 'dashboard', 'header', 'panel'],
    desc: 'Wide header layout designed for portals and dashboards with rapid search and alerts.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; min-height: 100vh; }
      .nav { display: flex; align-items: center; justify-content: space-between; padding: 10px 20px; background: #0b1220; border-bottom: 1px solid rgba(255,255,255,0.06); }
      .search-box { font-size: 10px; color: #94A3B8; background: rgba(0,0,0,0.15); padding: 4px 10px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); }
      .actions { display: flex; gap: 10px; align-items: center; }
      .bell { font-size: 12px; position: relative; cursor: pointer; }
      .bell::after { content: ''; position: absolute; top: -1px; right: -1px; width: 4px; height: 4px; background: #00D4FF; border-radius: 50%; }
      .profile { width: 20px; height: 20px; border-radius: 50%; background: #00D4FF; }
    </style>
    <nav class="nav">
      <div class="search-box">🔍 Search metrics...</div>
      <div class="actions">
        <span class="bell">🔔</span>
        <div class="profile"></div>
      </div>
    </nav>`,
    code: `<nav class="dashboard-top-nav">
  <div class="nav-search-bar">
    <span class="search-icon">🔍</span>
    <input type="text" placeholder="Search analytics and reports...">
  </div>
  <div class="nav-actions-group">
    <button class="nav-icon-btn" aria-label="View notifications">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
      <span class="notification-indicator-dot"></span>
    </button>
    <div class="nav-user-dropdown">
      <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><circle cx='16' cy='16' r='16' fill='%2300D4FF'/></svg>" alt="Profile photo" class="avatar-img">
    </div>
  </div>
</nav>

<style>
.dashboard-top-nav { display: flex; align-items: center; justify-content: space-between; padding: 14px 32px; background: #0b1220; border-bottom: 1px solid rgba(255, 255, 255, 0.06); font-family: 'Inter', sans-serif; }
.nav-search-bar { display: flex; align-items: center; background: rgba(0,0,0,0.15); border: 1px solid rgba(255,255,255,0.06); padding: 8px 16px; border-radius: 8px; width: 300px; gap: 8px; }
.nav-search-bar input { border: none; background: transparent; color: #fff; font-size: 13px; outline: none; width: 100%; }
.nav-actions-group { display: flex; align-items: center; gap: 18px; }
.nav-icon-btn { position: relative; background: transparent; border: none; color: #94A3B8; cursor: pointer; padding: 4px; transition: color 0.2s; }
.nav-icon-btn:hover { color: #fff; }
.notification-indicator-dot { position: absolute; top: 2px; right: 2px; width: 6px; height: 6px; background: #00D4FF; border-radius: 50%; box-shadow: 0 0 8px #00D4FF; }
.avatar-img { width: 32px; height: 32px; border-radius: 50%; border: 1px solid rgba(255, 255, 255, 0.1); }
</style>`
  },
  {
    id: 'navbar-minimal',
    title: 'Minimal Navbar',
    category: 'navbar',
    tags: ['nav', 'minimal', 'clean', 'floating'],
    desc: 'Lightweight inline navbar displaying navigation elements in a single row layout.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; min-height: 100vh; display: flex; align-items: flex-start; justify-content: center; padding-top: 20px; }
      .navbar { display: flex; align-items: center; gap: 14px; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); padding: 8px 16px; border-radius: 50px; }
      .logo { font-size: 10px; font-weight: 900; letter-spacing: 0.1em; color: #fff; }
      .nav-links { display: flex; gap: 10px; }
      .nav-links a { color: #94A3B8; text-decoration: none; font-size: 9px; font-weight: 500; }
      .nav-links a:hover { color: #fff; }
    </style>
    <div class="navbar">
      <span class="logo">AURA</span>
      <div class="nav-links">
        <a href="#">Showcase</a>
        <a href="#">Docs</a>
        <a href="#">Pricing</a>
      </div>
    </div>`,
    code: `<nav class="minimal-floating-nav">
  <div class="floating-nav-container">
    <div class="mini-brand">AURA</div>
    <div class="mini-links">
      <a href="#" class="mini-link">Showcase</a>
      <a href="#" class="mini-link">Docs</a>
      <a href="#" class="mini-link">Pricing</a>
    </div>
  </div>
</nav>

<style>
.minimal-floating-nav { display: flex; justify-content: center; width: 100%; font-family: 'Inter', sans-serif; }
.floating-nav-container { display: flex; align-items: center; justify-content: space-between; background: rgba(11, 18, 32, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.06); padding: 10px 24px; border-radius: 50px; width: 100%; max-width: 500px; box-shadow: 0 10px 35px rgba(0,0,0,0.3); }
.mini-brand { font-size: 15px; font-weight: 900; letter-spacing: 0.1em; color: #fff; }
.mini-links { display: flex; gap: 20px; }
.mini-link { color: #94A3B8; text-decoration: none; font-size: 13px; font-weight: 500; transition: color 0.2s; }
.mini-link:hover { color: #fff; }
</style>`
  },

  // ─── PRICING (6 COMPONENTS) ───
  {
    id: 'pricing-comparison',
    title: 'Feature Comparison',
    category: 'pricing',
    tags: ['pricing', 'comparison', 'features', 'table'],
    desc: 'Fully descriptive feature matrix showing side-by-side package tiers.',
    featured: true,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .table-wrap { width: 100%; max-width: 440px; background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 12px; }
      .row { display: grid; grid-template-columns: 2fr 1fr 1fr; border-bottom: 1px solid rgba(255,255,255,0.04); padding: 6px 0; font-size: 10px; }
      .row.hdr { font-weight: 700; color: #00D4FF; border-bottom: 1px solid rgba(255,255,255,0.08); }
      .row:last-child { border-bottom: none; }
      .val { text-align: center; }
      .check { color: #34d399; }
      .dash { color: rgba(255,255,255,0.15); }
    </style>
    <div class="table-wrap">
      <div class="row hdr">
        <div>Feature</div>
        <div class="val">Pro</div>
        <div class="val">Ent</div>
      </div>
      <div class="row">
        <div>Custom Templates</div>
        <div class="val check">✓</div>
        <div class="val check">✓</div>
      </div>
      <div class="row">
        <div>Analytical Reports</div>
        <div class="val check">✓</div>
        <div class="val check">✓</div>
      </div>
      <div class="row">
        <div>Dedicated Server</div>
        <div class="val dash">—</div>
        <div class="val check">✓</div>
      </div>
    </div>`,
    code: `<div class="pricing-comparison-table-wrapper">
  <table class="comparison-table">
    <thead>
      <tr class="header-row">
        <th class="col-feature">Key Features</th>
        <th class="col-tier">Pro Plan</th>
        <th class="col-tier">Enterprise</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="feat-name">Custom Workspace Themes</td>
        <td class="feat-val check">✓</td>
        <td class="feat-val check">✓</td>
      </tr>
      <tr>
        <td class="feat-name">Real-time Collab Analytics</td>
        <td class="feat-val check">✓</td>
        <td class="feat-val check">✓</td>
      </tr>
      <tr>
        <td class="feat-name">Custom SSO & SAML</td>
        <td class="feat-val dash">—</td>
        <td class="feat-val check">✓</td>
      </tr>
      <tr>
        <td class="feat-name">Dedicated SLA Support</td>
        <td class="feat-val dash">—</td>
        <td class="feat-val check">✓</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.pricing-comparison-table-wrapper { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 24px; max-width: 800px; margin: 0 auto; font-family: 'Inter', sans-serif; box-shadow: 0 10px 40px rgba(0,0,0,0.3); }
.comparison-table { width: 100%; border-collapse: collapse; text-align: left; }
.comparison-table th, .comparison-table td { padding: 14px 20px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 14px; }
.header-row th { border-bottom: 2px solid rgba(255,255,255,0.08); font-weight: 700; color: #fff; }
.col-feature { width: 60%; }
.col-tier { width: 20%; text-align: center; }
.feat-name { color: #cbd5e1; }
.feat-val { text-align: center; }
.feat-val.check { color: #22C55E; font-weight: 700; }
.feat-val.dash { color: rgba(255,255,255,0.15); }
</style>`
  },
  {
    id: 'pricing-saas',
    title: 'SaaS Pricing Cards',
    category: 'pricing',
    tags: ['pricing', 'saas', 'tiers', 'layout'],
    desc: 'Three package design structure with highlighted premium tier and custom gradient borders.',
    featured: true,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 10px; gap: 8px; }
      .card { width: 130px; background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 14px 10px; text-align: center; box-sizing: border-box; }
      .card.popular { border-color: #6C63FF; box-shadow: 0 0 15px rgba(108,99,255,0.25); position: relative; }
      .badge { position: absolute; top: -8px; left: 50%; transform: translateX(-50%); font-size: 7px; background: #6C63FF; color: #fff; padding: 2px 6px; border-radius: 10px; font-weight: 700; }
      .tier { font-size: 9px; color: #94A3B8; text-transform: uppercase; font-weight: 600; }
      .price { font-size: 20px; font-weight: 800; margin: 6px 0; }
      .feat { font-size: 8px; color: #cbd5e1; line-height: 1.6; margin-bottom: 12px; text-align: left; padding-left: 6px; }
      .btn { display: block; width: 100%; padding: 6px 0; border: none; border-radius: 6px; font-size: 8px; font-weight: 700; cursor: pointer; text-decoration: none; text-align: center; }
      .btn-p { background: #6C63FF; color: #fff; }
      .btn-s { background: rgba(255,255,255,0.05); color: #fff; border: 1px solid rgba(255,255,255,0.1); }
    </style>
    <div class="card">
      <div class="tier">Free</div>
      <div class="price">$0</div>
      <div class="feat">✓ 1 Workspace<br>✓ Basic Analytics<br>✓ community support</div>
      <a class="btn btn-s">Start Free</a>
    </div>
    <div class="card popular">
      <div class="badge">Popular</div>
      <div class="tier" style="color: #00D4FF;">Pro</div>
      <div class="price">$29</div>
      <div class="feat">✓ 5 Workspaces<br>✓ Realtime Metrics<br>✓ 24/7 Slack support</div>
      <a class="btn btn-p">Get Pro</a>
    </div>
    <div class="card">
      <div class="tier">Scale</div>
      <div class="price">$99</div>
      <div class="feat">✓ Unlimited Space<br>✓ Dedicated Agent<br>✓ API Integration</div>
      <a class="btn btn-s">Get Scale</a>
    </div>`,
    code: `<div class="pricing-cards-section">
  <div class="pricing-card">
    <h3 class="tier-name">Free</h3>
    <div class="tier-price">$0<span class="per-month">/mo</span></div>
    <ul class="features-list">
      <li>✓ 1 Workspace</li>
      <li>✓ Basic Analytics</li>
      <li>✓ Community Support</li>
    </ul>
    <a href="#" class="tier-action-btn secondary-btn">Start Free</a>
  </div>
  <div class="pricing-card featured">
    <span class="featured-badge">Popular</span>
    <h3 class="tier-name gradient-text">Pro</h3>
    <div class="tier-price">$29<span class="per-month">/mo</span></div>
    <ul class="features-list">
      <li>✓ 5 Workspaces</li>
      <li>✓ Realtime Metrics</li>
      <li>✓ 24/7 Support Channel</li>
    </ul>
    <a href="#" class="tier-action-btn primary-btn">Get Pro</a>
  </div>
  <div class="pricing-card">
    <h3 class="tier-name">Scale</h3>
    <div class="tier-price">$99<span class="per-month">/mo</span></div>
    <ul class="features-list">
      <li>✓ Unlimited Spaces</li>
      <li>✓ Dedicated Support Agent</li>
      <li>✓ Full API Integration</li>
    </ul>
    <a href="#" class="tier-action-btn secondary-btn">Get Scale</a>
  </div>
</div>

<style>
.pricing-cards-section { display: flex; gap: 24px; justify-content: center; padding: 40px 24px; background: #050816; font-family: 'Inter', sans-serif; }
.pricing-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; padding: 32px; width: 300px; box-sizing: border-box; text-align: center; transition: transform 0.2s; }
.pricing-card:hover { transform: translateY(-4px); }
.pricing-card.featured { border-color: #6C63FF; box-shadow: 0 10px 40px rgba(108, 99, 255, 0.15); position: relative; }
.featured-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, #6C63FF, #8B5CF6); color: #fff; font-size: 11px; font-weight: 700; padding: 4px 14px; border-radius: 50px; text-transform: uppercase; letter-spacing: 0.05em; }
.tier-name { font-size: 18px; font-weight: 700; color: #94A3B8; margin-top: 10px; }
.gradient-text { background: linear-gradient(135deg, #6C63FF, #00D4FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.tier-price { font-size: 48px; font-weight: 800; color: #fff; margin: 16px 0; }
.per-month { font-size: 14px; color: #94A3B8; font-weight: 500; }
.features-list { list-style: none; padding: 0; margin: 24px 0 32px; text-align: left; }
.features-list li { color: #cbd5e1; font-size: 14px; margin-bottom: 12px; }
.tier-action-btn { display: block; width: 100%; padding: 12px 0; border-radius: 10px; font-size: 14px; font-weight: 700; text-decoration: none; }
.primary-btn { background: #6C63FF; color: #fff; }
.primary-btn:hover { background: #5a52e6; }
.secondary-btn { background: rgba(255,255,255,0.05); color: #fff; border: 1px solid rgba(255,255,255,0.1); }
.secondary-btn:hover { background: rgba(255,255,255,0.1); }
@media (max-width: 900px) {
  .pricing-cards-section { flex-direction: column; align-items: center; }
}
</style>`
  },
  {
    id: 'pricing-enterprise',
    title: 'Enterprise Quote',
    category: 'pricing',
    tags: ['pricing', 'enterprise', 'custom', 'contact'],
    desc: 'Dedicated pricing module for large teams with custom resource requirements.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .ent-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 24px; text-align: center; max-width: 320px; width: 100%; }
      .badge { display: inline-block; background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.3); color: #00D4FF; font-size: 8px; font-weight: 700; padding: 2px 8px; border-radius: 50px; margin-bottom: 12px; }
      .title { font-size: 16px; font-weight: 800; margin: 0 0 6px 0; }
      .desc { font-size: 10px; color: #94A3B8; line-height: 1.4; margin-bottom: 16px; }
      .btn { display: block; background: #6C63FF; color: #fff; text-decoration: none; padding: 8px 0; border-radius: 8px; font-size: 10px; font-weight: 700; cursor: pointer; }
    </style>
    <div class="ent-card">
      <span class="badge">Enterprise Scale</span>
      <h3 class="title">Dedicated Node Clustering</h3>
      <p class="desc">Host in private VPCs, implement custom identity mappings, and get sub-10ms response assurances globally.</p>
      <a class="btn">Talk to Architecture</a>
    </div>`,
    code: `<div class="pricing-enterprise-section">
  <div class="enterprise-container">
    <div class="enterprise-info">
      <span class="enterprise-badge">Enterprise Tiers</span>
      <h2 class="enterprise-title">Dedicated Infrastructure & VPC</h2>
      <p class="enterprise-desc">Deploy isolated container systems on AWS or GCP, achieve SOC2 compliance certifications, and configure single sign-on parameters.</p>
    </div>
    <div class="enterprise-action-card">
      <h3>Need Custom Workloads?</h3>
      <p>Configure dedicated instances to match exact throughput quotas.</p>
      <a href="#" class="contact-sales-btn">Contact Architecture</a>
    </div>
  </div>
</div>

<style>
.pricing-enterprise-section { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; padding: 48px; max-width: 900px; margin: 0 auto; font-family: 'Inter', sans-serif; }
.enterprise-container { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 48px; align-items: center; }
.enterprise-badge { display: inline-block; background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.3); color: #00D4FF; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 50px; margin-bottom: 16px; }
.enterprise-title { font-size: 32px; font-weight: 800; color: #fff; margin: 0 0 16px 0; }
.enterprise-desc { font-size: 16px; color: #94A3B8; line-height: 1.6; }
.enterprise-action-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 32px; text-align: center; }
.enterprise-action-card h3 { font-size: 18px; font-weight: 700; margin: 0 0 8px 0; }
.enterprise-action-card p { font-size: 13px; color: #94A3B8; margin-bottom: 24px; }
.contact-sales-btn { display: block; background: #6C63FF; color: #fff; text-decoration: none; padding: 12px; border-radius: 8px; font-weight: 700; font-size: 14px; transition: background 0.2s; }
.contact-sales-btn:hover { background: #5a52e6; }
@media (max-width: 768px) {
  .enterprise-container { grid-template-columns: 1fr; gap: 32px; }
}
</style>`
  },
  {
    id: 'pricing-freemium',
    title: 'Freemium Layout',
    category: 'pricing',
    tags: ['pricing', 'freemium', 'layouts'],
    desc: 'Double-tier grid layout focusing on getting free users onboarded fast with seamless premium upgrades.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .wrap { display: flex; gap: 12px; max-width: 440px; }
      .box { flex: 1; background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px; text-align: left; }
      .box.pro { border-color: #8B5CF6; }
      .title { font-size: 13px; font-weight: 700; margin-bottom: 4px; }
      .desc { font-size: 9px; color: #94A3B8; line-height: 1.4; margin-bottom: 12px; }
      .price { font-size: 18px; font-weight: 800; margin-bottom: 12px; }
      .btn { display: inline-block; padding: 6px 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; color: #fff; font-size: 9px; font-weight: 700; text-decoration: none; cursor: pointer; }
      .btn.pro { background: #8B5CF6; border: none; }
    </style>
    <div class="wrap">
      <div class="box">
        <div class="title">Always Free</div>
        <p class="desc">Access basic UI templates, visual builders, and exports.</p>
        <div class="price">$0</div>
        <a class="btn">Deploy Now</a>
      </div>
      <div class="box pro">
        <div class="title" style="color: #8B5CF6;">Professional</div>
        <p class="desc">Unlimited high-fidelity libraries, private packages, support.</p>
        <div class="price">$19</div>
        <a class="btn pro">Get Pro</a>
      </div>
    </div>`,
    code: `<div class="freemium-pricing-section">
  <div class="freemium-container">
    <div class="freemium-tier">
      <h3 class="tier-title">Developer Free</h3>
      <p class="tier-text">Essential workspace access, basic libraries, and hosting exports.</p>
      <div class="tier-rate">$0</div>
      <a href="#" class="tier-btn-sec">Deploy Now</a>
    </div>
    <div class="freemium-tier premium-tier">
      <h3 class="tier-title">Team Premium</h3>
      <p class="tier-text">Unlimited templates, high-fidelity analytics, private libraries, and SLA.</p>
      <div class="tier-rate">$19<span class="rate-sub">/mo</span></div>
      <a href="#" class="tier-btn-prim">Upgrade Workspace</a>
    </div>
  </div>
</div>

<style>
.freemium-pricing-section { background: #050816; padding: 60px 24px; font-family: 'Inter', sans-serif; display: flex; justify-content: center; }
.freemium-container { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; max-width: 800px; width: 100%; }
.freemium-tier { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 32px; box-sizing: border-box; }
.premium-tier { border-color: #8B5CF6; box-shadow: 0 10px 30px rgba(139, 92, 246, 0.1); }
.tier-title { font-size: 20px; font-weight: 700; color: #fff; margin: 0 0 8px 0; }
.premium-tier .tier-title { color: #8B5CF6; }
.tier-text { font-size: 14px; color: #94A3B8; line-height: 1.5; margin-bottom: 24px; }
.tier-rate { font-size: 36px; font-weight: 800; color: #fff; margin-bottom: 24px; }
.rate-sub { font-size: 14px; color: #94A3B8; }
.tier-btn-sec { display: block; text-align: center; padding: 12px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: #fff; text-decoration: none; font-weight: 700; }
.tier-btn-sec:hover { background: rgba(255,255,255,0.1); }
.tier-btn-prim { display: block; text-align: center; padding: 12px; background: #8B5CF6; border-radius: 8px; color: #fff; text-decoration: none; font-weight: 700; }
.tier-btn-prim:hover { background: #7c3aed; }
@media (max-width: 600px) {
  .freemium-container { grid-template-columns: 1fr; }
}
</style>`
  },
  {
    id: 'pricing-annual',
    title: 'Monthly/Annual Switch',
    category: 'pricing',
    tags: ['pricing', 'toggle', 'annual', 'interaction'],
    desc: 'Checkmark switcher showing dynamic pricing adjustments with animated saving tags.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .wrapper { text-align: center; }
      .toggle-row { display: inline-flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 4px 10px; border-radius: 50px; margin-bottom: 20px; cursor: pointer; }
      .toggle-lbl { font-size: 10px; color: #94A3B8; font-weight: 600; }
      .toggle-lbl.active { color: #00D4FF; }
      .switch { width: 30px; height: 16px; background: #6C63FF; border-radius: 10px; position: relative; }
      .knob { width: 12px; height: 12px; background: #fff; border-radius: 50%; position: absolute; top: 2px; left: 2px; transition: transform 0.2s; }
      .knob.annual { transform: translateX(14px); }
      .price-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 20px; width: 180px; margin: 0 auto; }
      .amt { font-size: 28px; font-weight: 800; margin: 10px 0; }
    </style>
    <div class="wrapper">
      <div class="toggle-row" onclick="togglePrice()">
        <span class="toggle-lbl" id="mLbl">Monthly</span>
        <div class="switch"><div class="knob annual" id="mKnob"></div></div>
        <span class="toggle-lbl active" id="aLbl">Annual</span>
      </div>
      <div class="price-card">
        <div style="font-size: 10px; color: #94A3B8;">Pro License</div>
        <div class="amt" id="priceAmt">$19</div>
        <div style="font-size: 8px; color: #00D4FF;" id="priceDesc">billed yearly ($228/yr)</div>
      </div>
    </div>
    <script>
      let isAnnual = true;
      function togglePrice() {
        isAnnual = !isAnnual;
        document.getElementById('mKnob').classList.toggle('annual', isAnnual);
        document.getElementById('mLbl').classList.toggle('active', !isAnnual);
        document.getElementById('aLbl').classList.toggle('active', isAnnual);
        document.getElementById('priceAmt').textContent = isAnnual ? '$19' : '$29';
        document.getElementById('priceDesc').textContent = isAnnual ? 'billed yearly ($228/yr)' : 'billed monthly';
      }
    </script>`,
    code: `<div class="annual-pricing-switch-container">
  <div class="billing-switcher" onclick="switchBillingMode()">
    <span class="switch-option active" id="billingMonth">Monthly</span>
    <div class="switch-track">
      <div class="switch-thumb" id="billingThumb"></div>
    </div>
    <span class="switch-option" id="billingYear">Annual <span class="savings-tag">Save 35%</span></span>
  </div>
  <div class="price-showcase-card">
    <h4>Developer Pro</h4>
    <div class="computed-price" id="computedVal">$29<span class="computed-per">/mo</span></div>
    <p class="computed-info" id="computedMuted">billed monthly</p>
  </div>
</div>

<script>
let yearlyMode = false;
function switchBillingMode() {
  yearlyMode = !yearlyMode;
  document.getElementById('billingThumb').classList.toggle('yearly-active', yearlyMode);
  document.getElementById('billingMonth').classList.toggle('active', !yearlyMode);
  document.getElementById('billingYear').classList.toggle('active', yearlyMode);
  document.getElementById('computedVal').innerHTML = yearlyMode ? '$19<span class="computed-per">/mo</span>' : '$29<span class="computed-per">/mo</span>';
  document.getElementById('computedMuted').textContent = yearlyMode ? 'billed yearly ($228/yr)' : 'billed monthly';
}
</script>

<style>
@media (prefers-reduced-motion: reduce) {
  .switch-thumb { transition: none !important; }
}
.annual-pricing-switch-container { text-align: center; font-family: 'Inter', sans-serif; background: #050816; padding: 40px; display: flex; flex-direction: column; align-items: center; }
.billing-switcher { display: inline-flex; align-items: center; gap: 16px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 6px 16px; border-radius: 50px; cursor: pointer; margin-bottom: 24px; }
.switch-option { font-size: 13px; color: #94A3B8; font-weight: 600; }
.switch-option.active { color: #fff; }
.savings-tag { background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.2); color: #22C55E; font-size: 10px; padding: 1px 6px; border-radius: 4px; margin-left: 4px; }
.switch-track { position: relative; width: 44px; height: 24px; background: #6C63FF; border-radius: 50px; }
.switch-thumb { position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; background: #fff; border-radius: 50%; transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }
.switch-thumb.yearly-active { transform: translateX(20px); }
.price-showcase-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 32px; width: 280px; text-align: center; }
.price-showcase-card h4 { font-size: 15px; color: #94A3B8; text-transform: uppercase; margin: 0 0 12px 0; }
.computed-price { font-size: 42px; font-weight: 800; color: #fff; }
.computed-per { font-size: 14px; color: #94A3B8; }
.computed-info { font-size: 12px; color: #00D4FF; margin-top: 8px; }
</style>`
  },
  {
    id: 'pricing-lifetime',
    title: 'Lifetime Deal Card',
    category: 'pricing',
    tags: ['pricing', 'lifetime', 'limited', 'callout'],
    desc: 'One-off payment card layout emphasizing infinite access and high value features.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .card { background: linear-gradient(135deg, #0b1220 50%, rgba(108,99,255,0.1)); border: 1px solid rgba(108,99,255,0.3); border-radius: 16px; padding: 24px; text-align: center; max-width: 320px; width: 100%; box-shadow: 0 15px 30px rgba(0,0,0,0.4); }
      .badge { background: #00D4FF; color: #050816; font-size: 8px; font-weight: 800; padding: 2px 8px; border-radius: 50px; display: inline-block; margin-bottom: 12px; text-transform: uppercase; }
      .price { font-size: 32px; font-weight: 900; margin: 8px 0; color: #fff; }
      .per { font-size: 10px; color: #94A3B8; text-decoration: line-through; }
      .btn { display: block; background: #6C63FF; color: #fff; text-decoration: none; padding: 10px 0; border-radius: 8px; font-size: 11px; font-weight: 700; cursor: pointer; margin-top: 14px; }
    </style>
    <div class="card">
      <span class="badge">Infinite Access</span>
      <h3 style="margin: 0; font-size: 15px;">AURA UI Lifetime Package</h3>
      <div class="price">$199<span style="font-size: 12px; font-weight: normal; color: #94A3B8;"> / flat rate</span></div>
      <div class="per">Was $499 standard price</div>
      <p style="font-size: 9px; color: #CBD5E1; line-height: 1.4; margin: 8px 0 0 0;">Get lifetime design token upgrades, Figma template packages, and private component assets.</p>
      <a class="btn">Get Lifetime</a>
    </div>`,
    code: `<div class="lifetime-deal-box">
  <div class="deal-header-wrap">
    <span class="limited-offer-badge">Infinite License</span>
    <h2>AURA UI Lifetime Package</h2>
    <p>Secure full source files, code updates, templates, and Figma assets forever with a one-time settlement.</p>
  </div>
  <div class="deal-pricing-block">
    <div class="deal-price">$199<span class="price-label">/ flat rate</span></div>
    <div class="original-price">Was $499 standard value</div>
    <a href="#" class="deal-cta-btn">Purchase License</a>
    <span class="spots-left">⚠️ Only 14 licenses remaining at this rate</span>
  </div>
</div>

<style>
.lifetime-deal-box { background: linear-gradient(135deg, #0b1220, rgba(108, 99, 255, 0.08)); border: 1px solid rgba(108, 99, 255, 0.25); border-radius: 20px; padding: 40px; max-width: 800px; margin: 0 auto; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; align-items: center; font-family: 'Inter', sans-serif; box-shadow: 0 15px 40px rgba(0,0,0,0.4); }
.limited-offer-badge { background: #00D4FF; color: #050816; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 50px; display: inline-block; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.05em; }
.lifetime-deal-box h2 { font-size: 28px; font-weight: 800; margin: 0 0 12px 0; color: #fff; }
.lifetime-deal-box p { font-size: 15px; color: #cbd5e1; line-height: 1.6; margin: 0; }
.deal-pricing-block { text-align: center; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.06); padding: 24px; border-radius: 14px; }
.deal-price { font-size: 42px; font-weight: 900; color: #fff; }
.price-label { font-size: 14px; color: #94A3B8; font-weight: normal; }
.original-price { font-size: 13px; color: #ef4444; text-decoration: line-through; margin-top: 4px; margin-bottom: 20px; }
.deal-cta-btn { display: block; background: #6C63FF; color: #fff; text-decoration: none; padding: 12px; border-radius: 8px; font-weight: 700; transition: background 0.2s; }
.deal-cta-btn:hover { background: #5a52e6; }
.spots-left { display: block; font-size: 11px; color: #F59E0B; margin-top: 12px; font-weight: 600; }
@media (max-width: 768px) {
  .lifetime-deal-box { grid-template-columns: 1fr; gap: 24px; }
}
</style>`
  },
  {
    id: 'auth-signup',
    title: 'Sign Up Form',
    category: 'auth',
    tags: ['auth', 'signup', 'form', 'password'],
    desc: 'Registration form containing a dynamic client-side password strength progress bar indicator.',
    featured: true,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .card { background: #0b1220; border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 20px; width: 220px; }
      .title { font-size: 14px; font-weight: 800; margin: 0 0 4px 0; }
      .lbl { display: block; font-size: 8px; color: #94A3B8; margin-top: 8px; margin-bottom: 3px; font-weight: 600; }
      .input { width: 100%; padding: 6px 8px; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; color: #fff; font-size: 9px; outline: none; box-sizing: border-box; }
      .input:focus { border-color: #6C63FF; }
      .bar-wrap { height: 3px; background: rgba(255,255,255,0.08); border-radius: 2px; margin-top: 6px; overflow: hidden; }
      .bar { height: 100%; width: 65%; background: #00D4FF; }
      .btn { display: block; width: 100%; padding: 8px 0; background: #6C63FF; color: #fff; border: none; border-radius: 6px; font-size: 9px; font-weight: 700; cursor: pointer; margin-top: 14px; text-align: center; }
    </style>
    <div class="card">
      <h3 class="title">Create Account</h3>
      <span class="lbl">Email Address</span>
      <input type="email" class="input" placeholder="name@domain.com">
      <span class="lbl">Password</span>
      <input type="password" class="input" value="mypassword123">
      <div class="bar-wrap"><div class="bar"></div></div>
      <div style="display: flex; justify-content: space-between; font-size: 7px; color: #94A3B8; margin-top: 4px;"><span>Strength</span><span style="color: #00D4FF;">Good</span></div>
      <button class="btn">Register</button>
    </div>`,
    code: `<div class="auth-signup-box">
  <h2>Create Account</h2>
  <p class="auth-subtitle">Get started with a free sandbox workspace.</p>
  <form onsubmit="event.preventDefault()">
    <div class="form-group">
      <label>Email Address</label>
      <input type="email" class="auth-input" placeholder="name@domain.com" required>
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="auth-input" id="signupPass" value="developerMode1" oninput="checkStrength()" required>
      <div class="strength-indicator-bar"><div class="strength-fill good" id="strengthFill"></div></div>
      <div class="strength-lbl">Strength: <span id="strengthText" class="cyan">Good</span></div>
    </div>
    <button type="submit" class="auth-submit-btn">Register Account</button>
  </form>
</div>

<script>
function checkStrength() {
  const val = document.getElementById('signupPass').value;
  const fill = document.getElementById('strengthFill');
  const txt = document.getElementById('strengthText');
  if(val.length < 5) {
    fill.style.width = '30%'; fill.className = 'strength-fill weak'; txt.textContent = 'Weak'; txt.className = 'danger';
  } else if(val.length < 9) {
    fill.style.width = '65%'; fill.className = 'strength-fill good'; txt.textContent = 'Good'; txt.className = 'cyan';
  } else {
    fill.style.width = '100%'; fill.className = 'strength-fill strong'; txt.textContent = 'Strong'; txt.className = 'success';
  }
}
</script>

<style>
.auth-signup-box { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; padding: 40px; max-width: 400px; margin: 0 auto; font-family: 'Inter', sans-serif; }
.auth-signup-box h2 { font-size: 24px; font-weight: 800; margin: 0 0 6px 0; }
.auth-subtitle { font-size: 14px; color: #94A3B8; margin-bottom: 24px; }
.form-group { margin-bottom: 20px; }
.form-group label { display: block; font-size: 12px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px; }
.auth-input { width: 100%; padding: 10px 14px; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: #fff; font-size: 14px; outline: none; box-sizing: border-box; }
.auth-input:focus { border-color: #6C63FF; }
.strength-indicator-bar { height: 4px; background: rgba(255,255,255,0.06); border-radius: 2px; margin-top: 8px; overflow: hidden; }
.strength-fill { height: 100%; transition: width 0.3s, background-color 0.3s; }
.strength-fill.weak { width: 30%; background: #EF4444; }
.strength-fill.good { width: 65%; background: #00D4FF; }
.strength-fill.strong { width: 100%; background: #22C55E; }
.strength-lbl { font-size: 11px; color: #94A3B8; margin-top: 6px; display: flex; justify-content: space-between; }
.danger { color: #EF4444; }
.cyan { color: #00D4FF; }
.success { color: #22C55E; }
.auth-submit-btn { width: 100%; padding: 12px; background: #6C63FF; border: none; border-radius: 8px; color: #fff; font-size: 14px; font-weight: 700; cursor: pointer; transition: background 0.2s; }
.auth-submit-btn:hover { background: #5a52e6; }
</style>`
  },
  {
    id: 'auth-otp',
    title: 'OTP Verification',
    category: 'auth',
    tags: ['auth', 'otp', 'verification', 'code'],
    desc: 'Verify log ins using secure 6-digit one-time code inputs.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 20px; text-align: center; max-width: 240px; }
      .inputs { display: flex; gap: 6px; justify-content: center; margin: 16px 0; }
      .code-in { width: 24px; height: 30px; background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; text-align: center; color: #fff; font-size: 14px; font-weight: 700; outline: none; }
      .code-in:focus { border-color: #00D4FF; box-shadow: 0 0 8px rgba(0,212,255,0.2); }
      .btn { width: 100%; padding: 8px; background: #6C63FF; border: none; border-radius: 6px; color: #fff; font-size: 10px; font-weight: 700; cursor: pointer; }
    </style>
    <div class="card">
      <h3 style="margin: 0; font-size: 14px;">Confirm Access</h3>
      <p style="font-size: 8px; color: #94A3B8; margin: 6px 0 0 0;">Enter the OTP code from your authentication app.</p>
      <div class="inputs">
        <input class="code-in" type="text" maxlength="1" value="4">
        <input class="code-in" type="text" maxlength="1" value="8">
        <input class="code-in" type="text" maxlength="1" placeholder="•">
        <input class="code-in" type="text" maxlength="1" placeholder="•">
        <input class="code-in" type="text" maxlength="1" placeholder="•">
        <input class="code-in" type="text" maxlength="1" placeholder="•">
      </div>
      <button class="btn">Verify</button>
    </div>`,
    code: `<div class="otp-verification-card">
  <h3>Enter Verification Code</h3>
  <p class="otp-instruction">We sent a 6-digit OTP code to your registered email address.</p>
  <form onsubmit="event.preventDefault()">
    <div class="otp-inputs-grid">
      <input type="text" class="otp-box" maxlength="1" pattern="[0-9]" required>
      <input type="text" class="otp-box" maxlength="1" pattern="[0-9]" required>
      <input type="text" class="otp-box" maxlength="1" pattern="[0-9]" required>
      <input type="text" class="otp-box" maxlength="1" pattern="[0-9]" required>
      <input type="text" class="otp-box" maxlength="1" pattern="[0-9]" required>
      <input type="text" class="otp-box" maxlength="1" pattern="[0-9]" required>
    </div>
    <button type="submit" class="otp-submit-btn">Verify Security Code</button>
  </form>
  <div class="resend-row">Didn't receive code? <a href="#">Resend Code</a></div>
</div>

<style>
.otp-verification-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; padding: 36px; max-width: 400px; margin: 0 auto; text-align: center; font-family: 'Inter', sans-serif; }
.otp-verification-card h3 { font-size: 22px; font-weight: 800; margin: 0 0 8px 0; }
.otp-instruction { font-size: 13px; color: #94A3B8; line-height: 1.5; margin-bottom: 28px; }
.otp-inputs-grid { display: flex; gap: 12px; justify-content: center; margin-bottom: 32px; }
.otp-box { width: 44px; height: 52px; background: rgba(0, 0, 0, 0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; text-align: center; color: #fff; font-size: 22px; font-weight: 700; outline: none; }
.otp-box:focus { border-color: #00D4FF; box-shadow: 0 0 10px rgba(0, 212, 255, 0.25); }
.otp-submit-btn { width: 100%; padding: 12px; background: #6C63FF; border: none; border-radius: 8px; color: #fff; font-weight: 700; font-size: 14px; cursor: pointer; transition: background 0.2s; }
.otp-submit-btn:hover { background: #5a52e6; }
.resend-row { font-size: 13px; color: #94A3B8; margin-top: 20px; }
.resend-row a { color: #00D4FF; text-decoration: none; font-weight: 600; }
</style>`
  },
  {
    id: 'auth-social',
    title: 'Social SSO Sign In',
    category: 'auth',
    tags: ['auth', 'sso', 'social', 'google'],
    desc: 'Federated SSO social log in buttons card with glowing active hover state filters.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px; width: 200px; text-align: center; }
      .sso-btn { display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 7px 0; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 6px; color: #fff; font-size: 9px; font-weight: 600; cursor: pointer; margin-bottom: 8px; transition: all 0.2s; }
      .sso-btn:hover { background: rgba(255,255,255,0.08); border-color: #6C63FF; }
    </style>
    <div class="card">
      <h4 style="margin: 0 0 12px 0; font-size: 11px;">Single Sign On</h4>
      <button class="sso-btn"><span>G</span> Continue with Google</button>
      <button class="sso-btn"><span>🐱</span> Continue with GitHub</button>
    </div>`,
    code: `<div class="sso-container-card">
  <h3>Single Sign On</h3>
  <p class="sso-subtitle">Connect using your existing verified workspace account.</p>
  <div class="sso-buttons-grid">
    <button class="sso-auth-btn">
      <svg class="sso-icon" viewBox="0 0 24 24" width="18" height="18"><path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.2-5.136 4.2A5.626 5.626 0 0 1 8.35 13a5.626 5.626 0 0 1 5.64-5.6c1.55 0 2.96.61 4 1.6l3.1-3.1A9.913 9.913 0 0 0 14 2C8.48 2 4 6.48 4 12s4.48 10 10 10c5.77 0 9.8-4.06 9.8-9.97 0-.6-.05-1.18-.15-1.745H12.24z"/></svg>
      <span>Continue with Google</span>
    </button>
    <button class="sso-auth-btn">
      <svg class="sso-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      <span>Continue with GitHub</span>
    </button>
  </div>
</div>

<style>
.sso-container-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; padding: 40px; max-width: 400px; margin: 0 auto; text-align: center; font-family: 'Inter', sans-serif; }
.sso-container-card h3 { font-size: 22px; font-weight: 800; margin: 0 0 6px 0; }
.sso-subtitle { font-size: 13px; color: #94A3B8; margin-bottom: 28px; }
.sso-buttons-grid { display: flex; flex-direction: column; gap: 12px; }
.sso-auth-btn { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 12px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; color: #fff; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
.sso-auth-btn:hover { background: rgba(255, 255, 255, 0.08); border-color: #6C63FF; }
.sso-icon { flex-shrink: 0; }
</style>`
  },
  {
    id: 'auth-forgot',
    title: 'Forgot Password',
    category: 'auth',
    tags: ['auth', 'forgot-password', 'reset', 'form'],
    desc: 'Clean password reset requesting structure with descriptive return tags.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 20px; width: 220px; text-align: center; }
      .input { width: 100%; padding: 7px 10px; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; color: #fff; font-size: 9px; outline: none; margin: 12px 0; box-sizing: border-box; }
      .btn { width: 100%; padding: 8px 0; background: #6C63FF; border: none; border-radius: 6px; color: #fff; font-size: 9px; font-weight: 700; cursor: pointer; }
      .back { font-size: 8px; color: #94A3B8; margin-top: 12px; display: inline-block; text-decoration: none; }
    </style>
    <div class="card">
      <h3 style="margin: 0; font-size: 14px;">Reset Password</h3>
      <input type="email" class="input" placeholder="Enter your email...">
      <button class="btn">Send reset link</button>
      <a class="back">← Back to Log In</a>
    </div>`,
    code: `<div class="forgot-pass-card">
  <h2>Reset Password</h2>
  <p class="forgot-desc">Input your account email. We will mail a link to modify credentials.</p>
  <form onsubmit="event.preventDefault()">
    <div class="form-group">
      <label>Workspace Email</label>
      <input type="email" class="reset-input" placeholder="developer@email.com" required>
    </div>
    <button type="submit" class="reset-submit-btn">Send Recovery Link</button>
  </form>
  <a href="#" class="return-login-link">← Return to Login</a>
</div>

<style>
.forgot-pass-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; padding: 40px; max-width: 400px; margin: 0 auto; font-family: 'Inter', sans-serif; }
.forgot-pass-card h2 { font-size: 24px; font-weight: 800; margin: 0 0 8px 0; }
.forgot-desc { font-size: 14px; color: #94A3B8; line-height: 1.5; margin-bottom: 24px; }
.form-group { margin-bottom: 24px; }
.form-group label { display: block; font-size: 12px; font-weight: 600; color: #cbd5e1; margin-bottom: 8px; }
.reset-input { width: 100%; padding: 12px 16px; background: rgba(0, 0, 0, 0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: #fff; font-size: 14px; outline: none; box-sizing: border-box; }
.reset-input:focus { border-color: #6C63FF; }
.reset-submit-btn { width: 100%; padding: 12px; background: #6C63FF; border: none; border-radius: 8px; color: #fff; font-weight: 700; font-size: 14px; cursor: pointer; transition: background 0.2s; }
.reset-submit-btn:hover { background: #5a52e6; }
.return-login-link { display: inline-block; font-size: 13px; color: #94A3B8; text-decoration: none; margin-top: 20px; transition: color 0.2s; }
.return-login-link:hover { color: #fff; }
</style>`
  },
  {
    id: 'auth-team-invite',
    title: 'Team Invitation',
    category: 'auth',
    tags: ['auth', 'invite', 'team', 'collaboration'],
    desc: 'Accept workspace invites with detailed sender meta avatar headers.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 20px; width: 220px; text-align: center; }
      .avatar-group { display: flex; justify-content: center; gap: -4px; margin-bottom: 12px; }
      .av { width: 24px; height: 24px; border-radius: 50%; background: #6C63FF; border: 2px solid #0b1220; font-size: 8px; font-weight: bold; display: flex; align-items: center; justify-content: center; }
      .title { font-size: 12px; font-weight: 700; margin: 0 0 6px 0; }
      .btn { display: inline-block; width: 45%; padding: 6px 0; border: none; border-radius: 6px; font-size: 8px; font-weight: 700; cursor: pointer; text-decoration: none; }
      .btn-p { background: #6C63FF; color: #fff; }
      .btn-s { background: rgba(255,255,255,0.05); color: #fff; border: 1px solid rgba(255,255,255,0.1); }
    </style>
    <div class="card">
      <div class="avatar-group">
        <div class="av">JD</div>
        <div class="av" style="background: #00D4FF; margin-left: -6px;">A</div>
      </div>
      <h3 class="title">Join Team Linear</h3>
      <p style="font-size: 8px; color: #94A3B8; line-height: 1.4; margin-top: 0; margin-bottom: 14px;">Jane Doe has invited you to join team Linear under sandbox-prod.</p>
      <div style="display: flex; gap: 8px; justify-content: center;">
        <button class="btn btn-p">Accept</button>
        <button class="btn btn-s">Reject</button>
      </div>
    </div>`,
    code: `<div class="team-invite-card">
  <div class="inviter-avatar-stack">
    <div class="inv-avatar av-one">JD</div>
    <div class="inv-avatar av-two">A</div>
  </div>
  <h3>Join Team Linear</h3>
  <p class="invite-msg">Jane Doe (jane@linear.app) has invited you to collaborate in the Linear sandbox workspace.</p>
  <div class="invite-actions">
    <button class="accept-invite-btn">Accept Invitation</button>
    <button class="decline-invite-btn">Decline</button>
  </div>
</div>

<style>
.team-invite-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; padding: 40px; max-width: 440px; margin: 0 auto; text-align: center; font-family: 'Inter', sans-serif; }
.inviter-avatar-stack { display: flex; justify-content: center; margin-bottom: 20px; }
.inv-avatar { width: 48px; height: 48px; border-radius: 50%; border: 3px solid #0b1220; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 16px; color: #fff; }
.av-one { background: #6C63FF; }
.av-two { background: #00D4FF; margin-left: -12px; }
.team-invite-card h3 { font-size: 24px; font-weight: 800; margin: 0 0 10px 0; }
.invite-msg { font-size: 14px; color: #94A3B8; line-height: 1.6; margin-bottom: 32px; }
.invite-actions { display: flex; gap: 14px; }
.accept-invite-btn { flex: 1; padding: 12px; background: #6C63FF; border: none; border-radius: 8px; color: #fff; font-weight: 700; font-size: 14px; cursor: pointer; transition: background 0.2s; }
.accept-invite-btn:hover { background: #5a52e6; }
.decline-invite-btn { padding: 12px 24px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: #fff; font-weight: 700; font-size: 14px; cursor: pointer; transition: background 0.2s; }
.decline-invite-btn:hover { background: rgba(255,255,255,0.1); }
</style>`
  },
  {
    id: 'auth-2fa',
    title: '2FA Setup Screen',
    category: 'auth',
    tags: ['auth', '2fa', 'security', 'authenticator'],
    desc: 'Two-factor authenticator setup screen showing a mock QR code and setup credentials key.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px; text-align: center; max-width: 220px; }
      .qr-mock { width: 70px; height: 70px; margin: 10px auto; background: #fff; border: 4px solid #fff; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #000; font-size: 26px; }
      .key { font-size: 9px; font-weight: 700; background: rgba(0,0,0,0.3); padding: 4px; border-radius: 4px; color: #00D4FF; letter-spacing: 0.05em; }
    </style>
    <div class="card">
      <h3 style="margin: 0; font-size: 13px;">Enable Two-Factor</h3>
      <div class="qr-mock">▞▚</div>
      <div style="font-size: 8px; color: #94A3B8; margin-bottom: 6px;">Or input this credentials key manually:</div>
      <div class="key">AURA-2FA-SECURE-KEY</div>
    </div>`,
    code: `<div class="two-factor-setup-card">
  <h2>Two-Factor Setup</h2>
  <p class="two-factor-desc">Secure your credential accesses by linking Google Authenticator or Authy.</p>
  <div class="two-factor-grid">
    <div class="qr-code-holder">
      <div class="qr-mockup">▞▚</div>
    </div>
    <div class="credentials-info">
      <p>Scan QR code or use key below:</p>
      <div class="credentials-key-box">
        <code class="credential-code">AURA-V4-2FA-SETUP-SECRET</code>
      </div>
      <button class="credential-copy-action">Copy Key</button>
    </div>
  </div>
</div>

<style>
.two-factor-setup-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; padding: 40px; max-width: 600px; margin: 0 auto; font-family: 'Inter', sans-serif; }
.two-factor-setup-card h2 { font-size: 24px; font-weight: 800; margin: 0 0 8px 0; }
.two-factor-desc { font-size: 14px; color: #94A3B8; line-height: 1.5; margin-bottom: 32px; }
.two-factor-grid { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 32px; align-items: center; }
.qr-code-holder { background: #fff; padding: 12px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.qr-mockup { font-size: 96px; color: #000; line-height: 1; }
.credentials-info { text-align: left; }
.credentials-info p { font-size: 13px; color: #cbd5e1; margin: 0 0 10px 0; }
.credentials-key-box { background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.08); padding: 10px 14px; border-radius: 8px; margin-bottom: 12px; }
.credential-code { font-family: monospace; font-size: 13px; color: #00D4FF; font-weight: 600; }
.credential-copy-action { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 8px 16px; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer; transition: background 0.2s; }
.credential-copy-action:hover { background: rgba(255,255,255,0.1); }
@media (max-width: 600px) {
  .two-factor-grid { grid-template-columns: 1fr; text-align: center; }
  .credentials-info { text-align: center; }
}
</style>`
  },

  // ─── DASHBOARD WIDGETS (4 OF 6 COMPONENTS) ───
  {
    id: 'dash-revenue-chart',
    title: 'Revenue Analytics',
    category: 'dashboard',
    tags: ['dashboard', 'revenue', 'chart', 'kpi'],
    desc: 'Interactive bar/spark chart displaying monthly sales quotas.',
    featured: true,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .widget { background: #0b1220; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 16px; width: 260px; }
      .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
      .title { font-size: 11px; font-weight: 700; color: #94A3B8; text-transform: uppercase; }
      .amt { font-size: 18px; font-weight: 800; }
      .bars { display: flex; gap: 8px; height: 60px; align-items: flex-end; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px; }
      .bar { width: 14px; background: linear-gradient(to top, #6C63FF, #00D4FF); border-radius: 2px; }
    </style>
    <div class="widget">
      <div class="header">
        <span class="title">Net Sales</span>
        <span class="amt">$48,290</span>
      </div>
      <div class="bars">
        <div class="bar" style="height: 40%;"></div>
        <div class="bar" style="height: 60%;"></div>
        <div class="bar" style="height: 35%;"></div>
        <div class="bar" style="height: 80%;"></div>
        <div class="bar" style="height: 55%;"></div>
        <div class="bar" style="height: 95%;"></div>
      </div>
    </div>`,
    code: `<div class="dashboard-chart-card">
  <div class="chart-card-header">
    <div>
      <span class="card-subtitle">Revenue Stream</span>
      <h3 class="card-total-val">$48,290.00</h3>
    </div>
    <div class="chart-pills">
      <button class="pill-btn active">7d</button>
      <button class="pill-btn">30d</button>
    </div>
  </div>
  <div class="svg-chart-container">
    <!-- Visual Representation of Bar Chart SVG -->
    <svg viewBox="0 0 400 120" class="analytics-chart-svg">
      <defs>
        <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#00D4FF"/>
          <stop offset="100%" stop-color="#6C63FF"/>
        </linearGradient>
      </defs>
      <rect x="10" y="40" width="30" height="80" rx="4" fill="url(#chartGlow)"/>
      <rect x="60" y="20" width="30" height="100" rx="4" fill="url(#chartGlow)"/>
      <rect x="110" y="60" width="30" height="60" rx="4" fill="url(#chartGlow)"/>
      <rect x="160" y="10" width="30" height="110" rx="4" fill="url(#chartGlow)"/>
      <rect x="210" y="45" width="30" height="75" rx="4" fill="url(#chartGlow)"/>
      <rect x="260" y="30" width="30" height="90" rx="4" fill="url(#chartGlow)"/>
      <rect x="310" y="5" width="30" height="115" rx="4" fill="url(#chartGlow)"/>
    </svg>
  </div>
</div>

<style>
.dashboard-chart-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 24px; max-width: 500px; font-family: 'Inter', sans-serif; }
.chart-card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; }
.card-subtitle { font-size: 12px; color: #94A3B8; text-transform: uppercase; font-weight: 600; }
.card-total-val { font-size: 28px; font-weight: 800; color: #fff; margin: 4px 0 0 0; }
.chart-pills { display: flex; gap: 4px; background: rgba(0,0,0,0.2); padding: 2px; border-radius: 6px; }
.pill-btn { background: transparent; border: none; color: #94A3B8; padding: 4px 10px; font-size: 11px; font-weight: 600; border-radius: 4px; cursor: pointer; }
.pill-btn.active { background: #6C63FF; color: #fff; }
.svg-chart-container { width: 100%; height: 150px; }
.analytics-chart-svg { width: 100%; height: 100%; }
</style>`
  },
  {
    id: 'dash-activity-feed',
    title: 'Activity Feed',
    category: 'dashboard',
    tags: ['dashboard', 'activity', 'feed', 'logs'],
    desc: 'Compact log view capturing user actions, deployments, and state modifications.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .feed { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 14px; width: 240px; }
      .row { display: flex; gap: 10px; margin-bottom: 12px; align-items: flex-start; }
      .row:last-child { margin-bottom: 0; }
      .dot { width: 6px; height: 6px; border-radius: 50%; background: #6C63FF; margin-top: 4px; }
      .dot.cyan { background: #00D4FF; }
      .txt { font-size: 9px; line-height: 1.3; }
      .meta { font-size: 7px; color: #94A3B8; margin-top: 2px; }
    </style>
    <div class="feed">
      <div class="row">
        <div class="dot"></div>
        <div class="txt">
          <div>Jane Doe pushed 3 commits to <code style="color: #6C63FF;">main</code></div>
          <div class="meta">2 mins ago</div>
        </div>
      </div>
      <div class="row">
        <div class="dot cyan"></div>
        <div class="txt">
          <div>Workspace sandbox deployed successfully</div>
          <div class="meta">14 mins ago</div>
        </div>
      </div>
    </div>`,
    code: `<div class="dashboard-activity-feed-card">
  <h4>System Activity Logs</h4>
  <div class="activity-timeline">
    <div class="timeline-row">
      <span class="timeline-indicator-dot purple"></span>
      <div class="timeline-details">
        <p>Jane Doe pushed 3 commits to <code class="branch-code">main</code> branch</p>
        <span class="timeline-time">2 minutes ago</span>
      </div>
    </div>
    <div class="timeline-row">
      <span class="timeline-indicator-dot cyan"></span>
      <div class="timeline-details">
        <p>Production cluster node-241 spun up successfully</p>
        <span class="timeline-time">14 minutes ago</span>
      </div>
    </div>
    <div class="timeline-row">
      <span class="timeline-indicator-dot danger"></span>
      <div class="timeline-details">
        <p>Build failed on hooks hook-deploy-sandbox</p>
        <span class="timeline-time">45 minutes ago</span>
      </div>
    </div>
  </div>
</div>

<style>
.dashboard-activity-feed-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 24px; max-width: 440px; font-family: 'Inter', sans-serif; }
.dashboard-activity-feed-card h4 { font-size: 14px; text-transform: uppercase; color: #94A3B8; margin: 0 0 20px 0; letter-spacing: 0.05em; }
.activity-timeline { display: flex; flex-direction: column; gap: 20px; position: relative; }
.timeline-row { display: flex; gap: 16px; align-items: flex-start; }
.timeline-indicator-dot { width: 8px; height: 8px; border-radius: 50%; margin-top: 6px; flex-shrink: 0; }
.timeline-indicator-dot.purple { background: #6C63FF; box-shadow: 0 0 8px #6C63FF; }
.timeline-indicator-dot.cyan { background: #00D4FF; box-shadow: 0 0 8px #00D4FF; }
.timeline-indicator-dot.danger { background: #EF4444; box-shadow: 0 0 8px #EF4444; }
.timeline-details p { font-size: 13px; color: #cbd5e1; margin: 0 0 4px 0; line-height: 1.4; }
.branch-code { font-family: monospace; background: rgba(255,255,255,0.05); padding: 2px 6px; border-radius: 4px; color: #6C63FF; }
.timeline-time { font-size: 11px; color: #94A3B8; }
</style>`
  },
  {
    id: 'dash-kpi-card',
    title: 'KPI Metric Card',
    category: 'dashboard',
    tags: ['dashboard', 'kpi', 'stats', 'metric'],
    desc: 'High-fidelity dashboard card presenting single core metric figures accompanied by sparklines.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 14px; width: 140px; }
      .lbl { font-size: 8px; color: #94A3B8; text-transform: uppercase; font-weight: 600; }
      .val { font-size: 20px; font-weight: 800; margin: 4px 0; }
      .row { display: flex; justify-content: space-between; align-items: center; }
      .growth { font-size: 8px; color: #34d399; font-weight: 700; }
    </style>
    <div class="card">
      <div class="lbl">Page Views</div>
      <div class="row">
        <span class="val">142.8K</span>
        <span class="growth">↑ 12.8%</span>
      </div>
      <div style="height: 10px; background: rgba(0,212,255,0.1); border-radius: 2px; margin-top: 6px; overflow: hidden;"><div style="width: 75%; height: 100%; background: #00D4FF;"></div></div>
    </div>`,
    code: `<div class="kpi-metric-card-element">
  <div class="kpi-card-header">
    <span class="kpi-tag-label">Active Users</span>
    <span class="kpi-change-indicator up">↑ 12.8%</span>
  </div>
  <div class="kpi-valuation">2,847</div>
  <div class="kpi-sparkline-bar">
    <div class="sparkline-fill" style="width: 65%"></div>
  </div>
</div>

<style>
.kpi-metric-card-element { background: #0b1220; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; padding: 24px; max-width: 240px; font-family: 'Inter', sans-serif; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
.kpi-card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.kpi-tag-label { font-size: 11px; text-transform: uppercase; color: #94A3B8; font-weight: 700; letter-spacing: 0.05em; }
.kpi-change-indicator { font-size: 12px; font-weight: 700; }
.kpi-change-indicator.up { color: #22C55E; }
.kpi-valuation { font-size: 36px; font-weight: 800; color: #fff; line-height: 1; }
.kpi-sparkline-bar { height: 4px; background: rgba(255, 255, 255, 0.05); border-radius: 2px; margin-top: 16px; overflow: hidden; }
.sparkline-fill { height: 100%; background: linear-gradient(90deg, #6C63FF, #00D4FF); border-radius: 2px; }
</style>`
  },
  {
    id: 'dash-user-table',
    title: 'User Management Table',
    category: 'dashboard',
    tags: ['dashboard', 'table', 'users', 'grid'],
    desc: 'High-fidelity rows displaying list of members with custom state labels.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .tbl-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 12px; width: 280px; }
      .row { display: grid; grid-template-columns: 2fr 1fr; border-bottom: 1px solid rgba(255,255,255,0.04); padding: 6px 4px; align-items: center; }
      .row:last-child { border-bottom: none; }
      .user { display: flex; align-items: center; gap: 8px; font-size: 9px; font-weight: 600; }
      .avatar { width: 16px; height: 16px; border-radius: 50%; background: #6C63FF; display: flex; align-items: center; justify-content: center; font-size: 7px; }
      .badge { font-size: 7px; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.2); color: #22C55E; padding: 2px 6px; border-radius: 4px; text-align: center; }
    </style>
    <div class="tbl-card">
      <div class="row" style="font-weight: 700; color: #94A3B8; font-size: 8px; text-transform: uppercase;">
        <div>Member</div>
        <div style="text-align: right;">Status</div>
      </div>
      <div class="row">
        <div class="user"><div class="avatar">JD</div>Jane Doe</div>
        <div style="text-align: right;"><span class="badge">Active</span></div>
      </div>
      <div class="row">
        <div class="user"><div class="avatar" style="background: #8B5CF6;">SK</div>Sarah Kim</div>
        <div style="text-align: right;"><span class="badge" style="color: #00D4FF; background: rgba(0,212,255,0.1); border-color: rgba(0,212,255,0.2);">Invited</span></div>
      </div>
    </div>`,
    code: `<div class="user-management-table-card">
  <table class="user-table">
    <thead>
      <tr>
        <th>Member Name</th>
        <th>System Role</th>
        <th>Workspace Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="user-name-col">
          <div class="user-avatar-small">JD</div>
          <div>
            <div class="real-name">Jane Doe</div>
            <div class="email-sub">jane@domain.com</div>
          </div>
        </td>
        <td class="role-col">Workspace Owner</td>
        <td class="status-col"><span class="badge-status success">Active</span></td>
      </tr>
      <tr>
        <td class="user-name-col">
          <div class="user-avatar-small purple">SK</div>
          <div>
            <div class="real-name">Sarah Kim</div>
            <div class="email-sub">sarah@domain.com</div>
          </div>
        </td>
        <td class="role-col">Billing Agent</td>
        <td class="status-col"><span class="badge-status pending">Pending</span></td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.user-management-table-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 24px; max-width: 800px; margin: 0 auto; font-family: 'Inter', sans-serif; overflow-x: auto; }
.user-table { width: 100%; border-collapse: collapse; text-align: left; }
.user-table th, .user-table td { padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 14px; }
.user-table th { color: #94A3B8; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em; border-bottom: 2px solid rgba(255,255,255,0.08); }
.user-name-col { display: flex; align-items: center; gap: 12px; }
.user-avatar-small { width: 32px; height: 32px; border-radius: 50%; background: #6C63FF; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: #fff; }
.user-avatar-small.purple { background: #8B5CF6; }
.real-name { font-weight: 600; color: #fff; }
.email-sub { font-size: 12px; color: #94A3B8; }
.role-col { color: #cbd5e1; }
.badge-status { display: inline-block; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.03em; }
.badge-status.success { background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.2); color: #22C55E; }
.badge-status.pending { background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.2); color: #F59E0B; }
</style>`
  },
  {
    id: 'dash-donut-chart',
    title: 'Donut Chart Widget',
    category: 'dashboard',
    tags: ['dashboard', 'donut', 'chart', 'kpi'],
    desc: 'Pie/donut visualization widget featuring responsive legends and segment highlights.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .widget { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 14px; width: 220px; display: flex; align-items: center; gap: 14px; }
      .chart-box { position: relative; width: 60px; height: 60px; }
      .donut { transform: rotate(-90deg); }
      .legend { display: flex; flex-direction: column; gap: 4px; }
      .leg-item { display: flex; align-items: center; gap: 6px; font-size: 8px; color: #cbd5e1; }
      .dot { width: 5px; height: 5px; border-radius: 50%; }
    </style>
    <div class="widget">
      <div class="chart-box">
        <svg class="donut" width="60" height="60" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="16" fill="transparent" stroke="rgba(255,255,255,0.05)" stroke-width="4"/>
          <circle cx="20" cy="20" r="16" fill="transparent" stroke="#6C63FF" stroke-width="4" stroke-dasharray="60 100" stroke-dashoffset="0"/>
          <circle cx="20" cy="20" r="16" fill="transparent" stroke="#00D4FF" stroke-width="4" stroke-dasharray="25 100" stroke-dashoffset="-60"/>
        </svg>
      </div>
      <div class="legend">
        <div class="leg-item"><div class="dot" style="background: #6C63FF;"></div>Direct (60%)</div>
        <div class="leg-item"><div class="dot" style="background: #00D4FF;"></div>Organic (25%)</div>
      </div>
    </div>`,
    code: `<div class="dashboard-donut-card">
  <div class="donut-card-inner">
    <div class="chart-circle-container">
      <svg class="donut-chart-graphic" viewBox="0 0 36 36">
        <path class="donut-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="3"/>
        <path class="donut-segment segment-direct" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#6C63FF" stroke-width="3" stroke-dasharray="60, 100"/>
        <path class="donut-segment segment-organic" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#00D4FF" stroke-width="3" stroke-dasharray="25, 100" stroke-dashoffset="-60"/>
        <path class="donut-segment segment-referral" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="15, 100" stroke-dashoffset="-85"/>
      </svg>
      <div class="chart-mid-label">
        <span class="mid-val">85%</span>
        <span class="mid-desc">Match</span>
      </div>
    </div>
    <div class="donut-legends-panel">
      <div class="legend-row">
        <span class="legend-color-dot purple"></span>
        <span class="legend-text">Direct Traffic (60%)</span>
      </div>
      <div class="legend-row">
        <span class="legend-color-dot cyan"></span>
        <span class="legend-text">Organic Search (25%)</span>
      </div>
      <div class="legend-row">
        <span class="legend-color-dot indigo"></span>
        <span class="legend-text">Referrals (15%)</span>
      </div>
    </div>
  </div>
</div>

<style>
.dashboard-donut-card { background: #0b1220; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; padding: 24px; max-width: 440px; font-family: 'Inter', sans-serif; }
.donut-card-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: center; }
.chart-circle-container { position: relative; width: 140px; height: 140px; margin: 0 auto; }
.donut-chart-graphic { width: 100%; height: 100%; }
.donut-segment { transition: stroke-dashoffset 0.3s; }
.chart-mid-label { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; display: flex; flex-direction: column; }
.mid-val { font-size: 24px; font-weight: 800; color: #fff; line-height: 1; }
.mid-desc { font-size: 11px; color: #94A3B8; margin-top: 2px; text-transform: uppercase; }
.donut-legends-panel { display: flex; flex-direction: column; gap: 12px; }
.legend-row { display: flex; align-items: center; gap: 8px; }
.legend-color-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.legend-color-dot.purple { background: #6C63FF; }
.legend-color-dot.cyan { background: #00D4FF; }
.legend-color-dot.indigo { background: #8B5CF6; }
.legend-text { font-size: 13px; color: #cbd5e1; }
@media (max-width: 400px) {
  .donut-card-inner { grid-template-columns: 1fr; }
}
</style>`
  },
  {
    id: 'dash-notification-panel',
    title: 'Notification Center',
    category: 'dashboard',
    tags: ['dashboard', 'notification', 'alerts', 'panel'],
    desc: 'Panel overlay capturing user alerts, system updates, and critical messages.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .panel { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 14px; width: 220px; }
      .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 8px; margin-bottom: 10px; }
      .alert { background: rgba(108,99,255,0.08); border-left: 2px solid #6C63FF; padding: 8px; border-radius: 4px; margin-bottom: 8px; font-size: 9px; line-height: 1.3; }
      .alert:last-child { margin-bottom: 0; }
    </style>
    <div class="panel">
      <div class="header">
        <span style="font-size: 10px; font-weight: 700;">Alerts Center</span>
        <span style="font-size: 8px; color: #00D4FF;">Clear all</span>
      </div>
      <div class="alert">
        <div style="font-weight: 700;">Deployment Successful</div>
        <div style="color: #94A3B8; margin-top: 2px;">Sandbox hooks compiled.</div>
      </div>
      <div class="alert" style="border-color: #00D4FF; background: rgba(0,212,255,0.05);">
        <div style="font-weight: 700;">Resource Limits Warning</div>
        <div style="color: #94A3B8; margin-top: 2px;">VPC usage reached 85%.</div>
      </div>
    </div>`,
    code: `<div class="notifications-center-panel">
  <div class="panel-header-row">
    <h3>Notifications</h3>
    <button class="clear-all-alerts-btn">Clear all</button>
  </div>
  <div class="notifications-list">
    <div class="notification-item unread">
      <div class="item-icon-indicator purple">✓</div>
      <div class="item-text-info">
        <div class="item-head">Deployment Complete</div>
        <p class="item-desc">Sandbox hooks compiled and deployed successfully to cluster.V4.</p>
        <span class="item-time">2m ago</span>
      </div>
    </div>
    <div class="notification-item warning-item unread">
      <div class="item-icon-indicator yellow">!</div>
      <div class="item-text-info">
        <div class="item-head">Resource Limits Warning</div>
        <p class="item-desc">API VPC usage reached 85% of standard allowance allocation.</p>
        <span class="item-time">10m ago</span>
      </div>
    </div>
  </div>
</div>

<style>
.notifications-center-panel { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 24px; max-width: 420px; font-family: 'Inter', sans-serif; box-shadow: 0 10px 45px rgba(0,0,0,0.3); }
.panel-header-row { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 14px; margin-bottom: 20px; }
.panel-header-row h3 { font-size: 16px; font-weight: 800; margin: 0; color: #fff; }
.clear-all-alerts-btn { background: transparent; border: none; color: #00D4FF; font-size: 13px; font-weight: 600; cursor: pointer; }
.notifications-list { display: flex; flex-direction: column; gap: 12px; }
.notification-item { display: flex; gap: 14px; padding: 14px; background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.04); border-radius: 10px; position: relative; }
.notification-item.unread { border-left: 3px solid #6C63FF; background: rgba(108, 99, 255, 0.03); }
.notification-item.warning-item.unread { border-left-color: #F59E0B; background: rgba(245, 158, 11, 0.03); }
.item-icon-indicator { width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: #fff; flex-shrink: 0; }
.item-icon-indicator.purple { background: #6C63FF; }
.item-icon-indicator.yellow { background: #F59E0B; }
.item-text-info { text-align: left; }
.item-head { font-size: 14px; font-weight: 700; color: #fff; }
.item-desc { font-size: 12px; color: #94A3B8; margin: 4px 0; line-height: 1.4; }
.item-time { font-size: 11px; color: #64748B; }
</style>`
  },

  // ─── ADVANCED COMPONENTS (8 COMPONENTS) ───
  {
    id: 'cmd-palette',
    title: 'Command Palette',
    category: 'advanced',
    tags: ['advanced', 'cmd', 'spotlight', 'search'],
    desc: 'Mock search overlay layout matching Spotlight/Command systems.',
    featured: true,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .palette { background: #0e1726; border: 1px solid rgba(108, 99, 255, 0.25); border-radius: 12px; width: 240px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
      .search { padding: 8px 12px; border-bottom: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: space-between; align-items: center; }
      .search input { border: none; background: transparent; outline: none; color: #fff; font-size: 10px; width: 100%; }
      .list { padding: 6px; }
      .item { display: flex; align-items: center; gap: 8px; padding: 6px 8px; border-radius: 6px; font-size: 9px; cursor: pointer; color: #cbd5e1; }
      .item.active { background: rgba(108,99,255,0.15); color: #00D4FF; }
      .item-icon { font-size: 11px; }
    </style>
    <div class="palette">
      <div class="search">
        <input type="text" placeholder="Type a command or search..." readonly>
        <span style="font-size: 8px; background: rgba(255,255,255,0.1); padding: 1px 4px; border-radius: 2px;">ESC</span>
      </div>
      <div class="list">
        <div class="item active"><span class="item-icon">📁</span> Search Files</div>
        <div class="item"><span class="item-icon">⚡</span> Deploy Workspace</div>
        <div class="item"><span class="item-icon">⚙</span> Settings</div>
      </div>
    </div>`,
    code: `<div class="command-palette-wrapper">
  <div class="palette-input-area">
    <span class="palette-search-icon">🔍</span>
    <input type="text" placeholder="Type a command or search files..." id="paletteSearch" onkeyup="filterPalette()">
    <span class="esc-badge">ESC</span>
  </div>
  <div class="palette-items-list" id="paletteList">
    <div class="palette-option active">
      <span class="option-icon">📁</span>
      <div class="option-details">
        <div class="option-title">Search Project Files</div>
        <div class="option-desc">Scan workspace directories.</div>
      </div>
      <span class="option-shortcut">⌘F</span>
    </div>
    <div class="palette-option">
      <span class="option-icon">⚡</span>
      <div class="option-details">
        <div class="option-title">Run Build Script</div>
        <div class="option-desc">Compile components.</div>
      </div>
      <span class="option-shortcut">⌘B</span>
    </div>
  </div>
</div>

<script>
function filterPalette() {
  const query = document.getElementById('paletteSearch').value.toLowerCase();
  const options = document.querySelectorAll('.palette-option');
  options.forEach(opt => {
    const title = opt.querySelector('.option-title').textContent.toLowerCase();
    opt.style.display = title.includes(query) ? 'flex' : 'none';
  });
}
</script>

<style>
.command-palette-wrapper { background: #0e1726; border: 1px solid rgba(108, 99, 255, 0.2); border-radius: 16px; padding: 12px; max-width: 500px; margin: 0 auto; box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5); font-family: 'Inter', sans-serif; }
.palette-input-area { display: flex; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.06); padding: 12px 16px 16px; gap: 12px; }
.palette-search-icon { font-size: 16px; color: #94A3B8; }
.palette-input-area input { flex: 1; border: none; background: transparent; color: #fff; font-size: 14px; outline: none; }
.esc-badge { font-size: 11px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px; color: #94A3B8; }
.palette-items-list { padding: 8px 0 0 0; display: flex; flex-direction: column; gap: 4px; }
.palette-option { display: flex; align-items: center; gap: 14px; padding: 10px 16px; border-radius: 10px; cursor: pointer; transition: all 0.2s; }
.palette-option.active, .palette-option:hover { background: rgba(108, 99, 255, 0.12); }
.option-icon { font-size: 18px; color: #00D4FF; }
.option-details { flex: 1; text-align: left; }
.option-title { font-size: 14px; font-weight: 700; color: #fff; }
.option-desc { font-size: 11px; color: #94A3B8; margin-top: 2px; }
.option-shortcut { font-size: 12px; color: #64748B; }
</style>`
  },
  {
    id: 'drawer-panel',
    title: 'Slide Drawer Panel',
    category: 'advanced',
    tags: ['advanced', 'drawer', 'overlay', 'panel'],
    desc: 'Panel drawer mechanism sliding from the right hand side containing detailed fields.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; min-height: 100vh; overflow: hidden; position: relative; }
      .backdrop { position: absolute; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); z-index: 10; }
      .drawer { position: absolute; top: 0; right: 0; bottom: 0; width: 160px; background: #0b1220; border-left: 1px solid rgba(255,255,255,0.08); z-index: 20; padding: 16px; box-shadow: -10px 0 30px rgba(0,0,0,0.3); }
      .title { font-size: 11px; font-weight: 800; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 8px; margin-bottom: 12px; }
      .btn { display: block; width: 100%; padding: 6px; border: none; border-radius: 6px; font-size: 9px; cursor: pointer; text-align: center; margin-top: 12px; }
    </style>
    <div class="backdrop"></div>
    <div class="drawer">
      <div class="title">Meta Properties</div>
      <div style="font-size: 8px; color: #94A3B8;">Asset name: image.png</div>
      <div style="font-size: 8px; color: #94A3B8; margin-top: 6px;">Size: 240 KB</div>
      <button class="btn" style="background: #6C63FF; color: #fff;">Download</button>
    </div>`,
    code: `<div class="slide-drawer-backdrop" id="drawerBackdrop" onclick="closeDrawer()"></div>
<div class="slide-drawer-panel" id="drawerPanel">
  <div class="drawer-header-row">
    <h3>Document Meta</h3>
    <button class="drawer-close-btn" onclick="closeDrawer()">✕</button>
  </div>
  <div class="drawer-content-body">
    <div class="doc-property">
      <span class="prop-lbl">Filename</span>
      <span class="prop-val">v4-token-sheet.json</span>
    </div>
    <div class="doc-property">
      <span class="prop-lbl">Allocated Size</span>
      <span class="prop-val">4.8 MB</span>
    </div>
    <button class="drawer-action-btn-p">Execute Sync</button>
  </div>
</div>

<script>
function closeDrawer() {
  document.getElementById('drawerPanel').classList.remove('open');
  document.getElementById('drawerBackdrop').classList.remove('visible');
}
</script>

<style>
.slide-drawer-backdrop { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(4px); display: none; z-index: 1000; }
.slide-drawer-backdrop.visible { display: block; }
.slide-drawer-panel { position: fixed; top: 0; right: 0; bottom: 0; width: 360px; background: #0b1220; border-left: 1px solid rgba(255, 255, 255, 0.08); padding: 32px; box-sizing: border-box; transform: translateX(100%); transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); z-index: 1001; }
.slide-drawer-panel.open { transform: translateX(0); }
.drawer-header-row { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 16px; margin-bottom: 24px; }
.drawer-header-row h3 { font-size: 18px; font-weight: 700; margin: 0; }
.drawer-close-btn { background: transparent; border: none; color: #94A3B8; font-size: 18px; cursor: pointer; }
.doc-property { margin-bottom: 16px; display: flex; flex-direction: column; text-align: left; }
.prop-lbl { font-size: 11px; text-transform: uppercase; color: #94A3B8; font-weight: 600; }
.prop-val { font-size: 14px; color: #fff; margin-top: 4px; }
.drawer-action-btn-p { display: block; width: 100%; padding: 12px; background: #6C63FF; border: none; border-radius: 8px; color: #fff; font-weight: 700; font-size: 14px; cursor: pointer; margin-top: 32px; }
</style>`
  },
  {
    id: 'kanban-board',
    title: 'Kanban Board',
    category: 'advanced',
    tags: ['advanced', 'kanban', 'tasks', 'board'],
    desc: 'Columns grid layout managing task states with styled card nodes.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 10px; }
      .board { display: flex; gap: 8px; width: 100%; max-width: 320px; }
      .col { flex: 1; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 8px; padding: 6px; }
      .col-title { font-size: 8px; font-weight: 700; color: #94A3B8; margin-bottom: 8px; text-transform: uppercase; }
      .item { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); padding: 6px; border-radius: 4px; font-size: 8px; margin-bottom: 6px; cursor: pointer; }
    </style>
    <div class="board">
      <div class="col">
        <div class="col-title">Todo</div>
        <div class="item">Fix design system bugs</div>
      </div>
      <div class="col">
        <div class="col-title">Progress</div>
        <div class="item" style="border-left: 2px solid #6C63FF;">Build V4 core</div>
      </div>
    </div>`,
    code: `<div class="kanban-board-wrapper">
  <div class="kanban-column">
    <div class="column-header">Backlog <span class="card-count-badge">2</span></div>
    <div class="kanban-cards-stack">
      <div class="kanban-card">
        <div class="card-tag purple">Bug</div>
        <h4>Fix layout reflow in Safari</h4>
        <p>Ensure correct height queries are compiled.</p>
      </div>
      <div class="kanban-card">
        <div class="card-tag cyan">Docs</div>
        <h4>Audit color systems WCAG</h4>
        <p>Cross check primary contrast rates.</p>
      </div>
    </div>
  </div>
  <div class="kanban-column">
    <div class="column-header">In Progress <span class="card-count-badge">1</span></div>
    <div class="kanban-cards-stack">
      <div class="kanban-card active-state">
        <div class="card-tag orange">Core</div>
        <h4>Design V4 Token Manifests</h4>
        <p>Map variable bindings in tokens.css.</p>
      </div>
    </div>
  </div>
</div>

<style>
.kanban-board-wrapper { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 800px; margin: 0 auto; font-family: 'Inter', sans-serif; }
.kanban-column { background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.03); border-radius: 16px; padding: 16px; }
.column-header { font-size: 14px; font-weight: 700; color: #94A3B8; margin-bottom: 20px; display: flex; justify-content: space-between; }
.card-count-badge { background: rgba(255,255,255,0.05); padding: 1px 6px; border-radius: 4px; font-size: 11px; }
.kanban-cards-stack { display: flex; flex-direction: column; gap: 12px; }
.kanban-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 16px; text-align: left; }
.kanban-card.active-state { border-color: #6C63FF; }
.card-tag { font-size: 9px; font-weight: 700; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-bottom: 10px; text-transform: uppercase; }
.card-tag.purple { background: rgba(108,99,255,0.1); color: #6C63FF; }
.card-tag.cyan { background: rgba(0,212,255,0.1); color: #00D4FF; }
.card-tag.orange { background: rgba(245,158,11,0.1); color: #F59E0B; }
.kanban-card h4 { font-size: 14px; margin: 0 0 6px 0; color: #fff; }
.kanban-card p { font-size: 12px; color: #94A3B8; margin: 0; line-height: 1.4; }
@media (max-width: 600px) {
  .kanban-board-wrapper { grid-template-columns: 1fr; }
}
</style>`
  },
  {
    id: 'file-upload',
    title: 'File Upload Zone',
    category: 'advanced',
    tags: ['advanced', 'upload', 'dropzone', 'file'],
    desc: 'Interactive drop zone area presenting loading states and dynamic file types.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .zone { border: 2px dashed rgba(108, 99, 255, 0.4); background: rgba(108, 99, 255, 0.03); border-radius: 12px; padding: 24px; text-align: center; max-width: 220px; width: 100%; cursor: pointer; }
      .lbl { font-size: 10px; font-weight: 700; margin: 8px 0; }
      .sub { font-size: 8px; color: #94A3B8; }
      .bar-wrap { height: 4px; background: rgba(255,255,255,0.08); border-radius: 2px; margin-top: 12px; overflow: hidden; }
      .bar { height: 100%; width: 45%; background: #00D4FF; }
    </style>
    <div class="zone">
      <div style="font-size: 18px;">📥</div>
      <div class="lbl">Drag files here</div>
      <div class="sub">PNG or JPG up to 10MB</div>
      <div class="bar-wrap"><div class="bar"></div></div>
    </div>`,
    code: `<div class="file-upload-dropzone" id="dropzone" ondragover="event.preventDefault()">
  <div class="dropzone-graphics">📥</div>
  <h3>Drag & Drop Files</h3>
  <p class="dropzone-sub">PNG, JPEG or JSON files up to 16MB allowance.</p>
  <div class="upload-progress-wrapper" id="progressBlock">
    <div class="progress-meta"><span>Uploading tokens.json</span><span id="percentText">45%</span></div>
    <div class="progress-track"><div class="progress-thumb" id="progressThumb" style="width: 45%"></div></div>
  </div>
</div>

<style>
.file-upload-dropzone { border: 2px dashed rgba(108, 99, 255, 0.3); background: rgba(108, 99, 255, 0.02); border-radius: 16px; padding: 48px 32px; text-align: center; max-width: 480px; margin: 0 auto; font-family: 'Inter', sans-serif; cursor: pointer; transition: all 0.2s; }
.file-upload-dropzone:hover { background: rgba(108, 99, 255, 0.04); border-color: #6C63FF; }
.dropzone-graphics { font-size: 42px; margin-bottom: 16px; }
.file-upload-dropzone h3 { font-size: 18px; font-weight: 700; margin: 0 0 6px 0; }
.dropzone-sub { font-size: 13px; color: #94A3B8; margin-bottom: 24px; }
.upload-progress-wrapper { background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.05); padding: 14px; border-radius: 10px; display: block; text-align: left; }
.progress-meta { display: flex; justify-content: space-between; font-size: 12px; font-weight: 600; margin-bottom: 8px; }
.progress-track { height: 6px; background: rgba(255,255,255,0.06); border-radius: 3px; overflow: hidden; }
.progress-thumb { height: 100%; background: linear-gradient(90deg, #6C63FF, #00D4FF); border-radius: 3px; }
</style>`
  },
  {
    id: 'code-preview',
    title: 'Code Preview Tabs',
    category: 'advanced',
    tags: ['advanced', 'code', 'previews', 'tabs'],
    desc: 'Line numbers and custom syntax highlighting tab blocks with integrated copy code mechanics.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .pre-box { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; width: 240px; overflow: hidden; font-family: monospace; }
      .tabs { display: flex; background: rgba(0,0,0,0.2); border-bottom: 1px solid rgba(255,255,255,0.06); padding: 0 10px; }
      .tab { font-size: 8px; padding: 6px 10px; color: #94A3B8; cursor: pointer; }
      .tab.active { color: #00D4FF; border-bottom: 2px solid #00D4FF; }
      .code-body { padding: 10px; font-size: 8px; line-height: 1.4; color: #a78bfa; }
    </style>
    <div class="pre-box">
      <div class="tabs">
        <div class="tab active">index.html</div>
        <div class="tab">app.js</div>
      </div>
      <div class="code-body">
        <span style="color: #6C63FF;">&lt;div</span> <span style="color: #00D4FF;">class</span>=<span style="color: #fff;">"aura"</span><span style="color: #6C63FF;">&gt;</span><br>
        &nbsp;&nbsp;&lt;span&gt;V4 release&lt;/span&gt;<br>
        <span style="color: #6C63FF;">&lt;/div&gt;</span>
      </div>
    </div>`,
    code: `<div class="tabs-code-block-wrapper">
  <div class="code-header-tabs">
    <div class="left-tabs">
      <button class="code-tab active">index.html</button>
      <button class="code-tab">tokens.css</button>
    </div>
    <button class="copy-snippet-btn">Copy code</button>
  </div>
  <pre class="code-pre-lines"><code><span class="c-tag">&lt;section</span> <span class="c-attr">class=</span><span class="c-val">"aura-core"</span><span class="c-tag">&gt;</span>
  <span class="c-tag">&lt;div</span> <span class="c-attr">id=</span><span class="c-val">"nodes"</span><span class="c-tag">&gt;</span>AURA UI V4<span class="c-tag">&lt;/div&gt;</span>
<span class="c-tag">&lt;/section&gt;</span></code></pre>
</div>

<style>
.tabs-code-block-wrapper { background: #0b1220; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; overflow: hidden; max-width: 600px; margin: 0 auto; font-family: monospace; }
.code-header-tabs { display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.25); padding: 0 16px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.left-tabs { display: flex; }
.code-tab { background: transparent; border: none; color: #94A3B8; padding: 12px 16px; font-size: 13px; cursor: pointer; border-bottom: 2px solid transparent; }
.code-tab.active { color: #00D4FF; border-bottom-color: #00D4FF; }
.copy-snippet-btn { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #cbd5e1; padding: 6px 12px; border-radius: 6px; font-size: 12px; cursor: pointer; }
.code-pre-lines { margin: 0; padding: 20px; overflow-x: auto; text-align: left; }
.code-pre-lines code { font-size: 13px; color: #e2e8f0; line-height: 1.6; }
.c-tag { color: #8B5CF6; }
.c-attr { color: #00D4FF; }
.c-val { color: #22C55E; }
</style>`
  },
  {
    id: 'timeline-feed',
    title: 'Timeline Flow',
    category: 'advanced',
    tags: ['advanced', 'timeline', 'flow', 'process'],
    desc: 'Vertical chronological route mapping milestone steps with styled path indicators.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .tl { max-width: 240px; border-left: 2px solid rgba(255,255,255,0.08); padding-left: 14px; position: relative; }
      .node { position: relative; margin-bottom: 16px; }
      .node:last-child { margin-bottom: 0; }
      .dot { position: absolute; left: -19px; top: 2px; width: 8px; height: 8px; border-radius: 50%; background: #6C63FF; border: 2px solid #050816; }
      .dot.active { background: #00D4FF; }
      .title { font-size: 10px; font-weight: 700; }
      .desc { font-size: 8px; color: #94A3B8; margin-top: 2px; }
    </style>
    <div class="tl">
      <div class="node">
        <div class="dot active"></div>
        <div class="title">V4 Framework Upgrade</div>
        <div class="desc">Integrated high contrast tokens.</div>
      </div>
      <div class="node">
        <div class="dot"></div>
        <div class="title">Security Audit Completed</div>
        <div class="desc">VPC parameters secured.</div>
      </div>
    </div>`,
    code: `<div class="timeline-route-wrapper">
  <div class="timeline-left-line">
    <div class="timeline-step">
      <div class="step-marker active"></div>
      <div class="step-body-content">
        <h3>V4 Framework Upgrade</h3>
        <p>We completed integration of advanced tokens and WCAG contrast rules across core sheets.</p>
        <span class="step-date">June 1, 2026</span>
      </div>
    </div>
    <div class="timeline-step">
      <div class="step-marker"></div>
      <div class="step-body-content">
        <h3>Security Audit Completed</h3>
        <p>Independent security groups completed pen tests against VPS API routes with zero threats detected.</p>
        <span class="step-date">May 15, 2026</span>
      </div>
    </div>
  </div>
</div>

<style>
.timeline-route-wrapper { max-width: 600px; margin: 0 auto; font-family: 'Inter', sans-serif; }
.timeline-left-line { border-left: 2px solid rgba(255, 255, 255, 0.08); padding-left: 24px; position: relative; display: flex; flex-direction: column; gap: 32px; }
.timeline-step { position: relative; text-align: left; }
.step-marker { position: absolute; left: -31px; top: 4px; width: 12px; height: 12px; border-radius: 50%; background: #0b1220; border: 2px solid rgba(255,255,255,0.2); }
.step-marker.active { border-color: #00D4FF; background: #00D4FF; box-shadow: 0 0 10px #00D4FF; }
.step-body-content h3 { font-size: 16px; font-weight: 700; margin: 0 0 6px 0; color: #fff; }
.step-body-content p { font-size: 13px; color: #94A3B8; line-height: 1.5; margin: 0 0 8px 0; }
.step-date { font-size: 11px; color: #64748B; font-weight: 600; }
</style>`
  },
  {
    id: 'image-gallery',
    title: 'Image Zoom Gallery',
    category: 'advanced',
    tags: ['advanced', 'gallery', 'image', 'zoom'],
    desc: 'Image display matrix featuring hover zoom actions.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 10px; }
      .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; width: 240px; }
      .img-card { position: relative; border-radius: 8px; overflow: hidden; height: 70px; background: linear-gradient(135deg, #6C63FF, #00D4FF); cursor: pointer; }
      .img-card::after { content: 'Zoom'; position: absolute; inset: 0; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; font-size: 8px; opacity: 0; transition: opacity 0.2s; }
      .img-card:hover::after { opacity: 1; }
    </style>
    <div class="grid">
      <div class="img-card"></div>
      <div class="img-card" style="background: linear-gradient(135deg, #8B5CF6, #00D4FF);"></div>
    </div>`,
    code: `<div class="zoom-gallery-grid-layout">
  <div class="gallery-image-wrapper">
    <div class="mock-bg-img img-one"></div>
    <div class="image-hover-action-overlay">
      <span class="hover-label-icon">🔍 Quick Preview</span>
    </div>
  </div>
  <div class="gallery-image-wrapper">
    <div class="mock-bg-img img-two"></div>
    <div class="image-hover-action-overlay">
      <span class="hover-label-icon">🔍 Quick Preview</span>
    </div>
  </div>
</div>

<style>
.zoom-gallery-grid-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; max-width: 800px; margin: 0 auto; }
.gallery-image-wrapper { position: relative; border-radius: 16px; overflow: hidden; height: 260px; cursor: pointer; background: #0b1220; border: 1px solid rgba(255,255,255,0.06); }
.mock-bg-img { width: 100%; height: 100%; transition: transform 0.3s; }
.img-one { background: linear-gradient(135deg, #6C63FF, #8B5CF6); }
.img-two { background: linear-gradient(135deg, #8B5CF6, #00D4FF); }
.gallery-image-wrapper:hover .mock-bg-img { transform: scale(1.08); }
.image-hover-action-overlay { position: absolute; inset: 0; background: rgba(5, 8, 22, 0.4); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.2s; }
.gallery-image-wrapper:hover .image-hover-action-overlay { opacity: 1; }
.hover-label-icon { font-size: 14px; color: #fff; font-weight: 700; background: rgba(0,0,0,0.6); padding: 8px 16px; border-radius: 50px; border: 1px solid rgba(255,255,255,0.1); }
</style>`
  },
  {
    id: 'color-picker',
    title: 'Custom Color Picker',
    category: 'advanced',
    tags: ['advanced', 'picker', 'colors', 'form'],
    desc: 'Hex copy card and custom colors selection tool widget layouts.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 12px; width: 160px; }
      .box { height: 40px; background: #6C63FF; border-radius: 6px; margin-bottom: 10px; }
      .hex-row { display: flex; justify-content: space-between; align-items: center; }
      .hex { font-size: 9px; font-family: monospace; color: #00D4FF; }
      .btn { padding: 4px 8px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; color: #fff; font-size: 7px; cursor: pointer; }
    </style>
    <div class="card">
      <div class="box" id="pBox"></div>
      <div class="hex-row">
        <span class="hex" id="pHex">#6C63FF</span>
        <button class="btn" onclick="copyHex()">Copy</button>
      </div>
    </div>
    <script>
      function copyHex() {
        alert('Copied hex value!');
      }
    </script>`,
    code: `<div class="color-picker-widget-card">
  <div class="color-display-panel" id="colorDisplayBlock" style="background-color: #6C63FF"></div>
  <div class="picker-controls-row">
    <div class="hex-value-indicator" id="hexString">#6C63FF</div>
    <button class="copy-hex-trigger-btn" onclick="performHexCopy()">Copy Hex</button>
  </div>
  <div class="palette-swatches-grid">
    <div class="swatch-node" style="background-color: #6C63FF" onclick="setWidgetColor('#6C63FF')"></div>
    <div class="swatch-node" style="background-color: #8B5CF6" onclick="setWidgetColor('#8B5CF6')"></div>
    <div class="swatch-node" style="background-color: #00D4FF" onclick="setWidgetColor('#00D4FF')"></div>
    <div class="swatch-node" style="background-color: #EF4444" onclick="setWidgetColor('#EF4444')"></div>
  </div>
</div>

<script>
function setWidgetColor(hex) {
  document.getElementById('colorDisplayBlock').style.backgroundColor = hex;
  document.getElementById('hexString').textContent = hex;
}
function performHexCopy() {
  const hex = document.getElementById('hexString').textContent;
  navigator.clipboard.writeText(hex).then(() => alert('Hex value copied to clipboard: ' + hex));
}
</script>

<style>
.color-picker-widget-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 20px; max-width: 260px; font-family: 'Inter', sans-serif; }
.color-display-panel { height: 100px; border-radius: 10px; margin-bottom: 16px; border: 1px solid rgba(255,255,255,0.05); }
.picker-controls-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.hex-value-indicator { font-family: monospace; font-size: 15px; color: #00D4FF; font-weight: 700; }
.copy-hex-trigger-btn { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer; }
.palette-swatches-grid { display: flex; gap: 8px; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 14px; }
.swatch-node { width: 24px; height: 24px; border-radius: 6px; cursor: pointer; border: 1px solid rgba(255,255,255,0.1); transition: transform 0.1s; }
.swatch-node:hover { transform: scale(1.1); }
</style>`
  },
  {
    id: 'card-analytics',
    title: 'Analytics Card',
    category: 'card',
    tags: ['card', 'analytics', 'kpi', 'live'],
    desc: 'Analytics card showcasing server CPU usage load with live pulsing status indicators.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 14px; width: 150px; }
      .head { display: flex; justify-content: space-between; align-items: center; font-size: 8px; color: #94A3B8; font-weight: 700; text-transform: uppercase; }
      .pulse-row { display: flex; align-items: center; gap: 6px; margin: 10px 0; }
      .pulse { width: 6px; height: 6px; background: #22C55E; border-radius: 50%; position: relative; }
      .pulse::after { content: ''; position: absolute; inset: -4px; border: 2px solid #22C55E; border-radius: 50%; opacity: 0; animation: ping 1.2s infinite; }
      .val { font-size: 20px; font-weight: 800; }
      @keyframes ping { to { transform: scale(2); opacity: 0; } }
      @media(prefers-reduced-motion: reduce) { .pulse::after { animation: none !important; } }
    </style>
    <div class="card">
      <div class="head"><span>CPU Core Load</span><span>Live</span></div>
      <div class="pulse-row">
        <div class="pulse"></div>
        <span class="val">34.2%</span>
      </div>
      <div style="font-size: 7px; color: #00D4FF;">Optimal Performance</div>
    </div>`,
    code: `<div class="analytics-stat-card">
  <div class="stat-card-top">
    <span class="stat-meta-title">CPU Compute Node</span>
    <div class="live-indicator-wrapper">
      <span class="indicator-green-glow"></span>
      <span class="indicator-txt-live">LIVE</span>
    </div>
  </div>
  <div class="stat-main-value">34.2%</div>
  <p class="stat-brief-desc">Optimal thermal thresholds across active sandbox instances.</p>
</div>

<style>
@media(prefers-reduced-motion: reduce) {
  .indicator-green-glow::after { animation: none !important; }
}
.analytics-stat-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 24px; max-width: 280px; font-family: 'Inter', sans-serif; }
.stat-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.stat-meta-title { font-size: 11px; text-transform: uppercase; color: #94A3B8; font-weight: 700; letter-spacing: 0.05em; }
.live-indicator-wrapper { display: flex; align-items: center; gap: 6px; }
.indicator-green-glow { width: 6px; height: 6px; background: #22C55E; border-radius: 50%; position: relative; }
.indicator-green-glow::after { content: ''; position: absolute; inset: -4px; border: 2px solid #22C55E; border-radius: 50%; opacity: 0; animation: indicatorPing 1.5s infinite; }
.indicator-txt-live { font-size: 11px; font-weight: 700; color: #22C55E; }
.stat-main-value { font-size: 36px; font-weight: 800; color: #fff; margin-bottom: 8px; }
.stat-brief-desc { font-size: 12px; color: #cbd5e1; margin: 0; line-height: 1.4; }
@keyframes indicatorPing {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(2.2); opacity: 0; }
}
</style>`
  },
  {
    id: 'card-blog',
    title: 'Blog Post Card',
    category: 'card',
    tags: ['card', 'blog', 'article', 'content'],
    desc: 'Article preview card capturing tags, titles, descriptions, and read duration badges.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; overflow: hidden; width: 180px; }
      .thumb { height: 70px; background: linear-gradient(135deg, #6C63FF, #8B5CF6); }
      .body { padding: 12px; }
      .tag { font-size: 7px; background: rgba(0,212,255,0.1); border: 1px solid rgba(0,212,255,0.3); color: #00D4FF; padding: 2px 6px; border-radius: 4px; display: inline-block; font-weight: 700; }
      .title { font-size: 11px; font-weight: 700; margin: 8px 0 4px 0; }
      .desc { font-size: 8px; color: #94A3B8; line-height: 1.4; margin: 0; }
    </style>
    <div class="card">
      <div class="thumb"></div>
      <div class="body">
        <span class="tag">Engineering</span>
        <h4 class="title">Next Gen Web Compilers</h4>
        <p class="desc">A study of layout reflow logic and tokenized variable rendering systems.</p>
      </div>
    </div>`,
    code: `<div class="blog-preview-card">
  <div class="blog-card-media-wrapper">
    <div class="mockup-blog-graphic"></div>
    <span class="read-duration-badge">5 min read</span>
  </div>
  <div class="blog-card-content">
    <span class="blog-tag">Engineering</span>
    <h3>Next Gen Web Compilers</h3>
    <p>A study of layout reflow logic and tokenized variable rendering systems.</p>
    <a href="#" class="blog-read-link">Read Full Study →</a>
  </div>
</div>

<style>
.blog-preview-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; overflow: hidden; max-width: 320px; font-family: 'Inter', sans-serif; box-shadow: 0 10px 30px rgba(0,0,0,0.25); }
.blog-card-media-wrapper { height: 160px; background: linear-gradient(135deg, #6C63FF, #8B5CF6); position: relative; }
.mockup-blog-graphic { width: 100%; height: 100%; }
.read-duration-badge { position: absolute; bottom: 12px; right: 12px; background: rgba(0, 0, 0, 0.6); border: 1px solid rgba(255,255,255,0.1); padding: 4px 10px; border-radius: 6px; font-size: 11px; color: #fff; font-weight: 600; }
.blog-card-content { padding: 24px; text-align: left; }
.blog-tag { display: inline-block; background: rgba(0,212,255,0.1); border: 1px solid rgba(0,212,255,0.3); color: #00D4FF; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 4px; margin-bottom: 12px; }
.blog-card-content h3 { font-size: 18px; font-weight: 700; margin: 0 0 8px 0; color: #fff; }
.blog-card-content p { font-size: 13px; color: #94A3B8; line-height: 1.5; margin: 0 0 20px 0; }
.blog-read-link { font-size: 13px; color: #6C63FF; text-decoration: none; font-weight: 700; transition: color 0.2s; }
.blog-read-link:hover { color: #8B5CF6; }
</style>`
  },
  {
    id: 'card-team-member',
    title: 'Team Member Card',
    category: 'card',
    tags: ['card', 'team', 'member', 'profile'],
    desc: 'Profile card presenting member avatars, name roles, and floating social tags.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px; text-align: center; width: 140px; }
      .av { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #6C63FF, #00D4FF); margin: 0 auto 10px; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 800; }
      .name { font-size: 11px; font-weight: 700; }
      .role { font-size: 8px; color: #94A3B8; margin-top: 2px; }
      .socials { display: flex; justify-content: center; gap: 8px; margin-top: 10px; font-size: 9px; color: #00D4FF; }
    </style>
    <div class="card">
      <div class="av">SK</div>
      <div class="name">Sarah Kim</div>
      <div class="role">Lead Architect</div>
      <div class="socials"><span>𝕏</span><span>🐱</span></div>
    </div>`,
    code: `<div class="team-profile-card">
  <div class="profile-avatar-large">SK</div>
  <h3>Sarah Kim</h3>
  <p class="profile-role">Lead Architect</p>
  <div class="profile-social-row">
    <a href="#" aria-label="Twitter X">𝕏</a>
    <a href="#" aria-label="GitHub">🐱</a>
    <a href="#" aria-label="LinkedIn">💼</a>
  </div>
</div>

<style>
.team-profile-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; padding: 32px; max-width: 220px; text-align: center; font-family: 'Inter', sans-serif; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
.profile-avatar-large { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #6C63FF, #00D4FF); margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: 800; color: #fff; box-shadow: 0 5px 15px rgba(108, 99, 255, 0.3); }
.team-profile-card h3 { font-size: 18px; font-weight: 700; margin: 0; color: #fff; }
.profile-role { font-size: 13px; color: #94A3B8; margin: 4px 0 20px; }
.profile-social-row { display: flex; justify-content: center; gap: 16px; }
.profile-social-row a { color: #94A3B8; text-decoration: none; font-size: 16px; transition: color 0.2s; }
.profile-social-row a:hover { color: #00D4FF; }
</style>`
  },
  {
    id: 'card-feature-gradient',
    title: 'Feature Card',
    category: 'card',
    tags: ['card', 'feature', 'gradient', 'highlight'],
    desc: 'Feature presentation card with vibrant linear gradient borders and highlight headings.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .card { background: linear-gradient(135deg, #0b1220, rgba(108, 99, 255, 0.05)); border: 1px solid rgba(108, 99, 255, 0.3); border-radius: 12px; padding: 16px; max-width: 180px; }
      .title { font-size: 11px; font-weight: 800; background: linear-gradient(135deg, #fff 50%, #00D4FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      .desc { font-size: 8px; color: #CBD5E1; line-height: 1.4; margin-top: 6px; }
    </style>
    <div class="card">
      <div style="font-size: 14px; margin-bottom: 8px;">🚀</div>
      <h4 class="title" style="margin: 0;">GPU Compiled</h4>
      <p class="desc" style="margin: 0;">Compile graphics variables in GPU-accelerated buffers for maximum frame outputs.</p>
    </div>`,
    code: `<div class="feature-gradient-card">
  <div class="feature-icon">🚀</div>
  <h3 class="feature-title">GPU Compiled</h3>
  <p class="feature-desc">Compile graphics variables in GPU-accelerated buffers for maximum frame outputs.</p>
</div>

<style>
.feature-gradient-card { background: linear-gradient(135deg, #0b1220, rgba(108, 99, 255, 0.08)); border: 1px solid rgba(108, 99, 255, 0.25); border-radius: 20px; padding: 32px; max-width: 300px; text-align: left; font-family: 'Inter', sans-serif; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
.feature-icon { font-size: 32px; margin-bottom: 16px; }
.feature-title { font-size: 20px; font-weight: 800; background: linear-gradient(135deg, #fff 50%, #00D4FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0 0 10px 0; }
.feature-desc { font-size: 14px; color: #cbd5e1; line-height: 1.5; margin: 0; }
</style>`
  },
  {
    id: 'card-startup',
    title: 'Startup Card',
    category: 'card',
    tags: ['card', 'startup', 'summary', 'highlights'],
    desc: 'Startup showcase summary presentation containing star ratings and brand labels.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 14px; width: 160px; }
      .stars { font-size: 9px; color: #00D4FF; margin-bottom: 6px; }
      .title { font-size: 11px; font-weight: 800; margin: 0 0 4px 0; }
      .tagline { font-size: 8px; color: #94A3B8; line-height: 1.3; }
    </style>
    <div class="card">
      <div class="stars">★★★★★</div>
      <h3 class="title">Linear.app</h3>
      <p class="tagline" style="margin: 0;">The issue tracker built for fast-moving teams. Keep development workflows synchronized.</p>
    </div>`,
    code: `<div class="startup-summary-card">
  <div class="startup-card-top">
    <div class="startup-stars">★★★★★</div>
    <span class="startup-metric-label">4.9 Rating</span>
  </div>
  <h3>Linear.app</h3>
  <p class="startup-text">The issue tracker built for fast-moving teams. Keep development workflows synchronized.</p>
  <a href="#" class="startup-explore-btn">Explore Workspace</a>
</div>

<style>
.startup-summary-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 24px; max-width: 280px; text-align: left; font-family: 'Inter', sans-serif; }
.startup-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
.startup-stars { font-size: 13px; color: #00D4FF; }
.startup-metric-label { font-size: 11px; color: #94A3B8; font-weight: 600; }
.startup-summary-card h3 { font-size: 20px; font-weight: 800; margin: 0 0 8px 0; color: #fff; }
.startup-text { font-size: 13px; color: #cbd5e1; line-height: 1.5; margin-bottom: 20px; }
.startup-explore-btn { display: inline-block; font-size: 13px; color: #6C63FF; text-decoration: none; font-weight: 700; }
</style>`
  },
  {
    id: 'card-service',
    title: 'Service Card',
    category: 'card',
    tags: ['card', 'service', 'details', 'action'],
    desc: 'Minimal service details layout with integrated quick action arrow triggers.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 14px; width: 160px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: all 0.2s; }
      .card:hover { border-color: #6C63FF; }
      .title { font-size: 10px; font-weight: 700; }
      .lbl { font-size: 7px; color: #94A3B8; margin-top: 2px; }
      .arrow { font-size: 12px; color: #00D4FF; }
    </style>
    <div class="card">
      <div>
        <div class="title">Cloud Database</div>
        <div class="lbl">Cluster configuration active.</div>
      </div>
      <span class="arrow">→</span>
    </div>`,
    code: `<div class="service-action-card" onclick="location.href='#'">
  <div class="service-left-details">
    <h3>Cloud Database</h3>
    <p>Isolated schema instances with automatic backup logs.</p>
  </div>
  <div class="service-action-arrow">→</div>
</div>

<style>
.service-action-card { background: #0b1220; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; padding: 20px 24px; max-width: 400px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-family: 'Inter', sans-serif; transition: all 0.2s; }
.service-action-card:hover { border-color: #6C63FF; background: rgba(108, 99, 255, 0.03); }
.service-left-details { text-align: left; }
.service-left-details h3 { font-size: 16px; font-weight: 700; margin: 0 0 4px 0; color: #fff; }
.service-left-details p { font-size: 12px; color: #94A3B8; margin: 0; }
.service-action-arrow { font-size: 20px; color: #00D4FF; font-weight: 700; transition: transform 0.2s; }
.service-action-card:hover .service-action-arrow { transform: translateX(4px); }
</style>`
  },

  // ─── ANIMATION SHOWCASE (4 COMPONENTS) ───
  {
    id: 'anim-magnetic-btn',
    title: 'Magnetic Button',
    category: 'animation',
    tags: ['animation', 'interactive', 'magnetic', 'button'],
    desc: 'Interactive button that pulls itself toward the user cursor on hover.',
    featured: true,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .btn { padding: 10px 20px; background: linear-gradient(135deg, #6C63FF, #8B5CF6); border: none; border-radius: 8px; color: #fff; font-size: 11px; font-weight: 700; cursor: pointer; transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1); }
      .btn:hover { transform: scale(1.05) translate(2px, -2px); }
      @media(prefers-reduced-motion: reduce) { .btn:hover { transform: none !important; } }
    </style>
    <button class="btn">Hover Magnetic</button>`,
    code: `<button class="magnetic-showcase-btn" id="magBtn">Magnetic Hover</button>

<script>
const btn = document.getElementById('magBtn');
btn.addEventListener('mousemove', (e) => {
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width/2;
  const y = e.clientY - rect.top - rect.height/2;
  btn.style.transform = 'translate(' + x * 0.3 + 'px, ' + y * 0.3 + 'px)';
});
btn.addEventListener('mouseleave', () => {
  btn.style.transform = 'translate(0px, 0px)';
});
</script>

<style>
@media (prefers-reduced-motion: reduce) {
  .magnetic-showcase-btn { transition: none !important; transform: none !important; }
}
.magnetic-showcase-btn { padding: 14px 28px; background: linear-gradient(135deg, #6C63FF, #8B5CF6); border: none; border-radius: 10px; color: #fff; font-size: 15px; font-weight: 700; cursor: pointer; transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1); }
</style>`
  },
  {
    id: 'anim-text-reveal',
    title: 'Text Blur Reveal',
    category: 'animation',
    tags: ['animation', 'text', 'reveal', 'blur'],
    desc: 'Text animation revealing words smoothly from blur to clear resolution.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .txt { font-size: 20px; font-weight: 800; filter: blur(8px); opacity: 0; animation: reveal 1.5s forwards; }
      @keyframes reveal { to { filter: blur(0px); opacity: 1; } }
      @media(prefers-reduced-motion: reduce) { .txt { animation: none !important; filter: none !important; opacity: 1 !important; } }
    </style>
    <div class="txt">AURA V4 Platform</div>`,
    code: `<div class="reveal-text-showcase">AURA V4 Platform</div>

<style>
@media (prefers-reduced-motion: reduce) {
  .reveal-text-showcase { animation: none !important; filter: none !important; opacity: 1 !important; }
}
.reveal-text-showcase { font-size: 42px; font-weight: 900; color: #fff; letter-spacing: -0.01em; filter: blur(12px); opacity: 0; animation: textBlurReveal 1.6s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
@keyframes textBlurReveal {
  to { filter: blur(0px); opacity: 1; }
}
</style>`
  },
  {
    id: 'anim-skeleton',
    title: 'Skeleton Loading',
    category: 'animation',
    tags: ['animation', 'skeleton', 'loading', 'pulse'],
    desc: 'Pulsating layout skeletons mapping content before page load elements render.',
    featured: false,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .box { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 14px; width: 160px; display: flex; flex-direction: column; gap: 8px; }
      .ske { height: 10px; background: rgba(255,255,255,0.04); border-radius: 4px; animation: pulse 1.5s infinite ease-in-out; }
      @keyframes pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 0.3; } }
      @media(prefers-reduced-motion: reduce) { .ske { animation: none !important; } }
    </style>
    <div class="box">
      <div class="ske" style="width: 40%; height: 14px; background: #6C63FF;"></div>
      <div class="ske" style="width: 80%;"></div>
      <div class="ske" style="width: 60%;"></div>
    </div>`,
    code: `<div class="skeleton-mockup-card">
  <div class="skeleton-element avatar-ske"></div>
  <div class="skeleton-lines">
    <div class="skeleton-element header-ske"></div>
    <div class="skeleton-element paragraph-ske"></div>
    <div class="skeleton-element paragraph-ske-short"></div>
  </div>
</div>

<style>
@media(prefers-reduced-motion: reduce) {
  .skeleton-element { animation: none !important; }
}
.skeleton-mockup-card { background: #0b1220; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 24px; max-width: 300px; display: flex; gap: 16px; align-items: flex-start; }
.skeleton-element { background: rgba(255,255,255,0.04); border-radius: 4px; animation: skeletonPulse 1.5s infinite ease-in-out; }
.avatar-ske { width: 44px; height: 44px; border-radius: 50%; flex-shrink: 0; background: rgba(108, 99, 255, 0.15); }
.skeleton-lines { flex: 1; display: flex; flex-direction: column; gap: 8px; }
.header-ske { height: 16px; width: 60%; }
.paragraph-ske { height: 11px; width: 100%; }
.paragraph-ske-short { height: 11px; width: 75%; }
@keyframes skeletonPulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.25; }
}
</style>`
  },
  {
    id: 'anim-gradient-border',
    title: 'Gradient Border',
    category: 'animation',
    tags: ['animation', 'border', 'gradient', 'mesh'],
    desc: 'Container card wrapped in an animated rotating gradient glow frame border.',
    featured: true,
    isNew: true,
    preview: `<style>
      body { margin: 0; font-family: Inter, sans-serif; background: #050816; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
      .border-box { position: relative; width: 150px; height: 70px; border-radius: 10px; overflow: hidden; padding: 2px; }
      .border-box::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: conic-gradient(#6C63FF, #00D4FF, #8B5CF6, #6C63FF); animation: rot 4s linear infinite; z-index: 1; }
      .inner { position: relative; width: 100%; height: 100%; background: #0b1220; border-radius: 8px; z-index: 2; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; }
      @keyframes rot { to { transform: rotate(360deg); } }
      @media(prefers-reduced-motion: reduce) { .border-box::before { animation: none !important; } }
    </style>
    <div class="border-box">
      <div class="inner">Rotating Border</div>
    </div>`,
    code: `<div class="rotating-gradient-border-card">
  <div class="card-inner-display">
    <h3>Active Borders</h3>
    <p>Conic gradient frames compiled dynamically.</p>
  </div>
</div>

<style>
@media(prefers-reduced-motion: reduce) {
  .rotating-gradient-border-card::before { animation: none !important; }
}
.rotating-gradient-border-card { position: relative; width: 100%; max-width: 320px; border-radius: 16px; overflow: hidden; padding: 2px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
.rotating-gradient-border-card::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: conic-gradient(#6C63FF, #00D4FF, #8B5CF6, #6C63FF); animation: rotateBorderGradient 6s linear infinite; z-index: 1; }
.card-inner-display { position: relative; width: 100%; background: #0b1220; border-radius: 14px; z-index: 2; padding: 32px; box-sizing: border-box; text-align: left; }
.card-inner-display h3 { font-size: 18px; font-weight: 700; margin: 0 0 6px 0; color: #fff; }
.card-inner-display p { font-size: 13px; color: #94A3B8; margin: 0; }
@keyframes rotateBorderGradient {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>`
  }
];

if (typeof COMPONENTS !== 'undefined') {
  COMPONENTS.push(...V4_COMPONENTS);
}
