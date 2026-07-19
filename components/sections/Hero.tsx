"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { useRef } from "react";
import { profile } from "@/lib/data";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { RotatingWord } from "@/components/ui/RotatingWord";
import { useSafeReducedMotion } from "@/components/ui/use-safe-reduced-motion";

/** Splits a string into per-character spans that fly up on load. */
function AnimatedName({ text }: { text: string }) {
  return (
    <span className="inline-block" aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          aria-hidden
          className="inline-block"
          initial={{ y: "0.8em", opacity: 0, rotateX: -70 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15 + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  // Gates the scroll-linked `style` below, which MotionConfig can't disable.
  const reduced = useSafeReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Content drifts up and fades as you scroll past — parallax depth.
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[100svh] items-center px-6 pt-28 pb-20 sm:px-10"
    >
      <motion.div
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]"
      >
        {/* ---------------- Copy ---------------- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-accent" />
            </span>
            <span className="font-mono text-xs tracking-wide text-muted">
              Available for internships
            </span>
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <AnimatedName text={profile.firstName} />
            <br />
            <span className="text-gradient">
              <AnimatedName text={profile.lastName} />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 font-display text-xl font-medium sm:text-2xl"
          >
            <span className="text-muted">I build with </span>
            <RotatingWord words={profile.rotatingWords} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticLink
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-accent to-violet-accent px-7 py-3.5 text-sm font-semibold text-[#05060a] transition-shadow hover:shadow-[0_0_36px_-4px_rgba(168,85,247,0.65)]"
            >
              <span className="relative z-10">View my work</span>
            </MagneticLink>

            <MagneticLink
              href={`mailto:${profile.email}`}
              className="glass group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors hover:border-white/25"
            >
              <Mail className="h-4 w-4 text-cyan-accent" />
              Get in touch
            </MagneticLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.15 }}
            className="mt-9 flex items-center gap-5 text-muted"
          >
            <span className="inline-flex items-center gap-1.5 font-mono text-xs">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </span>
            <span className="h-4 w-px bg-white/15" />
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
          </motion.div>
        </div>

        {/* ---------------- Portrait ---------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Glow behind the portrait */}
            <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.5),transparent_65%)] blur-3xl" />

            <div className="glow-ring liquid-glass relative overflow-hidden rounded-[2rem] p-2">
              <Image
                src="/hero.png"
                alt=""
                aria-hidden
                width={640}
                height={640}
                priority
                className="h-auto w-full rounded-[1.6rem] object-cover"
              />
            </div>

            {/* Floating stat chips */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="liquid-glass absolute -left-4 bottom-10 rounded-2xl px-4 py-3 sm:-left-8"
            >
              <p className="font-display text-2xl font-bold text-gradient">5+</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Projects
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="liquid-glass absolute -right-2 top-10 rounded-2xl px-4 py-3 sm:-right-6"
            >
              <p className="font-display text-2xl font-bold text-gradient">BSc</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Westminster
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-foreground sm:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
