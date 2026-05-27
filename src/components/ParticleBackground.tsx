"use client";

import { useMemo, useState, useEffect } from "react";

const PARTICLE_COUNT = 30;

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export default function ParticleBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const r = seededRandom;
      const size  = r(i * 3)     * 3 + 1;   // 1–4 px
      const left  = r(i * 7)     * 100;      // 0–100%
      const top   = r(i * 11)    * 100;      // 0–100%
      const dur   = r(i * 13)    * 12 + 8;   // 8–20s
      const delay = r(i * 17)    * -20;      // negative delay so they stagger
      const opacity = r(i * 19)  * 0.4 + 0.1;

      const isViolet = i % 3 !== 0;
      const color = isViolet
        ? `rgba(139, 92, 246, ${opacity})`
        : `rgba(6, 182, 212, ${opacity})`;

      return { size, left, top, dur, delay, color };
    });
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width:  `${p.size}px`,
            height: `${p.size}px`,
            left:   `${p.left}%`,
            top:    `${p.top}%`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            animationDuration: `${p.dur}s`,
            animationDelay:    `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
