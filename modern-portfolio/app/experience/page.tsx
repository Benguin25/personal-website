'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, MapPin, Award, Users, BookOpen } from 'lucide-react'

export default function Experience() {
  const workExperiences = [
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
      period: 'September 2024 - January 2025',
      description: 'Placed on the College of Engineering & Physical Sciences Dean\'s Honours List after achieving an 80% or above average in the Fall 2024 semester.',
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
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-8">
              My Experience
            </h1>
          </motion.div>

          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold gradient-text mb-12 text-center">Work Experience</h2>
            
            <div className="space-y-16">
              {workExperiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500"
                >
                  <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                  
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Experience Info */}
                      <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-4 text-primary-300 mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              <span className="text-sm font-medium">{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              <span className="text-sm font-medium">{exp.location}</span>
                            </div>
                          </div>
                          <p className="text-xl text-accent-300 mb-6 font-semibold">
                            {exp.company}
                          </p>
                        </div>

                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities:</h4>
                          <ul className="space-y-3">
                            {exp.responsibilities.map((resp, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-3 text-gray-300"
                              >
                                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{resp}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Experience Image */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className={`relative h-64 lg:h-80 overflow-hidden rounded-2xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                      >
                        <Image
                          src={exp.image}
                          alt={exp.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 border-4 border-primary-400/30 rounded-2xl"></div>
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
            className="w-full h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent mb-20"
          ></motion.div>

          {/* Volunteer Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold gradient-text mb-12 text-center">Volunteer Experience</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {volunteerExperiences.map((vol, index) => (
                <motion.div
                  key={vol.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-effect p-8 rounded-2xl card-hover"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{vol.title}</h3>
                  <div className="text-primary-300 font-semibold mb-2">{vol.organization}</div>
                  <div className="text-accent-300 text-sm mb-6">{vol.period}</div>
                  <ul className="space-y-2">
                    {vol.description.map((desc, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
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
            className="w-full h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent mb-20"
          ></motion.div>

          {/* Awards Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-12 text-center">Awards & Recognition</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 rounded-2xl text-center card-hover"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full flex items-center justify-center">
                    <award.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{award.title}</h3>
                  <div className="text-primary-300 text-sm font-semibold mb-2">{award.organization}</div>
                  <div className="text-accent-300 text-sm mb-4">{award.period}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{award.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}