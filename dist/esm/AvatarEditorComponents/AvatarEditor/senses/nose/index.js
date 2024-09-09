"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = nose;
const react_1 = __importDefault(require("react"));
const long_1 = __importDefault(require("./long"));
const short_1 = __importDefault(require("./short"));
const round_1 = __importDefault(require("./round"));
function nose(props) {
    const { style } = props;
    switch (style) {
        case 'long':
            return react_1.default.createElement(long_1.default, null);
        case 'round':
            return react_1.default.createElement(round_1.default, null);
        case 'short':
        default:
            return react_1.default.createElement(short_1.default, null);
    }
}
//# sourceMappingURL=index.js.map