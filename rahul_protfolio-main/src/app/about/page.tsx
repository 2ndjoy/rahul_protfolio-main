'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeftIcon } from '@/components/icons'

const SolarSystemBackground = dynamic(
  () =>
    import('@/components/SolarSystem').then(
      (module) => module.SolarSystemBackground
    ),
  { ssr: false }
)

const backgroundSections = [
  {
    title: 'Education',
    details: [
      'I’m studying for a Master of Information Technology at Auckland Institute of Studies. My cloud and CI/CD courses give me a chance to practise testing and deploying the apps I build.',
      'I earned my BSc in Computer Science and Engineering at Leading University in Sylhet, Bangladesh. I also completed Programming Hero’s full-stack web development programme.',
    ],
  },
  {
    title: 'Professional Journey',
    details: [
      'I’ve worked as a freelance frontend developer. I also built a portfolio edition of Ticket Nen BD where you can try the ticketing app as a buyer, an organiser or an admin.',
      'I worked with two teammates on WorkFlowHub. I connected the React status filter to the Django API so the status you choose stays selected when you load more items.',
      'I built StudySphere on my own to keep assignments and study notes together. I also set it up to deploy automatically when I push an update.',
    ],
  },
]

const skills = [
  'JavaScript / TypeScript',
  'React / Next.js',
  'Tailwind CSS',
  'Node.js / Express',
  'Python / Django',
  'REST APIs',
  'MongoDB / Firebase',
  'Playwright',
  'Git / GitHub',
  'GitHub Actions / CI/CD',
  'Docker',
  'Load testing on Azure',
]

export default function AboutClient() {
  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-8 text-white bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <SolarSystemBackground />

      <div className="relative z-10 max-w-4xl mx-auto">
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

        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            About
          </h1>

          <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed">
            I’m Rahul Chakrabarty Joy. A developer, creator and problem solver.
          </p>

          <div className="space-y-6 text-lg text-gray-300">
            <p>
              I began my development journey at 18, and since then, I’ve been
              committed to building solutions that go beyond the ordinary.
            </p>

            <p>
              Fast forward to today, I’ve worked with everything from basic
              HTML/CSS to complex React applications, Node.js backends, and
              cloud infrastructure. Each project, whether big or small, has
              been a vital stepping stone in my journey.
            </p>

            <p>
              What excites me most about development is creating solutions that
              have real impact. It’s not just about writing code—it’s about
              crafting experiences that solve problems and improve people’s
              lives. Understanding user needs, building efficient solutions,
              and continuously iterating based on feedback is what makes
              great software.
            </p>

            <blockquote className="border-l-4 border-purple-500 pl-4 italic my-8 text-purple-200">
              “Any fool can write code that a computer can understand. Good
              programmers write code that humans can understand.” — Martin Fowler
            </blockquote>

            <p>
              This quote resonates deeply with me because I believe code is
              poetry. I don’t just want things to work—I want them to be
              elegant, maintainable, and a joy to work with. Clean code that
              solves real problems is what drives me.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-300">Experience</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {backgroundSections.map(({ title, details }) => (
              <div key={title}>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {title}
                </h3>

                <ul className="space-y-3">
                  {details.map((detail) => (
                    <li key={detail} className="flex items-start">
                      <span aria-hidden="true" className="text-blue-400 mr-2">
                        •
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-300">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mt-16">
          <h2 className="text-xl font-semibold mb-4 text-white animate-bounce">
            Want to see my CV?
          </h2>

          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 250 }}
          >
            <Link
              href="/cv"
              className="inline-block px-6 py-2 text-sm md:text-base font-semibold tracking-wide text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full shadow-inner shadow-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300"
            >
              View CV
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  )
}