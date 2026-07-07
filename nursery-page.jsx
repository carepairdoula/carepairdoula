import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import ServicePage from './ServicePageLayout'

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
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ServicePage {...{
      eyebrow: 'Concierge care for growing families',
      title: 'Prenatal & Newborn Care Education',
      tagline: 'Birth and newborn care, taught in your home',
      price: 'Starting at $250',
      intro: 'I teach interactive private sessions that give you knowledge, confidence, and practical skills. Every question answered, at your own pace, in the comfort and privacy of your home.',
      sessions: educationSessions,
    }} />
  </StrictMode>,
)
