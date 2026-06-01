import React from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import './Contact.css'

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Contact(){
  const address = encodeURIComponent('5, Ambavgarh, Udaipur, Rajasthan 313004')
  const mapSrc = `https://www.google.com/maps?q=${address}&output=embed`
  const phone = "09256725822"
  const whatsappUrl = `https://wa.me/919256725822?text=Hello%20The%20Pot%20Garden`

  return (
    <section className="container" id="contact" style={{paddingTop:18}}>
      <h2>Contact</h2>
      <motion.div style={{display:'flex',gap:18,flexDirection:'column'}} variants={containerVariants} initial="hidden" whileInView="show" viewport={{once:true}}>
        <motion.div className="contact-item" variants={itemVariants}>
          <FaMapMarkerAlt style={{marginRight:8,color:'var(--accent)',fontSize:20}} />
          <div>
            <div className="contact-label">Address</div>
            <div className="muted">5, Ambavgarh, Udaipur, Rajasthan 313004</div>
          </div>
        </motion.div>
        <motion.div className="contact-item" variants={itemVariants}>
          <FaClock style={{marginRight:8,color:'var(--accent)',fontSize:20}} />
          <div>
            <div className="contact-label">Hours</div>
            <div className="muted">Open 24 Hours</div>
          </div>
        </motion.div>
        <motion.div className="contact-buttons" variants={itemVariants} style={{display:'flex',gap:12}}>
          <a href={`tel:${phone}`} className="btn primary" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8}}>
            <FaPhone /> Call Now
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8}}>
            <FaWhatsapp /> WhatsApp
          </a>
        </motion.div>
        <motion.div style={{marginTop:12,borderRadius:12,overflow:'hidden'}} variants={itemVariants}>
          <iframe title="map" src={mapSrc} style={{width:'100%',height:320,border:0}} />
        </motion.div>
      </motion.div>
    </section>
  )
}
