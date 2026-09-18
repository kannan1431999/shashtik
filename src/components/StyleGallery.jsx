import { useEffect, useMemo, useRef, useState } from 'react'
import { categories, styles } from '../data/styles'
import { whatsappLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './Stitch.jsx'
import './StyleGallery.css'

export default function StyleGallery({ category, onCategoryChange }) {
  const items = useMemo(() => styles.filter((s) => s.category === category), [category])
  const [openIndex, setOpenIndex] = useState(null)
  const tabRefs = useRef({})

  const onTabKey = (e, index) => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!dir) return
    e.preventDefault()
    const next = categories[(index + dir + categories.length) % categories.length]
    onCategoryChange(next.id)
    tabRefs.current[next.id]?.focus()
  }

  return (
    <section className="gallery section" id="styles" aria-labelledby="gallery-title">
      <div className="section__head">
        <h2 id="gallery-title">Styles you’ll learn to stitch</h2>
        <p>
          {styles.length} designs across kids wear, kurtas, kurtis, maxis, blouses and sleeves. Open any style to ask
          about it.
        </p>
      </div>

      <div className="gallery__tabs" role="tablist" aria-label="Garment type">
        {categories.map((c, i) => {
          const count = styles.filter((s) => s.category === c.id).length
          const selected = c.id === category
          return (
            <button
              key={c.id}
              ref={(el) => (tabRefs.current[c.id] = el)}
              role="tab"
              id={`tab-${c.id}`}
              aria-selected={selected}
              aria-controls="gallery-panel"
              tabIndex={selected ? 0 : -1}
              className="gallery__tab"
              onClick={() => onCategoryChange(c.id)}
              onKeyDown={(e) => onTabKey(e, i)}
            >
              {c.label} <span className="gallery__count">{count}</span>
            </button>
          )
        })}
      </div>

      <ul className={`gallery__grid gallery__grid--${category}`} id="gallery-panel" role="tabpanel" aria-labelledby={`tab-${category}`}>
        {items.map((s, i) => (
          <li key={s.slug} className="gallery__item">
            <button className="gallery__open" onClick={() => setOpenIndex(i)}>
              <img src={s.src} alt="" loading="lazy" />
              <span className="gallery__name">{s.name}</span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox items={items} index={openIndex} onChange={setOpenIndex} />
    </section>
  )
}

function Lightbox({ items, index, onChange }) {
  const ref = useRef(null)
  const isOpen = index !== null
  const item = isOpen ? items[index] : null

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  const step = (dir) => onChange((index + dir + items.length) % items.length)

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') step(1)
    if (e.key === 'ArrowLeft') step(-1)
  }

  return (
    <dialog
      ref={ref}
      className="lightbox"
      onClose={() => onChange(null)}
      onKeyDown={onKeyDown}
      onClick={(e) => e.target === ref.current && onChange(null)}
      aria-label={item ? item.name : 'Style'}
    >
      {item && (
        <div className="lightbox__body">
          <img className="lightbox__img" src={item.src} alt={item.name} />
          <div className="lightbox__info">
            <p className="lightbox__position">
              {index + 1} of {items.length}
            </p>
            <h3>{item.name}</h3>
            <a
              className="button button--thread"
              href={whatsappLink(`Hi, I'd like to know about the ${item.name}.`)}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon /> Ask about this style
            </a>
            <div className="lightbox__nav">
              <button className="button button--quiet" onClick={() => step(-1)}>
                Previous
              </button>
              <button className="button button--quiet" onClick={() => step(1)}>
                Next
              </button>
            </div>
            <button className="lightbox__close" onClick={() => onChange(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </dialog>
  )
}
