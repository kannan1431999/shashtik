import { syllabus } from '../data/course'
import './Syllabus.css'

export default function Syllabus({ onShowCategory }) {
  const basics = syllabus.filter((t) => t.group === 'basics')
  const garments = syllabus.filter((t) => t.group === 'garments')

  return (
    <section className="syllabus section" id="course" aria-labelledby="syllabus-title">
      <div className="section__head">
        <h2 id="syllabus-title">What the course covers</h2>
        <p>
          You start with fabric, colour and measuring, then cut and stitch real garments. By the end you can draft and
          stitch a blouse with the sleeve of your choice.
        </p>
      </div>

      <div className="tape" role="list">
        <div className="tape__group tape__group--basics">
          <h3>Basics</h3>
        </div>
        <div className="tape__group tape__group--garments">
          <h3>Garments</h3>
        </div>

        {syllabus.map((topic, i) => (
          <div className={`tape__cell tape__cell--${topic.group}`} role="listitem" key={topic.id}>
            <span className="tape__mark" aria-hidden="true">
              {i + 1}
            </span>
            {topic.category ? (
              <button className="tape__topic tape__topic--link" onClick={() => onShowCategory(topic.category)}>
                {topic.title}
                <span className="visually-hidden">, see styles</span>
              </button>
            ) : (
              <span className="tape__topic">{topic.title}</span>
            )}
          </div>
        ))}
      </div>

      <p className="syllabus__note">
        {basics.length} basics, {garments.length} garment groups. Tap a garment to see the styles.
      </p>
    </section>
  )
}
