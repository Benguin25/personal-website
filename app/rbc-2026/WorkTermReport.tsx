'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SwirlBackground from '../../components/SwirlBackground.js'
import FaithfulnessDiagram from './FaithfulnessDiagram'

const sections = [
  { id: 'intro', label: 'Intro' },
  { id: 'employer', label: 'The employer' },
  { id: 'work', label: 'What I worked on' },
  { id: 'day-in-the-life', label: 'A day in the life' },
  { id: 'goals', label: 'Goals' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'acknowledgments', label: 'Acknowledgments' },
]

const timeline: {
  time: string
  text: string
  image?: string
  portrait?: boolean
}[] = [
  { time: '7:30 AM', text: 'Get on the train', image: 'train.jpg' },
  { time: '8:45 AM', text: 'Arrive at 20 King W', image: 'office.jpg' },
  { time: '9:00 AM', text: 'Finally reach my floor', image: 'hallway.jpg', portrait: true },
  { time: '9:30 AM', text: 'Daily stand up with the squad', image: 'standup.jpg' },
  { time: '10:00 AM', text: 'Writing code', image: 'laptop.jpg', portrait: true },
  { time: '12:00 PM', text: 'Lunch', image: 'lunch.jpg' },
  { time: '1:00 PM', text: 'Fixing the code I wrote at 10' },
  { time: '2:30 PM', text: 'Building an agent for an exec' },
  {
    time: '4:00 PM',
    text: 'Prompt tweaks for the judge model, plus a coffee chat',
    image: 'kitchen.jpg',
    portrait: true,
  },
  { time: '5:00 PM', text: 'Heading home', image: 'home.jpg' },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: '-60px' },
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-2xl md:text-3xl font-semibold text-white mt-16 mb-5">
      {children}
    </h2>
  )
}

export default function WorkTermReport() {
  return (
    <div className="min-h-screen pt-16">
      <SwirlBackground />

      <article className="relative section-padding">
        <div className="max-w-[70ch] mx-auto">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 mt-6"
          >
            <span className="section-label">Co-op Work Term Report, Summer 2026</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Summer at RBC
            </h1>
          </motion.header>

          {/* Section links */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            aria-label="Sections"
            className="flex flex-wrap justify-center gap-2 mb-16"
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.05] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </motion.nav>

          {/* Intro */}
          <motion.section {...fadeIn}>
            <SectionHeading id="intro">Intro</SectionHeading>
            <p className="text-zinc-300 leading-relaxed mb-8">
              From May to September 2026 I worked as a GenAI Engineer at RBC in downtown
              Toronto, on the GenAI team inside Internal Audit. This page is a quick tour of
              what I built, what a normal day looked like, and what I actually took away from
              four months at a bank. If you only read one section, read the goals part at the
              bottom.
            </p>

            <figure className="mb-4">
              <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-xl overflow-hidden border border-white/[0.08]">
                <Image
                  src="/rbc-2026/badge.jpg"
                  alt="My RBC employee badge on day one"
                  fill
                  sizes="(max-width: 640px) 100vw, 384px"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="text-center text-zinc-500 text-sm mt-3">
                Day one, badge acquired
              </figcaption>
            </figure>
          </motion.section>

          {/* The employer */}
          <motion.section {...fadeIn}>
            <SectionHeading id="employer">The employer</SectionHeading>
            <p className="text-zinc-300 leading-relaxed mb-5">
              RBC is the biggest bank in Canada, and Internal Audit is the group that checks
              whether the rest of the bank is doing what it says it does. My team&apos;s job was to
              bring generative AI into that work: building agents that help auditors, and just
              as importantly, building the evaluation and governance layer that decides whether
              an AI tool is trustworthy enough to release across the organization.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-5">
              That second part surprised me. I expected a bank to be slow on AI. Instead the
              constraint wasn&apos;t &ldquo;can we build this,&rdquo; it was &ldquo;can we prove
              it&apos;s reliable enough to trust with audit evidence.&rdquo; Most of my summer was
              spent on that question.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              I worked out of 20 King Street West, which is a great commute if you like trains
              and a bad one if you don&apos;t.
            </p>
          </motion.section>

          {/* What I worked on */}
          <motion.section {...fadeIn}>
            <SectionHeading id="work">What I worked on</SectionHeading>
            <p className="text-zinc-300 leading-relaxed mb-5">
              I never had one big project. I had a new one basically every week or two, which
              was the best part.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-5">
              <strong className="text-white">LLM testing framework.</strong> Built a framework
              to evaluate an agent that turns audit interview transcripts into structured
              forms. It extracts every claim the agent makes, uses a separate judge model to
              check each one against the source transcript, and produces a faithfulness score
              and a per-question breakdown. Those reports are what got submitted for enterprise
              model risk review before the agent could be used by the wider audit team. This
              was the project I spent the most time on and it&apos;s the one I&apos;m most proud of.
            </p>

            <figure className="my-8">
              <div className="glass-effect rounded-2xl p-6 sm:p-8 max-w-md mx-auto">
                <FaithfulnessDiagram />
              </div>
              <figcaption className="text-center text-zinc-500 text-sm mt-3">
                The faithfulness evaluation pipeline
              </figcaption>
            </figure>

            <p className="text-zinc-300 leading-relaxed mb-5">
              <strong className="text-white">AI agent governance.</strong> Worked on the intake
              process for new agents: figuring out what data types and use cases need formal
              approval, then building a classifier agent that walks someone through a few
              questions and tells them whether their agent needs to go through intake. Later
              redesigned the intake forms themselves with a small team to make them less
              painful to fill out.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-5">
              <strong className="text-white">Custom agents for an executive.</strong> Built a
              handful of agents for a senior leader on the team, including one that scans
              internal loss data and the web for emerging fraud, cyber, AI, and vendor risk
              and formats it for executive use, and one that turns a slide deck into speaker
              notes.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-5">
              <strong className="text-white">QA report generator.</strong> Converted audit
              issues and observations from Word documents into streamlined, consistently
              formatted QA reports.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-5">
              <strong className="text-white">Process mapper.</strong> Cleaned up an existing
              repo that maps business processes from documents, simplified the outputs so they
              were actually readable, and wired it into the same faithfulness evaluation so its
              outputs could be trusted.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-5">
              <strong className="text-white">Linking two control databases.</strong> My last
              project. The enterprise controls database and the auditor-tested controls
              database don&apos;t talk to each other, so auditors have been bridging them with
              keyword search. I&apos;m working on a better way to match records across the two.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Skills-wise this was Python, prompt design, LLM evaluation (faithfulness,
              grounding, LLM-as-a-judge), working with model APIs through Bedrock, and a lot of
              reading other people&apos;s code. Almost none of it came from a classroom. The eval
              mindset came from the stats side of my degree though, which I didn&apos;t expect.
            </p>
          </motion.section>

          {/* A day in the life */}
          <section>
            <motion.div {...fadeIn}>
              <SectionHeading id="day-in-the-life">A day in the life</SectionHeading>
            </motion.div>

            <ol className="relative border-l border-white/[0.1] ml-3 sm:ml-24 space-y-10 pb-2">
              {timeline.map((item) => (
                <motion.li
                  key={item.time}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: '-40px' }}
                  className="relative pl-6 sm:pl-8"
                >
                  <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-400 border-2 border-black" />
                  <div className="sm:absolute sm:-left-24 sm:top-0 sm:w-[104px] sm:-translate-x-8 sm:text-right">
                    <span className="text-indigo-300 text-sm font-semibold tabular-nums">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed mt-1 sm:mt-0">{item.text}</p>
                  {item.image && (
                    <div
                      className={`relative mt-4 rounded-xl overflow-hidden border border-white/[0.08] ${
                        item.portrait ? 'aspect-[3/4] max-w-[260px]' : 'aspect-[4/3] max-w-md'
                      }`}
                    >
                      <Image
                        src={`/rbc-2026/${item.image}`}
                        alt={item.text}
                        fill
                        sizes="(max-width: 640px) 100vw, 448px"
                        className="object-cover"
                      />
                    </div>
                  )}
                </motion.li>
              ))}
            </ol>
          </section>

          {/* Goals */}
          <motion.section {...fadeIn}>
            <SectionHeading id="goals">Goals</SectionHeading>
            <p className="text-zinc-300 leading-relaxed mb-5">
              I set three goals at the start of the term. Here&apos;s how they went.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-2">
              <strong className="text-white">
                1. Work on a wide variety of projects instead of one thing all summer.
              </strong>
            </p>
            <p className="text-zinc-300 leading-relaxed mb-5">
              Hit this one. Six or seven distinct projects, each a different kind of problem. I
              learned way more from the variety than I would have from going deep on one thing,
              and I got a much better picture of how LLM systems actually get built, evaluated,
              and approved inside a large company.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-2">
              <strong className="text-white">
                2. Learn to communicate in a corporate environment.
              </strong>
            </p>
            <p className="text-zinc-300 leading-relaxed mb-5">
              This was the biggest adjustment. I&apos;d worked at a startup before but never
              anywhere I had to explain technical decisions to executives in plain language, or
              write documentation precise enough to survive a formal risk review. I&apos;m not
              perfect at it but I&apos;m a lot more comfortable than I was in May.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-2">
              <strong className="text-white">3. Actually network.</strong>
            </p>
            <p className="text-zinc-300 leading-relaxed">
              I&apos;d never done a coffee chat before this summer. Did a handful, they were less
              awkward than expected, and I came out of most of them with real advice. The thing
              I&apos;d change: start earlier. I left a lot of good conversations until August.
            </p>
          </motion.section>

          {/* Conclusion */}
          <motion.section {...fadeIn}>
            <SectionHeading id="conclusion">Conclusion</SectionHeading>
            <p className="text-zinc-300 leading-relaxed mb-5">
              If you only remember one thing from this page: building the AI is the easy part.
              Proving it&apos;s trustworthy is the work. I spent a summer at a bank and came out
              caring about evaluation, which is not what I expected to say.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Next term I&apos;m at Magnet Forensics as a remote software engineer. Different
              domain, but I&apos;m bringing the eval mindset with me.
            </p>
          </motion.section>

          {/* Acknowledgments */}
          <motion.section {...fadeIn}>
            <SectionHeading id="acknowledgments">Acknowledgments</SectionHeading>
            <p className="text-zinc-300 leading-relaxed">
              Thanks to Preet for letting me bounce between projects instead of parking me on
              one. Thanks to Feroz, Aditya, Katherine, Leigh, Japleen, Mira, Sudhandar, Derek
              and Jun for the projects, the reviews, and the coffee chats. And to the summer
              intern cohort for making the lunches good.
            </p>
          </motion.section>
        </div>
      </article>
    </div>
  )
}
