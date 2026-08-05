"use client";

import { useEffect, useRef, useState } from "react";

export default function MouseFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Only enable the custom cursor on desktop (fine pointer + wide viewport) —
  // never on touch/mobile devices.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    // Real (target) cursor position, updated instantly on mousemove.
    const target = { x: -100, y: -100 };
    // Current rendered positions for the dot (fast) and ring (slow),
    // eased toward the target every frame — this is what produces the
    // trailing/spring "lag" physics seen in the reference animation.
    const dot = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    const DOT_EASE = 0.35;
    const RING_EASE = 0.12;
    let rafId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (
        el.closest("button") ||
        el.closest("a") ||
        el.closest("input") ||
        el.closest("textarea") ||
        el.closest(".interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    const tick = () => {
      dot.x += (target.x - dot.x) * DOT_EASE;
      dot.y += (target.y - dot.y) * DOT_EASE;
      ring.x += (target.x - ring.x) * RING_EASE;
      ring.y += (target.y - ring.y) * RING_EASE;

      // translate(-50%, -50%) keeps each element centered on its point
      // regardless of its current (possibly hover-animated) size.
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isDesktop, isVisible]);

  if (!isDesktop || !isVisible) return null;

  return (
    <>
      {/* Outer Ring — trails behind with more lag (circular, not rectangular) */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full border transition-[width,height,background-color,border-color] duration-200 ease-out ${
          isHovered
            ? "w-14 h-14 border-[#26E09C] bg-[#26E09C]/10"
            : "w-9 h-9 border-[#8EB69B]/40 bg-transparent"
        }`}
        style={{ borderWidth: "1px", willChange: "transform" }}
      />
      {/* Inner Dot — tracks the cursor closely */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-[#26E09C] w-1.5 h-1.5"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
