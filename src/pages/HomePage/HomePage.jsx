import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        maxWidth: "100%",
        position: "relative",
        overflowX: "hidden",
        boxSizing: "border-box",
        margin: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/homepage_background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
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
            fontSize: "1.5rem",
            marginBottom: "1rem",
            textShadow: "0 2px 6px rgba(0,0,0,0.2)",
            fontFamily: "Verdana",
          }}
        >
          Donde tú vas, tu mascota también
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            marginBottom: "1.5rem",
            textShadow: "0 1px 4px rgba(0,0,0,0.4)",
            fontFamily: "Verdana",
          }}
        >
          ¿Te imaginas poder viajar, explorar o descansar sin preocuparte por
          dejar a tu compañero de cuatro patas atrás?
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            marginBottom: "2rem",
            textShadow: "0 1px 4px rgba(0,0,0,0.4)",
            fontFamily: "Verdana",
          }}
        >
          En <strong>PawTrip</strong> encontrarás lugares pensados para
          disfrutar con tu mascota: desde hoteles pet-friendly hasta playas,
          restaurantes, y parques adaptados.
        </p>
        <div>
          <button
            style={{
              backgroundColor: "rgba(255, 126, 95,0.8)",
              padding: "0.8rem 2rem",
              borderRadius: "8px",
              border: "none",
              color: "#fff",
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Link
              to={"/login"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Únete a nosotros
            </Link>
          </button>
        </div>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            marginBottom: "2rem",
            textShadow: "0 1px 4px rgba(0,0,0,0.4)",
            fontFamily: "Verdana",
          }}
        >
          ¡Explora, viaja y crea recuerdos inolvidables junto a tu mascota!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
