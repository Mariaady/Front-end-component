import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

const MenuComponent = () => {

  const user = useSelector((state) => state.loginPageReducer.user)

  if(!user) return null
  
  return (
    <div style={{display: 'flex', justifyContent: 'center', gap: 50, backgroundColor: "#f8f9fa", borderRadius: 20, boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", padding: "15px 30px"}}>
      <Link to ={'/'} style={{ display: 'flex', alignItems: 'center', gap: '8px', color:'#030200', fontFamily: 'Verdana'}}>Inicio</Link>
      <Link to ={'/list'} style={{ display: 'flex', alignItems: 'center', gap: '8px', color:'#030200', fontFamily: 'Verdana'}}>Explorar lugares</Link>
      <Link to ={'/contact'} style={{ display: 'flex', alignItems: 'center', gap: '8px', color:'#030200', fontFamily: 'Verdana'}}>Contacto</Link>
    </div>
  )
}

export default MenuComponent