// ─────────────────────────────────────────────────────────
//  All site content lives here.
//  Edit this file to update copy, projects, pricing, FAQs.
// ─────────────────────────────────────────────────────────

export const AGENCY = {
  name: "Sprout Web",
  tagline: "Websites for small business, done properly.",
  email: "gmetharchen96@gmail.com",
  phone: "0460 730 115",
  location: "Canberra, ACT, Australia",
  abn: "00 000 000 000",
};

export const NAV_LINKS = [
  { label: "How It Works", href: "#how" },
  { label: "What's Included", href: "#included" },
  { label: "Our Team", href: "#team" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const STATS = [
  { value: "120+", label: "businesses online" },
  { value: "4.9★", label: "average rating" },
  { value: "14 days", label: "average delivery" },
  { value: "$0", label: "hidden fees — ever" },
];

export const STEPS = [
  {
    num: "1",
    title: "Chat with us",
    desc: "Tell us about your business, your customers, and what you want your website to do.",
  },
  {
    num: "2",
    title: "We design it",
    desc: "We create a professional design tailored to your brand. You approve before we build.",
  },
  {
    num: "3",
    title: "We build it",
    desc: "Our team handles all the code, content, and setup. Nothing for you to learn.",
  },
  {
    num: "4",
    title: "You go live",
    desc: "Your site launches, fully hosted and managed. We keep it running smoothly from here.",
  },
];

export const INCLUDED = [
  {
    icon: "🎨",
    color: "green" as const,
    title: "Professional Design",
    desc: "A unique, on-brand design — not a template — built to impress your customers.",
    features: [
      "Custom layout & visual identity",
      "Mobile-first, looks great on any device",
      "2 rounds of design revisions",
    ],
  },
  {
    icon: "🛠️",
    color: "amber" as const,
    title: "Full Development",
    desc: "Built properly by real developers — fast, secure, and easy to navigate.",
    features: [
      "Fast-loading, clean code",
      "Contact forms & booking links",
      "Google Analytics set up",
    ],
  },
  {
    icon: "☁️",
    color: "green" as const,
    title: "Hosting & Maintenance",
    desc: "We keep your site online, secure, and up to date — so you never have to worry.",
    features: [
      "Reliable hosting included",
      "SSL certificate (the padlock 🔒)",
      "Monthly backups & updates",
    ],
  },
  {
    icon: "📈",
    color: "amber" as const,
    title: "SEO Foundations",
    desc: "We set your site up to be found on Google — from day one.",
    features: [
      "Google Business Profile setup",
      "Page titles & meta descriptions",
      "Fast load times for better rankings",
    ],
  },
  {
    icon: "✏️",
    color: "green" as const,
    title: "Ongoing Edits",
    desc: "Need to update your hours, prices, or photos? Just ask — it's included.",
    features: [
      "Up to 2 content updates/month",
      "Photo swaps & text changes",
      "New page available as add-on",
    ],
  },
  {
    icon: "💬",
    color: "amber" as const,
    title: "Friendly Support",
    desc: "A real human to answer your questions — not a chatbot, not a ticket queue.",
    features: [
      "Email & chat support",
      "Response within 1 business day",
      "No question too basic",
    ],
  },
];

export const PORTFOLIO = [
  {
    url: "https://www.canberrapropertypartners.com.au/",
    domain: "canberrapropertypartners.com.au",
    industry: "Real Estate · Canberra ACT",
    name: "Canberra Property Partners",
    desc: "Award-winning property management agency. Custom Next.js site with AI maintenance chatbot, SEO optimisation, and REIA Innovation Award recognition.",
    emoji: "🏢",
    gradient: "from-[#0a0a0a] via-[#1a2f28] to-[#2c5f4a]",
    inProgress: false,
  },
  {
    url: "https://little-buddha-nine.vercel.app/",
    domain: "little-buddha-nine.vercel.app",
    industry: "Education · Canberra ACT",
    name: "LittleBuddhas Dharma School",
    desc: "A calming, visually rich website for a Canberra-based Buddhist school — reflecting the school's philosophy of mindfulness, compassion, and community.",
    emoji: "🪷",
    gradient: "from-[#2d1b69] via-[#7c3aed] to-[#f59e0b]",
    inProgress: false,
  },
  {
    url: "https://jnwbhutansuperfablab.bt/",
    domain: "jnwbhutansuperfablab.bt",
    industry: "Innovation · Bhutan",
    name: "JNW Bhutan Super Fab Lab",
    desc: "A technology and innovation hub website for Bhutan's first super fab lab — bridging traditional culture with cutting-edge maker education.",
    emoji: "🔬",
    gradient: "from-[#0f172a] via-[#1e3a5f] to-[#f97316]",
    inProgress: false,
  },
  {
    url: "https://www.completelyrescued.com.au/",
    domain: "completelyrescued.com.au",
    industry: "Animal Rescue · Australia",
    name: "Completely Rescued",
    desc: "A warm, mission-driven site for an Australian animal rescue organisation. In active development with a focus on adoptions and community engagement.",
    emoji: "🐾",
    gradient: "from-[#7f1d1d] via-[#b45309] to-[#fde68a]",
    inProgress: true,
  },
  {
    url: "https://bedurya.com.au/",
    domain: "bedurya.com.au",
    industry: "Community Care · Australia",
    name: "Bedurya Community Care",
    desc: "A compassionate, accessible website for an Australian community care provider — in active development with a focus on NDIS services and local support.",
    emoji: "🤝",
    gradient: "from-[#064e3b] via-[#065f46] to-[#6ee7b7]",
    inProgress: true,
  },
];

export const PLANS = [
  {
    name: "Starter",
    setup: "$499",
    monthly: "$79",
    featured: false,
    features: [
      "Up to 5 pages",
      "Custom design",
      "Mobile responsive",
      "Contact form",
      "Hosting & SSL included",
      "SEO foundations",
      "1 content update/month",
    ],
  },
  {
    name: "Growth",
    setup: "$799",
    monthly: "$129",
    featured: true,
    features: [
      "Up to 10 pages",
      "Custom design + 2 revisions",
      "Mobile responsive",
      "Contact form + booking link",
      "Hosting, SSL & backups",
      "SEO + Google Business setup",
      "2 content updates/month",
      "Google Analytics dashboard",
    ],
  },
  {
    name: "Professional",
    setup: "$1,299",
    monthly: "$199",
    featured: false,
    features: [
      "Up to 20 pages",
      "Premium custom design",
      "Blog or news section",
      "Advanced contact & quote forms",
      "Priority hosting & monitoring",
      "Full SEO audit & optimisation",
      "4 content updates/month",
      "Monthly performance report",
    ],
  },
];

export const TESTIMONIALS = [
  {
    stars: 5,
    text: "I'd been putting off getting a proper website for three years because it all felt so overwhelming. The team made it completely painless — I actually love how it turned out. Enquiries are up noticeably.",
    name: "Sarah T.",
    business: "Bloom & Co Florist, Canberra",
    emoji: "🌺",
    bg: "#e8f0ec",
  },
  {
    stars: 5,
    text: "I run a small plumbing business and had no idea where to start with a website. These guys handled everything and explained it all in plain English. Best investment I've made for the business.",
    name: "Marcus H.",
    business: "Handy Plumbing, Sydney",
    emoji: "🔧",
    bg: "#fff4e0",
  },
  {
    stars: 5,
    text: "The monthly fee model is perfect for a small business — I know exactly what I'm paying each month and there are no surprise invoices. The site looks modern and professional. Couldn't be happier.",
    name: "Priya M.",
    business: "Morning Ritual Café, Brisbane",
    emoji: "☕",
    bg: "#e8f0ec",
  },
];

export const AI_FEATURES = [
  {
    icon: "🤖",
    title: "AI Chat Widget",
    desc: "A chatbot trained specifically on your business — your services, prices, hours, and FAQs. It answers customer questions at 2am, captures leads, and never takes a sick day. We built one for a Canberra property agency and it helped them win a national innovation award.",
    tag: "Most popular",
  },
  {
    icon: "📊",
    title: "Monthly AI Performance Report",
    desc: "Forget staring at Google Analytics. Every month you get a plain-English summary: which pages are working, where customers drop off, and exactly what to do next. AI speed, reviewed by a real data scientist before it reaches you.",
    tag: "Included in Pro",
  },
  {
    icon: "✍️",
    title: "AI Content & SEO Writing",
    desc: "Fresh blog posts, service pages, and SEO copy — written by AI and tuned to your brand. Keeps your site active, answers the questions your customers are already Googling, and signals to Google that you're worth ranking.",
    tag: "Add-on",
  },
  {
    icon: "⚡",
    title: "Instant Lead Follow-up",
    desc: "The moment someone submits your contact form, AI drafts and sends a personalised reply in your name. The business that responds first almost always wins the job. Now that's always you — even at midnight.",
    tag: "Add-on",
  },
];

export const TEAM = [
  {
    name: "Jigme Tharchen",
    role: "Founder & Lead Developer",
    bio: "4 years building websites across Bhutan and Australia — Jigme has delivered projects that won national awards, powered award-winning agencies, and helped organisations go from no web presence to a genuine competitive edge. He founded Sprout Web after watching small businesses get overcharged for templated work that didn't perform. Every site he ships is custom-built, conversion-focused, and fast.",
    skills: ["Next.js", "React", "Node.js", "MERN Stack", "AI Integration"],
    photo: "/team/jigme.jpeg",
    initials: "JT",
    avatarBg: "#1e4637",
  },
  {
    name: "Rohit Baral",
    role: "Analytics & Growth",
    bio: "Most agencies hand you a website and walk away. Rohit sticks around to make sure it actually works. With a Master's in Data Science and a finance background, he sets up the tracking, dashboards, and conversion analysis that show you exactly what your site is doing for your business — and what to improve next.",
    skills: ["Google Analytics", "Power BI", "SQL", "Conversion Tracking", "SEO Reporting"],
    photo: "/team/rohit.jpeg",
    initials: "RB",
    avatarBg: "#2c5f4a",
  },
  {
    name: "Palden Zangpo",
    role: "Web Developer & SEO",
    bio: "A Cyber Security degree is an unusual background for a web developer — but it's exactly why Palden builds sites that don't get hacked, don't slow down, and don't cut corners. Pair that with hands-on SEO and you get a site that climbs Google rankings from launch day, not six months later.",
    skills: ["Web Development", "On-Page SEO", "Security", "Performance", "UI / UX"],
    photo: "/team/palden.jpeg",
    initials: "PZ",
    avatarBg: "#f5a623",
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
    a: "Most sites are live within 2 weeks of our first chat. The main thing we need from you is some content (text, photos, logo) — the faster you can share those, the faster we can launch.",
  },
  {
    q: "I'm not technical at all — is that okay?",
    a: "That's exactly who we're built for. You don't need to understand any of the tech. Just tell us about your business and we handle absolutely everything else.",
  },
  {
    q: "Do I need to provide photos and text?",
    a: "Ideally yes — your own photos and words always perform best. But if you don't have them, we can source professional stock photos and write copy for you (small additional fee).",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. You can upgrade at any time and we'll adjust your billing from the next month. Downgrading is also fine, just let us know.",
  },
  {
    q: "What about a domain name?",
    a: "We can register a domain for you (typically $20–30/year) or connect one you already own. Either way, we take care of all the technical setup.",
  },
  {
    q: "Will my site work on mobile phones?",
    a: "Every site we build is mobile-first. Over 60% of web traffic is from phones, so this isn't optional — it's standard for every plan we offer.",
  },
];
