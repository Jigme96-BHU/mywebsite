import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/caseStudies";

const SITE_URL = "https://sproutweb.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    ...CASE_STUDIES.map((cs) => ({
      url: `${SITE_URL}/work/${cs.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
