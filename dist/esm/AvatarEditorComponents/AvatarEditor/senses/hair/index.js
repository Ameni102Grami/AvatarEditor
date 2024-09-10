"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hair;
const react_1 = __importDefault(require("react"));
const thick_1 = __importDefault(require("./thick"));
const mohawk_1 = __importDefault(require("./mohawk"));
const womanLong_1 = __importDefault(require("./womanLong"));
const womanShort_1 = __importDefault(require("./womanShort"));
function Hair(props) {
    const { style, color, colorRandom } = props;
    switch (style) {
        case 'thick':
            return react_1.default.createElement(thick_1.default, { color: color, colorRandom: colorRandom });
        case 'mohawk':
            return react_1.default.createElement(mohawk_1.default, { color: color, colorRandom: colorRandom });
        case 'womanLong':
            return react_1.default.createElement(womanLong_1.default, { color: color });
        case 'womanShort':
            return react_1.default.createElement(womanShort_1.default, { color: color });
        case 'normal':
        default:
            return react_1.default.createElement(womanShort_1.default, { color: color });
    }
}
//# sourceMappingURL=index.js.map