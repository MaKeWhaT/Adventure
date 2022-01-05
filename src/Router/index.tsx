/* eslint-disable no-undef */
import { lazy, Suspense } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Layout from '@/Components/Layout';

interface RouteConfig {
  name: string,
  path: string,
  component: ReturnType<typeof lazy>
}

export const routes: RouteConfig[] = [
  {
    name: 'Button',
    path: '/Button',
    component: lazy(() => import(/* webpackChunkName: "Button" */ 'pages/Button')),
  },
  {
    name: 'ImageColorPicker',
    path: '/ImageColorPicker',
    component: lazy(() => import(/* webpackChunkName: "ImageColorPicker" */ 'pages/ImageColorPicker')),
  },
  {
    name: 'PlayGround',
    path: '/PlayGround',
    component: lazy(() => import(/* webpackChunkName: "PlayGround" */ 'pages/PlayGround')),
  },
  {
    name: 'NotFound',
    path: '/NotFound',
    component: lazy(() => import(/* webpackChunkName: "NotFound" */ 'pages/NotFound')),
  },
];

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={lazy(() => import(/* webpackChunkName: "Home" */ 'pages/Home'))} />
            {routes.map((route) => <Route key={route.name} {...route} />)}
            <Redirect to="/NotFound" />
          </Suspense>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}
