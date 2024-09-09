"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EarBig;
const react_1 = __importDefault(require("react"));
function EarBig(props) {
    const { color } = props;
    return (react_1.default.createElement("svg", { style: {
            width: '16%',
            height: '15%',
            top: '13%',
            left: '19%'
        }, width: "48", height: "52", viewBox: "0 0 48 52", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M36.466 43.1111L37 42.5357V41.7506V8.24948V7.13022L36.046 6.54483C32.3122 4.25363 27.7717 3 23.08 3C17.4397 3 12.1591 4.74745 8.39775 8.29504C4.59419 11.8824 2.54206 17.1274 3.08692 23.6661C3.61786 30.0378 5.75693 34.7272 9.30474 37.8433C9.01338 38.8425 8.92733 39.9197 9.06236 41.0533C9.45166 44.3216 11.1039 46.6766 13.6572 48.1277C16.0911 49.511 19.2061 49.9998 22.5242 49.9998C28.0033 49.9998 32.8077 47.0528 36.466 43.1111Z", stroke: "black", strokeWidth: "4" }),
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.972 23.984C43.0434 23.3322 43.08 22.6703 43.08 22C43.08 11.7827 33.5734 5 23.08 5C12.5866 5 4.08007 11.5 5.08001 23.5C5.63643 30.1774 8.02584 34.5719 11.7307 37.2171C11.1423 38.2409 10.8848 39.4436 11.0483 40.8167C11.6774 46.0984 16.1862 47.9998 22.5242 47.9998C33.6292 47.9998 42.4159 33.9534 42.972 23.984Z", fill: color }),
        react_1.default.createElement("path", { d: "M27.5 13.5004C23.5 11.6671 14.7 10.7004 11.5 21.5004", stroke: "#171921", strokeWidth: "4" }),
        react_1.default.createElement("path", { d: "M17 14C19.1667 15.8333 23.3 21.5 22.5 29.5", stroke: "#171921", strokeWidth: "4" })));
}
//# sourceMappingURL=big.js.map