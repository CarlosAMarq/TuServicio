import { toast } from "react-toastify";
export const useNotification = () => {
  const notify = (msg, type = "info") => {
    return toast[type](msg);
  };

  return { notify };
};
