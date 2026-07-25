import type { Metadata } from "next";
import { Syne, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import AmbientBackground from "@/components/AmbientBackground";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const SITE_URL = "https://tamilarasan-s.dev"; // TODO: replace with final portfolio domain

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tamilarasan S | AI & Machine Learning Portfolio",
  description:
    "Artificial Intelligence & Data Science undergraduate specializing in Machine Learning, Computer Vision, IoT, and AI-powered software development. Explore projects, experience, and technical skills.",
  keywords: [
    "Tamilarasan S",
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Deep Learning",
    "IoT",
    "AI Developer Portfolio",
    "Data Science"
  ],
  authors: [{ name: "Tamilarasan S" }],
  creator: "Tamilarasan S",
  alternates: {
    canonical: SITE_URL // TODO: replace with final canonical URL once deployed
  },
  openGraph: {
    title: "Tamilarasan S | AI & Machine Learning Portfolio",
    description:
      "Artificial Intelligence & Data Science undergraduate specializing in Machine Learning, Computer Vision, IoT, and AI-powered software development.",
    url: SITE_URL,
    siteName: "Tamilarasan S Portfolio",
    images: [
      {
        url: "/og-image.png", // TODO: add final Open Graph image (1200x630)
        width: 1200,
        height: 630,
        alt: "Tamilarasan S — AI & Machine Learning Developer"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamilarasan S | AI & Machine Learning Portfolio",
    description:
      "Artificial Intelligence & Data Science undergraduate specializing in Machine Learning, Computer Vision, IoT, and AI-powered software development.",
    images: ["/og-image.png"] // TODO: add final Open Graph image
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="bg-bg text-text-primary overflow-x-hidden selection:bg-accent selection:text-black">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 focus:translate-y-0 bg-accent text-bg px-4 py-2 rounded-md font-medium transition-transform"
        >
          Skip to content
        </a>
        <SmoothScrollProvider>
          <AmbientBackground />
          <div className="grain-overlay" aria-hidden="true" />
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
