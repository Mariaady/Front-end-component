import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { modifyUser } from "../../core/services/userFetch";
import { loadInfoActions } from "../../pages/LoginPage/LoginPageActions";

const MyProfileComponent = () => {
  const user = useSelector((state) => state.loginPageReducer.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userEdit, setUserEdit] = useState(undefined);
  const [isEdit, setIsEdit] = useState(undefined);

  const userHandler = (propName, propValue) => {
    setUserEdit({
      ...user,
      [propName]: propValue,
    });
  };

  const save = async () => {
    const userEdited = await modifyUser(userEdit);
    console.log(userEdited);
    dispatch(
      loadInfoActions({
        user: userEdited,
      })
    );
    setIsEdit(false);
    navigate("/list");
  };

  const gotoList = () => {
    navigate("/list");
  };

  return (
    <div
      style={{
        fontFamily: "Verdana",
        maxWidth: "800px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        {isEdit ? "EDITA TU PERFIL" : "MI PERFIL"}
      </h2>
      <hr />
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <img
          src={user.profilePhoto}
          alt="Foto de perfil"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #ccc",
          }}
        />
        <div>
          <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            {isEdit ? (
              <input
                type="text"
                placeholder={user.name}
                onChange={(e) => userHandler("name", e.target.value)}
              />
            ) : (
              <span style={{ fontWeight: "bold", fontSize: 20 }}>
                {user.name}
              </span>
            )}
          </div>
          <div style={{ marginTop: "0.3rem", color: "#555" }}>
            {isEdit ? (
              <input
                type="text"
                placeholder={user.username}
                onChange={(e) => userHandler("usuario", e.target.value)}
              />
            ) : (
              <span>@{user.username} </span>
            )}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "0.3rem", fontSize: "0.95rem" }}>
        <span>Correo: </span>
        {isEdit ? (
          <input
            type="text"
            placeholder={user.gmail}
            onChange={(e) => userHandler("gmail", e.target.value)}
          />
        ) : (
          <span> {user.gmail} </span>
        )}
      </div>
      <div>
        {isEdit && (
          <div style={{ marginTop: "0.3rem" }}>
            <label>Contraseña: </label>
            <input
              type="text"
              placeholder={user.password}
              onChange={(e) => userHandler("password", e.target.value)}
            />
          </div>
        )}
      </div>
      <div>
        {isEdit && (
          <div>
            <label>Foto de perfil: </label>
            <input
              type="text"
              placeholder={user.profilePhoto}
              onChange={(e) => userHandler("photo", e.target.value)}
            />
          </div>
        )}
        <hr />
        <div>
          <h3 style={{ marginBottom: "1rem" }}>Tus Mascotas</h3>
          {user.pets?.map((pet, index) => (
            <div
              key={index}
              style={{
                width: "180px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "1rem",
                backgroundColor: "#fafafa",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                textAlign: "center",
              }}
            >
              <img
                src={pet.photo}
                alt="Pet Photo"
                style={{
                  width: "100%",
                  height: "100px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.5rem",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  {isEdit ? (
                    <input
                      type="text"
                      placeholder={pet.namePet}
                      style={{ marginBottom: "0.3rem" }}
                    />
                  ) : (
                    <span style={{ fontWeight: "bold", fontSize: 18 }}>
                      {pet.namePet}
                    </span>
                  )}
                </div>
                <div>
                  <span>
                    {isEdit ? (
                      <input
                        type="text"
                        placeholder={pet.species}
                        style={{ marginBottom: "0.3rem" }}
                      />
                    ) : (
                      pet.species
                    )}
                  </span>
                </div>
                <div>
                  <span>
                    {isEdit ? (
                      <input type="text" placeholder={pet.breed} />
                    ) : (
                      pet.breed
                    )}
                  </span>
                </div>
                <div>
                  <span>
                    {isEdit ? (
                      <input type="text" placeholder={pet.size} />
                    ) : (
                      pet.size
                    )}
                  </span>
                </div>
                <div>
                  <span>
                    {isEdit ? (
                      <input type="text" placeholder={pet.age} />
                    ) : (
                      pet.age
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {!isEdit && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 40,
            marginTop: 20,
          }}
        >
          <button
            onClick={() => setIsEdit(true)}
            style={{
              backgroundColor: "rgba(122, 92, 63, 0.8)",
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
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Modificar
          </button>
          <button
            onClick={gotoList}
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
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Volver
          </button>
        </div>
      )}
      {isEdit && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 40,
            marginTop: 20,
          }}
        >
          <button
            onClick={save}
            style={{
              padding: "8px 15px",
              backgroundColor: "rgba(122, 92, 63, 0.8)",
              color: "#fff",
              border: "none",
              borderRadius: "15px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Guardar cambios
          </button>
          <button
            onClick={() => setIsEdit(false)}
            style={{
              padding: "8px 15px",
              backgroundColor: "rgba(212, 61, 61, 0.8)",
              color: "#fff",
              border: "none",
              borderRadius: "15px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
};

export default MyProfileComponent;
