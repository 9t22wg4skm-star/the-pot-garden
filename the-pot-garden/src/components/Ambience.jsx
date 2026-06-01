import React from 'react'
import { motion } from 'framer-motion'
import './Ambience.css'

export default function Ambience({interiorImages = [], exteriorImages = [], diningImages = []}){
  const interior = interiorImages[0]?.url
  const exterior = exteriorImages[0]?.url
  const dining = diningImages[0]?.url

  const items = [
    {title:'Interior Showcase', subtitle:'Warm heritage interiors set the stage for boutique dining.', image: interior},
    {title:'Exterior Terrace', subtitle:'A serene exterior retreat with a refined garden atmosphere.', image: exterior},
    {title:'Dining Ambience', subtitle:'Timeless botanical dining in every seat.', image: dining}
  ]

  return (
    <section className="container" id="ambience" style={{paddingTop:18}}>
      <h2>Ambience</h2>
      <p className="muted">Explore the luxurious interior, exterior and dining spaces curated for botanical comfort.</p>
      <div className="ambience-grid">
        {items.map(item => {
          const backgroundStyle = item.image
            ? {backgroundImage:`linear-gradient(180deg,rgba(16,26,20,0.32),rgba(16,26,20,0.62)),url("${item.image}")`}
            : {backgroundColor:'rgba(16,26,20,0.95)'}

          return (
            <motion.div className="ambience-card" key={item.title} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} style={backgroundStyle}>
              <div className="ambience-overlay" />
              <div className="ambience-copy">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
