import Script from "next/script";
import { Archivo, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import JsonLd, { localBusiness } from "@/components/JsonLd";
import { BIZ, SITE_URL } from "@/lib/site";

const GA_ID = "G-P734LZDLFQ";

const display = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lawn Care & Landscaping in Detroit, MI | Woolfman Lawn Services",
    template: "%s | Woolfman Lawn Services",
  },
  description:
    "Licensed and insured lawn care and landscaping in Detroit, MI. Weekly maintenance, mulch, sod, leaf removal, and snow removal across Detroit, Redford, Southfield, West Bloomfield, and Warren. Free estimates.",
  keywords: [
    "lawn care Detroit MI",
    "landscaping Detroit",
    "lawn maintenance Redford",
    "mulching Southfield MI",
    "sod installation Detroit",
    "leaf removal Warren MI",
    "snow removal Detroit",
    "bush trimming West Bloomfield",
    "tree trimming metro Detroit",
    "lawn service near me Detroit",
  ],
  authors: [{ name: BIZ.legalName }],
  creator: BIZ.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BIZ.name,
    title: "Lawn Care & Landscaping in Detroit, MI | Woolfman Lawn Services",
    description:
      "Weekly lawn maintenance, mulch, sod, cleanups, and snow removal across metro Detroit. 150+ properties serviced. Free estimates.",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "Woolfman Lawn Services, Detroit Michigan" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lawn Care & Landscaping in Detroit, MI | Woolfman Lawn Services",
    description:
      "Licensed and insured lawn care across Detroit, Redford, Southfield, West Bloomfield, and Warren. Free estimates.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#16512F" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <JsonLd data={localBusiness} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-3 focus:left-3 focus:bg-blade focus:text-turf-dk focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar />

        {/* Google Analytics 4. next/script with afterInteractive loads it
            after hydration so it never blocks first paint. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="lazyOnload"
        />
        <Script id="ga4" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
