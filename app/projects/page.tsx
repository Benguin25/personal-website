'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Youtube } from 'lucide-react'
import SwirlBackground from '../../components/SwirlBackground.js'

export default function Projects() {
  const projects = [
    {
      title: 'MyRoommate',
      description: 'Find your perfect roommate match with MyRoommate!',
      longDescription: 'MyRoommate is a roommate-finding platform that connects people looking for compatible living arrangements. Users can create profiles, set preferences, and browse potential roommates to find the ideal match for their lifestyle and budget.',
      image: '/images/myroommate.png',
      github: 'https://github.com/Benguin25/MyRoommate',
      live: 'https://myroommate.net/',
      technologies: ['React', 'Node.js', 'Full-Stack', 'Web App'],
      color: 'from-teal-500 to-green-600'
    },
    {
      title: 'NephroRx',
      description: 'A comprehensive medication dosing calculator for patients with chronic kidney disease.',
      longDescription: 'NephroRx is a full-stack web application that helps healthcare providers calculate accurate medication dosages for chronic kidney disease patients based on their kidney function. Features automated PDF processing using OCR and NLP, real-time dosing calculations with eGFR assessments, and a modern responsive interface built with React and Tailwind CSS.',
      image: '/images/nephrorx.png',
      github: 'https://github.com/NephroRx/NephroRx',
      youtube: 'https://youtu.be/Yyc4ZI_9fSk',
      live: 'https://nephrorx.app/',
      technologies: ['React', 'Python', 'Flask', 'Tailwind CSS', 'OCR', 'NLP', 'Healthcare'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Codle',
      description: 'Test your coding knowledge with daily programming challenges inspired by Wordle!',
      longDescription: 'Codle is an interactive web application that challenges users with daily coding questions across various programming languages. Built with React and Firebase, it features user authentication, real-time leaderboards, daily question generation using AI, and a clean, engaging user interface. Perfect for developers looking to sharpen their skills!',
      image: '/images/codle.png',
      github: 'https://github.com/CodleDev/Codle',
      live: 'https://codle.pages.dev/',
      technologies: ['React', 'Firebase', 'Node.js', 'AI Integration', 'Authentication'],
      color: 'from-purple-500 to-indigo-600',
      objectFit: 'contain'
    },
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
    },
    {
      title: 'ClearSite',
      description: 'Streamline property management with intelligent asset tracking and maintenance scheduling!',
      longDescription: 'ClearSite is a property management platform that brings intelligent asset tracking, maintenance scheduling, and comprehensive documentation together in one place. Designed to simplify the complexities of managing properties so you can focus on what matters.',
      image: '/images/clearsite.png',
      github: 'https://github.com/Benguin25/ClearSite',
      live: 'https://clear-site-coral.vercel.app/',
      technologies: ['React', 'TypeScript', 'Vercel', 'Web App'],
      color: 'from-sky-500 to-blue-600'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      <SwirlBackground />

      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Page heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20 mt-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              My Projects
            </h1>
            <p className="text-base text-gray-500 mt-6 max-w-xl mx-auto">
              A collection of things I've built, from hackathon prototypes to production apps.
            </p>
          </motion.div>

          {/* Projects list */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-60px' }}
                className="relative glass-effect rounded-2xl overflow-hidden group hover:border-white/[0.14] hover:shadow-xl hover:shadow-black/40 transition-all duration-300"
              >
                <div className="p-7 md:p-9">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Info side */}
                    <div className={`space-y-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1.5">
                          {project.title}
                        </h3>
                        <p className="text-sm text-zinc-400 font-medium mb-3">
                          {project.description}
                        </p>
                        <p className="text-zinc-500 leading-relaxed text-sm">
                          {project.longDescription}
                        </p>
                      </div>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-wrap gap-3 pt-1">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center gap-2 glass-effect border border-white/[0.1] hover:bg-white/[0.08] text-zinc-300 hover:text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-colors"
                        >
                          <Github size={16} />
                          GitHub
                        </motion.a>

                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2 bg-white text-black hover:bg-zinc-100 px-5 py-2.5 rounded-xl font-medium text-sm transition-colors"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </motion.a>
                        )}

                        {project.youtube && (
                          <motion.a
                            href={project.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2 glass-effect border border-white/[0.1] hover:bg-white/[0.08] text-zinc-300 hover:text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-colors"
                          >
                            <Youtube size={16} />
                            YouTube
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Image side */}
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                      className={`relative h-56 lg:h-72 overflow-hidden rounded-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full ${project.objectFit === 'contain' ? 'object-contain p-4' : 'object-cover'} transition-transform duration-500 group-hover:scale-[1.03]`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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