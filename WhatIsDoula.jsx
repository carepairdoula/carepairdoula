import { useState } from 'react'
import { motion } from 'framer-motion'

const BOOKING_URL = 'https://calendar.app.google/9HjRBQhJGpE6YCzv5'
const FORM_ENDPOINT = 'https://formspree.io/f/movgbbpq'

const interests = [
  'Birth Doula',
  'Postpartum Doula',
  'Prenatal Education',
  'Nursery Curation & Organisation',
  'Workplace Education for Organizations',
  'Not sure yet',
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', interest: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'Website Enquiry' }),
      })
      if (response.ok) {
        setStatus('sent')
        setFormData({ name: '', email: '', phone: '', interest: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full bg-ivory border border-sand rounded-xl px-5 py-3.5 text-espresso placeholder-ink-light/50 focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200'

  return (
    <section id="contact" className="py-16 sm:py-28 bg-blush/50 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-coral/10 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl sm:text-7xl text-espresso mb-6">
            Ready to be <em className="text-coral font-medium">supported?</em>
          </h2>
          <p className="text-ink-light text-lg max-w-2xl mx-auto">
            Planning for birth, navigating postpartum, or anywhere in between, I am here for you. Two ways to begin, whichever feels right.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Book a call */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="bg-emerald rounded-[2.5rem] p-9 sm:p-12 flex flex-col justify-center text-center"
          >
            <p className="font-serif text-3xl text-ivory mb-4">Ready to talk?</p>
            <p className="text-ivory/80 leading-relaxed mb-9 max-w-sm mx-auto">
              Book a complimentary 30 minute discovery call at a time that suits you. No pressure, just a conversation.
            </p>
            <div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-ivory text-emerald hover:bg-gold hover:text-espresso px-6 py-3 text-sm sm:px-9 sm:py-4 sm:text-base rounded-full font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl no-underline group"
              >
                Schedule a Consultation
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <p className="text-ivory/60 text-sm italic mt-9">Spaces are limited and fill quickly.</p>
          </motion.div>

          {/* Enquiry form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-[2.5rem] p-9 sm:p-12 border border-sand"
          >
            {status === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <span className="font-serif text-coral text-5xl mb-6" aria-hidden="true">&#10022;</span>
                <p className="font-serif text-2xl text-espresso mb-3">Thank you</p>
                <p className="text-ink-light max-w-xs">Your note has been received. I will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-2">
                  <p className="font-serif text-3xl text-espresso">Prefer to write?</p>
                  <p className="text-ink-light text-sm mt-1">Send a private note and I will reply personally.</p>
                </div>
                <div>
                  <label htmlFor="enquiry-name" className="sr-only">Your name</label>
                  <input id="enquiry-name" type="text" name="name" required maxLength={100} value={formData.name} onChange={handleChange} placeholder="Your name" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="enquiry-email" className="sr-only">Your email</label>
                  <input id="enquiry-email" type="email" name="email" required maxLength={150} value={formData.email} onChange={handleChange} placeholder="Your email" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="enquiry-phone" className="sr-only">Your phone number</label>
                  <input id="enquiry-phone" type="tel" name="phone" required maxLength={30} value={formData.phone} onChange={handleChange} placeholder="Your phone number" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="enquiry-interest" className="sr-only">I am interested in</label>
                  <select
                    id="enquiry-interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className={`${inputClasses} ${formData.interest ? '' : 'text-ink-light/50'}`}
                  >
                    <option value="" disabled>I am interested in...</option>
                    {interests.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="enquiry-message" className="sr-only">Your message</label>
                  <textarea id="enquiry-message" name="message" rows={4} required maxLength={2000} value={formData.message} onChange={handleChange} placeholder="Tell me a little about what you are looking for" className={inputClasses} />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-coral hover:bg-coral-dark disabled:opacity-60 text-ivory py-4 rounded-full font-medium tracking-wide transition-all duration-300 border-none cursor-pointer hover:-translate-y-0.5 hover:shadow-xl hover:shadow-coral/30"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
                </button>
                {status === 'error' && (
                  <p className="text-coral-dark text-sm text-center">
                    Something went wrong. Please try again, or book a call instead.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
