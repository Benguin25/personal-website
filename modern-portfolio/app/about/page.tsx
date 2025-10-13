'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const techSkills = [
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'AI/ML', icon: '🤖' },
    { name: 'Git', icon: '🔧' }
  ]

  const interests = [
    {
      title: 'Artificial Intelligence',
      description: 'Passionate about machine learning, neural networks, and AI applications.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Game Development',
      description: 'Creating interactive experiences and learning game engines.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Embedded Systems',
      description: 'IoT development and hardware-software integration.',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Computer Vision',
      description: 'Image processing, pattern recognition, and visual AI.',
      color: 'from-orange-500 to-red-500'
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
            <h1 className="text-5xl md:text-7xl font-bold gradient-text glow-text mb-8">
              About Me
            </h1>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-8">Introduction</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Hi, I'm B. Probert, a first year student from Markham, Ontario. 
              I am currently studying for my Bachelor of Computing degree, majoring in Computer Science Honours, 
              with a minor in Statistics at the University of Guelph. 
              I have a strong passion for Artificial Intelligence, Game Development, Embedded Systems (IoT), and Computer Vision.
            </p>
          </motion.div>

          {/* Tech Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold gradient-text mb-12 text-center">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="glass-effect p-6 rounded-2xl text-center group cursor-pointer"
                >
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-white font-semibold">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CS Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold gradient-text mb-12 text-center">Areas of Interest</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="glass-effect rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <div className={`h-2 bg-gradient-to-r ${interest.color}`}></div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {interest.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Two Column Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h3 className="text-3xl font-bold gradient-text mb-6">Why Computer Science?</h3>
              <p className="text-gray-300 leading-relaxed">
                I have always been interested in Computer Science. Growing up with computers, I have always been fascinated to learn about new technologies
                and innovations, specifically coding. Ever since I began coding on Scratch in elementary school, I have always had a passion
                for it, and knew that I would end up in this field. Its blend of logical reasoning, creativity, and practical application makes it 
                an exciting choice for me.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h3 className="text-3xl font-bold gradient-text mb-6">Academic Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                I am driven by academic excellence and personal growth. I'm on the Dean's Honour List for my first semester at UofG 
                with a GPA of 93.4%. I was on honour roll all four years of high school. I'm also hoping to join SOCIS's executive team 
                as VP of Internal Affairs to contribute to the computer science community.
              </p>
            </motion.div>
          </div>

          {/* Sports & Activities Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-effect p-12 rounded-3xl">
              <h3 className="text-3xl font-bold gradient-text mb-6">
                Beyond Coding
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                When I'm not coding, I stay active through sports like hockey and baseball (both competitively), 
                volleyball intramurals at UofG, and various outdoor activities. These experiences have taught me 
                valuable lessons about teamwork, discipline, and perseverance that I apply to my programming projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium">
                  🏒 Hockey
                </span>
                <span className="px-4 py-2 bg-accent-500/20 text-accent-300 rounded-full text-sm font-medium">
                  ⚾ Baseball
                </span>
                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                  🏐 Volleyball
                </span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  ⛷️ Outdoor Sports
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}