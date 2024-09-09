"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EyesOval;
const react_1 = __importDefault(require("react"));
function EyesOval() {
    return (react_1.default.createElement("svg", { style: {
            width: '100%',
            height: '12%',
            top: '6%'
        }, width: "96", height: "48", viewBox: "0 0 96 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("ellipse", { cx: "16.5301", cy: "29.4023", rx: "9", ry: "13.5", transform: "rotate(-6.77646 16.5301 29.4023)", fill: "black" }),
        react_1.default.createElement("ellipse", { cx: "80.5312", cy: "19.4021", rx: "9", ry: "13.5", transform: "rotate(-6.27568 80.5312 19.4021)", fill: "black" })));
}
//# sourceMappingURL=oval.js.map