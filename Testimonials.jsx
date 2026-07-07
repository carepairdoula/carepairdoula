import { motion } from 'framer-motion'
import logo from '../assets/images/logo.svg'

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Meet Your Doula', id: 'meet-your-doula' },
    { label: 'Services', id: 'services' },
    { label: 'For Organizations', id: 'for-organizations' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <footer className="bg-espresso text-ivory relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-16 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-10 mb-10 items-center"
        >
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="Carepair"
              className="h-20 sm:h-24 w-auto brightness-0 invert opacity-90 mx-auto md:mx-0"
            />
          </div>

          <nav className="flex flex-wrap justify-center gap-x-7 gap-y-3" aria-label="Footer">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-ivory/70 hover:text-coral-light transition-colors duration-200 text-sm tracking-wide bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="text-center md:text-right">
            <p className="text-ivory/70 text-sm tracking-[0.2em] uppercase">Greater Toronto Area</p>
          </div>
        </motion.div>

        <div className="border-t border-ivory/15 my-8" />

        <p className="text-center text-ivory/50 text-sm">
          &copy; {new Date().getFullYear()} Carepair. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
