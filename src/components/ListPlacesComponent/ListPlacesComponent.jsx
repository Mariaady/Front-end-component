import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlaces } from "../../core/services/placesFetch";
import { loadPlacesActions } from "./ListPlacesAction";

const ListPlacesComponent = () => {
  const dispatch = useDispatch();

  const placesList = useSelector((state) => state.listPlacesReducer.places);

  const loadPlaces = async () => {
    const aux = await getPlaces();
    dispatch(
      loadPlacesActions({
        places: aux.places,
      })
    );
  };

  useEffect(() => {
    loadPlaces();
  }, []);

  return (
    <div>
      <h2>Lugares</h2>
      <hr/>
      {!placesList ? (
        <div>Loading places...</div>
      ) : (
        placesList.map((p, idx) => (
          <div key={idx} style={{display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'space-between'}}>
            <div>{p.name}</div>
            <div>{p.location}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default ListPlacesComponent;
