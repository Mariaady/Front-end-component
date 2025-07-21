import React from 'react'
import { Link } from 'react-router'

const HomePage = () => {
  return (
    <div>
      <img src="../../../public/PawTrip Logo.png" alt="" />
      <h1>PawTrip</h1>
      <h2>Donde tú vas, tu mascota también</h2>
      <p>Explora hoteles, playas, parques y más lugares pensados para vosotros</p>
      <div>
        <button> <Link to ={'/login'}>Únete a nostros</Link></button>
      </div>
    </div>
  )
}

export default HomePage