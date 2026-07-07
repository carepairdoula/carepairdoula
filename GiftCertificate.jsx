import { motion, useScroll, useTransform } from 'framer-motion'

const BOOKING_URL = 'https://calendar.app.google/9HjRBQhJGpE6YCzv5'
const HERO_IMG = 'https://images.unsplash.com/photo-1710897537209-392c74a1c299?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.62&fp-z=1.6&w=900&h=1125&q=75'

export default function Hero() {
  const { scrollY } = useScroll()
  const yImage = useTransform(scrollY, [0, 700], [0, 70])

  return (
    <section id="hero" className="relative flex items-center overflow-hidden bg-ivory pt-28 sm:pt-36 pb-12 sm:pb-20 lg:min-h-screen">
      {/* Soft colour glows, no hard blocks */}
      <div className="absolute top-16 right-0 w-72 h-72 sm:w-[30rem] sm:h-[30rem] rounded-full bg-blush blur-3xl opacity-70 pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-emerald/10 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Text */}
          <div className="lg:col-span-7 relative z-10">

            <h1 className="text-espresso text-5xl sm:text-7xl lg:text-[5.5rem] leading-[1.02] mb-7">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  Customized
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  support for birth
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <em className="text-coral font-medium">&amp; beyond.</em>
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="text-ink-light text-lg sm:text-xl max-w-md leading-relaxed mb-9"
            >
              Premium doula care, in home education, and nursery curation across the Greater Toronto Area.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap items-center gap-6"
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-coral hover:bg-coral-dark text-ivory px-6 py-3 text-sm sm:px-9 sm:py-4 sm:text-base rounded-full font-medium tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-coral/40 hover:-translate-y-0.5 inline-flex items-center gap-3 no-underline"
              >
                Book a Complimentary Consultation
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
              </a>
            </motion.div>
          </div>

          {/* Arch image */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <motion.div style={{ y: yImage }} className="relative">
                <div className="absolute -inset-4 sm:-inset-5 rounded-t-full rounded-b-[2.5rem] border border-gold/50 translate-x-3 translate-y-3" aria-hidden="true" />
                <div className="w-64 sm:w-80 lg:w-[24rem] aspect-[4/5] rounded-t-full rounded-b-[2.5rem] overflow-hidden shadow-2xl shadow-espresso/20">
                  <img
                    src={HERO_IMG}
                    alt="Hands cradling a pregnant belly"
                    className="w-full h-full object-cover"
                    fetchPriority="high"
                  />
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
