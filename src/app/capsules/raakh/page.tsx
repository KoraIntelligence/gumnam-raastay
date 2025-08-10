"use client";

import Image from "next/image";
import Link from "next/link";
import { gtag } from "../../../lib/gtag";



export default function RaakhSayRaani() {
  const handleWaitlistClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      gtag("waitlist_click", { location: "raakh_page" });
    }
  };

  return (
    <main className="bg-twilight text-ashWhisper py-20 px-4 sm:px-12 md:px-24 font-body">
      {/* Page header */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl sm:text-6xl font-ritual text-burnishedGold">
          Raakh Say Raani
        </h1>
        <p className="mt-4 italic max-w-2xl mx-auto">
          She rose not from fire, but from its memory — like a work of art beside its own explanation.
        </p>
      </section>

      {/* Looks grid */}
      {[
        {
          src: "/urban-look.jpg",
          alt: "Urban Ritual look — handwoven khadi wrap top in olive, copper scarf",
          caption: "Urban Ritual · khadi wrap top, copper scarf",
          title: "Urban Nomad",
          text: "A sharp yet soft silhouette for the woman who weaves the past into the present. Featuring deep rusts, olive greens, and charcoal. Gentle power, motion in stillness.",
          reverse: false,
        },
        {
          src: "/street-look.jpg",
          alt: "Street Royalty look — textured fabrics, flowing structure",
          caption: "Street Royalty · textured fabrics, flowing structure",
          title: "Street Royalty",
          text: "Textured handwoven fabrics and fierce flowing structure meet in a look designed for presence and movement. The woman who wears this walks like poetry—measured, bold, unforgettable.",
          reverse: true,
        },
        {
          src: "/investor-collage.jpg",
          alt: "Legacy Look — regal drapes, courtly ritual",
          caption: "Legacy Look · regal drapes, courtly ritual",
          title: "Legacy Look",
          text: "The most regal of the capsule’s compositions. It invites reflection, demands attention, and honours ancestry. Drapes that echo courtly ritual with contemporary restraint.",
          reverse: false,
        },
        {
          src: "/brunch-look.jpg",
          alt: "Brunch Resistance — earth tones, flowing lines",
          caption: "Brunch Resistance · earth tones, flowing lines",
          title: "Brunch Resistance",
          text: "A soft revolution stitched into every seam. Earth tones, flowing lines, and easeful grace. She gathers, listens, and leads—around a table or under a neem tree.",
          reverse: true,
        },
      ].map((look, idx) => (
        <div
          key={idx}
          className={`grid md:grid-cols-2 gap-12 mb-24 items-start ${
            look.reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          <figure className="w-full">
            <Image
              src={look.src}
              alt={look.alt}
              width={1600}
              height={2000}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <figcaption className="mt-2 text-xs text-neutral-400">
              {look.caption}
            </figcaption>
          </figure>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-ritual text-burnishedGold mb-4">
              {look.title}
            </h2>
            <p>{look.text}</p>
          </div>
        </div>
      ))}

      {/* Waitlist CTA */}
      <section className="text-center mt-20">
        <a
          href="https://tally.so/<your-form-id>"
          target="_blank"
          rel="noreferrer"
          onClick={handleWaitlistClick}
          className="inline-block border border-burnishedGold rounded-full px-6 py-2 text-sm hover:bg-burnishedGold hover:text-twilight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burnishedGold"
        >
          Join the waitlist
        </a>
        <p className="mt-2 text-xs text-neutral-400">
          We’ll email 2–3 progress updates (fabric, dye, ship). No spam. Unsubscribe anytime.
        </p>

        <div className="mt-10">
          <Link href="/">← Back to Home</Link>
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