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
  title: "Fractional CTO for FashionTech - DPP, AI & Supply Chain | Areeb Siddiqui",
  description:
    "Fractional CTO for FashionTech startups preparing for the 2027 EU Digital Product Passport deadline. AI infrastructure, supply chain traceability, GS1 implementation. Book a free strategy call.",
  openGraph: {
    title: "Fractional CTO for European FashionTech | Areeb Siddiqui",
    description:
      "Fractional CTO for FashionTech: AI infrastructure, DPP compliance, supply chain traceability. Billions of data events at Wise. IoT device systems at ByteCorp. Book a free strategy call.",
    url: "https://mareebs.com",
    type: "website",
    images: [
      {
        url: "/img/me.jpeg",
        alt: "Areeb Siddiqui",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional CTO for European FashionTech | Areeb Siddiqui",
    description:
      "Fractional CTO for FashionTech: AI infrastructure, DPP compliance, supply chain traceability. Billions of data events at Wise. IoT device systems at ByteCorp. Book a free strategy call.",
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
                    "Fractional CTO for European FashionTech with 13+ years of experience. AI infrastructure, DPP compliance, and supply chain data systems.",
                  sameAs: [
                    "https://github.com/mareebsiddiqui",
                    "https://www.linkedin.com/in/mareebsiddiqui/",
                  ],
                  worksFor: { "@type": "Organization", name: "Wise" },
                  knowsAbout: [
                    "EU Digital Product Passport",
                    "ESPR (Ecodesign for Sustainable Products Regulation)",
                    "GS1 EPCIS 2.0",
                    "GS1 Digital Link",
                    "Supply Chain Traceability",
                    "AI Infrastructure",
                    "IoT/NFC Data Carriers",
                    "GS1 Standards",
                    "Predictive Inventory",
                    "Data Pipeline Architecture",
                    "Platform Engineering",
                  ],
                  hasOccupation: {
                    "@type": "Occupation",
                    name: "Fractional CTO",
                    description:
                      "Senior engineering leadership for European FashionTech startups: AI infrastructure, DPP compliance, supply chain traceability, and team mentoring.",
                  },
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://mareebs.com/#service",
                  name: "Fractional CTO Services for European FashionTech",
                  description:
                    "Fractional CTO for FashionTech: AI infrastructure, EU Digital Product Passport compliance, supply chain data unification, and technical leadership.",
                  url: "https://mareebs.com",
                  provider: { "@id": "https://mareebs.com/#person" },
                  areaServed: {
                    "@type": "Place",
                    name: "European Union",
                  },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "FashionTech CTO Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "FashionTech Technical Leadership",
                          description:
                            "Fractional CTO for AI infrastructure, DPP compliance, and supply chain architecture.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "DPP Compliance Platform Build",
                          description:
                            "EU Digital Product Passport infrastructure: data carriers, GS1 standards, registry integration.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Supply Chain Data Infrastructure",
                          description:
                            "Unify fragmented supplier data into queryable, AI-ready traceability systems.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "AI Infrastructure Architecture",
                          description:
                            "Predictive inventory, virtual try-on, and hyper-personalization system design.",
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://mareebs.com/#website",
                  url: "https://mareebs.com",
                  name: "Areeb Siddiqui - Fractional CTO for European FashionTech",
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
