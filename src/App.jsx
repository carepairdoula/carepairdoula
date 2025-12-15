import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import WhatIsDoula from './components/WhatIsDoula'
import Approach from './components/Approach'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GiftCertificate from './components/GiftCertificate'

function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <Hero />
        <WhatIsDoula />
        <Approach />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gift-certificate" element={<GiftCertificate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
