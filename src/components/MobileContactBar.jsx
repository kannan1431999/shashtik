import { site } from '../config/site'
import { whatsappLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './Stitch.jsx'
import './MobileContactBar.css'

export default function MobileContactBar() {
  return (
    <div className="contact-bar">
      <a
        className="button button--thread"
        href={whatsappLink('Hi, I would like to know about the tailoring course.')}
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon /> WhatsApp
      </a>
      {site.phone && (
        <a className="button button--quiet" href={`tel:${site.phone.replace(/\s/g, '')}`}>
          Call
        </a>
      )}
    </div>
  )
}
