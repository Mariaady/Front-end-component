import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { createPlace } from '../../core/services/placesFetch'

const CreatePlacesPage = () => {

    const navigate = useNavigate()
    const [createPlaceInfo, setCreatePlaceInfo] = useState({})
    const user = useSelector((state) => state.loginPageReducer.user)

    const createPlaceHandler = (propName, propValue) => {
        setCreatePlaceInfo({
            ...createPlaceInfo,
            [propName]: propValue
        })
    }

    const doCreate = async () => {
        const res = await createPlace(createPlaceInfo)
        navigate('/list')
    }

    const cancel = () => {
        navigate('/list')
    }

    if (!user || user.role !== 'admin') {
        return <p>No tienes permisos para crear lugares.</p>
    }
    
  return (
    <div>
        <h2>CREA UN NUEVO LUGAR:</h2>
        <div>
            <div>
                <span>Nombre del lugar:</span>
                <input type='text' onChange={(e) => createPlaceHandler('name', e.target.value)}/>
            </div>
             <div>
                <span>Ubicación:</span>
                <input type='text' onChange={(e) => createPlaceHandler('location', e.target.value)}/>
            </div>
             <div>
                <label>Categoría</label>
                <select onChange={(e) => createPlaceHandler('category', e.target.value)} defaultValue="">
                    <option value="" disabled>Selecciona una categoría</option>
                    <option value="parque">Parque</option>
                    <option value="playa">Playa</option>
                    <option value="hotel">Hotel</option>
                    <option value="restaurante">Restaurante</option>
                    <option value="area_descanso">Area de descanso</option>
                </select>
            </div>
             <div>
                <span>Descripción:</span>
                <input type='text' onChange={(e) => createPlaceHandler('description', e.target.value)}/>
            </div>
             <div>
                <span>Foto:</span>
                <input type='text' onChange={(e) => createPlaceHandler('photo', e.target.value)}/>
            </div>
        </div>
        <button onClick={doCreate}>Crear</button>
        <button onClick={cancel}>Cancelar</button>
    </div>
  )
}

export default CreatePlacesPage