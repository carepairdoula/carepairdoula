import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Reality from './components/Reality'
import WhatIsDoula from './components/WhatIsDoula'
import Approach from './components/Approach'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <Hero />
        <Reality />
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

export default App
