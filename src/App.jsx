import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Syllabus from './components/Syllabus.jsx'
import StyleGallery from './components/StyleGallery.jsx'
import Batches from './components/Batches.jsx'
import Stitching from './components/Stitching.jsx'
import InstagramVideos from './components/InstagramVideos.jsx'
import Footer from './components/Footer.jsx'
import MobileContactBar from './components/MobileContactBar.jsx'

export default function App() {
  // Shared so the syllabus can open the matching tab in the gallery
  const [category, setCategory] = useState('kids')

  const showCategory = (id) => {
    setCategory(id)
    document.getElementById('styles')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Syllabus onShowCategory={showCategory} />
        <StyleGallery category={category} onCategoryChange={setCategory} />
        <Batches />
        <Stitching />
        <InstagramVideos />
      </main>
      <Footer />
      <MobileContactBar />
    </>
  )
}
