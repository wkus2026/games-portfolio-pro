import React from 'react'
import { motion } from 'framer-motion'

const GameCard = ({ game, onPlay }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-slate-900">
        <motion.img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity`}></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{game.title}</h3>
        <p className="text-slate-400 text-sm mb-4">{game.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {game.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">⭐ {game.rating}</span>
          </div>
          <div className="text-slate-400 text-sm">👥 {game.plays}</div>
        </div>

        {/* Play Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPlay}
          className={`w-full py-3 bg-gradient-to-r ${game.color} rounded-lg text-white font-bold text-lg glow`}
        >
          🎮 PLAY NOW
        </motion.button>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
    </motion.div>
  )
}

export default GameCard
