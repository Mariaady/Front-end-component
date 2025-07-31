import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { createPlace } from "../../core/services/placesFetch";

const CreatePlacesPage = () => {
  const navigate = useNavigate();
  const [createPlaceInfo, setCreatePlaceInfo] = useState({});
  const user = useSelector((state) => state.loginPageReducer.user);

  const createPlaceHandler = (propName, propValue) => {
    setCreatePlaceInfo({
      ...createPlaceInfo,
      [propName]: propValue,
    });
  };

  const validateCreateForm = () => {
    const { name, location, category, description, photo } = createPlaceInfo;
    if ((!name, !location, !category, !description, !photo)) {
      alert("Faltan campos por rellenar");
      return false;
    }
    return true;
  };
  const doCreate = async () => {
    if (!validateCreateForm()) return;
    const res = await createPlace(createPlaceInfo);
    navigate("/list");
  };

  const cancel = () => {
    navigate("/list");
  };

  if (!user || user.role !== "admin") {
    return <p>No tienes permisos para crear lugares.</p>;
  }

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Verdana" }}>
      <div
        style={{
          width: "50%",
          display: "flex",
          padding: "2.5rem",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <img
          src="/addPlacePage.jpg"
          alt="Add Place logo"
          style={{
            width: "100vh",
            height: "100%",
            objectFit: "cover",
            borderRadius: "0.5rem",
            opacity: 0.5,
            backgroundColor: "#fff",
            boxShadow: "0 0.25rem 0.75rem rgba(0,0,0,0.1)",
          }}
        />
      </div>
      <div
        style={{
          width: "50%",
          padding: "2.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#fff",
          borderRadius: "0.75rem",
          boxShadow: "0 0.25rem 0.75rem rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{ fontWeight: "bold", fontSize: "1.75rem", marginBottom: "1.25rem" }}
        >
          AÑADE UN NUEVO LUGAR:
        </h2>
        <div>
          <div>
            <span>Nombre del lugar:</span>
            <input
              type="text"
              onChange={(e) => createPlaceHandler("name", e.target.value)}
              style={{
                borderRadius: "0.5rem",
                borderColor: "rgba(92, 53, 26, 0.5)",
                marginLeft: 10,
              }}
            />
          </div>
          <div>
            <span>Ubicación:</span>
            <input
              type="text"
              onChange={(e) => createPlaceHandler("location", e.target.value)}
              style={{
                borderRadius: "0.5rem",
                borderColor: "rgba(92, 53, 26, 0.5)",
                marginLeft: 10,
              }}
            />
          </div>
          <div>
            <label>Categoría</label>
            <select
              onChange={(e) => createPlaceHandler("category", e.target.value)}
              defaultValue=""
              style={{
                borderRadius: "0.5rem",
                borderColor: "rgba(92, 53, 26, 0.5)",
                marginLeft: 10,
              }}
            >
              <option value="" disabled>
                Selecciona una categoría
              </option>
              <option value="parque">Parque</option>
              <option value="playa">Playa</option>
              <option value="hotel">Hotel</option>
              <option value="restaurante">Restaurante</option>
              <option value="area_descanso">Area de descanso</option>
            </select>
          </div>
          <div>
            <span>Descripción:</span>
            <input
              type="text"
              onChange={(e) =>
                createPlaceHandler("description", e.target.value)
              }
              style={{
                borderRadius: "0.5rem",
                borderColor: "rgba(92, 53, 26, 0.5)",
                marginLeft: 10,
              }}
            />
          </div>
          <div>
            <span>Foto:</span>
            <input
              type="text"
              onChange={(e) => createPlaceHandler("photo", e.target.value)}
              style={{
                borderRadius: "0.5rem",
                borderColor: "rgba(92, 53, 26, 0.5)",
                marginLeft: 10,
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 40,
            marginTop: 20,
          }}
        >
          <button
            onClick={doCreate}
            style={{
              backgroundColor: "rgba(205, 155, 101, 0.75)",
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
            Añadir
          </button>
          <button
            onClick={cancel}
            style={{
              backgroundColor: "rgba(227, 98, 78, 0.7)",
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
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePlacesPage;
