import React from 'react'
import { motion } from 'framer-motion'
import { FaLeaf, FaGlassWhiskey, FaCoffee, FaClock } from 'react-icons/fa'
import './Experience.css'

const sectionCards = (interiorImages, exteriorImages, diningImages) => {
  const interior = interiorImages[0]?.url
  const exterior = exteriorImages[0]?.url
  const dining = diningImages[0]?.url

  return [
    {title:'Garden Courtyard',text:'A serene outdoor courtyard shaded by heritage trees.',icon:FaLeaf,image:exterior},
    {title:'Premium Bar',text:'Curated spirits, signature cocktails and mocktails.',icon:FaGlassWhiskey,image:dining},
    {title:'Artisan Coffee',text:'Single-origin espresso and handcrafted brews.',icon:FaCoffee,image:interior},
    {title:'Open 24 Hours',text:'Round-the-clock service for every craving.',icon:FaClock,image:dining}
  ]
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Experience({interiorImages = [], exteriorImages = [], diningImages = []}){
  const cards = sectionCards(interiorImages, exteriorImages, diningImages)

  return (
    <section className="container" style={{paddingTop:18}}>
      <h2>Experience</h2>
      <motion.div className="cards" variants={containerVariants} initial="hidden" whileInView="show" viewport={{once:true}}>
        {cards.map(c => {
          const Icon = c.icon
          return (
            <motion.div className="card" key={c.title} variants={cardVariants} style={{backgroundImage: c.image ? `linear-gradient(180deg, rgba(16,26,20,0.9), rgba(16,26,20,0.55)), url(${c.image})` : undefined, backgroundSize:'cover', backgroundPosition:'center'}}>
              <div className="card-icon"><Icon /></div>
              <h3>{c.title}</h3>
              <p className="muted">{c.text}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
