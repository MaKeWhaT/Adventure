import { useEffect, useContext, useCallback } from "react";
import {
  ModalStateContext,
  ModalDispatchContext,
} from "@/Components/Modal/ModalContext";
import ModalPanel from "@/Components/Modal/ModalPanel";
import cn from "classnames";

export default function ModalRenderer() {
  const { modals, options } = useContext(ModalStateContext);
  const { closeAllModal } = useContext(ModalDispatchContext);
  const { clickToClose, escapeToClose } = options;

  const onClickModalBackgroundWrapper = useCallback(() => {
    if (clickToClose) closeAllModal();
  }, [clickToClose, closeAllModal]);

  useEffect(() => {
    const onKeyUpEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAllModal();
    };
    if (escapeToClose) {
      window.addEventListener("keyup", onKeyUpEscape);
    }
    return () => {
      if (escapeToClose) {
        window.addEventListener("keyup", onKeyUpEscape);
      }
    };
  }, [closeAllModal, clickToClose, escapeToClose]);

  return (
    <div
      onClick={onClickModalBackgroundWrapper}
      className={cn(
        "fixed top-0 left-0 flex h-[100vh] w-[100vw] items-center justify-center",
        {
          hidden: modals.length === 0,
        },
      )}
    >
      <div
        className={cn("absolute top-0 left-0  h-full w-full bg-black/[.50]")}
      ></div>
      {modals.length > 0 && (
        <>
          {modals.map((modalItem, modalIndex) => {
            const { Component, props } = modalItem;
            return (
              <ModalPanel>
                <Component key={modalIndex} {...props} />
              </ModalPanel>
            );
          })}
        </>
      )}
    </div>
  );
}
