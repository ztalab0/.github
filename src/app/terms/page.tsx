import { ArrowLeft, FileText } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms, conditions, and service agreement for ZTA Lab digital agency and engineering solutions.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsConditions() {
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
            <FileText className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Service Agreement
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-muted-foreground mb-10 pb-6 border-b border-border/60">
          Last Updated: March 2026 • Effective Date: January 1, 2025
        </p>

        <article className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the website of <strong>ZTA Lab</strong>{" "}
              (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) or
              commissioning our engineering, web design, or digital marketing
              services, you agree to be bound by these Terms and Conditions. If
              you do not agree with any part of these terms, please discontinue
              use of our site and services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              2. Scope of Services
            </h2>
            <p>
              ZTA Lab provides professional digital agency solutions, including
              web development, mobile application engineering, custom software
              solutions, AI system integrations, UI/UX design, and digital
              marketing consulting. Specific deliverables, milestones, and
              project timelines are governed by individual client Statements of
              Work (SOW) or contractual agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              3. Intellectual Property Rights
            </h2>
            <p>
              All proprietary branding, trademarks, logos, website copy, and
              custom visual assets displayed on ztalab.com are the exclusive
              intellectual property of ZTA Lab.
            </p>
            <p>
              Upon complete payment of all project fees, ownership of bespoke
              source code and customized deliverables specified in the client
              contract will be assigned to the client according to the
              agreed-upon contract terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              4. Client Responsibilities
            </h2>
            <p>
              Clients agree to provide accurate project specifications,
              necessary media assets, API credentials, and timely feedback
              required for ZTA Lab to execute contracted work according to
              scheduled project milestones.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              5. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, ZTA Lab shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from the use or inability to use our
              website, services, or third-party platforms integrated into client
              projects.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              6. Governing Law
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of the State of Texas, United States,
              without regard to its conflict of law principles.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              7. Contact Information
            </h2>
            <p>
              For any legal or contractual inquiries regarding these terms,
              please contact:
            </p>
            <div className="p-4 rounded-xl bg-card border border-border/80 text-sm space-y-1">
              <p className="font-bold text-foreground">ZTA Lab Legal Team</p>
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
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
