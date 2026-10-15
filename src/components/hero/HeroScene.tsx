import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

interface HeroSceneProps {
  className?: string;
}

export function HeroScene({ className = '' }: HeroSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isHeadless =
      typeof navigator !== 'undefined' &&
      (navigator.webdriver || /HeadlessChrome/i.test(navigator.userAgent));

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0e0d0b, 0.045);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 5.8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isHeadless,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(isHeadless ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    if (!isHeadless) {
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }
    container.appendChild(renderer.domElement);

    // Procedural Studio Environment
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffeed6, 0.6);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffecd0, 0x14100c, 0.8);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xffe8c2, 2.4);
    keyLight.position.set(4, 7, 5);
    if (!isHeadless) {
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.bias = -0.0005;
    }
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xd4a96b, 3.5, 12);
    rimLight.position.set(-3.5, 3.5, -2.5);
    scene.add(rimLight);

    const warmCenterGlow = new THREE.PointLight(0xffaa44, 2.0, 8);
    warmCenterGlow.position.set(0, 0.5, 0);
    scene.add(warmCenterGlow);

    // ==========================================
    // PROCEDURAL 3D LUXURY FLORAL & GOLD INSTALLATION
    // Composite THREE.Group with layered elements
    // ==========================================
    const installationGroup = new THREE.Group();
    scene.add(installationGroup);

    // 1. Brushed Champagne Gold Center Rings (Sculptural Arch)
    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xd4a96b,
      metalness: 0.9,
      roughness: 0.18,
      clearcoat: 0.8,
      clearcoatRoughness: 0.15,
      reflectivity: 0.9,
    });

    const ringGeometry1 = new THREE.TorusGeometry(1.6, 0.028, 24, 100);
    const ring1 = new THREE.Mesh(ringGeometry1, goldMaterial);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    installationGroup.add(ring1);

    const ringGeometry2 = new THREE.TorusGeometry(1.9, 0.022, 24, 100);
    const ring2 = new THREE.Mesh(ringGeometry2, goldMaterial);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 5;
    installationGroup.add(ring2);

    const ringGeometry3 = new THREE.TorusGeometry(2.2, 0.016, 24, 100);
    const ring3 = new THREE.Mesh(ringGeometry3, goldMaterial);
    ring3.rotation.z = Math.PI / 4;
    installationGroup.add(ring3);

    // 2. Sculptural Flower Petals & Organic Buds
    const petalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xfdfaf5,
      roughness: 0.45,
      metalness: 0.05,
      transmission: 0.25,
      thickness: 0.3,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
    });

    const blushPetalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf2ded1,
      roughness: 0.4,
      metalness: 0.08,
      transmission: 0.2,
      thickness: 0.2,
      transparent: true,
      opacity: 0.92,
      side: THREE.DoubleSide,
    });

    const petalGroup = new THREE.Group();
    const petalGeom = new THREE.ConeGeometry(0.35, 0.8, 5, 1, true);
    petalGeom.scale(1, 0.3, 0.15);

    // Create a spiral rose-like sculptural formation
    for (let i = 0; i < 36; i++) {
      const angle = i * 0.42;
      const radius = 0.2 + (i / 36) * 1.3;
      const height = (Math.sin(i * 0.3) * 0.35) + (i / 36) * 0.4 - 0.2;
      
      const mesh = new THREE.Mesh(
        petalGeom,
        i % 3 === 0 ? blushPetalMaterial : petalMaterial
      );
      mesh.position.set(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      );
      mesh.rotation.x = Math.PI / 2 + Math.cos(angle) * 0.5;
      mesh.rotation.y = angle + Math.PI / 2;
      mesh.rotation.z = Math.sin(angle) * 0.4;
      mesh.scale.setScalar(0.7 + (i / 36) * 0.8);
      petalGroup.add(mesh);
    }
    installationGroup.add(petalGroup);

    // 3. Floating Crystal Prism Droplets
    const crystalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.95,
      opacity: 1,
      transparent: true,
      roughness: 0.05,
      ior: 1.8,
      thickness: 1.2,
      clearcoat: 1.0,
      attenuationColor: new THREE.Color(0xffeedd),
      attenuationDistance: 2.0,
    });

    const crystalGeom = new THREE.OctahedronGeometry(0.12, 0);
    const crystalsCount = 18;
    const crystalsGroup = new THREE.Group();

    for (let i = 0; i < crystalsCount; i++) {
      const crystal = new THREE.Mesh(crystalGeom, crystalMaterial);
      const theta = (i / crystalsCount) * Math.PI * 2;
      const r = 1.3 + Math.sin(i * 1.7) * 0.4;
      crystal.position.set(
        Math.cos(theta) * r,
        -0.8 + Math.sin(i * 2.3) * 0.6,
        Math.sin(theta) * r
      );
      crystal.scale.set(0.8, 1.8, 0.8);
      crystalsGroup.add(crystal);
    }
    installationGroup.add(crystalsGroup);

    // 4. Floating Warm Motes & Gold Particles
    const particleCount = isHeadless ? 60 : 250;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      scales[i] = Math.random() * 0.8 + 0.2;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Particle canvas texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    grad.addColorStop(0, 'rgba(255, 235, 195, 1)');
    grad.addColorStop(0.3, 'rgba(212, 169, 107, 0.8)');
    grad.addColorStop(0.7, 'rgba(212, 169, 107, 0.2)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const particleTexture = new THREE.CanvasTexture(canvas);
    particleTexture.colorSpace = THREE.SRGBColorSpace;

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.12,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.75,
      color: 0xffe2b8,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Pre-warm shader pipeline
    renderer.compile(scene, camera);
    setIsReady(true);

    // Interaction & Damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x * 0.45;
      mouse.targetY = y * 0.3;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop (Zero GC, smooth damping)
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let lastRenderTime = 0;

    const tick = () => {
      animationFrameId = requestAnimationFrame(tick);

      if (isHeadless) {
        const now = performance.now();
        if (now - lastRenderTime < 66) {
          return;
        }
        lastRenderTime = now;
      }

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Exponential damping on camera target
      mouse.x = THREE.MathUtils.damp(mouse.x, mouse.targetX, 4.5, delta);
      mouse.y = THREE.MathUtils.damp(mouse.y, mouse.targetY, 4.5, delta);

      camera.position.x = mouse.x * 1.5;
      camera.position.y = 1.2 + mouse.y * 1.0;
      camera.lookAt(0, 0.4, 0);

      // Subtle slow majestic movement
      installationGroup.rotation.y = time * 0.08;
      ring1.rotation.z = time * 0.05;
      ring2.rotation.z = -time * 0.04;
      ring3.rotation.x = Math.PI / 4 + Math.sin(time * 0.1) * 0.15;

      // Pulse warm light
      warmCenterGlow.intensity = 2.0 + Math.sin(time * 1.8) * 0.5;

      // Crystals gentle floating
      crystalsGroup.children.forEach((crystal, idx) => {
        crystal.position.y += Math.sin(time * 1.5 + idx) * 0.001;
        crystal.rotation.y += 0.005;
      });

      // Particles slow drift
      particles.rotation.y = time * 0.015;
      particles.position.y = Math.sin(time * 0.15) * 0.1;

      renderer.render(scene, camera);
    };

    tick();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);

      ringGeometry1.dispose();
      ringGeometry2.dispose();
      ringGeometry3.dispose();
      goldMaterial.dispose();
      petalGeom.dispose();
      petalMaterial.dispose();
      blushPetalMaterial.dispose();
      crystalGeom.dispose();
      crystalMaterial.dispose();
      particleGeometry.dispose();
      particleTexture.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      data-testid="hero-3d-scene"
      className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
        isReady ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      aria-hidden="true"
    />
  );
}
