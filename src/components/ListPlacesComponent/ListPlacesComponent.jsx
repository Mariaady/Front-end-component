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
          <h2 style={{ fontFamily: "Verdana" }}>¡Hola, {user.name}!</h2>
          {user.pets && user.pets.length > 0 ? (
            <p style={{ fontFamily: "Verdana" }}>
              Aquí encontrarás lugares donde{" "}
              <strong>{user.pets[0].namePet}</strong> será bienvenid@
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.25rem",
            padding: "1.25rem",
          }}
        >
          {placesList.map((p, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#fff",
                borderRadius: "1rem",
                overflow: "hidden",
                boxShadow: "0 0.25rem 0.75rem rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s",
                cursor: "pointer",
              }}
              onClick={() => goToDetail(p._id)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {p.photo && (
                <img
                  src={p.photo}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "9.375rem",
                    objectFit: "cover",
                  }}
                />
              )}
              <div style={{ padding: "1rem" }}>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  {p.name}
                </h3>
                <p style={{ color: "#555", marginBottom: "1rem" }}>
                  <MdLocationOn />
                  {p.location}
                </p>
                <button
                  style={{
                    padding: "0.5rem 0.75rem",
                    backgroundColor: "rgba(122, 92, 63, 0.8)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "0.9375rem",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  Ver detalle
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div>
        <button
          onClick={goToHome}
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
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default ListPlacesComponent;
