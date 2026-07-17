"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useSafeReducedMotion } from "@/components/ui/use-safe-reduced-motion";
import { education } from "@/lib/data";

export function Education() {
  const ref = useRef<HTMLDivElement>(null);
  // Gates the scroll-linked `style` below, which MotionConfig can't disable.
  const reduced = useSafeReducedMotion();

  // The spine "draws" itself as the timeline scrolls through the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="education" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="04 — Education"
          title="Where I'm learning."
          description="Reading Computer Science at the University of Westminster, delivered in Sri Lanka through IIT."
        />

        <div ref={ref} className="relative pl-8 sm:pl-12">
          {/* Track + animated fill */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-white/10 sm:left-[11px]" />
          <motion.div
            style={reduced ? undefined : { scaleY }}
            className="absolute left-[7px] top-2 h-full w-px origin-top bg-gradient-to-b from-cyan-accent via-violet-accent to-transparent sm:left-[11px]"
          />

          <div className="space-y-10">
            {education.map((entry, i) => (
              <Reveal key={entry.school} delay={i * 0.1}>
                <div className="relative">
                  {/* Node */}
                  <span className="absolute -left-8 top-2 flex h-4 w-4 items-center justify-center sm:-left-12">
                    {entry.current && (
                      <span className="absolute h-4 w-4 animate-ping rounded-full bg-cyan-accent/40" />
                    )}
                    <span
                      className={`relative h-[9px] w-[9px] rounded-full ring-4 ring-[#05060a] ${
                        entry.current
                          ? "bg-gradient-to-r from-cyan-accent to-violet-accent"
                          : "bg-white/25"
                      }`}
                    />
                  </span>

                  <div className="glass rounded-2xl p-6">
                    <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-lg font-semibold sm:text-xl">
                        {entry.school}
                      </h3>
                      <span className="font-mono text-xs text-muted">{entry.period}</span>
                    </div>
                    <p className="text-sm text-cyan-accent">{entry.qualification}</p>
                    <p className="mt-1 text-sm text-muted">{entry.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
