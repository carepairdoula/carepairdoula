import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import ServicePage from './ServicePageLayout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ServicePage {...{
      eyebrow: 'Concierge care for growing families',
      title: 'Birth Doula',
      tagline: 'Your guide through labour and delivery',
      price: 'Starting at $2,300',
      intro: 'Labour is unpredictable. Knowledgeable, continuous support makes all the difference. As your Birth Doula, I provide emotional, physical, and informational support before, during, and after delivery.',
      includedTitle: "What's included",
      bullets: [
        "One 3 hour prenatal visit to create your birth plan, postpartum plan and prepare you for what's ahead",
        '24 hour availability as your due date approaches. Day or night, I am only a text or call away.',
        'Continuous labour support from the moment I arrive until an hour after your baby is born. Comfort measures, positioning, breathing techniques, and a calm, reassuring presence.',
        'One postpartum visit to discuss your birth experience, early feeding, and any concerns, so you are fully supported while adjusting to this exciting change.',
      ],
    }} />
  </StrictMode>,
)
