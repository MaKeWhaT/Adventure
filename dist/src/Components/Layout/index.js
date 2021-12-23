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
import { NavLink } from 'react-router-dom';
import { routes } from '@/Router';
export default function Layout(_a) {
    var children = _a.children;
    return (_jsxs("div", __assign({ className: "Page-Wrap" }, { children: [_jsx("header", __assign({ className: "Page-Wrap__Header" }, { children: _jsx("h1", { children: "Adventure" }, void 0) }), void 0), _jsx("nav", { children: _jsx("ul", { children: routes.map(function (_a) {
                        var name = _a.name, path = _a.path;
                        return (_jsx("li", { children: _jsx(NavLink, __assign({ exact: true, activeClassName: "route-active", to: path }, { children: name }), void 0) }, name));
                    }) }, void 0) }, void 0), _jsx("main", { children: children }, void 0)] }), void 0));
}
//# sourceMappingURL=index.js.map