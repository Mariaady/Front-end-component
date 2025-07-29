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
    const res = places.find(p => p._id == placeId)
    console.log('res',placeId);
    return res
  }

  const goToList = () => {
    navigate('/list')
  }

  const removeBookingFn = async (placeId) => {
    const res = await removeBooking(user.id, placeId)
    dispatch(
      loadInfoActions({
      user: res.user
    }))
  }

  return (
    <div style={{ fontFamily: "Verdana" }}>
      
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
                <button onClick={() => removeBookingFn(p._id)} style={{
                backgroundColor: "rgba(227, 98, 78, 0.7)",
                padding: "5px 16px",
                borderRadius: "8px",
                border: "none",
                color: "#fff",
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                transition: "transform 0.2s ease",
                marginTop: "20px",
                fontFamily: "Verdana",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")} >Cancelar reserva</button>
              </div>
            )
          })
        )
      }
      <div>
        <button onClick={goToList}
              style={{
                backgroundColor: "rgba(205, 155, 101, 0.7)",
                padding: "5px 16px",
                borderRadius: "8px",
                border: "none",
                color: "#fff",
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                transition: "transform 0.2s ease",
                marginTop: "20px",
                fontFamily: "Verdana",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}>Volver</button>
      </div>
    </div>
  )
}

export default BookingComponent