"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("./hooks");
var Async = react_1.default.memo(function (_a) {
    var children = _a.children, as = _a.as;
    var value = hooks_1.useValue$(children);
    return react_1.default.createElement(as || react_1.default.Fragment, {
        children: value
    });
});
exports.default = Async;
