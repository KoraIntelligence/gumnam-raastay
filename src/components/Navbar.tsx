"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-twilight text-ashWhisper flex justify-between items-center font-body z-50">
      <Link href="/" className="text-lg tracking-wide font-semibold hover:text-burnishedGold">
        Gumnam Raastay
      </Link>
      <div className="flex gap-6 items-center text-sm uppercase tracking-wider">
        <div className="relative group">
          <button className="hover:text-burnishedGold">Capsules</button>
          <div
            className="absolute left-0 mt-2 w-48 bg-twilight text-ashWhisper shadow-lg rounded opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 z-50"
            onMouseEnter={(e) => e.stopPropagation()}
            onMouseLeave={(e) => e.stopPropagation()}
          >
            <Link
              href="/capsules/raakh"
              className="block px-4 py-2 hover:bg-burnishedGold hover:text-twilight"
            >
              Raakh Say Raani
            </Link>
          </div>
        </div>
        <Link href="/story" className="hover:text-burnishedGold">
          Our Story
        </Link>
        <Link href="/contact" className="hover:text-burnishedGold">
          Contact
        </Link>
      </div>
    </nav>
  );
}
