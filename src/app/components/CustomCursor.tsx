"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface CustomCursorProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

interface BurstParticle {
  id: number;
  x: number;
  y: number;
  tx: number;
  ty: number;
}

export default function CustomCursor({ containerRef }: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isSuspended, setIsSuspended] = useState(false);
  const [isBursting, setIsBursting] = useState(false);
  const [burstParticles, setBurstParticles] = useState<BurstParticle[]>([]);
  const suspendPos = useRef<{ x: number; y: number } | null>(null);

  // track mouse, but suspend during hide
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (isSuspended) return;
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isSuspended]);

  // click handler: hide cursor and run burst animation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (isSuspended || isBursting) return;
      const clickX = e.clientX;
      const clickY = e.clientY;

      // suspend and hide
      suspendPos.current = { x: clickX, y: clickY };
      setIsVisible(false);
      setIsSuspended(true);

      // prepare burst
      setIsBursting(true);
      const count = 20;
      const spread = 25;
      const durationMs = 500;
      const newParticles: BurstParticle[] = [];
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const speed = Math.random() * 5 + 2;
        const vx = Math.cos(angle) * speed * spread;
        const vy = Math.sin(angle) * speed * spread;
        newParticles.push({
          id: Date.now() + i,
          x: clickX,
          y: clickY,
          tx: clickX + vx,
          ty: clickY + vy,
        });
      }
      setBurstParticles(newParticles);

      // after duration, clear both
      setTimeout(() => {
        // restore cursor
        if (suspendPos.current) {
          setMousePosition({ x: suspendPos.current.x, y: suspendPos.current.y });
        }
        setIsVisible(true);
        setIsSuspended(false);
        
        // clear burst
        setBurstParticles([]);
        setIsBursting(false);
      }, durationMs);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isSuspended, isBursting]);

  // hover detection
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onHover = (e: MouseEvent) => {
      const tgt = e.target as HTMLElement;
      const hoverable =
        ["BUTTON", "A", "IMG"].includes(tgt.tagName) ||
        !!tgt.closest("button, a, img") ||
        tgt.classList.contains("cursor-hover-trigger");
      setIsHovering(hoverable);
    };
    container.addEventListener("mouseover", onHover);
    return () => container?.removeEventListener("mouseover", onHover);
  }, [containerRef]);

  // hide on touch devices
  useEffect(() => {
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (touch) setIsVisible(false);
  }, []);

  const dotStyle = mousePosition
    ? { x: mousePosition.x - 8, y: mousePosition.y - 8 }
    : {};
  const outlineStyle = mousePosition
    ? { x: mousePosition.x - 20, y: mousePosition.y - 20 }
    : {};

  return (
    <>
      <style jsx global>{`
        .cursor-outline { position: fixed; width: 40px; height: 40px; border-radius: 50%; pointer-events: none; z-index: 9999; border: 1.5px solid rgba(255,255,255,0.6); background: rgba(255,255,255,0.05); box-shadow: 0 0 15px rgba(255,255,255,0.3); }
        .cursor-dot { position: fixed; width: 16px; height: 16px; border-radius: 50%; pointer-events: none; z-index: 10000; transition: all 0.15s ease; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.1) 60%, transparent 100%), rgba(255,255,255,0.05); box-shadow: 0 0 5px rgba(255,255,255,0.2); }
        .cursor-dot.reflective { background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(0,191,255,0.2) 40%, rgba(255,255,255,0.1) 70%, transparent 100%), rgba(255,255,255,0.08); mix-blend-mode: screen; box-shadow: 0 0 12px rgba(255,255,255,0.5), 0 0 25px rgba(0,191,255,0.4); }
        .burst-particle { position: fixed; width: 8px; height: 8px; border-radius: 50%; background: radial-gradient(circle, rgba(255,255,255,0.8), rgba(255,165,0,0.4)); pointer-events: none; z-index: 10001; }
        html, body { cursor: none; }
        button, a, img, [class*="cursor-hover-trigger"] { cursor: none; }
      `}</style>

      {/* Render main cursor */}
      {isVisible && mousePosition && (
        <>
          <motion.div
            className="cursor-outline"
            initial={false}
            animate={outlineStyle}
            transition={{ type: "spring", mass: 0.1, damping: 20, stiffness: 400 }}
          />
          <motion.div
            className={`cursor-dot ${isHovering ? "reflective" : ""}`}
            initial={false}
            animate={dotStyle}
            transition={{ type: "spring", mass: 0.1, damping: 25, stiffness: 800 }}
          />
        </>
      )}

      {/* Render burst particles independently */}
      {burstParticles.map((p) => (
        <motion.div
          key={p.id}
          className="burst-particle"
          initial={{ x: p.x - 4, y: p.y - 4, opacity: 1 }}
          animate={{ x: [p.x - 4, p.tx - 4, p.x - 4], y: [p.y - 4, p.ty - 4, p.y - 4], opacity: [1, 1, 0] }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      ))}
    </>
  );
}
