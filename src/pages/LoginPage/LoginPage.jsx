import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, doLoginBack } from "../../core/services/userFetch";
import { doLoginActions } from "./LoginPageActions";
import { useNavigate, Navigate } from "react-router";

export const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({});
  const [isLogin, setIsLogin] = useState(true);
  const [registerInfo, setRegisterInfo] = useState({});

  const user = useSelector((state) => state.loginPageReducer.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerLoginInfo = (propName, propValue) => {
    setLoginInfo({
      ...loginInfo,
      [propName]: propValue,
    });
  };

  const handlerRegisterInfo = (propName, propValue) => {
    setRegisterInfo({
      ...registerInfo,
      [propName]: propValue,
    });
  };

  const doLogin = async () => {
    const res = await doLoginBack(loginInfo);
    dispatch(
      doLoginActions({
        user: res.user,
      })
    );
    navigate("/list");
  };

  const doRegister = async () => {
    const res = await createUser(registerInfo);
    dispatch(
      doLoginActions({
        user: res,
      })
    );
    navigate("/list");
  };

  const goToHome = async () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('/loginBackground.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.8,
            zIndex: 0,
          }}
        ></div>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "2rem",
          }}
        >
          <div>
            {!user ? (
              isLogin ? (
                <div>
                  <div
                    style={{
                      maxWidth: "600px",
                      width: "90%",
                      margin: "0 auto",
                      padding: "2rem",
                      paddingTop: "1rem",
                      textAlign: "center",
                      backgroundColor: "rgba(255,255,255,0.85)",
                      transform: "translateY(-40px)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      <img
                        src="/PawTrip Logo.png"
                        alt="PawTrip Logo"
                        style={{
                          top: "1rem",
                          left: "1rem",
                          width: "160px",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                      <h1
                        style={{
                          fontSize: "60px",
                          color: "rgba(144, 110, 76, 0.8)",
                          textShadow: "0 2px 8px rgba(92, 53, 26,0.4)",
                          fontFamily: "Tahoma",
                          marginBottom: "1rem",
                          fontWeight: 800,
                        }}
                      >
                        Paw
                        <strong
                          style={{
                            color: "rgba(92, 53, 26, 0.8)",
                            textShadow: "0 2px 8px rgba(144, 110, 76,0.6)",
                          }}
                        >
                          Trip
                        </strong>
                      </h1>
                    </div>
                    <h2
                      style={{
                        fontFamily: "Verdana",
                        fontWeight: 600,
                        fontSize: "25px",
                      }}
                    >
                      ¿Ya estás registrado?{" "}
                    </h2>
                    <p
                      style={{
                        fontFamily: "Verdana",
                        maxWidth: "600px",
                        width: "96%",
                        margin: "0 auto",
                        padding: "2rem",
                        textAlign: "center",
                        backgroundColor: "rgba(255,255,255,0.85)",
                        borderRadius: "12px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    >
                      Inicia sesión para descubrir los mejores destinos
                      pet-friendly y planear tu próxima aventura junto a tu
                      compañero de cuatro patas.
                    </p>
                    <div
                      style={{
                        width: "320px",
                        margin: "10px auto",
                        padding: "20px",
                        backgroundColor: "#fff",
                        borderRadius: "12px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div>
                        <span
                          style={{ fontWeight: "600", fontFamily: "Verdana" }}
                        >
                          Usuario:{" "}
                        </span>
                        <input
                          type="text"
                          onChange={(e) =>
                            handlerLoginInfo("username", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <span
                          style={{ fontWeight: "600", fontFamily: "Verdana" }}
                        >
                          Contraseña:{" "}
                        </span>
                        <input
                          type="text"
                          onChange={(e) =>
                            handlerLoginInfo("password", e.target.value)
                          }
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          gap: 30,
                        }}
                      >
                        <div>
                          <button
                            onClick={doLogin}
                            style={{
                              backgroundColor: "rgba(144, 110, 76, 0.8)",
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
                            onMouseOut={(e) =>
                              (e.currentTarget.style.transform = "scale(1)")
                            }
                          >
                            Iniciar Sesión
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={goToHome}
                            style={{
                              backgroundColor: "rgba(255, 126, 95,0.8)",
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
                            onMouseOut={(e) =>
                              (e.currentTarget.style.transform = "scale(1)")
                            }
                          >
                            Volver
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p
                      className="mt-10 text-center text-sm/6 text-gray-500"
                      style={{ fontFamily: "Verdana" }}
                    >
                      ¿Aún no tienes cuenta?{" "}
                      <button
                        onClick={() => setIsLogin(false)}
                        style={{
                          fontFamily: "Verdana",
                          backgroundColor: "rgba(205, 155, 101, 0.75)",
                          padding: "2px 10px",
                          borderRadius: "8px",
                          border: "none",
                          color: "#fff",
                          fontSize: "1rem",
                          cursor: "pointer",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                          transition: "transform 0.2s ease",
                          fontFamily: "Verdana",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.transform = "scale(1.05)")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      >
                        Registrate aquí
                      </button>
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <h1
                    style={{
                      fontSize: "60px",
                      color: "rgba(144, 110, 76, 0.8)",
                      textShadow: "0 2px 8px rgba(92, 53, 26,0.4)",
                      fontFamily: "Tahoma",
                      marginBottom: "1rem",
                      fontWeight: 800,
                    }}
                  >
                    Paw
                    <strong
                      style={{
                        color: "rgba(92, 53, 26, 0.8)",
                        textShadow: "0 2px 8px rgba(144, 110, 76,0.6)",
                      }}
                    >
                      Trip
                    </strong>
                  </h1>
                  <hr />
                  <div style={{ display: "flex" }}>
                    <div>
                      <h2 style={{ fontFamily: "Verdana" }}>
                        {" "}
                        Datos del usuario:{" "}
                      </h2>
                      <div style={{ fontFamily: "Verdana" }}>
                        <div>
                          <span>Nombre: </span>
                          <input
                            type="text"
                            onChange={(e) =>
                              handlerRegisterInfo("name", e.target.value)
                            } style={{borderRadius: '8px', borderColor: "rgba(92, 53, 26, 0.5)"}}
                          />
                        </div>
                        <div>
                          <span>Usuario: </span>
                          <input
                            type="text"
                            onChange={(e) =>
                              handlerRegisterInfo("username", e.target.value)
                            } style={{borderRadius: '8px', borderColor: "rgba(92, 53, 26, 0.5)"}}
                          />
                        </div>
                        <div>
                          <span>Contraseña: </span>
                          <input
                            type="text"
                            onChange={(e) =>
                              handlerRegisterInfo("password", e.target.value)
                            } style={{borderRadius: '8px', borderColor: "rgba(92, 53, 26, 0.5)"}}
                          />
                        </div>
                        <div>
                          <span>Correo: </span>
                          <input
                            type="text"
                            onChange={(e) =>
                              handlerRegisterInfo("gmail", e.target.value)
                            } style={{borderRadius: '8px', borderColor: "rgba(92, 53, 26, 0.5)"}}
                          />
                        </div>
                      </div>
                      <div></div>
                      <h2
                        style={{
                          fontFamily: "Verdana",
                          fontWeight: 600,
                          fontSize: "25px",
                        }}
                      >
                        Datos de tu mascota:
                      </h2>
                      <div style={{fontFamily: "Verdana" }} >
                        <span>Nombre: </span>
                        <input
                          type="text"
                          onChange={(e) =>
                            handlerRegisterInfo("namePet", e.target.value)
                          } style={{borderRadius: '8px', borderColor: "rgba(92, 53, 26, 0.5)"}}
                        />
                      </div>
                      <div  style={{fontFamily: "Verdana" }}>
                        <label>Especie: </label>
                        <select
                          onChange={(e) =>
                            handlerRegisterInfo("namePet", e.target.value)
                          } style={{borderRadius: '8px', borderColor: "rgba(92, 53, 26, 0.5)"}}
                        >
                          <option value=""> Selecciona una especie </option>
                          <option value="perro"> Perro </option>
                          <option value="gato"> Gato </option>
                        </select>
                      </div>
                      <div style={{fontFamily: "Verdana" }}>
                        <span>Raza: </span>
                        <input
                          type="text"
                          onChange={(e) =>
                            handlerRegisterInfo("breed", e.target.value)
                          } style={{borderRadius: '8px', borderColor: "rgba(92, 53, 26, 0.5)"}}
                        />
                      </div>
                      <div  style={{fontFamily: "Verdana" }}>
                        <label>Tamaño: </label>
                        <select
                          onChange={(e) =>
                            handlerRegisterInfo("size", e.target.value)
                          } style={{borderRadius: '8px', borderColor: "rgba(92, 53, 26, 0.5)"}}
                        >
                          <option value=""> Selecciona un tamaño</option>
                          <option value="grande"> Grande </option>
                          <option value="mediano"> Mediano </option>
                          <option value="pequeño"> Pequeño </option>
                        </select>
                      </div>
                      <div  style={{fontFamily: "Verdana" }}>
                        <span>Edad: </span>
                        <input
                          type="text"
                          onChange={(e) =>
                            handlerRegisterInfo("age", e.target.value)
                          } style={{borderRadius: '8px', borderColor: "rgba(92, 53, 26, 0.5)"}}
                        />
                      </div>
                    </div>
                  </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        gap: 30,
                        marginTop: 20
                      }}
                    >
                      <div>
                        <button onClick={doRegister}  style={{
                              backgroundColor: "rgba(144, 110, 76, 0.8)",
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
                            onMouseOut={(e) =>
                              (e.currentTarget.style.transform = "scale(1)")
                            }>Registrarme</button>
                      </div>
                      <div>
                        <button onClick={goToHome} style={{
                              backgroundColor: "rgba(205, 155, 101, 0.75)",
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
                            onMouseOut={(e) =>
                              (e.currentTarget.style.transform = "scale(1)")
                            }
                          >Cancelar</button>
                      </div>
                    </div>
                </div>
              )
            ) : (
              <Navigate to="/list" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
