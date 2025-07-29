import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlaces } from "../../core/services/placesFetch";
import { loadPlacesActions } from "./ListPlacesAction";
import { useNavigate } from "react-router";
import { detailPlacesAction } from "../DetailPlacesComponent/DetailPlacesAction";
import { MdLocationOn } from "react-icons/md";

const ListPlacesComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const placesList = useSelector((state) => state.listPlacesReducer.places);
  const user = useSelector((state) => state.loginPageReducer.user);

  const loadPlaces = async () => {
    const aux = await getPlaces();
    dispatch(
      loadPlacesActions({
        places: aux.places,
      })
    );
  };

  const goToDetail = (placeId) => {
    dispatch(detailPlacesAction(placeId));
    navigate("/detail");
  };

  const goToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    loadPlaces();
  }, []);

  return (
    <div>
      {user && (
        <div>
          <h2 style={{fontFamily: 'Verdana'}}>¡Hola, {user.name}!</h2>
          {user.pets && user.pets.length > 0 ? (
            <p style={{fontFamily: 'Verdana'}}>
              Aquí encontrarás lugares donde <strong>{user.pets[0].namePet}</strong> será
              bienvenid@
            </p>
          ) : (
            <p>Aquí encontrarás lugares donde tu mascota será bienvenida</p>
          )}
        </div>
      )}
      <hr />
      {!placesList ? (
  <div>Loading places...</div>
) : (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    padding: '20px'
  }}>
    {placesList.map((p, idx) => (
      <div
        key={idx}
        style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.2s',
          cursor: 'pointer'
        }}
        onClick={() => goToDetail(p._id)}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {p.photo && (
          <img
            src={p.photo}
            alt={p.name}
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover'
            }}
          />
        )}
        <div style={{ padding: '16px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{p.name}</h3>
          <p style={{ color: '#555', marginBottom: '16px' }}><MdLocationOn />{p.location}</p>
          <button style={{
            padding: '8px 12px',
            backgroundColor: "rgba(122, 92, 63, 0.8)",
            color: '#fff',
            border: 'none',
            borderRadius: '15px',
            cursor: 'pointer'
          }}
           onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}>
            Ver detalle
          </button>
        </div>
      </div>
    ))}
  </div>
)}
      <div>
        <button onClick={goToHome} style={{
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
  );
};

export default ListPlacesComponent;
