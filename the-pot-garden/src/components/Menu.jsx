import React, {useState} from 'react'
import { FaEgg, FaHamburger, FaPizzaSlice, FaCoffee, FaCocktail, FaWineGlassAlt } from 'react-icons/fa'
import MenuModal from './MenuModal'

const menuCards = [
  { icon: FaEgg, title: 'Breakfast', description: 'Morning favourites crafted with fresh garden ingredients.' },
  { icon: FaHamburger, title: 'Burgers & Sandwiches', description: 'Hand-pressed, elevated comfort with premium accompaniments.' },
  { icon: FaPizzaSlice, title: 'Pizza & Pasta', description: 'Wood-fired pizzas and silky pasta in a refined setting.' },
  { icon: FaCoffee, title: 'Coffee & Beverages', description: 'Artisan brews, signature lattes, and elegant non-alcoholic pours.' },
  { icon: FaCocktail, title: 'Mocktails & Fresh Juices', description: 'Seasonal refreshers made from fresh fruits and botanical blends.' },
  { icon: FaWineGlassAlt, title: 'Premium Bar', description: 'Curated spirits, fine labels, and timeless evening pairings.' }
]

export default function Menu({restaurantImages = [], menuImages = []}){
  const [open,setOpen] = useState(false)
  const displayImages = menuImages.length ? menuImages : restaurantImages.slice(0,6)

  return (
    <section className="container" id="menu" style={{paddingTop:18}}>
      <h2>Our Menu</h2>
      <p className="muted">Explore our curated selection of breakfast favourites, handcrafted beverages, gourmet dining and premium bar offerings.</p>
      <div className="menu-showcase">
        {menuCards.map(card => {
          const Icon = card.icon
          return (
            <div className="menu-card" key={card.title}>
              <div className="menu-card-icon"><Icon /></div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          )
        })}
      </div>
      <div className="menu-action">
        <button className="btn primary" onClick={() => setOpen(true)}>View Full Menu</button>
      </div>
      <MenuModal open={open} onClose={() => setOpen(false)} images={displayImages} />
    </section>
  )
}
