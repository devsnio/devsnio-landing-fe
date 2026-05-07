"use client";

import { useEffect } from "react";

const VARIANT_FROM: Record<string, Keyframe> = {
  up: { opacity: 0, transform: "translateY(28px)" },
  fade: { opacity: 0 },
  left: { opacity: 0, transform: "translateX(-32px)" },
  right: { opacity: 0, transform: "translateX(32px)" },
  scale: { opacity: 0, transform: "scale(0.96) translateY(8px)" },
};

const TO: Keyframe = { opacity: 1, transform: "none" };

export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const animated = new WeakSet<Element>();

    const play = (el: HTMLElement) => {
      if (animated.has(el)) return;
      animated.add(el);
      el.removeAttribute("data-reveal-init");

      const variantAttr = el.getAttribute("data-reveal");
      const variant = variantAttr && variantAttr in VARIANT_FROM ? variantAttr : "up";
      const from = VARIANT_FROM[variant];

      const groupDelay = (() => {
        const explicit = el.dataset.revealDelay;
        if (explicit) return Number(explicit);
        const group = el.closest<HTMLElement>("[data-reveal-group]");
        if (!group) return 0;
        const sibs = Array.from(group.querySelectorAll<HTMLElement>("[data-reveal]"));
        const idx = sibs.indexOf(el);
        return idx > 0 ? idx * 90 : 0;
      })();

      el.animate([from, TO], {
        duration: 700,
        delay: groupDelay,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "both",
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            play(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    const initAndObserve = (el: HTMLElement) => {
      if (animated.has(el)) return;
      const rect = el.getBoundingClientRect();
      // If element is already on screen at mount, animate it immediately.
      if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
        play(el);
        return;
      }
      // Otherwise mark it as hidden until observer fires.
      el.setAttribute("data-reveal-init", "0");
      observer.observe(el);
    };

    const scan = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(initAndObserve);
    };

    scan();

    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
