import HomeClient from "./HomeClient";

export const metadata = {
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

export default function Page() {
  return <HomeClient />;
}