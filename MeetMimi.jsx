const items = [
  'Birth Doula',
  'Postpartum Doula',
  'Prenatal Education',
  'Newborn Care',
  'Nursery Curation',
  'Workplace Education',
]

export default function Marquee() {
  return (
    <div className="bg-emerald-deep py-5 overflow-hidden" aria-hidden="true">
      <div
        className="flex w-max animate-marquee"
        style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', willChange: 'transform' }}
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0">
            {items.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center whitespace-nowrap px-8 font-medium uppercase tracking-[0.25em] text-[#FDF9F3] text-sm sm:text-base">
                {item}
                <span className="ml-16 text-gold text-base" aria-hidden="true">&#10022;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
