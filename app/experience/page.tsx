'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, MapPin, Award, Users, BookOpen, ArrowRight } from 'lucide-react'

export default function Experience() {
  const workExperiences = [
    {
      title: 'Incoming Software Developer Co-op',
      company: 'Magnet Forensics',
      location: 'Waterloo, Ontario (Hybrid)',
      period: 'Sept 2026 – Dec 2026',
      responsibilities: [
        'Incoming co-op on the software development team for Fall 2026',
        'Will ship production features for digital forensics software that acquires, analyzes, and shares evidence from computers, smartphones, and IoT devices',
        'Magnet\'s software is used by law enforcement and enterprises globally to fight crime and protect national security'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'GenAI Engineer Intern',
      company: 'RBC',
      location: 'Toronto, Ontario',
      period: 'June 2026 – Aug 2026',
      responsibilities: [
        'Built an evaluation framework for an internal audit AI agent, testing faithfulness, groundedness, hallucination rates, evidence retrieval, reproducibility, and human validation to support approval for bank-wide release',
        'Developed a risk reporting agent for a senior executive that aggregates web and ORX data to surface emerging AI, fraud, and vendor risks',
        'Automated preliminary risk triage for RBC\'s AI governance intake form, streamlining custom-agent reviews for the governance team',
        'Built AI-powered tools for executives on RBC\'s internal AI tooling platform, improving process efficiency across teams'
      ],
      color: 'from-blue-500 to-yellow-500',
      image: '/rbc-2026/standup.jpg',
      report: { href: '/rbc-2026', label: 'Read my work term report' }
    },
    {
      title: 'Spatial Data Associate',
      company: 'Stealth Startup (a16z-Backed Spatial Intelligence)',
      location: 'Toronto, Ontario',
      period: 'May 2026 – June 2026',
      responsibilities: [
        'Captured high-fidelity 3D scans of real-world objects and environments using iPhone LiDAR and photogrammetry',
        'Built foundational spatial datasets for training Large World Models (LWMs), targeting customers in mapping, autonomous vehicles, and world models',
        'The company\'s premise: the world runs on LLMs; they\'re building the data layer to run it on LWMs'
      ],
      color: 'from-cyan-500 to-indigo-500'
    },
    {
      title: 'Lead Coding Instructor',
      company: 'Code Ninjas',
      location: 'Markham, Ontario',
      period: 'June 2025 – Sept 2025',
      image: '/images/codeninjas.png',
      responsibilities: [
        'Delivered 300+ hours of programming instruction to 200+ students aged 7-14 using visual coding platforms',
        'Led junior instructors to standardize technical lessons across classes',
        'Mentored students through game development projects and coding challenges',
        'Created engaging lesson plans that made complex programming concepts accessible',
        'Monitored student progress and provided personalized feedback to enhance learning'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Brand Ambassador',
      company: 'Riot Games',
      location: 'Toronto, Ontario',
      period: 'June 2025 – July 2025',
      image: '/images/valorant.jpg',
      responsibilities: [
        'Represented Riot Games at VCT Masters Toronto 2025, engaging fans and promoting the Valorant brand',
        'Collaborated with event staff to enhance engagement and uphold Riot\'s brand experience',
        'Facilitated interactive fan experiences and promotional activities at the premier esports event',
        'Maintained professional brand representation while connecting with the gaming community',
        'Contributed to creating memorable experiences for attendees at one of the year\'s biggest Valorant tournaments'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Sales Intern',
      company: 'SharpStakes',
      location: 'Remote',
      period: 'April 2025 – Present',
      image: '/images/sharpstakes.png',
      responsibilities: [
        'Promoted AI-driven sports betting analytics platform to prospective customers and sports betting enthusiasts',
        'Generated leads and converted prospects into subscribers for SharpPicks, SharpAI, and SharpTrends products',
        'Educated potential customers on the value of data-driven betting strategies and odds optimization',
        'Collaborated with marketing team to develop customer acquisition strategies and promotional campaigns',
        'Maintained customer relationships and provided ongoing support to maximize user retention and satisfaction'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Camp Counsellor',
      company: 'Camp Green Acres',
      location: 'Markham, Ontario',
      period: 'June 2024 – August 2024',
      image: '/images/camp.jpeg',
      responsibilities: [
        'Focused on maximizing each campers\' enjoyment while maintaining a safe environment',
        'Led a variety of activities including various sports, providing the necessary support for campers of all skill levels',
        'Effectively communicated with coworkers to ensure smooth transitions from one activity to the next',
        'Provided solutions to parent concerns to ensure a rewarding experience for their children',
        'Offered comfort and support to children to help them overcome challenges'
      ],
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Referee',
      company: 'Ontario Minor Hockey Association',
      location: 'Markham, Ontario',
      period: 'December 2019 – Present',
      image: '/images/referee.JPG',
      responsibilities: [
        'Developed critical thinking skills through making reasoned decisions while under pressure',
        'Gained the respect of participants by displaying a confident and professional demeanour',
        'Consistently built strong relations with different stakeholders including supervisors, fellow officials, coaches, and players to work well together in all situations'
      ],
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Umpire',
      company: 'Markham District Baseball Association',
      location: 'Markham, Ontario',
      period: 'June 2019 – Present',
      image: '/images/umping.jpg',
      responsibilities: [
        'Officiated baseball games to ensure fair competition and the safety of players',
        'Demonstrated precise communication and seamless teamwork, ensuring consistent and accurate decision-making',
        'Collaborated with fellow umpires to ensure consistent enforcement of rules and smooth game operations',
        'Exhibited exceptional time management, making prompt and precise decisions during high-pressure situations'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const volunteerExperiences = [
    {
      title: 'Vice President of Internal Affairs for School of Computer and Information Sciences (SOCIS)',
      organization: 'University of Guelph',
      period: 'May 2025 – Present',
      description: [
        'Coordinate internal operations and facilitate executive communication',
        'Organize and manage executive meetings for productive decision-making',
        'Maintain detailed records of meeting minutes and organizational decisions'
      ]
    },
    {
      title: 'Student Athletic Association Secretary',
      organization: 'Markham District High School',
      period: 'Sept 2021 – June 2024',
      description: [
        'Managed and updated records of meetings, activities, attendance, etc.',
        'Participated in the planning and execution of athletic events and school fundraisers.',
        'Successfully collaborated with other SAA executive members to execute club objectives.'
      ]
    },
    {
      title: 'Tutoring Club Co-Founder',
      organization: 'Markham District High School',
      period: 'Sept 2023 – June 2024',
      description: [
        'Co-founded the Tutoring Club to provide peer-to-peer academic support.',
        'Met once a week to help students in need reach their academic desires.',
        'Actively promoted the club\'s activities and services through school announcements.'
      ]
    },
    {
      title: 'SAS Notetaker',
      organization: 'University of Guelph',
      period: 'Sept 2024 – April 2025',
      description: [
        'Uploaded and shared notes to students in need through the SAS notetaker portal for various courses including:',
        'Linear Algebra 1 (MATH 1160), Statistics 1 (STAT 2040), Discrete Structures in Computing 2 (CIS2910)',
        'Intermediate Programming (CIS2500), Introductory Macroeconomics (ECON1100)'
      ]
    }
  ]

  const awards = [
    {
      title: 'HackRx 2025',
      organization: 'University of Waterloo',
      period: '2025',
      description: 'Built NephroRx, a medication dosing platform for chronic kidney disease patients, at the HackRx healthcare hackathon.',
      icon: Users
    },
    {
      title: 'Gryph Hacks 2025',
      organization: 'University of Guelph',
      period: '2025',
      description: 'Built "Am I Cooked?", generating 200+ user responses within 2 weeks of launch.',
      icon: Users
    },
    {
      title: 'Ontario Government Grant — $3,000',
      organization: 'Government of Ontario',
      period: '2025',
      description: 'Non-dilutive funding awarded to Reservely to build the MVP.',
      icon: Award
    },
    {
      title: 'Financial Literacy Competition',
      organization: 'University of Waterloo',
      period: 'May 2024',
      description: 'Participated in the Financial Literacy Competition hosted by the University of Waterloo and received a bronze certification.',
      icon: Award
    },
    {
      title: 'Canada Hackify Hackathon 2024',
      organization: 'Codeify Canada',
      period: 'February 2024',
      description: 'Participated in a hackathon hosted by Codeify Canada and placed 3rd place overall.',
      icon: Users
    },
    {
      title: 'Dean\'s Honours List - University',
      organization: 'University of Guelph',
      period: 'Fall 2024 - Present',
      description: 'Placed on the College of Engineering & Physical Sciences Dean\'s Honours List every semester since Fall 2024, maintaining a 4.0 GPA (92.5% average).',
      icon: BookOpen
    },
    {
      title: 'Honour Roll - High School',
      organization: 'Markham District High School',
      period: 'June 2021 - June 2024',
      description: 'Received honour roll by having above an 80% average for all four years at my high school.',
      icon: Award
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20 mt-10"
          >
            <span className="section-label">Background</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              My Experience
            </h1>
            <p className="text-base text-zinc-600 mt-4 max-w-xl mx-auto">
              Work, volunteer roles, and recognition that shaped who I am.
            </p>
          </motion.div>

          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl font-semibold mb-10 text-white">Work Experience</h2>

            
            <div className="space-y-10">
              {workExperiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: '-60px' }}
                  className="relative glass-effect rounded-2xl overflow-hidden group hover:border-white/[0.14] hover:shadow-xl hover:shadow-black/40 transition-all duration-300"
                >
                  <div className="p-7 md:p-9">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Experience Info */}
                      <div className={`space-y-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-zinc-300 font-medium mb-3">{exp.company}</p>
                          <div className="flex flex-wrap items-center gap-3 text-zinc-600 text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar size={13} />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={13} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        <ul className="space-y-2.5">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-3 text-zinc-500 text-sm leading-relaxed">
                              <div className="w-1 h-1 bg-zinc-600 rounded-full mt-2 flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>

                        {exp.report && (
                          <Link
                            href={exp.report.href}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-white/[0.08] border border-white/[0.1] text-indigo-300 hover:bg-white/[0.12] hover:text-indigo-200 hover:border-indigo-400/30 transition-all duration-200"
                          >
                            <BookOpen size={15} />
                            <span>{exp.report.label}</span>
                            <ArrowRight size={15} />
                          </Link>
                        )}
                      </div>

                      {/* Experience Image */}
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                        className={`relative h-56 lg:h-72 overflow-hidden rounded-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                      >
                        {exp.image ? (
                          <img
                            src={exp.image}
                            alt={exp.title}
                            className={`w-full h-full transition-transform duration-500 group-hover:scale-[1.03] ${
                              exp.company === 'SharpStakes' ? 'object-fill' : 'object-cover'
                            }`}
                            loading="lazy"
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${exp.color} opacity-60 flex items-center justify-center`}>
                            <span className="text-white text-2xl md:text-3xl font-bold text-center px-8 drop-shadow-lg">
                              {exp.company}
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full h-px bg-white/[0.06] mb-20"
          ></motion.div>

          {/* Volunteer Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl font-semibold mb-10 text-white">Volunteer Experience</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {volunteerExperiences.map((vol, index) => (
                <motion.div
                  key={vol.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 rounded-2xl card-hover"
                >
                  <h3 className="text-base font-semibold text-white mb-2">{vol.title}</h3>
                  <div className="text-zinc-400 text-sm font-medium mb-1">{vol.organization}</div>
                  <div className="text-zinc-600 text-xs mb-5">{vol.period}</div>
                  <ul className="space-y-2">
                    {vol.description.map((desc, i) => (
                      <li key={i} className="text-zinc-500 text-sm flex items-start gap-2">
                        <div className="w-1 h-1 bg-zinc-600 rounded-full mt-2 flex-shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full h-px bg-white/[0.06] mb-20"
          ></motion.div>

          {/* Awards Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-10 text-white">Awards &amp; Recognition</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 rounded-2xl card-hover"
                >
                  <div className="w-10 h-10 mb-4 bg-white/[0.06] border border-white/[0.08] rounded-xl flex items-center justify-center">
                    <award.icon className="w-5 h-5 text-zinc-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1">{award.title}</h3>
                  <div className="text-zinc-400 text-sm mb-1">{award.organization}</div>
                  <div className="text-zinc-600 text-xs mb-3">{award.period}</div>
                  <p className="text-zinc-500 text-sm leading-relaxed">{award.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}