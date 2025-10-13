'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const images = [
    { src: '/images/aboutMe1.jpg', alt: 'About me Image 1' },
    { src: '/images/aboutMe2.JPG', alt: 'About me Image 2' },
    { src: '/images/aboutMe3.jpg', alt: 'About me Image 3' },
    { src: '/images/aboutMe4.jpg', alt: 'About me Image 4' },
    { src: '/images/aboutMe5.jpg', alt: 'About me Image 5' },
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
                src="/images/aboutMe.jpg"
                alt="About Me Header"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-accent-900/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                  About <span className="gradient-text">Me</span>
                </h1>
              </div>
            </motion.div>
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
              Hi, I'm Benjamin Probert, a first year student from Markham, Ontario. 
              I am currently studying for my Bachelor of Computing degree, majoring in Computer Science Honours, 
              with a minor in Statistics at the University of Guelph. 
              I have a strong passion in Artificial Intelligence, Game Development, Embedded Systems (IoT), and Computer Vision.
            </p>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                  className="relative h-80 overflow-hidden rounded-xl cursor-pointer group z-0 hover:z-10"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                and innovations, or specifically, coding. Ever since I began coding on Scratch in elementary school, I have always had a passion
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
              <h3 className="text-3xl font-bold gradient-text mb-6">Why University of Guelph?</h3>
              <p className="text-gray-300 leading-relaxed">
                The day that I took a tour to the University of Guelph was the day I fell in love with the campus.
                Additionally, my brother, who is two years older than me, also attends the University of Guelph for Computer Science. Maybe it runs in the family!
                Finally, the opportunity to work alongside inspiring professors and peers in a supportive environment will help me grow 
                both academically and personally as I pursue my goals in Computer Science at UofG.
              </p>
            </motion.div>
          </div>

          {/* Goals Section */}
          <div className="space-y-16">
            {/* Academic Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <h3 className="text-4xl font-bold gradient-text mb-6">Academic Goals</h3>
                <div className="glass-effect p-8 rounded-2xl">
                  <p className="text-gray-300 leading-relaxed">
                    I am driven by a passion for academic excellence and personal growth. Academically, I prioritize my grades over
                    anything else. I am on the Dean's Honour's List for my first semester at UOFG. I have been honour roll at my high school
                    all four years that I attended. My GPA for my first semester was a 93.4%, and I plan to keep it similar for my following semesters.
                    As for clubs, I am hoping to join the executive team as SOCIS's VP of Internal Affairs!
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 relative h-96 overflow-hidden rounded-2xl"
              >
                <Image
                  src="/images/graduation.jpg"
                  alt="Graduation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 border-4 border-primary-400/30 rounded-2xl"></div>
              </motion.div>
            </motion.div>

            {/* Personal Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-96 overflow-hidden rounded-2xl"
              >
                <Image
                  src="/images/personal.jpg"
                  alt="Personal Goals"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 border-4 border-accent-400/30 rounded-2xl"></div>
              </motion.div>
              <div>
                <h3 className="text-4xl font-bold gradient-text mb-6">Personal Goals</h3>
                <div className="glass-effect p-8 rounded-2xl">
                  <p className="text-gray-300 leading-relaxed">
                    As for personal goals, there are many things I strive to accomplish in my life. A major goal of mine is to travel the world, 
                    immersing myself in different cultures, admiring the beauty of our planet, and broadening my perspective on the world.
                    An equally important goal is my desire to build a loving, close-knit family. Finally, on a more physical note, I have the drive
                    to stay active in sports and to keep up with my overall health as I age.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}