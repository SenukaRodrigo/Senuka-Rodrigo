"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/** Cycles through `words`, swapping one out every `interval` ms. */
export function RotatingWord({
  words,
  interval = 2400,
  className = "",
}: {
  words: readonly string[];
  interval?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval, reduced]);

  // Reserve width for the longest word so the line never reflows mid-swap.
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <span className={`relative inline-grid align-bottom ${className}`}>
      {/* Invisible sizer */}
      <span aria-hidden className="invisible col-start-1 row-start-1 whitespace-nowrap">
        {longest}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "0.6em", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-0.6em", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient col-start-1 row-start-1 whitespace-nowrap text-left"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
