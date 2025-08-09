import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "../components/Navbar";
import { GA_ID } from "../lib/gtag";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gumnam Raastay — Wear the Forgotten Road",
  description:
    "Ritualwear capsules woven from story and craft. First drop: Raakh Say Raani. Pre-orders open soon.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-twilight text-burnishedGold`}>
        {/* GA4 Bootstrap */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        <Navbar />
        {children}

        {/* Powered-by strip (visible on all pages) */}
        <div className="w-full border-t border-neutral-800 bg-twilight">
          <div className="mx-auto max-w-6xl px-6 py-6 text-center text-xs text-neutral-400">
            Built with <a className="underline hover:text-white" href="https://kora.pathsunknown.xyz" target="_blank" rel="noreferrer">Kora Companions</a> · Every conversation becomes a scroll.
          </div>
        </div>
      </body>
    </html>
  );
}