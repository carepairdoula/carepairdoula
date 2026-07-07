import { motion } from 'framer-motion'


const offerings = [
  'Education sessions for employees preparing for parental leave',
  'Dynamic, interactive workshops employees remember long after the session ends',
  'A distinctive addition to your benefits program, taught live by a certified birth and postpartum doula',
  'Flexible scheduling, on site or virtual, shaped around your workplace',
]

export default function Corporate() {
  const goToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <section id="for-organizations" className="py-16 sm:py-28 bg-emerald-deep relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[26rem] h-[26rem] rounded-full border border-gold/30 pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-24 w-[30rem] h-[30rem] rounded-full border border-ivory/10 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <p className="text-gold text-xs sm:text-sm uppercase tracking-[0.4em] mb-6">For organizations</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-ivory mb-6">
              Support your people through life's biggest <em className="text-gold font-medium">transition.</em>
            </h2>
            <p className="text-ivory/80 text-lg leading-relaxed">
              Bring a prenatal and newborn care educator to your workplace. A meaningful, memorable addition to any wellness or family benefits program.
            </p>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {offerings.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-ivory/5 border border-ivory/15 rounded-2xl px-8 py-6 flex items-start gap-5 backdrop-blur-sm"
                >
                  <span className="font-serif text-gold text-lg leading-none mt-1" aria-hidden="true">&#10022;</span>
                  <p className="text-ivory/90 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-9"
            >
              <button
                type="button"
                onClick={goToContact}
                className="inline-block bg-gold hover:bg-ivory text-espresso px-9 py-4 rounded-full font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl no-underline border-none cursor-pointer"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
