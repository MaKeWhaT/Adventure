import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '@/Components/Layout';

export const routes = [
  {
    name: 'Home',
    path: '/',
    component: lazy(() => import(/* webpackChunkName: "Home" */ 'pages/Home')),
  }, {
    name: 'Button',
    path: '/Button',
    component: lazy(() => import(/* webpackChunkName: "Button" */ 'pages/Button')),
  },
];

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            {routes.map((route) => <Route exact key={route.name} {...route} />)}
          </Suspense>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}
