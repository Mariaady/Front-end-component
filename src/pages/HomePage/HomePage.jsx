import React from 'react'
import { LoginPage } from '../LoginPage/LoginPage'
import MenuComponent from '../../components/MenuComponent/MenuComponent'
import { Link } from 'react-router'

const HomePage = () => {
  return (
    <div>
      <MenuComponent/>
      <hr/> 
      <h1>Paw Trip</h1>
      <div>
        <button> <Link to ={'/login'}>Únete a nostros</Link></button>
      </div>
    </div>
  )
}

export default HomePage