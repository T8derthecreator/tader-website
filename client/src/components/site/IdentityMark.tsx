import { useEffect, useRef } from 'react';

/**
 * ZENOK Identity Mark — CNC milling animation.
 *
 * Central tool carves the letters Z/E/N/O/K sequentially along preset paths,
 * leaving bright blue (#2563eb) strokes and emitting yellow→orange chip sparks.
 * Outer ring: 3 industries (Aerospace / Medical / Electronics).
 * Inner ring: 4 tool types (Flat / Ball / Corner / AL).
 * Radar sweep activates badges as it passes.
 * HUD: white card with 3px blue accent, graphite digits, blue F/S values.
 *
 * Confirmed as v7 (HUD restyle) from the preview series.
 */
export default function IdentityMark() {
  const svgRef = useRef<SVGSVGElement>(null);
  const hudXRef = useRef<HTMLSpanElement>(null);
  const hudYRef = useRef<HTMLSpanElement>(null);
  const hudZRef = useRef<HTMLSpanElement>(null);
  const hudFRef = useRef<HTMLSpanElement>(null);
  const hudSRef = useRef<HTMLSpanElement>(null);
  const hudLetterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const OUTER = [
      { angle: 0, label: 'AEROSPACE', color: '#1d4ed8' },
      { angle: 120, label: 'MEDICAL', color: '#0891b2' },
      { angle: 240, label: 'ELECTRONICS', color: '#1d4ed8' },
    ];
    const INNER = [
      { angle: 0, label: 'FLAT', shape: 'flat' },
      { angle: 90, label: 'BALL', shape: 'ball' },
      { angle: 180, label: 'CORNER', shape: 'corner' },
      { angle: 270, label: 'AL', shape: 'aluminum' },
    ];
    const LETTERS = [
      { label: 'Z', d: 'M 119 178 L 145 178 L 119 222 L 145 222' },
      { label: 'E', d: 'M 179 178 L 153 178 L 153 222 L 179 222 M 153 200 L 173 200' },
      { label: 'N', d: 'M 187 222 L 187 178 L 213 222 L 213 178' },
      { label: 'O', d: 'M 234 178 A 13 22 0 0 1 234 222 A 13 22 0 0 1 234 178 Z' },
      { label: 'K', d: 'M 255 178 L 255 222 M 281 178 L 255 200 L 281 222' },
    ];

    const polar = (a: number, r: number) => {
      const rad = ((a - 90) * Math.PI) / 180;
      return { x: 200 + Math.cos(rad) * r, y: 200 + Math.sin(rad) * r };
    };
    const angDist = (a: number, b: number) => {
      const d = Math.abs(((a - b) % 360 + 360) % 360);
      return d > 180 ? 360 - d : d;
    };
    const activation = (sweep: number, angle: number) => {
      const d = angDist(sweep, angle);
      return d > 30 ? 0 : 1 - d / 30;
    };

    svg.innerHTML = `
      <defs>
        <radialGradient id="cncHalo3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#2563eb" stop-opacity="0.22"/>
          <stop offset="60%" stop-color="#2563eb" stop-opacity="0.05"/>
          <stop offset="100%" stop-color="#2563eb" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="cncBeam3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#2563eb" stop-opacity="0.5"/>
          <stop offset="50%" stop-color="#2563eb" stop-opacity="0.18"/>
          <stop offset="100%" stop-color="#2563eb" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="190" fill="url(#cncHalo3)"/>
      <circle cx="200" cy="200" r="175" fill="none" stroke="#1d4ed8" stroke-width="0.6" opacity="0.15"/>
      <circle cx="200" cy="200" r="98" fill="none" stroke="#1d4ed8" stroke-width="0.8" opacity="0.22"/>
      <g stroke="#94a3b8" stroke-width="0.5" opacity="0.4" stroke-dasharray="4 3">
        <line x1="200" y1="30" x2="200" y2="370"/>
        <line x1="30" y1="200" x2="370" y2="200"/>
      </g>
      <g font-family="JetBrains Mono, monospace" font-size="9" font-weight="700" fill="#64748b">
        <text x="200" y="24" text-anchor="middle">+Y</text>
        <text x="200" y="384" text-anchor="middle">−Y</text>
        <text x="380" y="204" text-anchor="start">+X</text>
        <text x="20" y="204" text-anchor="end">−X</text>
      </g>
      <rect x="110" y="170" width="180" height="60" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="0.6" opacity="0.5"/>
      <g id="beamGroup"></g>
      <g id="outerGroup"></g>
      <g id="innerGroup"></g>
      <g id="zenokDone" fill="none" stroke="#1d4ed8" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.12">
        ${LETTERS.map((l) => `<path d="${l.d}"/>`).join('')}
      </g>
      <g id="zenokActive" fill="none" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
        ${LETTERS.map((l, i) => `<path id="letterPath${i}" d="${l.d}" stroke="#2563eb"/>`).join('')}
      </g>
      <g id="chipGroup"></g>
      <g id="toolDotGroup"></g>
      <text id="zenokText" x="200" y="260" text-anchor="middle" fill="#1d4ed8" font-family="Unbounded, system-ui" font-size="10" font-weight="700" letter-spacing="3" opacity="0">ZENOK · MILLED</text>
    `;

    const beamGroup = svg.querySelector('#beamGroup')!;
    const outerGroup = svg.querySelector('#outerGroup')!;
    const innerGroup = svg.querySelector('#innerGroup')!;
    const chipGroup = svg.querySelector('#chipGroup')!;
    const toolDotGroup = svg.querySelector('#toolDotGroup')!;
    const zenokText = svg.querySelector('#zenokText')!;
    const letterPaths = LETTERS.map(
      (_, i) => svg.querySelector(`#letterPath${i}`) as SVGPathElement
    );
    const letterLengths = letterPaths.map((p) => p.getTotalLength());
    letterPaths.forEach((p, i) => {
      const L = letterLengths[i];
      p.setAttribute('stroke-dasharray', String(L));
      p.setAttribute('stroke-dashoffset', String(L));
    });

    const toolIcon = (shape: string): string => {
      if (shape === 'flat')
        return '<rect x="-4" y="-7" width="8" height="10" fill="none" stroke="#1d4ed8" stroke-width="1.2"/><rect x="-3" y="3" width="6" height="5" fill="none" stroke="#1d4ed8" stroke-width="1.2"/>';
      if (shape === 'ball')
        return '<rect x="-4" y="-7" width="8" height="10" fill="none" stroke="#1d4ed8" stroke-width="1.2"/><circle cx="0" cy="6" r="4" fill="none" stroke="#1d4ed8" stroke-width="1.2"/>';
      if (shape === 'corner')
        return '<rect x="-4" y="-7" width="8" height="10" fill="none" stroke="#1d4ed8" stroke-width="1.2"/><path d="M -4 3 Q -4 8 0 8 Q 4 8 4 3" fill="none" stroke="#1d4ed8" stroke-width="1.2"/>';
      if (shape === 'aluminum')
        return '<rect x="-4" y="-7" width="8" height="10" fill="none" stroke="#1d4ed8" stroke-width="1.2"/><path d="M -4 3 L 4 3 L 6 10 L -6 10 Z" fill="none" stroke="#1d4ed8" stroke-width="1.2"/>';
      return '';
    };

    type Chip = { x: number; y: number; vx: number; vy: number; life: number; size: number };
    const chips: Chip[] = [];
    const addChip = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.6 + Math.random() * 1.3;
      chips.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.7,
        life: 1,
        size: 0.8 + Math.random() * 1.6,
      });
    };

    const SPEED = 55,
      HOLD_TIME = 2.0,
      FADE_TIME = 0.8;
    let currentLetter = 0,
      letterProgress = 0,
      state: 'carving' | 'holding' | 'fading' = 'carving',
      stateT = 0;
    let sweep = 0,
      lastRender = 0;
    let rafId = 0;

    const render = (now: number) => {
      const dt = lastRender ? Math.min(0.05, (now - lastRender) / 1000) : 0.016;
      lastRender = now;
      sweep = (sweep + 45 * dt) % 360;

      const a1 = sweep - 40,
        a2 = sweep;
      const p1 = polar(a1, 180),
        p2 = polar(a2, 180);
      const pLead = polar(sweep, 180);
      beamGroup.innerHTML = `
        <line x1="200" y1="200" x2="${pLead.x}" y2="${pLead.y}" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
        <path d="M 200 200 L ${p1.x} ${p1.y} A 180 180 0 0 1 ${p2.x} ${p2.y} Z" fill="url(#cncBeam3)" opacity="0.5"/>
      `;

      let toolX = 200,
        toolY = 200,
        showTool = false;

      if (state === 'carving') {
        showTool = true;
        letterProgress += SPEED * dt;
        const currentLen = letterLengths[currentLetter];
        if (letterProgress >= currentLen) {
          letterPaths[currentLetter].setAttribute('stroke-dashoffset', '0');
          currentLetter++;
          letterProgress = 0;
          if (currentLetter >= LETTERS.length) {
            state = 'holding';
            stateT = 0;
            zenokText.setAttribute('opacity', '0.7');
          }
        } else {
          letterPaths[currentLetter].setAttribute(
            'stroke-dashoffset',
            String(currentLen - letterProgress)
          );
          const point = letterPaths[currentLetter].getPointAtLength(letterProgress);
          toolX = point.x;
          toolY = point.y;
          if (Math.random() < 0.8) addChip(toolX, toolY);
        }
        if (hudLetterRef.current) {
          hudLetterRef.current.textContent =
            LETTERS[Math.min(currentLetter, LETTERS.length - 1)].label;
        }
      } else if (state === 'holding') {
        stateT += dt;
        if (stateT > HOLD_TIME) {
          state = 'fading';
          stateT = 0;
        }
      } else if (state === 'fading') {
        stateT += dt;
        const p = stateT / FADE_TIME;
        letterPaths.forEach((path, i) => {
          path.setAttribute('stroke-dashoffset', String(letterLengths[i] * p));
        });
        zenokText.setAttribute('opacity', String((1 - p) * 0.7));
        if (stateT > FADE_TIME) {
          letterPaths.forEach((path, i) => {
            path.setAttribute('stroke-dashoffset', String(letterLengths[i]));
          });
          currentLetter = 0;
          letterProgress = 0;
          state = 'carving';
          stateT = 0;
          zenokText.setAttribute('opacity', '0');
        }
      }

      if (showTool) {
        toolDotGroup.innerHTML = `
          <circle cx="${toolX}" cy="${toolY}" r="10" fill="#60a5fa" opacity="0.3"/>
          <circle cx="${toolX}" cy="${toolY}" r="6" fill="#3b82f6" opacity="0.7"/>
          <circle cx="${toolX}" cy="${toolY}" r="3" fill="#ffffff"/>
        `;
      } else {
        toolDotGroup.innerHTML = '';
      }

      let chipSvg = '';
      for (let i = chips.length - 1; i >= 0; i--) {
        const c = chips[i];
        c.x += c.vx;
        c.y += c.vy;
        c.vy += 0.12;
        c.life -= dt * 1.6;
        if (c.life <= 0) {
          chips.splice(i, 1);
          continue;
        }
        const color = c.life > 0.5 ? '#fbbf24' : '#f97316';
        chipSvg += `<circle cx="${c.x.toFixed(1)}" cy="${c.y.toFixed(1)}" r="${c.size.toFixed(2)}" fill="${color}" opacity="${c.life.toFixed(2)}"/>`;
      }
      chipGroup.innerHTML = chipSvg;

      outerGroup.innerHTML = OUTER.map((it) => {
        const act = activation(sweep, it.angle);
        const { x, y } = polar(it.angle, 175);
        const scale = 1 + act * 0.5;
        const line =
          act > 0.3
            ? `<line x1="200" y1="200" x2="${x}" y2="${y}" stroke="${it.color}" stroke-width="1" opacity="${act * 0.5}" stroke-dasharray="3 2"/>`
            : '';
        return `${line}
          <g transform="translate(${x} ${y}) scale(${scale})">
            <circle r="10" fill="none" stroke="${it.color}" stroke-width="1" opacity="${0.3 + act * 0.6}"/>
            <circle r="5" fill="${it.color}" opacity="${0.7 + act * 0.3}"/>
          </g>
          <text x="${x}" y="${y + 24}" text-anchor="middle" fill="${it.color}" font-family="JetBrains Mono, monospace" font-size="${10 + act * 2}" font-weight="700" letter-spacing="2" opacity="${0.55 + act * 0.45}">${it.label}</text>
        `;
      }).join('');

      innerGroup.innerHTML = INNER.map((it) => {
        const act = activation(sweep, it.angle);
        const { x, y } = polar(it.angle, 98);
        const scale = 1 + act * 0.3;
        return `
          <g transform="translate(${x} ${y}) scale(${scale})">
            <circle r="18" fill="#ffffff" stroke="#1d4ed8" stroke-width="${1.2 + act * 1.2}"/>
            ${toolIcon(it.shape)}
          </g>
        `;
      }).join('');

      // HUD updates
      if (hudXRef.current) {
        const vx = (toolX - 200) * 0.5;
        hudXRef.current.textContent =
          (vx >= 0 ? '+' : '') + vx.toFixed(3).padStart(7, '0');
      }
      if (hudYRef.current) {
        const vy = (200 - toolY) * 0.5;
        hudYRef.current.textContent =
          (vy >= 0 ? '+' : '') + vy.toFixed(3).padStart(7, '0');
      }
      if (hudZRef.current) hudZRef.current.textContent = '-0.050';
      if (hudFRef.current)
        hudFRef.current.textContent = String(Math.round(2380 + Math.sin(stateT * 3) * 30));
      if (hudSRef.current)
        hudSRef.current.textContent = Math.round(
          23970 + Math.sin(stateT * 5) * 80
        ).toLocaleString();

      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Design tokens (match site theme)
  const blue = '#1d4ed8';
  const bluePale = '#eff6ff';
  const ink = '#0a1628';
  const textDim = '#64748b';
  const lineSoft = '#eef2f7';
  const lineStrong = '#cbd5e1';
  const panel = '#ffffff';
  const panel2 = '#f8fafc';

  const hudRow: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 8,
  };
  const hudLabel: React.CSSProperties = { color: textDim, fontWeight: 500 };
  const hudVal: React.CSSProperties = {
    color: ink,
    fontWeight: 600,
    fontVariantNumeric: 'tabular-nums',
  };
  const hudValAccent: React.CSSProperties = { ...hudVal, color: blue };

  return (
    <div
      style={{
        position: 'relative',
        border: `1px solid ${lineSoft}`,
        background: `linear-gradient(to bottom right, ${panel}, ${panel2})`,
        padding: 40,
        boxShadow: '0 4px 12px rgba(10,22,40,0.06)',
      }}
    >
      {/* Corner brackets */}
      <span style={{ position: 'absolute', left: -1, top: -1, width: 20, height: 20, borderLeft: `2px solid ${blue}`, borderTop: `2px solid ${blue}` }} />
      <span style={{ position: 'absolute', right: -1, top: -1, width: 20, height: 20, borderRight: `2px solid ${blue}`, borderTop: `2px solid ${blue}` }} />
      <span style={{ position: 'absolute', left: -1, bottom: -1, width: 20, height: 20, borderLeft: `2px solid ${blue}`, borderBottom: `2px solid ${blue}` }} />
      <span style={{ position: 'absolute', right: -1, bottom: -1, width: 20, height: 20, borderRight: `2px solid ${blue}`, borderBottom: `2px solid ${blue}` }} />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <div
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: blue,
          }}
        >
          Company Identity Mark
        </div>
        <div
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 9,
            letterSpacing: '0.15em',
            color: textDim,
          }}
        >
          MILLING · ZENOK
        </div>
      </div>

      {/* Visual frame */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '1 / 1',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.4,
            backgroundImage: `linear-gradient(to right, ${lineSoft} 1px, transparent 1px), linear-gradient(to bottom, ${lineSoft} 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            pointerEvents: 'none',
          }}
        />

        {/* SVG */}
        <svg
          ref={svgRef}
          style={{
            position: 'absolute',
            inset: 0,
            margin: 'auto',
            width: '100%',
            height: '100%',
          }}
          viewBox="0 0 400 400"
        />

        {/* HUD — white card with blue accent.
            Shrinks on mobile via CSS below so it doesn't cover the carving animation. */}
        <style>{`
          @media (max-width: 640px) {
            .zenok-id-hud {
              transform: scale(0.62);
              transform-origin: top left;
              opacity: 0.92;
            }
          }
        `}</style>
        <div
          className="zenok-id-hud"
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            padding: '10px 12px',
            background: 'rgba(255,255,255,0.95)',
            border: `1px solid ${lineStrong}`,
            borderLeft: `3px solid ${blue}`,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10,
            lineHeight: 1.6,
            color: ink,
            minWidth: 130,
            boxShadow: '0 4px 12px rgba(10,22,40,0.06)',
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: blue,
              marginBottom: 6,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span>G01 · MILL</span>
            <span
              ref={hudLetterRef}
              style={{
                padding: '1px 6px',
                background: bluePale,
                color: blue,
                borderRadius: 2,
                fontWeight: 700,
              }}
            >
              Z
            </span>
          </div>
          <div style={hudRow}>
            <span style={hudLabel}>X</span>
            <span ref={hudXRef} style={hudVal}>
              +000.000
            </span>
          </div>
          <div style={hudRow}>
            <span style={hudLabel}>Y</span>
            <span ref={hudYRef} style={hudVal}>
              +000.000
            </span>
          </div>
          <div style={hudRow}>
            <span style={hudLabel}>Z</span>
            <span ref={hudZRef} style={hudVal}>
              -0.050
            </span>
          </div>
          <div style={{ height: 1, background: lineSoft, margin: '6px -12px' }} />
          <div style={hudRow}>
            <span style={hudLabel}>F</span>
            <span ref={hudFRef} style={hudValAccent}>
              2400
            </span>
          </div>
          <div style={hudRow}>
            <span style={hudLabel}>S</span>
            <span ref={hudSRef} style={hudValAccent}>
              24,000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
