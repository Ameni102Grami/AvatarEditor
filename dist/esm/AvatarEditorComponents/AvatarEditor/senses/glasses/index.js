"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = glasses;
const react_1 = __importDefault(require("react"));
const round_1 = __importDefault(require("./round"));
const square_1 = __importDefault(require("./square"));
function glasses(props) {
    const { style } = props;
    switch (style) {
        case 'round':
            return react_1.default.createElement(round_1.default, null);
        case 'square':
            return react_1.default.createElement(square_1.default, null);
        case 'none':
        default:
            return react_1.default.createElement(round_1.default, null);
    }
}
//# sourceMappingURL=index.js.map