import type { Metadata } from "next";
import Content from "./_modules";

const TITLE = "Projects - Samnan Abdul Jaleel";
const DESC =
  "Explore my projects, where creativity meets problem-solving. Discover innovative designs and functional solutions built with care and attention to detail.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: {
    canonical: `{process.env.NEXT_BASEURL}/projects`,
  },
  openGraph: {
    url: `{process.env.NEXT_BASEURL}/projects`,
    title: TITLE,
    description: DESC,
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
    site: `{process.env.NEXT_BASEURL}/projects`,
    title: TITLE,
    description: DESC,
    images: `{process.env.NEXT_BASEURL}/images/og-image.webp`,
  },
};

const page = () => {
  return <Content />;
};

export default page;
