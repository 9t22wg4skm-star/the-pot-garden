import React from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const reviews = [
  "A soothing corner located in peaceful streets of Udaipur.",
  "Good food brings people together, but this café goes a step further—it gives you moments to remember.",
  "The cafe has great interiors and so much art and culture displayed on its walls."
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Reviews(){
  return (
    <section className="container" style={{paddingTop:18}}>
      <h2>Reviews</h2>
      <motion.div className="rating-display" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5}} viewport={{once:true}}>
        <div style={{display:'flex',alignItems:'center',gap:6}}>
          <FaStar color="#C8A97E" /> <strong>4.2</strong>
        </div>
        <div className="muted">381 Google Reviews</div>
      </motion.div>
      <motion.div style={{marginTop:12}} variants={containerVariants} initial="hidden" whileInView="show" viewport={{once:true}}>
        {reviews.map((r,i)=> (
          <motion.div className="review-card" key={i} variants={itemVariants}>
            <blockquote style={{margin:0,fontStyle:'italic'}} className="muted">{r}</blockquote>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
