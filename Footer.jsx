import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import nurseryBefore1 from '../assets/images/nursery-before-1.jpg'
import nurseryAfter1 from '../assets/images/nursery-after-1.jpg'
import nurseryBefore2 from '../assets/images/nursery-before-2.jpg'
import nurseryAfter2 from '../assets/images/nursery-after-2.jpg'
import nurseryBefore3 from '../assets/images/nursery-before-3.jpg'
import nurseryAfter3 from '../assets/images/nursery-after-3.jpg'

const BOOKING_URL = 'https://calendar.app.google/9HjRBQhJGpE6YCzv5'

const educationSessions = [
  {
    title: 'Childbirth Preparation',
    duration: '5 hours',
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
      'Immediate postpartum: golden hour, skin to skin, and first moments with baby',
    ],
  },
  {
    title: 'Newborn Care & Postpartum Prep',
    duration: '5 hours',
    tagline: 'Ready for life with your new baby',
    topics: [
      'Physical postpartum recovery: healing, bleeding, and body changes',
      'Postpartum warning signs and when to call your provider',
      'Emotional adjustment and the "baby blues" vs. postpartum depression',
      'Newborn appearance, behaviour, and what is normal in the first weeks',
      'Safe sleep practices and SIDS prevention',
      'Diapering, bathing, and basic newborn care',
      'Breastfeeding, bottle feeding, formula feeding',
      'Pumping, short and long term milk storage and safe handling',
      'Recognizing baby cues and soothing techniques',
      'Setting up your postpartum space and preparing practical support',
    ],
  },
  {
    title: 'Partner as Birth & Postpartum Support',
    duration: '2 hours',
    tagline: 'Your essential role in the journey',
    topics: [
      'Understanding your partner\u2019s physical and emotional experience',
      'Active labour support: positioning, counterpressure, and encouragement',
      'What to say (and not say) during labour',
      'Supporting pain management decisions and being an advocate',
      'Your role during caesarean birth or medical interventions',
      'Immediate postpartum: supporting healing and bonding',
      'Practical postpartum help: what partners can do in the early weeks',
      'Feeding support and overnight strategies',
      'Protecting your partner\u2019s recovery and mental health',
      'Guilt free selfcare',
    ],
  },
  {
    title: 'Grandparents & Caregivers Education',
    duration: '2 hours',
    tagline: 'Supporting the new family with current knowledge',
    topics: [
      'What has changed: updated feeding and care practices',
      'Safe sleep guidelines: back to sleep, room sharing, and safe surfaces',
      'Current recommendations vs. "how we did it back then"',
      'Supporting breastfeeding and modern feeding practices',
      'Soothing techniques and understanding newborn crying',
      'Postpartum support: what new parents really need',
      'Respecting parenting choices and boundaries',
      'How to help without overstepping',
      'Bonding with your grandchild while supporting parents\u2019 lead',
    ],
  },
]

function Bullet({ children }) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0" aria-hidden="true" />
      <p className="text-ink-light leading-relaxed">{children}</p>
    </div>
  )
}

function BookButton({ emerald }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block px-6 py-3 text-sm sm:px-8 sm:py-3.5 sm:text-base rounded-full font-medium tracking-wide transition-all duration-300 no-underline hover:-translate-y-0.5 ${
        emerald
          ? 'bg-emerald hover:bg-emerald-deep text-ivory hover:shadow-xl hover:shadow-emerald/30'
          : 'bg-coral hover:bg-coral-dark text-ivory hover:shadow-xl hover:shadow-coral/30'
      }`}
    >
      Book a Complimentary Consultation
    </a>
  )
}

function StackCard({ id, index, offset, children }) {
  return (
    <div id={id} className="sticky scroll-mt-24" style={{ top: `${96 + offset * 18}px` }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-white rounded-[2.5rem] border border-sand shadow-xl shadow-espresso/5 overflow-hidden mb-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 sm:px-12 pt-8 sm:pt-9 pb-6 border-b border-sand">
          <span className="font-serif outline-number text-5xl sm:text-7xl leading-none select-none" aria-hidden="true">{index}</span>
          {children[0]}
        </div>
        {children[1]}
      </motion.div>
    </div>
  )
}

export default function Services() {
  const [openSession, setOpenSession] = useState(null)

  return (
    <section id="services" className="py-16 sm:py-28 bg-cream-dark/50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-emerald text-xs sm:text-sm uppercase tracking-[0.4em] mb-6">Concierge care for growing families</p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl text-espresso">
            Support that fits <em className="text-coral font-medium">your</em> journey.
          </h2>
        </motion.div>

        {/* 01 Birth Doula */}
        <StackCard id="birth-doula" index="01" offset={0}>
          <div className="text-left sm:text-right">
            <h3 className="font-serif text-3xl sm:text-4xl text-espresso">Birth Doula</h3>
            <p className="text-coral font-medium text-sm tracking-wide mt-1">Your guide through labour and delivery</p>
            <p className="text-ink-light text-sm tracking-wide mt-1">Starting at $2,300</p>
          </div>
          <div className="px-6 sm:px-12 py-8 sm:py-9">
            <p className="text-ink-light leading-relaxed mb-7 max-w-2xl">
              Labour is unpredictable. Knowledgeable, continuous support makes all the difference. As your Birth Doula, I provide emotional, physical, and informational support before, during, and after delivery.
            </p>
            <div className="space-y-3 mb-9">
              <Bullet>One 3 hour prenatal visit to create your birth plan, postpartum plan and prepare you for what's ahead</Bullet>
              <Bullet>24 hour availability as your due date approaches. Day or night, I am only a text or call away.</Bullet>
              <Bullet>Continuous labour support from the moment I arrive until an hour after your baby is born. Comfort measures, positioning, breathing techniques, and a calm, reassuring presence.</Bullet>
              <Bullet>One postpartum visit to discuss your birth experience, early feeding, and any concerns, so you are fully supported while adjusting to this exciting change.</Bullet>
            </div>
            <BookButton />
          </div>
        </StackCard>

        {/* 02 Postpartum Doula */}
        <StackCard id="postpartum-doula" index="02" offset={1}>
          <div className="text-left sm:text-right">
            <h3 className="font-serif text-3xl sm:text-4xl text-espresso">Postpartum Doula</h3>
            <p className="text-coral font-medium text-sm tracking-wide mt-1">The fourth trimester matters</p>
            <p className="text-ink-light text-sm tracking-wide mt-1">$60 per hour | $55 for 100+ hours</p>
          </div>
          <div className="px-6 sm:px-12 py-8 sm:py-9">
            <p className="text-ink-light leading-relaxed mb-7 max-w-2xl">
              Caring for a newborn is beautiful, but sleepless nights, feeding challenges, and building a routine can be exhausting. My postpartum support helps you rest, process, and reflect, so you can bond with your baby while healing.
            </p>
            <div className="space-y-3 mb-9">
              <Bullet>In home day and overnight support</Bullet>
              <Bullet>Newborn care guidance. Feeding support (breast or bottle), diapering, bathing, soothing techniques, and sleep strategies.</Bullet>
              <Bullet>Physical recovery support. Light meal prep and household tasks so you can focus on healing.</Bullet>
              <Bullet>Emotional support. Processing the birth experience, adjusting to your new identity, and watching for signs of postpartum mood disorders.</Bullet>
            </div>
            <BookButton emerald />
          </div>
        </StackCard>

        {/* 03 Prenatal Education */}
        <StackCard id="education-sessions" index="03" offset={2}>
          <div className="text-left sm:text-right">
            <h3 className="font-serif text-3xl sm:text-4xl text-espresso">Prenatal Education</h3>
            <p className="text-coral font-medium text-sm tracking-wide mt-1">Birth and newborn care, taught in your home</p>
            <p className="text-ink-light text-sm tracking-wide mt-1">Starting at $250</p>
          </div>
          <div className="px-6 sm:px-12 py-8 sm:py-9">
            <p className="text-ink-light leading-relaxed mb-7 max-w-2xl">
              I teach interactive private sessions that give you knowledge, confidence, and practical skills. Every question answered, at your own pace, in the comfort and privacy of your home.
            </p>
            <div className="space-y-2.5 mb-9">
              {educationSessions.map((session, index) => (
                <div key={index} className="border border-sand rounded-2xl overflow-hidden bg-ivory/60">
                  <button
                    onClick={() => setOpenSession(openSession === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left bg-transparent border-none cursor-pointer group"
                    aria-expanded={openSession === index}
                  >
                    <div className="flex items-center gap-4 pr-4 flex-wrap">
                      <span className="font-medium text-espresso group-hover:text-coral transition-colors duration-200">
                        {session.title}
                      </span>
                      <span className="text-xs text-emerald bg-emerald/10 px-3 py-1 rounded-full flex-shrink-0 font-medium tracking-wide">
                        {session.duration}
                      </span>
                    </div>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-base transition-all duration-300 ${
                        openSession === index ? 'bg-coral text-ivory rotate-45' : 'bg-cream-dark text-ink-light'
                      }`}
                      aria-hidden="true"
                    >
                      +
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
                          <div className="space-y-1.5">
                            {session.topics.map((topic, i) => (
                              <p key={i} className="text-ink-light text-sm leading-relaxed pl-4 border-l-2 border-gold/40">
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
            <BookButton />
          </div>
        </StackCard>

        {/* 04 Nursery */}
        <StackCard id="nursery-service" index="04" offset={3}>
          <div className="text-left sm:text-right">
            <h3 className="font-serif text-3xl sm:text-4xl text-espresso">Nursery Curation &amp; Organisation</h3>
            <p className="text-coral font-medium text-sm tracking-wide mt-1">A calm, functional space. Ready when you are.</p>
            <p className="text-ink-light text-sm tracking-wide mt-1">Starting at $440</p>
          </div>
          <div className="px-6 sm:px-12 py-8 sm:py-9">
            <p className="text-ink-light leading-relaxed mb-7 max-w-2xl">
              Gifts pile up fast. Clothes come in every size. Gear arrives faster than you can open it. I transform your nursery into a beautiful, logical space where every item is sorted, stored, and within reach.
            </p>
            <div className="space-y-3 mb-9">
              <Bullet>A complete hands on setup of your nursery: dresser, closet, changing station, and storage</Bullet>
              <Bullet>Every item sorted by immediate need, upcoming use, and long term storage so nothing gets lost</Bullet>
              <Bullet>A custom organization system built around how you will actually use the space</Bullet>
              <Bullet>Vacuum seal bags, closet organizers, dresser dividers, and labels included</Bullet>
              <Bullet>A simple maintenance plan so the system stays intact</Bullet>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-9">
              {[[nurseryBefore1, nurseryAfter1], [nurseryBefore2, nurseryAfter2], [nurseryBefore3, nurseryAfter3]].map(([before, after], i) => (
                <div key={i} className="contents">
                  <div className="relative rounded-2xl overflow-hidden group">
                    <img src={before} alt="Nursery before" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-espresso/70 text-ivory text-[8px] px-2 py-0.5 sm:text-[10px] sm:px-3 sm:py-1 tracking-[0.2em] uppercase rounded-full">Before</span>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden group">
                    <img src={after} alt="Nursery after" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-coral text-ivory text-[8px] px-2 py-0.5 sm:text-[10px] sm:px-3 sm:py-1 tracking-[0.2em] uppercase rounded-full">After</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blush/60 rounded-2xl p-7 mb-9 relative">
              <div className="absolute top-5 right-6 text-coral/25 text-6xl font-serif leading-none" aria-hidden="true">&ldquo;</div>
              <blockquote className="relative">
                <p className="text-ink-light leading-relaxed italic mb-4">
                  "As a new mom, there are already so many things to think about, and having Mimi organize our nursery ended up being one of the most helpful decisions we made. I had piles of baby shower gifts and items sitting in the room, and between pregnancy and postpartum exhaustion, I couldn't muster the energy to tackle it myself. What felt overwhelming to me, Mimi completely transformed. She organized everything thoughtfully, packed away items I wouldn't need right away into vacuum-sealed bags, and created a space that was not only beautiful, but practical for everyday life. During those exhausting postpartum days and middle-of-the-night moments, I knew exactly where everything was. She thought of details and systems I would never have considered on my own, and it gave me such peace of mind. She even provided a maintenance plan afterward so I could actually keep everything organized long-term. If you're a tired new mom wondering if it's worth it — it absolutely is."
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald/15 flex items-center justify-center">
                    <span className="font-serif text-emerald text-lg">S</span>
                  </div>
                  <div>
                    <cite className="not-italic font-medium text-espresso">Simone</cite>
                    <p className="text-xs text-ink-light">Nursery Curation &amp; Organization</p>
                  </div>
                </footer>
              </blockquote>
            </div>
            <BookButton emerald />
          </div>
        </StackCard>

        {/* Gift Certificate */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          id="gift-certificate-info"
          className="bg-white rounded-[2.5rem] shadow-xl shadow-espresso/8 mt-4 p-3 sm:p-4"
        >
          {/* Double gold certificate frame */}
          <div className="rounded-[2rem] border border-gold/60 p-1.5 sm:p-2">
            <div className="rounded-[1.7rem] border border-gold/30 px-7 sm:px-14 py-12 sm:py-16 text-center relative overflow-hidden">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 text-gold text-xl" aria-hidden="true">&#10022;</div>

              <p className="text-gold text-xs uppercase tracking-[0.45em] mt-4 mb-5">A gift they will never forget</p>
              <h3 className="font-serif text-4xl sm:text-5xl text-espresso mb-6">Gift Certificate</h3>
              <p className="text-ink-light leading-relaxed mb-12 max-w-2xl mx-auto">
                Give the gift of expert support during one of life's most transformative experiences. A gift certificate allows friends and family to provide expectant parents with professional, customized care. Recipients choose from all services provided, based on availability.
              </p>

              <div className="grid sm:grid-cols-3 gap-10 sm:gap-8 mb-12 text-left sm:text-center">
                <div>
                  <p className="font-serif italic text-gold text-5xl leading-none mb-4">01</p>
                  <p className="font-serif text-espresso text-xl mb-2">Digital Gift Certificate</p>
                  <p className="text-ink-light text-sm leading-relaxed">A beautifully designed digital voucher with the giver's and recipient's names, delivered by email.</p>
                </div>
                <div>
                  <p className="font-serif italic text-gold text-5xl leading-none mb-4">02</p>
                  <p className="font-serif text-espresso text-xl mb-2">Hard Copy Gift Certificate</p>
                  <p className="text-ink-light text-sm leading-relaxed">A beautifully designed voucher printed on quality paper and presented in an equally beautiful envelope.</p>
                </div>
                <div>
                  <p className="font-serif italic text-gold text-5xl leading-none mb-4">03</p>
                  <p className="font-serif text-espresso text-xl mb-2">Gift Certificate Basket</p>
                  <p className="text-ink-light text-sm leading-relaxed">A beautifully designed hard copy voucher accompanied by flowers and edible treats. Every basket includes flowers or a plant, sweet and savoury treats, a stuffed animal, and pregnancy or newborn essentials. Contents vary based on what is in season and in stock.</p>
                </div>
              </div>

              <Link
                to="/gift-certificate"
                className="inline-block bg-coral hover:bg-coral-dark text-ivory px-10 py-4 rounded-full font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-coral/25 no-underline"
              >
                Request a Gift Certificate
              </Link>
              <p className="font-serif italic text-espresso text-lg mt-7">Perfect for baby showers, registry contributions, and push gifts.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
