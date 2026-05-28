import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

const BOOKING_URL = 'https://calendar.app.google/9HjRBQhJGpE6YCzv5'

const serviceItems = [
  { label: 'Prenatal Education — Birth & Newborn Care', id: 'education-sessions' },
  { label: 'Birth Doula', id: 'birth-doula' },
  { label: 'Postpartum Doula', id: 'postpartum-doula' },
  { label: 'Nursery Curation & Organisation', id: 'nursery-service' },
  { label: 'Gift Certificate', href: '/gift-certificate' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const servicesRef = useRef(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const handleServicesMouseEnter = () => {
    clearTimeout(closeTimer.current)
    setIsServicesOpen(true)
  }

  const handleServicesMouseLeave = () => {
    closeTimer.current = setTimeout(() => setIsServicesOpen(false), 150)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-28">

          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="flex items-center cursor-pointer bg-transparent border-none"
          >
            <img
              src={logo}
              alt="Carepair - Customized Support For Birth & Beyond"
              className="h-32 sm:h-40 w-auto brightness-0"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {/* About */}
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="text-charcoal hover:text-coral transition-colors duration-200 font-sans text-sm tracking-wide bg-transparent border-none cursor-pointer"
            >
              About
            </button>

            {/* Services dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                type="button"
                onClick={() => scrollToSection('services')}
                className="flex items-center gap-1 text-charcoal hover:text-coral transition-colors duration-200 font-sans text-sm tracking-wide bg-transparent border-none cursor-pointer"
              >
                Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72"
                  >
                    <div className="bg-cream/98 backdrop-blur-sm rounded-2xl shadow-xl shadow-charcoal/10 py-2 overflow-hidden border border-cream-dark/30">
                      {serviceItems.map((item) =>
                        item.href ? (
                          <Link
                            key={item.label}
                            to={item.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="block px-5 py-3 text-sm text-charcoal hover:text-coral hover:bg-cream-dark/40 transition-colors duration-150 no-underline"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => scrollToSection(item.id)}
                            className="block w-full text-left px-5 py-3 text-sm text-charcoal hover:text-coral hover:bg-cream-dark/40 transition-colors duration-150 bg-transparent border-none cursor-pointer"
                          >
                            {item.label}
                          </button>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Testimonials */}
            <button
              type="button"
              onClick={() => scrollToSection('testimonials')}
              className="text-charcoal hover:text-coral transition-colors duration-200 font-sans text-sm tracking-wide bg-transparent border-none cursor-pointer"
            >
              Testimonials
            </button>

            {/* FAQ */}
            <button
              type="button"
              onClick={() => scrollToSection('faq')}
              className="text-charcoal hover:text-coral transition-colors duration-200 font-sans text-sm tracking-wide bg-transparent border-none cursor-pointer"
            >
              FAQ
            </button>

            {/* Contact */}
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="text-charcoal hover:text-coral transition-colors duration-200 font-sans text-sm tracking-wide bg-transparent border-none cursor-pointer"
            >
              Contact
            </button>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-coral hover:bg-coral-dark text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-lg no-underline"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-charcoal bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-cream/95 backdrop-blur-sm rounded-2xl mt-2 shadow-lg"
            >
              <div className="py-4 px-4 space-y-1">

                <button
                  type="button"
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left py-3 px-4 text-charcoal hover:text-coral hover:bg-cream-dark rounded-xl transition-colors duration-200 bg-transparent border-none cursor-pointer"
                >
                  About
                </button>

                {/* Mobile Services with expandable sub-items */}
                <div>
                  <button
                    type="button"
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="flex items-center justify-between w-full text-left py-3 px-4 text-charcoal hover:text-coral hover:bg-cream-dark rounded-xl transition-colors duration-200 bg-transparent border-none cursor-pointer"
                  >
                    Services
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4"
                      >
                        {serviceItems.map((item) =>
                          item.href ? (
                            <Link
                              key={item.label}
                              to={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-sm text-charcoal-light hover:text-coral hover:bg-cream-dark rounded-xl transition-colors duration-150 no-underline"
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <button
                              key={item.label}
                              type="button"
                              onClick={() => scrollToSection(item.id)}
                              className="block w-full text-left py-2.5 px-4 text-sm text-charcoal-light hover:text-coral hover:bg-cream-dark rounded-xl transition-colors duration-150 bg-transparent border-none cursor-pointer"
                            >
                              {item.label}
                            </button>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSection('testimonials')}
                  className="block w-full text-left py-3 px-4 text-charcoal hover:text-coral hover:bg-cream-dark rounded-xl transition-colors duration-200 bg-transparent border-none cursor-pointer"
                >
                  Testimonials
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('faq')}
                  className="block w-full text-left py-3 px-4 text-charcoal hover:text-coral hover:bg-cream-dark rounded-xl transition-colors duration-200 bg-transparent border-none cursor-pointer"
                >
                  FAQ
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left py-3 px-4 text-charcoal hover:text-coral hover:bg-cream-dark rounded-xl transition-colors duration-200 bg-transparent border-none cursor-pointer"
                >
                  Contact
                </button>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-2 bg-coral hover:bg-coral-dark text-white py-3 px-4 rounded-xl text-center font-medium transition-all duration-200 no-underline"
                >
                  Book a Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
