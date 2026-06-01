import React, {useState} from 'react'
import { motion } from 'framer-motion'

export default function Gallery({images}){
  const [active, setActive] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  }

  const validImages = images.filter(img => img && img.url)

  return (
    <section className="container" id="gallery" style={{paddingTop:18}}>
      <h2>Gallery</h2>
      <p className="muted">Moments from The Pot Garden — curated for a premium botanical dining experience.</p>
      <motion.div className="masonry" style={{marginTop:14}} variants={containerVariants} initial="hidden" whileInView="show" viewport={{once:true}}>
        {validImages.map((i,idx)=> (
          <motion.img key={idx} src={i.url} alt={i.folder||'gallery'} loading="lazy" variants={itemVariants} onClick={() => setActive(idx)} whileHover={{scale:1.04}} />
        ))}
      </motion.div>
      {active !== null && validImages[active] && (
        <motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setActive(null)}>
          <button className="lightbox-close" onClick={() => setActive(null)}>Close</button>
          <img src={validImages[active].url} alt={validImages[active].folder} />
        </motion.div>
      )}
    </section>
  )
}
