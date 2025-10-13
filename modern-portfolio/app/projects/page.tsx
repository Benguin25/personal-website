'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Youtube } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Am I Cooked?',
      description: 'A witty web application that analyzes your life choices and tells you if you\'re "cooked"!',
      longDescription: 'Am I Cooked? is a full-stack web application that uses AI to analyze user inputs about their life situation and provides humorous feedback on whether they\'re in trouble. Built with modern web technologies and featuring a responsive design with interactive elements.',
      image: '/images/amicooked.png',
      github: 'https://github.com/Benguin25/am-i-cooked',
      youtube: 'https://youtu.be/_i0HK6yL78I',
      live: 'https://am-i-cooked-zeta.vercel.app/',
      technologies: ['React', 'TypeScript', 'Node.js', 'AI Integration', 'Full-Stack'],
      color: 'from-red-500 to-orange-600'
    },
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
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 mt-16">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Exploring technology through hands-on development
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
                        
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                          >
                            <ExternalLink size={20} />
                            Try Now
                          </motion.a>
                        )}
                        
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
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 to-transparent"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}