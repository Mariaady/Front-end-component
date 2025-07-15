import React from 'react'
import { Link } from 'react-router'

const MenuComponent = () => {
  return (
    <div>
        <Link to ={'/'}>Inicio</Link>
        <Link to ={'/list'}>Explorar lugares</Link>
        <Link to ={'/contact'}>Contacto</Link>
    </div>
  )
}

export default MenuComponent