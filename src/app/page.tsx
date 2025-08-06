'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [showLogo, setShowLogo] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-amber-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen transition-colors duration-700">
      <AnimatePresence>
        {showLogo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-amber-50 dark:bg-zinc-950"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src="/logo.png"
              alt="Gumnam Raastay logo"
              width={160}
              height={160}
              className="animate-pulse"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 pb-32 px-6 space-y-20 max-w-4xl mx-auto text-center">
        <section>
          <h1 className="text-4xl font-serif tracking-tight">
            Each thread whispers
          </h1>
          <p className="mt-4 text-lg font-light tracking-wide">
            Slow fashion from the soul of the unknown
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">Current Capsule</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <a
              href="/capsule/raakh-say-raani"
              className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center"
            >
              <Image
                src="/capsules/raakh-thumbnail.jpg"
                alt="Raakh Say Raani"
                width={300}
                height={400}
                className="rounded-lg mb-4"
              />
              <div className="text-xl font-medium">Raakh Say Raani</div>
              <div className="text-sm mt-1">Now open for whispers & pre-orders</div>
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center py-12 opacity-50">
        <Image src="/logo.png" alt="Gumnam Raastay sigil" width={50} height={50} className="mx-auto" />
      </footer>
    </div>
  )
}