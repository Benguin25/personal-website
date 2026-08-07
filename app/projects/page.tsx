'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Youtube } from 'lucide-react'
import SwirlBackground from '../../components/SwirlBackground.js'

export default function Projects() {
  const projects = [
    {
      title: 'Reservely',
      description: 'A lightweight, low-cost reservation system for small restaurants and cafes.',
      longDescription: 'Reservely is a lightweight, low-cost reservation system built for small restaurants and cafes. Backed by $3,000 in non-dilutive funding from the Ontario government to build the MVP, it features a plug-and-play booking link so restaurants can start accepting reservations with minimal setup.',
      image: '/images/reservely.jpg',
      youtube: 'https://youtu.be/USoM37xQ0Oc',
      live: 'https://reservely.ca/for-businesses',
      technologies: ['React', 'Node.js', 'Supabase', 'Founder'],
      color: 'from-purple-500 to-blue-500'
    },
    {
      title: 'MyRoommate',
      description: 'Find your perfect roommate match with MyRoommate!',
      longDescription: 'MyRoommate is a roommate-finding platform that uses AI-driven compatibility scoring from behavioral data to connect people looking for compatible living arrangements. Each match comes with LLM-generated explanations that justify match quality, giving users transparency into why a roommate is a good fit for their lifestyle and budget.',
      image: '/images/myroommate.png',
      github: 'https://github.com/Benguin25/MyRoommate',
      live: 'https://myroommate.net/',
      technologies: ['React', 'Node.js', 'Full-Stack', 'Web App'],
      color: 'from-teal-500 to-green-600'
    },
    {
      title: 'NephroRx',
      description: 'A comprehensive medication dosing platform for patients with chronic kidney disease.',
      longDescription: 'NephroRx is a full-stack web application that helps healthcare providers calculate accurate medication dosages for chronic kidney disease patients based on their kidney function. It processes MRI/CT data into interactive 3D models with volumetric analysis, and uses OCR/NLP pipelines for automated PDF ingestion that powers real-time eGFR-based dosing calculations, all behind a modern responsive interface.',
      image: '/images/nephrorx.png',
      badge: 'HackRx 2025, UWaterloo',
      github: 'https://github.com/NephroRx/NephroRx',
      youtube: 'https://youtu.be/Yyc4ZI_9fSk',
      live: 'https://nephrorx.app/',
      technologies: ['React', 'Python', 'Flask', 'TypeScript', 'Node.js', 'Docker', 'MongoDB', 'OCR', 'NLP', 'Healthcare', '3D Visualization'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'ClearSite',
      description: 'Streamline property management with intelligent asset tracking and maintenance scheduling!',
      longDescription: 'ClearSite is a property management platform that brings intelligent asset tracking, maintenance scheduling, and comprehensive documentation together in one place. Its Gemini API integration turns database records into natural-language summaries and recommendations, powered by backend workflows that pipe structured SQL/NoSQL data into LLM pipelines.',
      image: '/images/clearsite.png',
      github: 'https://github.com/Benguin25/ClearSite',
      live: 'https://clear-site-coral.vercel.app/',
      technologies: ['React', 'TypeScript', 'Supabase', 'Gemini API', 'Vercel', 'Web App'],
      color: 'from-sky-500 to-blue-600'
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
      longDescription: 'Am I Cooked? is a full-stack web application that uses AI to analyze user inputs about their life situation and provides humorous feedback on whether they\'re in trouble. Deployed full-stack in under 30 hours at Gryph Hacks 2025, it generated 200+ user responses within 2 weeks of launch.',
      image: '/images/amicooked.png',
      badge: 'Gryph Hacks 2025',
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

  // TODO(Ben): add any other videos from youtube.com/@BenProbert25 here with their actual titles
  const videos = [
    {
      title: 'Reservely Demo',
      id: 'USoM37xQ0Oc',
      url: 'https://youtu.be/USoM37xQ0Oc'
    },
    {
      title: 'NephroRx Demo',
      id: 'Yyc4ZI_9fSk',
      url: 'https://youtu.be/Yyc4ZI_9fSk'
    },
    {
      title: 'Am I Cooked? Demo',
      id: '_i0HK6yL78I',
      url: 'https://youtu.be/_i0HK6yL78I'
    },
    {
      title: 'Smart Funds Demo',
      id: 'nnPvx1uZrJo',
      url: 'https://youtu.be/nnPvx1uZrJo'
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
            <span className="section-label">Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              My Projects
            </h1>
            <p className="text-base text-zinc-600 mt-4 max-w-xl mx-auto">
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
                        <div className="flex flex-wrap items-center gap-3 mb-1.5">
                          <h3 className="text-2xl font-bold text-white">
                            {project.title}
                          </h3>
                          {project.badge && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-indigo-500/[0.15] border border-indigo-400/[0.25] text-indigo-300 text-xs font-medium">
                              {project.badge}
                            </span>
                          )}
                        </div>
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
                        {project.github && (
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
                        )}

                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-colors"
                          >
                            <ExternalLink size={16} />
                            Launch
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
                            <Youtube size={16} className="text-red-500" />
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

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full h-px bg-white/[0.06] my-20"
          ></motion.div>

          {/* Video Demos Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold text-white mb-3">Project Demos</h2>
              <p className="text-sm text-zinc-600 max-w-xl mx-auto">
                Video walkthroughs of my projects, from my{' '}
                <a
                  href="https://www.youtube.com/@BenProbert25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  YouTube channel
                </a>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((video, index) => (
                <motion.a
                  key={video.id}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl overflow-hidden group card-hover block"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-red-600 group-hover:bg-red-500 flex items-center justify-center transition-colors">
                        <Youtube size={22} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-white">{video.title}</h4>
                    <ExternalLink size={14} className="text-zinc-600 group-hover:text-zinc-400 transition-colors flex-shrink-0" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}