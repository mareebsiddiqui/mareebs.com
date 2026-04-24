import type { Metadata } from "next";
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
  other: { "theme-color": "#050510" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
