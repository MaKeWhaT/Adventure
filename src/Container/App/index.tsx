import { StrictMode } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Router from "@/Router";
import "./index.scss";

export default function App() {
  return (
    <StrictMode>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </StrictMode>
  );
}
