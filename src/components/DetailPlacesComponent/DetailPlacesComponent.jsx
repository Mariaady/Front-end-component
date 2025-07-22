import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getPlaceDetail } from "../../core/services/placesFetch";
import { saveDetailPlaces } from "./DetailPlacesAction";
import { addBooking } from "../../core/services/userFetch";
import { loadPlacesActions } from "../ListPlacesComponent/ListPlacesAction";

const DetailPlacesComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { placeId, placeDetail } = useSelector(
    (state) => state.detailPlaceReducer
  );
  const user = useSelector((state) => state.loginPageReducer.user);
  console.log("Usuario en DetailPlacesComponent:", user);

  const goToList = () => {
    navigate("/list");
  };
  useEffect(() => {
    if (!placeId) return;

    const loadPlaceDetail = async () => {
      const aux = await getPlaceDetail(placeId);
      dispatch(saveDetailPlaces(aux.place));
    };
    loadPlaceDetail();
  }, [placeId]);

  const addBookingFn = async (placeId) => {
    const res = await addBooking(user.id, placeId);
    dispatch(
      loadPlacesActions({
        user: res.user,
      })
    );
  };

  return (
    <div>
      <h2>Detalle del lugar</h2>
      {!placeDetail ? (
        <div>Loading detail...</div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <div>
              <div>
                <img src={placeDetail.photo} alt="" />
              </div>
            </div>
            <div>
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
            </div>
          </div>
          <div>
            <button onClick={() => addBookingFn(placeDetail.id)}>
              Reservar
            </button>
            <button onClick={goToList}>Volver</button>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPlacesComponent;
