import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter_Tight } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import Analytics from "@/components/Analytics";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter_Tight({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://grisha.shop";
// Черновик на Vercel закрыт от поисковиков, чтобы не дублировать grisha.shop
const isDraft = Boolean(process.env.VERCEL);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Grisha — бренд женской одежды, Москва",
    template: "%s — Grisha",
  },
  description:
    "Grisha — бренд женской одежды из Москвы и бутик на Плющихе. Шерсть, тенсел, хлопок и деним.",
  openGraph: {
    title: "Grisha — бренд женской одежды, Москва",
    description: "Бренд женской одежды из Москвы и бутик на Плющихе.",
    images: ["/images/p/hero-parka-khaki.webp"],
    locale: "ru_RU",
    type: "website",
  },
  robots: isDraft ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#f5f2ed",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${serif.variable} ${sans.variable}`} data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
        <Analytics />
      </body>
    </html>
  );
}
