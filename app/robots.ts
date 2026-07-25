import type { MetadataRoute } from "next";

const SITE_URL = "https://tamilarasan-s.dev"; // TODO: replace with final portfolio domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${SITE_URL}/sitemap.xml`
  };
}
