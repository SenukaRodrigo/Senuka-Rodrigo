"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  // Highlight whichever section currently owns the middle of the viewport.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Prevent background scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6"
      >
        {/* Three balanced zones (logo · centred links · CTA) keep the bar
            symmetric no matter how wide the logo or button get. */}
        <nav className="liquid-glass mx-auto grid max-w-4xl grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-full px-4 py-3">
          {/* Left — logo */}
          <a
            href="#home"
            className="relative z-10 col-start-1 flex items-center gap-2 justify-self-start pl-3 font-display text-lg font-bold tracking-tight"
          >
            <span className="text-gradient">SR</span>
            <span className="hidden font-mono text-xs font-normal text-muted lg:inline">
              {profile.firstName.toLowerCase()}.dev
            </span>
          </a>

          {/* Centre — links */}
          <ul className="relative z-10 col-start-2 hidden items-center md:flex">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative block rounded-full px-4 py-2.5 text-[15px] transition-colors duration-200 lg:px-5 ${
                      isActive ? "text-foreground" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="liquid-pill absolute inset-0 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right — CTA / mobile toggle */}
          <div className="relative z-10 col-start-3 flex items-center justify-self-end">
            <a
              href={`mailto:${profile.email}`}
              className="hidden rounded-full bg-white/95 px-6 py-2.5 text-[15px] font-semibold text-[#05060a] shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.9),0_4px_14px_-4px_rgba(255,255,255,0.35)] transition-transform hover:scale-105 md:block"
            >
              Hire me
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="rounded-full p-2.5 text-foreground md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-[#05060a]/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex h-full flex-col items-center justify-center gap-3">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl font-semibold text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
