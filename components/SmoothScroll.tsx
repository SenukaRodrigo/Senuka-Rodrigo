"use client";

import { useEffect } from "react";

/**
 * Intercepts clicks on same-page anchors and scrolls smoothly to the target
 * without letting the #hash into the URL. Delegated once at the document, so
 * every in-page link (nav, mobile menu, hero CTA, scroll cue) is covered.
 */
export function SmoothScroll() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      // Leave modified/secondary clicks alone (open-in-new-tab etc.).
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;

      const id = anchor.getAttribute("href")!.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      // Stops the default jump AND keeps the #hash out of the URL.
      event.preventDefault();

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      // scroll-padding-top in globals.css keeps the fixed nav clear.
      target.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
