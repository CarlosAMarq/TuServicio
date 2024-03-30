import { toast } from "react-toastify";
export const useNotification = () => {
  const notify = (msg, type = "info") => {
    return toast[type](msg);
  };

  const updateToast = ({toast:notifiaction, message, type}) => {
    toast.update(notifiaction, {
      render: message,
      closeOnClick: true,
      autoClose: true,
      isLoading: false,
      type: type,
    });
  }
    

  return { notify, updateToast };
};
