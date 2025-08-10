import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gumnam Raastay — Wear the Forgotten Road",
  description:
    "Ritualwear capsules woven from story and craft. First drop: Raakh Say Raani. Pre-orders open soon.",
  openGraph: {
    title: "Gumnam Raastay — Wear the Forgotten Road",
    description:
      "Ritualwear capsules woven from story and craft. First drop: Raakh Say Raani. Pre-orders open soon.",
    url: "https://gumnamraastay.com",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gumnam Raastay — Wear the Forgotten Road",
    description:
      "Ritualwear capsules woven from story and craft. First drop: Raakh Say Raani. Pre-orders open soon.",
    images: ["/og/home.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (loads once, site-wide) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CDLBZYY7KW"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CDLBZYY7KW');
          `}
        </Script>

        {/* JSON‑LD */}
        <Script id="org-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Gumnam Raastay",
            url: "https://gumnamraastay.com",
            sameAs: ["https://instagram.com/<handle>"],
            founder: ["Taimur", "Kainat"],
            description:
              "Ritualwear capsules woven from story and craft. First drop: Raakh Say Raani.",
          })}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}