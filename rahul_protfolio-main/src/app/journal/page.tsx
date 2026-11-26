'use client';

import { ArrowLeftIcon } from '@/components/icons';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const SolarSystemBackground = dynamic(
  () => import('@/components/SolarSystem').then((mod) => mod.SolarSystemBackground),
  { ssr: false }
);

export default function StartAProjectPage() {
  return (
    <section
      aria-labelledby="project-heading"
      className="relative isolate flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center text-white"
    >
      <motion.div
          className="fixed top-6 left-6 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors backdrop-blur-md bg-white/5 px-4 py-2 rounded-xl border border-white/10 shadow-md"
          >
            <motion.span
              className="inline-flex"
              whileHover={{ x: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </motion.span>
            <span className="text-sm font-semibold">Back to Orbit</span>
          </Link>
        </motion.div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 [contain:paint] motion-reduce:hidden"
      >
        <SolarSystemBackground />
      </div>

      <h1 id="project-heading" className="text-3xl font-bold">
        Coming soon
      </h1>
      <p className="max-w-md text-sm leading-6 text-slate-300">
        I’ll add details here about working together on a website or app.
      </p>
    </section>
  );
}