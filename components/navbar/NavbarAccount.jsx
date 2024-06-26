import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { ModalContext } from "../../context/ModalContext";
import "./navbar.css";
import Spinner from "../icon/Spinner";
import MessageIcon from "../icon/MessageIcon";
import { GlobalContext } from "../../context/GlobalContext";
export default function NavbarAccount() {
  const { user, isLogin, logout, isUserLoading } = useUser();
  const { onOpenLogin, openMessageModal } = useContext(ModalContext);
  const { messages } = useContext(GlobalContext);
  // const messages = [
  //   {
  //     toUser: {
  //       username: "pepe",
  //     },
  //     about: "Hola",
  //     description: "Bla bla bla",
  //   },
  //   {
  //     toUser: {
  //       username: "pepe",
  //     },
  //     about: "Hola",
  //     description: "Bla bla bla",
  //   },
  //   {
  //     toUser: {
  //       username: "pepe",
  //     },
  //     about: "Hola",
  //     description: "Bla bla bla",
  //   },
  // ];

  const handleLoginButton = () => {
    onOpenLogin();
  };

  const handleMessageBody = (e) => {
    const messageBody = document.querySelector(".messages-body");
    messageBody.classList.toggle("messages-active");
  };
  // console.log(messages)

  const Account = () => {
    return isLogin() ? (
      <>
        <Link
          className="nav-item nav-link text-info md-5"
          to="/TuServicio/cuenta"
        >
          {user?.username ?? ""}
        </Link>
        <div className="message-icon c-center" onClick={handleMessageBody}>
          <MessageIcon />
          {messages?.length > 0 && <div className="notificaction-count">{messages?.length}</div>}
          <div className="messages-body">
            {messages && messages.map((message, key) => (
              <div
                key={key}
                onClick={() =>
                  openMessageModal(
                    message.from_user,
                    message.about,
                    message.description,
                    true
                  )
                }
              >
                {message.about}
              </div>
            ))}
          </div>
        </div>

        <button className="Btn bg-primary" onClick={logout}>
          <div className="sign">
            <svg viewBox="0 0 512 512">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>

          <div className="text">Logout</div>
        </button>
      </>
    ) : (
      <>
        <button className="Btn bg-primary" onClick={handleLoginButton}>
          <div className="sign">
            <svg viewBox="0 0 512 512">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>

          <div className="text">Login</div>
        </button>
      </>
    );
  };

  return (
    <div className=" order-3  d-flex justify-content-end">
      <ul className="navbar-nav ml-auto">
        {isUserLoading && <Spinner />}
        {!isUserLoading && <Account />}
      </ul>
    </div>
  );
}
