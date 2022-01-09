import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "@/Router";
import "./index.scss";

export interface IProps {
  children?: ReactNode;
}
export default function Layout({ children }: IProps) {
  return (
    <div className="Page-Wrap">
      <header className="Page-Wrap__Header">
        <h1 className="Page-Wrap__Header__Text">Adventure</h1>
      </header>
      <div className="Page-Wrap__Content">
        <nav className="Page-Wrap__Content__Nav">
          <ul className="Page-Wrap__Content__List">
            {routes.map(({ name, path }) => (
              <li className="Page-Wrap__Content__List__Item" key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "route-active" : "")}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <main className="Page-Wrap__Content__Main">
          <div className="Page-Wrap__Content__Main__Plate">{children}</div>
        </main>
      </div>
    </div>
  );
}
