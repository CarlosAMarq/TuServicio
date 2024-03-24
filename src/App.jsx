
import { AppRouter } from "../Routers/Routers";
import "./app.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <AppRouter />
      <ToastContainer />

    </>
  );
};
