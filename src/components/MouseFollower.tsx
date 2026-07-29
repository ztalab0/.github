"use client";

import { useEffect, useState } from "react";

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest(".interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Circle */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-circle transition-transform duration-100 ease-out ${
          isHovered
            ? "scale-150 border-[#26E09C] bg-[#26E09C]/10"
            : "border-[#8EB69B]/40 bg-transparent"
        }`}
        style={{
          width: "36px",
          height: "36px",
          borderWidth: "1px",
          transform: `translate3d(${position.x - 18}px, ${position.y - 18}px, 0) ${
            isHovered ? "scale(1.5)" : "scale(1)"
          }`,
        }}
      />
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-circle bg-[#26E09C]"
        style={{
          width: "6px",
          height: "6px",
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
        }}
      />
    </>
  );
}
