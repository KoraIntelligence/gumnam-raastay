import Link from "next/link";

export const metadata = {
  title: "About Gumnam Raastay",
  description:
    "A house of hidden threads — ritualwear woven from story, craft, and firelight. Built with Kora Companions. Slow by design. Artisan-made in Pakistan.",
};

export default function OurStory() {
  return (
    <main className="bg-twilight text-ashWhisper py-20 px-6 sm:px-12 md:px-24 font-body">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-ritual text-burnishedGold mb-8">
          About Gumnam Raastay
        </h1>
        <p className="mb-6">
          A house of hidden threads — ritualwear woven from story, craft, and firelight.
          We are a slow house: garments that are patient, intentional, and alive with the
          textures of Pakistan’s artisanal heritage.
        </p>
        <p className="mb-6">
          Built with Kora Companions, Gumnam Raastay is both a brand and a ritual.
          Every piece is part of a scroll — a fragment of a larger story carried in cloth.
        </p>
        <p className="mb-10">
          We work closely with craftspeople and communities to ensure each capsule reflects
          integrity, artistry, and cultural continuity.
        </p>

        <Link
          href="/capsules/raakh"
          className="inline-block border border-burnishedGold rounded-full px-6 py-2 text-sm hover:bg-burnishedGold hover:text-twilight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burnishedGold"
        >
          Explore Raakh Say Raani
        </Link>
      </section>
    </main>
  );
}
