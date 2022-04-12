import { useContext } from "react";
import { ModalDispatchContext } from "@/Components/Modal/ModalContext";
export default function useModal() {
  const { openModal, closeModal, closeLastModal, closeAllModal } =
    useContext(ModalDispatchContext);
  return {
    openModal,
    closeModal,
    closeLastModal,
    closeAllModal,
  };
}
