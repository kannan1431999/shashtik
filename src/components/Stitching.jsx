import { styleBySlug } from '../data/styles'
import { whatsappLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './Stitch.jsx'
import './Stitching.css'

const steps = [
  { title: 'Share the design', text: 'Send a photo of the style you want, or pick one from the styles above.' },
  { title: 'Get measured', text: 'Bring your fabric and we take your measurements, or send a garment that fits you well.' },
  { title: 'Collect your outfit', text: 'Pick it up on the date we agree, ready to wear.' },
]

const photos = ['saree-to-pleated-frock', 'patch-work-blouse', 'three-tier-frock'].map((s) => styleBySlug[s])

export default function Stitching() {
  return (
    <section className="stitching section" id="stitching" aria-labelledby="stitching-title">
      <div className="stitching__text">
        <h2 id="stitching-title">Dress stitching to order</h2>
        <p className="stitching__lede">
          Not here to learn? We stitch blouses, kurtas, kurtis, maxis, kids’ frocks and pattu pavadai for you, and turn
          old sarees into new dresses.
        </p>

        <ol className="steps">
          {steps.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <a
          className="button button--thread"
          href={whatsappLink('Hi, I would like to get a dress stitched.')}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon /> Send your design on WhatsApp
        </a>
      </div>

      <div className="stitching__photos">
        {photos.map((p) => (
          <figure key={p.slug}>
            <img src={p.src} alt={p.name} loading="lazy" />
            <figcaption>{p.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
