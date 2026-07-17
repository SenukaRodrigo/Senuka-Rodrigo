"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { skillGroups } from "@/lib/data";

const MARQUEE = [
  "Next.js",
  "TypeScript",
  "React",
  "Flutter",
  "Dart",
  "Firebase",
  "Firestore",
  "Java",
  "Spring Boot",
  "Tailwind CSS",
  "Python",
  "SQL",
  "Git",
  "Figma",
];

/** Infinite ticker. The list is rendered twice so the -50% loop is seamless. */
function SkillMarquee() {
  return (
    <div
      className="marquee-host relative overflow-hidden py-4"
      style={{
        // Mask rather than an opaque gradient overlay — the aurora shows through.
        maskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div className="marquee-track flex w-max gap-4" style={{ ["--marquee-duration" as string]: "38s" }}>
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 gap-4">
            {MARQUEE.map((skill) => (
              <span
                key={`${copy}-${skill}`}
                className="glass whitespace-nowrap rounded-full px-6 py-3 font-display text-lg font-medium text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 — Skills"
          title="The toolkit."
          description="Languages, frameworks and tools I reach for — and the soft skills that make working with me easy."
        />
      </div>

      <div className="mb-14">
        <SkillMarquee />
      </div>

      <div className="mx-auto max-w-6xl">
        <RevealGroup className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <RevealItem key={group.title}>
              <div className="glass h-full rounded-3xl p-7">
                <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-cyan-accent">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-violet-accent/50 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-5">
          <div className="glass rounded-3xl p-7">
            <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-violet-accent">
              Course · Java Programming · 2025 · Distinction
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              A structured program focused on core Java development and object-oriented
              design. Covered Java syntax, control structures, data types and standard
              libraries, with deep application of encapsulation, inheritance, polymorphism
              and abstraction.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
