'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hobbies() {
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
                src="/images/hobbies.jpg"
                alt="Hobbies Header"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-accent-900/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                  My <span className="gradient-text">Hobbies</span>
                </h1>
              </div>
            </motion.div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the sports and activities that keep me active, motivated, and constantly learning.
            </p>
          </motion.div>

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
                      <Image
                        src={hobby.image}
                        alt={hobby.title}
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

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent mb-20"
          ></motion.div>

          {/* Other Hobbies Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-12 text-center">
              Other Activities I Enjoy
            </h2>
            
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
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">
                      {hobby.title}
                    </h3>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-64 overflow-hidden rounded-xl mb-4"
                    >
                      <Image
                        src={hobby.image}
                        alt={hobby.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
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

          {/* Call to Action */}
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
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Sports and physical activities have shaped who I am today. They've taught me discipline, 
                teamwork, and the importance of staying healthy both physically and mentally.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium">
                  Team Sports
                </span>
                <span className="px-4 py-2 bg-accent-500/20 text-accent-300 rounded-full text-sm font-medium">
                  Individual Activities
                </span>
                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                  Outdoor Adventures
                </span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  Water Sports
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}