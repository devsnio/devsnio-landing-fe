import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "devsnio — AI & Software Development Agency",
  description:
    "We build AI-powered software, custom web apps, SaaS products, and automation systems. From idea to launch — fast, clean, and scalable.",
  keywords: [
    "AI development",
    "AI automation",
    "custom software development",
    "SaaS development",
    "web app development",
    "devsnio",
  ],
  authors: [{ name: "devsnio" }],
  creator: "devsnio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devsnio.com",
    siteName: "devsnio",
    title: "devsnio — AI & Software Development Agency",
    description:
      "We build AI-powered software, custom web apps, SaaS products, and automation systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "devsnio — AI & Software Development Agency",
    description:
      "We build AI-powered software, custom web apps, SaaS products, and automation systems.",
    creator: "@devsnio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-full antialiased font-[family-name:var(--font-geist-sans)]">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
