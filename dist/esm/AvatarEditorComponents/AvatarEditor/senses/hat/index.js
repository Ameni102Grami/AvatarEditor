"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = hat;
const turban_1 = __importDefault(require("./turban"));
const beanie_1 = __importDefault(require("./beanie"));
function hat(props) {
    const { style, color } = props;
    switch (style) {
        case 'beanie':
            return React.createElement(beanie_1.default, { color: color });
        case 'turban':
            return React.createElement(turban_1.default, { color: color });
        case 'none':
        default:
            return null;
    }
}
//# sourceMappingURL=index.js.map