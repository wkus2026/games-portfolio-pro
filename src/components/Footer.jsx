import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">About</h3>
            <p className="text-slate-400">
              Games Portfolio Pro is a modern gaming hub featuring HTML5 games built with React and Tailwind CSS.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Links</h3>
            <ul className="space-y-2 text-slate-400">
              {['Home', 'Games', 'About', 'Contact'].map((link, i) => (
                <li key={i}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5, color: '#60a5fa' }}
                    className="inline-block"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Follow</h3>
            <div className="flex gap-4">
              {['GitHub', 'Twitter', 'Discord'].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, color: '#60a5fa' }}
                  className="text-slate-400"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8 text-center text-slate-400">
          <p>&copy; 2026 Games Portfolio Pro. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
