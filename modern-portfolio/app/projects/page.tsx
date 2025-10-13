'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, Youtube } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Capitalist FC',
      description: 'Ready to build your football empire? Welcome to Capitalist FC!',
      longDescription: 'This game is a spinoff of the mobile game Adventure Capitalist, with a twist! You can choose your club name and jersey, hire managers, purchase players, & buy upgrades to get 10000 fans as quick as possible!',
      image: '/images/capitalistFC.png',
      github: 'https://github.com/Benguin25/Capitalist-FC',
      technologies: ['Game Development', 'JavaScript', 'HTML5', 'CSS3'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Smart Funds',
      description: 'Want to make your money work harder for you? Check out Smart Funds!',
      longDescription: 'Explore a smarter way to manage your finances and ensure you are making smart financial decisions. This project was developed for a hackathon by Benjamin Probert, Jasjeet Singh, Angad Sidhu, & Bharat Jassal.',
      image: '/images/smartFunds.png',
      github: 'https://github.com/JasjeetSingh18/Smart-Funds',
      youtube: 'https://youtu.be/nnPvx1uZrJo',
      technologies: ['Hackathon Project', 'Finance', 'React', 'Node.js'],
      color: 'from-green-500 to-blue-600'
    },
    {
      title: 'Drone Photography',
      description: 'Ever wondered what the world looks like from a bird\'s-eye view? Check out Drone Photography!',
      longDescription: 'Dive into the exciting world of drone photography. Discover how to take breathtaking aerial shots with the right gear, smart tips, and practical guidance!',
      image: '/images/dronePhotography.png',
      github: 'https://github.com/Benguin25/drone-photography',
      technologies: ['Photography', 'HTML', 'CSS', 'Web Design'],
      color: 'from-purple-500 to-pink-600'
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
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto mb-8 w-full h-32 overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/projects.jpg"
                alt="Projects Header"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-accent-900/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                  My <span className="gradient-text">Projects</span>
                </h1>
              </div>
            </motion.div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my featured projects that showcase my passion for development, creativity, and problem-solving.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-effect rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Project Info */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-3">
                          {project.title}
                        </h3>
                        <p className="text-xl text-primary-300 mb-4">
                          {project.description}
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          {project.longDescription}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-white text-dark-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                          <Github size={20} />
                          View on GitHub
                        </motion.a>
                        
                        {project.youtube && (
                          <motion.a
                            href={project.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                          >
                            <Youtube size={20} />
                            View on YouTube
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Project Image */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className={`relative h-64 lg:h-80 overflow-hidden rounded-2xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 to-transparent"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="glass-effect p-12 rounded-3xl">
              <h3 className="text-3xl font-bold gradient-text mb-6">
                Want to collaborate?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm always excited to work on new projects and explore innovative ideas. 
                Let's create something amazing together!
              </p>
              <motion.a
                href="mailto:bprobert@uoguelph.ca"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                <ExternalLink size={20} />
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}