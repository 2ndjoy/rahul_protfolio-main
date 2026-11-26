'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  CheckCircle,
  Code,
  Database,
  Globe,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { ArrowLeftIcon } from '@/components/icons'

const SolarSystemBackground = dynamic(
  () =>
    import('@/components/SolarSystem').then(
      (module) => module.SolarSystemBackground
    ),
  { ssr: false }
)

const services = [
  {
    title: 'Full-Stack Web Applications',
    description:
      'I built StudySphere so students can track assignments, write notes and organise course materials in one place.',
    icon: Code,
    iconColor: 'bg-blue-400',
    hoverColor: 'bg-blue-400/10',
  },
  {
    title: 'Backend APIs & Databases',
    description:
      'On WorkFlowHub, I added status filtering to the Django API and React interface. ' +
      'I integrated it with a teammate’s pagination so users could load more items and keep their selected filter.',
    icon: Database,
    iconColor: 'bg-blue-400',
    hoverColor: 'bg-blue-400/10',
  },
  {
    title: 'Automated Testing',
    description:
      'For Ticket Nen BD, I used Playwright to test the journey from an organiser drafting an event to a buyer downloading a PDF ticket with a QR code.',
    icon: CheckCircle,
    iconColor: 'bg-green-400',
    hoverColor: 'bg-green-400/10',
  },
  {
    title: 'CI/CD & Deployment',
    description:
      'I configured GitHub Actions to test Ticket Nen BD and build its frontend. ' +
      'Render deploys updates from the main branch after those checks pass.',
    icon: Zap,
    iconColor: 'bg-orange-400',
    hoverColor: 'bg-orange-400/10',
  },
]

type TechnologyGroup = {
  title: string
  icon: LucideIcon
  iconColor: string
  tools: string[]
}

const technologyGroups: TechnologyGroup[] = [
  {
    title: 'Frontend',
    icon: Globe,
    iconColor: 'bg-blue-400',
    tools: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    title: 'Backend & Data',
    icon: Database,
    iconColor: 'bg-green-400',
    tools: [
      'Node.js',
      'Express',
      'Python',
      'Django REST Framework',
      'MongoDB',
      'Firebase Authentication',
    ],
  },
  {
    title: 'Testing & Deployment',
    icon: Zap,
    iconColor: 'bg-blue-400',
    tools: [
      'Playwright',
      'Vitest',
      'GitHub Actions',
      'Docker',
      'Render',
      'Vercel',
      'Netlify',
    ],
  },
]

function TechSection({
  group,
  index,
}: {
  group: TechnologyGroup
  index: number
}) {
  const [expanded, setExpanded] = useState(false)
  const visibleTools = expanded ? group.tools : group.tools.slice(0, 8)
  const Icon = group.icon
  const listId = `tech-group-${index}`

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 rounded-xl ${group.iconColor}`}>
            <Icon aria-hidden="true" className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">{group.title}</h3>
        </div>

        <ul
          id={listId}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6"
        >
          {visibleTools.map((tool, toolIndex) => (
            <motion.li
              key={tool}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: toolIndex * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all duration-200 text-center">
                {tool}
              </div>
            </motion.li>
          ))}
        </ul>

        {group.tools.length > 8 && (
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={listId}
            onClick={() => setExpanded((previous) => !previous)}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
          >
            {expanded ? 'Show Less' : `Show ${group.tools.length - 8} More`}
            <motion.span
              className="inline-flex"
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle aria-hidden="true" className="w-4 h-4" />
            </motion.span>
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-x-hidden">
      <SolarSystemBackground />

      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-white/70 hover:text-white/90 transition-colors group backdrop-blur-lg bg-white/5 px-3 py-2 rounded-lg border border-white/10"
        >
          <motion.span
            whileHover={{ x: -4 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <ArrowLeftIcon className="h-5 w-5 group-hover:text-blue-300 transition-colors" />
          </motion.span>
          <span className="text-sm font-medium">Back to Orbit</span>
        </Link>
      </motion.div>

      <div className="relative z-10">
        <section className="pt-24 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-pulse">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Full-Stack
                </span>
                <br />
                <span className="text-white">Developer</span>
              </h1>

              <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl text-white/80 leading-relaxed">
                <p>
                  I’m a Master of Information Technology student in Auckland.
                  I build web applications with React, Node.js and Django.
                </p>
                <p>
                  I also write automated tests for the things users need to do,
                  like filtering a workflow list or booking and downloading a ticket.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What I Offer
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map(
                ({ title, description, icon: Icon, iconColor, hoverColor }, index) => (
                  <motion.div
                    key={title}
                    className="relative group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                      <div
                        aria-hidden="true"
                        className={`pointer-events-none absolute inset-0 ${hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />

                      <div
                        className={`inline-flex p-4 rounded-xl ${iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon aria-hidden="true" className="w-8 h-8" />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4">
                        {title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {description}
                      </p>

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-16 translate-x-16"
                      />
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Technology Stack
            </motion.h2>

            <div className="space-y-12">
              {technologyGroups.map((group, index) => (
                <TechSection key={group.title} group={group} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-400">
                Let’s Work Together
              </h2>

              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                I’m looking for a software development internship in Auckland.
                You can try my live demos, read the code and review my WorkFlowHub
                pull request.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                >
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-2 text-sm md:text-base font-semibold tracking-wide text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full shadow-inner shadow-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300"
                  >
                    Get in Touch
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                >
                  <Link
                    href="/works"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full text-white font-semibold text-sm hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    View Projects
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}