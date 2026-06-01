import React from 'react'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

export default function MenuModal({open,onClose,images}){
  if(!open) return null
  
  const backdropVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { delay: 0.1 } }
  }

  return (
    <motion.div className="modal" role="dialog" aria-modal="true" variants={backdropVariants} initial="hidden" animate="show" exit="hidden" onClick={onClose}>
      <motion.div style={{position:'absolute',top:20,right:28}} variants={contentVariants}>
        <button className="btn" onClick={onClose} style={{display:'flex',alignItems:'center',gap:6}}>
          <FaTimes /> Close
        </button>
      </motion.div>
      <motion.div className="grid" variants={contentVariants} onClick={e => e.stopPropagation()}>
        {images.map((im,idx)=> (
          <motion.img key={idx} src={im.url} alt="menu" style={{width:'100%',borderRadius:8}} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:idx*0.05}} />
        ))}
      </motion.div>
    </motion.div>
  )
}
