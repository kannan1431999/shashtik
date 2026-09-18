import logo from '../assets/logo.png'
import { site } from '../config/site'
import { whatsappLink } from '../lib/whatsapp'
import { Heart } from './Stitch.jsx'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img src={logo} alt="Shashtik Design House" width="200" height="196" loading="lazy" />
        </div>

        <div className="site-footer__col">
          <h2>Visit</h2>
          <address>
            {site.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          {site.mapUrl && (
            <a href={site.mapUrl} target="_blank" rel="noreferrer">
              Get directions
            </a>
          )}
        </div>

        <div className="site-footer__col">
          <h2>Talk to us</h2>
          <a href={whatsappLink()} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          {site.phone && <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>}
          {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
          <a href={site.instagram.url} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>

      <p className="site-footer__tagline">
        {site.tagline.map((word, i) => (
          <span key={word}>
            {i > 0 && <Heart size={12} />}
            {word}
          </span>
        ))}
      </p>
      <p className="site-footer__legal">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  )
}
