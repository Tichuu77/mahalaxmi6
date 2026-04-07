import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const BASE_URL = "https://pp.mahalaxmiinfra.in"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mahalaxmi Infra – NMRDA & RERA Approved Residential Plots in Nagpur | From ₹22 Lakh",
    template: "%s | Mahalaxmi Infra Nagpur",
  },
  description:
    "Buy NMRDA sanctioned, RERA approved residential plots in Nagpur. Mahalaxmi Infra offers 70+ completed projects, 17,000+ happy families. Plots near MIHAN, Wardha Road, Hingna. Starting ₹22 Lakh. Bank loan available up to 90%.",
  generator: "Next.js",
  applicationName: "Mahalaxmi Infra",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Mahalaxmi Infra", url: BASE_URL }],
  creator: "Mahalaxmi Infra",
  publisher: "Mahalaxmi Infra",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [{ url: "/Mahalaxmi Infra new Logo.png", type: "image/png" }],
    apple: "/Mahalaxmi Infra new Logo.png",
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Mahalaxmi Infra",
    title: "Mahalaxmi Infra – NMRDA & RERA Approved Plots in Nagpur",
    description:
      "70+ completed projects, 17,000+ happy families. Buy NMRDA sanctioned plots near MIHAN, Wardha Road & Hingna starting ₹22 Lakh. 100% RERA Approved.",
    images: [{ url: "/mahalaxmi-logo.png", width: 512, height: 512, alt: "Mahalaxmi Infra – Premium Residential Plots in Nagpur" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahalaxmi Infra – RERA Approved Plots in Nagpur",
    description:
      "Buy premium NMRDA sanctioned plots in Nagpur. 70+ projects, starting ₹22L. Bank loan available.",
    images: ["/mahalaxmi-logo.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "Real Estate",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "Mahalaxmi Infra",
    "Mahalaxmi Infra Nagpur",
    "plots for sale in Nagpur",
    "NMRDA approved plots Nagpur",
    "RERA approved plots Nagpur",
    "Commercial property in Nagpur",
    "Investment property in Nagpur",
  ],
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#30534A",
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": `${BASE_URL}/#organization`,
      name: "Mahalaxmi Infra",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/Mahalaxmi Infra new Logo.png` },
      description:
        "NMRDA sanctioned and RERA approved residential plots in Nagpur with 70+ completed projects and 17,000+ happy families.",
      telephone: "+919168058124",
      email: "iime.pranali@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nagpur",
        addressRegion: "Maharashtra",
        postalCode: "441106",
        addressCountry: "IN",
      },
      areaServed: { "@type": "City", name: "Nagpur" },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Mahalaxmi Infra",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TCG77MQD');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nagpur" />
        <meta name="geo.position" content="21.1458;79.0882" />
        <meta name="ICBM" content="21.1458,79.0882" />
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TCG77MQD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
