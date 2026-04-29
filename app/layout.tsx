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
  title:
    "Areeb Siddiqui — Expert Engineering Guidance Without the Enterprise Price Tag",
  description:
    "Specific, battle-tested engineering answers from 13 years of hands-on experience. Not a chatbot. Not a $10K/month consultancy. The expert middle ground.",
  openGraph: {
    title:
      "Areeb Siddiqui — Expert Engineering Guidance Without the Enterprise Price Tag",
    description:
      "Specific, battle-tested engineering answers from 13 years of hands-on experience. Not a chatbot. Not a $10K/month consultancy. The expert middle ground.",
    type: "website",
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
