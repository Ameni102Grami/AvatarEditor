"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GlassesRound;
const react_1 = __importDefault(require("react"));
function GlassesRound() {
    return (react_1.default.createElement("svg", { style: {
            width: '100%',
            height: '20%',
            top: '1.5%',
            left: '-3%'
        }, width: "152", height: "65", viewBox: "0 0 152 65", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("circle", { cx: "123.5", cy: "28", r: "26", stroke: "black", strokeWidth: "4" }),
        react_1.default.createElement("circle", { cx: "56.5", cy: "37", r: "26", stroke: "black", strokeWidth: "4" }),
        react_1.default.createElement("path", { d: "M98.5 35C98.5 32.8783 97.6571 30.8434 96.1569 29.3431C94.6566 27.8429 92.6217 27 90.5 27C88.3783 27 86.3434 27.8429 84.8431 29.3431C83.3429 30.8434 82.5 32.8783 82.5 35", stroke: "black", strokeWidth: "4" }),
        react_1.default.createElement("path", { d: "M31 39L1 44.5", stroke: "black", strokeWidth: "4" })));
}
//# sourceMappingURL=round.js.map