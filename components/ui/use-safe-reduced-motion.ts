"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Hydration-safe reduced-motion flag.
 *
 * Returns `false` on the server and on the client's first render so both agree,
 * then reports the real preference after mount. Use this only where the
 * preference must change what's rendered — scroll-linked `style` bindings that
 * `MotionConfig` can't disable. For plain animations, prefer MotionConfig.
 */
export function useSafeReducedMotion() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return mounted && Boolean(reduced);
}
