import Image from "next/image";

export default function RaakhSayRani() {
  return (
    <main className="bg-twilight text-ashWhisper py-20 px-4 sm:px-12 md:px-24 font-body">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-ritual text-burnishedGold text-center mb-16">
          Raakh Say Raani
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="relative w-full h-[400px]">
            <Image
              src="/urban-look.jpg"
              alt="Urban Look"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-ritual text-burnishedGold mb-4">Urban Nomad</h2>
            <p>
              A sharp yet soft silhouette for the woman who weaves the past into the
              present. Featuring deep rusts, olive greens, and charcoal. This look is
              all about gentle power and motion in stillness.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="relative w-full h-[400px] order-2 md:order-1">
            <Image
              src="/street-look.jpg"
              alt="Street Look"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center order-1 md:order-2">
            <h2 className="text-2xl font-ritual text-burnishedGold mb-4">Street Royalty</h2>
            <p>
              Textured handwoven fabrics and fierce flowing structure meet in a look
              designed for presence and movement. The woman who wears this walks like
              poetry—measured, bold, unforgettable.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="relative w-full h-[400px]">
            <Image
              src="/investor-collage.jpg"
              alt="Investor Collage"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-ritual text-burnishedGold mb-4">Legacy Look</h2>
            <p>
              The most regal of the capsule’s compositions. It invites reflection,
              demands attention, and honours ancestry. Drapes that echo courtly ritual
              with contemporary restraint.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="relative w-full h-[400px] order-2 md:order-1">
            <Image
              src="/brunch-look.jpg"
              alt="Brunch Look"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center order-1 md:order-2">
            <h2 className="text-2xl font-ritual text-burnishedGold mb-4">Brunch Resistance</h2>
            <p>
              A soft revolution stitched into every seam. Earth tones, flowing lines,
              and easeful grace. She gathers, listens, and leads—around a table or
              under a neem tree.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}