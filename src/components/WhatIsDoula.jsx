import { motion } from 'framer-motion'
import aboutImage from '../assets/images/about-image.webp'

export default function WhatIsDoula() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-sage/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-sage font-sans text-sm uppercase tracking-widest mb-4">
            What is a doula?
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-12 leading-tight">
            A doula is your constant.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="space-y-5 text-charcoal-light text-lg leading-relaxed">
              <p>
                As your Birth Doula, I'm with you before, during, and after. I learn what matters to you, what scares you, what you're hoping for. I help you ask questions, advocate for yourself, and stay grounded—even when things don't go as planned.
              </p>

              <p>
                Whether you're planning a home birth, a hospital birth with every intervention available, or you're still figuring it out—my job is to support your choices. Not judge them.
              </p>

              <p>
                My role isn't to replace your medical team. It's to fill in the gaps: emotional support, physical comfort, informed guidance, and a calm presence when you need it most.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl border-2 border-sage/20" />
              <div className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] rounded-3xl overflow-hidden shadow-2xl shadow-charcoal/10">
                <img
                  src={aboutImage}
                  alt="Supportive doula care moment"
                  className="w-full h-full object-cover opacity-90 saturate-[0.85]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Postpartum content below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-16 lg:mt-20"
        >
          <div className="max-w-3xl space-y-5 text-charcoal-light text-lg leading-relaxed">
            <p>
              As your Postpartum Doula, I'm there with you after your baby is born—helping you adjust to this new phase of life. I take the time to understand what you're going through, what you need most, and how I can best support you.
            </p>

            <p>
              No matter how you're feeling—whether it's joy, exhaustion, or uncertainty—I support your choices and honor your experience. I'm here to offer guidance and hands-on help so you can feel more supported and empowered during this special, sometimes overwhelming time.
            </p>

            <p className="text-charcoal font-medium">
              My goal is to provide a calm, nurturing presence that helps you feel more confident and less alone as you navigate this incredible, sometimes challenging, postpartum experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
