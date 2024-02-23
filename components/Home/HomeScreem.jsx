import { Link } from "react-router-dom";
import "./home.css";
import PageServices from "./PageServices";
import { IoMdOpen } from "react-icons/io";
import Wave from "./Wave";
import Logo from "../Logo";

export const HomeScreen = () => {
  return (
    <>
      <section id="home" className="background-center bg-fixed ">
        <div className="blur"></div>
        <div className="container py-5  home-content">
          <Logo size={'1'}/>
          <h1
            className="display-5 fw-bold text-center text-white home-title"
            style={{ fontSize: "4rem" }}
          >
            Agencia <span>Tu Servicio</span>
          </h1>
          <p className=" fs-4 text-center text-white">
            Si necesita ayuda para sacar a frente su negocio aqui podra
            contratar un profecional con el objetivo de que este lo ayude en su
            negocio
          </p>
          <div className="home-button-section">
            <Link className="btn btn-primary home-btn" to="/login">
              Get Started{" "}
              <span>
                <IoMdOpen />
              </span>
            </Link>
            <a type="button" class="btn btn-outline-primary home-btn" href="#page-service">
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
