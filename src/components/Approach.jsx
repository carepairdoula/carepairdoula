import { motion } from 'framer-motion'

export default function Approach() {
  const philosophyPoints = [
    {
      title: 'Judgment-free',
      description:
        'Do you want to give birth at home with a midwife, or do you want an epidural the minute you get to the hospital? I\'m here to support and affirm your choices, not to influence them.',
      accent: 'coral',
    },
    {
      title: 'Continuous presence',
      description:
        'Unlike your medical team, who works in shifts, I stay with you, providing a familiar, continuous, supportive presence.',
      accent: 'sage',
    },
    {
      title: 'Evidence-based, always',
      description:
        'I help you understand your options using current, evidence-based information, not anecdotes or fear tactics.',
      accent: 'coral',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-cream-dark/30 to-cream relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-coral/5 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-sage/5 blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
            Your birth. Your choices. Your plan.
          </h2>

          <p className="text-lg text-charcoal-light max-w-2xl mx-auto leading-relaxed">
            Every pregnancy is different. Every family is different. That's why customized support is so important.
          </p>

          <p className="text-lg text-charcoal-light max-w-2xl mx-auto leading-relaxed mt-4">
            If you're unsure, I can help you figure out what feels right for you.
          </p>
        </motion.div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                {/* Accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${
                    point.accent === 'coral' ? 'bg-coral' : 'bg-sage'
                  }`}
                />

                <h3 className="font-serif text-xl sm:text-2xl text-charcoal mb-4 leading-snug">
                  {point.title}
                </h3>

                <p className="text-charcoal-light leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
