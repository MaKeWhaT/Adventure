/* eslint-disable no-undef */
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/Components/Layout";

interface RouteConfig {
  name: string;
  path: string;
  Element: ReturnType<typeof lazy>;
}

export const routes: RouteConfig[] = [
  {
    name: "Home",
    path: "/Home",
    Element: lazy(() => import(/* webpackChunkName: "Home" */ "pages/Home")),
  },
  {
    name: "Button",
    path: "/Button",
    Element: lazy(
      () => import(/* webpackChunkName: "Button" */ "pages/Button"),
    ),
  },
  {
    name: "ImageColorPicker",
    path: "/ImageColorPicker",
    Element: lazy(
      () =>
        import(
          /* webpackChunkName: "ImageColorPicker" */ "pages/ImageColorPicker"
        ),
    ),
  },
  {
    name: "Switch",
    path: "/Switch",
    Element: lazy(
      () => import(/* webpackChunkName: "Switch" */ "pages/Switch"),
    ),
  },
  {
    name: "PlayGround",
    path: "/PlayGround",
    Element: lazy(
      () => import(/* webpackChunkName: "PlayGround" */ "pages/PlayGround"),
    ),
  },
  {
    name: "NotFound",
    path: "*",
    Element: lazy(
      () => import(/* webpackChunkName: "NotFound" */ "pages/NotFound"),
    ),
  },
];

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map(({ name, path, Element }) => (
            <Route
              key={name}
              path={path}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Element />
                </Suspense>
              }
            />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
