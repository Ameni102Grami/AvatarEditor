"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const icons_1 = require("@ant-design/icons");
const antd_1 = require("antd");
const react_1 = __importStar(require("react"));
const react_nice_avatar_1 = __importStar(require("react-nice-avatar"));
const useScrollManager_1 = __importDefault(require("./useScrollManager"));
const AvatarList = ({ selectConfig, config }) => {
    const displayCount = 200;
    const [avatarConfigList, setAvatarConfigList] = (0, react_1.useState)([]);
    const listId = 'avatarList';
    (0, react_1.useEffect)(() => {
        setAvatarConfigList(genConfigList(displayCount));
        fetchListWidth();
    }, []);
    const genConfigList = (count) => {
        return new Array(count).fill(null).map(() => (Object.assign(Object.assign({}, (0, react_nice_avatar_1.genConfig)({ isGradient: Boolean(Math.round(Math.random())) })), { id: 'n_' + Math.random().toString(36).substr(2, 9) })));
    };
    const fetchListWidth = (count = 0) => {
        if (count > 20)
            return;
        const listElem = document.getElementById(listId);
        if (!listElem) {
            setTimeout(() => {
                fetchListWidth(count + 1);
            }, 500);
        }
        else {
        }
    };
    const scrollContainerRef = (0, react_1.useRef)(null);
    const { scrollAmount, handleScrollLeft, handleScrollRight } = (0, useScrollManager_1.default)(scrollContainerRef);
    return (react_1.default.createElement(antd_1.Flex, { align: "center", justify: "center", gap: 10 },
        react_1.default.createElement(icons_1.CaretLeftOutlined, { style: { color: 'rgba(107, 114, 128, 1)' }, onClick: handleScrollLeft }),
        react_1.default.createElement("div", { className: "list-wrapper", ref: scrollContainerRef }, avatarConfigList.map((item, idx) => (react_1.default.createElement("div", { key: item.id, className: "avatar-item-wrapper", onClick: () => selectConfig(item) },
            react_1.default.createElement(react_nice_avatar_1.default, Object.assign({ className: (config === null || config === void 0 ? void 0 : config.id) === item.id ? 'avatar-item selected-item-avatar' : 'avatar-item' }, item)))))),
        react_1.default.createElement(icons_1.CaretRightOutlined, { style: { color: 'rgba(107, 114, 128, 1)' }, onClick: handleScrollRight })));
};
exports.default = AvatarList;
//# sourceMappingURL=index.js.map