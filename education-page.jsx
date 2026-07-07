import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import ServicePage from './ServicePageLayout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ServicePage {...{
      eyebrow: 'Concierge care for growing families',
      title: 'Postpartum Doula',
      tagline: 'The fourth trimester matters',
      price: '$60 per hour | $55 for 100+ hours',
      intro: 'Caring for a newborn is beautiful, but sleepless nights, feeding challenges, and building a routine can be exhausting. My postpartum support helps you rest, process, and reflect, so you can bond with your baby while healing.',
      includedTitle: "What's included",
      bullets: [
        'In home day and overnight support',
        'Newborn care guidance. Feeding support (breast or bottle), diapering, bathing, soothing techniques, and sleep strategies.',
        'Physical recovery support. Light meal prep and household tasks so you can focus on healing.',
        'Emotional support. Processing the birth experience, adjusting to your new identity, and watching for signs of postpartum mood disorders.',
      ],
    }} />
  </StrictMode>,
)
