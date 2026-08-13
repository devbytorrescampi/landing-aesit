"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const NODE_COUNT = 55;
    const MAX_DIST = 160;
    const ACCENT = "0, 212, 255";
    const MOUSE_RADIUS = 100;
    const MOUSE_MIN_DIST = 40;
    const MOUSE_STRENGTH = 0.7;
    const REPEL_DIST = 34;
    const REPEL_STRENGTH = 0.6;

    let W = 0;
    let H = 0;
    let nodes: Node[] = [];
    let animId: number;
    const mouse: { x: number | null; y: number | null } = { x: null, y: null };

    function handlePointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handlePointerLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    function initNodes() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.8,
      }));
    }

    function resize() {
      W = canvas!.width = canvas!.offsetWidth;
      H = canvas!.height = canvas!.offsetHeight;
      initNodes();
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.3;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${ACCENT}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT}, 0.65)`;
        ctx.fill();

        n.x += n.vx;
        n.y += n.vy;

        if (mouse.x !== null && mouse.y !== null) {
          const mdx = mouse.x - n.x;
          const mdy = mouse.y - n.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist > 0 && mDist < MOUSE_RADIUS) {
            // Attracts while farther than MOUSE_MIN_DIST, gently repels
            // once closer than that — nodes settle into a loose halo around
            // the cursor instead of collapsing onto a single point.
            const t = (mDist - MOUSE_MIN_DIST) / (MOUSE_RADIUS - MOUSE_MIN_DIST);
            const pull = t * MOUSE_STRENGTH;
            n.x += (mdx / mDist) * pull;
            n.y += (mdy / mDist) * pull;
          }
        }

        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      // Keep nodes from ever piling into a tight clump — whenever the
      // cursor (or a random resting spot) draws several of them close
      // together, push them back apart so the mesh stays loose.
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d > 0 && d < REPEL_DIST) {
            const push = (1 - d / REPEL_DIST) * REPEL_STRENGTH;
            const ux = dx / d;
            const uy = dy / d;
            nodes[i].x -= ux * push;
            nodes[i].y -= uy * push;
            nodes[j].x += ux * push;
            nodes[j].y += uy * push;
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("mouseleave", handlePointerLeave);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero__canvas"
      aria-hidden="true"
    />
  );
}
