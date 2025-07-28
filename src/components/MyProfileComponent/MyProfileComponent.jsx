import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { modifyUser } from '../../core/services/userFetch'
import { loadInfoActions } from '../../pages/LoginPage/LoginPageActions'

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

  const save =  async () => {
    const userEdited = await modifyUser(userEdit)
    dispatch(
      loadInfoActions(
        {
          user: userEdited
        }
      ))
    setIsEdit(false)
  }

  const gotoList = () => {
    navigate('/list')
  }

  return (
    <div>
      <h2>Mi perfil</h2>
      {isEdit ? 'EDITA TU PERFIL' : 'DATOS'}
      <hr/>
      <div>
        <span>Nombre: </span>
        {isEdit ? (
          <input
          type="text"
          placeholder={user.name}
          onChange={(e) => userHandler("nombre", e.target.value)}
          />
        ) : (
          <span> {user.name} </span>
        )}
      </div>
      <div>
        <span>Usuario: </span>
        {isEdit ? (
          <input
          type="text"
          placeholder={user.username}
          onChange={(e) => userHandler("usuario", e.target.value)}
          />
        ) : (
          <span> {user.username} </span>
        )}
      </div>
      <div>
        <span>Gmail: </span>
        {isEdit ? (
          <input
          type="text"
          placeholder={user.gmail}
          onChange={(e) => userHandler("gmail", e.target.value)}
          />
        ) : (
          <span> {user.gmail} </span>
        )}
      </div>
      <div>
        {isEdit && (
          <div>
            <label>Contraseña: </label>
            <input
            type="text"
            placeholder= {user.password}
            onChange={(e) => userHandler("password", e.target.value)}
            />
          </div>
        )}
      </div>
      <div>
        <span>Nombre: </span>
        {isEdit ? (
          <input
          type="text"
          placeholder={user.name}
          onChange={(e) => userHandler("nombre", e.target.value)}
          />
        ) : (
          <span> {user.name} </span>
        )}
      </div>
      <div>
        <img src={user.profilePhoto} alt='Profile photo'/> 
      </div>
      {!isEdit && (
        <div>
          <button onClick={() => setIsEdit(true)}>Modificar</button>
          <button onClick={gotoList}>Volver</button>
      </div>
      )}
      {isEdit && (
        <div>
          <button onClick={save}>Guardar cambios</button>
          <button onClick={() => setIsEdit(false)}>Cancelar</button>
        </div>
      )}
    </div>
  )
}

export default MyProfileComponent