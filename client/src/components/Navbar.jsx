import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { menuItems } from '../data/menuItems'
import { List, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#2E3C2E]/95 shadow-2xl backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="text-2xl font-semibold tracking-wide text-[#f5e8cd]" aria-label="Ir al inicio">Frapessaurio</a>

        <nav className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-sm font-medium text-white transition hover:text-[#c8a175]">{item.label}</a>
          ))}
        </nav>

        <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menú">
          {isOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 bg-[#1F291F]/95 px-4 py-4 text-center md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {menuItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="block rounded-xl px-4 py-3 text-white transition hover:bg-white/10" onClick={() => setIsOpen(false)}>{item.label}</a>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}

export default Navbar
