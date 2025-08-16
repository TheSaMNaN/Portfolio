import React from "react";
import Content from "./_modules";
import type { Metadata } from "next";

const baseURL = process.env.NEXT_BASEURL || "http://localhost";

const TITLE = "About - Samnan Abdul Jaleel";
const DESC =
  "Learn more about me, my journey as a front-end developer, and my passion for creating user-friendly and functional web experiences. Discover the skills and values that drive my work.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: {
    canonical: `${baseURL}/about`,
  },
  openGraph: {
    url: `${baseURL}/about`,
    title: TITLE,
    description: DESC,
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
    site: `${baseURL}/about`,
    title: TITLE,
    description: DESC,
    images: `${baseURL}/images/landing-1.png`,
  },
};

const Page = () => {
  return <Content />;
};

export default Page;
