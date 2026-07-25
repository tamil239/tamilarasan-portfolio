import type { MetadataRoute } from "next";

const SITE_URL = "https://tamilarasan-s.dev"; // TODO: replace with final portfolio domain

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
