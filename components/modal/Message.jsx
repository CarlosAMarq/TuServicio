import React, { useContext, useEffect, useState } from "react";
import "./message.css";
import { ModalContext } from "../../context/ModalContext";
import { useUser } from "../../hooks/useUser";
import {
  API_URL,
  toastSuccessProps,
  toastRejectProps,
} from "../../global.config";
import { toast } from "react-toastify";
import { useNotification } from "../../hooks/useNotification";
import { getUserById } from "../../libs/getUser";
import Spinner from "../icon/Spinner";

export default function Message() {
  const { messageData, setMessageData } = useContext(ModalContext);
  const { user } = useUser();
  const { updateToast } = useNotification();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitMessage = async (e) => {
    e.preventDefault();

    // Get the format data and convert it into a json
    let formData = new FormData(e.target);
    var { about, description } = Object.fromEntries(formData.entries());
    const data = {
      from_user: user.id,
      to_user: messageData.toUser.id,
      about,
      description,
    };
    console.log(data);

    const noti = toast.loading("Enviando mensaje...");
    setIsLoading(true);
    try {
      // Create a fecth with post method
      const response = await fetch(API_URL + "messages/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);

      updateToast({
        toast: noti,
        message: "Peticion enviada correctamente",
        type: "success",
      });
    } catch (e) {
      updateToast({
        toast: noti,
        message: "Ha ocurrido un error desconocido",
        type: "error",
      });
      console.log(e);
    }
    setIsLoading(false);
  };

  const [asyncFromUser, setAsyncFromUser] = useState("");

  useEffect(() => {
    setAsyncFromUser("");
    const loadFromUser = async () => {
      if (messageData?.toUser) {
        const fromUser = await getUserById(messageData.toUser);
        setAsyncFromUser(fromUser);
      }
    };
    loadFromUser();
  }, [messageData]);

  return (
    <form className="message" onSubmit={handleSubmitMessage}>
      {messageData?.acceptMode == false && (
        <h2>Mensaje a {messageData?.toUser?.username}</h2>
      )}
      {messageData?.acceptMode == true && (
        <h2>
          Mensaje de{" "}
          {asyncFromUser ? (
            asyncFromUser.username
          ) : (
            <>
              <Spinner color={"#000"} />
            </>
          )}
        </h2>
      )}
      <div className="form-body">
        <div className="form-floating mb-3 ">
          <input
            type="text"
            className="form-control rounded-3"
            id="name"
            placeholder="name"
            name="about"
            required={!messageData.acceptMode}
            readOnly={messageData.acceptMode}
            value={messageData?.about}
            onChange={(e) =>
              setMessageData((prev) => ({ ...prev, about: e.target.value }))
            }
          />
          <label form="floatingInput">Asunto</label>
        </div>

        <div
          className="form-floating mb-5 input-block"
          style={{ margin: "auto" }}
        >
          <textarea
            className="input form-control"
            name="description"
            id="textarea"
            style={{ minHeight: "200px" }}
            required={!messageData.acceptMode}
            readOnly={messageData.acceptMode}
            value={messageData?.description}
            onChange={(e) =>
              setMessageData((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
          ></textarea>
          <label form="textarea">Descripción</label>
          <div className="valid-feedback">Listo</div>
        </div>
      </div>
      <div className="">
        {!messageData.acceptMode ? (
          <button
            className="w-100 btn btn-primary btn-lg mt-1"
            type="submit"
            disabled={isLoading}
          >
            Enviar mensaje
          </button>
        ) : (
          <>
            <button
              className="w-45 btn btn-primary btn-lg mt-1"
              type="submit"
              disabled={isLoading}
            >
              Aceptar
            </button>
            <button
              className="w-45 btn btn-danger btn-lg mt-1"
              type="submit"
              disabled={isLoading}
            >
              Rechazar
            </button>
          </>
        )}
      </div>
    </form>
  );
}
