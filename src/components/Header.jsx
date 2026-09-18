import { useEffect, useState } from 'react'
import logoMark from '../assets/logo-mark.png'
import { whatsappLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './Stitch.jsx'
import './Header.css'

const links = [
  { href: '#course', label: 'Course' },
  { href: '#styles', label: 'Styles' },
  { href: '#batches', label: 'Batches & fee' },
  { href: '#stitching', label: 'Dress stitching' },
  { href: '#instagram', label: 'Videos' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top" aria-label="Shashtik Design House, home">
          <img className="brand__mark" src={logoMark} alt="" width="120" height="68" />
          <span className="brand__name">
            Shashtik
            <small>Design House</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav id="site-nav" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Main">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="button button--thread site-nav__cta"
            href={whatsappLink('Hi, I would like to know about the tailoring course.')}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon /> Enquire on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
