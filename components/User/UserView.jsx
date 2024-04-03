import React, { useContext, useEffect, useRef, useState } from "react";
import "./userview.css";
import { getUserById } from "../../libs/getUser";
import { users } from "../../mocks/user";
import { ModalContext } from "../../context/ModalContext";
import Spinner from "../icon/Spinner";
import LoadingWarm from "../LoadingWarm";
export default function UserView() {
  const { userViewData: user, openMessageModal } = useContext(ModalContext);
  const desc = useRef();
  const wordAmount = 150;

  // useEffect(() => {
  //   const getUser = async () => {
  //     const dat = await getUserById(1);
  //     setUser(dat);
  //   };

  //   getUser();
  // }, []);

  useEffect(() => {
    if (!desc.current) return;
    const curr = desc.current;
    if (curr.innerHTML.length > wordAmount) {
      curr.innerHTML = curr.innerHTML.slice(0, wordAmount) + "...";
    }
  }, [user]);

  const opeMessage = () => {
    openMessageModal(user);
  };

  const capitalize = function (value) {
    if (!value) return;
    const letraMayuscula = value.charAt(0).toUpperCase();
    const palabraGenerada =
      value.slice(0, 0) + letraMayuscula + value.slice(0 + 1, value.length);
    return palabraGenerada;
  };
  return (
    <div className="userview">
      {!user ? (
        <div className="loading">
          <LoadingWarm color={"#0d6efd"} size={"75"} />
        </div>
      ) : (
        <>
          <h2>Cuenta de {user?.username}</h2>
          <div className="user-body">
            <div className="user-image">
              <img src="/TuServicio/perfil.svg" alt="" srcset="" />
              {/* <p style={{ fontSize: "1.6rem", textAlign: "center" }}>
            {user?.username}
          </p> */}
            </div>
            <div className="user-data p-4">
              <p
                style={{
                  fontSize: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  height: "72px",
                }}
              >
                {user?.username}
                <span style={{ fontSize: "1rem" }}>
                  {users && capitalize(user?.usertype)}
                </span>
              </p>
              <p ref={desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                veritatis! Maxime, fugiat, provident repellat architecto nisi
                possimus omnis, totam nemo incidunt deleniti beatae quam facilis
                voluptates exercitationem porro labore voluptate?
              </p>
              <button onClick={opeMessage}>Contactar</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
