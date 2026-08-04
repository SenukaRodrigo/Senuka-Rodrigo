"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import type { PointerEvent, ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees at the card's edges. */
  intensity?: number;
  /**
   * Corner radius class, must match the radius the card content itself uses.
   * The specular glare below is a sibling of `children`, not a descendant, so
   * without a radius (and `overflow-hidden`) on this same wrapper, the glare
   * paints as a sharp square that bleeds past the content's rounded corners.
   */
  rounded?: string;
};

/**
 * 3D tilt toward the pointer, plus a specular highlight that tracks it.
 * Falls back to a static card when the user prefers reduced motion.
 */
export function TiltCard({
  children,
  className = "",
  intensity = 8,
  rounded = "rounded-3xl",
}: TiltCardProps) {
  const reduced = useReducedMotion();

  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useSpring(useMotionValue(0), { stiffness: 150, damping: 25 });

  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.13), transparent 55%)`;

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    // Normalise pointer position within the card to -0.5..0.5
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    rotateY.set(px * intensity * 2);
    rotateX.set(-py * intensity * 2);
    glareX.set((px + 0.5) * 100);
    glareY.set((py + 0.5) * 100);
  }

  function handleEnter() {
    if (!reduced) glareOpacity.set(1);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
    glareOpacity.set(0);
  }

  return (
    <motion.div
      onPointerMove={handleMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }}
      whileHover={reduced ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`relative overflow-hidden ${rounded} ${className}`}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: glare, opacity: glareOpacity }}
      />
    </motion.div>
  );
}
