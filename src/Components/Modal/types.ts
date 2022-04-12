import { ReactNode, ComponentType, FC } from "react";

export interface IModalProvider {
  children: ReactNode;
  clickToClose?: boolean;
  escapeToClose?: boolean;
}

export interface IModalStateContext {
  modals: IModalItem[];
  options: {
    clickToClose: boolean;
    escapeToClose: boolean;
  };
}

export interface IModalDispatchContext {
  openModal: TModalOpenHandler;
  closeModal: (modalIndex: number) => void;
  closeLastModal: () => void;
  closeAllModal: () => void;
}

export interface IModalItem {
  Component: ComponentType<any>;
  props: Record<string, any>;
}

export type TModalOpenHandler = ({ Component, props }: IModalItem) => void;
