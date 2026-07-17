"use client";

import { Code2, GraduationCap, Users, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { achievements, interests } from "@/lib/data";

const cards = [
  {
    icon: Code2,
    title: "Full stack, end to end",
    body: "From Next.js and TypeScript frontends to Spring Boot REST APIs and Firestore data models — I like owning a feature all the way through.",
  },
  {
    icon: Users,
    title: "Built for real teams",
    body: "Shipped in teams of 2 and 6 using Git branching, pull requests and code reviews, on projects with real users.",
  },
  {
    icon: GraduationCap,
    title: "Learning in public",
    body: "BSc (Hons) Computer Science at the University of Westminster, with a Java Programming certificate at Distinction.",
  },
  {
    icon: Sparkles,
    title: "Currently building",
    body: "InkFlow — a cross-platform Flutter blogging app using MVVM, Firebase Auth and go_router, shipping September 2026.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="01 — About"
          title="Turning ideas into shipped software."
          description="I'm a Computer Science undergraduate who likes the whole stack — designing the interface, wiring the data layer, and getting it in front of real users."
        />

        <RevealGroup className="grid gap-5 sm:grid-cols-2">
          {cards.map((card) => (
            <RevealItem key={card.title}>
              <TiltCard className="h-full">
                <div className="glow-ring glass h-full rounded-3xl p-7">
                  <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-br from-cyan-accent/20 to-violet-accent/20 p-3 ring-1 ring-white/10">
                    <card.icon className="h-5 w-5 text-cyan-accent" />
                  </div>
                  <h3 className="mb-2.5 font-display text-lg font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{card.body}</p>
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Achievements + interests */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
          <Reveal>
            <RevealGroup className="glass h-full rounded-3xl p-7">
              <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-violet-accent">
                Certificates & Achievements
              </h3>
              <ul className="space-y-4">
                {achievements.map((item) => (
                  <RevealItem key={item.title}>
                    <li className="flex gap-4">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-accent to-violet-accent" />
                      <div>
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-sm text-muted">{item.detail}</p>
                      </div>
                    </li>
                  </RevealItem>
                ))}
              </ul>
            </RevealGroup>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass h-full rounded-3xl p-7">
              <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-rose-accent">
                Outside the editor
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-muted"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
