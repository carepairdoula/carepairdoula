import { motion } from 'framer-motion'
import servicesImage from '../assets/images/services-image.webp'

export default function PhotoBreak() {
  return (
    <section className="bg-ivory px-6 sm:px-10 pb-16 sm:pb-28" aria-label="Newborn moment">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9 }}
        className="max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-xl"
      >
        <img src={servicesImage} alt="Newly born baby" className="w-full h-64 sm:h-96 object-cover" loading="lazy" />
      </motion.div>
    </section>
  )
}
