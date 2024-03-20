import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useUser } from "../../hooks/useUser";
import { ModalContext } from "../../context/ModalContext";
import { services } from "../../mocks/services";


export const OfertasScreem = () => {
  const navigate = useNavigate();
  const handlecreate = () => {
    navigate("/createService");
  };
  const { user, isLogin, logout } = useUser();
  const [datos, setDatos] = useState([]);
  const [serch, setSearch] = useState("");
  const { onOpenCrearOfertas } = useContext(ModalContext);
  useEffect(() => {
    setDatos(services.filter((s) => user == null || user.id == s.advicer_id));
    const obtenerDatos = async () => {
      try {
        const response = await axios.get(
          "https://tu-servicio.onrender.com/advice"
        );
        setDatos(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    // Descomentar cuando se desee traer los datos del  backend
    // obtenerDatos();
  }, []);

  useEffect(() => {
    setDatos(services.filter((s) => user == null ||user.userType != 'advicer' ||  user.id == s.advicer_id));
  }, [user]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filterServ = datos.filter((serv) => serv.title.toLowerCase().includes(serch.toLowerCase()));

  const paraUser = () => {
    if (user.userType === "user")
      return (
        <>
          <button
            className="btn btn-primary d-flex"
            onClick={onOpenCrearOfertas}
          >
            +
          </button>
        </>
      );
  };

  return (
    <>
      <div className="container ">
        <div className="container pt-5 mt-5 bg-b     ">
          <div className="">
            <div className="container ">
              <h1 className="text-dark fw-bold display-5 ">
                {user?.userType == "user"
                  ? "Mis Ofertas"
                  : "Buscar Ofertas"}
              </h1>
            </div>
          </div>
        </div>

        <div className="d-flex container" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={serch}
            onChange={handleSearch}
          />

          {isLogin() ? (
            paraUser()
          ) : (
            <div/>
          )}
        </div>

        <div className="album pt-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
              {


              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};