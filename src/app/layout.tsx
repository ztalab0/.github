import type { Metadata } from "next";
import { Alatsi, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const alatsi = Alatsi({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alatsi",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ztalab.com"),
  title: {
    default: "ZTA Lab | Creative Technology & Digital Agency",
    template: "%s | ZTA Lab",
  },
  description:
    "At ZTA Lab, we craft high-performance websites, powerful applications, and data-driven digital marketing strategies to help businesses scale faster.",
  keywords: [
    "ZTA Lab",
    "ZTA LAB",
    "Digital Agency",
    "Website Design",
    "Website Development",
    "App Development",
    "Digital Marketing",
    "SEO Optimization",
    "Software Engineering",
    "Dhaka Agency",
  ],
  authors: [{ name: "ZTA Lab", url: "https://ztalab.com" }],
  creator: "ZTA Lab",
  publisher: "ZTA Lab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ZTA Lab | Creative Technology & Digital Agency",
    description:
      "We craft high-performance websites, powerful applications, and data-driven digital marketing strategies.",
    url: "https://ztalab.com",
    siteName: "ZTA Lab",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 628,
        alt: "ZTA Lab - Creative Technology & Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZTA Lab | Creative Technology & Digital Agency",
    description:
      "We craft high-performance websites, powerful applications, and data-driven digital marketing strategies.",
    images: [
      "/og-image.jpeg",
      "/assets/LOGO/PNG Logo without BG/Brand Color 1 (WtB).png",
    ],
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
    icon: "/assets/LOGO/SVG Lgos/Brand Color 2.svg",
    shortcut: "/assets/LOGO/SVG Lgos/Brand Color 2.svg",
    apple: "/assets/LOGO/PNG Logo without BG/Brand Color 1 (WtB).png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ZTA Lab",
  url: "https://ztalab.com",
  logo: "https://ztalab.com/assets/LOGO/SVG%20Lgos/Brand%20Color%202.svg",
  image: "https://ztalab.com/og%2Dimage.jpeg",
  description:
    "ZTA Lab is a creative technology agency founded by a team of passionate engineers and digital strategists.",
  telephone: "+8801976540046",
  email: "info@ztalab.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "Bangladesh",
  },
  sameAs: [
    "https://facebook.com",
    "https://instagram.com",
    "https://linkedin.com",
    "https://wa.me/8801976540046",
  ],
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
        alatsi.variable,
        poppins.variable,
        "font-sans",
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
