import { ReactNode, useCallback, MouseEvent } from "react";
interface IModalPanel {
  children: ReactNode;
}
export default function ModalPanel({ children }: IModalPanel) {
  const onClickModalPanel = useCallback((event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  }, []);
  return (
    <div onClick={onClickModalPanel} className="absolute">
      {children}
    </div>
  );
}
