"use client";

import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { projects, type Project } from "@/lib/data";

/** Tailwind can't see runtime-built class names, so map accents explicitly. */
const accentStyles: Record<Project["accent"], { text: string; glow: string; dot: string }> = {
  cyan: {
    text: "text-cyan-accent",
    glow: "from-cyan-accent/25",
    dot: "bg-cyan-accent",
  },
  violet: {
    text: "text-violet-accent",
    glow: "from-violet-accent/25",
    dot: "bg-violet-accent",
  },
  emerald: {
    text: "text-emerald-accent",
    glow: "from-emerald-accent/25",
    dot: "bg-emerald-accent",
  },
  amber: {
    text: "text-amber-accent",
    glow: "from-amber-accent/25",
    dot: "bg-amber-accent",
  },
  rose: {
    text: "text-rose-accent",
    glow: "from-rose-accent/25",
    dot: "bg-rose-accent",
  },
};

function ProjectCard({
  project,
  index,
  featured,
}: {
  project: Project;
  index: number;
  featured: boolean;
}) {
  const accent = accentStyles[project.accent];

  return (
    <TiltCard className="h-full" intensity={featured ? 5 : 7}>
      <article className="glow-ring liquid-glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 sm:p-8">
        {/* Accent wash that warms up on hover */}
        <div
          className={`pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gradient-to-br ${accent.glow} to-transparent opacity-45 blur-3xl transition-opacity duration-500 group-hover:opacity-90`}
        />

        <div className="relative z-10 flex flex-1 flex-col">
          <header className="mb-4 flex items-start justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1.5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {project.name}
              </h3>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.name} on GitHub`}
                  className="rounded-full border border-white/10 bg-white/5 p-2.5 text-muted transition-colors hover:text-foreground"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
              )}
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.name} live site`}
                  className="rounded-full border border-white/10 bg-white/5 p-2.5 text-muted transition-colors hover:text-foreground"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </header>

          {/* Status / team meta */}
          {(project.status || project.team) && (
            <div className="mb-4 flex flex-wrap items-center gap-3">
              {project.status && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                  <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
                  {project.status}
                </span>
              )}
              {project.team && (
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  {project.team}
                </span>
              )}
            </div>
          )}

          <p className={`mb-3 text-sm font-medium ${accent.text}`}>{project.blurb}</p>
          <p className="mb-6 text-sm leading-relaxed text-muted">{project.description}</p>

          {featured && (
            <ul className="mb-6 space-y-2.5">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm text-muted">
                  <span
                    className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${accent.dot}`}
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          {/* Stack pinned to the bottom so cards in a row line up */}
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-muted transition-colors group-hover:border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </TiltCard>
  );
}

export function Projects() {
  const [first, second, ...rest] = projects;

  return (
    <section id="projects" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="02 — Work"
          title="Things I've built."
          description="Real applications with real users — from a neuro-rehabilitation platform used by therapists to a Spring Boot REST API."
        />

        {/* Two featured projects, then the rest in a tighter grid */}
        <div className="grid gap-5 lg:grid-cols-2">
          {[first, second].map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1} className="h-full">
              <ProjectCard project={project} index={i} featured />
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1} className="h-full">
              <ProjectCard project={project} index={i + 2} featured={false} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
