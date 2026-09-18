import { useState } from 'react'
import { site } from '../config/site'
import { useInstagramVideos } from '../hooks/useInstagramVideos'
import './InstagramVideos.css'

export default function InstagramVideos() {
  const { status, videos } = useInstagramVideos()
  const { handle, url, count } = site.instagram

  return (
    <section className="reels section" id="instagram" aria-labelledby="reels-title">
      <div className="section__head reels__head">
        <h2 id="reels-title">Latest videos from the studio</h2>
        <a className="reels__handle" href={url} target="_blank" rel="noreferrer">
          @{handle}
        </a>
      </div>

      {status === 'ready' ? (
        <ul className="reels__grid">
          {videos.map((v) => (
            <li key={v.id}>
              <Reel video={v} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="reels__grid" aria-busy={status === 'loading'}>
          {Array.from({ length: count }).map((_, i) => (
            <li key={i} className={`reels__placeholder ${status === 'loading' ? 'is-loading' : ''}`}>
              {status === 'unavailable' && i === 0 && (
                <a href={url} target="_blank" rel="noreferrer">
                  Watch our latest videos on Instagram
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

function Reel({ video }) {
  const [playing, setPlaying] = useState(false)
  const label = video.caption ? video.caption.split('\n')[0].slice(0, 90) : 'Instagram video'

  return (
    <article className="reel">
      {playing ? (
        <video className="reel__media" src={video.videoUrl} poster={video.thumbnailUrl} controls autoPlay playsInline />
      ) : (
        <button className="reel__play" onClick={() => setPlaying(true)}>
          <img className="reel__media" src={video.thumbnailUrl} alt="" loading="lazy" />
          <span className="reel__icon" aria-hidden="true" />
          <span className="visually-hidden">Play video: {label}</span>
        </button>
      )}
      <p className="reel__caption">{label}</p>
      <a className="reel__link" href={video.permalink} target="_blank" rel="noreferrer">
        Open on Instagram
      </a>
    </article>
  )
}
