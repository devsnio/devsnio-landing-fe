"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Services",        href: "/#services" },
  { label: "Case Studies",    href: "/case-studies" },
  { label: "Hire Developers", href: "/hire-developers" },
  { label: "Contact",         href: "/contact"   },
];

export function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Main header ── */}
      <header
        className={cn(
          "fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          scrolled
            ? "top-3 left-3 right-3 sm:left-5 sm:right-5"
            : "top-0 left-0 right-0"
        )}
      >
        <div
          className={cn(
            "max-w-6xl mx-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
            scrolled
              ? "h-14 rounded-2xl px-5"
              : "h-16 bg-transparent px-4 sm:px-6"
          )}
          style={scrolled ? {
            background: "rgba(255, 255, 255, 0.38)",
            backdropFilter: "blur(8px) saturate(150%)",
            WebkitBackdropFilter: "blur(8px) saturate(150%)",
            // border: "1px solid rgba(255, 255, 255, 0.6)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
          } : undefined}
        >
          {/* Logo */}
          <a href="/" className="flex items-center select-none flex-shrink-0" aria-label="devsnio home">
            <Image
              src="/logo.svg"
              alt="devsnio"
              width={120}
              height={28}
              priority
              className={cn("w-auto transition-all duration-500", scrolled ? "h-5" : "h-7")}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative group px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-xl",
                    active
                      ? "text-black bg-zinc-100"
                      : "text-zinc-600 hover:text-black hover:bg-zinc-100"
                  )}
                >
                  {l.label}
                  {/* Orange dot indicator */}
                  <span
                    className={cn(
                      "absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF751F] transition-transform duration-200 origin-center",
                      active ? "scale-100" : "scale-0 group-hover:scale-100"
                    )}
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className={cn(
                "hidden md:inline-flex items-center gap-2 rounded-full font-semibold bg-black text-white hover:bg-zinc-800 transition-all duration-300 cursor-pointer group",
                scrolled ? "h-9 px-5 text-xs" : "h-11 px-6 text-sm"
              )}
            >
              Get in Touch
              <ArrowUpRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                "md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200",
                scrolled ? "bg-zinc-100 hover:bg-zinc-200" : "bg-white/80 hover:bg-white"
              )}
            >
              <Menu size={18} className="text-zinc-800" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer overlay ── */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-all duration-300",
          open ? "visible" : "invisible pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={cn(
            "absolute top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white flex flex-col shadow-2xl transition-transform duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-zinc-100 flex-shrink-0">
            <Image src="/logo.svg" alt="devsnio" width={100} height={24} className="h-6 w-auto" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-700 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Nav links — staggered slide-up */}
          <div className="flex flex-col px-6 pt-6 flex-1">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "group flex items-center justify-between py-4 border-b border-zinc-100 transition-all duration-300",
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: open ? `${100 + i * 55}ms` : "0ms" }}
              >
                <span className="text-3xl font-black text-black group-hover:text-zinc-600 transition-colors duration-200">
                  {l.label}
                </span>
                <span className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF751F] group-hover:border-[#FF751F] transition-all duration-200">
                  <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-white transition-colors duration-200" />
                </span>
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={cn(
              "px-6 pb-8 pt-6 flex-shrink-0 transition-all duration-300",
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: open ? `${100 + links.length * 55}ms` : "0ms" }}
          >
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 h-14 w-full rounded-full bg-black text-white text-base font-semibold hover:bg-zinc-800 transition-colors cursor-pointer group"
            >
              Start a Project
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="text-center text-xs text-zinc-400 mt-3">No commitments. Just a conversation.</p>
          </div>
        </div>
      </div>
    </>
  );
}
