import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mareebs.com"),
  title: "Fractional CTO for Startups | Areeb Siddiqui",
  description:
    "Fractional CTO who's driven 60% revenue growth and eliminated 90% of production errors. 13+ years shipping systems at Wise, Dubizzle, and 3 more. Book a strategy call.",
  openGraph: {
    title: "Fractional CTO for Startups | Areeb Siddiqui",
    description:
      "Fractional CTO who's driven 60% revenue growth and eliminated 90% of production errors. 13+ years shipping systems at Wise, Dubizzle, and 3 more. Book a strategy call.",
    url: "https://mareebs.com",
    type: "website",
    images: [
      {
        url: "/img/me.jpeg",
        width: 140,
        height: 140,
        alt: "Areeb Siddiqui",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Fractional CTO for Startups | Areeb Siddiqui",
    description:
      "Fractional CTO who's driven 60% revenue growth and eliminated 90% of production errors. 13+ years shipping systems at Wise, Dubizzle, and 3 more. Book a strategy call.",
    images: ["/img/me.jpeg"],
  },
  other: { "color-scheme": "dark light" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="theme-color" content="#050510" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://mareebs.com/#person",
                  name: "Areeb Siddiqui",
                  jobTitle: "Fractional CTO & Platform Engineer",
                  url: "https://mareebs.com",
                  image: "https://mareebs.com/img/me.jpeg",
                  email: "mohammadareebs@gmail.com",
                  description:
                    "Fractional CTO with 13+ years of experience. Driven 60% revenue growth at Dubizzle and eliminated 90% of production errors at SWVL.",
                  sameAs: [
                    "https://github.com/mareebsiddiqui",
                    "https://www.linkedin.com/in/mareebsiddiqui/",
                  ],
                  worksFor: { "@type": "Organization", name: "Wise" },
                  knowsAbout: [
                    "Platform Engineering",
                    "Full-Stack Development",
                    "DevOps",
                    "System Architecture",
                    "Kubernetes",
                    "React",
                    "Next.js",
                    "Django",
                  ],
                  hasOccupation: {
                    "@type": "Occupation",
                    name: "Fractional CTO",
                    description:
                      "Senior engineering leadership for startups - architecture, DevOps, full-stack development, and team mentoring.",
                  },
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://mareebs.com/#service",
                  name: "Fractional CTO Services by Areeb Siddiqui",
                  description:
                    "Fractional CTO services for startups: full-stack development, platform engineering, architecture design, and technical mentoring.",
                  url: "https://mareebs.com",
                  provider: { "@id": "https://mareebs.com/#person" },
                  areaServed: "Worldwide",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "CTO Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Full-Stack Development",
                          description:
                            "Production-ready MVP development across the full stack.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Platform & DevOps",
                          description:
                            "CI/CD, Kubernetes, and observability setup.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Architecture Design",
                          description:
                            "System architecture for your team size and growth stage.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Code Reviews & Mentoring",
                          description:
                            "Pair sessions, code review standards, and engineering mentorship.",
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://mareebs.com/#website",
                  url: "https://mareebs.com",
                  name: "Areeb Siddiqui - Fractional CTO",
                  publisher: { "@id": "https://mareebs.com/#person" },
                  inLanguage: "en",
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "b0604cb47c4e4c5f98a8a758c6111068"}'
        />
      </body>
    </html>
  );
}
