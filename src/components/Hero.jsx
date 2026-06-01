import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero({heroImage}){
  const bg = heroImage || ''
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.5)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="hero-full">
      <motion.div className="hero-bg" style={{backgroundImage:`url(${bg})`, transform: `translateY(${offset}px)`}} />
      <div className="hero-overlay" />
      <motion.div className="container hero-content" variants={container} initial="hidden" animate="show">
        <motion.div className="hero-badge" variants={itemVariants}>
          OPEN 24 HOURS
        </motion.div>
        <motion.div className="eyebrow" variants={itemVariants}>
          Located inside Swaroop Vilas — Lake Facing Boutique Hotel
        </motion.div>
        <motion.h1 className="hero-title" variants={itemVariants}>
          THE POT<br/>GARDEN
        </motion.h1>
        <motion.div className="hero-divider" variants={itemVariants} />
        <motion.div className="hero-sub" variants={itemVariants}>
          24×7 BISTRO — A Garden Escape in the Heart of Udaipur
        </motion.div>
        <motion.div className="hero-cta" variants={itemVariants}>
          <a className="btn primary" href="#menu">View Menu</a>
          <a className="btn" href="#contact">Reserve Table</a>
        </motion.div>
      </motion.div>
    </section>
  )
}
