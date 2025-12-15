import { motion } from 'framer-motion'
import logo from '../assets/images/logo.svg'

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <footer className="bg-sage text-cream relative overflow-hidden">
      {/* Decorative wave shape */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-cream"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Logo */}
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="Carepair"
              className="h-16 w-auto brightness-0 invert opacity-90 mx-auto md:mx-0"
            />
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-cream/80 hover:text-cream transition-colors duration-200 text-sm bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="text-cream/80 text-sm mb-1">Greater Toronto Area</p>
            <a
              href="mailto:info@carepair.ca"
              className="text-cream hover:text-coral-light transition-colors duration-200 underline-offset-4 hover:underline"
            >
              info@carepair.ca
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-cream/20 my-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-cream/60 text-sm"
        >
          <p>© {new Date().getFullYear()} Carepair. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
