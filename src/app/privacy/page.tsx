import { ArrowLeft, Shield } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn about how ZTA Lab collects, protects, and manages your personal and business data.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Top Navigation */}
      <header className="border-b border-border/60 bg-card/60 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/LOGO/SVG Lgos/Brand Color 2.svg"
              alt="ZTA Lab Logo"
              width={120}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <Shield className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Legal & Compliance
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-10 pb-6 border-b border-border/60">
          Last Updated: March 2026 • Effective Date: January 1, 2025
        </p>

        <article className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              1. Overview
            </h2>
            <p>
              At <strong>ZTA Lab</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;,
              or &ldquo;us&rdquo;), we take your privacy seriously. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              personal information when you visit our website at{" "}
              <a
                href="https://ztalab.com"
                className="text-primary hover:underline"
              >
                ztalab.com
              </a>
              , engage our digital agency and software engineering services, or
              communicate with our team.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              2. Information We Collect
            </h2>
            <p>
              We may collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contact Information:</strong> Your name, email address,
                phone number, company name, and location when you submit
                inquiries through our contact form, email, or WhatsApp.
              </li>
              <li>
                <strong>Project Specifications:</strong> Details about your
                software requirements, website objectives, digital marketing
                budgets, and technical scope.
              </li>
              <li>
                <strong>Technical & Usage Data:</strong> Anonymized analytical
                data, including browser type, operating system, referring URLs,
                device information, and pages viewed, to improve site
                performance and user experience.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              3. How We Use Your Information
            </h2>
            <p>
              We use the collected information for the following legitimate
              business purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Delivering bespoke web development, custom software engineering,
                and digital growth services.
              </li>
              <li>
                Responding promptly to requests, proposals, consultations, and
                technical support inquiries.
              </li>
              <li>
                Maintaining code security, preventing unauthorized access, and
                monitoring website uptime.
              </li>
              <li>
                Complying with contractual obligations and applicable
                international legal standards.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              4. Data Protection & Security
            </h2>
            <p>
              We implement industry-standard encryption protocols (HTTPS/TLS)
              and secure hosting configurations to protect your personal and
              business data. Access to confidential client materials is strictly
              limited to authorized engineers and project managers under mutual
              non-disclosure agreements (NDAs).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              5. Third-Party Services & Analytics
            </h2>
            <p>
              We do not sell, rent, or trade your personal data. We may utilize
              reputable third-party infrastructure providers (such as
              Cloudflare, Google Analytics, or GitHub Pages) strictly to host
              and evaluate our site&rsquo;s performance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              6. Your Rights
            </h2>
            <p>
              Depending on your jurisdiction (such as GDPR in Europe or
              CCPA/CPRA in the United States), you have the right to request
              access to, correction of, or deletion of your personal data. To
              exercise these rights, please contact our privacy compliance team.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              7. Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding this Privacy
              Policy, please contact us at:
            </p>
            <div className="p-4 rounded-xl bg-card border border-border/80 text-sm space-y-1">
              <p className="font-bold text-foreground">
                ZTA Lab Legal & Compliance
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@ztalab.com"
                  className="text-primary hover:underline"
                >
                  info@ztalab.com
                </a>
              </p>
              <p>Address: 900 Greek Row Drive, Arlington, TX 76013, USA</p>
              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/8801881064859"
                  className="text-primary hover:underline"
                >
                  +880 1881-064859
                </a>
              </p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
