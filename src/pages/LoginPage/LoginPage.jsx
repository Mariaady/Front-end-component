import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser, doLoginBack } from '../../core/services/userFetch'
import { doLoginActions } from './LoginPageActions'
import HomePage from '../HomePage/HomePage'
import { useNavigate, Navigate } from 'react-router'

export const LoginPage = () => {

  const [loginInfo, setLoginInfo] = useState({})
  const [isLogin, setIsLogin] = useState(true)
  const [registerInfo, setRegisterInfo] = useState({})

  const user = useSelector((state) => state.loginPageReducer.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlerLoginInfo = (propName, propValue) => {
        setLoginInfo({
            ...loginInfo,
            [propName]: propValue
        })
    }

  const handlerRegisterInfo = (propName, propValue) => {
        setRegisterInfo({
            ...registerInfo,
            [propName]: propValue
        })
    }

  const doLogin = async () => {
    const res = await doLoginBack(loginInfo)
    dispatch(
        doLoginActions(
            {
                user: res.user
            }
        )
    )
    navigate('/list')
  }

  const doRegister = async () => {
    const res = await createUser(registerInfo)
    dispatch(
       doLoginActions(
        {
            user: res
        }
       ) 
    )
    navigate('/list')
  }

  const goToHome = async() => {
    navigate('/')
  }
  return (
    <>
      {
        !user ? isLogin ? (
            <div>
                <h1>PawTrip</h1>
                <hr/>
                <h2>¿Ya estás registrado? </h2>
                <p>Inicia sesión para descubrir los mejores destinos pet-friendly y planear tu próxima aventura junto a tu compañero de cuatro patas.</p>
                <div>
                    <div>
                        <span>Username:</span>
                        <input type="text" onChange={(e) => handlerLoginInfo('username', e.target.value) }/>
                    </div>
                    <div>
                        <span>Password:</span>
                        <input type="text" onChange={(e) => handlerLoginInfo('password', e.target.value) }/>
                    </div>
                    <div>
                        <button onClick={doLogin}>Iniciar Sesión</button>
                    </div>
                    <div>
                        <button onClick={goToHome}>Volver</button>
                    </div>
                    <hr/>
                    <div>
                        <button onClick={() => setIsLogin(false)}>Quiero registrarme</button>
                    </div>
                </div>
            </div>
        ) : (
            <div>
                <h1>PawTrip</h1>
                <hr/>
                <h2> Datos del usuario: </h2>
                <div>
                     <div>
                        <span>Nombre: </span>
                        <input type="text" onChange={(e) => handlerRegisterInfo('name', e.target.value) }/>
                    </div>
                    <div>
                        <span>Usuario: </span>
                        <input type="text" onChange={(e) => handlerRegisterInfo('username', e.target.value) }/>
                    </div>
                    <div>
                        <span>Contraseña: </span>
                        <input type="text" onChange={(e) => handlerRegisterInfo('password', e.target.value) }/>
                    </div>
                    <div>
                        <span>Correo: </span>
                        <input type="text" onChange={(e) => handlerRegisterInfo('gmail', e.target.value) }/>
                    </div>
                    <h2>Datos de tu mascota:</h2>
                    <div>
                        <span>Nombre: </span>
                        <input type="text" onChange={(e) => handlerRegisterInfo('namePet', e.target.value) }/>
                    </div>
                    <div>
                        <label>Especie: </label>
                        <select onChange={(e) => handlerRegisterInfo('namePet', e.target.value)}>
                            <option value = ''> Selecciona una especie </option>
                            <option value = 'perro'> Perro </option>
                            <option value = 'gato'> Gato </option>
                        </select>
                    </div>
                    <div>
                        <span>Raza: </span>
                        <input type="text" onChange={(e) => handlerRegisterInfo('breed', e.target.value) }/>
                    </div>
                    <div>
                        <label>Tamaño: </label>
                        <select onChange={(e) => handlerRegisterInfo('size', e.target.value) }>
                            <option value = ''> Selecciona un tamaño</option>
                            <option value = 'grande'> Grande </option>
                            <option value = 'mediano'> Mediano </option>
                            <option value = 'pequeño'> Pequeño </option>
                        </select>
                    </div>
                    <div>
                        <span>Edad: </span>
                        <input type="text" onChange={(e) => handlerRegisterInfo('age', e.target.value) }/>
                    </div>
                    <div>
                        <button onClick={doRegister}>Registrarme</button>
                    </div>
                    <div>
                        <button onClick={goToHome}>Cancelar</button>
                    </div>
                </div>
            </div>
        ) : (
            <Navigate to='list'/>
        )
      }
    </>
  )
}

export default LoginPage