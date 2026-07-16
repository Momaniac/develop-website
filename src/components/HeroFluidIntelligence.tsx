"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  className?: string;
};

type Particle = {
  baseX: number;
  baseY: number;
  phase: number;
  speed: number;
  drift: number;
};

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uPointer;
  uniform float uPointerStrength;
  varying vec2 vUv;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(0.82, -0.57, 0.57, 0.82);

    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = rot * p * 2.05 + 0.13;
      a *= 0.5;
    }

    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 aspect = vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
    vec2 p = (uv - 0.5) * aspect;
    vec2 pointer = (uPointer - 0.5) * aspect;

    float t = uTime * 0.055;
    float pointerDist = distance(p, pointer);
    float pointerField = smoothstep(0.52, 0.0, pointerDist) * uPointerStrength;

    vec2 flow = vec2(
      fbm(p * 2.15 + vec2(t * 0.8, -t * 0.35)),
      fbm(p * 2.0 + vec2(-t * 0.28, t * 0.72))
    );

    vec2 warped = p + (flow - 0.5) * 0.34;
    warped += normalize(p - pointer + 0.0001) * pointerField * 0.06;

    float silk = fbm(warped * 3.1 + vec2(t, -t * 0.6));
    float veins = smoothstep(0.48, 0.82, fbm(warped * 7.5 - t * 1.15));
    float ripple = sin((pointerDist * 18.0) - uTime * 3.2) * pointerField;

    vec3 base = vec3(0.027, 0.020, 0.180);
    vec3 blue = vec3(0.059, 0.035, 0.310);
    vec3 violet = vec3(0.161, 0.000, 0.557);
    vec3 plum = vec3(0.392, 0.012, 0.329);
    vec3 glow = vec3(0.655, 0.545, 0.980);
    vec3 pink = vec3(0.957, 0.447, 0.714);

    vec3 color = mix(base, blue, smoothstep(0.15, 0.9, silk));
    color = mix(color, violet, smoothstep(0.46, 0.9, flow.x) * 0.42);
    color = mix(color, plum, smoothstep(0.52, 0.95, flow.y) * 0.34);
    color += glow * veins * 0.055;
    color += mix(glow, pink, silk) * pointerField * (0.13 + ripple * 0.035);

    float leftShade = smoothstep(0.62, 0.05, uv.x) * 0.34;
    float bottomDepth = smoothstep(0.05, 0.95, uv.y) * 0.10;
    float vignette = smoothstep(0.95, 0.25, length((uv - 0.5) * vec2(1.15, 0.92)));

    color = mix(color, base, leftShade);
    color *= 0.78 + vignette * 0.32 - bottomDepth;

    gl_FragColor = vec4(color, 0.96);
  }
`;

const pointVertexShader = `
  attribute float aPulse;
  uniform float uTime;
  uniform float uPointerStrength;
  varying float vPulse;

  void main() {
    vPulse = aPulse;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    float size = 3.2 + sin(uTime * 1.4 + aPulse * 6.2831) * 1.2 + uPointerStrength * 1.4;
    gl_PointSize = size;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const pointFragmentShader = `
  precision highp float;
  varying float vPulse;

  void main() {
    vec2 center = gl_PointCoord - 0.5;
    float dist = length(center);
    float alpha = smoothstep(0.5, 0.08, dist);
    vec3 violet = vec3(0.655, 0.545, 0.980);
    vec3 pink = vec3(0.957, 0.447, 0.714);
    vec3 color = mix(violet, pink, smoothstep(0.1, 0.95, vPulse));
    gl_FragColor = vec4(color, alpha * 0.64);
  }
`;

export default function HeroFluidIntelligence({ className = "" }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const parent = wrapper?.parentElement;
    if (!wrapper || !parent) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const clock = new THREE.Clock();
    const pointer = new THREE.Vector2(0.72, 0.46);
    const targetPointer = new THREE.Vector2(0.72, 0.46);
    let pointerStrength = 0;
    let targetPointerStrength = 0;
    let running = true;
    let frameId = 0;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      // Sin soporte WebGL (GPU bloqueada, headless, gama baja): no montamos nada
      // y dejamos el fondo CSS del hero (hero-dark). La página nunca se rompe.
      return;
    }
    renderer.setClearColor(0x07052e, 0);
    renderer.domElement.className = "block h-full w-full";
    wrapper.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 10);
    camera.position.z = 1;

    const fluidUniforms = {
      uTime: { value: reduceMotion ? 14 : 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uPointer: { value: pointer.clone() },
      uPointerStrength: { value: 0 },
      uPixelRatio: { value: 1 },
    };

    const fluid = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: fluidUniforms,
        transparent: true,
        depthWrite: false,
        depthTest: false,
      })
    );
    fluid.renderOrder = 0;
    scene.add(fluid);

    const particleCount = isMobile ? 42 : 92;
    const segmentCount = isMobile ? 18 : 44;
    const particles: Particle[] = Array.from({ length: particleCount }, (_, i) => {
      const lane = i / Math.max(1, particleCount - 1);
      return {
        baseX: THREE.MathUtils.lerp(-0.95, 0.98, (lane * 1.73) % 1),
        baseY: THREE.MathUtils.lerp(-0.76, 0.76, (lane * 2.19 + 0.17) % 1),
        phase: Math.random() * Math.PI * 2,
        speed: 0.18 + Math.random() * 0.36,
        drift: 0.012 + Math.random() * 0.03,
      };
    });

    const pointPositions = new Float32Array(particleCount * 3);
    const pointPulses = new Float32Array(particleCount);
    const linePositions = new Float32Array(segmentCount * 2 * 3);
    const lineColors = new Float32Array(segmentCount * 2 * 3);

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute("position", new THREE.BufferAttribute(pointPositions, 3));
    pointsGeometry.setAttribute("aPulse", new THREE.BufferAttribute(pointPulses, 1));

    const points = new THREE.Points(
      pointsGeometry,
      new THREE.ShaderMaterial({
        vertexShader: pointVertexShader,
        fragmentShader: pointFragmentShader,
        uniforms: {
          uTime: fluidUniforms.uTime,
          uPointerStrength: fluidUniforms.uPointerStrength,
        },
        transparent: true,
        depthWrite: false,
        depthTest: false,
        blending: THREE.AdditiveBlending,
      })
    );
    points.renderOrder = 2;
    scene.add(points);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lines = new THREE.LineSegments(
      lineGeometry,
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.38,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
      })
    );
    lines.renderOrder = 1;
    scene.add(lines);

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.35 : 1.75);

      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height, false);
      fluidUniforms.uResolution.value.set(width * dpr, height * dpr);
      fluidUniforms.uPixelRatio.value = dpr;
    };

    const updateParticles = (time: number) => {
      const pointerX = pointer.x * 2 - 1;
      const pointerY = 1 - pointer.y * 2;
      const influenceRadius = isMobile ? 0.32 : 0.42;

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        const flowX = Math.sin(time * p.speed + p.phase) * p.drift;
        const flowY = Math.cos(time * (p.speed * 0.82) + p.phase * 1.23) * p.drift;
        const x = p.baseX + flowX;
        const y = p.baseY + flowY;
        const dx = x - pointerX;
        const dy = y - pointerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const pull = Math.max(0, 1 - dist / influenceRadius) * pointerStrength;
        const orbit = Math.sin(time * 2.2 + p.phase) * pull * 0.024;

        pointPositions[i * 3] = x - dy * orbit + dx * pull * 0.038;
        pointPositions[i * 3 + 1] = y + dx * orbit + dy * pull * 0.038;
        pointPositions[i * 3 + 2] = 0.12;
        pointPulses[i] = Math.max(0.08, pull + (Math.sin(time * p.speed + p.phase) + 1) * 0.24);
      }

      const posAttr = pointsGeometry.getAttribute("position");
      const pulseAttr = pointsGeometry.getAttribute("aPulse");
      posAttr.needsUpdate = true;
      pulseAttr.needsUpdate = true;

      for (let i = 0; i < segmentCount; i++) {
        const a = (i * 7) % particleCount;
        const b = (a + 5 + (i % 11)) % particleCount;
        const ax = pointPositions[a * 3];
        const ay = pointPositions[a * 3 + 1];
        const bx = pointPositions[b * 3];
        const by = pointPositions[b * 3 + 1];
        const pulse = Math.max(pointPulses[a], pointPulses[b]);
        const fade = 0.12 + pulse * 0.48;

        linePositions[i * 6] = ax;
        linePositions[i * 6 + 1] = ay;
        linePositions[i * 6 + 2] = 0.1;
        linePositions[i * 6 + 3] = bx;
        linePositions[i * 6 + 4] = by;
        linePositions[i * 6 + 5] = 0.1;

        lineColors[i * 6] = 0.46 * fade;
        lineColors[i * 6 + 1] = 0.39 * fade;
        lineColors[i * 6 + 2] = 0.95 * fade;
        lineColors[i * 6 + 3] = 0.95 * fade;
        lineColors[i * 6 + 4] = 0.38 * fade;
        lineColors[i * 6 + 5] = 0.68 * fade;
      }

      lineGeometry.getAttribute("position").needsUpdate = true;
      lineGeometry.getAttribute("color").needsUpdate = true;
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      targetPointer.set(
        THREE.MathUtils.clamp((event.clientX - rect.left) / Math.max(1, rect.width), 0, 1),
        THREE.MathUtils.clamp((event.clientY - rect.top) / Math.max(1, rect.height), 0, 1)
      );
      targetPointerStrength = 1;
    };

    const handleMouseLeave = () => {
      targetPointerStrength = 0;
    };

    const renderStill = () => {
      updateParticles(8.5);
      renderer.render(scene, camera);
    };

    const loop = () => {
      if (running) {
        const elapsed = clock.getElapsedTime();
        pointer.lerp(targetPointer, 0.075);
        pointerStrength += (targetPointerStrength - pointerStrength) * 0.08;

        fluidUniforms.uTime.value = elapsed;
        fluidUniforms.uPointer.value.copy(pointer);
        fluidUniforms.uPointerStrength.value = pointerStrength;

        updateParticles(elapsed);
        renderer.render(scene, camera);
      }

      frameId = window.requestAnimationFrame(loop);
    };

    resize();
    renderStill();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running && !reduceMotion) clock.start();
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(parent);

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    if (!reduceMotion) {
      loop();
    }

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
      fluid.geometry.dispose();
      fluid.material.dispose();
      pointsGeometry.dispose();
      lines.geometry.dispose();
      points.material.dispose();
      lines.material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}
