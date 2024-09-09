"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genConfig = exports.defaultOptions = exports.pickRandomFromList = void 0;
const pickRandomFromList = (data, { avoidList = [], usually = [] } = {}) => {
    // Filter out avoid options
    const avoidSet = new Set(avoidList.filter((item) => Boolean(item)));
    let myData = data.filter((item) => !avoidSet.has(item));
    // Increase selecting possibility of usually options
    const usuallyData = usually.filter(Boolean).reduce((acc, cur) => acc.concat(new Array(15).fill(cur)), []);
    myData = myData.concat(usuallyData);
    // Pick randon one from the list
    const amount = myData.length;
    const randomIdx = Math.floor(Math.random() * amount);
    return myData[randomIdx];
};
exports.pickRandomFromList = pickRandomFromList;
exports.defaultOptions = {
    sex: ['man', 'woman'],
    faceColor: ['#F9C9B6', '#AC6651'],
    earSize: ['small', 'big'],
    hairColor: ['#000', '#fff', '#77311D', '#FC909F', '#D2EFF3', '#506AF4', '#F48150'],
    hairStyleMan: ['normal', 'thick', 'mohawk'],
    hairStyleWoman: ['normal', 'womanLong', 'womanShort'],
    hatColor: ['#000', '#fff', '#77311D', '#FC909F', '#D2EFF3', '#506AF4', '#F48150'],
    hatStyle: ['beanie', 'turban', 'none'],
    eyeBrowWoman: ['up', 'upWoman'],
    eyeStyle: ['circle', 'oval', 'smile'],
    glassesStyle: ['round', 'square', 'none'],
    noseStyle: ['short', 'long', 'round'],
    mouthStyle: ['laugh', 'smile', 'peace'],
    shirtStyle: ['hoody', 'short', 'polo'],
    shirtColor: ['#9287FF', '#6BD9E9', '#FC909F', '#F4D150', '#77311D'],
    bgColor: ['#9287FF', '#6BD9E9', '#FC909F', '#F4D150', '#E0DDFF', '#D2EFF3', '#FFEDEF', '#FFEBA4', '#506AF4', '#F48150', '#74D153'],
    gradientBgColor: [
        'linear-gradient(45deg, #178bff 0%, #ff6868 100%)',
        'linear-gradient(45deg, #176fff 0%, #68ffef 100%)',
        'linear-gradient(45deg, #ff1717 0%, #ffd368 100%)',
        'linear-gradient(90deg, #36cd1c 0%, #68deff 100%)',
        'linear-gradient(45deg, #3e1ccd 0%, #ff6871 100%)',
        'linear-gradient(45deg, #1729ff 0%, #ff56f7 100%)',
        'linear-gradient(45deg, #56b5f0 0%, #45ccb5 100%)'
    ]
};
const stringToHashCode = (str) => {
    if (str.length === 0)
        return 0;
    let hash = 0;
    let char;
    for (let i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
};
const pickByHashCode = (code, type, opts) => {
    const avoidList = (opts && opts.avoidList) || [];
    const usually = (opts && opts.usually) || [];
    // Filter out avoid options
    const avoidSet = new Set(avoidList);
    let myDefaultOptions = exports.defaultOptions[type].filter((item) => !avoidSet.has(item));
    // Increase selecting possibility of usually options
    myDefaultOptions = usually
        .filter(Boolean)
        .reduce((acc, cur) => acc.concat(new Array(15).fill(cur)), [])
        .concat(myDefaultOptions);
    const index = code % myDefaultOptions.length;
    return myDefaultOptions[index];
};
const genConfig = (userConfig = {}) => {
    const isSeedConfig = typeof userConfig === 'string';
    const hashCode = (isSeedConfig && stringToHashCode(userConfig)) || 0;
    const response = {};
    response.sex = isSeedConfig ? pickByHashCode(hashCode, 'sex') : userConfig.sex || (0, exports.pickRandomFromList)(exports.defaultOptions.sex);
    response.faceColor = isSeedConfig ? pickByHashCode(hashCode, 'faceColor') : userConfig.faceColor || (0, exports.pickRandomFromList)(exports.defaultOptions.faceColor);
    response.earSize = isSeedConfig ? pickByHashCode(hashCode, 'earSize') : userConfig.earSize || (0, exports.pickRandomFromList)(exports.defaultOptions.earSize);
    response.eyeStyle = isSeedConfig ? pickByHashCode(hashCode, 'eyeStyle') : userConfig.eyeStyle || (0, exports.pickRandomFromList)(exports.defaultOptions.eyeStyle);
    response.noseStyle = isSeedConfig ? pickByHashCode(hashCode, 'noseStyle') : userConfig.noseStyle || (0, exports.pickRandomFromList)(exports.defaultOptions.noseStyle);
    response.mouthStyle = isSeedConfig ? pickByHashCode(hashCode, 'mouthStyle') : userConfig.mouthStyle || (0, exports.pickRandomFromList)(exports.defaultOptions.mouthStyle);
    response.shirtStyle = isSeedConfig ? pickByHashCode(hashCode, 'shirtStyle') : userConfig.shirtStyle || (0, exports.pickRandomFromList)(exports.defaultOptions.shirtStyle);
    response.glassesStyle = isSeedConfig
        ? pickByHashCode(hashCode, 'glassesStyle', {
            usually: ['none']
        })
        : userConfig.glassesStyle || (0, exports.pickRandomFromList)(exports.defaultOptions.glassesStyle, { usually: ['none'] });
    // Hair
    let hairColorAvoidList = [];
    let hairColorUsually = [];
    if (isSeedConfig || !userConfig.hairColor) {
        switch (response.sex) {
            case 'woman': {
                hairColorAvoidList = (response.faceColor === exports.defaultOptions.faceColor[1] && ['#77311D']) || [];
                break;
            }
            case 'man': {
                hairColorUsually = ['#000'];
            }
        }
    }
    response.hairColor = isSeedConfig
        ? pickByHashCode(hashCode, 'hairColor', {
            avoidList: hairColorAvoidList,
            usually: hairColorUsually
        })
        : userConfig.hairColor ||
            (0, exports.pickRandomFromList)(exports.defaultOptions.hairColor, {
                avoidList: hairColorAvoidList,
                usually: hairColorUsually
            });
    if (isSeedConfig || !userConfig.hairStyle) {
        switch (response.sex) {
            case 'man': {
                response.hairStyle = isSeedConfig
                    ? pickByHashCode(hashCode, 'hairStyleMan', {
                        usually: ['normal', 'thick']
                    })
                    : (0, exports.pickRandomFromList)(exports.defaultOptions.hairStyleMan, {
                        usually: ['normal', 'thick']
                    });
                break;
            }
            case 'woman': {
                response.hairStyle = isSeedConfig ? pickByHashCode(hashCode, 'hairStyleWoman') : (0, exports.pickRandomFromList)(exports.defaultOptions.hairStyleWoman);
                break;
            }
        }
    }
    else {
        response.hairStyle = userConfig.hairStyle;
    }
    // Hat
    response.hatStyle = isSeedConfig
        ? pickByHashCode(hashCode, 'hatStyle', { usually: ['none'] })
        : userConfig.hatStyle || (0, exports.pickRandomFromList)(exports.defaultOptions.hatStyle, { usually: ['none'] });
    response.hatColor = isSeedConfig ? pickByHashCode(hashCode, 'hatColor') : userConfig.hatColor || (0, exports.pickRandomFromList)(exports.defaultOptions.hatColor);
    const _hairOrHatColor = (response.hatStyle === 'none' && response.hairColor) || response.hatColor;
    // Eyebrow
    if (!isSeedConfig && userConfig.eyeBrowStyle) {
        response.eyeBrowStyle = userConfig.eyeBrowStyle;
    }
    else {
        response.eyeBrowStyle = response.sex === 'woman' ? (isSeedConfig ? pickByHashCode(hashCode, 'eyeBrowWoman') : (0, exports.pickRandomFromList)(exports.defaultOptions.eyeBrowWoman)) : 'up';
    }
    // Shirt color
    response.shirtColor = isSeedConfig
        ? pickByHashCode(hashCode, 'shirtColor', { avoidList: [_hairOrHatColor] })
        : userConfig.shirtColor ||
            (0, exports.pickRandomFromList)(exports.defaultOptions.shirtColor, {
                avoidList: [_hairOrHatColor]
            });
    // Background color
    if (!isSeedConfig && userConfig.isGradient) {
        response.bgColor = userConfig.bgColor || (0, exports.pickRandomFromList)(exports.defaultOptions.gradientBgColor);
    }
    else {
        response.bgColor = isSeedConfig
            ? pickByHashCode(hashCode, 'bgColor', {
                avoidList: [_hairOrHatColor, response.shirtColor]
            })
            : userConfig.bgColor ||
                (0, exports.pickRandomFromList)(exports.defaultOptions.bgColor, {
                    avoidList: [_hairOrHatColor, response.shirtColor]
                });
    }
    return response;
};
exports.genConfig = genConfig;
//# sourceMappingURL=utils.js.map