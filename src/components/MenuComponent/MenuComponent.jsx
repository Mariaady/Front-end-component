import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

const MenuComponent = () => {

  const user = useSelector((state) => state.loginPageReducer.user)

  if(!user) return null
  
  return (
    <div>
      <img src="../../../public/PawTrip Logo.png" alt="" />
      <Link to ={'/'}>Inicio</Link>
      <Link to ={'/list'}>Explorar lugares</Link>
      <Link to ={'/contact'}>Contacto</Link>
    </div>
  )
}

export default MenuComponent