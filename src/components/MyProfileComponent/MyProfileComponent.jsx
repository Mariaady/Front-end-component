import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { modifyUser } from '../../core/services/userFetch'

const MyProfileComponent = () => {

  const user = useSelector((state) => state.loginPageReducer.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [userEdit, setUserEdit] = useState(undefined)
  const [isEdit, setIsEdit] = useState(undefined)

  const userHandler = (propName, propValue) => {
    setUserEdit({
      ...user,
      [propName]: propValue
    })
  }

  const save = () => {
    modifyUser(user)
    navigate('/list')
  }

  return (
    <div>
      <h2>Mi perfil</h2>
      {isEdit ? 'EDITA TU PERFIL' : 'TUS DATOS'}
      <hr/>
      <div>
        <strong>Nombre: </strong> {user.name} 
      </div>
      <div>
        <strong>Usuario: </strong> {user.username} 
      </div>
      <div>
        <strong>Correo: </strong> {user.gmail} 
      </div>
      <div>
        <strong>Foto de perfil: </strong> 
        <img src={user.profilePhoto} alt='Profile photo'/> 
      </div>

    </div>
  )
}

export default MyProfileComponent