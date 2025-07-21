import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getPlaceDetail } from '../../core/services/placesFetch'
import { saveDetailPlaces } from './DetailPlacesAction'

const DetailPlacesComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { placeId, placeDetail } = useSelector((state) => state.detailPlaceReducer)


    const goToList = () => {
        navigate('/list')
    }
    useEffect(() => {
       if(!placeId) return
       
       const loadPlaceDetail = async () => {
         const aux = await getPlaceDetail(placeId)
         dispatch(saveDetailPlaces( aux.place))
       }
       loadPlaceDetail();
     }, [placeId]);

  return (
    <div>
        <h2>Detalle del lugar</h2>
        {!placeDetail ? (
            <div>Loading detail...</div>
        ) : (
            <>
            <div>
                <div>
                    <img src={placeDetail.photo} alt=''/>
                </div>
                <div>
                    <span> {placeDetail.name}</span>
                </div>
                <div>
                    <span> {placeDetail.location}</span>
                </div>
                <div>
                    <span> {placeDetail.category}</span>
                </div>
                <div>
                    <span> {placeDetail.description}</span>
                </div>

                <div>
                    <button onClick={goToList}>Volver</button>
                </div>
            </div>
            </>
        )}
    </div>
  )
}

export default DetailPlacesComponent