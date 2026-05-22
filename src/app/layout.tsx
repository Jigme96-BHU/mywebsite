import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";
import { AGENCY } from "@/lib/data";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${AGENCY.name} — Websites for Small Business`,
  description:
    "Professional websites for Australian small businesses. Custom design, development, and hosting — one simple monthly fee. No lock-in contracts.",
  keywords:
    "web design small business, affordable website Australia, website monthly plan, Canberra web developer",
  openGraph: {
    title: `${AGENCY.name} — Websites for Small Business`,
    description:
      "Professional websites for Australian small businesses. Custom design, development, and hosting — one simple monthly fee.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${lora.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
