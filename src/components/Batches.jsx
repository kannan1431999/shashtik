import { useState } from 'react'
import { batches, course } from '../data/course'
import { rupees, whatsappLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './Stitch.jsx'
import './Batches.css'

const DAY_START = 10
const DAY_END = 20
const hours = [10, 12, 14, 16, 18, 20]
const hourLabel = (h) => (h === 12 ? '12 pm' : h > 12 ? `${h - 12} pm` : `${h} am`)
const pct = (h) => ((h - DAY_START) / (DAY_END - DAY_START)) * 100

export default function Batches() {
  const [selected, setSelected] = useState(batches[0].id)
  const batch = batches.find((b) => b.id === selected)

  return (
    <section className="batches section" id="batches" aria-labelledby="batches-title">
      <div className="section__head">
        <h2 id="batches-title">Batches &amp; fee</h2>
        <p>Four two-hour batches every day. Pick the one that fits your day.</p>
      </div>

      <div className="batches__layout">
        <fieldset className="daybar">
          <legend className="visually-hidden">Choose a batch</legend>
          <div className="daybar__track">
            {hours.map((h) => (
              <span className="daybar__hour" style={{ '--at': `${pct(h)}%` }} key={h} aria-hidden="true">
                {hourLabel(h)}
              </span>
            ))}
            {batches.map((b) => (
              <label
                key={b.id}
                className={`daybar__batch ${b.id === selected ? 'is-selected' : ''}`}
                style={{ '--from': `${pct(b.start)}%`, '--width': `${pct(b.end) - pct(b.start)}%` }}
              >
                <input
                  type="radio"
                  name="batch"
                  value={b.id}
                  checked={b.id === selected}
                  onChange={() => setSelected(b.id)}
                />
                <span className="daybar__name">Batch {b.id}</span>
                <span className="daybar__time">
                  <span aria-hidden="true" className="daybar__short">{b.short}</span>
                  <span className="daybar__long">{b.label}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="fee">
          <p className="fee__amount">
            {rupees(course.fee)}
            <span> for {course.days} days</span>
          </p>
          <p className="fee__more">
            Want to keep going? Continue for another {course.days} days for {rupees(course.continuationFee)}.
          </p>
          <a
            className="button button--thread fee__cta"
            href={whatsappLink(
              `Hi, I'd like to join Batch ${batch.id} (${batch.label}) of the tailoring course.`,
            )}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon /> Book batch {batch.id}, {batch.label}
          </a>
        </div>
      </div>
    </section>
  )
}
