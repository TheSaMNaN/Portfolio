import type { Metadata } from "next";
import Content from "./_modules";

const baseURL = process.env.NEXT_BASEURL || "http://localhost";

const TITLE = "Projects - Samnan Abdul Jaleel";
const DESC =
  "Explore my projects, where creativity meets problem-solving. Discover innovative designs and functional solutions built with care and attention to detail.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: {
    canonical: `${baseURL}/projects`,
  },
  openGraph: {
    url: `${baseURL}/projects`,
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
    site: `${baseURL}/projects`,
    title: TITLE,
    description: DESC,
    images: `${baseURL}/images/landing-1.png`,
  },
};

const page = () => {
  return <Content />;
};

export default page;
