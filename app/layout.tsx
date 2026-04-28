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
  title: "Areeb Siddiqui — Platform Engineer",
  description:
    "Platform Engineer at Wise. 10+ years shipping data platforms, real-time systems, and products that move business metrics.",
  openGraph: {
    title: "Areeb Siddiqui — Platform Engineer",
    description:
      "Platform Engineer at Wise. 10+ years shipping data platforms, real-time systems, and products that move business metrics.",
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
