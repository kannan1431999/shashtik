import { useEffect, useState } from 'react'
import { site } from '../config/site'

// status: 'loading' | 'ready' | 'unavailable'
export function useInstagramVideos() {
  const [state, setState] = useState({ status: 'loading', videos: [] })

  useEffect(() => {
    const controller = new AbortController()
    const { feedEndpoint, count } = site.instagram

    fetch(`${feedEndpoint}?limit=${count}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Feed responded ${res.status}`)
        return res.json()
      })
      .then((data) => {
        const videos = Array.isArray(data?.videos) ? data.videos.slice(0, count) : []
        setState({ status: videos.length ? 'ready' : 'unavailable', videos })
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setState({ status: 'unavailable', videos: [] })
      })

    return () => controller.abort()
  }, [])

  return state
}
