"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = shirt;
const react_1 = __importDefault(require("react"));
const chroma_js_1 = __importDefault(require("chroma-js"));
const hoody_1 = __importDefault(require("./hoody"));
const short_1 = __importDefault(require("./short"));
const polo_1 = __importDefault(require("./polo"));
function shirt(props) {
    const { style, color } = props;
    const secondColor = (0, chroma_js_1.default)(color).brighten(1).hex();
    switch (style) {
        case 'hoody':
            return react_1.default.createElement(hoody_1.default, { color: color, lightColor: secondColor });
        case 'polo':
            return react_1.default.createElement(polo_1.default, { color: color, lightColor: secondColor });
        case 'short':
        default:
            return react_1.default.createElement(short_1.default, { color: color });
    }
}
//# sourceMappingURL=index.js.map