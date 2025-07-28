import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { removeBooking } from '../../core/services/userFetch'
import { loadInfoActions } from '../../pages/LoginPage/LoginPageActions'

const BookingComponent = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector((state) => state.loginPageReducer.user)
  const places = useSelector((state) => state.listPlacesReducer.places) || [];
  
  const matchPlaces = (placeId) => {
    const res = places.find(p => p.id == placeId)
    console.log('res',placeId);
    return res
  }

  const goToDetail = () => {
    navigate('/detail')
  }

  const removeBookingFn = async (placeId) => {
    const res = await removeBooking(user.id, placeId)
    dispatch(
      loadInfoActions({
      user: res.user
    }))
  }

  return (
    <div>
      <h2>Tus Reservas:</h2>
      {
        !user.cart ? (
          <div>Aún no has realizado ninguna reserva</div>
        ) : (
          user.cart.map((place, idx) => {
            const p = matchPlaces(place.placeId)
            if(!p) return
            return (
              <div key={idx} style={{display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'space-between'}}>
                <div>
                  <img src={p.photo} alt="" style={{width: 150, height: 150}} />
                </div>
                <div>{p.name}</div>
                <div>{p.location}</div>
                <div>{p.description}</div>
                <button onClick={() => removeBookingFn(p.id)}>Cancelar reserva</button>
              </div>
            )
          })
        )
      }
      <div>
        <button onClick={goToDetail}>Volver</button>
      </div>
    </div>
  )
}

export default BookingComponent