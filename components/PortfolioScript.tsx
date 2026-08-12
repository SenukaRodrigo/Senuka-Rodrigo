"use client";

import { useEffect } from "react";

export default function PortfolioScript() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ── scroll progress fallback (browsers without scroll-timeline) ── */
    const bar = document.getElementById("progress");
    const hasScrollTL = CSS.supports("animation-timeline: scroll()");
    let tick: (() => void) | undefined;
    if (bar && !hasScrollTL && !reduce) {
      tick = function () {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
      };
      addEventListener("scroll", tick, { passive: true });
      addEventListener("resize", tick);
      tick();
    } else if (bar && reduce) {
      bar.style.transform = "scaleX(1)";
    }

    /* ── reveal fallback for browsers without view() timelines ── */
    const hasViewTL =
      CSS.supports("animation-timeline: view()") && CSS.supports("animation-range: entry");
    let revealIO: IntersectionObserver | undefined;
    if (!hasViewTL && !reduce && "IntersectionObserver" in window) {
      revealIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              revealIO!.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px" }
      );
      document.querySelectorAll(".reveal").forEach((el) => revealIO!.observe(el));
    }

    /* ── count-up numbers ── */
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    let countIO: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      countIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            const target = +el.dataset.count!;
            countIO!.unobserve(el);
            if (reduce) {
              el.textContent = String(target);
              return;
            }
            const t0 = performance.now();
            const dur = 1100;
            const step = function (now: number) {
              const p = Math.min((now - t0) / dur, 1);
              el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          });
        },
        { threshold: 0.6 }
      );
      counters.forEach((el) => countIO!.observe(el));
    } else {
      counters.forEach((el) => {
        el.textContent = el.dataset.count!;
      });
    }

    /* ── cursor-tracked glow on project cards (fine pointers only) ── */
    let glowHandlers: Array<{ el: Element; fn: (e: PointerEvent) => void }> = [];
    if (matchMedia("(pointer: fine)").matches && !reduce) {
      document.querySelectorAll("[data-glow]").forEach((card) => {
        const fn = function (e: PointerEvent) {
          const r = card.getBoundingClientRect();
          (card as HTMLElement).style.setProperty("--mx", e.clientX - r.left + "px");
          (card as HTMLElement).style.setProperty("--my", e.clientY - r.top + "px");
        };
        card.addEventListener("pointermove", fn as EventListener);
        glowHandlers.push({ el: card, fn });
      });
    }

    /* ── nav scrollspy ── */
    const links = document.querySelectorAll<HTMLAnchorElement>('#primary-nav a[href^="#"]');
    let spy: IntersectionObserver | undefined;
    if (links.length && "IntersectionObserver" in window) {
      const map: Record<string, HTMLAnchorElement> = {};
      const targets: HTMLElement[] = [];
      links.forEach((a) => {
        const el = document.getElementById(a.hash.slice(1));
        if (el) {
          map[el.id] = a;
          targets.push(el);
        }
      });
      const seen = new Set<string>();
      spy = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) seen.add(e.target.id);
            else seen.delete(e.target.id);
          });
          const cur = targets.filter((t) => seen.has(t.id))[0];
          for (const id in map) map[id].removeAttribute("aria-current");
          if (cur) map[cur.id].setAttribute("aria-current", "true");
        },
        { rootMargin: "-20% 0px -65% 0px" }
      );
      targets.forEach((t) => spy!.observe(t));
    }

    /* ── timeline draw + node activation ── */
    const tl = document.getElementById("timeline");
    let drawTick: (() => void) | undefined;
    if (tl && !reduce) {
      const items = tl.querySelectorAll<HTMLElement>(".tl-item");
      drawTick = function () {
        const r = tl.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = (vh * 0.75 - r.top) / r.height;
        tl.style.setProperty("--draw", Math.max(0, Math.min(1, p)) * 100 + "%");
        items.forEach((it) => {
          it.classList.toggle("is-on", it.getBoundingClientRect().top < vh * 0.78);
        });
      };
      addEventListener("scroll", drawTick, { passive: true });
      addEventListener("resize", drawTick);
      drawTick();
    } else if (tl) {
      tl.style.setProperty("--draw", "100%");
      tl.querySelectorAll(".tl-item").forEach((i) => i.classList.add("is-on"));
    }

    /* ── in-page anchor links: scroll without pushing #hash into the URL ── */
    const anchorClickHandler = function (e: MouseEvent) {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.hash.slice(1);
      const target = id ? document.getElementById(id) : null;
      e.preventDefault();
      if (target) {
        target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }
    };
    document.addEventListener("click", anchorClickHandler);

    /* ── back to top ── */
    const top = document.getElementById("totop");
    const scrollHandler = function () {
      top?.classList.toggle("is-on", window.scrollY > 700);
    };
    const clickHandler = function () {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    };
    if (top) {
      addEventListener("scroll", scrollHandler, { passive: true });
      top.addEventListener("click", clickHandler);
    }

    return () => {
      if (tick) {
        removeEventListener("scroll", tick);
        removeEventListener("resize", tick);
      }
      revealIO?.disconnect();
      countIO?.disconnect();
      document.removeEventListener("click", anchorClickHandler);
      glowHandlers.forEach(({ el, fn }) => el.removeEventListener("pointermove", fn as EventListener));
      spy?.disconnect();
      if (drawTick) {
        removeEventListener("scroll", drawTick);
        removeEventListener("resize", drawTick);
      }
      if (top) {
        removeEventListener("scroll", scrollHandler);
        top.removeEventListener("click", clickHandler);
      }
    };
  }, []);

  return null;
}
