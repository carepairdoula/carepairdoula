import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

const serviceItems = [
  { label: 'Birth Doula', id: 'birth-doula' },
  { label: 'Postpartum Doula', id: 'postpartum-doula' },
  { label: 'Prenatal Education', id: 'education-sessions' },
  { label: 'Nursery Curation & Organisation', id: 'nursery-service' },
  { label: 'For Organizations', id: 'for-organizations' },
  { label: 'Gift Certificate', id: 'gift-certificate-info' },
]

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Meet Your Doula', id: 'meet-your-doula' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'FAQ', id: 'faq' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const closeTimer = useRef(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
    setIsMobileServicesOpen(false)
    window.setTimeout(() => {
      const element = document.getElementById(id)
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
  }

  const openServices = () => {
    clearTimeout(closeTimer.current)
    setIsServicesOpen(true)
  }
  const delayCloseServices = () => {
    closeTimer.current = setTimeout(() => setIsServicesOpen(false), 250)
  }

  const linkColor = 'text-espresso hover:text-coral'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen ? 'bg-ivory/95 backdrop-blur-md border-b border-sand shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-20' : 'h-24 sm:h-28'}`}>

            {/* Logo */}
            <button
              type="button"
              onClick={() => scrollToSection('hero')}
              className="flex items-center cursor-pointer bg-transparent border-none p-0"
              aria-label="Carepair home"
            >
              <img
                src={logo}
                alt="Carepair. Customized Support For Birth and Beyond"
                className="h-20 sm:h-24 w-auto brightness-0 opacity-90 transition-all duration-500"
              />
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-7">
              {navItems.slice(0, 2).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`${linkColor} transition-colors duration-300 text-sm tracking-wide bg-transparent border-none cursor-pointer`}
                >
                  {item.label}
                </button>
              ))}

              {/* Services dropdown: opens on hover or click, items always clickable */}
              <div className="relative" onMouseEnter={openServices} onMouseLeave={delayCloseServices}>
                <button
                  type="button"
                  onClick={() => setIsServicesOpen((open) => !open)}
                  className={`flex items-center gap-1 ${linkColor} transition-colors duration-300 text-sm tracking-wide bg-transparent border-none cursor-pointer`}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                      <div className="bg-ivory rounded-2xl shadow-xl shadow-espresso/10 py-2 overflow-hidden border border-sand">
                        {serviceItems.map((item) =>
                          item.href ? (
                            <Link
                              key={item.label}
                              to={item.href}
                              onClick={() => setIsServicesOpen(false)}
                              className="block px-5 py-3 text-sm text-espresso hover:text-coral hover:bg-cream-dark/60 transition-colors duration-150 no-underline"
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <button
                              key={item.label}
                              type="button"
                              onClick={() => scrollToSection(item.id)}
                              className="block w-full text-left px-5 py-3 text-sm text-espresso hover:text-coral hover:bg-cream-dark/60 transition-colors duration-150 bg-transparent border-none cursor-pointer"
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

              {navItems.slice(2).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`${linkColor} transition-colors duration-300 text-sm tracking-wide bg-transparent border-none cursor-pointer`}
                >
                  {item.label}
                </button>
              ))}

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="bg-coral hover:bg-coral-dark text-ivory px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-coral/30 border-none cursor-pointer"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="md:hidden relative z-50 p-2 bg-transparent border-none cursor-pointer text-espresso"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu: kept outside the header so it always fills the screen correctly */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 bg-ivory z-40 overflow-y-auto"
          >
            <div className="pt-28 pb-16 px-8 flex flex-col gap-1">
              {navItems.slice(0, 2).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="text-left font-serif text-2xl text-espresso hover:text-coral py-3 bg-transparent border-none cursor-pointer transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setIsMobileServicesOpen((open) => !open)}
                className="flex items-center justify-between font-serif text-2xl text-espresso hover:text-coral py-3 bg-transparent border-none cursor-pointer transition-colors duration-200"
                aria-expanded={isMobileServicesOpen}
              >
                Services
                <svg className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {isMobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-5 pb-2 flex flex-col border-l border-sand ml-1">
                      {serviceItems.map((item) =>
                        item.href ? (
                          <Link
                            key={item.label}
                            to={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-ink-light hover:text-coral py-2.5 text-base no-underline transition-colors duration-200"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => scrollToSection(item.id)}
                            className="text-left text-ink-light hover:text-coral py-2.5 text-base bg-transparent border-none cursor-pointer transition-colors duration-200"
                          >
                            {item.label}
                          </button>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {navItems.slice(2).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="text-left font-serif text-2xl text-espresso hover:text-coral py-3 bg-transparent border-none cursor-pointer transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="mt-8 bg-coral hover:bg-coral-dark text-ivory text-center px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 border-none cursor-pointer"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
