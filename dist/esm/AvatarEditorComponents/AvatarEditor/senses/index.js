"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const utils_1 = require("./utils");
const face_1 = __importDefault(require("./face"));
const hair_1 = __importDefault(require("./hair"));
const hat_1 = __importDefault(require("./hat"));
const ear_1 = __importDefault(require("./ear"));
const eyebrow_1 = __importDefault(require("./eyebrow"));
const eyes_1 = __importDefault(require("./eyes"));
const glasses_1 = __importDefault(require("./glasses"));
const nose_1 = __importDefault(require("./nose"));
const mouth_1 = __importDefault(require("./mouth"));
const shirt_1 = __importDefault(require("./shirt"));
const ReactNiceAvatar = (_a) => {
    var { id, className, style, shape = 'circle', hairColorRandom = false } = _a, props = __rest(_a, ["id", "className", "style", "shape", "hairColorRandom"]);
    const config = (0, utils_1.genConfig)(props);
    const borderRadius = shape === 'circle' ? '100%' : shape === 'rounded' ? '6px' : 0;
    return (react_1.default.createElement("div", { id: id, className: className, style: Object.assign({ background: config.bgColor, overflow: 'hidden', borderRadius }, style) },
        react_1.default.createElement("div", { style: {
                position: 'relative',
                width: '100%',
                height: '100%'
            } },
            react_1.default.createElement("div", { className: "face-wrapper" },
                react_1.default.createElement(face_1.default, { color: config.faceColor }),
                react_1.default.createElement(hat_1.default, { color: config.hatColor, style: config.hatStyle }),
                config.hatStyle === 'none' && react_1.default.createElement(hair_1.default, { color: config.hairColor, style: config.hairStyle, colorRandom: hairColorRandom }),
                react_1.default.createElement("div", { className: "senses-wrapper" },
                    react_1.default.createElement(eyebrow_1.default, { style: config.eyeBrowStyle }),
                    react_1.default.createElement(eyes_1.default, { style: config.eyeStyle }),
                    react_1.default.createElement(glasses_1.default, { style: config.glassesStyle }),
                    react_1.default.createElement(ear_1.default, { color: config.faceColor, size: config.earSize }),
                    react_1.default.createElement(nose_1.default, { style: config.noseStyle }),
                    react_1.default.createElement(mouth_1.default, { style: config.mouthStyle })),
                react_1.default.createElement(shirt_1.default, { color: config.shirtColor, style: config.shirtStyle })))));
};
exports.default = ReactNiceAvatar;
//# sourceMappingURL=index.js.map