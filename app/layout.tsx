import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://tamilarasan-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tamilarasan S — AI Engineer & Data Analyst",
  description:
    "Tamilarasan S — Final-year AI & Data Science student. Building intelligent, data-driven applications in machine learning, computer vision, and IoT.",
  keywords: [
    "Tamilarasan S",
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Data Science",
    "Deep Learning",
    "IoT",
    "AI Developer Portfolio"
  ],
  authors: [{ name: "Tamilarasan S" }],
  creator: "Tamilarasan S",
  openGraph: {
    title: "Tamilarasan S — AI Engineer & Data Analyst",
    description:
      "Artificial Intelligence & Data Science student specializing in Machine Learning, Computer Vision, IoT, and AI-powered software development.",
    url: SITE_URL,
    siteName: "Tamilarasan S Portfolio",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

