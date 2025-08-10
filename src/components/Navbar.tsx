"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-twilight/90 backdrop-blur text-ashWhisper border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between font-body">
        <Link href="/" className="text-lg tracking-wide font-semibold hover:text-burnishedGold">
          Gumnam Raastay
        </Link>

        <div className="flex items-center gap-6 text-xs sm:text-sm uppercase tracking-wider">
          {/* Capsules dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="hover:text-burnishedGold"
              aria-haspopup="menu"
              aria-expanded={open}
              aria-controls="capsules-menu"
              onClick={() => setOpen(v => !v)} // tap on mobile
            >
              Capsules
            </button>

            {open && (
              <div
                id="capsules-menu"
                className="absolute left-0 mt-2 w-52 rounded bg-twilight text-ashWhisper shadow-lg border border-white/10 z-50"
                // keep menu open while focused (keyboard users)
                onFocus={() => setOpen(true)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
                }}
              >
                <Link
                  href="/capsules/raakh"
                  className="block px-4 py-2 hover:bg-burnishedGold hover:text-twilight focus:bg-burnishedGold focus:text-twilight"
                >
                  Raakh Say Raani
                </Link>
                {/* future capsules here */}
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-burnishedGold">Our Story</Link>
          <Link href="/contact" className="hover:text-burnishedGold">Contact</Link>
        </div>
      </div>
    </nav>
  );
}