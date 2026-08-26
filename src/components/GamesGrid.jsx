import React from 'react'
import { motion } from 'framer-motion'
import GameCard from './GameCard'

const GamesGrid = ({ games, onGameSelect }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section id="games" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Games
          </span>
        </h2>
        <p className="text-slate-400 text-lg">Play amazing HTML5 games directly in your browser</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onPlay={() => onGameSelect(game)}
          />
        ))}
      </motion.div>
    </section>
  )
}

export default GamesGrid
