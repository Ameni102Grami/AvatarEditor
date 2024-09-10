"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const react_2 = require("react");
const react_nice_avatar_1 = __importDefault(require("react-nice-avatar"));
const AvatarList_1 = __importDefault(require("../../AvatarList"));
const FaceComponent_1 = __importDefault(require("./FaceComponent"));
const SectionWrapper_1 = __importDefault(require("./SectionWrapper"));
const AvatarEditor = ({ config, updateConfig, setConfig, withAvatarList = true }) => {
    const switchConfig = (type, currentOpt) => {
        updateConfig(type, currentOpt);
    };
    const [showSensesStyle, setShowSensesStyle] = (0, react_2.useState)();
    const components = (0, FaceComponent_1.default)(config);
    const [avatarBg, setAvatarBg] = (0, react_2.useState)(config === null || config === void 0 ? void 0 : config.bgColor);
    (0, react_2.useEffect)(() => {
        setAvatarBg(config.bgColor);
    }, [config]);
    const extractColorsFromGradient = (gradient) => {
        const colorRegex = /#([0-9a-f]{3}|[0-9a-f]{6})\b/gi;
        return gradient === null || gradient === void 0 ? void 0 : gradient.match(colorRegex);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(antd_1.Flex, { align: "center", justify: "center", vertical: true, gap: 8, style: {
                background: `linear-gradient(45deg, ${extractColorsFromGradient(avatarBg)[0]}, #ffffff)`,
                width: '100%',
                height: '100%',
                borderRadius: '16px 16px 0px 0px'
            } },
            react_1.default.createElement("span", { className: "select-avatar-title" }, "Change your avatar"),
            react_1.default.createElement(react_nice_avatar_1.default, Object.assign({}, config, { style: { width: '10rem', height: '10rem' } })),
            withAvatarList && (react_1.default.createElement(antd_1.Flex, { align: "center", justify: "center", style: { maxWidth: '100%' } },
                react_1.default.createElement(AvatarList_1.default, { config: config, selectConfig: (newConfig) => {
                        setConfig(newConfig);
                        setShowSensesStyle((prev) => (Object.assign(Object.assign({}, prev), { children: [] })));
                    } })))),
        react_1.default.createElement("span", { className: "select-avatar-title" }, "Customize your avatar"),
        react_1.default.createElement(antd_1.Flex, { align: "center", justify: "center", wrap: "wrap", gap: 10 }, showSensesStyle &&
            (showSensesStyle === null || showSensesStyle === void 0 ? void 0 : showSensesStyle.children.map((el, idx) => (react_1.default.createElement(antd_1.Flex, { key: idx, className: "avatar-sense", onClick: () => switchConfig(el.configKey, el.senseType) }, el.sense))))),
        react_1.default.createElement("div", { className: "avatar-editor rounded-full  px-3 py-2 gap-10 flex items-center" }, components.map((item, index) => (react_1.default.createElement(SectionWrapper_1.default, { key: index, className: "w-8 h-8 rounded-full p-2 mx-2", tip: item.tip, switchConfig: () => setShowSensesStyle(item) }, item.component))))));
};
exports.default = AvatarEditor;
//# sourceMappingURL=index.js.map