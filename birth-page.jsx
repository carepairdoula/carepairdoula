import { motion } from 'framer-motion'

const BOOKING_URL = 'https://calendar.app.google/9HjRBQhJGpE6YCzv5'

export default function MeetMimi() {
  return (
    <section id="meet-your-doula" className="py-16 sm:py-32 bg-ivory relative overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 font-serif italic text-blush text-[16rem] sm:text-[24rem] leading-none pointer-events-none select-none" aria-hidden="true">
        M
      </div>

      <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-emerald text-xs sm:text-sm uppercase tracking-[0.4em] mb-8">Meet your doula</p>
          <h2 className="font-serif italic text-7xl sm:text-8xl text-espresso mb-8">Mimi</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="border border-emerald/40 text-emerald text-xs tracking-[0.2em] uppercase px-5 py-2 rounded-full">
              Certified Birth &amp; Postpartum Doula
            </span>
            <span className="border border-coral/50 text-coral-dark text-xs tracking-[0.2em] uppercase px-5 py-2 rounded-full">
              Prenatal &amp; Newborn Care Educator
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <p className="font-serif text-2xl sm:text-3xl text-espresso leading-snug mb-8">
            Mimi founded Carepair to give families a higher standard of care. The name says everything about her approach: care, paired.
          </p>
          <div className="space-y-6 text-ink-light text-lg leading-relaxed text-left sm:text-center">
            <p>
              No two families are alike, so no two plans she builds are alike. She listens first, then shapes her support around your situation, your values, and your plan.
            </p>
            <p>
              A certified birth and postpartum doula, Mimi believes deeply in advocacy. She makes sure you understand your options and prepares you to advocate for yourself with confidence, because you lead and she supports. Her care is entirely free of judgment, shaped by years of supporting families of every background and belief.
            </p>
            <p>
              And then there is the thing clients mention most: babies simply take to her. She has a way with newborns that cannot be taught or explained, only witnessed. It is the quiet difference that sets her apart.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-espresso hover:bg-coral text-ivory px-9 py-4 rounded-full font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl no-underline"
          >
            Begin with a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
