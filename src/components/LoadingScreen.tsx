"use client";

import { useEffect, useState } from "react";
import LoadingScreenVisual from "./LoadingScreenVisual";

// Fixed timeline so the animation plays out identically on every single
// visit — never cut short or stretched by network/page load speed.
const HOLD_MS = 2200; // entrance + hold, before the exit begins
const EXIT_MS = 500; // exit transition duration (must match LoadingScreenVisual's duration-500)

/**
 * First-visit splash screen. Mounted once in the root layout so it appears
 * the instant the app shell paints (rendered synchronously on first render,
 * not behind a useEffect, so there's no flash of the page underneath), then
 * always runs the exact same entrance → hold → exit sequence.
 */
export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [entered, setEntered] = useState(false);
  const [exiting, setExiting] = useState(false);

  // Kick off the entrance transition on the next frame (lets the browser
  // paint the initial "hidden" state first, so the transition actually runs).
  useEffect(() => {
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // Lock scroll while the splash is up.
  useEffect(() => {
    if (!visible) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  // Fixed exit timeline — same on every visit, regardless of how fast the
  // page actually loaded.
  useEffect(() => {
    const holdTimer = window.setTimeout(() => setExiting(true), HOLD_MS);
    const hideTimer = window.setTimeout(
      () => setVisible(false),
      HOLD_MS + EXIT_MS,
    );
    return () => {
      window.clearTimeout(holdTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return <LoadingScreenVisual entered={entered} exiting={exiting} />;
}
