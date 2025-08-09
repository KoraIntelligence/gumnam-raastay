"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full px-6 py-4 bg-twilight/80 backdrop-blur-sm text-ashWhisper flex justify-between items-center font-body z-50">
      <Link href="/" className="text-lg tracking-wide font-semibold hover:text-burnishedGold">
        Gumnam Raastay
      </Link>

      <div className="flex gap-6 items-center text-sm uppercase tracking-wider">
        {/* Capsules dropdown */}
        <div className="relative group">
          <button className="hover:text-burnishedGold">Capsules</button>
          <div
            className="absolute left-0 mt-2 w-56 bg-twilight text-ashWhisper shadow-lg rounded opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-[60]"
          >
            <Link href="/capsules/raakh" className="block px-4 py-2 hover:bg-burnishedGold hover:text-twilight">
              Raakh Say Raani
            </Link>
            {/* Future capsules here */}
          </div>
        </div>

        <Link href="/about" className="hover:text-burnishedGold">Our Story</Link>
        <Link href="/contact" className="hover:text-burnishedGold">Contact</Link>
      </div>
    </nav>
  );
}
