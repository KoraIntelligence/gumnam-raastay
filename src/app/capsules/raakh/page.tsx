import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Raakh Say Raani — From Ashes to a Queen",
  description: "A capsule for presence without noise. Artisan-made in Pakistan.",
  openGraph: {
    title: "Raakh Say Raani — From Ashes to a Queen",
    description: "A capsule for presence without noise. Artisan-made in Pakistan.",
    url: "https://gumnamraastay.com/capsules/raakh",
    images: [{ url: "/og/raakh.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raakh Say Raani — From Ashes to a Queen",
    description: "A capsule for presence without noise. Artisan-made in Pakistan.",
    images: ["/og/raakh.jpg"],
  },
};

export default function RaakhSayRani() {
  const looks = [
    {
      src: "/urban-look.jpg",
      alt: "Urban Ritual look — handwoven khadi wrap top in olive, copper scarf",
      caption: "Urban Ritual · khadi wrap top, copper scarf",
      title: "Urban Ritual Look",
      text: "Olive khadi shirt with Ajrak collar; terracotta wide-leg cotton-linen pants with Balochi embroidery; indigo Kalashi-patterned scarf. Functional dailywear with rooted accents and a clean silhouette.",
      reverse: false,
    },
    {
      src: "/street-look.jpg",
      alt: "Street Dress look — embroidered tunic shirt-dress, ochre pants, Kalashi scarf",
      caption: "Street Dress · embroidered tunic, ochre pants, Kalashi scarf",
      title: "Street Dress Look",
      text: "Kashmiri-embroidered tunic reimagined as a shirt-dress; tapered ochre cotton pants; Kalashi scarf draped like a trench accessory. Fierce femininity, mythic detailing; made for founders and wanderers.",
      reverse: true,
    },
    {
      src: "/investor-collage.jpg",
      alt: "Investor collage overview — Ajrak shirts, co-ords, scarves, overcoats",
      caption: "Investor Collage · Ajrak shirts, co-ords, scarves, overcoats",
      title: "Investor Capsule Collage",
      text: "Highlights across the capsule: Ajrak shirts, co-ords, scarves, overcoats. Earthy tones — soft indigo, copper blush, muted ochre — with textures from ruins, desert paths, and shrines. Premium, mythical, wearable.",
      reverse: false,
    },
    {
      src: "/brunch-look.jpg",
      alt: "Brunch/Beachwear look — flowy muslin dress, pistachio and saffron tones",
      caption: "Brunch/Beachwear · flowy muslin dress, rooted joy",
      title: "Brunch / Beachwear",
      text: "Flowy muslin dress / co-ord set in saffron, pistachio, coral, turquoise; subtle mirrorwork and embroidery. Modern Pakistan: joyful, vibrant, rooted — looks that hold heritage and light.",
      reverse: true,
    },
  ];

  return (
    <main className="bg-twilight text-ashWhisper py-28 px-6 md:px-10 font-body">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-serif text-burnishedGold">Raakh Say Raani</h1>
        <p className="mt-4 italic max-w-2xl mx-auto">
          She rose not from fire, but from its memory — like a work of art beside its own explanation.
        </p>
      </header>

      {looks.map((look, idx) => (
        <section
          key={idx}
          className={`grid md:grid-cols-2 gap-10 mb-16 items-start ${
            look.reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          <figure className="w-full">
            <Image
              src={look.src}
              alt={look.alt}
              width={1600}
              height={2000}
              className="rounded-lg shadow-lg w-full h-auto object-contain"
            />
            <figcaption className="mt-2 text-xs text-neutral-400">{look.caption}</figcaption>
          </figure>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-serif text-burnishedGold mb-3">{look.title}</h2>
            <p>{look.text}</p>
          </div>
        </section>
      ))}

      <section className="text-center mt-20">
        <a
          href="https://tally.so/<your-form-id>"
          target="_blank"
          rel="noreferrer"
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
    </main>
  );
}