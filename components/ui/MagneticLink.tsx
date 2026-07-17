"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import type { PointerEvent, ReactNode } from "react";

type MagneticLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
  /** How far the element may drift toward the pointer, in px. */
  strength?: number;
  external?: boolean;
  "aria-label"?: string;
};

/** A link that leans toward the cursor while hovered, then springs back. */
export function MagneticLink({
  children,
  href,
  className = "",
  strength = 14,
  external = false,
  "aria-label": ariaLabel,
}: MagneticLinkProps) {
  const reduced = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });

  function handleMove(event: PointerEvent<HTMLAnchorElement>) {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(px * strength * 2);
    y.set(py * strength * 2);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{ x, y }}
      whileTap={{ scale: 0.96 }}
      className={className}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children}
    </motion.a>
  );
}
