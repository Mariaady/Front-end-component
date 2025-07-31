import React, { useState } from "react";
import MenuComponent from "../../components/MenuComponent/MenuComponent";
import { MdOutlineMarkEmailRead, MdPets } from "react-icons/md";
import { FaPhone, FaInstagram, FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const ContactPage = () => {
  const [contactForm, setContactForm] = useState();

  const handlerContactForm = (propName, propValue) => {
    setContactForm({
      ...contactForm,
      [propName]: propValue,
    });
  };

  return (
    <>
      <MenuComponent />

      <div
        style={{
          fontFamily: "Verdana",
          maxWidth: "50rem",
          margin: "1rem auto",
          padding: "2rem",
          backgroundColor: "#fff",
          borderRadius: "0.75rem",
          boxShadow: "0 0.25rem 0.75rem rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          ¿Tienes una duda o sugerencia?
        </h2>
        <h3 style={{ textAlign: "center", marginBottom: "rem" }}>
          {" "}
          Envíanos un mensaje
        </h3>
        <form
          onSubmit={handlerContactForm}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "0.375rem",
                border: "0.0625rem solid #ccc",
                marginTop: "0.25rem",
              }}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "0.375rem",
                border: "0.0625rem solid #ccc",
                marginTop: "0.25rem",
              }}
            />
          </div>
          <div>
            <label>Mensaje:</label>
            <input
              type="text"
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "0.375rem",
                border: "0.0625rem solid #ccc",
                marginTop: "0.25rem",
              }}
            />
          </div>
          <div>
            <button
              type="submit"
              style={{
                width: "20%",
                padding: "0.5rem 0.9375rem",
                marginTop: 15,
                backgroundColor: "rgba(122, 92, 63, 0.8)",
                color: "#fff",
                border: "none",
                borderRadius: "0.9375rem",
                cursor: "pointer",
                fontSize: "1rem",
                boxShadow: "0 0.25rem 0.625rem rgba(0,0,0,0.3)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Enviar
            </button>
          </div>
        </form>
        <div>
          <p>
            <MdOutlineMarkEmailRead /> contact@pawtrip.com
          </p>
          <p>
            <FaPhone /> 912 345 678
          </p>
          <p>
            <MdPets /> ¿Conoces un lugar pet-friendly?¡Queremos saberlo!
          </p>
        </div>
        <div>
          <p>Síguenos en nuestras redes sociales:</p>
          <ul style={{ listStyle: "none" }}>
            <li>
              <a
                href="https://www.instagram.com/pawtrip_es/"
                style={{ color: "#515151" }}
              >
                <FaInstagram style={{ color: "rgba(225, 48, 108, 1)" }} />{" "}
                @pawtrip_es
              </a>
            </li>
            <li>
              <a href="" style={{ color: "#515151" }}>
                <AiFillTikTok style={{ color: "#000" }} /> @pawtrip_es
              </a>
            </li>
            <li>
              {" "}
              <a href="" style={{ color: "#515151" }}>
                <FaFacebook style={{ color: "rgb(24, 119, 242)" }} />{" "}
                @pawtrip_es
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
