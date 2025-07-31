import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deletePlace, getPlaceDetail } from "../../core/services/placesFetch";
import { saveDetailPlaces } from "./DetailPlacesAction";
import { addBooking } from "../../core/services/userFetch";
import { loadInfoActions } from "../../pages/LoginPage/LoginPageActions";

const DetailPlacesComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { placeId, placeDetail } = useSelector(
    (state) => state.detailPlaceReducer
  );
  const user = useSelector((state) => state.loginPageReducer.user);

  const goToList = () => {
    navigate("/list");
  };

  useEffect(() => {
    if (!placeId) return;
    const loadPlaceDetail = async () => {
      const aux = await getPlaceDetail(placeId);
      dispatch(saveDetailPlaces(aux));
    };
    loadPlaceDetail();
  }, [placeId]);

  const addBookingFn = async (placeId) => {
    const res = await addBooking(user.id, placeId);
    dispatch(
      loadInfoActions({
        user: res.user,
      })
    );
    navigate("/booking");
  };

  const deletePlaceFn = async () => {
    await deletePlace(placeDetail._id);
    navigate("/list");
  };

  return (
    <div style={{ fontFamily: "Verdana" }}>
      <h2>Todo lo que necesitas saber</h2>
      {!placeDetail || !placeDetail._id ? (
        <div>Loading detail...</div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              padding: "2rem",
              border: "0.0625rem solid #ddd",
              borderRadius: "0.75rem",
              boxShadow: "0 0.25rem 0.625rem rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
              maxWidth: "62.5rem",
              margin: "2rem auto",
              alignItems: "flex-start",
            }}
          >
            <div style={{ flex: "1" }}>
              <div>
                <img
                  src={placeDetail.photo}
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "0.75rem",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <h2 style={{ marginBottom: 0 }}> {placeDetail.name}</h2>
              <p style={{ margin: 0, fontWeight: "bold" }}>
                {" "}
                {placeDetail.location}
              </p>
              <p style={{ margin: 0 }}> Categoría: {placeDetail.category}</p>
              <p> {placeDetail.description}</p>
              <div
                style={{ display: "flex", justifyContent: "center", gap: 20 }}
              >
                <button
                  onClick={() => addBookingFn(placeDetail._id)}
                  style={{
                    padding: "0.5rem 0.9375rem",
                    backgroundColor: "rgba(122, 92, 63, 0.8)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "0.9375rem",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.02)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  Reservar
                </button>
                {user?.role === "admin" && (
                  <button
                    onClick={deletePlaceFn}
                    style={{
                      padding: "0.5rem 0.9375rem",
                      backgroundColor: "rgba(212, 61, 61, 0.8)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "0.9375rem",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.02)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    Eliminar
                  </button>
                )}
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={goToList}
              style={{
                backgroundColor: "rgba(205, 155, 101, 0.7)",
                padding: "0.3125rem 1rem",
                borderRadius: "0.5rem",
                border: "none",
                color: "#fff",
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 0.25rem 0.625rem rgba(0,0,0,0.3)",
                transition: "transform 0.2s ease",
                marginTop: "1.25rem",
                fontFamily: "Verdana",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Volver
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPlacesComponent;
