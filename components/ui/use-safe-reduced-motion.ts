"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

/**
 * Hydration-safe reduced-motion flag.
 *
 * The server snapshot is `false`, so server HTML and the client's first render
 * agree; the real preference applies right after hydration. Use this only
 * where the preference must change what's rendered — scroll-linked `style`
 * bindings that `MotionConfig` can't disable. For plain animations, prefer
 * MotionConfig.
 */
export function useSafeReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}
