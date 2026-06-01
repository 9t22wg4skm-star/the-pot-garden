import React, {useEffect, useMemo, useState} from 'react'
import './styles/global.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Ambience from './components/Ambience'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { categorizeImages, getAllImages, pickHeroImage } from './utils/images'

function App(){
  const [images,setImages] = useState([])
  useEffect(()=>{
    try{
      const imgs = getAllImages()
      setImages(imgs)
    }catch(e){
      console.warn('image load failed',e)
    }
  },[])

  useEffect(()=>{
    if(images.length){
      console.log('Loaded src/assets images:', images.map(img => img.path))
    }
  },[images])

  const grouped = useMemo(() => categorizeImages(images), [images])
  const heroImage = pickHeroImage(images)
  const restaurantImages = useMemo(
    () => [...grouped.hero, ...grouped.dining, ...grouped.interior, ...grouped.exterior],
    [grouped]
  )
  const galleryImages = useMemo(() => {
    const pickImage = (group, matcher) => {
      if(group?.length) return group[0]
      return images.find(img => matcher.test(img.folder.toLowerCase()) || matcher.test(img.path.toLowerCase()))
    }

    return [
      pickImage(grouped.hero, /hero/),
      pickImage(grouped.interior, /interior/),
      pickImage(grouped.exterior, /exterior/),
      pickImage(grouped.dining, /dining/)
    ].filter(Boolean)
  }, [grouped, images])

  return (
    <div>
      <Navbar />
      <Hero heroImage={heroImage} />
      <About interiorImages={grouped.interior} diningImages={grouped.dining} exteriorImages={grouped.exterior} />
      <Experience interiorImages={grouped.interior} exteriorImages={grouped.exterior} />
      <Ambience interiorImages={grouped.interior} exteriorImages={grouped.exterior} diningImages={grouped.dining} />
      <Menu restaurantImages={restaurantImages} menuImages={grouped.menu} />
      <Gallery images={galleryImages} />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
