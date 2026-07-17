"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * `reducedMotion="user"` makes Motion drop transform animations and animate
 * only opacity when the OS asks for reduced motion. Doing it here means
 * components never branch on the media query while rendering — branching there
 * makes the server HTML disagree with the client's first render (hydration
 * error #418), because the server can't know the user's preference.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
