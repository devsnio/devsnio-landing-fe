import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Mail, MessageSquare } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "AI Automation", href: "/#services" },
    { label: "AI Development", href: "/#services" },
    { label: "Custom Software", href: "/#services" },
    { label: "SaaS Building", href: "/#services" },
  ],
  Company: [
    { label: "About", href: "/#why-us" },
    { label: "Process", href: "/#process" },
    { label: "Contact Us", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand — spans 2 cols */}
          <div className="col-span-2">
            <a href="/" className="inline-block mb-4 select-none" aria-label="devsnio home">
              <Image
                src="/logo.svg"
                alt="devsnio"
                width={110}
                height={25}
                className="h-6 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-sm leading-relaxed max-w-xs mb-5">
              AI-first development agency. We build fast, clean, and scalable
              software for ambitious teams worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:hello@devsnio.com"
                className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-white transition-colors bg-zinc-900 px-3 py-2 rounded-lg"
              >
                <Mail size={12} />
                hello@devsnio.com
              </a>
              <a
                href="https://wa.me/880"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-white transition-colors bg-zinc-900 px-3 py-2 rounded-lg"
              >
                <MessageSquare size={12} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, items]) => (
            <div key={group}>
              <p className="text-white text-sm font-semibold mb-4">{group}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-zinc-800 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} devsnio. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-zinc-400 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-zinc-400 transition-colors">Terms</a>
            <a href="/cookies" className="hover:text-zinc-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
