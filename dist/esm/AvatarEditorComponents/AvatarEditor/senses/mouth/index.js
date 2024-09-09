"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mouth;
const react_1 = __importDefault(require("react"));
const laugh_1 = __importDefault(require("./laugh"));
const smile_1 = __importDefault(require("./smile"));
const peace_1 = __importDefault(require("./peace"));
function mouth(props) {
    const { style } = props;
    switch (style) {
        case 'laugh':
            return react_1.default.createElement(laugh_1.default, null);
        case 'smile':
            return react_1.default.createElement(smile_1.default, null);
        case 'peace':
        default:
            return react_1.default.createElement(peace_1.default, null);
    }
}
//# sourceMappingURL=index.js.map