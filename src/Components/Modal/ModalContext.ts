import { createContext } from "react";
import {
  IModalStateContext,
  IModalDispatchContext,
} from "@/Components/Modal/types";

export const ModalDispatchContext = createContext<IModalDispatchContext>({
  openModal() {},
  closeModal() {},
  closeLastModal() {},
  closeAllModal() {},
});

export const ModalStateContext = createContext<IModalStateContext>({
  modals: [],
  options: {
    clickToClose: true,
    escapeToClose: true,
  },
});
