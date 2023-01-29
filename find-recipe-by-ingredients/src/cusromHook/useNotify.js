import { ToastContainer, toast } from "react-toastify";

export const useNotify = () => {
  const notifyError = (err) => {
    toast.error(`${err}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return { notifyError, ToastContainer };
};
