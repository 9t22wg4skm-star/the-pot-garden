import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

export default function About({interiorImages = [], diningImages = [], exteriorImages = []}){
  const interior = interiorImages[0]?.url
  const dining = diningImages[0]?.url
  const exterior = exteriorImages[0]?.url

  return (
    <section className="container" id="about">
      <motion.div className="split" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} viewport={{once:true}}>
        <div className="text">
          <h2>About The Pot Garden</h2>
          <p className="muted">A luxury botanical bistro offering premium garden dining with heritage Udaipur charm. Open 24 hours, nestled within Swaroop Vilas — a lake-facing boutique hotel.</p>
          <ul className="muted" style={{marginTop:12,textAlign:'left',paddingLeft:20}}>
            <li style={{marginBottom:8}}>Located inside Swaroop Vilas – Lake Facing Boutique Hotel</li>
            <li style={{marginBottom:8}}>Udaipur's only 24×7 Bistro</li>
            <li style={{marginBottom:8}}>Mediterranean, Italian, coffee and handcrafted beverages</li>
            <li>Garden courtyard atmosphere with heritage style</li>
          </ul>
        </div>
        <div className="image about-grid">
          {interior && <div className="about-image tall" style={{backgroundImage:`url(${interior})`}} />}
          <div className="about-stack">
            {dining && <div className="about-image" style={{backgroundImage:`url(${dining})`}} />}
            {exterior && <div className="about-image" style={{backgroundImage:`url(${exterior})`}} />}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
