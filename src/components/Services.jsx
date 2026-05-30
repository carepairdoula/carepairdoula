import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'






const BOOKING_URL = 'https://calendar.app.google/9HjRBQhJGpE6YCzv5'

const educationSessions = [
  {
    title: 'Childbirth Preparation',
    duration: '6 hours',
    tagline: 'Your comprehensive guide to labour and birth',
    topics: [
      'Late pregnancy: physical changes, prelabour signs, and preparing your body',
      'Stages of labour and labouring at home',
      'Recognizing true labour and when to go to the hospital or birthing location',
      'Vaginal birth process and what happens immediately after',
      'Caesarean birth process and what to expect',
      'Creating flexible birth preferences that honour your values',
      'Pain management: natural comfort measures, breathing, movement, positioning, and medical options including epidurals',
      'Medical interventions and informed consent: understanding your options, the BRAIN framework, and how to advocate for yourself',
      'Immediate postpartum: golden hour, skin-to-skin, and first moments with baby',
    ],
  },
  {
    title: 'Newborn Care & Postpartum Prep',
    duration: '6 hours',
    tagline: 'Ready for life with your new baby',
    topics: [
      'Physical postpartum recovery: healing, bleeding, and body changes',
      'Postpartum warning signs and when to call your provider',
      'Emotional adjustment and the "baby blues" vs. postpartum depression',
      'Newborn appearance, behaviour, and what\'s normal in the first weeks',
      'Safe sleep practices and SIDS prevention',
      'Diapering, bathing, and basic newborn care',
      'Breastfeeding, bottle feeding, formula feeding',
      'Pumping, short and long-term milk storage and safe handling',
      'Recognizing baby\'s cues and soothing techniques',
      'Setting up your postpartum space and preparing practical support',
    ],
  },
  {
    title: 'Partner as Birth & Postpartum Support',
    duration: '2 hours',
    tagline: 'Your essential role in the journey',
    topics: [
      'Understanding your partner\'s physical and emotional experience',
      'Active labour support: positioning, counterpressure, and encouragement',
      'What to say (and not say) during labour',
      'Supporting pain management decisions and being an advocate',
      'Your role during caesarean birth or medical interventions',
      'Immediate postpartum: supporting healing and bonding',
      'Practical postpartum help: what partners can do in the early weeks',
      'Feeding support and overnight strategies',
      'Protecting your partner\'s recovery and mental health',
      'Guilt-free selfcare',
    ],
  },
  {
    title: 'Grandparents & Caregivers Education',
    duration: '2 hours',
    tagline: 'Supporting the new family with current knowledge',
    topics: [
      'What\'s changed: updated feeding and care practices',
      'Safe sleep guidelines: back to sleep, room sharing, and safe surfaces',
      'Current recommendations vs. "how we did it back then"',
      'Supporting breastfeeding and modern feeding practices',
      'Soothing techniques and understanding newborn crying',
      'Postpartum support: what new parents really need',
      'Respecting parenting choices and boundaries',
      'How to help without overstepping',
      'Bonding with your grandchild while supporting parents\' lead',
    ],
  },
]

export default function Services() {
  const [openSession, setOpenSession] = useState(null)

  const mainServices = [
    {
      id: 'birth-doula',
      type: 'Birth Doula',
      tagline: 'Your guide through labour and delivery',
      intro: 'Labour is unpredictable. Having knowledgeable and continuous support can make all the difference. As your Birth Doula, I provide emotional, physical, and informational support before, during, and after delivery.',
      includes: [
        'Two prenatal visits. We\'ll discuss your situation and preferences, and create a unique birth plan, so that you\'re prepared for what\'s ahead.',
        '24 hour availability as your due date approaches. Day or night, I\'m only a text or call away.',
        'Continuous labour support from the moment I arrive until an hour after the baby is born. Comfort measures, positioning, breathing techniques, and a calm, reassuring presence through every contraction.',
        'One postpartum visit. We\'ll discuss your birth experience, early feeding, and any concerns, to ensure you\'re fully supported while adjusting to this huge and exciting change.',
      ],
      accent: 'coral',
    },
    {
      id: 'postpartum-doula',
      type: 'Postpartum Doula',
      tagline: 'The fourth trimester matters',
      intro: 'Caring for a newborn is beautiful, but sleepless nights, feeding challenges, and creating a routine that works for everyone in the home can be exhausting. Postpartum support helps you rest, process, and reflect, so that you can bond with and nurture your baby while healing and recovering.',
      includes: [
        'In-home day and overnight support',
        'Newborn care guidance. Feeding support (breast or bottle), diapering, bathing, soothing techniques, and sleep strategies.',
        'Physical recovery support. Light meal prep and household tasks so you can focus on healing.',
        'Emotional support. Processing the birth experience, adjusting to your new identity, and watching for signs of postpartum mood disorders.',
      ],
      accent: 'sage',
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
            Support that fits your journey.
          </h2>
        </motion.div>

        <div className="space-y-8">

          {/* 1. Education Sessions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div id="education-sessions" className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:shadow-coral/10">
              <div className="px-8 pt-8 pb-6 bg-gradient-to-br from-coral/10 to-coral-light/5">
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal mb-2">
                  Prenatal Education — Birth & Newborn Care
                </h3>
                <p className="font-medium text-coral">Knowledge that empowers you</p>
              </div>

              <div className="p-8">
                <p className="text-charcoal-light leading-relaxed mb-3">
                  Each session is designed to empower you with knowledge, confidence and practical skills as you adjust to this exciting change. I provide interactive sessions designed for comprehension and retention.
                </p>

                <p className="text-charcoal font-medium mb-3">Benefits of In-Home Prenatal Education</p>
                <div className="space-y-2 mb-6">
                  {[
                    'Personalized Attention: Every question answered, every concern addressed.',
                    'Comfort and Convenience: Learn in your own space without travel.',
                    'Partner Engagement: Intimate setting encourages full participation.',
                    'Flexible Pacing: Sessions adapt to your learning style and needs.',
                    'Hands-On: Practice with your own baby gear or ours.',
                    'Confidential Space: Discuss sensitive topics privately.',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1 text-coral flex-shrink-0 text-xs">◆</span>
                      <p className="text-charcoal-light leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-8">
                  {educationSessions.map((session, index) => (
                    <div key={index} className="border border-cream-dark rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setOpenSession(openSession === index ? null : index)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left bg-transparent border-none cursor-pointer group"
                        aria-expanded={openSession === index}
                      >
                        <div className="flex items-center gap-4 pr-4">
                          <span className="font-medium text-charcoal group-hover:text-coral transition-colors duration-200">
                            {session.title}
                          </span>
                          <span className="text-sm text-charcoal-light bg-cream px-3 py-1 rounded-full flex-shrink-0">
                            {session.duration}
                          </span>
                        </div>
                        <span
                          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                            openSession === index
                              ? 'bg-coral text-white rotate-180'
                              : 'bg-cream-dark text-charcoal-light'
                          }`}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>

                      <AnimatePresence>
                        {openSession === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5">
                              <p className="text-sm text-coral font-medium mb-3 italic">{session.tagline}</p>
                              <div className="space-y-1">
                                {session.topics.map((topic, i) => (
                                  <p key={i} className="text-charcoal-light text-sm leading-relaxed pl-4 border-l-2 border-cream-dark">
                                    {topic}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 rounded-full font-medium transition-all duration-300 text-center no-underline bg-coral hover:bg-coral-dark text-white hover:shadow-lg hover:shadow-coral/25"
                >
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </motion.div>

          {/* 2 & 3. Birth and Postpartum Doula */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div id={service.id} className={`h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${service.accent === 'coral' ? 'hover:shadow-coral/10' : 'hover:shadow-sage/10'}`}>
                  <div className={`px-8 pt-8 pb-6 ${service.accent === 'coral' ? 'bg-gradient-to-br from-coral/10 to-coral-light/5' : 'bg-gradient-to-br from-sage/10 to-sage-light/5'}`}>
                    <h3 className="font-serif text-2xl sm:text-3xl text-charcoal mb-2">{service.type}</h3>
                    <p className={`font-medium ${service.accent === 'coral' ? 'text-coral' : 'text-sage'}`}>{service.tagline}</p>
                  </div>
                  <div className="p-8">
                    <p className="text-charcoal-light leading-relaxed mb-4">{service.intro}</p>
                    <p className="text-charcoal font-medium mb-3">What's Included:</p>
                    <div className="space-y-2 mb-8">
                      {service.includes.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="mt-1 text-coral flex-shrink-0 text-xs">◆</span>
                          <p className="text-charcoal-light leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-4 rounded-full font-medium transition-all duration-300 text-center no-underline ${service.accent === 'coral' ? 'bg-coral hover:bg-coral-dark text-white hover:shadow-lg hover:shadow-coral/25' : 'bg-sage hover:bg-sage-dark text-white hover:shadow-lg hover:shadow-sage/25'}`}
                    >
                      Book a Free Consultation
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 4. Nursery Setup, Curation & Organisation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div id="nursery-service" className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:shadow-sage/10">
              <div className="px-8 pt-8 pb-6 bg-gradient-to-br from-sage/10 to-sage-light/5">
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal mb-2">
                  Nursery Curation & Organisation
                </h3>
                <p className="font-medium text-sage">A calm, functional space. Ready when you are.</p>
              </div>

              <div className="p-8">
                <p className="text-charcoal-light leading-relaxed mb-3">
                  Baby gifts pile up fast. Clothes come in every size. Gear arrives faster than you can open it. Before long, the nursery is overwhelming, and you can't find what you need at 3am.
                </p>
                <p className="text-charcoal-light leading-relaxed mb-4">
                  This fully hands-on service transforms your nursery into an efficient, logical space. Don't waste money buying things you forgot you had. Every item is sorted, stored, and within reach. A system that makes sense now and as your baby grows. Give yourself the gift of a beautiful, picture-perfect nursery.
                </p>

                <p className="text-charcoal font-medium mb-3">What's Included:</p>
                <div className="space-y-2 mb-6">
                  {[
                    'A complete hands-on setup of your nursery — dresser, closet, changing station, and storage',
                    'Every item sorted by immediate need, upcoming use, and long-term storage so nothing gets lost',
                    'A custom organization system built around how you\'ll actually use the space',
                    'Vacuum seal bags, closet organizers, dresser dividers, and labels included',
                    'A simple maintenance plan so the system stays intact',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1 text-coral flex-shrink-0 text-xs">◆</span>
                      <p className="text-charcoal-light leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-charcoal font-medium mb-3">Before & After:</p>
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <img src="https://raw.githubusercontent.com/carepairdoula/carepairdoula/main/src/assets/images/nursery-before-1.jpg" alt="Nursery before" className="w-full rounded-2xl object-cover" />
                    <img src="https://raw.githubusercontent.com/carepairdoula/carepairdoula/main/src/assets/images/nursery-after-1.jpg" alt="Nursery after" className="w-full rounded-2xl object-cover" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <img src="https://raw.githubusercontent.com/carepairdoula/carepairdoula/main/src/assets/images/nursery-before-2.jpg" alt="Nursery before" className="w-full rounded-2xl object-cover" />
                    <img src="https://raw.githubusercontent.com/carepairdoula/carepairdoula/main/src/assets/images/nursery-after-2.jpg" alt="Nursery after" className="w-full rounded-2xl object-cover" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <img src="https://raw.githubusercontent.com/carepairdoula/carepairdoula/main/src/assets/images/nursery-before-3.jpg" alt="Nursery before" className="w-full rounded-2xl object-cover" />
                    <img src="https://raw.githubusercontent.com/carepairdoula/carepairdoula/main/src/assets/images/nursery-after-3.jpg" alt="Nursery after" className="w-full rounded-2xl object-cover" />
                  </div>
                </div>

                <div className="bg-cream rounded-2xl p-6 mb-8 relative">
                  <div className="absolute top-6 right-6 text-coral/20 text-5xl font-serif leading-none">"</div>
                  <blockquote className="relative">
                  <p className="text-charcoal-light leading-relaxed italic mb-4">
                    "As a new mom, there are already so many things to think about, and having Mimi organize our nursery ended up being one of the most helpful decisions we made. I had piles of baby shower gifts and items sitting in the room, and between pregnancy and postpartum exhaustion, I couldn't muster the energy to tackle it myself. What felt overwhelming to me, Mimi completely transformed. She organized everything thoughtfully, packed away items I wouldn't need right away into vacuum-sealed bags, and created a space that was not only beautiful, but practical for everyday life. During those exhausting postpartum days and middle-of-the-night moments, I knew exactly where everything was. She thought of details and systems I would never have considered on my own, and it gave me such peace of mind. She even provided a maintenance plan afterward so I could actually keep everything organized long-term. If you're a tired new mom wondering if it's worth it — it absolutely is."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coral-light/30 to-sage-light/30 flex items-center justify-center">
                      <span className="font-serif text-charcoal text-lg">S</span>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Simone</p>
                      <p className="text-xs text-charcoal-light">Nursery Curation & Organization</p>
                    </div>
                  </div>
                  </blockquote>
                </div>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 rounded-full font-medium transition-all duration-300 text-center no-underline bg-sage hover:bg-sage-dark text-white hover:shadow-lg hover:shadow-sage/25"
                >
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </motion.div>

          {/* 5. Gift Certificate */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="px-8 pt-8 pb-6 bg-gradient-to-br from-coral/5 to-sage/5">
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal mb-2">Gift Certificate</h3>
                <p className="font-medium text-charcoal-light">A thoughtful gift for new and growing families</p>
              </div>
              <div className="p-8">
                <p className="text-charcoal-light leading-relaxed mb-8">
                  Celebrate new beginnings with a gift certificate! Perfect for friends, family and coworkers who want to offer meaningful help during this special time. Gift certificates can be used towards any available service, ensuring the recipient receives exactly the support they need.
                </p>
                <Link
                  to="/gift-certificate"
                  className="inline-block w-full sm:w-auto px-8 py-4 rounded-full font-medium transition-all duration-300 bg-charcoal hover:bg-charcoal-light text-white hover:shadow-lg text-center no-underline"
                >
                  Request a Gift Certificate
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
