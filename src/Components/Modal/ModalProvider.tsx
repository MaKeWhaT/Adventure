import { useState, useMemo } from "react";
import {
  ModalStateContext,
  ModalDispatchContext,
} from "@/Components/Modal/ModalContext";
import {
  IModalProvider,
  IModalDispatchContext,
  IModalStateContext,
} from "@/Components/Modal/types";

export default function ModalProvider({
  children,
  clickToClose = true,
  escapeToClose = true,
}: IModalProvider) {
  const [modalState, setModalState] = useState<IModalStateContext>({
    modals: [],
    options: {
      clickToClose,
      escapeToClose,
    },
  });
  const modalDispatch = useMemo<IModalDispatchContext>(
    () => ({
      openModal({ Component, props }) {
        setModalState((modalState) => {
          return {
            modals: [...modalState.modals, { Component, props }],
            options: modalState.options,
          };
        });
      },
      closeModal(modalIndex: number) {
        setModalState((modalState) => {
          return {
            modals: [
              ...modalState.modals.filter((_, index) => index !== modalIndex),
            ],
            options: modalState.options,
          };
        });
      },
      closeLastModal() {
        setModalState((modalState) => {
          if (modalState.modals.length >= 1) {
            modalState.modals.pop();
          }
          return {
            modals: [...modalState.modals],
            options: modalState.options,
          };
        });
      },
      closeAllModal() {
        setModalState((modalState) => {
          return {
            modals: [],
            options: modalState.options,
          };
        });
      },
    }),
    [],
  );
  return (
    <ModalStateContext.Provider value={modalState}>
      <ModalDispatchContext.Provider value={modalDispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}
