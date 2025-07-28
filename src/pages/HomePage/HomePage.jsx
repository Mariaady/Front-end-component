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
        fontFamily: "'Segoe UI', sans-serif",
        color: "#2e2e2e",
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
           padding: "4rem 2rem",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <img
            src="/PawTrip Logo.png"
            alt="PawTrip Logo"
            style={{
                width: "100px",
              height: "auto",
            }}
          />
          <h1
            style={{
              fontSize: "3.75rem",
              color: "rgba(144, 110, 76, 0.8)",
              textShadow: "0 1px 4px rgba(0,0,0,0.2)",
              letterSpacing: "1px",
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
            fontWeight: 600,
          }}
        >
          Donde tú vas, tu mascota también
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            marginBottom: "1.5rem",
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
              backgroundColor: "rgba(122, 92, 63, 0.8)",
              padding: "0.8rem 2rem",
              borderRadius: "8px",
              border: "none",
              color: "#fff",
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
              transition: "transform 0.2s ease",
              display: "inline-block",
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
