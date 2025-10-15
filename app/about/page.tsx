'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SwirlBackground from '../../components/SwirlBackground.js'

export default function About() {
  const images = [
    { src: '/images/aboutMe1.jpg', alt: 'About me Image 1' },
    { src: '/images/aboutMe2.JPG', alt: 'About me Image 2' },
    { src: '/images/aboutMe3.jpg', alt: 'About me Image 3' },
    { src: '/images/aboutMe4.jpg', alt: 'About me Image 4' },
    { src: '/images/aboutMe5.jpg', alt: 'About me Image 5' },
  ]

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

  const mainHobbies = [
    {
      title: 'Hockey',
      description: `Hockey has been a huge part of my life. Ever since I was young, 
      I've played competitively. From house league to rep, I've enjoyed every minute of it. I played AE (which is the same as MD) for a few years
      when I was younger, before I switched to houseleague for a few years until I went off to university.
      The sport has taught me valuable lessons about teamwork, dedication, and perseverance. 
      Whether I'm on the ice or watching the game, hockey continues to be one of my greatest passions.
      Not only do I love the sport, but I love the memories even more. I still talk to and stay in touch with
      many different friends that I've made playing hockey. I also still continue to play hockey intramurals at university!`,
      image: '/images/hockey.JPG',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Baseball',
      description: `Apart from hockey, the only other sport I have played competitively my entire life, is baseball.
      I played rep for many years of my life, until I dropped down to houseleague for the last few years
      before I went off to university. I've made countless memories playing baseball, from winning tournaments
      to making game-winning plays. The sport has taught me valuable lessons about patience, strategy, and
      staying focused under pressure. Baseball remains one of my favorite pastimes, and I still enjoy playing
      casual games with friends during the summer months. I hope to play intramurals at university next year!`,
      image: '/images/baseball.jpg',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const otherHobbies = [
    {
      title: 'Volleyball',
      image: '/images/volleyball.jpg',
      caption: 'Team photo of Guelph volleyball intramural team.',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Skiing',
      image: '/images/skiing.jpg',
      caption: 'My brothers and myself going skiing.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Biking',
      image: '/images/biking.jpg',
      caption: 'Me and my brothers pre-bike ride.',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Water Skiing',
      image: '/images/waterSkiing.jpg',
      caption: 'Me going water skiing at the cottage.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Badminton',
      image: '/images/badminton.jpg',
      caption: 'My family playing badminton at the cottage.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Golf',
      image: '/images/golf.png',
      caption: 'Me golfing at a range in Markham.',
      color: 'from-green-500 to-teal-500'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Swirl Background */}
      <SwirlBackground />
      
      {/* Hero Section */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 mt-16 gradient-text">
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
            <h2 className="text-4xl font-bold gradient-text mb-12">Introduction</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-16">
              Hi, I'm Benjamin Probert, a second year student from Markham, Ontario. 
              I am currently studying for my Bachelor of Computing degree, majoring in Computer Science Honours, 
              with a minor in Statistics at the University of Guelph. 
              I have a strong passion for Artificial Intelligence, Game Development, Embedded Systems (IoT), and Computer Vision.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-bold gradient-text mb-4">93.4%</div>
                <div className="text-gray-400 text-lg">Current GPA</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-bold gradient-text mb-4">Dean's List</div>
                <div className="text-gray-400 text-lg">Academic Recognition</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-bold gradient-text mb-4">4+</div>
                <div className="text-gray-400 text-lg">Years Honor Roll</div>
              </motion.div>
            </div>
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
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
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
              <h3 className="text-3xl font-bold gradient-text mb-6">Why University of Guelph?</h3>
              <p className="text-gray-300 leading-relaxed">
                The day that I took a tour to the University of Guelph was the day I fell in love with the campus.
                Additionally, my brother, who is two years older than me, also attends the University of Guelph for Computer Science. Maybe it runs in the family!
                Finally, the opportunity to work alongside inspiring professors and peers in a supportive environment will help me grow 
                both academically and personally as I pursue my goals in Computer Science at UofG.
              </p>
            </motion.div>
          </div>

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

          {/* Academic Goals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
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
              <img
                src="/images/graduation.jpg"
                alt="Graduation"
                className="w-full h-full object-cover"
                loading="lazy"
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 overflow-hidden rounded-2xl"
            >
              <img
                src="/images/personal.jpg"
                alt="Personal Goals"
                className="w-full h-full object-cover"
                loading="lazy"
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

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent mb-20"
          ></motion.div>

          {/* Hobbies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold gradient-text mb-12 text-center">My Hobbies & Sports</h2>
            
            {/* Main Hobbies - Hockey and Baseball */}
            <div className="space-y-16 mb-20">
              {mainHobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500"
                >
                  <div className={`h-2 bg-gradient-to-r ${hobby.color}`}></div>
                  
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Hobby Info */}
                      <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <h3 className="text-4xl font-bold gradient-text mb-6">
                          {hobby.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {hobby.description}
                        </p>
                      </div>

                      {/* Hobby Image */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className={`relative h-64 lg:h-96 overflow-hidden rounded-2xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                      >
                        <img
                          src={hobby.image}
                          alt={hobby.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 border-4 border-primary-400/30 rounded-2xl"></div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Other Hobbies Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold gradient-text mb-12 text-center">
                Other Activities I Enjoy
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherHobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="glass-effect rounded-2xl overflow-hidden group cursor-pointer"
                  >
                    <div className={`h-2 bg-gradient-to-r ${hobby.color}`}></div>
                    
                    <div className="p-6">
                      <h4 className="text-2xl font-bold text-white mb-4 text-center">
                        {hobby.title}
                      </h4>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="relative h-64 overflow-hidden rounded-xl mb-4"
                      >
                        <img
                          src={hobby.image}
                          alt={hobby.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 border-2 border-white/20 rounded-xl"></div>
                      </motion.div>
                      
                      <p className="text-gray-300 text-sm text-center italic">
                        {hobby.caption}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Sports Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="glass-effect p-12 rounded-3xl">
                <h3 className="text-3xl font-bold gradient-text mb-6">
                  Stay Active, Stay Motivated
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Sports and physical activities have shaped who I am today. They've taught me discipline, 
                  teamwork, and the importance of staying healthy both physically and mentally. These experiences 
                  translate directly into my approach to programming and problem-solving.
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
          </motion.div>
        </div>
      </section>
    </div>
  )
}