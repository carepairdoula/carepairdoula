import { motion } from 'framer-motion'

export default function Reality() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-cream-dark/50 relative">
      {/* Subtle organic shape */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cream to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-coral font-sans text-sm uppercase tracking-widest mb-4">
            Let's be honest
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-8 leading-tight">
            Pregnancy comes with a lot of noise.
          </h2>

          <div className="space-y-6 text-charcoal-light text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Everyone has opinions. The internet has horror stories. Your care provider has fifteen minutes.
              And somewhere in all of it, you're trying to figure out what <em className="text-charcoal not-italic font-medium">you</em> actually
              want—and whether anyone will listen.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Maybe you're worried about being pressured into interventions you don't want. Maybe your partner
              wants to help but doesn't know how. Maybe you're already exhausted thinking about those first
              weeks at home with a newborn, wondering how you'll manage when everyone else goes back to their lives.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-charcoal font-medium"
            >
              These feelings are valid. And they're exactly why doulas exist.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
