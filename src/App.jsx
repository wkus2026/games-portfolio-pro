import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import GamesGrid from './components/GamesGrid'
import GameModal from './components/GameModal'
import Footer from './components/Footer'

function App() {
  const [selectedGame, setSelectedGame] = useState(null)

  const games = [
    {
      id: 'flappy-bird',
      title: '🐦 Flappy Bird',
      description: 'Navigate through pipes in this classic reflex game',
      image: 'https://images.unsplash.com/photo-1538481143235-b7aeae69b378?w=400&h=300&fit=crop',
      url: 'https://wkus2026.github.io/games-portfolio/games/flappy-bird.html',
      rating: 4.5,
      plays: '1.2K',
      tags: ['Arcade', 'Reflex', 'Classic'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'snake',
      title: '🐍 Snake Game',
      description: 'The classic retro serpent game - eat and grow!',
      image: 'https://images.unsplash.com/photo-1577720643272-265f434885ab?w=400&h=300&fit=crop',
      url: 'https://wkus2026.github.io/games-portfolio/games/snake.html',
      rating: 4.8,
      plays: '2.1K',
      tags: ['Retro', 'Strategy', 'Classic'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'platformer',
      title: '🎮 Platformer Mini',
      description: 'Jump & Collect - gather coins and avoid enemies!',
      image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop',
      url: 'https://wkus2026.github.io/games-portfolio/games/platformer-mini.html',
      rating: 4.7,
      plays: '2.8K',
      tags: ['Platformer', 'Action', 'Adventure'],
      color: 'from-pink-400 to-rose-500'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <GamesGrid games={games} onGameSelect={setSelectedGame} />
        <Footer />
      </div>

      {/* Modal */}
      {selectedGame && <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />}
    </div>
  )
}

export default App
