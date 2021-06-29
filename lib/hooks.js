"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useValue$ = void 0;
var react_1 = __importStar(require("react"));
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
function useValue$(input$, observer) {
    var destroy$ = new rxjs_1.Subject();
    var _a = react_1.default.useState(), value = _a[0], setValue = _a[1];
    var onNext = react_1.useCallback(function (val) {
        var _a;
        setValue(val);
        (_a = observer === null || observer === void 0 ? void 0 : observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, val);
    }, []);
    react_1.default.useEffect(function () {
        return function () {
            destroy$.next();
            destroy$.complete();
        };
    }, []);
    react_1.default.useEffect(function () {
        input$.pipe(operators_1.takeUntil(destroy$)).subscribe(__assign(__assign({}, observer), { next: onNext }));
    }, []);
    return value;
}
exports.useValue$ = useValue$;
