export const metadata = {
  title: "About Gumnam Raastay",
  description: "A house of hidden threads — ritualwear woven from story, craft, and firelight.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-twilight text-burnishedGold px-6 py-28 text-center">
      <h1 className="text-4xl font-serif mb-6">About Gumnam Raastay</h1>
      <p className="max-w-2xl mx-auto text-lg">
        A house of hidden threads — ritualwear woven from story, craft, and firelight.
      </p>
      <p className="max-w-2xl mx-auto mt-4 text-lg">
        Built with Kora Companions. Slow by design. Artisan-made in Pakistan.
      </p>
      <a
        href="/capsules/raakh"
        className="mt-10 inline-block border border-burnishedGold rounded-full px-6 py-2 text-sm hover:bg-burnishedGold hover:text-twilight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burnishedGold"
      >
        Explore Raakh Say Raani
      </a>
    </main>
  );
}
