import { PLOTS } from "./data";

export type CaseStudy = {
  slug: string;
  name: string;
  index: string;
  sector: string;
  loc: string;
  year: string;
  url: string;
  inProgress: boolean;
  summary: string;
  stack: string[];
  scope: string[];
  sections: { label: string; heading: string; body: string }[];
  outcomes: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "canberra-property-partners",
    name: "Canberra Property Partners",
    index: "01",
    sector: "Real estate",
    loc: "Canberra ACT",
    year: "2025",
    url: "https://www.canberrapropertypartners.com.au/",
    inProgress: false,
    summary:
      "A custom platform for an award-winning property management agency — with an AI maintenance chatbot that works the hours property managers can't.",
    stack: ["Next.js", "React", "AI chatbot", "SEO"],
    scope: ["Design", "Development", "AI integration", "SEO", "Hosting"],
    sections: [
      {
        label: "The ground",
        heading: "Property management never sleeps",
        body: "Maintenance requests don't keep office hours — a burst pipe at 11pm needs an answer at 11pm. Canberra Property Partners were running a serious, growing agency on a website that neither reflected their standing nor lifted any of that after-hours weight.",
      },
      {
        label: "The build",
        heading: "A site that answers the phone",
        body: "We designed and built a custom Next.js platform around their two audiences — landlords weighing up an agency, and tenants who need something fixed. The centrepiece is an AI maintenance chatbot trained on the agency's own processes: it triages requests, captures the details a property manager actually needs, and does it at any hour. Around it, a fast, search-optimised site built to convert landlord enquiries.",
      },
      {
        label: "The outcome",
        heading: "Nationally recognised innovation",
        body: "The chatbot became part of the agency's story: work we built contributed to their recognition at the REIA National Awards for innovation. The site now handles maintenance intake around the clock, and the agency's web presence finally matches the calibre of the business.",
      },
    ],
    outcomes: [
      "REIA National Awards — innovation recognition",
      "AI chatbot triaging maintenance 24/7",
      "Custom Next.js build, SEO-optimised",
    ],
  },
  {
    slug: "littlebuddhas",
    name: "LittleBuddhas Dharma School",
    index: "02",
    sector: "Education",
    loc: "Canberra ACT",
    year: "2025",
    url: "https://little-buddha-nine.vercel.app/",
    inProgress: false,
    summary:
      "A calm, visually rich home for a Canberra Buddhist school — a website that practises what the school teaches.",
    stack: ["Next.js", "React", "Vercel"],
    scope: ["Design", "Development", "Content", "Hosting"],
    sections: [
      {
        label: "The ground",
        heading: "Mindfulness is hard to fake",
        body: "A dharma school teaching mindfulness and compassion can't live on a noisy, template-built website — the medium would contradict the message. The school needed an online home that felt like walking into the room: quiet, warm, and unhurried, while still giving families the practical details they came for.",
      },
      {
        label: "The build",
        heading: "Designing for stillness",
        body: "We built the site around restraint: a soft, contemplative palette, generous space, and imagery of the school's own community rather than stock photography. Underneath the calm surface sits a practical structure — programs, term information, and enrolment pathways are never more than a step away.",
      },
      {
        label: "The outcome",
        heading: "A room the community recognises",
        body: "The school now has a web presence that reflects its philosophy instead of fighting it. Families get the information they need without friction, and the site carries the school's voice — mindful, welcoming, unmistakably theirs.",
      },
    ],
    outcomes: [
      "A visual language matched to the school's philosophy",
      "Clear enrolment and program pathways",
      "Fully custom design — no templates",
    ],
  },
  {
    slug: "bedurya",
    name: "Bedurya Community Care",
    index: "03",
    sector: "Community care",
    loc: "ACT & Queanbeyan",
    year: "2026",
    url: "https://www.bedurya.com.au/",
    inProgress: false,
    summary:
      "An accessible, trust-first website for a nurse-led NDIS and DVA community care provider in the ACT and Queanbeyan.",
    stack: ["Next.js", "React", "WCAG AA"],
    scope: ["Design", "Development", "Accessibility", "SEO"],
    sections: [
      {
        label: "The ground",
        heading: "Trust is the whole product",
        body: "Choosing an NDIS provider is a decision families make carefully, often under stress. A care provider's website has one job before any other: to be genuinely usable by the people it serves — including visitors with disability — and to earn trust in the first thirty seconds.",
      },
      {
        label: "The build",
        heading: "Accessibility as the foundation, not the audit",
        body: "We built Bedurya's site accessibility-first: semantic structure, real keyboard navigation, and plain-language content architecture that explains services the way participants and their families actually ask about them. Warm and human in tone — never clinical, never corporate.",
      },
      {
        label: "The outcome",
        heading: "Live, and built to grow",
        body: "The site is live, with clear service explanations and referral pathways for participants and their families. It's built to grow with the organisation as their community and services expand.",
      },
    ],
    outcomes: [
      "WCAG-first build from day one",
      "Plain-language NDIS services architecture",
      "Live across the ACT & Queanbeyan",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}

export function getNextCaseStudy(slug: string) {
  const i = CASE_STUDIES.findIndex((cs) => cs.slug === slug);
  return CASE_STUDIES[(i + 1) % CASE_STUDIES.length];
}

// Keep the plots list and the case studies in sync at build time.
if (process.env.NODE_ENV !== "production") {
  for (const cs of CASE_STUDIES) {
    if (!PLOTS.some((p) => p.slug === cs.slug)) {
      console.warn(`Case study "${cs.slug}" has no matching plot in data.ts`);
    }
  }
}
