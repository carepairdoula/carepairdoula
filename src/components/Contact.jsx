import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    partnerName: '',
    email: '',
    phone: '',
    dueDate: '',
    support: [],
    birthLocation: '',
    questions: '',
    additionalInfo: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        support: checked
          ? [...prev.support, value]
          : prev.support.filter((item) => item !== value),
      }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Formspree submission
    try {
      const response = await fetch('https://formspree.io/f/movgbbpq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          support: formData.support.join(', '),
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: '',
          partnerName: '',
          email: '',
          phone: '',
          dueDate: '',
          support: [],
          birthLocation: '',
          questions: '',
          additionalInfo: '',
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const supportOptions = [
    { value: 'birth', label: 'Birth Doula' },
    { value: 'postpartum', label: 'Postpartum Doula' },
    { value: 'both', label: 'Both' },
    { value: 'gift', label: 'Gift Certificate' },
  ]

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-gradient-to-br from-coral/10 via-cream to-sage/5 relative overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-coral/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-sage/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4 leading-tight">
            Ready to be supported?
          </h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Whether you're still deciding, just found out you're pregnant, or due next month, I'd love to chat. A discovery call is free, no pressure, and just a simple starting point to see if we're a good fit.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Primary CTA - Book a Call */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-coral/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal mb-4">
                Book a Consult
              </h3>

              <p className="text-charcoal-light mb-8">
                Pick a time that works for you. We'll chat for about 30 minutes—no commitment, no pressure.
              </p>

              <a
                href="https://calendar.app.google/9HjRBQhJGpE6YCzv5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-coral hover:bg-coral-dark text-white py-4 px-8 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-coral/25 no-underline"
              >
                Schedule a discovery call
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Intake Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg"
          >
            <h3 className="font-serif text-2xl text-charcoal mb-2 text-center lg:text-left">
              Intake Form
            </h3>
            <p className="text-charcoal-light text-sm mb-6 text-center lg:text-left">
              Thank you for your interest! Please fill out this brief form to help us prepare for your consultation.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-sage"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="font-serif text-xl text-charcoal mb-2">
                  Form submitted!
                </h4>
                <p className="text-charcoal-light">
                  I'll be in touch soon to schedule your consultation.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Name <span className="text-coral">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder-charcoal-light/50 focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="partnerName"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Partner's Name <span className="text-charcoal-light font-normal">(if applicable)</span>
                    </label>
                    <input
                      type="text"
                      id="partnerName"
                      name="partnerName"
                      value={formData.partnerName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder-charcoal-light/50 focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 outline-none"
                      placeholder="Partner's name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Email Address <span className="text-coral">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder-charcoal-light/50 focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 outline-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder-charcoal-light/50 focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 outline-none"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="dueDate"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Due Date or Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dueDate"
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="birthLocation"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Location of Birth
                    </label>
                    <input
                      type="text"
                      id="birthLocation"
                      name="birthLocation"
                      value={formData.birthLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder-charcoal-light/50 focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 outline-none"
                      placeholder="Hospital, birth center, home..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Birth or Postpartum Support Needed
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {supportOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name="support"
                          value={option.value}
                          checked={formData.support.includes(option.value)}
                          onChange={handleChange}
                          className="w-4 h-4 rounded border-cream-dark text-coral focus:ring-coral/20"
                        />
                        <span className="text-charcoal-light text-sm">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="questions"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    Do you have specific questions or concerns you'd like to discuss?
                  </label>
                  <textarea
                    id="questions"
                    name="questions"
                    rows={3}
                    value={formData.questions}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder-charcoal-light/50 focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 outline-none resize-none"
                    placeholder="Any questions or concerns..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="additionalInfo"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    Anything else you'd like me to know?
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={2}
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder-charcoal-light/50 focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 outline-none resize-none"
                    placeholder="Additional information..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sage hover:bg-sage-dark text-white py-4 px-8 rounded-full font-medium transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border-none"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Intake Form'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
