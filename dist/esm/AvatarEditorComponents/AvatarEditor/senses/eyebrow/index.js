"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = eyebrow;
const react_1 = __importDefault(require("react"));
const up_1 = __importDefault(require("./up"));
const upWoman_1 = __importDefault(require("./upWoman"));
function eyebrow(props) {
    const { style } = props;
    switch (style) {
        case 'upWoman':
            return react_1.default.createElement(upWoman_1.default, null);
        case 'up':
        default:
            return react_1.default.createElement(up_1.default, null);
    }
}
//# sourceMappingURL=index.js.map