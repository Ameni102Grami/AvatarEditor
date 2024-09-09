import React from 'react';
import { defaultOptions } from './utils';
interface NiceAvatarProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    shape?: 'circle' | 'rounded' | 'square';
    sex?: keyof typeof defaultOptions.sex;
    faceColor?: string;
    earSize?: keyof typeof defaultOptions.earSize;
    hairColor?: string;
    hairStyle?: string[];
    hatColor?: string;
    hatStyle?: keyof typeof defaultOptions.hatStyle;
    hairColorRandom?: boolean;
    eyeStyle?: keyof typeof defaultOptions.eyeStyle;
    glassesStyle?: keyof typeof defaultOptions.glassesStyle;
    noseStyle?: keyof typeof defaultOptions.noseStyle;
    mouthStyle?: keyof typeof defaultOptions.mouthStyle;
    shirtStyle?: keyof typeof defaultOptions.shirtStyle;
    shirtColor?: string;
    bgColor?: string;
    isGradient?: boolean;
}
declare const ReactNiceAvatar: React.FC<NiceAvatarProps>;
export default ReactNiceAvatar;
