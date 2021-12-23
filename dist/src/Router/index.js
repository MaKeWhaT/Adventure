var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '@/Components/Layout';
export var routes = [
    {
        name: 'Home',
        path: '/',
        component: lazy(function () { return import(/* webpackChunkName: "Home" */ 'pages/Home'); }),
    }, {
        name: 'Button',
        path: '/Button',
        component: lazy(function () { return import(/* webpackChunkName: "Button" */ 'pages/Button'); }),
    },
];
export default function Router() {
    return (_jsx(BrowserRouter, { children: _jsx(Layout, { children: _jsx(Switch, { children: _jsx(Suspense, __assign({ fallback: _jsx("div", { children: "Loading..." }, void 0) }, { children: routes.map(function (route) { return _jsx(Route, __assign({}, route), route.name); }) }), void 0) }, void 0) }, void 0) }, void 0));
}
//# sourceMappingURL=index.js.map