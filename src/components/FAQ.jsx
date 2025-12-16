import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What if I'm planning a hospital birth?",
      answer:
        "Doulas are welcome in any birth setting—hospitals, birth centers, and home births. In fact, hospital births are where many families find doula support most valuable. When you're navigating an unfamiliar environment with rotating staff and medical interventions, having one consistent person who knows your wishes makes all the difference. I'll work alongside your medical team, not against them.",
    },
    {
      question: 'When should I book a doula?',
      answer:
        "For birth doula support, earlier is better. Ideally during your second trimester. This gives us time to build a relationship, work through your birth preferences, and make sure you feel fully prepared. That said, if you're reading this and your due date is approaching, that's okay too. Reach out and let's talk.\n\nFor postpartum doula support, you can book anytime; even after the baby arrives. Many families don't realize they need support until they're in the thick of it.",
    },
    {
      question: 'What if my partner feels replaced?',
      answer:
        "This is a common concern, and I take it seriously. My job isn't to replace your partner—it's to empower them. During labor, I guide partners on how to help with comfort measures, when to offer support, and when to step back. Most partners tell me afterward that they felt more involved, not less.",
    },
    {
      question: "What is the difference between a doula and a midwife?",
      answer:
        "A midwife is a medical professional who can deliver your baby, perform exams, and handle clinical care. A doula provides emotional, physical, and informational support. We work alongside your medical team (whether that's an OB or a midwife) as your dedicated support person.",
    },
    {
      question: 'Are doulas covered by insurance?',
      answer:
        "Although doula services are not covered by OHIP, some insurance plans do provide coverage. Check with your provider for details.",
    },
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 sm:py-28 bg-cream relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
            Questions you might have
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-transparent border-none cursor-pointer group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-serif text-lg sm:text-xl text-charcoal pr-4 group-hover:text-coral transition-colors duration-200">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-coral text-white rotate-180'
                      : 'bg-cream-dark text-charcoal-light'
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t border-cream-dark">
                        <p className="text-charcoal-light leading-relaxed pt-4 whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
