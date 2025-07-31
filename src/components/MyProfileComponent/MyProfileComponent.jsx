import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { modifyUser } from "../../core/services/userFetch";
import { loadInfoActions } from "../../pages/LoginPage/LoginPageActions";
import { useEffect } from "react";

const MyProfileComponent = () => {
  const user = useSelector((state) => state.loginPageReducer.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInit, setUseInit] = useState(null);
  const [userEdit, setUserEdit] = useState(undefined);
  const [isEdit, setIsEdit] = useState(undefined);
  const [petEdit, setPetEdit] = useState(undefined);

  const userHandler = (propName, propValue) => {
    setUserEdit({
      ...userEdit,
      [propName]: propValue,
    });
  };

  const petHandler = (index, propName, propValue) => {
    const updatedPet = [...petEdit];
    updatedPet[index] = {
      ...updatedPet[index],
      [propName]: propValue,
    };
    setPetEdit(updatedPet);
  };

  const save = async () => {
    const userEdited = await modifyUser({
      ...userEdit,
      pets: petEdit,
    });
    dispatch(
      loadInfoActions({
        user: userEdited,
      })
    );
    setUserEdit(userEdited);
    setIsEdit(false);
  };

  const gotoList = () => {
    navigate("/list");
  };

  useEffect(() => {
    if (user) {
      setUseInit(user);
    }
  }, [user]);

  if (!userInit) {
    return <div>Cargando perfil...</div>;
  }
  return (
    <div
      style={{
        fontFamily: "Verdana",
        maxWidth: "50rem",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "#fff",
        borderRadius: "0.75rem",
        boxShadow: "0 0.25rem 0.75rem rgba(0,0,0,0.1)",
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
          src={userInit.profilePhoto}
          alt="Foto de perfil"
          style={{
            width: "6.25rem",
            height: "6.25rem",
            borderRadius: "50%",
            objectFit: "cover",
            border: "0.125rem solid #ccc",
          }}
        />
        <div>
          <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            {isEdit ? (
              <input
                type="text"
                placeholder={userInit.name}
                value={userEdit?.name}
                onChange={(e) => userHandler("name", e.target.value)}
              />
            ) : (
              <span style={{ fontWeight: "bold", fontSize: 20 }}>
                {userInit.name}
              </span>
            )}
          </div>
          <div style={{ marginTop: "0.3rem", color: "#555" }}>
            {isEdit ? (
              <input
                type="text"
                placeholder={userInit.username}
                value={userEdit?.username}
                onChange={(e) => userHandler("usuario", e.target.value)}
              />
            ) : (
              <span>@{userInit.username} </span>
            )}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "0.3rem", fontSize: "0.95rem" }}>
        <span>Correo: </span>
        {isEdit ? (
          <input
            type="text"
            placeholder={userInit.gmail}
            value={userEdit?.gmail}
            onChange={(e) => userHandler("gmail", e.target.value)}
          />
        ) : (
          <span> {userInit.gmail} </span>
        )}
      </div>
      <div>
        {isEdit && (
          <div style={{ marginTop: "0.3rem" }}>
            <label>Contraseña: </label>
            <input
              type="text"
              placeholder={userInit.password}
              value={userEdit?.password}
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
              placeholder={userInit.profilePhoto}
              value={userEdit?.profilePhoto}
              onChange={(e) => userHandler("profilePhoto", e.target.value)}
            />
          </div>
        )}
        <hr />
        <div>
          <h3 style={{ marginBottom: "1rem" }}>Tus Mascotas</h3>
          {(isEdit ? petEdit : userInit.pets)?.map((pet, index) => (
            <div
              key={index}
              style={{
                width: "11.25rem",
                border: "0.0625rem solid #ddd",
                borderRadius: "0.625rem",
                padding: "1rem",
                backgroundColor: "#fafafa",
                boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,0.05)",
                textAlign: "center",
              }}
            >
              <img
                src={pet.photo}
                alt="Pet Photo"
                style={{
                  width: "100%",
                  height: "6.25rem",
                  borderRadius: "0.625rem",
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
                      value={pet.namePet}
                      onChange={(e) =>
                        petHandler(index, "namePet", e.target.value)
                      }
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
                        value={pet.species}
                        onChange={(e) =>
                          petHandler(index, "species", e.target.value)
                        }
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
                      <input
                        type="text"
                        placeholder={pet.breed}
                        value={pet.breed}
                        onChange={(e) =>
                          petHandler(index, "breed", e.target.value)
                        }
                      />
                    ) : (
                      pet.breed
                    )}
                  </span>
                </div>
                <div>
                  <span>
                    {isEdit ? (
                      <input
                        type="text"
                        placeholder={pet.size}
                        value={pet.size}
                        onChange={(e) =>
                          petHandler(index, "size", e.target.value)
                        }
                      />
                    ) : (
                      pet.size
                    )}
                  </span>
                </div>
                <div>
                  <span>
                    {isEdit ? (
                      <input
                        type="text"
                        placeholder={pet.age}
                        value={pet.age}
                        onChange={(e) =>
                          petHandler(index, "age", e.target.value)
                        }
                      />
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
            onClick={() => {
              setUserEdit(userInit);
              setIsEdit(true);
              setPetEdit(userInit.pets);
            }}
            style={{
              backgroundColor: "rgba(122, 92, 63, 0.8)",
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
            Modificar
          </button>
          <button
            onClick={gotoList}
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
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Guardar cambios
          </button>
          <button
            onClick={() => setIsEdit(false)}
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
