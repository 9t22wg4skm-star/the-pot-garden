import React, {useState, useEffect} from 'react'
import './Navbar.css'
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scroll' : ''}`} role="banner">
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:0,width:'100%'}}>
        <div className="brand">THE POT GARDEN</div>
        <nav className={`nav-right ${mobile ? 'mobile-open' : ''}`}>
          <div className="nav-item"><FaPhoneAlt style={{marginRight:8}}/>092567 25822</div>
          <a className="btn" href="#menu">View Menu</a>
          <a className="btn primary" href="#contact">Reserve</a>
        </nav>
        <button className="mobile-toggle" onClick={() => setMobile(!mobile)}>
          {mobile ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}
