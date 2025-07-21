import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlaces } from "../../core/services/placesFetch";
import { loadPlacesActions } from "./ListPlacesAction";
import { useNavigate } from "react-router";
import { detailPlacesAction } from "../DetailPlacesComponent/DetailPlacesAction";

const ListPlacesComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const placesList = useSelector((state) => state.listPlacesReducer.places);
  const user = useSelector((state) => state.loginPageReducer.user)

  const loadPlaces = async () => {
    const aux = await getPlaces();
    dispatch(
      loadPlacesActions({
        places: aux.places,
      })
    );
  };

  const goToDetail = (id) => {
    console.log('Dispatching placeId:', id);
    dispatch(detailPlacesAction(id))
    navigate('/detail')
  }

  const goToHome = () => {
    navigate('/')
  }

  const goToMyProfile = () => {
    navigate('/myProfile')
  }
  useEffect(() => {
    loadPlaces();
  }, []);

  return (
    <div>
      {user && (
        <div>
          <h2>¡Hola, {user.name}!</h2>
          {user.pets && user.pets.lenght > 0 ? (
            <p>Aquí encontrarás lugares donde {user.pets[0].namePet} será bienvenid@</p>
          ) : (
            <p>Aquí encontrarás lugares donde tu mascota será bienvenida</p>
          )}
        </div>
      )}
      <h2>Lugares</h2>
      <div>
        <button onClick={goToMyProfile}>Mi perfil</button>
      </div>
      <hr/>
      {!placesList ? (
        <div>Loading places...</div>
      ) : (
        placesList.map((p, idx) => (
          <div key={idx} style={{display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'space-between'}}>
            <div>{p.name}</div>
            <div>{p.location}</div>
            <div>
              {console.log('Lugar id:', p.id)}
              <button onClick={() => goToDetail(p.id)}>Ver detalle</button>
            </div>
          </div>
        ))
      )}
      <div>
        <button onClick={goToHome}>Volver</button>
      </div>
    </div>
  );
};

export default ListPlacesComponent;
