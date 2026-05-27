import { motion } from 'framer-motion'
import testimonialsImage from '../assets/images/testimonials-image.webp'

const BOOKING_URL = 'https://calendar.app.google/9HjRBQhJGpE6YCzv5'

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Mimi supported us as both our birth and postpartum doula. She helped me develop a clear birth plan, explaining options in detail and preparing me to advocate for myself throughout the process. She also coached my partner on how to be involved, which made us stronger as a team. During postpartum, her practical guidance around feeding and managing reflux made day-to-day care much more manageable. Knowledgeable and professional, I'd confidently recommend her to anyone seeking doula support.",
      author: 'Devika',
      tag: 'Birth and Postpartum Support',
    },
    {
      quote:
        "During my first pregnancy, I truly don't know what I would have done without Mimi by my side. While I had planned for a natural birth, life had other plans, and I ended up having a C-section. It wasn't easy, but having her emotional and physical support made all the difference. Mimi was there when I needed strength, calm when I felt overwhelmed, and a comforting presence during every high and low. Her care helped me heal and recover faster, and I'll never forget the love and support she showed me through it all.",
      author: 'Roda',
      tag: 'Birth Support',
    },
    {
      quote:
        "Mimi gave us so much peace of mind during a really exhausting time. Her calm energy, knowledge, and the way she cared for our baby made such a big difference for our whole family. She was so playful with the baby and has a sweet, gentle presence. We're so grateful for her support.",
      author: 'Anne',
      tag: 'Postpartum Support',
    },
    {
      quote:
        "Mimi originally came to us as a back-up doula for overnight care and we fell in love with her warmth and kind energy. She then became our night nurse, helping with our baby while he was between 3 and 7 months old. Mimi is very knowledgeable about baby sleep and she also took great care of me. As a first-time mom, I wasn't initially comfortable not having my baby beside me all night. Mimi gave me the reassurance I needed to get a good night's rest and trust that my baby's needs were being met with love and deep care.",
      author: 'Sarah',
      tag: 'Postpartum Support',
    },
    {
      quote:
        "As a new mom, there are already so many things to think about, and having Mimi organize our nursery ended up being one of the most helpful decisions we made. I had piles of baby shower gifts and items sitting in the room, and between pregnancy and postpartum exhaustion, I couldn't muster the energy to tackle it myself. What felt overwhelming to me, Mimi completely transformed. She organized everything thoughtfully, packed away items I wouldn't need right away into vacuum-sealed bags, and created a space that was not only beautiful, but practical for everyday life. During those exhausting postpartum days and middle-of-the-night moments, I knew exactly where everything was. She thought of details and systems I would never have considered on my own, and it gave me such peace of mind. She even provided a maintenance plan afterward so I could actually keep everything organized long-term. If you're a tired new mom wondering if it's worth it — it absolutely is.",
      author: 'Simone',
      tag: 'Nursery Curation and Organization',
    },
  ]

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-gradient-to-b from-cream to-cream-dark/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-coral/10 text-[200px] font-serif leading-none pointer-events-none select-none hidden lg:block">
        "
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
            Families I've Supported
          </h2>
        </motion.div>

        {/* Image and testimonials layout */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center lg:sticky lg:top-32"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl border-2 border-sage/20" />
              <div className="w-56 h-72 sm:w-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl shadow-charcoal/10">
                <img
                  src={testimonialsImage}
                  alt="Happy family moment"
                  className="w-full h-full object-cover opacity-90 saturate-[0.85]"
                />
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <div className="lg:col-span-2 space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                  <div className="absolute top-6 right-6 text-coral/20 text-5xl font-serif leading-none">"</div>
                  <blockquote className="relative">
                    <p className="text-charcoal-light leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <footer className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coral-light/30 to-sage-light/30 flex items-center justify-center">
                        <span className="font-serif text-charcoal text-lg">{testimonial.author[0]}</span>
                      </div>
                      <div>
                        <cite className="not-italic font-medium text-charcoal">{testimonial.author}</cite>
                        <p className="text-xs text-charcoal-light">{testimonial.tag}</p>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-coral hover:bg-coral-dark text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-coral/25 no-underline"
          >
            Book a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
