"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0d0c] text-[#cb793a] font-body">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-6 py-4 bg-[#0e0d0c]/70 backdrop-blur-sm text-xs font-mono uppercase tracking-widest">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
        </Link>
        <nav className="space-x-6">
          <Link href="#capsule" className="hover:text-white transition">Capsules</Link>
          <Link href="/about" className="hover:text-white transition">Our Story</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </nav>
      </header>

      {/* Logo Summon */}
      <AnimatePresence>
        {showLogo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0e0d0c]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Image src="/logo.png" alt="Gumnam Raastay logo" width={180} height={180} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-[90vh] px-6 pt-24 bg-[#0e0d0c]">
        <motion.h1
          className="text-4xl sm:text-6xl font-serif tracking-tight text-[#cb793a]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Cloth remembers. Flame reclaims.
        </motion.h1>
        <motion.a
          href="#capsule"
          className="mt-8 text-sm border border-[#cb793a] rounded-full px-6 py-2 hover:bg-[#cb793a] hover:text-black transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          ↓ Enter the Capsule
        </motion.a>
      </section>

      {/* Capsule Section */}
      <section id="capsule" className="px-6 py-20 max-w-6xl mx-auto bg-[#0e0d0c]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
            src="/capsules/raakh-thumbnail.jpg"
            alt="Raakh Say Raani"
            width={600}
            height={800}
            className="rounded-xl shadow-lg hover:opacity-90 transition duration-500"
          />
          <div>
            <h2 className="text-3xl font-serif mb-4">Raakh Say Raani</h2>
            <p className="text-md italic mb-6">She rose not from fire, but from its memory, like a work of art next to its explanation.</p>
            <a
              href="/capsule/raakh-say-raani"
              className="inline-block border border-[#cb793a] rounded-full px-5 py-2 text-sm hover:bg-[#cb793a] hover:text-black transition"
            >
              Read the Scroll
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#0e0d0c] text-[#cb793a] px-6 py-24 text-center">
        <h3 className="text-2xl font-serif mb-4">About the House</h3>
        <p className="max-w-3xl mx-auto text-lg">
          Gumnam Raastay is a house of hidden threads — slow garments woven from ritual, story, and firelight.
        </p>
      </section>

      {/* Waitlist */}
      <section className="px-6 py-24 text-center bg-[#0e0d0c]">
        <p className="text-xl font-light mb-4 italic">To wear the ember, one must wait.</p>
        <a
          href="https://tally.so" // replace with real Tally URL
          className="inline-block border border-[#cb793a] rounded-full px-6 py-3 text-sm hover:bg-[#cb793a] hover:text-black transition"
        >
          Join the Waitlist
        </a>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center opacity-50 bg-[#0e0d0c]">
        <Image src="/logo.png" alt="Gumnam Raastay sigil" width={40} height={40} className="mx-auto" />
      </footer>
    </div>
  );
}