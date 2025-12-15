import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

export default function GiftCertificate() {
  const [formData, setFormData] = useState({
    purchaserName: '',
    purchaserEmail: '',
    purchaserPhone: '',
    recipientName: '',
    recipientEmail: '',
    recipientDueDate: '',
    serviceType: [],
    message: '',
    additionalInfo: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        serviceType: checked
          ? [...prev.serviceType, value]
          : prev.serviceType.filter((item) => item !== value),
      }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/movgbbpq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          serviceType: formData.serviceType.join(', '),
          formType: 'Gift Certificate Request',
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          purchaserName: '',
          purchaserEmail: '',
          purchaserPhone: '',
          recipientName: '',
          recipientEmail: '',
          recipientDueDate: '',
          serviceType: [],
          message: '',
          additionalInfo: '',
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const serviceOptions = [
    { value: 'birth', label: 'Birth Doula' },
    { value: 'postpartum', label: 'Postpartum Doula' },
    { value: 'both', label: 'Both' },
    { value: 'let-them-choose', label: 'Let recipient choose' },
  ]

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-cream/95 backdrop-blur-sm shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Carepair"
                className="h-14 sm:h-16 w-auto brightness-0 opacity-80"
              />
            </Link>
            <Link
              to="/"
              className="text-charcoal hover:text-coral transition-colors duration-200 font-sans text-sm tracking-wide"
            >
              ← Back to Home
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="py-12 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4 leading-tight">
              Gift Certificate Request
            </h1>
            <p className="text-lg text-charcoal-light">
              Give the gift of support. Fill out this form and we'll be in touch to arrange your gift certificate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg"
          >
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
                <h2 className="font-serif text-2xl text-charcoal mb-2">
                  Request Received!
                </h2>
                <p className="text-charcoal-light mb-6">
                  Thank you for your gift certificate request. I'll be in touch within 24-48 hours with details.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-coral hover:text-coral-dark transition-colors"
                >
                  ← Return to Home
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Purchaser Info */}
                <div>
                  <h3 className="font-serif text-xl text-charcoal mb-4">Your Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="purchaserName"
                        className="block text-sm font-medium text-charcoal mb-1.5"
                      >
                        Your Name <span className="text-coral">*</span>
                      </label>
                      <input
                        type="text"
                        id="purchaserName"
                        name="purchaserName"
                        required
                        value={formData.purchaserName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder-charcoal-light/50 focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 outline-none"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="purchaserEmail"
                          className="block text-sm font-medium text-charcoal mb-1.5"
                        >
                          Your Email <span className="text-coral">*</span>
                        </label>
                        <input
                          type="email"
                          id="purchaserEmail"
                          name="purchaserEmail"
                          required
                          value={formData.purchaserEmail}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder-charcoal-light/50 focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 outline-none"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="purchaserPhone"
                          className="block text-sm font-medium text-charcoal mb-1.5"
                        >
                          Your Phone
                        </label>
                        <input
                          type="tel"
                          id="purchaserPhone"
                          name="purchaserPhone"
                          value={formData.purchaserPhone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder-charcoal-light/50 focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 outline-none"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-cream-dark" />

                {/* Recipient Info */}
                <div>
                  <h3 className="font-serif text-xl text-charcoal mb-4">Recipient Information</h3>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="recipientName"
                          className="block text-sm font-medium text-charcoal mb-1.5"
                        >
                          Recipient's Name <span className="text-coral">*</span>
                        </label>
                        <input
                          type="text"
                          id="recipientName"
                          name="recipientName"
                          required
                          value={formData.recipientName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder-charcoal-light/50 focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 outline-none"
                          placeholder="Recipient's name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="recipientEmail"
                          className="block text-sm font-medium text-charcoal mb-1.5"
                        >
                          Recipient's Email
                        </label>
                        <input
                          type="email"
                          id="recipientEmail"
                          name="recipientEmail"
                          value={formData.recipientEmail}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder-charcoal-light/50 focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 outline-none"
                          placeholder="recipient@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="recipientDueDate"
                        className="block text-sm font-medium text-charcoal mb-1.5"
                      >
                        Recipient's Due Date <span className="text-charcoal-light font-normal">(if known)</span>
                      </label>
                      <input
                        type="date"
                        id="recipientDueDate"
                        name="recipientDueDate"
                        value={formData.recipientDueDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-cream-dark" />

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-3">
                    What type of support would you like to gift?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name="serviceType"
                          value={option.value}
                          checked={formData.serviceType.includes(option.value)}
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

                {/* Personal Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    Personal message to include with gift certificate
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder-charcoal-light/50 focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 outline-none resize-none"
                    placeholder="A personal message for the recipient..."
                  />
                </div>

                {/* Additional Info */}
                <div>
                  <label
                    htmlFor="additionalInfo"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    Anything else I should know?
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={2}
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder-charcoal-light/50 focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 outline-none resize-none"
                    placeholder="Any special requests or timing needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-coral hover:bg-coral-dark text-white py-4 px-8 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-coral/25 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border-none"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Gift Certificate Request'}
                </button>

                <p className="text-center text-charcoal-light text-sm">
                  I'll be in touch within 24-48 hours to finalize your gift.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  )
}
