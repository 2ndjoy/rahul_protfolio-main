'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeftIcon } from '@/components/icons'

// The background generates random star positions in the browser.
const SolarSystemBackground = dynamic(
  () =>
    import('@/components/SolarSystem').then(
      (module) => module.SolarSystemBackground
    ),
  { ssr: false }
)

type Project = {
  id: number
  title: string
  description: string
  status: string
  tech: string
  year: string
  image: string
  repoPreview?: string
  links: {
    label: string
    href: string
    isDemo?: boolean
  }[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Ticket Nen BD',
    description:
      'I built a public demo of an event-ticketing platform for Bangladesh. ' +
      'Visitors can switch roles to draft an event as an organiser, publish it as an admin, and reserve a ticket as a buyer. ' +
      'The buyer can then download a PDF ticket with a QR code. ' +
      'I tested that journey with Playwright and configured Render to deploy updates after the GitHub Actions checks pass.',
    status: 'Public demo',
    tech: 'React, Node.js, Express, MongoDB, Playwright, GitHub Actions, Render',
    year: '2026',
    image: '/projImg/ticket-nen-bd-portfolio.png',
    repoPreview:
      'https://opengraph.githubassets.com/1/2ndjoy/ticket-nen-bd-portfolio',
    links: [
      {
        label: 'Live Preview',
        href: 'https://ticket-nen-bd-demo.onrender.com/',
        isDemo: true,
      },
      {
        label: 'GitHub Repository',
        href: 'https://github.com/2ndjoy/ticket-nen-bd-portfolio',
      },
      {
        label: 'CI Checks',
        href: 'https://github.com/2ndjoy/ticket-nen-bd-portfolio/actions/workflows/ci.yml',
      },
    ],
  },
  {
    id: 5,
    title: 'WorkFlowHub',
    description:
      'On a three-person team, I added status filtering to a Django API and React interface. ' +
      'I integrated it with a teammate’s pagination so users could select a status, load more items, and keep seeing only matching results.',
    status: 'Team project · Auckland Institute of Studies',
    tech: 'Django REST Framework, React, Playwright, GitHub Actions',
    year: '2026',
    image: '/projImg/workflowhub.png',
    repoPreview:
      'https://opengraph.githubassets.com/1/kondor256/ais-cicd-workflowhub',
    links: [
      {
        label: 'Live Preview',
        href: 'https://workflowhub-frontend.onrender.com/',
        isDemo: true,
      },
      {
        label: 'My Filtering PR',
        href: 'https://github.com/kondor256/ais-cicd-workflowhub/pull/52',
      },
      {
        label: 'Team Repository',
        href: 'https://github.com/kondor256/ais-cicd-workflowhub',
      },
    ],
  },
  {
    id: 6,
    title: 'StudySphere',
    description:
      'I independently built a student workspace for tracking assignments, writing notes, and organising course materials. ' +
      'I developed the React frontend and Node.js API and set up automated deployments.',
    status: 'Independent project',
    tech: 'React, Node.js, Express, MongoDB, GitHub Actions',
    year: '2026',
    image: '/projImg/studysphere.png',
    repoPreview: 'https://opengraph.githubassets.com/1/2ndjoy/studysphere-',
    links: [
      {
        label: 'Live Preview',
        href: 'https://studysphere-mocha.vercel.app/',
        isDemo: true,
      },
      {
        label: 'GitHub Repository',
        href: 'https://github.com/2ndjoy/studysphere-',
      },
      {
        label: 'CI Checks',
        href: 'https://github.com/2ndjoy/studysphere-/actions/workflows/studysphere-ci.yml',
      },
    ],
  },
  {
    id: 2,
    title: 'Kather Ghor',
    description:
      'An online furniture marketplace where users can buy and sell furniture, manage listings, advertise products, and track sales performance.',
    status: 'Deployed Demo',
    tech: 'MERN Stack, Tailwind CSS',
    year: '2022',
    image: '/projImg/katherghor.png',
    links: [
      {
        label: 'Live Preview',
        href: 'https://katherghor.netlify.app/',
        isDemo: true,
      },
      {
        label: 'GitHub Client',
        href: 'https://github.com/2ndjoy/kather-ghor/tree/main/client-side',
      },
      {
        label: 'GitHub Server',
        href: 'https://github.com/2ndjoy/kather-ghor/tree/main/server-side',
      },
    ],
  },
  {
    id: 3,
    title: 'Find Basha',
    description:
      'A rental and housing platform for searching homes, posting rental ads, managing listings, and connecting landlords with tenants.',
    status: 'Deployed Demo',
    tech: 'MERN Stack, Tailwind CSS',
    year: '2023',
    image: '/projImg/findbasha.png',
    links: [
      {
        label: 'Live Preview',
        href: 'https://findbasha.netlify.app/',
        isDemo: true,
      },
      {
        label: 'GitHub Client',
        href: 'https://github.com/2ndjoy/newBashaVara-main',
      },
      {
        label: 'GitHub Server',
        href: 'https://github.com/2ndjoy/Basha-vara-in-sylhet-server',
      },
    ],
  },
  {
    id: 4,
    title: 'Eduvoyage',
    description:
      'A Java-based educational application powered by Firebase for real-time data management, authentication, and cloud integration.',
    status: 'Deployed Demo',
    tech: 'Java, Firebase',
    year: '2024',
    image: '/projImg/eduvoyage.png',
    links: [
      {
        label: 'GitHub Client',
        href: 'https://github.com/2ndjoy/eduVoyage_v2',
      },
    ],
  },
]

function ProjectCard({ project }: { project: Project }) {
  const [showRepoPreview, setShowRepoPreview] = useState(false)
  const repoPreview = showRepoPreview ? project.repoPreview : undefined

  return (
    <motion.div
      className="relative backdrop-blur-lg bg-white/5 rounded-xl border border-white/10 overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
        <div className="flex flex-col justify-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">
              {project.title}
            </h3>

            <p className="text-white/70">{project.description}</p>

            <div className="flex items-center gap-3">
              <div
                className={`w-2 h-2 rounded-full ${
                  project.status === 'Active'
                    ? 'bg-green-400 animate-pulse'
                    : 'bg-gray-400'
                }`}
              />
              <span className="text-white/70 text-sm">{project.status}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mt-4">
              <div>
                <p className="text-white/50">Technology</p>
                <p className="text-white/80">{project.tech}</p>
              </div>
              <div>
                <p className="text-white/50">Year</p>
                <p className="text-white/80">{project.year}</p>
              </div>
            </div>

            <div className="flex gap-4 mt-6 flex-wrap">
              {project.links.map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 text-sm text-white backdrop-blur-lg rounded-lg transition-all ${
                      link.isDemo
                        ? 'bg-blue-500/20 hover:bg-blue-500/40'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="relative rounded-lg border-8 border-slate-700 bg-slate-800 overflow-hidden aspect-video">
              <Image
                src={repoPreview ?? project.image}
                alt={
                  repoPreview
                    ? `${project.title} GitHub repository preview`
                    : `${project.title} screenshot`
                }
                fill
                sizes="(max-width: 528px) 85vw, 448px"
                className="object-cover"
                unoptimized={Boolean(repoPreview)}
                onError={
                  project.repoPreview && !showRepoPreview
                    ? () => setShowRepoPreview(true)
                    : undefined
                }
              />
            </div>

            <div className="w-full h-4 bg-slate-700 mx-auto rounded-b-lg" />
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-400/10 blur-lg" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-blue-400/10 blur-lg" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none" />
    </motion.div>
  )
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative">
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
          <ArrowLeftIcon className="h-5 w-5 group-hover:text-blue-300 transition-colors" />
          <span className="text-sm font-medium">Back to Orbit</span>
        </Link>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-24 space-y-12 relative z-10">
        <motion.h1
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Journeys Through Code
        </motion.h1>

        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}