import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { IoMdHome, IoIosContact, IoMdCreate } from "react-icons/io";
import { FaSearchLocation, FaPhoneAlt, FaBookmark } from "react-icons/fa";

const MenuComponent = () => {
  const user = useSelector((state) => state.loginPageReducer.user);

  if (!user) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 50,
        backgroundColor: "#f8f9fa",
        borderRadius: 20,
        boxShadow: "0 0.25rem 0.625rem rgba(0, 0, 0, 0.1)",
        padding: "0.9375rem 1.875rem",
      }}
    >
      <Link
        to={"/"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "#030200",
          fontFamily: "Verdana",
        }}
      >
        {" "}
        <IoMdHome />
        Inicio
      </Link>
      <Link
        to={"/list"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "#030200",
          fontFamily: "Verdana",
        }}
      >
        <FaSearchLocation />
        Explorar lugares
      </Link>
      <Link
        to={"/booking"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "#030200",
          fontFamily: "Verdana",
        }}
      >
        <FaBookmark />
        Mis reservas
      </Link>
      <Link
        to={"/create"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "#030200",
          fontFamily: "Verdana",
        }}
      >
        <IoMdCreate />
        Añadir lugar
      </Link>
      <Link
        to={"/myProfile"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "#030200",
          fontFamily: "Verdana",
        }}
      >
        <IoIosContact />
        Perfil
      </Link>
      <Link
        to={"/contact"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "#030200",
          fontFamily: "Verdana",
        }}
      >
        {" "}
        <FaPhoneAlt />
        Contacto
      </Link>
    </div>
  );
};

export default MenuComponent;
