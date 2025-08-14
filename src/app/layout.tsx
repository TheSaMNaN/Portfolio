import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from "next/font/google";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const firaCode = Fira_Code({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_BASEURL!),

  title: "Samnan Abdul Jaleel",
  description: "Full-Stack Developer",
  alternates: {
    canonical: process.env.NEXT_BASEURL,
  },
  openGraph: {
    url: process.env.NEXT_BASEURL,
    title: "Samnan Abdul Jaleel",
    description: "Full-Stack Developer",
    images: [
      {
        url: `{process.env.NEXT_BASEURL}/images/og-image.webp`,
        width: 1200,
        height: 640,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: process.env.NEXT_BASEURL,
    title: "Samnan Abdul Jaleel",
    description: "Full-Stack Developer",
    images: `{process.env.NEXT_BASEURL}/images/og-image.webp`,
  },

  authors: [
    {
      name: "Samnan Abdul Jaleel",
    },
  ],
  keywords: [
    "Portfolio",
    "ReactJS",
    "NextJS",
    "Web Developer",
    "Software Engineer",
    "Samnan Abdul Jaleel",
  ],
  icons: {
    icon: "/icons/samnanjaleel.svg",
    shortcut: "/icons/samnanjaleel.svg",
    apple: "/icons/samnanjaleel.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>

      </head>
      <body className={`${firaCode.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>

      <GoogleAnalytics gaId="G-BHL50EQXC8" />
    </html>
  );
}
