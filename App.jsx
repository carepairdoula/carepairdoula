import { motion } from 'framer-motion'
import logo from '../assets/images/logo.svg'

const BOOKING_URL = 'https://calendar.app.google/9HjRBQhJGpE6YCzv5'

export default function ServicePage({ eyebrow, title, tagline, price, intro, includedTitle, bullets, sessions, quote, quoteAuthor, quoteTag }) {
  return (
    <div className="min-h-screen bg-ivory">
      <header className="bg-ivory/95 backdrop-blur-md border-b border-sand">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-24 flex items-center justify-between">
          <a href="/" aria-label="Carepair home" className="no-underline">
            <img src={logo} alt="Carepair. Customized Support For Birth and Beyond" className="h-20 w-auto brightness-0 opacity-90" />
          </a>
          <a
            href="/#contact"
            className="bg-coral hover:bg-coral-dark text-ivory px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 no-underline"
          >
            Contact the Doula
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-emerald text-xs sm:text-sm uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
            <span className="inline-block w-10 h-px bg-gold" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl text-espresso mb-4">{title}</h1>
          <p className="text-coral font-medium tracking-wide mb-1">{tagline}</p>
          <p className="text-ink-light text-sm tracking-wide mb-10">{price}</p>
          <p className="text-ink-light text-lg leading-relaxed mb-10 max-w-2xl">{intro}</p>
        </motion.div>

        {bullets && (
          <div className="bg-white rounded-[2rem] border border-sand p-8 sm:p-10 mb-10">
            <p className="text-espresso font-medium mb-5">{includedTitle}</p>
            <div className="space-y-3">
              {bullets.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0" aria-hidden="true" />
                  <p className="text-ink-light leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {sessions && (
          <div className="space-y-6 mb-10">
            {sessions.map((s, i) => (
              <div key={i} className="bg-white rounded-[2rem] border border-sand p-8 sm:p-10">
                <div className="flex items-center gap-4 flex-wrap mb-2">
                  <h2 className="font-serif text-2xl text-espresso">{s.title}</h2>
                  <span className="text-xs text-emerald bg-emerald/10 px-3 py-1 rounded-full font-medium tracking-wide">{s.duration}</span>
                </div>
                <p className="text-coral font-medium text-sm italic mb-4">{s.tagline}</p>
                <div className="space-y-1.5">
                  {s.topics.map((t, j) => (
                    <p key={j} className="text-ink-light text-sm leading-relaxed pl-4 border-l-2 border-gold/40">{t}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {quote && (
          <div className="bg-blush/60 rounded-[2rem] p-8 sm:p-10 mb-10">
            <blockquote>
              <p className="text-ink-light leading-relaxed italic mb-4">"{quote}"</p>
              <footer className="flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-gold" aria-hidden="true" />
                <cite className="not-italic font-medium text-espresso">{quoteAuthor}</cite>
                <span className="text-ink-light text-sm">&middot; {quoteTag}</span>
              </footer>
            </blockquote>
          </div>
        )}

        <div className="text-center bg-white rounded-[2.5rem] border border-sand p-10 sm:p-12">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-coral hover:bg-coral-dark text-ivory px-9 py-4 rounded-full font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-coral/30 no-underline"
          >
            Book a Complimentary Consultation
          </a>
        </div>
      </main>

      <footer className="bg-espresso text-ivory py-10 mt-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <a href="/" className="text-ivory/80 hover:text-coral-light text-sm tracking-wide no-underline">Return to carepaircanada.ca</a>
          <p className="text-ivory/50 text-sm mt-4">&copy; {new Date().getFullYear()} Carepair. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
