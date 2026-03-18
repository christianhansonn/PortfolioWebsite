import { useEffect, useRef, useState } from "react";

interface Props {
  onComplete: () => void;
}

type Particle = {
  angle: number;
  r: number;
  speed: number;
  color: string;
  width: number;
};

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

function getSpeedMultiplier(elapsed: number): number {
  const keyframes = [
    [0.0, 0.8],
    [0.5, 1.2],
    [1.0, 4.0],
    [1.5, 14.0],
    [1.8, 18.0],
  ] as const;

  if (elapsed <= keyframes[0][0]) return keyframes[0][1];
  if (elapsed >= keyframes[keyframes.length - 1][0]) return keyframes[keyframes.length - 1][1];

  for (let i = 0; i < keyframes.length - 1; i++) {
    const [t0, v0] = keyframes[i];
    const [t1, v1] = keyframes[i + 1];
    if (elapsed >= t0 && elapsed <= t1) {
      const t = (elapsed - t0) / (t1 - t0);
      return lerp(v0, v1, t);
    }
  }
  return 1;
}

function getGlowIntensity(elapsed: number): number {
  const keyframes = [
    [0.0, 0.0],
    [1.2, 0.0],
    [1.5, 0.25],
    [1.8, 0.5],
    [2.0, 0.0],
  ] as const;

  if (elapsed <= keyframes[0][0]) return keyframes[0][1];
  if (elapsed >= keyframes[keyframes.length - 1][0]) return keyframes[keyframes.length - 1][1];

  for (let i = 0; i < keyframes.length - 1; i++) {
    const [t0, v0] = keyframes[i];
    const [t1, v1] = keyframes[i + 1];
    if (elapsed >= t0 && elapsed <= t1) {
      const t = (elapsed - t0) / (t1 - t0);
      return lerp(v0, v1, t);
    }
  }
  return 0;
}

function makeParticle(): Particle {
  const rand = Math.random();
  let color: string;
  if (rand < 0.65) {
    color = `rgba(255,255,255,${(0.8 + Math.random() * 0.2).toFixed(2)})`;
  } else if (rand < 0.90) {
    color = `rgba(34,211,238,${(0.8 + Math.random() * 0.2).toFixed(2)})`;
  } else {
    color = `rgba(167,139,250,${(0.8 + Math.random() * 0.2).toFixed(2)})`;
  }

  return {
    angle: Math.random() * Math.PI * 2,
    r: Math.random() * 38 + 2,
    speed: Math.random() * 2.0 + 1.5,
    color,
    width: Math.random() * 0.7 + 0.5,
  };
}

export default function HyperspaceIntro({ onComplete }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafId = useRef<number>(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;

    const particles: Particle[] = Array.from({ length: 200 }, makeParticle);

    let startTime = performance.now();
    let completeCalled = false;
    let fadingSet = false;

    function resize() {
      if (!canvas) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      // Reset particles on resize
      particles.forEach((p, i) => { particles[i] = makeParticle(); });
    }

    resize();
    window.addEventListener("resize", resize);

    function draw(now: number) {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const elapsed = (now - startTime) / 1000;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      const speedMul = getSpeedMultiplier(elapsed);
      const glowInt = getGlowIntensity(elapsed);

      // Trail fade
      ctx.fillStyle = "rgba(5,8,20,0.25)";
      ctx.fillRect(0, 0, w, h);

      // Center glow
      if (glowInt > 0) {
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 200 * dpr);
        grad.addColorStop(0, `rgba(255,255,255,${(glowInt * 0.9).toFixed(3)})`);
        grad.addColorStop(0.3, `rgba(34,211,238,${(glowInt * 0.5).toFixed(3)})`);
        grad.addColorStop(1, "rgba(34,211,238,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, 200 * dpr, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw particles
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const prevX = cx + p.r * Math.cos(p.angle);
        const prevY = cy + p.r * Math.sin(p.angle);
        p.r += p.speed * speedMul;
        const curX = cx + p.r * Math.cos(p.angle);
        const curY = cy + p.r * Math.sin(p.angle);

        ctx.beginPath();
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.width * dpr;
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(curX, curY);
        ctx.stroke();

        // Reset if out of bounds
        if (curX < 0 || curX > w || curY < 0 || curY > h) {
          particles[i] = { ...makeParticle(), r: Math.random() * 4 + 1 };
        }
      }

      // Fade-out trigger
      if (elapsed >= 1.8 && !fadingSet) {
        fadingSet = true;
        setFading(true);
      }

      // Cleanup
      if (elapsed >= 2.4 && !completeCalled) {
        completeCalled = true;
        onComplete();
        return;
      }

      rafId.current = requestAnimationFrame(draw);
    }

    rafId.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("resize", resize);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 100,
        backgroundColor: "#050814",
        opacity: fading ? 0 : 1,
        transition: "opacity 600ms ease-out",
      }}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
