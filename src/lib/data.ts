// ─────────────────────────────────────────────────────────
//  All site content lives here.
//  Edit this file to update copy, plots, pricing, FAQs.
// ─────────────────────────────────────────────────────────

export const AGENCY = {
  name: "Sprout Web",
  tagline: "Websites from the ground up.",
  email: "gmetharchen96@gmail.com",
  phone: "0460 730 115",
  phoneIntl: "+61460730115",
  location: "Canberra ACT, Australia",
  coords: "35.2809°S 149.1300°E",
  elevation: 578,
  timezone: "Australia/Sydney",
};

export const NAV_LINKS = [
  { index: "01", label: "Work", href: "/#work" },
  { index: "02", label: "Services", href: "/#services" },
  { index: "03", label: "Pricing", href: "/#pricing" },
  { index: "04", label: "Studio", href: "/#studio" },
  { index: "05", label: "Contact", href: "/#contact" },
];

export const HERO = {
  annotation: "Web design & development — site plan no. 001",
  lines: ["From the", "ground up"],
  statement:
    "A Canberra studio that designs, builds, and runs websites for small businesses — one monthly fee, no lock-in, nothing templated.",
  facts: ["Team of three", "Live in 14 days", "Client work: REIA Innovation Award"],
};

export const MARQUEE_ITEMS = [
  "Design",
  "Development",
  "Hosting",
  "SEO",
  "AI systems",
  "Sprout Web",
];

// Selected work — surveyed plots. `slug` links to a full
// case study; plots without one link out to the live site.
export const PLOTS = [
  {
    index: "01",
    slug: "canberra-property-partners",
    name: "Canberra Property Partners",
    sector: "Real estate",
    loc: "Canberra ACT",
    year: "2025",
    url: "https://www.canberrapropertypartners.com.au/",
    image: "/work/canberra-property-partners.jpg",
    outcome: "An AI maintenance chatbot that helped win a national innovation award.",
    inProgress: false,
    // The live site sends X-Frame-Options: DENY, so it can't be previewed inline.
    embeddable: false,
  },
  {
    index: "02",
    slug: "littlebuddhas",
    name: "LittleBuddhas Dharma School",
    sector: "Education",
    loc: "Canberra ACT",
    year: "2025",
    url: "https://little-buddha-nine.vercel.app/",
    image: "/work/littlebuddhas.jpg",
    outcome: "A calm, visually rich home for a Buddhist school's community.",
    inProgress: false,
    embeddable: true,
  },
  {
    index: "03",
    slug: "bedurya",
    name: "Bedurya Community Care",
    sector: "Community care",
    loc: "ACT & Queanbeyan",
    year: "2026",
    url: "https://www.bedurya.com.au/",
    image: "/work/bedurya.jpg",
    outcome: "An accessible, nurse-led NDIS and DVA services site built for trust first.",
    inProgress: false,
    embeddable: true,
  },
  {
    index: "04",
    slug: null,
    name: "Australia–Bhutan Association of Canberra",
    sector: "Community",
    loc: "Canberra ACT",
    year: "2026",
    url: "https://abac-liard.vercel.app/",
    image: "/work/abac.jpg",
    outcome: "A bilingual English–Dzongkha home for Canberra's Bhutanese families.",
    inProgress: false,
    embeddable: true,
  },
  {
    index: "05",
    slug: null,
    name: "Completely Dogcare",
    sector: "Pet care",
    loc: "Mitchell ACT",
    year: "2026",
    url: "https://dogcare-eight.vercel.app/",
    image: "/work/completely-dogcare.jpg",
    outcome: "A playful daycare and grooming site built around booking.",
    inProgress: false,
    embeddable: true,
  },
  {
    index: "06",
    slug: null,
    name: "JNW Bhutan Super Fab Lab",
    sector: "Innovation",
    loc: "Bhutan",
    year: "2024",
    url: "https://jnwbhutansuperfablab.bt/",
    image: "/work/jnw-fab-lab.jpg",
    outcome: "The web home of Bhutan's first super fab lab.",
    inProgress: false,
    embeddable: true,
  },
  {
    index: "07",
    slug: null,
    name: "Completely Taylored",
    sector: "Bookkeeping",
    loc: "Canberra ACT",
    year: "2026",
    url: "https://completelytaylored.com.au/",
    image: "/work/completely-taylored.jpg",
    outcome: "A clearer, more modern site for a Canberra small-business bookkeeper.",
    inProgress: true,
    embeddable: true,
  },
  {
    index: "08",
    slug: null,
    name: "Completely Rescued",
    sector: "Animal rescue",
    loc: "Australia",
    year: "2026",
    url: "https://www.completelyrescued.com.au/",
    image: "/work/completely-rescued.jpg",
    outcome: "A warm, adoption-focused site for an Australian rescue.",
    inProgress: true,
    embeddable: true,
  },
];

// Services — the numbered editorial list. Each row expands
// on hover/focus to show what the line actually covers.
export const SERVICES = [
  {
    index: "01",
    title: "Design",
    line: "A visual identity built for your business, not adapted from a template.",
    details: [
      "Custom layout & art direction",
      "Mobile-first responsive design",
      "Two rounds of revisions",
    ],
  },
  {
    index: "02",
    title: "Development",
    line: "Hand-built in Next.js by developers who care about the last 10%.",
    details: [
      "Fast, clean, semantic code",
      "Contact forms & booking links",
      "Analytics wired in from day one",
    ],
  },
  {
    index: "03",
    title: "Hosting & care",
    line: "We keep it online, secure, and current — you never touch a server.",
    details: [
      "Hosting, SSL & monthly backups",
      "Security & dependency updates",
      "Content updates included monthly",
    ],
  },
  {
    index: "04",
    title: "SEO & visibility",
    line: "Set up to be found on Google from the day it goes live.",
    details: [
      "Google Business Profile setup",
      "Metadata, sitemaps, structured data",
      "Performance tuned for rankings",
    ],
  },
  {
    index: "05",
    title: "AI systems",
    line: "Chatbots, reporting, and follow-up that work while you sleep.",
    details: [
      "Chat widget trained on your business",
      "Plain-English monthly performance reports",
      "Instant AI lead follow-up & SEO writing",
    ],
  },
];

export const PROCESS = ["Chat", "Design", "Build", "Live"];

export const PLANS = [
  {
    index: "01",
    name: "Starter",
    featured: false,
    features: [
      "Up to 5 pages",
      "Custom design",
      "Contact form",
      "Hosting & SSL included",
      "SEO foundations",
      "1 content update / month",
    ],
  },
  {
    index: "02",
    name: "Growth",
    featured: true,
    features: [
      "Up to 10 pages",
      "Custom design + 2 revisions",
      "Contact form + booking link",
      "Hosting, SSL & backups",
      "SEO + Google Business setup",
      "2 content updates / month",
      "Google Analytics dashboard",
    ],
  },
  {
    index: "03",
    name: "Professional",
    featured: false,
    features: [
      "Up to 20 pages",
      "Premium custom design",
      "Blog or news section",
      "Advanced quote forms",
      "Priority hosting & monitoring",
      "Full SEO audit & optimisation",
      "4 content updates / month",
      "Monthly performance report",
    ],
  },
];

export const TESTIMONIALS = [
  {
    text: "I'd been putting off getting a proper website for three years because it all felt so overwhelming. The team made it completely painless — I actually love how it turned out. Enquiries are up noticeably.",
    name: "Sarah T.",
    business: "Bloom & Co Florist, Canberra",
  },
  {
    text: "I run a small plumbing business and had no idea where to start with a website. These guys handled everything and explained it all in plain English. Best investment I've made for the business.",
    name: "Marcus H.",
    business: "Handy Plumbing, Sydney",
  },
  {
    text: "The monthly fee model is perfect for a small business — I know exactly what I'm paying each month and there are no surprise invoices. The site looks modern and professional. Couldn't be happier.",
    name: "Priya M.",
    business: "Morning Ritual Café, Brisbane",
  },
];

export const TEAM = [
  {
    name: "Jigme Tharchen",
    role: "Founder & lead developer",
    bio: "Four years building websites across Bhutan and Australia — including projects that won national awards. Jigme founded Sprout Web after watching small businesses get overcharged for templated work that didn't perform.",
    skills: ["Next.js", "React", "Node.js", "AI integration"],
    photo: "/team/jigme.jpeg",
  },
  {
    name: "Rohit Baral",
    role: "Analytics & growth",
    bio: "Most agencies hand you a website and walk away. Rohit sticks around — with a Master's in Data Science, he runs the tracking and conversion analysis that shows what your site is actually doing for your business.",
    skills: ["Google Analytics", "Power BI", "SQL", "SEO reporting"],
    photo: "/team/rohit.jpeg",
  },
  {
    name: "Palden Zangpo",
    role: "Web developer & SEO",
    bio: "A cyber security degree is an unusual background for a web developer — it's exactly why Palden builds sites that don't get hacked, don't slow down, and climb Google rankings from launch day.",
    skills: ["Web development", "On-page SEO", "Security", "Performance"],
    photo: "/team/palden.jpeg",
  },
];

export const FAQS = [
  {
    q: "Do I own my website?",
    a: "Yes — the design and content are yours. If you ever decide to move on, we'll give you a full export of your site files. We believe in keeping things fair.",
  },
  {
    q: "What if I want to cancel?",
    a: "No lock-in contracts. Give us 30 days written notice and that's it. We'll help you transition your site wherever you'd like it to go.",
  },
  {
    q: "How long does it take to build my site?",
    a: "Most sites are live within 2 weeks of our first chat. The main thing we need from you is content — text, photos, logo. The faster you share those, the faster we launch.",
  },
  {
    q: "I'm not technical at all — is that okay?",
    a: "That's exactly who we're built for. You don't need to understand any of the tech. Tell us about your business and we handle everything else.",
  },
  {
    q: "Do I need to provide photos and text?",
    a: "Ideally yes — your own photos and words always perform best. If you don't have them, we can source professional photography and write copy for you for a small additional fee.",
  },
  {
    q: "Can I change my plan later?",
    a: "Any time. Upgrades apply from the next month, and downgrading works the same way — just let us know.",
  },
  {
    q: "What about a domain name?",
    a: "We can register one for you (typically $20–30 a year) or connect one you already own. Either way, the technical setup is on us.",
  },
];
