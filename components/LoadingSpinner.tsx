'use client'

import React from 'react'
import { motion } from 'framer-motion'

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Outer ring */}
        <motion.div
          className="w-16 h-16 border-4 border-primary-200 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner ring */}
        <motion.div
          className="absolute top-2 left-2 w-12 h-12 border-4 border-accent-400 border-t-transparent rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.div>
      
      <motion.p
        className="ml-4 text-primary-300 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Loading...
      </motion.p>
    </div>
  )
}

export default LoadingSpinner