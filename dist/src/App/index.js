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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
export default function App() {
    return (_jsxs(BrowserRouter, { children: ["\u00DF", _jsx(Suspense, __assign({ fallback: _jsx("div", { children: "Loading..." }, void 0) }, { children: _jsx(Route, { path: "/", component: lazy(function () { return import(/* webpackChunkName: "Home" */ 'pages/Home'); }) }, void 0) }), void 0)] }, void 0));
}
//# sourceMappingURL=index.js.map