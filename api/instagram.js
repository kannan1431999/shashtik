// Vercel serverless function: GET /api/instagram?limit=6
// Returns the latest videos (reels) from the connected Instagram professional account.
// The access token stays on the server. Set INSTAGRAM_ACCESS_TOKEN in Vercel project settings.

const FIELDS = [
  'id',
  'caption',
  'media_type',
  'media_product_type',
  'media_url',
  'thumbnail_url',
  'permalink',
  'timestamp',
].join(',')

export default async function handler(req, res) {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  const limit = Math.min(Number(req.query?.limit) || 6, 12)

  if (!token) {
    return res.status(503).json({ error: 'INSTAGRAM_ACCESS_TOKEN is not set', videos: [] })
  }

  try {
    const videos = []
    // Posts include photos and carousels too, so page through until we have enough videos.
    let url = `https://graph.instagram.com/me/media?fields=${FIELDS}&limit=25&access_token=${token}`

    for (let page = 0; page < 4 && url && videos.length < limit; page++) {
      const response = await fetch(url)
      const body = await response.json()
      if (!response.ok) {
        return res.status(502).json({ error: body?.error?.message ?? 'Instagram request failed', videos: [] })
      }
      for (const item of body.data ?? []) {
        if (item.media_type === 'VIDEO') videos.push(item)
      }
      url = body.paging?.next
    }

    const payload = videos.slice(0, limit).map((v) => ({
      id: v.id,
      caption: v.caption ?? '',
      videoUrl: v.media_url,
      thumbnailUrl: v.thumbnail_url,
      permalink: v.permalink,
      timestamp: v.timestamp,
    }))

    // Media URLs from Instagram expire, so cache for an hour and refresh in the background.
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
    return res.status(200).json({ videos: payload })
  } catch (err) {
    return res.status(500).json({ error: 'Could not load Instagram videos', videos: [] })
  }
}
