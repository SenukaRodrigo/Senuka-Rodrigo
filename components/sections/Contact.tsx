"use client";

import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="glow-ring glass relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center sm:px-14 sm:py-20">
            {/* Ambient wash inside the card */}
            <motion.div
              aria-hidden
              animate={{ opacity: [0.5, 0.85, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-x-0 -top-28 mx-auto h-64 w-[85%] rounded-full bg-[radial-gradient(ellipse,rgba(168,85,247,0.35),transparent_70%)] blur-3xl"
            />

            <div className="relative z-10">
              <p className="mb-5 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-accent">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-accent" />
                05 — Contact
                <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-accent" />
              </p>

              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
                Let&apos;s build
                <br />
                <span className="text-gradient">something together.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted">
                I&apos;m looking for a software engineering internship where I can keep
                shipping real products. If that sounds like your team, my inbox is open.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <MagneticLink
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-accent to-violet-accent px-8 py-4 text-sm font-semibold text-[#05060a] transition-shadow hover:shadow-[0_0_40px_-4px_rgba(168,85,247,0.7)]"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </MagneticLink>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-muted">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs">
                  <MapPin className="h-3.5 w-3.5" />
                  {profile.location}
                </span>
                <span className="h-4 w-px bg-white/15" />
                <MagneticLink
                  href={profile.github}
                  external
                  aria-label="GitHub profile"
                  className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs transition-colors hover:text-foreground"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </MagneticLink>
                <MagneticLink
                  href={profile.linkedin}
                  external
                  aria-label="LinkedIn profile"
                  className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs transition-colors hover:text-foreground"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </MagneticLink>
              </div>

              <p className="mt-10 font-mono text-xs text-muted/70">
                References available on request.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
