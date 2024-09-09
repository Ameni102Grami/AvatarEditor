"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EyesCircle;
const react_1 = __importDefault(require("react"));
function EyesCircle() {
    return (react_1.default.createElement("svg", { style: {
            width: '100%',
            height: '12%',
            top: '7%'
        }, width: "96", height: "48", viewBox: "0 0 96 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("ellipse", { cx: "16.1171", cy: "28.9268", rx: "9", ry: "10", transform: "rotate(-6.77646 16.1171 28.9268)", fill: "black" }),
        react_1.default.createElement("ellipse", { cx: "80.1486", cy: "18.9231", rx: "9", ry: "10", transform: "rotate(-6.27568 80.1486 18.9231)", fill: "black" })));
}
//# sourceMappingURL=circle.js.map