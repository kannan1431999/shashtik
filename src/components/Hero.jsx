import { course } from '../data/course'
import { styleBySlug } from '../data/styles'
import { rupees, whatsappLink } from '../lib/whatsapp'
import './Hero.css'

const main = styleBySlug['pattu-pavadai-type-1']
const side = styleBySlug['princess-cut-blouse']

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__text">
        <h1 className="hero__title">
          <span>Tailoring course</span>
          <span>
            <span className="hero__for">for </span>kids &amp; women
          </span>
        </h1>

        <svg className="hero__thread" viewBox="0 0 640 96" aria-hidden="true">
          <path
            className="hero__thread-line"
            pathLength="1"
            d="M2 70 C 90 72, 170 66, 236 56 C 290 48, 322 22, 306 9 C 292 -2, 266 12, 276 38 C 286 62, 332 76, 404 72 C 480 68, 560 56, 604 42"
          />
          <path
            className="hero__thread-heart"
            d="M624 52 l-1.8-1.6 C 615.8 44.8 612 41.5 612 37.4 612 34.1 614.6 31.5 617.9 31.5 c1.8 0 3.6.8 4.8 2.2 1.2-1.4 3-2.2 4.8-2.2 3.3 0 5.9 2.6 5.9 5.9 0 4.1-3.8 7.4-10.2 13.2Z"
          />
        </svg>

        <p className="hero__lede">
          {course.promise}. {course.days} days for {rupees(course.fee)}, with morning, afternoon and evening batches.
        </p>

        <div className="hero__actions">
          <a
            className="button button--thread"
            href={whatsappLink('Hi, I would like to book a seat in the tailoring course.')}
            target="_blank"
            rel="noreferrer"
          >
            Book a seat on WhatsApp
          </a>
          <a className="button button--quiet" href="#styles">
            See what you’ll stitch
          </a>
        </div>
      </div>

      <figure className="hero__photos">
        <div className="hero__photo hero__photo--main">
          <img src={main.src} alt={main.name} width="790" height="980" fetchPriority="high" />
        </div>
        <div className="hero__photo hero__photo--side">
          <img src={side.src} alt={side.name} width="900" height="950" />
        </div>
        <figcaption>{main.name} and {side.name.toLowerCase()}, two of the styles covered</figcaption>
      </figure>
    </section>
  )
}
