import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import servicesImage from '../assets/images/services-image.webp'

const BOOKING_URL = 'https://calendar.app.google/9HjRBQhJGpE6YCzv5'

export default function Services() {

  const services = [
    {
      type: 'Birth Doula',
      tagline: 'Your guide through labor and delivery',
      intro:
        'Labor is unpredictable, and having continuous support can make all the difference. As your birth doula, I provide emotional, physical, and informational support before, during, and after delivery.',
      includes: [
        'Two prenatal visits — We\'ll discuss your vision, create your birth plan and prepare you for what\'s ahead.',
        '24 hour on-call availability as your due date approaches. Day or night, I\'m a text/call away.',
        'Continuous labor support from the moment I arrive until 1 hour after the baby is born. Comfort measures, positioning, breathing techniques, and a calm presence through every contraction.',
        'One postpartum visit — We\'ll debrief your birth experience, discuss early feeding, and make sure you\'re adjusting well.',
      ],
      accent: 'coral',
    },
    {
      type: 'Postpartum Doula',
      tagline: 'The fourth trimester matters',
      intro:
        'The first weeks with a newborn is beautiful and exhausting. Sleepless nights, feeding challenges, creating a routine that works for everyone in the home — postpartum support helps you recover, adjust, and bond with your baby without burning out.',
      includes: [
        'In-home support visits',
        'Newborn care guidance — Feeding support (breast or bottle), diapering, bathing, soothing techniques, and sleep strategies.',
        'Physical recovery support — Light meal prep and household tasks so you can focus on healing.',
        'Emotional support — Processing the birth experience, adjusting to your new identity, and watching for signs of postpartum mood disorders.',
        'Sibling and family adjustment — Helping older kids adjust to the new baby, giving them attention while you rest.',
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

        {/* Image showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full border-2 border-coral/20" />
            <div className="absolute -inset-8 rounded-full border border-sage/10" />
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl shadow-charcoal/10">
              <img
                src={servicesImage}
                alt="Caring support for families"
                className="w-full h-full object-cover opacity-90 saturate-[0.85]"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div
                className={`h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
                  service.accent === 'coral'
                    ? 'hover:shadow-coral/10'
                    : 'hover:shadow-sage/10'
                }`}
              >
                {/* Header */}
                <div
                  className={`px-8 pt-8 pb-6 ${
                    service.accent === 'coral'
                      ? 'bg-gradient-to-br from-coral/10 to-coral-light/5'
                      : 'bg-gradient-to-br from-sage/10 to-sage-light/5'
                  }`}
                >
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal mb-2">
                    {service.type}
                  </h3>
                  <p
                    className={`font-medium ${
                      service.accent === 'coral' ? 'text-coral' : 'text-sage'
                    }`}
                  >
                    {service.tagline}
                  </p>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-charcoal-light leading-relaxed mb-6">
                    {service.intro}
                  </p>

                  <p className="text-charcoal font-medium mb-4">What's Included:</p>

                  <div className="space-y-3 mb-8">
                    {service.includes.map((item, i) => (
                      <p key={i} className="text-charcoal-light leading-relaxed pl-4 border-l-2 border-cream-dark">
                        {item}
                      </p>
                    ))}
                  </div>

                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-4 rounded-full font-medium transition-all duration-300 text-center no-underline ${
                      service.accent === 'coral'
                        ? 'bg-coral hover:bg-coral-dark text-white hover:shadow-lg hover:shadow-coral/25'
                        : 'bg-sage hover:bg-sage-dark text-white hover:shadow-lg hover:shadow-sage/25'
                    }`}
                  >
                    Book a free consultation
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gift Certificate Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="px-8 pt-8 pb-6 bg-gradient-to-br from-coral/5 to-sage/5">
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal mb-2">
                Gift Certificate
              </h3>
              <p className="font-medium text-charcoal-light">
                A thoughtful gift for new and growing families
              </p>
            </div>

            <div className="p-8">
              <p className="text-charcoal-light leading-relaxed mb-8">
                Celebrate new beginnings with a gift certificate for birth and postpartum support services. Perfect for friends and family who want to offer meaningful help during this transformative time. Gift certificates can be used towards any of our personalized care packages, ensuring the recipient receives exactly the support they need.
              </p>

              <Link
                to="/gift-certificate"
                className="inline-block w-full sm:w-auto px-8 py-4 rounded-full font-medium transition-all duration-300 bg-charcoal hover:bg-charcoal-light text-white hover:shadow-lg text-center no-underline"
              >
                Request a gift certificate
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
