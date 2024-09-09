"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SectionWrapper;
const antd_1 = require("antd");
const react_1 = __importDefault(require("react"));
function SectionWrapper(props) {
    const { className = '', children, switchConfig, tip } = props;
    return (react_1.default.createElement(antd_1.Tooltip, { title: tip },
        react_1.default.createElement("div", { className: 'section-wrapper ' + className, "data-tip": tip, onClick: switchConfig },
            react_1.default.createElement("div", { className: "children-wrapper  absolute top-0 left-0 w-full h-full flex items-center justify-center" }, children))));
}
//# sourceMappingURL=index.js.map