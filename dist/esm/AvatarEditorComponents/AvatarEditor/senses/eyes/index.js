"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = eyes;
const react_1 = __importDefault(require("react"));
const circle_1 = __importDefault(require("./circle"));
const oval_1 = __importDefault(require("./oval"));
const smile_1 = __importDefault(require("./smile"));
function eyes(props) {
    const { style } = props;
    switch (style) {
        case 'circle':
            return react_1.default.createElement(circle_1.default, null);
        case 'smile':
            return react_1.default.createElement(smile_1.default, null);
        case 'oval':
            return react_1.default.createElement(oval_1.default, null);
        default:
            return react_1.default.createElement(oval_1.default, null);
    }
}
//# sourceMappingURL=index.js.map