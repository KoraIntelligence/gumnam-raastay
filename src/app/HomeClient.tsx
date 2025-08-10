"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { gtag } from "../lib/gtag";
import { getTallyHref } from "../lib/utm";

// TS: declare dataLayer on window so VSCode stops complaining
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function HomeClient() {
  // one-time logo summon
  const [showLogo, setShowLogo] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShowLogo(false), 2500);
    return () => clearTimeout(t);
  }, []);

  // Google Analytics init (safe if GA is already loaded in layout)
  useEffect(() => {
  
  }, []);

  return (
    <main className="pt-24 pb-32 px-6 max-w-5xl mx-auto text-center">
      {/* JSON-LD Organization schema */}
      <Script
        id="org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Gumnam Raastay",
            url: "https://gumnamraastay.com",
            sameAs: ["https://instagram.com/<handle>"],
            founder: ["Taimur", "Kainat"],
            description:
              "Ritualwear capsules woven from story and craft. First drop: Raakh Say Raani.",
          }),
        }}
      />

      {/* Logo summon overlay */}
      <AnimatePresence>
        {showLogo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0e0d0c]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 1.0 }}
            >
              <Image
                src="/logo.png" // ensure exists in /public
                alt="Gumnam Raastay logo"
                width={180}
                height={180}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center">
        <motion.h1
          className="text-4xl sm:text-6xl font-serif tracking-tight"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Cloth remembers. Flame reclaims.
        </motion.h1>

        {/* Primary + secondary CTA */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href="/capsules/raakh"
            onClick={() =>
              gtag("cta_click", { location: "home_hero", target: "/capsules/raakh" })
            }
            className="inline-block border border-burnishedGold rounded-full px-6 py-2 text-sm hover:bg-burnishedGold hover:text-twilight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burnishedGold"
          >
            Enter the Capsule
          </Link>

          <a
            href={getTallyHref("https://tally.so/<your-form-id>")}
            onClick={() => gtag("waitlist_click", { location: "home_hero" })}
            className="text-sm underline underline-offset-4 text-neutral-300 hover:text-white"
            aria-label="Join the waitlist"
            target="_blank"
            rel="noreferrer"
          >
            Join the waitlist
          </a>
        </motion.div>

        {/* Proof strip under hero */}
        <motion.p
          className="mt-4 text-sm text-neutral-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          First capsule drops September 2025 · Artisan-made in Pakistan · Pre-order opens soon
        </motion.p>
      </section>

      {/* Featured capsule card */}
      <section id="capsule" className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
          <div className="w-full">
            <Image
              src="/capsules/raakh-thumbnail.jpg"
              alt="Raakh Say Raani — feature"
              width={1000}
              height={1200}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <motion.div
            className="md:text-left"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-serif mb-2">Raakh Say Raani</h2>
            <p className="text-md italic mb-4">
              She rose not from fire, but from its memory, like a work of art next to its explanation.
            </p>
            <Link
              href="/capsules/raakh"
              className="inline-block border border-burnishedGold rounded-full px-5 py-2 text-sm hover:bg-burnishedGold hover:text-twilight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burnishedGold"
            >
              Read the Scroll
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Powered by strip */}
      <div className="bg-ritualInk text-center mt-20 py-4 text-sm text-neutral-400">
        Built with{" "}
        <a
          href="https://koraintelligence.com"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-burnishedGold"
        >
          Kora Companions
        </a>{" "}
        · Every conversation becomes a scroll.
      </div>
    </main>
  );
}