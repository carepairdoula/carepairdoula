import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-gradient-to-br from-coral/10 via-cream to-sage/5 relative overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-coral/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-sage/5 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4 leading-tight">
            Ready to be supported?
          </h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Whether you're planning for birth, navigating postpartum, or anywhere in between, I'm here to support you. Let's connect with a free, no-pressure discovery call to see if working together feels like the right fit.
          </p>
        </motion.div>

        {/* Book a Call */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg"
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-coral/10 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-coral"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal mb-4">
              Book a Consult
            </h3>

            <p className="text-charcoal-light mb-8 max-w-md mx-auto">
              Pick a time that works for you. We'll chat for about 30 minutes.
            </p>

            <a
              href="https://calendar.app.google/9HjRBQhJGpE6YCzv5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral-dark text-white py-4 px-8 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-coral/25 no-underline"
            >
              Schedule a Free Consult
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
