"use client";

const BRAND_NAME = "ZTA LAB";

interface LoadingScreenVisualProps {
  /** Entrance animation has been triggered (true after first paint). */
  entered: boolean;
  /** Exit animation has been triggered — reverses back to the hidden state. */
  exiting: boolean;
}

/**
 * Pure presentational splash screen: brand mark settles in with an eased
 * rotate + scale, then the wordmark converges in letter-by-letter from
 * spread-out positions. Shared by the first-visit LoadingScreen orchestrator
 * and the Next.js route-level loading.tsx. Renders identically every time —
 * no conditional branches on network speed or user settings.
 */
export default function LoadingScreenVisual({
  entered,
  exiting,
}: LoadingScreenVisualProps) {
  const show = entered && !exiting;
  const letters = BRAND_NAME.split("");
  const center = (letters.length - 1) / 2;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="ZTA Lab is loading"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        exiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo mark — eased rotate + scale settle */}
      <div
        className={`relative transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          show
            ? "opacity-100 scale-100 rotate-0"
            : "opacity-0 scale-50 -rotate-[18deg]"
        }`}
      >
        <img
          src="/assets/LOGO/SVG Lgos/Brand Color 2.svg"
          alt="ZTA Lab"
          className="h-16 sm:h-20 w-auto object-contain"
        />
      </div>

      {/* Wordmark — letters converge inward from spread positions */}
      <div className="mt-5 flex">
        {letters.map((char, i) => (
          <span
            key={`${char}-${i}`}
            className={`inline-block font-heading text-lg sm:text-xl tracking-[0.35em] text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              show ? "opacity-100 blur-none" : "opacity-0 blur-[3px]"
            }`}
            style={{
              transform: show
                ? "translateX(0)"
                : `translateX(${(i - center) * 14}px)`,
              transitionDelay: show ? `${650 + i * 40}ms` : "0ms",
            }}
          >
            {char === " " ? " " : char}
          </span>
        ))}
      </div>
    </div>
  );
}
