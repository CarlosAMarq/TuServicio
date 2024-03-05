import "./home.css";
import PageServices from "./PageServices";
import { IoMdOpen } from "react-icons/io";
import Wave from "./Wave";
import Logo from "../Logo";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export const HomeScreen = () => {
  const { onOpenRegister } = useContext(ModalContext);
  return (
    <>
      <section id="home" className="background-center bg-fixed ">
        <div className="blur"></div>
        <div className="container py-5  home-content">
          <Logo size={"1"} />
          <h1
            className="display-5 fw-bold text-center text-white home-title"
            style={{ fontSize: "3rem" }}
          >
            Agencia <span>Tu Servicio</span>
          </h1>
          <p className=" fs-4 text-center text-white">
            Si necesita ayuda para llevar adelante su negocio, aquí podrá
            contratar a un profesional con el objetivo de que este le asista en
            su empresa.
          </p>
          <div className="home-button-section">
            <button
              className="btn btn-primary home-btn"
              onClick={onOpenRegister}
            >
              Registrate{" "}
              <span>
                <IoMdOpen />
              </span>
            </button>
            <a
              type="button"
              className="btn btn-outline-primary home-btn"
              href="#page-service"
            >
              Explorar
            </a>
          </div>
        </div>
        <Wave />
      </section>
      <PageServices />
    </>
  );
};
