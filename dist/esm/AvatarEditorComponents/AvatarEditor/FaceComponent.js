"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const face_1 = __importDefault(require("./senses/face"));
const hair_1 = __importDefault(require("./senses/hair"));
const hat_1 = __importDefault(require("./senses/hat"));
const eyes_1 = __importDefault(require("./senses/eyes"));
const glasses_1 = __importDefault(require("./senses/glasses"));
const ear_1 = __importDefault(require("./senses/ear"));
const nose_1 = __importDefault(require("./senses/nose"));
const mouth_1 = __importDefault(require("./senses/mouth"));
const shirt_1 = __importDefault(require("./senses/shirt"));
const thick_1 = __importDefault(require("./senses/hair/thick"));
const mohawk_1 = __importDefault(require("./senses/hair/mohawk"));
const womanLong_1 = __importDefault(require("./senses/hair/womanLong"));
const womanShort_1 = __importDefault(require("./senses/hair/womanShort"));
const normal_1 = __importDefault(require("./senses/hair/normal"));
const beanie_1 = __importDefault(require("./senses/hat/beanie"));
const eyebrow_1 = __importDefault(require("./senses/eyebrow"));
const turban_1 = __importDefault(require("./senses/hat/turban"));
const smile_1 = __importDefault(require("./senses/eyes/smile"));
const oval_1 = __importDefault(require("./senses/eyes/oval"));
const circle_1 = __importDefault(require("./senses/eyes/circle"));
const round_1 = __importDefault(require("./senses/glasses/round"));
const square_1 = __importDefault(require("./senses/glasses/square"));
const small_1 = __importDefault(require("./senses/ear/small"));
const big_1 = __importDefault(require("./senses/ear/big"));
const long_1 = __importDefault(require("./senses/nose/long"));
const round_2 = __importDefault(require("./senses/nose/round"));
const short_1 = __importDefault(require("./senses/nose/short"));
const laugh_1 = __importDefault(require("./senses/mouth/laugh"));
const peace_1 = __importDefault(require("./senses/mouth/peace"));
const smile_2 = __importDefault(require("./senses/mouth/smile"));
const hoody_1 = __importDefault(require("./senses/shirt/hoody"));
const polo_1 = __importDefault(require("./senses/shirt/polo"));
const short_2 = __importDefault(require("./senses/shirt/short"));
const up_1 = __importDefault(require("./senses/eyebrow/up"));
const upWoman_1 = __importDefault(require("./senses/eyebrow/upWoman"));
const icons_1 = require("@ant-design/icons");
const FaceComponent = (config) => {
    return [
        {
            tip: 'Face',
            configKey: 'faceColor',
            component: react_1.default.createElement(face_1.default, { color: config === null || config === void 0 ? void 0 : config.faceColor }),
            children: [
                {
                    configKey: 'faceColor',
                    senseType: '#A67B5B',
                    sense: react_1.default.createElement(face_1.default, { color: '#A67B5B' })
                },
                {
                    configKey: 'faceColor',
                    senseType: '#F8C794',
                    sense: react_1.default.createElement(face_1.default, { color: '#F8C794' })
                },
                {
                    configKey: 'faceColor',
                    senseType: '#F7DED0',
                    sense: react_1.default.createElement(face_1.default, { color: '#F7DED0' })
                },
                {
                    configKey: 'faceColor',
                    senseType: '#F8C9B6',
                    sense: react_1.default.createElement(face_1.default, { color: '#F7DED0' })
                }
            ]
        },
        {
            tip: 'Hair',
            configKey: 'hairStyle',
            component: react_1.default.createElement(hair_1.default, { style: config === null || config === void 0 ? void 0 : config.hairStyle, color: config.hairColor }),
            children: [
                {
                    configKey: 'hairStyle',
                    senseType: 'thick',
                    sense: react_1.default.createElement(thick_1.default, { color: config === null || config === void 0 ? void 0 : config.hairColor })
                },
                {
                    configKey: 'hairStyle',
                    senseType: 'mohawk',
                    sense: react_1.default.createElement(mohawk_1.default, { color: config === null || config === void 0 ? void 0 : config.hairColor })
                },
                {
                    configKey: 'hairStyle',
                    senseType: 'womanLong',
                    sense: react_1.default.createElement(womanLong_1.default, { color: config === null || config === void 0 ? void 0 : config.hairColor })
                },
                {
                    configKey: 'hairStyle',
                    senseType: 'womanShort',
                    sense: react_1.default.createElement(womanShort_1.default, { color: config === null || config === void 0 ? void 0 : config.hairColor })
                },
                {
                    configKey: 'hairStyle',
                    senseType: 'hairNormal',
                    sense: react_1.default.createElement(normal_1.default, { color: config === null || config === void 0 ? void 0 : config.hairColor })
                }
            ]
        },
        {
            tip: 'Hat',
            configKey: 'hatStyle',
            component: react_1.default.createElement(hat_1.default, { style: config === null || config === void 0 ? void 0 : config.hatStyle, color: config === null || config === void 0 ? void 0 : config.hatColor }),
            children: [
                {
                    configKey: 'hatStyle',
                    senseType: 'beanie',
                    sense: react_1.default.createElement(beanie_1.default, { color: config === null || config === void 0 ? void 0 : config.hatColor })
                },
                {
                    configKey: 'hatStyle',
                    senseType: 'turban',
                    sense: react_1.default.createElement(turban_1.default, { color: config === null || config === void 0 ? void 0 : config.hatColor })
                },
                {
                    configKey: 'hatStyle',
                    senseType: 'none',
                    sense: react_1.default.createElement(icons_1.DeleteOutlined, { color: "red", style: { color: 'red', width: '30px', height: '30px' } })
                }
            ]
        },
        {
            tip: 'Eyes',
            configKey: 'eyeStyle',
            component: react_1.default.createElement(eyes_1.default, { style: config === null || config === void 0 ? void 0 : config.eyeStyle, color: "#fff" }),
            children: [
                { configKey: 'eyeStyle', senseType: 'circle', sense: react_1.default.createElement(circle_1.default, null) },
                { configKey: 'eyeStyle', senseType: 'smile', sense: react_1.default.createElement(smile_1.default, null) },
                { configKey: 'eyeStyle', senseType: 'oval', sense: react_1.default.createElement(oval_1.default, null) }
            ]
        },
        {
            tip: 'Glasses',
            configKey: 'glassesStyle',
            component: react_1.default.createElement(glasses_1.default, { style: config === null || config === void 0 ? void 0 : config.glassesStyle, color: "#fff" }),
            children: [
                {
                    configKey: 'glassesStyle',
                    senseType: 'round',
                    sense: react_1.default.createElement(round_1.default, null)
                },
                {
                    configKey: 'glassesStyle',
                    senseType: 'square',
                    sense: react_1.default.createElement(square_1.default, null)
                }
            ]
        },
        {
            tip: 'Ear',
            configKey: 'earSize',
            component: react_1.default.createElement(ear_1.default, { size: config === null || config === void 0 ? void 0 : config.earSize, color: config.faceColor }),
            children: [
                {
                    configKey: 'earSize',
                    senseType: 'small',
                    sense: react_1.default.createElement(small_1.default, { color: config === null || config === void 0 ? void 0 : config.faceColor })
                },
                {
                    configKey: 'earSize',
                    senseType: 'big',
                    sense: react_1.default.createElement(big_1.default, { color: config === null || config === void 0 ? void 0 : config.faceColor })
                }
            ]
        },
        {
            tip: 'Nose',
            configKey: 'noseStyle',
            component: react_1.default.createElement(nose_1.default, { style: config === null || config === void 0 ? void 0 : config.noseStyle, color: config === null || config === void 0 ? void 0 : config.faceColor }),
            children: [
                { configKey: 'noseStyle', senseType: 'long', sense: react_1.default.createElement(long_1.default, null) },
                { configKey: 'noseStyle', senseType: 'round', sense: react_1.default.createElement(round_2.default, null) },
                { configKey: 'noseStyle', senseType: 'short', sense: react_1.default.createElement(short_1.default, null) }
            ]
        },
        {
            tip: 'Mouth',
            configKey: 'mouthStyle',
            component: react_1.default.createElement(mouth_1.default, { style: config === null || config === void 0 ? void 0 : config.mouthStyle, color: "#fff" }),
            children: [
                { configKey: 'mouthStyle', senseType: 'laugh', sense: react_1.default.createElement(laugh_1.default, null) },
                { configKey: 'mouthStyle', senseType: 'smile', sense: react_1.default.createElement(peace_1.default, null) },
                { configKey: 'mouthStyle', senseType: 'peace', sense: react_1.default.createElement(smile_2.default, null) }
            ]
        },
        {
            tip: 'Shirt',
            configKey: 'shirtStyle',
            component: react_1.default.createElement(shirt_1.default, { style: config === null || config === void 0 ? void 0 : config.shirtStyle, color: config === null || config === void 0 ? void 0 : config.shirtColor }),
            children: [
                {
                    configKey: 'shirtStyle',
                    senseType: 'hoody',
                    sense: react_1.default.createElement(hoody_1.default, { color: config === null || config === void 0 ? void 0 : config.shirtColor, lightColor: config === null || config === void 0 ? void 0 : config.shirtColor })
                },
                {
                    configKey: 'shirtStyle',
                    senseType: 'polo',
                    sense: react_1.default.createElement(polo_1.default, { color: config === null || config === void 0 ? void 0 : config.shirtColor, lightColor: config === null || config === void 0 ? void 0 : config.shirtColor })
                },
                {
                    configKey: 'shirtStyle',
                    senseType: 'short',
                    sense: react_1.default.createElement(short_2.default, { color: config === null || config === void 0 ? void 0 : config.shirtColor })
                }
            ]
        },
        {
            tip: 'EyeBrows',
            component: react_1.default.createElement(eyebrow_1.default, { style: config === null || config === void 0 ? void 0 : config.eyeBrowStyle }),
            children: [
                {
                    configKey: 'eyeBrowStyle',
                    senseType: 'upWoman',
                    sense: react_1.default.createElement(upWoman_1.default, null)
                },
                { configKey: 'eyeBrowStyle', senseType: 'up', sense: react_1.default.createElement(up_1.default, null) }
            ]
        }
    ];
};
exports.default = FaceComponent;
//# sourceMappingURL=FaceComponent.js.map