import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const MAX_SPEED = 0.1;
const ATTRACTORS = [
    { 
      position: new THREE.Vector3(4, -1.3, 0),
      axis: new THREE.Vector3(0, 1, 0),
      mass: 1e7,
      spin: 2.75,
      size: 1.0,
      color: "#ff6b6b"
    },
    {
      position: new THREE.Vector3(0.5, 1.5, -1),
      axis: new THREE.Vector3(1, 0, 1).normalize(),
      mass: 5e6,
      spin: 2.75,
      size: 0.65,
      color: "#4ecdc4"
    },
    {
      position: new THREE.Vector3(-2, 0.5, 3),
      axis: new THREE.Vector3(0, 0, 1),
      mass: 7e6,
      spin: 2.75,
      size: 0.8,
      color: "#ffe66d"
    }
  ];

let targetRadius = 12;
let currentRadius = 12;
const minRadius = 4;
const maxRadius = 30;
  

export const ThreeAttractorsBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>();

  useEffect(() => {
    const width = mountRef.current?.clientWidth || window.innerWidth;
    const height = mountRef.current?.clientHeight || window.innerHeight;
    const loader = new THREE.TextureLoader();
    const attractorTextures = [
    loader.load("public/sun.jpg"),
    loader.load("public/venus.jpg"),
    loader.load("public/jupiter.jpg")
    ];
    const bgTexture = loader.load("/public/bg.jpg");

    function onScroll(e: WheelEvent) {
        // Normalize trackpad vs mouse
        const delta = e.deltaY * 0.01;
        targetRadius += delta;
        targetRadius = Math.max(minRadius, Math.min(maxRadius, targetRadius));
      }
      window.addEventListener("wheel", onScroll, { passive: true });

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = bgTexture;
    const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 100);
    camera.position.set(0, 0, 0);

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(0, 0, 0);
    scene.add(dirLight);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);
    rendererRef.current = renderer;
    mountRef.current?.appendChild(renderer.domElement);

    // Mouse control
    let targetAzimuth = 0, targetPolar = Math.PI / 2.2;
    let currentAzimuth = 0, currentPolar = Math.PI / 2.2;
    const radius = 12;

    function onMouseMove(e: MouseEvent) {
      const x = e.clientX / width;
      const y = e.clientY / height;
      targetAzimuth = (x - 0.5) * Math.PI * 2;
      targetPolar = Math.PI / 3 + (y - 0.5) * Math.PI / 3;
    }
    window.addEventListener("mousemove", onMouseMove);

    // Particles
    const count = 2 ** 16;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const masses = new Float32Array(count);

    const colorA = new THREE.Color("#5900ff");
    const colorB = new THREE.Color("#ffa575");

    for (let i = 0; i < count; i++) {
      const px = (Math.random() - 0.5) * 5;
      const py = (Math.random() - 0.5) * 5;
      const pz = (Math.random() - 0.5) * 5;
      positions[i * 3] = (Math.random() - 0.5) * 9;   // wider X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1;  // more Y variation
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;  // wider Z
      velocities.set([(Math.random() - 0.5) * 0.05, (Math.random() - 0.5) * 0.05, (Math.random() - 0.5) * 0.05], i * 3);
      masses[i] = 1e4 ; // Particle mass ~1e4

      (i < count / 2 ? colorA : colorB).toArray(colors, i * 3);
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("velocity", new THREE.BufferAttribute(velocities, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const GRAVITY = 6.67430e-11;
    let running = true;

    function animate() {
      if (!running) return;
      requestAnimationFrame(animate);
      attractorMeshes.forEach((mesh, idx) => {
        mesh.rotateOnAxis(ATTRACTORS[idx].axis, 0.01); // rotate around its axis
      });


      // Smooth camera movement
      currentAzimuth += (targetAzimuth - currentAzimuth) * 0.07;
      currentPolar += (targetPolar - currentPolar) * 0.07;
      currentRadius += (targetRadius - currentRadius) * 0.07;
      const sinPolar = Math.sin(currentPolar);
      camera.position.x = currentRadius * sinPolar * Math.sin(currentAzimuth);
      camera.position.y = currentRadius * Math.cos(currentPolar);
      camera.position.z = currentRadius * sinPolar * Math.cos(currentAzimuth);
      camera.lookAt(0, 0, 0);

      

      const pos = geometry.getAttribute("position");
      const vel = geometry.getAttribute("velocity");

      for (let i = 0; i < count; i++) {
        let px = pos.getX(i), py = pos.getY(i), pz = pos.getZ(i);
        let vx = vel.getX(i), vy = vel.getY(i), vz = vel.getZ(i);
        const pmass = masses[i];

        for (const attractor of ATTRACTORS) {
            const dx = attractor.position.x - px;
            const dy = attractor.position.y - py;
            const dz = attractor.position.z - pz;
            const distSq = dx * dx + dy * dy + dz * dz + 0.01;
            const dist = Math.sqrt(distSq);
            const dir = new THREE.Vector3(dx, dy, dz).normalize();
        
            const gravForce = (GRAVITY * attractor.mass * pmass) / distSq;
            vx += (gravForce * dir.x) / pmass;
            vy += (gravForce * dir.y) / pmass;
            vz += (gravForce * dir.z) / pmass;
        
            const axis = attractor.axis;
            const spinVec = new THREE.Vector3(dx, dy, dz).cross(axis).normalize().multiplyScalar(gravForce * attractor.spin);
            vx += spinVec.x / pmass;
            vy += spinVec.y / pmass;
            vz += spinVec.z / pmass;
          }

        // Damping
        vx *= 0.98;
        vy *= 0.98;
        vz *= 0.98;

        // Update position
        px += vx;
        py += vy;
        pz += vz;

        // Wrap in box
        const bound = 8;
        if (px < -bound) px += 2 * bound;
        if (px > bound) px -= 2 * bound;
        if (py < -bound) py += 2 * bound;
        if (py > bound) py -= 2 * bound;
        if (pz < -bound) pz += 2 * bound;
        if (pz > bound) pz -= 2 * bound;

        pos.setXYZ(i, px, py, pz);
        vel.setXYZ(i, vx, vy, vz);

        // --- Dynamic color based on speed ---
        const speed = Math.sqrt(vx * vx + vy * vy + vz * vz);
        const t = Math.min(speed / MAX_SPEED, 1.0); // Normalize speed to [0, 1]
        const c = new THREE.Color().lerpColors(colorA, colorB, t);
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;

        
      }

      pos.needsUpdate = true;
      vel.needsUpdate = true;
      geometry.getAttribute("color").needsUpdate = true;

      

      renderer.render(scene, camera);
    }

    // Attractor visuals
    const attractorMeshes: THREE.Group[] = [];

    ATTRACTORS.forEach((a, idx) => {
        const group = new THREE.Group();
      
        // Sphere with image texture
        const sphereGeo = new THREE.SphereGeometry(a.size, 32, 32);
        const sphereMat = new THREE.MeshStandardMaterial({ 
          map: attractorTextures[idx % attractorTextures.length],
          roughness: 0.5,
          metalness: 0.1
        });
        const sphere = new THREE.Mesh(sphereGeo, sphereMat);
        group.add(sphere);
      
        // Rotating ring
        const ringGeo = new THREE.RingGeometry(a.size * 1.1, a.size * 1.15, 32);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), a.axis.clone().normalize());
        ring.quaternion.copy(q);
        group.add(ring);
      
        group.position.copy(a.position);
        scene.add(group);
        attractorMeshes.push(group);
      });
      

    animate();

    function handleResize() {
      const width = mountRef.current?.clientWidth || window.innerWidth;
      const height = mountRef.current?.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      running = false;
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        overflow: "hidden",
      }}
    />
  );
};
