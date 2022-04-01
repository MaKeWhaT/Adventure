import { StrictMode } from "react";
import { RecoilRoot } from "recoil";
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
