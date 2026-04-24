import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * ZENOK Interactive Tool Visual — 3D end mill with drag-to-orbit.
 *
 * Real spec: D2.5 × H6.5 × T4 × d6 × L50 (uncoated solid carbide)
 * Revisions: v8 (satin silver materials) · v10 (wide grooves, 3-face tip)
 *            v11 (正錐 taper direction) · v12 (real dimensions, 4 flutes)
 *            v14 (taper length = flute length)
 */
export default function InteractiveToolVisual() {
  const frameRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = frameRef.current;
    if (!canvas || !frame) return;

    // ─── Scene setup ───
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
    camera.position.set(0, 0, 16);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const resize = () => {
      const r = frame.getBoundingClientRect();
      renderer.setSize(r.width, r.height, false);
      camera.aspect = r.width / r.height;
      camera.updateProjectionMatrix();
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(frame);

    // ─── Lighting (softened for satin finish) ───
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const key = new THREE.DirectionalLight(0xffffff, 1.3);
    key.position.set(5, 8, 10);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xeaf0f8, 0.6);
    fill.position.set(-8, -2, 6);
    scene.add(fill);
    const rim = new THREE.DirectionalLight(0xffffff, 0.9);
    rim.position.set(-3, 0, -8);
    scene.add(rim);
    const topLight = new THREE.DirectionalLight(0xffffff, 0.5);
    topLight.position.set(0, 12, 2);
    scene.add(topLight);

    // ─── envMap: bright band + dark center, from real product photo colours ───
    const envC = document.createElement('canvas');
    envC.width = 512;
    envC.height = 256;
    const ex = envC.getContext('2d')!;
    const grad = ex.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0.0, '#f4f6f9');
    grad.addColorStop(0.15, '#dde2e8');
    grad.addColorStop(0.3, '#dfe4e9');
    grad.addColorStop(0.42, '#a8adb5');
    grad.addColorStop(0.5, '#585860');
    grad.addColorStop(0.58, '#a8adb5');
    grad.addColorStop(0.7, '#dfe4e9');
    grad.addColorStop(0.85, '#dde2e8');
    grad.addColorStop(1.0, '#f4f6f9');
    ex.fillStyle = grad;
    ex.fillRect(0, 0, 512, 256);
    ex.fillStyle = 'rgba(255,255,255,0.55)';
    ex.fillRect(90, 40, 18, 180);
    ex.fillRect(380, 50, 14, 170);
    const envT = new THREE.CanvasTexture(envC);
    envT.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = envT;

    // ─── Materials — satin uncoated carbide ───
    const chrome = new THREE.MeshStandardMaterial({
      color: 0xbcc3cb,
      metalness: 1.0,
      roughness: 0.28,
      envMapIntensity: 1.0,
    });
    const chromeEdge = new THREE.MeshStandardMaterial({
      color: 0xd4d9de,
      metalness: 1.0,
      roughness: 0.2,
      envMapIntensity: 1.2,
    });
    const faceMat = new THREE.MeshStandardMaterial({
      color: 0xc4ccd4,
      metalness: 0.95,
      roughness: 0.24,
      envMapIntensity: 1.15,
      side: THREE.DoubleSide,
    });
    const gulletMat = new THREE.MeshStandardMaterial({
      color: 0x2b3139,
      metalness: 0.8,
      roughness: 0.55,
      side: THREE.DoubleSide,
    });

    // ─── Real dimensions (mm) scaled to viewport ───
    const mm = 0.15; // 1mm → 0.15 three.js units
    const D = 2.5,
      d = 6.0,
      H = 6.5,
      L_total = 50.0,
      neck = 6.5; // taper = flute length
    const tipR = (D / 2) * mm;
    const shankR = (d / 2) * mm;
    const fluteL = H * mm;
    const taperL = neck * mm;
    const shankL = (L_total - H - neck) * mm;
    const totalL = L_total * mm;
    const y_shank = totalL / 2 - shankL / 2;

    const HELIX = Math.PI / 6; // 30°
    const revsPerL = (fluteL * Math.tan(HELIX)) / (Math.PI * D * mm);

    const NUM_FLUTES = 4;
    const TAU = Math.PI * 2;
    const SECTOR = TAU / NUM_FLUTES;

    const tool = new THREE.Group();

    // ─── Shank ───
    const shank = new THREE.Mesh(
      new THREE.CylinderGeometry(shankR, shankR, shankL, 96),
      chrome
    );
    shank.position.y = y_shank;
    tool.add(shank);

    const topCapMat = new THREE.MeshStandardMaterial({
      color: 0x8f969e,
      metalness: 0.95,
      roughness: 0.3,
    });
    const topCap = new THREE.Mesh(
      new THREE.CylinderGeometry(shankR * 0.98, shankR * 0.92, 0.06, 64),
      topCapMat
    );
    topCap.position.y = y_shank + shankL / 2 + 0.03;
    tool.add(topCap);

    const topEdge = new THREE.Mesh(
      new THREE.TorusGeometry(shankR, 0.014, 12, 64),
      chromeEdge
    );
    topEdge.position.y = y_shank + shankL / 2;
    topEdge.rotation.x = Math.PI / 2;
    tool.add(topEdge);

    // ─── Taper (正錐: shankR top → tipR bottom) ───
    const taper = new THREE.Mesh(
      new THREE.CylinderGeometry(shankR, tipR, taperL, 64),
      chrome
    );
    taper.position.y = y_shank - shankL / 2 - taperL / 2;
    tool.add(taper);

    // ─── Flute section (4-flute helical) ───
    const fluteGroup = new THREE.Group();
    fluteGroup.position.y = y_shank - shankL / 2 - taperL - fluteL / 2;

    const grooveHalfWidth = 0.35;
    const grooveDepth = tipR * 0.35;
    const ySteps = 96,
      thSteps = 120;

    const radialAt = (theta: number, y: number): number => {
      const twist = ((y + fluteL / 2) / fluteL) * revsPerL * TAU;
      const thH = theta - twist;
      let nd = Infinity;
      for (let k = 0; k < NUM_FLUTES; k++) {
        let dd = thH - k * SECTOR;
        while (dd > Math.PI) dd -= TAU;
        while (dd < -Math.PI) dd += TAU;
        if (Math.abs(dd) < Math.abs(nd)) nd = dd;
      }
      const a = Math.abs(nd);
      if (a > grooveHalfWidth) return tipR;
      const t = a / grooveHalfWidth;
      return tipR - grooveDepth * 0.5 * (1 + Math.cos(Math.PI * t));
    };

    const positions: number[] = [];
    const indices: number[] = [];
    for (let i = 0; i <= ySteps; i++) {
      const y = -fluteL / 2 + (i / ySteps) * fluteL;
      for (let j = 0; j <= thSteps; j++) {
        const th = (j / thSteps) * TAU;
        const r = radialAt(th, y);
        positions.push(Math.cos(th) * r, y, Math.sin(th) * r);
      }
    }
    for (let i = 0; i < ySteps; i++) {
      for (let j = 0; j < thSteps; j++) {
        const a = i * (thSteps + 1) + j;
        const b = a + 1;
        const c = a + (thSteps + 1);
        const e = c + 1;
        indices.push(a, c, b, b, c, e);
      }
    }
    const fluteGeom = new THREE.BufferGeometry();
    fluteGeom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    fluteGeom.setIndex(indices);
    fluteGeom.computeVertexNormals();
    fluteGroup.add(new THREE.Mesh(fluteGeom, chrome));

    const capTop = new THREE.Mesh(new THREE.CircleGeometry(tipR, 48), chrome);
    capTop.position.y = fluteL / 2;
    capTop.rotation.x = -Math.PI / 2;
    fluteGroup.add(capTop);

    // ─── Cutting tip: 4 faces + 4 gullets ───
    const tipY = -fluteL / 2;
    for (let k = 0; k < NUM_FLUTES; k++) {
      // Cutting face (land, slight negative axial rake)
      const a0 = k * SECTOR + grooveHalfWidth;
      const a1 = (k + 1) * SECTOR - grooveHalfWidth;
      const fSteps = 24;
      const fv: number[] = [0, tipY - 0.02, 0];
      for (let j = 0; j <= fSteps; j++) {
        const a = a0 + (j / fSteps) * (a1 - a0);
        fv.push(Math.cos(a) * tipR, tipY, Math.sin(a) * tipR);
      }
      const fi: number[] = [];
      for (let j = 0; j < fSteps; j++) fi.push(0, j + 2, j + 1);
      const fg = new THREE.BufferGeometry();
      fg.setAttribute('position', new THREE.Float32BufferAttribute(fv, 3));
      fg.setIndex(fi);
      fg.computeVertexNormals();
      fluteGroup.add(new THREE.Mesh(fg, faceMat));

      // Gullet (groove pocket, recessed dark fill)
      const g0 = k * SECTOR - grooveHalfWidth;
      const g1 = k * SECTOR + grooveHalfWidth;
      const gSteps = 16;
      const gv: number[] = [0, tipY - 0.045, 0];
      for (let j = 0; j <= gSteps; j++) {
        const a = g0 + (j / gSteps) * (g1 - g0);
        const r = radialAt(a, -fluteL / 2);
        gv.push(Math.cos(a) * r, tipY - 0.025, Math.sin(a) * r);
      }
      const gi: number[] = [];
      for (let j = 0; j < gSteps; j++) gi.push(0, j + 2, j + 1);
      const gg = new THREE.BufferGeometry();
      gg.setAttribute('position', new THREE.Float32BufferAttribute(gv, 3));
      gg.setIndex(gi);
      gg.computeVertexNormals();
      fluteGroup.add(new THREE.Mesh(gg, gulletMat));
    }

    const edgeRing = new THREE.Mesh(
      new THREE.TorusGeometry(tipR * 0.98, 0.0045, 8, 64),
      chromeEdge
    );
    edgeRing.position.y = tipY;
    edgeRing.rotation.x = Math.PI / 2;
    fluteGroup.add(edgeRing);

    tool.add(fluteGroup);

    tool.quaternion.setFromEuler(new THREE.Euler(0.15, 0.2, 0, 'XYZ'));
    scene.add(tool);

    // ─── Interaction: quaternion-based orbit + auto-tumble ───
    let drag = false,
      px = 0,
      py = 0,
      t = 0,
      last = 0,
      vx = 0,
      vy = 0;

    const rot = (yaw: number, pitch: number) => {
      const qY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
      const qX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), pitch);
      tool.quaternion.premultiply(qY);
      tool.quaternion.premultiply(qX);
    };

    const onPointerDown = (e: PointerEvent) => {
      drag = true;
      px = e.clientX;
      py = e.clientY;
      vx = 0;
      vy = 0;
      canvas.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!drag) return;
      const dx = e.clientX - px;
      const dy = e.clientY - py;
      rot(dx * 0.009, dy * 0.009);
      vx = dx;
      vy = dy;
      px = e.clientX;
      py = e.clientY;
    };
    const onPointerUp = (e: PointerEvent) => {
      drag = false;
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {
        /* noop */
      }
    };
    const onPointerCancel = () => {
      drag = false;
    };
    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointercancel', onPointerCancel);

    let rafId = 0;
    const anim = (now: number) => {
      const dt = last ? (now - last) / 1000 : 0.016;
      last = now;
      t += dt;
      if (!drag) {
        vx *= 0.94;
        vy *= 0.94;
        if (Math.abs(vx) > 0.5 || Math.abs(vy) > 0.5) {
          rot(vx * dt * 0.08, vy * dt * 0.08);
        } else {
          rot(0.4 * dt, 0.25 * dt * Math.sin(t * 0.5));
          const qZ = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(0, 0, 1),
            0.12 * dt * Math.sin(t * 0.35)
          );
          tool.quaternion.premultiply(qZ);
        }
      }
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(anim);
    };
    rafId = requestAnimationFrame(anim);

    // ─── Cleanup ───
    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointercancel', onPointerCancel);
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
        }
      });
      chrome.dispose();
      chromeEdge.dispose();
      faceMat.dispose();
      gulletMat.dispose();
      topCapMat.dispose();
      envT.dispose();
      renderer.dispose();
    };
  }, []);

  // Design tokens (inline for self-containment; match site theme)
  const ink = '#0a1628';
  const lineStrong = '#cbd5e1';
  const lineSoft = '#e2e8f0';
  const textDim = '#64748b';
  const textSoft = 'rgba(100,116,139,0.7)';

  const labelBase: React.CSSProperties = {
    position: 'absolute',
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: 9,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: textDim,
    zIndex: 3,
  };
  const badgeBase: React.CSSProperties = {
    position: 'absolute',
    pointerEvents: 'none',
    padding: '4px 10px',
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: 10,
    fontWeight: 600,
    background: 'rgba(255,255,255,0.9)',
    border: '1px solid rgba(10,22,40,0.3)',
    color: ink,
    zIndex: 3,
  };
  const cornerBase: React.CSSProperties = {
    position: 'absolute',
    width: 24,
    height: 24,
    zIndex: 2,
  };

  return (
    <div
      ref={frameRef}
      style={{
        position: 'relative',
        aspectRatio: '1 / 1',
        width: '100%',
        maxWidth: 540,
        margin: '0 auto',
        overflow: 'hidden',
        border: `1px solid ${lineStrong}`,
        background: 'radial-gradient(ellipse at center, #fefeff, #e8ebf0)',
        boxShadow:
          '0 20px 48px rgba(10,22,40,0.08), 0 8px 20px rgba(10,22,40,0.06)',
      }}
    >
      {/* Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.3,
          backgroundImage: `linear-gradient(to right, ${lineSoft} 1px, transparent 1px), linear-gradient(to bottom, ${lineSoft} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Corner brackets */}
      <div style={{ ...cornerBase, left: 0, top: 0, borderLeft: `1.5px solid ${ink}`, borderTop: `1.5px solid ${ink}` }} />
      <div style={{ ...cornerBase, right: 0, top: 0, borderRight: `1.5px solid ${ink}`, borderTop: `1.5px solid ${ink}` }} />
      <div style={{ ...cornerBase, left: 0, bottom: 0, borderLeft: `1.5px solid ${ink}`, borderBottom: `1.5px solid ${ink}` }} />
      <div style={{ ...cornerBase, right: 0, bottom: 0, borderRight: `1.5px solid ${ink}`, borderBottom: `1.5px solid ${ink}` }} />

      {/* Corner labels */}
      <div style={{ ...labelBase, left: 20, top: 20 }}>[ 3D · 4-FLUTE T4 ]</div>
      <div style={{ ...labelBase, right: 20, top: 20 }}>SOLID CARBIDE</div>
      <div style={{ ...labelBase, left: 20, bottom: 20 }}>SATIN FINISH</div>
      <div style={{ ...labelBase, right: 20, bottom: 20 }}>HELIX 30°</div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          display: 'block',
          width: '100%',
          height: '100%',
          cursor: 'grab',
          touchAction: 'none',
        }}
      />

      {/* Spec badges */}
      <div style={{ ...badgeBase, right: 20, top: 86 }}>Ø 2.5 · L 50</div>
      <div style={{ ...badgeBase, left: 20, top: 160 }}>MFN 4.8%</div>
      <div style={{ ...badgeBase, right: 20, bottom: 120 }}>HRC 62</div>
      <div style={{ ...badgeBase, left: 20, bottom: 86 }}>T4 · HELIX 30°</div>

      {/* Hint */}
      <div
        style={{
          position: 'absolute',
          bottom: 56,
          left: '50%',
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 9,
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: textSoft,
          zIndex: 3,
        }}
      >
        ◂ ▸ ▴ ▾ drag to orbit
      </div>
    </div>
  );
}
