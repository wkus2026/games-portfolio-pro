import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="text-4xl">🎮</div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Games Portfolio Pro
              </h1>
              <p className="text-xs text-slate-400">Modern Gaming Hub</p>
            </div>
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Games', 'About', 'Contact'].map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                whileHover={{ color: '#60a5fa' }}
                className="text-slate-300 font-medium"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold glow"
          >
            Play Now
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
