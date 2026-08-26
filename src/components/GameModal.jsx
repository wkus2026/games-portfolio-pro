import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GameModal = ({ game, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-700"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-red-500/80 hover:bg-red-600 rounded-full flex items-center justify-center text-white text-xl"
          >
            ✕
          </motion.button>

          {/* Iframe */}
          <iframe
            src={game.url}
            title={game.title}
            className="w-full h-full border-none"
            allowFullScreen
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default GameModal
