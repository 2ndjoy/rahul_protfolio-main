'use client'

import { SolarSystemBackground } from '@/components/SolarSystem'
import { motion } from 'framer-motion'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'

/* ===========================
   SOLAR SYSTEM BACKGROUND
=========================== */


export default function CVPage() {
    return (
        <>
            <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-slate-200 py-16 px-6">

                <SolarSystemBackground />

                <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-10 shadow-2xl relative z-10">

                    {/* HEADER */}
                    <div className="text-center border-b border-white/30 pb-6 mb-8">
                        <h1 className="text-3xl font-bold tracking-wide text-white">
                            RAHUL CHAKRABARTY JOY
                        </h1>

                        <div className="text-sm text-slate-300 mt-3 space-y-1">
                            <p>
                                rahulchakrabartyjoy15@gmail.com
                            </p>
                            <p>Auckland, New Zealand</p>
                            <p className="flex justify-center gap-4 text-slate-300">
                                <Link
                                    href="https://github.com/2ndjoy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    GitHub
                                </Link>

                                <span>|</span>

                                <Link
                                    href="https://www.linkedin.com/in/rahul-chakrabarty-joy-47a95b209/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    LinkedIn
                                </Link>



                            </p>
                        </div>
                    </div>

                    {/* OBJECTIVE */}
                    <section className="mb-8">
                        <h2 className="uppercase tracking-widest text-sm font-semibold text-blue-300 mb-3 border-b border-blue-400/30 pb-1">
                            Career Objective
                        </h2>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Master of Information Technology student at Auckland Institute of Studies, with a completed degree in Computer Science and Engineering and hands-on experience in full-stack development, cloud computing and DevOps. Seeking an IT internship or entry-level opportunity in software development, cloud applications, DevOps or IT support, where I can contribute practical technical skills and continue developing through collaborative work.
                        </p>
                    </section>

                    {/* TECHNICAL SKILLS */}
                    <section className="mb-8">
                        <h2 className="uppercase tracking-widest text-sm font-semibold text-blue-300 mb-3 border-b border-blue-400/30 pb-1">
                            Technical Skills
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                            <p><span className="font-semibold text-white">Languages:</span> JavaScript, Python, Java, PHP, C, C++, Rust</p>
                            <p><span className="font-semibold text-white">Web Development:</span> React.js, Next.js, Node.js, Express.js, Django, Django REST Framework</p>
                            <p><span className="font-semibold text-white">Databases:</span> MongoDB, MySQL, SQLite, Firebase</p>
                            <p><span className="font-semibold text-white">Frontend & Mobile:</span> React Router, Tailwind CSS, Java (Android), React Native</p>
                            <p><span className="font-semibold text-white">Cloud & Hosting:</span> Microsoft Azure, AWS, Render, Netlify, Vercel</p>
                            <p><span className="font-semibold text-white">DevOps & CI/CD:</span> Docker, Docker Compose, GitHub Actions, Git, GitHub</p>
                            <p><span className="font-semibold text-white">Testing & Quality:</span> pytest, Playwright, Ruff, oxlint, Postman</p>
                            <p><span className="font-semibold text-white">Authentication & Tools:</span> JWT, Firebase Authentication, REST APIs, Figma, VS Code</p>
                        </div>
                    </section>

                    {/* PROJECTS */}
                    <section className="mb-8">
                        <h2 className="uppercase tracking-widest text-sm font-semibold text-blue-300 mb-3 border-b border-blue-400/30 pb-1">
                            Projects
                        </h2>

                        <div className="space-y-6 text-sm text-slate-300">

                            <div>
                                <Link href="https://github.com/2ndjoy/ticket-nen-bd-portfolio" target="_blank" rel="noopener noreferrer" className="inline-block">
                                    <h3 className="font-semibold text-white hover:text-blue-400 transition-colors">Ticket Nen BD — Capstone & Portfolio Edition</h3>
                                </Link>
                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>Developed a full-stack event ticketing platform with buyer, organiser and administrator dashboards.</li>
                                    <li>Implemented protected routes, event approval workflows and QR ticket functionality.</li>
                                    <li>Containerised the portfolio edition with Docker Compose and deployed a live demo on Render.</li>
                                    <li>Awarded A+ for the original capstone project.</li>
                                </ul>
                                <p className="mt-2 text-blue-300">Tech: React, Node.js, Express.js, MongoDB, Docker, Render</p>
                            </div>
                            <div>
                                <Link href="https://github.com/2ndjoy/devops-taskflow" target="_blank" rel="noopener noreferrer" className="inline-block">
                                    <h3 className="font-semibold text-white hover:text-blue-400 transition-colors">DevOps Taskflow</h3>
                                </Link>
                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>Built a REST API for task management with JWT authentication and ownership-based access control.</li>
                                    <li>Implemented CRUD operations and automated tests; 11 tests passed.</li>
                                    <li>Configured CI/CD pipelines using GitHub Actions and CircleCI for automated build, testing, and deployment.</li>
                                </ul>
                                <p className="mt-2 text-blue-300">Tech: Python, Django, Django REST Framework, SQLite, pytest, GitHub Actions</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">WorkFlowHub — Collaborative DevOps Project</h3>
                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>Contributed pull request standards, CODEOWNERS and automated lint checks to a team project.</li>
                                    <li>Implemented three Playwright end-to-end tests that passed locally and in GitHub Actions.</li>
                                    <li>Collaborated through GitHub issues, branches and pull requests.</li>
                                </ul>
                                <p className="mt-2 text-blue-300">Tech: GitHub Actions, Playwright, Ruff, oxlint, Git</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">SkyBridge — Cloud Infrastructure & Security (Group Project)</h3>
                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>Contributed Azure virtual networking, network security groups, load balancing and virtual machine scale sets.</li>
                                    <li>Verified HTTPS health checks and tested CPU-based autoscaling; additional scaling was constrained by subscription quota.</li>
                                    <li>Performed authorised endpoint protection testing and cloud cost analysis.</li>
                                </ul>
                                <p className="mt-2 text-blue-300">Tech: Azure VNet, NSG, VMSS, Load Balancer, Microsoft Defender, AWS Cost Explorer</p>
                            </div>

                            <div>
                                <Link
                                    href="https://katherghor.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <h3 className="font-semibold text-white hover:text-blue-400 transition-colors">
                                        Kather-Ghor
                                    </h3>
                                </Link>

                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>Responsive UI with React and Tailwind CSS</li>
                                    <li>Backend APIs using Node.js and Express</li>
                                </ul>
                                <p className="mt-2 text-blue-300">Tech: MERN Stack, Firebase</p>
                            </div>

                            <div>
                                <Link
                                    href="https://findbasha.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <h3 className="font-semibold text-white hover:text-blue-400 transition-colors">
                                        FindBasha
                                    </h3>
                                </Link>

                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>Search and rent houses with advertisement system</li>
                                    <li>Role-based dashboard with real-time data operations</li>
                                </ul>
                                <p className="mt-2 text-blue-300">Tech: MERN Stack, Firebase</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">EduVoyage</h3>

                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>Developed an Android educational application using Java with Firebase integration</li>
                                    <li>Implemented user authentication, real-time database operations, and session management</li>
                                    <li>Designed interactive UI for course tracking and progress monitoring</li>
                                </ul>

                                <p className="mt-2 text-blue-300">
                                    Tech: Java, Firebase, XML
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* RESEARCH */}
                    <section className="mb-8">
                        <h2 className="uppercase tracking-widest text-sm font-semibold text-blue-300 mb-3 border-b border-blue-400/30 pb-1">Research</h2>
                        <div className="text-sm text-slate-300">
                            <h3 className="font-semibold text-white">A Lightweight and Explainable Approach to Cloud Cost Anomaly Detection for Small-Scale Cloud Applications</h3>
                            <p className="italic text-slate-400 mt-1">Master's research project — Ongoing</p>
                            <ul className="list-disc ml-6 mt-2 space-y-1">
                                <li>Investigating lightweight and explainable methods for detecting unusual cloud expenditure.</li>
                                <li>Developed a research proposal, literature review, research questions and experimental design.</li>
                            </ul>
                        </div>
                    </section>

                    {/* EXPERIENCE */}
                    <section className="mb-8">
                        <h2 className="uppercase tracking-widest text-sm font-semibold text-blue-300 mb-3 border-b border-blue-400/30 pb-1">Experience</h2>
                        <div className="text-sm text-slate-300">
                            <h3 className="font-semibold text-white">Freelance Front-End Web Developer</h3>
                            <p className="italic text-slate-400 mt-1">March 2025 – December 2025</p>
                            <ul className="list-disc ml-6 mt-2 space-y-1">
                                <li>Developed responsive web interfaces using React and modern frontend technologies.</li>
                            </ul>
                        </div>
                    </section>

                    {/* VOLUNTEERING */}
                    <section className="mb-8">
                        <h2 className="uppercase tracking-widest text-sm font-semibold text-blue-300 mb-3 border-b border-blue-400/30 pb-1">Volunteering</h2>
                        <div className="text-sm text-slate-300">
                            <h3 className="font-semibold text-white">Volunteer — Fair Food New Zealand</h3>
                            <p>Auckland, New Zealand | Current</p>
                            <p className="mt-2">Participate in regular volunteering to support community food rescue operations.</p>
                        </div>
                    </section>

                    {/* EDUCATION */}
                    <section>
                        <h2 className="uppercase tracking-widest text-sm font-semibold text-blue-300 mb-3 border-b border-blue-400/30 pb-1">Education</h2>
                        <div className="text-sm text-slate-300 space-y-4">
                            <div>
                                <p className="font-semibold text-white">Master of Information Technology (NZQF Level 9)</p>
                                <p>Auckland Institute of Studies, Auckland, New Zealand</p>
                                <p className="italic text-slate-400">September 2026 – Present</p>
                                <p className="mt-2">Coursework: Research Methods, Continuous Integration and Continuous Deployment, Cloud Application Development</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">B.Sc. in Computer Science and Engineering</p>
                                <p>Leading University, Sylhet, Bangladesh</p>
                                <p className="italic text-slate-400">Completed: December 2025</p>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
            <motion.div className="fixed top-6 left-6 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors backdrop-blur-md bg-white/5 px-4 py-2 rounded-xl border border-white/10 shadow-md">
                    <motion.div whileHover={{ x: -3 }} transition={{ stiffness: 300 }}>
                        <ArrowLeftIcon className="h-5 w-5" />
                    </motion.div>
                    <span className="text-sm font-semibold">Back to Orbit</span>
                </Link>
            </motion.div>
        </>
    )
}