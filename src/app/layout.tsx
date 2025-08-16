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

const baseURL = process.env.NEXT_BASEURL || "http://localhost";
export const metadata: Metadata = {
  metadataBase: new URL(baseURL),

  title: "Samnan Abdul Jaleel",
  description: "Full-Stack Developer",
  alternates: {
    canonical: baseURL,
  },
  openGraph: {
    url: baseURL,
    title: "Samnan Abdul Jaleel",
    description: "Full-Stack Developer",
    images: [
      {
        url: `${baseURL}/images/landing-1.png`,
        width: 1200,
        height: 640,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: baseURL,
    title: "Samnan Abdul Jaleel",
    description: "Full-Stack Developer",
    images: `${baseURL}/images/landing-1.png`,
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
