import React from 'react'
import { motion } from 'framer-motion'

export default function Footer(){
  return (
    <footer className="footer">
      <motion.div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:18}} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5}} viewport={{once:true}}>
        <div>
          <div style={{fontFamily:'Cormorant Garamond',fontSize:18,color:'var(--accent)'}}>THE POT GARDEN</div>
          <div className="muted">Located inside Swaroop Vilas — Lake Facing Boutique Hotel</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div className="muted">5, Ambavgarh, Udaipur, Rajasthan 313004</div>
          <div className="muted">Phone: 09256725822 — Open 24 Hours</div>
        </div>
      </motion.div>
    </footer>
  )
}
