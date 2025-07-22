import React from 'react'
import { useSelector } from 'react-redux'

const BookingComponent = () => {

  const user = useSelector((state) => state.loginPageReducer.user)
  const places = useSelector((state) => state.listPlacesReducer.places);
  
  const matchPlaces = (placeId) => {
    const res = places.find(p => p.id == placeId)
    return res
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
                <div>{p.category}</div>
                <div>{p.description}</div>
              </div>
            )
          })
        )
      }
    </div>
  )
}

export default BookingComponent