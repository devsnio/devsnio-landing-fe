import type { LucideIcon } from "lucide-react";
import { ShoppingBag, Stethoscope, Wallet } from "lucide-react";

export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  industry: string;
  icon: LucideIcon;
  color: string;
  description: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  year: string;
  /* Detail-page extras */
  client?: string;
  duration?: string;
  team?: string;
  challenge: string[];
  solution: string[];
  outcome: string[];
  features?: string[];
  testimonial?: { quote: string; author: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "storenio",
    name: "Storenio",
    tagline: "A Shopify-style F-commerce builder for Bangladesh",
    industry: "E-commerce · SaaS",
    icon: ShoppingBag,
    color: "#1B1F3B",
    description:
      "A no-code F-commerce platform that lets Bangladeshi merchants launch online stores in minutes. SSLCommerz, bKash & Nagad checkout, multi-language storefronts, and integrated courier shipping (Pathao, Steadfast) — all out of the box.",
    metrics: [
      { value: "500+", label: "Stores live" },
      { value: "50k", label: "Monthly orders" },
      { value: "99.9%", label: "Uptime" },
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS", "Stripe", "SSLCommerz"],
    year: "2024",
    client: "Storenio (devsnio product)",
    duration: "6 months MVP, ongoing",
    team: "4 engineers, 1 designer, 1 PM",
    challenge: [
      "Bangladeshi merchants were stuck choosing between expensive global SaaS (Shopify) that didn't support local payment rails, or DIY WordPress setups that were fragile and slow.",
      "Existing local solutions had clunky UX, poor mobile performance, and no support for the courier APIs every F-commerce business depends on.",
    ],
    solution: [
      "Built a multi-tenant SaaS platform on Next.js + PostgreSQL with subdomain-per-store architecture and edge-rendered storefronts.",
      "Native integrations with SSLCommerz, bKash, Nagad, Pathao, and Steadfast — abstracted behind a single checkout SDK.",
      "Drag-and-drop store builder with a Bengali-first UI, mobile editor, and 20+ pre-designed themes.",
      "Self-serve onboarding flow that gets a merchant from signup to first sale in under an hour.",
    ],
    outcome: [
      "500+ merchants live within 9 months of launch.",
      "Average store launches in 47 minutes from signup.",
      "Platform processes 50k+ orders/month with 99.9% uptime over 12 months.",
      "Featured by local startup ecosystem as a top emerging F-commerce enabler.",
    ],
    features: [
      "Multi-tenant subdomain architecture",
      "Drag-and-drop theme editor",
      "SSLCommerz, bKash, Nagad checkout",
      "Pathao + Steadfast shipping APIs",
      "Inventory & SKU management",
      "Discount engine + abandoned cart recovery",
      "Multi-language (Bengali + English)",
      "Order analytics dashboard",
    ],
  },
  {
    slug: "dentoeasy",
    name: "dentoEasy",
    tagline: "End-to-end clinic OS for dental practices",
    industry: "HealthTech · Practice Management",
    icon: Stethoscope,
    color: "#0E3A35",
    description:
      "A complete dental clinic management suite — appointment scheduling, patient records with x-ray imaging, treatment plans, prescriptions, billing, and SMS/WhatsApp reminders. HIPAA-aligned, multi-clinic support, dentist & receptionist dashboards.",
    metrics: [
      { value: "50+", label: "Clinics onboarded" },
      { value: "100k+", label: "Appointments" },
      { value: "30%", label: "Less admin time" },
    ],
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "AWS S3", "Twilio", "Stripe"],
    year: "2024",
    client: "Private dental network",
    duration: "8 months",
    team: "5 engineers, 2 designers, 1 healthcare consultant",
    challenge: [
      "The client's growing chain of dental clinics was juggling 6+ disconnected tools — Google Calendar for bookings, Excel for patient records, paper for prescriptions, and a separate billing app.",
      "Patient no-shows were costing 18% of revenue. Receptionists spent half their day on phone follow-ups.",
      "Compliance and patient data security were becoming risks as the clinic network expanded.",
    ],
    solution: [
      "Built a unified clinic OS with role-based dashboards for dentists, receptionists, and clinic admins.",
      "Patient records with x-ray imaging (DICOM), treatment timelines, and digital prescriptions exportable to PDF.",
      "Automated SMS + WhatsApp reminder engine via Twilio with smart scheduling around dentist availability.",
      "End-to-end encrypted patient data, audit logs, and HIPAA-aligned hosting on AWS.",
    ],
    outcome: [
      "50+ clinics onboarded across 3 cities.",
      "100k+ appointments managed with a 41% drop in no-show rate.",
      "Receptionists report 30% reduction in admin time per shift.",
      "Now used by 200+ dentists and 80+ receptionists daily.",
    ],
    features: [
      "Multi-clinic architecture",
      "Patient records with DICOM x-rays",
      "Smart appointment scheduling",
      "Digital prescriptions",
      "SMS + WhatsApp reminders",
      "Insurance claim tracking",
      "Billing & invoicing",
      "Inventory for dental supplies",
    ],
    testimonial: {
      quote:
        "We went from chaos to one screen for everything. Our receptionists got their evenings back.",
      author: "Dr. Faria Hasan",
      role: "Founder, partner clinic network",
    },
  },
  {
    slug: "fintech-aggregator",
    name: "Fintech Aggregator",
    tagline: "One API for every payment method in Bangladesh",
    industry: "FinTech · Payments",
    icon: Wallet,
    color: "#3D1733",
    description:
      "A unified payment aggregator that lets merchants accept bKash, Nagad, Rocket, SSLCommerz, and direct bank transfers through a single REST API. Smart routing, fraud detection, automated reconciliation, and a developer-first SDK.",
    metrics: [
      { value: "12", label: "Payment methods" },
      { value: "5M+", label: "Tx / month" },
      { value: "<100ms", label: "p95 latency" },
    ],
    stack: ["Go", "Redis", "PostgreSQL", "Kafka", "Kubernetes", "Terraform"],
    year: "2025",
    client: "Series-A fintech startup",
    duration: "10 months",
    team: "6 engineers, 1 SRE, 1 product designer",
    challenge: [
      "Every merchant in Bangladesh integrating online payments has to wire up 4–6 different SDKs (bKash, Nagad, Rocket, SSLCommerz, banks) — each with its own API quirks, downtime windows, and reconciliation format.",
      "Existing aggregators were either expensive, US-focused, or didn't support all local rails.",
      "Failed payments were eating 6–8% of merchant revenue due to gateway downtime and no smart routing.",
    ],
    solution: [
      "Built a unified payment API in Go that abstracts every Bangladeshi rail behind one consistent interface.",
      "Smart routing that detects gateway downtime in real time and re-routes transactions automatically.",
      "Fraud detection layer using rule engines + ML scoring on velocity, geography, and behavioural signals.",
      "Auto-reconciliation engine that matches settlements across all gateways into a single ledger.",
      "Developer-first SDKs in JS, PHP, Python with sandbox + live environments.",
    ],
    outcome: [
      "Powering 5M+ transactions per month across 200+ merchants.",
      "Reduced failed-payment rate by 73% via smart routing.",
      "p95 API latency consistently under 100ms.",
      "Acquired 3 enterprise clients within 6 months of launch.",
    ],
    features: [
      "Unified REST API for all rails",
      "Smart routing & failover",
      "Fraud detection (rules + ML)",
      "Auto-reconciliation engine",
      "Developer SDKs (JS, PHP, Python)",
      "Sandbox + live environments",
      "Webhook event system",
      "Dashboard with real-time analytics",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
