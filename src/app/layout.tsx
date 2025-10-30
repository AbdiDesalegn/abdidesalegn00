import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abdi Desalegn - Portfolio",
    template: "%s | Abdi Desalegn"
  },
  description:
    "Computer Science and Engineering graduate passionate about development, physics, and cybersecurity.",
  keywords: [
    "Abdi Desalegn",
    "Abdi",
    "Desalegn",
    "AbdiDesalegn",
    "software engineer",
    "web developer",
    "MERN",
    "React",
    "Next.js",
    "cybersecurity",
    "computational physics",
    "portfolio",
    "Ethiopia"
  ],
  authors: [{ name: "Abdi Desalegn" }],
  creator: "Abdi Desalegn",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://abdidesalegn.vercel.app"
  ),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Abdi Desalegn - Portfolio",
    description:
      "Computer Science and Engineering graduate passionate about development, physics, and cybersecurity.",
    siteName: "Abdi Desalegn",
    images: [
      {
        url: "/profile-photo.png",
        width: 1200,
        height: 630,
        alt: "Abdi Desalegn"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdi Desalegn - Portfolio",
    description:
      "Computer Science and Engineering graduate passionate about development, physics, and cybersecurity.",
    images: ["/profile-photo.png"]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
