"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";
import { useSafeReducedMotion } from "@/components/ui/use-safe-reduced-motion";

type Blob = {
  className: string;
  duration: number;
  path: { x: number[]; y: number[]; scale: number[] };
};

/**
 * Drifting colour fields. Each blob animates on its own loop with a different
 * duration so the composite never visibly repeats.
 */
const BLOBS: Blob[] = [
  {
    className:
      "left-[-10%] top-[-15%] h-[55vw] w-[55vw] bg-[radial-gradient(circle,rgba(34,211,238,0.5),transparent_65%)]",
    duration: 26,
    path: { x: [0, 120, -60, 0], y: [0, 80, 140, 0], scale: [1, 1.15, 0.95, 1] },
  },
  {
    className:
      "right-[-15%] top-[5%] h-[50vw] w-[50vw] bg-[radial-gradient(circle,rgba(168,85,247,0.5),transparent_65%)]",
    duration: 32,
    path: { x: [0, -140, 60, 0], y: [0, 120, -70, 0], scale: [1, 0.9, 1.2, 1] },
  },
  {
    className:
      "bottom-[-20%] left-[20%] h-[60vw] w-[60vw] bg-[radial-gradient(circle,rgba(244,63,94,0.35),transparent_65%)]",
    duration: 38,
    path: { x: [0, 90, -110, 0], y: [0, -90, 50, 0], scale: [1, 1.1, 0.9, 1] },
  },
];

export function AuroraBackground() {
  // Gates a conditional render, so it must match the server's first paint.
  const reduced = useSafeReducedMotion();

  // Cursor spotlight, smoothed so it trails the pointer instead of snapping.
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const x = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 0.6 });
  const y = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (reduced) return;
    // Skip on touch devices — there is no hover cursor to follow.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY, reduced]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base wash */}
      <div className="absolute inset-0 bg-[#05060a]" />

      {/* Aurora blobs */}
      {BLOBS.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[100px] ${blob.className}`}
          animate={{ x: blob.path.x, y: blob.path.y, scale: blob.path.scale }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.33, 0.66, 1],
          }}
        />
      ))}

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
          backgroundSize: "38px 38px",
          maskImage:
            "radial-gradient(ellipse 90% 60% at 50% 40%, #000 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 60% at 50% 40%, #000 30%, transparent 75%)",
        }}
      />

      {/* Cursor spotlight */}
      {!reduced && (
        <motion.div
          className="absolute h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.16),transparent_60%)] blur-2xl"
          style={{ x, y, translateX: "-50%", translateY: "-50%", left: 0, top: 0 }}
        />
      )}

      {/* Grain + vignette */}
      <div className="noise-overlay absolute inset-0 opacity-[0.05] mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,6,10,0.85)_100%)]" />
    </div>
  );
}
