/**
 * AURA UI v5.0 — Premium 3D Presentation Engine
 * format-scene.js
 * 
 * Manages the interactive 3D showcase using Three.js.
 * Fades in WebGL canvas when loaded; falls back to CSS 3D transforms on failure.
 * Reacts to Flow, Orbit, and Build modes with distinct 3D visual scenes.
 */

(function () {
  'use strict';

  const visualFallback = document.getElementById('formatVisual');
  const canvas = document.getElementById('formatScene');
  const shell = document.querySelector('.format-scene-shell');
  const modeButtons = document.querySelectorAll('[data-format-mode]');

  if (!visualFallback || !canvas || !shell) return;

  // Global variables
  let THREE = null;
  let renderer, scene, camera;
  let mainGroup; // Root container for tilting
  let flowGroup, orbitGroup, buildGroup;
  let particles;
  let ambientLight, orangeLight, cyanLight;
  
  // Theme and Mode State
  let targetMode = 'flow';
  let isWebGLActive = false;

  // Spring physical systems
  const springs = {
    tiltX:       { current: 0, target: 0, vel: 0, stiffness: 0.08, damping: 0.65 },
    tiltY:       { current: 0, target: 0, vel: 0, stiffness: 0.08, damping: 0.65 },
    flowWeight:  { current: 1, target: 1, vel: 0, stiffness: 0.06, damping: 0.7 },
    orbitWeight: { current: 0, target: 0, vel: 0, stiffness: 0.06, damping: 0.7 },
    buildWeight: { current: 0, target: 0, vel: 0, stiffness: 0.06, damping: 0.7 },
    themeWeight: { current: 0, target: 0, vel: 0, stiffness: 0.04, damping: 0.8 } // 0 = dark, 1 = light
  };

  // UI Interactive Raycasting
  const raycaster = new THREE ? new THREE.Raycaster() : null;
  const mouse = new THREE ? new THREE.Vector2() : null;
  let hoveredObject = null;

  // UI Material Textures (drawn programmatically)
  let panelTextures = { dark: {}, light: {} };
  let glassMaterialDark, glassMaterialLight;
  let laserLineMaterial;

  // 1. Kickstart sequence
  initCSSInteraction();
  loadThreeJS(() => {
    initWebGL();
  });

  // Dynamic loader for Three.js
  function loadThreeJS(onSuccess) {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.async = true;
    script.onload = () => {
      THREE = window.THREE;
      if (THREE && isWebGLSupported()) {
        onSuccess();
      } else {
        console.warn("WebGL is not supported or Three.js loading failed. Retaining CSS fallback.");
      }
    };
    script.onerror = () => {
      console.warn("Failed to load Three.js from CDN. Retaining CSS fallback.");
    };
    document.head.appendChild(script);
  }

  function isWebGLSupported() {
    try {
      const c = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  // 2. Original CSS Fallback Tilt interactions
  function initCSSInteraction() {
    modeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const mode = button.dataset.formatMode || 'flow';
        targetMode = mode;
        
        // CSS Mode Toggle
        visualFallback.dataset.mode = mode;
        modeButtons.forEach(item => item.classList.toggle('active', item === button));

        // Sync with WebGL if active
        updateWebGLMode(mode);
      });
    });

    shell.addEventListener('pointermove', event => {
      if (isWebGLActive) {
        // Feed coordinate targets to WebGL raycaster and tilt
        const rect = shell.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        if (mouse) {
          mouse.x = x;
          mouse.y = y;
        }

        springs.tiltX.target = -y * 0.12; // tilt pitch
        springs.tiltY.target = x * 0.16;  // tilt yaw
      } else {
        // Fallback CSS tilt
        const rect = shell.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
        visualFallback.style.setProperty('--tilt-x', `${-y * 7}deg`);
        visualFallback.style.setProperty('--tilt-y', `${x * 10}deg`);
      }
    }, { passive: true });

    shell.addEventListener('pointerleave', () => {
      if (isWebGLActive) {
        springs.tiltX.target = 0;
        springs.tiltY.target = 0;
        if (mouse) {
          mouse.x = -9999;
          mouse.y = -9999;
        }
      } else {
        visualFallback.style.setProperty('--tilt-x', '0deg');
        visualFallback.style.setProperty('--tilt-y', '0deg');
      }
    }, { passive: true });
  }

  // Helper: Hook spring simulation updates
  function updateSpring(s) {
    const force = (s.target - s.current) * s.stiffness;
    s.vel += force;
    s.vel *= s.damping;
    s.current += s.vel;
  }

  // 3. WebGL Engine Initialization
  function initWebGL() {
    // Setup Renderer
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(shell.clientWidth, shell.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // Setup Scene
    scene = new THREE.Scene();

    // Setup Camera
    camera = new THREE.PerspectiveCamera(42, shell.clientWidth / shell.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 8);

    // Main Tilting Group
    mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Initial Theme value
    const initialTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    springs.themeWeight.current = initialTheme === 'light' ? 1 : 0;
    springs.themeWeight.target = initialTheme === 'light' ? 1 : 0;

    // Build resources
    buildCanvasTextures();
    buildMaterials();
    buildLights();
    buildEnvironmentParticles();

    // Build the 3 scene groups
    buildFlowScene();
    buildOrbitScene();
    buildBuildScene();

    // Trigger initial mode state
    updateWebGLMode(targetMode);

    // Setup Window Resize
    window.addEventListener('resize', onResize, { passive: true });

    // Setup Theme Switch Observer
    setupThemeObserver();

    // Setup Raycasting
    if (!mouse) {
      window.mouse = new THREE.Vector2(-9999, -9999);
    }

    // Set WebGL as active, start tick, and trigger CSS fade
    isWebGLActive = true;
    shell.classList.add('webgl-active');
    
    requestAnimationFrame(tick);
  }

  function onResize() {
    const w = shell.clientWidth;
    const h = shell.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  // Theme Sync Observer
  function setupThemeObserver() {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'data-theme') {
          const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
          springs.themeWeight.target = currentTheme === 'light' ? 1 : 0;
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
  }

  // 4. UI Textures & Materials Generation
  function buildCanvasTextures() {
    const drawUI = (type, isDark) => {
      const cvs = document.createElement('canvas');
      cvs.width = 512;
      cvs.height = 384;
      const ctx = cvs.getContext('2d');

      ctx.clearRect(0, 0, cvs.width, cvs.height);

      // Styles
      const textColor = isDark ? '#1e293b' : '#0f172a'; // dark-ish text for high contrast on light panels
      const textMuted = isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(15, 23, 42, 0.4)';
      const accent = '#00a1ec';
      const secondary = '#ff9900';

      if (type === 'front') {
        // Draw Header
        ctx.fillStyle = secondary;
        ctx.beginPath();
        ctx.arc(60, 60, 26, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = textColor;
        ctx.fillRect(110, 44, 240, 16);
        ctx.fillStyle = textMuted;
        ctx.fillRect(110, 68, 140, 10);

        // UI Lines
        ctx.fillStyle = textMuted;
        ctx.fillRect(40, 130, 432, 8);
        ctx.fillRect(40, 154, 340, 8);
        ctx.fillRect(40, 178, 200, 8);

        // Action Pill
        ctx.fillStyle = accent;
        ctx.beginPath();
        drawRoundRect(ctx, 40, 230, 180, 44, 10);
        ctx.fill();

        ctx.fillStyle = 'rgba(0, 161, 236, 0.12)';
        ctx.strokeStyle = accent;
        ctx.lineWidth = 2;
        ctx.beginPath();
        drawRoundRect(ctx, 240, 230, 180, 44, 10);
        ctx.fill();
        ctx.stroke();

      } else if (type === 'mid') {
        // Chart mock
        ctx.fillStyle = textColor;
        ctx.fillRect(40, 40, 160, 14);

        // Bar graphs
        const heights = [90, 160, 120, 200, 140];
        const colors = [accent, secondary, accent, secondary, accent];
        for(let i=0; i<5; i++) {
          ctx.fillStyle = colors[i];
          ctx.beginPath();
          drawRoundRect(ctx, 40 + i*86, 310 - heights[i], 56, heights[i], 6);
          ctx.fill();
        }
      } else {
        // Grid cards
        ctx.fillStyle = textColor;
        ctx.fillRect(40, 40, 200, 14);

        ctx.strokeStyle = textMuted;
        ctx.lineWidth = 1.5;
        for(let row=0; row<2; row++) {
          for(let col=0; col<3; col++) {
            const x = 40 + col*150;
            const y = 90 + row*130;
            ctx.strokeRect(x, y, 132, 106);
            ctx.fillStyle = accent;
            ctx.fillRect(x + 12, y + 15, 40, 6);
            ctx.fillStyle = textMuted;
            ctx.fillRect(x + 12, y + 35, 108, 5);
            ctx.fillRect(x + 12, y + 48, 70, 5);
          }
        }
      }

      return new THREE.CanvasTexture(cvs);
    };

    panelTextures.dark = {
      front: drawUI('front', true),
      mid:   drawUI('mid', true),
      back:  drawUI('back', true)
    };

    panelTextures.light = {
      front: drawUI('front', false),
      mid:   drawUI('mid', false),
      back:  drawUI('back', false)
    };
  }

  function drawRoundRect(ctx, x, y, w, h, r) {
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
  }

  function buildMaterials() {
    // Premium frosted glass materials with physical parameters
    glassMaterialDark = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.16,
      metalness: 0.05,
      transmission: 0.65, // transparency
      ior: 1.45,
      thickness: 1.2,
      specularIntensity: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.15,
      transparent: true,
      opacity: 0.94
    });

    glassMaterialLight = new THREE.MeshPhysicalMaterial({
      color: 0xeff6ff,
      roughness: 0.22,
      metalness: 0.02,
      transmission: 0.82,
      ior: 1.35,
      thickness: 0.8,
      specularIntensity: 0.5,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      transparent: true,
      opacity: 0.96
    });

    laserLineMaterial = new THREE.LineBasicMaterial({
      color: 0x00a1ec,
      transparent: true,
      opacity: 0.6
    });
  }

  // Lights setup
  function buildLights() {
    ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    // Accent lighting (Cyan & Orange)
    orangeLight = new THREE.PointLight(0xff9900, 1.8, 30);
    orangeLight.position.set(-4, 3, 4);
    scene.add(orangeLight);

    cyanLight = new THREE.PointLight(0x00a1ec, 2.2, 30);
    cyanLight.position.set(4, -3, 4);
    scene.add(cyanLight);
  }

  // Background environment floating particles
  function buildEnvironmentParticles() {
    const count = 75;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      speeds[i] = 0.004 + Math.random() * 0.008;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Glowing particle textures
    const material = new THREE.PointsMaterial({
      color: 0xff9900,
      size: 0.07,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });

    particles = new THREE.Points(geometry, material);
    particles.userData = { speeds: speeds };
    scene.add(particles);
  }

  // Helper to construct a glass plate mesh with custom layout drawing
  function createUIPanelMesh(type) {
    const geometry = new THREE.BoxGeometry(2.3, 1.6, 0.04);
    
    // Front face has UI Texture map; others are default frosted glass
    const frontMap = panelTextures.dark[type];
    const frontMat = glassMaterialDark.clone();
    frontMat.map = frontMap;
    frontMat.roughness = 0.24; // Less roughness for texture visibility

    const sideMat = glassMaterialDark;

    const materials = [
      sideMat, // right
      sideMat, // left
      sideMat, // top
      sideMat, // bottom
      frontMat, // front
      sideMat  // back
    ];

    const mesh = new THREE.Mesh(geometry, materials);
    mesh.userData = { 
      type: type, 
      frontMaterial: frontMat, 
      sideMaterial: sideMat 
    };
    return mesh;
  }

  // 5. Build Flow Scene (Translucent Stack + Orb + Cube)
  function buildFlowScene() {
    flowGroup = new THREE.Group();
    mainGroup.add(flowGroup);

    // Stack panels
    const backPanel = createUIPanelMesh('back');
    backPanel.position.set(-0.35, 0.4, -0.6);
    flowGroup.add(backPanel);

    const midPanel = createUIPanelMesh('mid');
    midPanel.position.set(0, 0, 0);
    flowGroup.add(midPanel);

    const frontPanel = createUIPanelMesh('front');
    frontPanel.position.set(0.35, -0.4, 0.6);
    flowGroup.add(frontPanel);

    // Glowing central AURA Orb
    const orbGeom = new THREE.SphereGeometry(0.32, 32, 32);
    const orbMat = new THREE.MeshStandardMaterial({
      color: 0xff5500,
      emissive: 0xff9900,
      emissiveIntensity: 1.2,
      roughness: 0.1,
      metalness: 0.1
    });
    const orb = new THREE.Mesh(orbGeom, orbMat);
    orb.position.set(-0.6, -0.2, 0.7);
    orb.userData = { isInteractive: true, role: 'orb' };
    flowGroup.add(orb);

    // Wireframe Glass Cube
    const cubeGeom = new THREE.BoxGeometry(0.55, 0.55, 0.55);
    const cubeMat = new THREE.MeshPhysicalMaterial({
      color: 0x00a1ec,
      transmission: 0.9,
      ior: 1.5,
      roughness: 0.1,
      wireframe: true,
      wireframeLinewidth: 2
    });
    const wireCube = new THREE.Mesh(cubeGeom, cubeMat);
    wireCube.position.set(0.8, 0.3, 0.7);
    wireCube.userData = { isInteractive: true, role: 'cube' };
    flowGroup.add(wireCube);

    flowGroup.userData = {
      panels: [backPanel, midPanel, frontPanel],
      orb: orb,
      cube: wireCube
    };
  }

  // 6. Build Orbit Scene (Sphere Core + Conc. tracks + satellites)
  function buildOrbitScene() {
    orbitGroup = new THREE.Group();
    orbitGroup.visible = false;
    mainGroup.add(orbitGroup);

    // Central Engine Core (pulsing neon sphere)
    const coreGeom = new THREE.SphereGeometry(0.5, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xff3300,
      emissive: 0xff7700,
      emissiveIntensity: 1.8,
      roughness: 0.2
    });
    const core = new THREE.Mesh(coreGeom, coreMat);
    core.userData = { isInteractive: true, role: 'core' };
    orbitGroup.add(core);

    // Orbit Tracks
    const ringMat = new THREE.LineBasicMaterial({ color: 0x00a1ec, transparent: true, opacity: 0.25 });
    
    const track1 = createOrbitLine(1.3, ringMat);
    track1.rotation.x = Math.PI / 3;
    orbitGroup.add(track1);

    const track2 = createOrbitLine(2.1, ringMat);
    track2.rotation.x = Math.PI / 2.6;
    track2.rotation.y = Math.PI / 6;
    orbitGroup.add(track2);

    // Satellite Nodes (Small glowing capsules)
    const satGroup = new THREE.Group();
    orbitGroup.add(satGroup);

    const satCount = 4;
    const satellites = [];
    const lasers = [];

    const colors = [0xff9900, 0x00a1ec, 0xa78bfa, 0x22c55e];

    for (let i = 0; i < satCount; i++) {
      const g = new THREE.Group();
      
      const geom = new THREE.CylinderGeometry(0.09, 0.09, 0.26, 16);
      geom.rotateX(Math.PI / 2);
      const mat = new THREE.MeshStandardMaterial({
        color: colors[i],
        emissive: colors[i],
        emissiveIntensity: 1.4,
        roughness: 0.1
      });
      const node = new THREE.Mesh(geom, mat);
      g.add(node);

      // Spherical ends to look like a capsule
      const endGeom = new THREE.SphereGeometry(0.09, 16, 16);
      const end1 = new THREE.Mesh(endGeom, mat);
      end1.position.z = 0.13;
      const end2 = new THREE.Mesh(endGeom, mat);
      end2.position.z = -0.13;
      g.add(end1);
      g.add(end2);

      g.userData = {
        angle: (i * (Math.PI * 2)) / satCount,
        speed: 0.015 + (i * 0.005),
        radius: i < 2 ? 1.3 : 2.1,
        trackRotationX: i < 2 ? Math.PI / 3 : Math.PI / 2.6,
        trackRotationY: i < 2 ? 0 : Math.PI / 6,
        isInteractive: true,
        role: 'satellite'
      };

      satGroup.add(g);
      satellites.push(g);

      // Laser lines connecting to central core
      const laserGeom = new THREE.BufferGeometry();
      const points = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)];
      laserGeom.setFromPoints(points);
      const laserMat = new THREE.LineBasicMaterial({
        color: colors[i],
        transparent: true,
        opacity: 0.6
      });
      const laser = new THREE.Line(laserGeom, laserMat);
      orbitGroup.add(laser);
      lasers.push(laser);
    }

    orbitGroup.userData = {
      core: core,
      satellites: satellites,
      lasers: lasers
    };
  }

  function createOrbitLine(radius, material) {
    const geom = new THREE.BufferGeometry();
    const points = [];
    const segments = 120;
    for(let i=0; i<=segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
    }
    geom.setFromPoints(points);
    return new THREE.Line(geom, material);
  }

  // 7. Build Build Scene (Exploded blueprint Dashboard + wire grid)
  function buildBuildScene() {
    buildGroup = new THREE.Group();
    buildGroup.visible = false;
    mainGroup.add(buildGroup);

    // Blueprint grid floor
    const gridHelper = new THREE.GridHelper(5, 12, 0xff9900, 0x00a1ec);
    gridHelper.position.y = -1.6;
    gridHelper.rotation.x = Math.PI / 16;
    buildGroup.add(gridHelper);

    // Glass layers
    const layer1 = createUIPanelMesh('back');
    const layer2 = createUIPanelMesh('mid');
    const layer3 = createUIPanelMesh('front');

    buildGroup.add(layer1);
    buildGroup.add(layer2);
    buildGroup.add(layer3);

    // Pillars / coordinate projections
    const pillarGeom = new THREE.BufferGeometry();
    const pPoints = [];
    for(let i=0; i<4; i++) {
      pPoints.push(new THREE.Vector3(0, 0, 0));
      pPoints.push(new THREE.Vector3(0, 0, 0));
    }
    pillarGeom.setFromPoints(pPoints);
    const pillarMat = new THREE.LineDashedMaterial({
      color: 0x00a1ec,
      dashSize: 0.08,
      gapSize: 0.08,
      transparent: true,
      opacity: 0.4
    });
    const pillars = new THREE.LineSegments(pillarGeom, pillarMat);
    buildGroup.add(pillars);

    buildGroup.userData = {
      layers: [layer1, layer2, layer3],
      pillars: pillars,
      grid: gridHelper
    };
  }

  // Mode Transition Handler
  function updateWebGLMode(mode) {
    targetMode = mode;
    
    // Set spring weight targets
    springs.flowWeight.target  = mode === 'flow' ? 1 : 0;
    springs.orbitWeight.target = mode === 'orbit' ? 1 : 0;
    springs.buildWeight.target = mode === 'build' ? 1 : 0;
  }

  // 8. Dynamic Material & Lights morphing based on active theme
  function updateDynamicThemeColors(weight) {
    // Lerp colors between Dark (0) and Light (1)
    const orangeDark  = new THREE.Color(0xff9900);
    const orangeLight = new THREE.Color(0xff4400);
    orangeLight.lerpColors(orangeDark, orangeLight, weight);
    orangeLight.color = orangeLight;

    const cyanDark  = new THREE.Color(0x00a1ec);
    const cyanLight = new THREE.Color(0x1d4ed8); // Rich indigo fill
    cyanLight.lerpColors(cyanDark, cyanLight, weight);
    cyanLight.color = cyanLight;

    orangeLight.color = orangeLight;
    cyanLight.color = cyanLight;

    // Soft lights
    ambientLight.intensity = 0.4 + weight * 0.35; // Brighter light theme

    // Blend glass panel base textures
    const flowPanels = flowGroup.userData.panels;
    const buildLayers = buildGroup.userData.layers;

    const blendPanels = (panels) => {
      panels.forEach(p => {
        const mat = p.userData.frontMaterial;
        const textures = weight > 0.5 ? panelTextures.light : panelTextures.dark;
        mat.map = textures[p.userData.type];
        
        // Morph transmission properties
        mat.color.lerpColors(new THREE.Color(0xffffff), new THREE.Color(0xf1f5f9), weight);
        mat.transmission = 0.65 + weight * 0.18;
        mat.roughness = 0.16 + weight * 0.08;
      });
    };

    blendPanels(flowPanels);
    blendPanels(buildLayers);

    // Particle color lerp
    if (particles) {
      particles.material.color.lerpColors(new THREE.Color(0xff9900), new THREE.Color(0x00a1ec), weight);
    }
  }

  // 9. Main Physics & Rendering Animation Loop
  function tick(timestamp) {
    // Resolve all spring properties
    updateSpring(springs.tiltX);
    updateSpring(springs.tiltY);
    updateSpring(springs.flowWeight);
    updateSpring(springs.orbitWeight);
    updateSpring(springs.buildWeight);
    updateSpring(springs.themeWeight);

    // Theme values interpolation
    updateDynamicThemeColors(springs.themeWeight.current);

    // Tilt camera/scene
    mainGroup.rotation.x = springs.tiltX.current;
    mainGroup.rotation.y = springs.tiltY.current;

    // Handle background particles flow
    if (particles) {
      const positions = particles.geometry.attributes.position.array;
      const speeds = particles.userData.speeds;
      for (let i = 0; i < speeds.length; i++) {
        positions[i * 3 + 1] += speeds[i]; // rise upward
        positions[i * 3]     += Math.sin(timestamp * 0.001 + i) * 0.0015; // horizontal sway
        
        if (positions[i * 3 + 1] > 3) {
          positions[i * 3 + 1] = -3;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;
    }

    // Apply interactive mode weights (cross-fades and scale animations)
    const fW = springs.flowWeight.current;
    const oW = springs.orbitWeight.current;
    const bW = springs.buildWeight.current;

    // ─── Flow Animation Group
    if (fW > 0.005) {
      flowGroup.visible = true;
      flowGroup.scale.setScalar(0.6 + fW * 0.4);
      setGroupMaterialOpacity(flowGroup, fW);

      // Animate carousel panels float
      const flowPanels = flowGroup.userData.panels;
      const time = timestamp * 0.001;

      flowPanels[0].position.y = 0.4 + Math.sin(time + 0.8) * 0.06;
      flowPanels[1].position.y = Math.sin(time) * 0.05;
      flowPanels[2].position.y = -0.4 + Math.sin(time - 0.8) * 0.06;

      // Animate core shapes
      flowGroup.userData.orb.position.y = -0.2 + Math.cos(time * 1.4) * 0.08;
      flowGroup.userData.cube.rotation.x += 0.008;
      flowGroup.userData.cube.rotation.y += 0.012;
    } else {
      flowGroup.visible = false;
    }

    // ─── Orbit Animation Group
    if (oW > 0.005) {
      orbitGroup.visible = true;
      orbitGroup.scale.setScalar(0.6 + oW * 0.4);
      setGroupMaterialOpacity(orbitGroup, oW);

      const sats = orbitGroup.userData.satellites;
      const lasers = orbitGroup.userData.lasers;
      const core = orbitGroup.userData.core;
      
      const time = timestamp * 0.001;
      core.scale.setScalar(1 + Math.sin(time * 4) * 0.04);

      sats.forEach((s, idx) => {
        const u = s.userData;
        u.angle += u.speed;
        
        // Compute position on orbit track
        const x = Math.cos(u.angle) * u.radius;
        const y = Math.sin(u.angle) * u.radius;
        
        s.position.set(x, y, 0);

        // Apply track tilting to satellites
        s.rotation.set(0, 0, 0);
        s.rotateY(u.trackRotationY);
        s.rotateX(u.trackRotationX);
        
        // Update laser positions
        const laserPoints = [
          new THREE.Vector3(0, 0, 0),
          s.position.clone().applyMatrix4(s.parent.matrixWorld).sub(orbitGroup.position)
        ];
        
        // Factor group rotation in lasers
        const laserGeom = lasers[idx].geometry;
        laserGeom.setFromPoints(laserPoints);
        lasers[idx].material.opacity = oW * 0.45;
      });
    } else {
      orbitGroup.visible = false;
    }

    // ─── Build Animation Group
    if (bW > 0.005) {
      buildGroup.visible = true;
      buildGroup.scale.setScalar(0.6 + bW * 0.4);
      setGroupMaterialOpacity(buildGroup, bW);

      const layers = buildGroup.userData.layers;
      const pillars = buildGroup.userData.pillars;

      // Exploded Y positions using spring logic (target height shifts)
      const explodedDist = 0.95 * bW;
      
      layers[0].position.set(0, explodedDist, -0.6 * bW); // Top card
      layers[1].position.set(0, 0, 0);                     // Mid card
      layers[2].position.set(0, -explodedDist, 0.6 * bW);  // Bottom card

      // Update dotted pillars
      const positions = pillars.geometry.attributes.position.array;
      const corners = [
        [-1.15, -0.8], // bottom-left
        [1.15, -0.8],  // bottom-right
        [1.15, 0.8],   // top-right
        [-1.15, 0.8]   // top-left
      ];

      let pIdx = 0;
      corners.forEach(corner => {
        // Line top to bottom card corner
        positions[pIdx++] = corner[0];
        positions[pIdx++] = explodedDist;
        positions[pIdx++] = -0.6 * bW;

        positions[pIdx++] = corner[0];
        positions[pIdx++] = -explodedDist;
        positions[pIdx++] = 0.6 * bW;
      });
      pillars.geometry.attributes.position.needsUpdate = true;
      pillars.computeLineDistances(); // for dashed line
      pillars.material.opacity = bW * 0.4;
    } else {
      buildGroup.visible = false;
    }

    // Solve Pointer raycaster hover collisions
    if (raycaster && mouse && mouse.x > -1000) {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(mainGroup.children, true);
      
      let foundHover = null;
      for (let i = 0; i < intersects.length; i++) {
        let obj = intersects[i].object;
        while (obj.parent && obj !== scene) {
          if (obj.userData.isInteractive) {
            foundHover = obj;
            break;
          }
          obj = obj.parent;
        }
        if (foundHover) break;
      }

      if (foundHover) {
        if (hoveredObject !== foundHover) {
          if (hoveredObject) resetHoverState(hoveredObject);
          hoveredObject = foundHover;
          triggerHoverState(hoveredObject);
        }
      } else {
        if (hoveredObject) {
          resetHoverState(hoveredObject);
          hoveredObject = null;
        }
      }
    }

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }

  // Interactive Hover dynamics
  function triggerHoverState(obj) {
    document.body.style.cursor = 'pointer';
    
    // Scale or illuminate target element
    if (obj.userData.role === 'satellite' || obj.userData.role === 'orb' || obj.userData.role === 'cube') {
      obj.scale.setScalar(1.22);
    } else if (obj.userData.role === 'core') {
      obj.scale.setScalar(1.15);
      obj.material.emissiveIntensity = 2.4;
    }
  }

  function resetHoverState(obj) {
    document.body.style.cursor = '';
    
    if (obj.userData.role === 'satellite' || obj.userData.role === 'orb' || obj.userData.role === 'cube') {
      obj.scale.setScalar(1.0);
    } else if (obj.userData.role === 'core') {
      obj.scale.setScalar(1.0);
      obj.material.emissiveIntensity = 1.8;
    }
  }

  // Helper: Fade material opacity across an entire Group
  function setGroupMaterialOpacity(group, opacity) {
    group.traverse(child => {
      if (child.isMesh && child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(mat => {
            mat.opacity = opacity;
            mat.transparent = true;
          });
        } else {
          child.material.opacity = opacity;
          child.material.transparent = true;
        }
      }
    });
  }

})();
