"use client"

import React from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

const sections = [
  { id: 'intro', label: 'Intro' },
  { id: 'employer', label: 'The employer' },
  { id: 'work', label: 'What I worked on' },
  { id: 'office', label: 'Life at Magnet' },
  { id: 'goals', label: 'Goals' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'acknowledgments', label: 'Acknowledgments' },
]

const projects = [
  {
    title: 'Chromium browser artifacts',
    body: 'Built artifacts for cookies and address-bar shortcuts across Chromium-based browsers. A lot of the underlying storage is similar, so part of the work was sharing code between browsers while accounting for the differences. I also worked on handling decryption failures so that an unreadable value would not prevent the rest of a record from being returned.',
  },
  {
    title: 'Windows timestamps',
    body: 'Worked on how scheduled-task timestamps are read and labelled. This involved checking which sources use local time or UTC, and researching what each timestamp actually represents. One finding was that the time a task was created and the time it was registered on a computer describe different events, so they needed to stay separate.',
  },
  {
    title: 'Firefox Session Storage',
    body: 'Worked on extracting temporary website data from Firefox session files. The same information can appear in several saved snapshots, so this included merging repeated entries while keeping track of where they came from. This work is still being finalized as I write the draft.',
  },
]

const goals = [
  {
    heading: 'Get comfortable with professional software development.',
    body: 'I think I met this one. I wanted to improve at code reviews, version control, testing, and working in an existing codebase. Reviews showed me how many things there are to keep an eye on as a developer. I became more comfortable finding my way around the code and applying feedback, and I have a much better understanding of why the review process matters.',
  },
  {
    heading: 'Learn new tools and adapt to the workflow.',
    body: 'This took time. It was probably halfway through the internship before I felt like I really had a handle on the flow of things. Reading documentation, exploring the code, and asking questions all helped. By this point I feel much more confident picking up unfamiliar tasks and working through them with less guidance.',
  },
  {
    heading: 'Explain my work more clearly.',
    body: 'Still working on this one. Team meetings and debriefs gave me practice explaining my code and decisions. I can understand something in my head but get caught by a complicated question on the spot. I want to get better at taking a moment to think and breaking my answer into smaller pieces, especially when the person asking does not have the same context.',
  },
]

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="scroll-mt-24 text-2xl md:text-3xl font-semibold text-white mb-8">{children}</h2>
}

function Photo({ name, alt, caption, priority = false, portrait = false }: {
  name: string; alt: string; caption: string; priority?: boolean; portrait?: boolean
}) {
  return (
    <figure>
      <div className={`relative rounded-xl overflow-hidden border border-white/[0.08] ${portrait ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
        <Image src={`/magnet-2026/${name}.webp`} alt={alt} fill sizes="(max-width: 768px) 100vw, 560px" className="object-cover" priority={priority} />
      </div>
      <figcaption className="text-center text-zinc-500 text-sm mt-3">{caption}</figcaption>
    </figure>
  )
}

export default function Report() {
  const reducedMotion = useReducedMotion()
  const fadeIn = {
    initial: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: reducedMotion ? 0 : 0.6 },
    viewport: { once: true, margin: '-60px' },
  }

  return (
    <div className="min-h-screen pt-16">
      <article className="relative section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.header {...fadeIn} className="text-center mb-10 mt-6">
            <span className="section-label">Co-op Work Term Report, Fall 2026</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Fall at Magnet Forensics</h1>
            <p className="text-zinc-500 text-sm mt-4">Draft · November 2026</p>
          </motion.header>

          <nav aria-label="Sections" className="flex flex-wrap justify-center gap-2 mb-20">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.05] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400 focus-visible:outline-offset-4">
                {section.label}
              </a>
            ))}
          </nav>

          <motion.section {...fadeIn} className="mb-20">
            <div className="grid lg:grid-cols-[3fr,2fr] gap-10 lg:gap-16 items-center">
              <div>
                <SectionHeading id="intro">Intro</SectionHeading>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  This fall I’m working as a Software Developer Co-op on the Artifacts team at Magnet Forensics, from September 8 to December 11, 2026. Most of my work has been on browser artifacts and Windows timestamps. This report covers what I built, what it was like learning the codebase, and how my goals have gone so far.
                </p>
              </div>
              <Photo name="mission" alt="Seek justice. Protect the innocent. written on the Magnet office wall" caption="At the Waterloo office" priority />
            </div>
          </motion.section>

          <motion.section {...fadeIn} className="mb-20">
            <SectionHeading id="employer">The employer</SectionHeading>
            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-5">
              <p className="text-zinc-300 leading-relaxed">
                Magnet Forensics builds digital forensics software that helps examiners understand data from devices. My team works on artifacts in Magnet AXIOM. An artifact is a particular kind of information pulled from a device, like a browser cookie, saved website data, or a scheduled task, and presented in a form an examiner can use.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                I didn’t realize how interesting digital forensics would be before this term. There is a lot of research behind getting useful information out of a file, and small details can change what that information means. It gave me a new appreciation for how complicated and important the software engineering side is.
              </p>
            </div>
          </motion.section>

          <motion.section {...fadeIn} className="mb-20">
            <SectionHeading id="work">What I worked on</SectionHeading>
            <p className="text-zinc-300 leading-relaxed mb-10 max-w-3xl">
              My favourite work was building new artifacts. They took a lot of research, and it was satisfying to add something new to the product.
            </p>
            <div className="glass-effect rounded-2xl p-7 md:p-9 mb-6">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Firefox Local Storage</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Websites use local storage to save small pieces of data in the browser. I researched how Firefox stores it, built support for reading the formats, and connected that to a new artifact. The work covered both older and newer storage formats, so I had to understand how each one worked and check that the output matched the source data.
                  </p>
                  <p className="text-zinc-400 leading-relaxed mt-4">
                    This was one of the projects I was proudest of. I got to take it from research through implementation and testing, then explain the work to the team in a debrief.
                  </p>
                </div>
                <figure className="max-w-sm w-full mx-auto">
                  <ol className="space-y-3" aria-label="The steps involved in building a new artifact">
                    {[
                      ['Research the format', 'Read the files, documentation, and browser source.'],
                      ['Build the parser', 'Turn the stored data into values the software can use.'],
                      ['Add the artifact', 'Connect those values to the output an examiner sees.'],
                      ['Test and review', 'Check the results and work through team feedback.'],
                    ].map(([title, detail], i) => (
                      <li key={title} className="flex gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
                        <span className="text-indigo-300 text-sm font-semibold mt-0.5" aria-hidden="true">{i + 1}</span>
                        <div><p className="text-sm font-medium text-zinc-200">{title}</p><p className="text-sm text-zinc-500 mt-1">{detail}</p></div>
                      </li>
                    ))}
                  </ol>
                  <figcaption className="text-center text-zinc-500 text-sm mt-3">From research to an artifact</figcaption>
                </figure>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div key={project.title} className="glass-effect rounded-2xl p-6">
                  <h3 className="text-base font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{project.body}</p>
                </div>
              ))}
              <div className="glass-effect rounded-2xl p-6 border-indigo-400/20">
                <h3 className="text-base font-semibold text-indigo-300 mb-3">What I actually learned</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  A lot of C# and .NET, reading other people’s code, researching file formats, and testing my assumptions. General coding principles and version control from school helped, but learning the codebase and the team’s workflow happened on the job. Writing up findings and talking through them was a bigger part of the work than I expected.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section {...fadeIn} className="mb-20">
            <SectionHeading id="office">Life at Magnet</SectionHeading>
            <div className="grid lg:grid-cols-[3fr,2fr] gap-10 lg:gap-16 items-center mb-10">
              <div className="space-y-5">
                <p className="text-zinc-300 leading-relaxed">
                  I worked mostly remotely and went into the Waterloo office twice. The hybrid routine was nice. Being able to sleep until 8:30 was a pretty good change from commuting to other jobs.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  When I did go in, the environment was cool, the people were friendly, and the lunch was good. Most of my time with the team was online, through questions, reviews, meetings, and debriefs. Next time I want to make more of an effort to meet people outside the work I’m already doing.
                </p>
              </div>
              <Photo name="office" alt="Desks and windows in the Waterloo office" caption="One of my office days" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Photo name="lounge" alt="Sofas and tables in the Magnet office lounge" caption="The lounge at the office" />
              <Photo name="simulator" alt="The simulator setup at Magnet" caption="Unfortunately, I never got to try the simulator" />
            </div>
          </motion.section>

          <motion.section {...fadeIn} className="mb-20">
            <SectionHeading id="goals">Goals</SectionHeading>
            <p className="text-zinc-300 leading-relaxed mb-8">I set three goals at the start of the term. Here’s how they’ve gone so far.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {goals.map((goal, i) => (
                <div key={goal.heading} className="glass-effect rounded-2xl p-6">
                  <div className="w-9 h-9 mb-4 bg-white/[0.06] border border-white/[0.08] rounded-xl flex items-center justify-center text-indigo-300 font-bold">{i + 1}</div>
                  <h3 className="text-base font-semibold text-white mb-3">{goal.heading}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{goal.body}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeIn}>
            <div className="grid lg:grid-cols-[3fr,2fr] gap-x-16 gap-y-16 items-start">
              <div>
                <SectionHeading id="conclusion">Conclusion</SectionHeading>
                <p className="text-zinc-300 text-lg leading-relaxed mb-5">
                  I’ve really enjoyed working in digital forensics. Building new artifacts gave me a chance to research something unfamiliar and turn it into a feature, which was the most rewarding part of the term.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  It took a while to feel comfortable, but I’m much more confident in the workflow now. For my next term, I want to keep improving how I explain my work, meet more people, and bring more of my own ideas to the team.
                </p>
              </div>
              <div>
                <SectionHeading id="acknowledgments">Acknowledgments</SectionHeading>
                <p className="text-zinc-400 leading-relaxed">
                  Thanks to my buddy, Vedant, for helping me get settled, and to Eric for helping with my questions, even the ones I thought were too basic. Thanks to my manager, Chen Li, for the support. And thanks to Caleb, Danny, Veronica, Grigory, Nina, Savan, Stephan, Zubair, and the rest of the team for making this a good experience.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </article>
    </div>
  )
}
