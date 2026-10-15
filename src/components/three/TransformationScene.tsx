import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { ChevronDown, ChevronUp, Sparkles, Layers, Wand2 } from 'lucide-react';

type StageId = 0 | 1 | 2;

interface StageInfo {
  id: StageId;
  name: string;
  subtitle: string;
  description: string;
  tag: string;
}

const STAGES: StageInfo[] = [
  {
    id: 0,
    name: '01. Inspiración & Estructura',
    subtitle: 'Planimetría espacial y zonificación',
    description:
      'Modelamos la volumetría del recinto, la acústica, los flujos de circulación y las líneas de visión para garantizar una experiencia armónica y segura.',
    tag: 'Fase Conceptual',
  },
  {
    id: 1,
    name: '02. Diseño & Ambientación',
    subtitle: 'Paleta botánica y curaduría material',
    description:
      'Incorporamos flores de estación, cortinajes vaporosos, cristalería biselada y mantelería fina seleccionada bajo una estricta armonía estética.',
    tag: 'Fase de Estilismo',
  },
  {
    id: 2,
    name: '03. Gala & Iluminación Final',
    subtitle: 'Atmósfera viva y momentos inolvidables',
    description:
      'La iluminación arquitectónica se enciende, las velas cobran vida y cada detalle técnico se sincroniza con el protocolo para emocionar a los asistentes.',
    tag: 'Ejecución en Vivo',
  },
];

export function TransformationScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState<StageId>(1);
  const [isControlsOpen, setIsControlsOpen] = useState(true);
  const targetStageRef = useRef<StageId>(1);

  // Keep targetStageRef in sync with activeStage
  useEffect(() => {
    targetStageRef.current = activeStage;
  }, [activeStage]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isHeadless =
      typeof navigator !== 'undefined' &&
      (navigator.webdriver || /HeadlessChrome/i.test(navigator.userAgent));

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 550;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0e0d0b, 0.05);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 2.5, 6.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isHeadless,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(isHeadless ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // Studio Environment
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // Lights
    const hemiLight = new THREE.HemisphereLight(0xffeed6, 0x1a1612, 0.7);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xffecd0, 2.0);
    keyLight.position.set(4, 8, 4);
    scene.add(keyLight);

    const stageWarmLight = new THREE.PointLight(0xff9933, 0, 10);
    stageWarmLight.position.set(0, 1.8, 0);
    scene.add(stageWarmLight);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Contact Ground Mirror / Shadow
    const groundGeom = new THREE.CircleGeometry(4, 48);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x12100e,
      roughness: 0.25,
      metalness: 0.8,
    });
    const ground = new THREE.Mesh(groundGeom, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.2;
    rootGroup.add(ground);

    // ==========================================
    // STAGE 0: BLUEPRINT & WIREFRAME ARCHITECTURE
    // ==========================================
    const stage0Group = new THREE.Group();
    rootGroup.add(stage0Group);

    // Floor grid
    const gridHelper = new THREE.GridHelper(6, 16, 0xd4a96b, 0x3d3732);
    gridHelper.position.y = -1.18;
    stage0Group.add(gridHelper);

    // Wireframe canopy arch
    const archCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2, -1.2, 0),
      new THREE.Vector3(-1.4, 1.2, 0),
      new THREE.Vector3(0, 2.1, 0),
      new THREE.Vector3(1.4, 1.2, 0),
      new THREE.Vector3(2, -1.2, 0),
    ]);
    const archTubeGeom = new THREE.TubeGeometry(archCurve, 32, 0.03, 8, false);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xd4a96b,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const archWire = new THREE.Mesh(archTubeGeom, wireMat);
    stage0Group.add(archWire);

    // 4 Coordinate marker pillars
    const pillarGeom = new THREE.BoxGeometry(0.04, 2.4, 0.04);
    [-1.8, 1.8].forEach((x) => {
      [-1.2, 1.2].forEach((z) => {
        const pillar = new THREE.Mesh(pillarGeom, wireMat);
        pillar.position.set(x, 0, z);
        stage0Group.add(pillar);
      });
    });

    // ==========================================
    // STAGE 1: DESIGN & STYLING (Decor, florals, fabrics)
    // ==========================================
    const stage1Group = new THREE.Group();
    rootGroup.add(stage1Group);

    // Banquet Table
    const tableGeom = new THREE.CylinderGeometry(1.4, 1.4, 0.08, 36);
    const tableMat = new THREE.MeshPhysicalMaterial({
      color: 0xfbf8f3,
      roughness: 0.35,
      metalness: 0.1,
      clearcoat: 0.4,
    });
    const table = new THREE.Mesh(tableGeom, tableMat);
    table.position.y = -0.3;
    stage1Group.add(table);

    // Table Base (Sculptural gold pedestal)
    const baseGeom = new THREE.CylinderGeometry(0.2, 0.45, 0.82, 24);
    const goldMat = new THREE.MeshPhysicalMaterial({
      color: 0xd4a96b,
      roughness: 0.2,
      metalness: 0.9,
    });
    const tableBase = new THREE.Mesh(baseGeom, goldMat);
    tableBase.position.y = -0.75;
    stage1Group.add(tableBase);

    // Floral Centerpiece (Tiered organic vases and blossoms)
    const centerpieceGroup = new THREE.Group();
    const vaseGeom = new THREE.CylinderGeometry(0.18, 0.12, 0.6, 24);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.9,
      roughness: 0.08,
      thickness: 0.5,
      transparent: true,
      opacity: 0.9,
    });
    const vase = new THREE.Mesh(vaseGeom, glassMat);
    vase.position.y = 0.05;
    centerpieceGroup.add(vase);

    // Floral spheres
    const floralMat = new THREE.MeshStandardMaterial({
      color: 0xf5eee6,
      roughness: 0.7,
    });
    for (let f = 0; f < 14; f++) {
      const fGeom = new THREE.DodecahedronGeometry(0.1 + Math.random() * 0.08, 0);
      const fl = new THREE.Mesh(fGeom, floralMat);
      const angle = (f / 14) * Math.PI * 2;
      fl.position.set(
        Math.cos(angle) * 0.25,
        0.35 + Math.sin(f * 2) * 0.15,
        Math.sin(angle) * 0.25
      );
      centerpieceGroup.add(fl);
    }
    stage1Group.add(centerpieceGroup);

    // ==========================================
    // STAGE 2: GALA & FINAL ILLUMINATION
    // ==========================================
    const stage2Group = new THREE.Group();
    rootGroup.add(stage2Group);

    // Hanging Crystal Chandelier
    const chandelierGroup = new THREE.Group();
    chandelierGroup.position.set(0, 1.8, 0);

    const chandelierRingGeom = new THREE.TorusGeometry(0.7, 0.02, 16, 60);
    const chandelierRing = new THREE.Mesh(chandelierRingGeom, goldMat);
    chandelierRing.rotation.x = Math.PI / 2;
    chandelierGroup.add(chandelierRing);

    // Crystal pendants hanging from ring
    const pendantGeom = new THREE.CylinderGeometry(0.015, 0.025, 0.35, 6);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.95,
      roughness: 0.05,
      thickness: 1.0,
      transparent: true,
    });

    for (let p = 0; p < 20; p++) {
      const angle = (p / 20) * Math.PI * 2;
      const pendant = new THREE.Mesh(pendantGeom, crystalMat);
      pendant.position.set(
        Math.cos(angle) * 0.7,
        -0.2 - Math.sin(p * 1.5) * 0.1,
        Math.sin(angle) * 0.7
      );
      chandelierGroup.add(pendant);
    }
    stage2Group.add(chandelierGroup);

    // Glowing Candle Flame Lights on Table
    const candlesGroup = new THREE.Group();
    const candleGeom = new THREE.CylinderGeometry(0.02, 0.02, 0.2, 12);
    const candleWaxMat = new THREE.MeshStandardMaterial({ color: 0xfffaf0 });
    const flameMat = new THREE.MeshBasicMaterial({ color: 0xffcc44 });

    for (let c = 0; c < 5; c++) {
      const angle = (c / 5) * Math.PI * 2 + 0.3;
      const wax = new THREE.Mesh(candleGeom, candleWaxMat);
      wax.position.set(Math.cos(angle) * 0.85, -0.16, Math.sin(angle) * 0.85);

      const flame = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.06, 8), flameMat);
      flame.position.set(wax.position.x, -0.03, wax.position.z);

      candlesGroup.add(wax);
      candlesGroup.add(flame);
    }
    stage2Group.add(candlesGroup);

    // Floating celebration motes for Stage 2
    const galaMotesGeom = new THREE.BufferGeometry();
    const galaMoteCount = isHeadless ? 40 : 120;
    const galaPos = new Float32Array(galaMoteCount * 3);
    for (let i = 0; i < galaMoteCount; i++) {
      galaPos[i * 3] = (Math.random() - 0.5) * 5;
      galaPos[i * 3 + 1] = Math.random() * 3 - 0.5;
      galaPos[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    galaMotesGeom.setAttribute('position', new THREE.BufferAttribute(galaPos, 3));
    const galaMotesMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0xffdf99,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const galaMotes = new THREE.Points(galaMotesGeom, galaMotesMat);
    stage2Group.add(galaMotes);

    // Pre-warm
    renderer.compile(scene, camera);

    // Dynamic Opacity / Visibility tracking
    let op0 = 0;
    let op1 = 1;
    let op2 = 0;

    let targetCamY = 2.5;
    let targetCamZ = 6.5;

    // Resize
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Render loop
    let animId: number;
    const clock = new THREE.Clock();
    let lastRenderTime = 0;

    const tick = () => {
      animId = requestAnimationFrame(tick);

      if (isHeadless) {
        const now = performance.now();
        if (now - lastRenderTime < 66) {
          return;
        }
        lastRenderTime = now;
      }

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      const stage = targetStageRef.current;

      // Stage-dependent targets
      const targetOp0 = stage === 0 ? 1 : 0.08;
      const targetOp1 = stage === 1 ? 1 : stage === 2 ? 0.95 : 0.05;
      const targetOp2 = stage === 2 ? 1 : 0;

      if (stage === 0) {
        targetCamY = 3.2;
        targetCamZ = 7.0;
      } else if (stage === 1) {
        targetCamY = 2.4;
        targetCamZ = 6.2;
      } else {
        targetCamY = 2.0;
        targetCamZ = 5.5;
      }

      // Smooth interpolation
      op0 = THREE.MathUtils.damp(op0, targetOp0, 4.0, delta);
      op1 = THREE.MathUtils.damp(op1, targetOp1, 4.0, delta);
      op2 = THREE.MathUtils.damp(op2, targetOp2, 4.0, delta);

      camera.position.y = THREE.MathUtils.damp(camera.position.y, targetCamY, 3.0, delta);
      camera.position.z = THREE.MathUtils.damp(camera.position.z, targetCamZ, 3.0, delta);
      camera.lookAt(0, 0.2, 0);

      // Apply opacities to materials
      wireMat.opacity = op0;
      stage0Group.visible = op0 > 0.02;

      tableMat.opacity = Math.max(0.05, op1);
      stage1Group.visible = op1 > 0.02;

      stage2Group.visible = op2 > 0.02;
      stageWarmLight.intensity = THREE.MathUtils.damp(
        stageWarmLight.intensity,
        stage === 2 ? 3.5 : stage === 1 ? 1.0 : 0.2,
        4.0,
        delta
      );

      // Gentle continuous rotation
      rootGroup.rotation.y = time * 0.1;
      chandelierGroup.rotation.y = -time * 0.05;

      renderer.render(scene, camera);
    };

    tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);

      groundGeom.dispose();
      groundMat.dispose();
      archTubeGeom.dispose();
      wireMat.dispose();
      pillarGeom.dispose();
      tableGeom.dispose();
      tableMat.dispose();
      baseGeom.dispose();
      goldMat.dispose();
      vaseGeom.dispose();
      glassMat.dispose();
      floralMat.dispose();
      chandelierRingGeom.dispose();
      pendantGeom.dispose();
      crystalMat.dispose();
      candleGeom.dispose();
      candleWaxMat.dispose();
      flameMat.dispose();
      galaMotesGeom.dispose();
      galaMotesMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const currentStage = STAGES[activeStage];

  return (
    <section
      id="transformacion"
      className="relative w-full py-24 md:py-32 bg-[#0c0b09] overflow-hidden border-t border-[#d4a96b]/10"
      aria-label="Experiencia 3D interactiva de transformación del evento"
    >
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#d4a96b] font-serif-luxury">
          Metodología Escénica
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#f4efe8] tracking-tight">
          Imaginamos. Diseñamos.{' '}
          <span className="italic text-gold-gradient">Lo hacemos realidad.</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-[#eedec0]/70 font-sans-luxury">
          Experimenta en tiempo real cómo un espacio vacío en Fusagasugá o el
          Sumapaz se transforma en un escenario nupcial o de gala de clase
          mundial.
        </p>
      </div>

      {/* 3D Viewport with unobstructed center */}
      <div className="relative max-w-6xl mx-auto h-[480px] sm:h-[560px] md:h-[620px] rounded-2xl overflow-hidden border border-[#d4a96b]/20 bg-gradient-to-b from-[#14120f] to-[#0a0908] shadow-2xl">
        {/* Isolated canvas container */}
        <div
          ref={mountRef}
          data-testid="transformation-3d-canvas"
          className="w-full h-full"
        />

        {/* Minimal Spec / Phase Indicator (Top Center - discreet, no pulse) */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#161411]/80 border border-[#d4a96b]/20 text-[11px] tracking-wider text-[#eedec0]/80 uppercase pointer-events-none">
          <span>{currentStage.tag}</span>
          <span className="mx-2 text-[#d4a96b]/40">·</span>
          <span className="text-[#d4a96b]">{currentStage.name}</span>
        </div>

        {/* Unified Bottom Control Dock (Compliant with Three.js Skill Section 5) */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full max-w-[min(820px,94vw)] z-20 flex flex-col items-center">
          {/* Drawer collapse / expand button */}
          <button
            onClick={() => setIsControlsOpen((prev) => !prev)}
            aria-label={isControlsOpen ? 'Ocultar controles' : 'Mostrar controles'}
            className="mb-2 px-3 py-1 rounded-t-md bg-[#181512]/95 border-t border-x border-[#d4a96b]/30 text-[11px] font-sans-luxury text-[#eedec0]/80 hover:text-white flex items-center gap-1.5 transition-colors shadow-lg"
          >
            {isControlsOpen ? (
              <>
                <ChevronDown className="w-3.5 h-3.5 text-[#d4a96b]" />
                <span>Ocultar controles (Modo Cine)</span>
              </>
            ) : (
              <>
                <ChevronUp className="w-3.5 h-3.5 text-[#d4a96b]" />
                <span>Explorar fases de transformación</span>
              </>
            )}
          </button>

          {/* Dock content */}
          {isControlsOpen && (
            <div className="w-full p-4 sm:p-5 rounded-xl bg-[#14120f]/95 border border-[#d4a96b]/30 shadow-2xl backdrop-blur-none transition-all">
              {/* Stage selector buttons */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-[#1c1916] rounded-lg border border-[#d4a96b]/15">
                {STAGES.map((stg) => {
                  const isSelected = activeStage === stg.id;
                  return (
                    <button
                      key={stg.id}
                      onClick={() => setActiveStage(stg.id)}
                      aria-pressed={isSelected}
                      className={`py-2 px-2 sm:px-4 text-xs font-medium rounded-md transition-all text-center whitespace-nowrap flex items-center justify-center gap-1.5 ${
                        isSelected
                          ? 'bg-[#d4a96b] text-[#12100e] font-semibold shadow-md'
                          : 'text-[#eedec0]/70 hover:text-[#f4efe8] hover:bg-[#2b2723]'
                      }`}
                    >
                      {stg.id === 0 && <Layers className="w-3.5 h-3.5 shrink-0" />}
                      {stg.id === 1 && <Wand2 className="w-3.5 h-3.5 shrink-0" />}
                      {stg.id === 2 && <Sparkles className="w-3.5 h-3.5 shrink-0" />}
                      <span className="hidden sm:inline">{stg.name}</span>
                      <span className="sm:hidden">Paso {stg.id + 1}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic description of current phase */}
              <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left">
                <div>
                  <h4 className="text-xs sm:text-sm font-serif-luxury text-[#f4efe8]">
                    {currentStage.subtitle}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#eedec0]/70 font-sans-luxury line-clamp-1 sm:line-clamp-none">
                    {currentStage.description}
                  </p>
                </div>

                <a
                  href="#contacto"
                  className="shrink-0 px-3 py-1.5 text-xs text-center font-medium text-[#d4a96b] border border-[#d4a96b]/40 rounded hover:bg-[#d4a96b]/10 transition-colors whitespace-nowrap"
                >
                  Cotizar esta puesta en escena
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
