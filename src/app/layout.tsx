import type { Metadata } from "next";
import { Archivo, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { AGENCY } from "@/lib/data";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://sproutweb.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${AGENCY.name} — Websites from the ground up`,
    template: `%s — ${AGENCY.name}`,
  },
  description:
    "A Canberra studio that designs, builds, and runs websites for Australian small businesses. One monthly fee, no lock-in, nothing templated.",
  openGraph: {
    title: `${AGENCY.name} — Websites from the ground up`,
    description:
      "A Canberra studio that designs, builds, and runs websites for Australian small businesses.",
    type: "website",
    locale: "en_AU",
    siteName: AGENCY.name,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: AGENCY.name,
  description:
    "Web design and development studio for Australian small businesses.",
  email: AGENCY.email,
  telephone: AGENCY.phoneIntl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Canberra",
    addressRegion: "ACT",
    addressCountry: "AU",
  },
  geo: { "@type": "GeoCoordinates", latitude: -35.2809, longitude: 149.13 },
  url: SITE_URL,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-AU"
      suppressHydrationWarning
      className={`no-js ${archivo.variable} ${instrument.variable} ${plexMono.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js')`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <SmoothScroll>{children}</SmoothScroll>
        <Cursor />
      </body>
    </html>
  );
}
