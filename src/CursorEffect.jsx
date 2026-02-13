import { useState, useEffect, useRef, useCallback } from 'react';

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const CFG = {
  COUNT: 55,
  RADIUS: 190,
  REPEL: 2.4,
  SPRING: 0.017,
  SIZE_MIN: 5,
  SIZE_MAX: 30,
  FLOAT_SPD: [0.055, 0.13],
  FLOAT_RAD: [22, 60],
};

// ─── COLOR PALETTE ────────────────────────────────────────────────────────────
const COLORS = [
  a => `hsla(222,88%,68%,${a})`,
  a => `hsla(240,80%,72%,${a})`,
  a => `hsla(262,78%,70%,${a})`,
  a => `hsla(278,72%,68%,${a})`,
  a => `hsla(196,86%,64%,${a})`,
  a => `hsla(316,68%,68%,${a})`,
];

// ─── PARTICLE FACTORY ─────────────────────────────────────────────────────────
function makeParticle(id, W, H) {
  const x = Math.random() * W;
  const y = Math.random() * H;
  const ba = 0.1 + Math.random() * 0.2;
  const cfn = COLORS[Math.floor(Math.random() * COLORS.length)];
  const sz = CFG.SIZE_MIN + Math.random() * (CFG.SIZE_MAX - CFG.SIZE_MIN);

  return {
    id, cfn,
    ox: x, oy: y,
    bx: x, by: y,
    x, y,
    size: sz,
    half: sz * 0.5,
    shape: Math.floor(Math.random() * 3),
    fspd: CFG.FLOAT_SPD[0] + Math.random() * (CFG.FLOAT_SPD[1] - CFG.FLOAT_SPD[0]),
    frad: CFG.FLOAT_RAD[0] + Math.random() * (CFG.FLOAT_RAD[1] - CFG.FLOAT_RAD[0]),
    fox: Math.random() * Math.PI * 2,
    foy: Math.random() * Math.PI * 2,
    ft: Math.random() * 1000,
    vx: 0, vy: 0,
    mass: 0.7 + Math.random() * 1.8,
    damp: 0.85 + Math.random() * 0.07,
    ba,
    alpha: ba,
    glow: 0,
    rot: Math.random() * 360,
    rotSpd: (Math.random() - 0.5) * 0.38,
  };
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
const CursorEffect = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(null);
  const lastTRef = useRef(0);
  const dimRef = useRef({ W: window.innerWidth, H: window.innerHeight });
  const [isVisible, setIsVisible] = useState(true);

  // Scroll tracking to only show on "Home" (Hero) section
  useEffect(() => {
    const handleScroll = () => {
      // Hide effect if scrolled down more than 80% of viewport height
      const threshold = window.innerHeight * 0.8;
      setIsVisible(window.scrollY < threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reinit = useCallback(() => {
    const { W, H } = dimRef.current;
    particlesRef.current = Array.from({ length: CFG.COUNT }, (_, i) =>
      makeParticle(i, W, H)
    );
  }, []);

  // Resize
  useEffect(() => {
    const canvas = canvasRef.current;
    const resize = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      dimRef.current = { W, H };
      canvas.width = W;
      canvas.height = H;
    };
    resize();
    reinit();
    const onResize = () => { resize(); reinit(); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [reinit]);

  // Mouse
  useEffect(() => {
    const onMove = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const frame = (ts) => {
      if (!lastTRef.current) lastTRef.current = ts;
      const dt = Math.min((ts - lastTRef.current) / 16, 2.5);
      lastTRef.current = ts;

      const { W, H } = dimRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const R = CFG.RADIUS;

      ctx.clearRect(0, 0, W, H);
      if (!isVisible) {
        rafRef.current = requestAnimationFrame(frame);
        return;
      }

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];

        // Float motion
        p.ft += p.fspd * dt;
        const t = p.ft * 0.001;
        p.bx = p.ox + Math.cos(t + p.fox) * p.frad;
        p.by = p.oy + Math.sin(t * 1.3 + p.foy) * p.frad * 0.68;

        // Repulsion
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        if (dist < R) {
          const n = dist / R;
          const f = (1 - n) * (1 - n) * CFG.REPEL * dt;
          p.vx -= (dx / dist) * f / p.mass;
          p.vy -= (dy / dist) * f / p.mass;
          p.glow = Math.min(p.glow + 0.13 * dt, 1);
          p.alpha = Math.min(p.ba + 0.55 * (1 - n) * (1 - n), 0.94);
        } else {
          p.glow = Math.max(p.glow - 0.055 * dt, 0);
          p.alpha += (p.ba - p.alpha) * 0.07 * dt;
        }

        // Spring back
        p.vx += (p.bx - p.x) * CFG.SPRING * dt;
        p.vy += (p.by - p.y) * CFG.SPRING * dt;
        p.vx *= p.damp;
        p.vy *= p.damp;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rot += p.rotSpd * dt;

        // Draw
        const h = p.half;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);

        // 1) Far halo
        if (p.glow > 0.015) {
          const hr = h * (2.5 + p.glow * 3.2);
          const hg = ctx.createRadialGradient(0, 0, 0, 0, 0, hr);
          hg.addColorStop(0, p.cfn(p.glow * 0.28));
          hg.addColorStop(0.45, p.cfn(p.glow * 0.10));
          hg.addColorStop(1, p.cfn(0));
          ctx.beginPath();
          ctx.arc(0, 0, hr, 0, Math.PI * 2);
          ctx.fillStyle = hg;
          ctx.fill();
        }

        // 2) Near glow ring
        if (p.glow > 0.05) {
          const mr = h * (1.3 + p.glow * 1.5);
          const mg = ctx.createRadialGradient(0, 0, h * 0.5, 0, 0, mr);
          mg.addColorStop(0, p.cfn(p.glow * 0.22));
          mg.addColorStop(1, p.cfn(0));
          ctx.beginPath();
          ctx.arc(0, 0, mr, 0, Math.PI * 2);
          ctx.fillStyle = mg;
          ctx.fill();
        }

        // 3) Particle body
        const bg = ctx.createRadialGradient(-h * 0.28, -h * 0.28, 0, 0, 0, h * 0.78);
        bg.addColorStop(0, p.cfn(Math.min(p.alpha * 1.9, 0.96)));
        bg.addColorStop(0.5, p.cfn(p.alpha));
        bg.addColorStop(1, p.cfn(p.alpha * 0.04));

        ctx.beginPath();
        if (p.shape === 0) {
          ctx.arc(0, 0, h, 0, Math.PI * 2);
        } else if (p.shape === 1) {
          ctx.roundRect(-h, -h, p.size, p.size, h * 0.42);
        } else {
          ctx.moveTo(0, -h);
          ctx.bezierCurveTo(h * 0.88, -h * 0.55, h * 0.65, h * 0.48, 0, h);
          ctx.bezierCurveTo(-h * 0.65, h * 0.48, -h * 0.88, -h * 0.55, 0, -h);
        }
        ctx.fillStyle = bg;
        ctx.fill();

        // 4) Specular highlight
        const sg = ctx.createRadialGradient(
          -h * 0.3, -h * 0.3, 0,
          -h * 0.3, -h * 0.3, h * 0.32
        );
        sg.addColorStop(0, `rgba(255,255,255,${0.52 + p.glow * 0.32})`);
        sg.addColorStop(1, `rgba(255,255,255,0)`);
        ctx.beginPath();
        ctx.arc(-h * 0.3, -h * 0.3, h * 0.32, 0, Math.PI * 2);
        ctx.fillStyle = sg;
        ctx.fill();

        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(frame);
    };

    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-[999999] transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    />
  );
};

export default CursorEffect;