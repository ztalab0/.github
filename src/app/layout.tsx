import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ztalab.com"),
  title: {
    default: "ZTA LAB | Modern Digital Engineering & AI Agency",
    template: "%s | ZTA LAB",
  },
  description:
    "ZTA LAB is an award-winning digital engineering agency specializing in custom Next.js web applications, AI automation workflows, high-availability cloud DevOps, and brand design systems.",
  keywords: [
    "ZTA LAB",
    "Digital Agency",
    "Web Engineering",
    "Next.js Agency",
    "AI Automation",
    "UI/UX Design",
    "Cloud DevOps",
    "Software Engineering",
    "Brand Strategy",
    "Full Stack Development",
  ],
  authors: [{ name: "ZTA LAB", url: "https://ztalab.com" }],
  creator: "ZTA LAB",
  publisher: "ZTA LAB",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ZTA LAB | Modern Digital Engineering & AI Agency",
    description:
      "Fueling business growth with cutting-edge web engineering, AI workflow automation, cloud DevOps, and brand design systems.",
    url: "https://ztalab.com",
    siteName: "ZTA LAB",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 628,
        alt: "ZTA LAB - Digital Engineering & AI Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZTA LAB | Modern Digital Engineering & AI Agency",
    description:
      "Architecting high-performance web software, AI automation, and digital brand product systems.",
    images: ["/og-image.png"],
    creator: "@ztalab",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ZTA LAB",
  url: "https://ztalab.com",
  logo: "https://ztalab.com/logo.png",
  image: "https://ztalab.com/og-image.png",
  description:
    "ZTA LAB is an award-winning digital engineering agency specializing in custom web applications, AI automation workflows, cloud infrastructure, and brand identity.",
  telephone: "+1-603-555-0123",
  email: "hello@ztalab.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "House 178/196, Avenue 01, Uttara DOHS",
    addressLocality: "Dhaka",
    addressCountry: "Bangladesh",
  },
  sameAs: [
    "https://facebook.com",
    "https://instagram.com",
    "https://linkedin.com",
    "https://twitter.com",
  ],
  priceRange: "$$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
