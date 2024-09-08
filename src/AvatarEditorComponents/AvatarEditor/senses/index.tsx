import React from 'react';
import { genConfig, defaultOptions } from './utils';
import Face from './face';
import Hair from './hair';
import Hat from './hat';
import Ear from './ear';
import Eyebrow from './eyebrow';
import Eye from './eyes';
import Glasses from './glasses';
import Nose from './nose';
import Mouth from './mouth';
import Shirt from './shirt';

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

const ReactNiceAvatar: React.FC<NiceAvatarProps> = ({ id, className, style, shape = 'circle', hairColorRandom = false, ...props }) => {
    const config = genConfig(props);
    const borderRadius = shape === 'circle' ? '100%' : shape === 'rounded' ? '6px' : 0;

    return (
        <div
            id={id}
            className={className}
            style={{
                background: config.bgColor,
                overflow: 'hidden',
                borderRadius,
                ...style
            }}
        >
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%'
                }}
            >
                <div className="face-wrapper">
                    <Face color={config.faceColor} />
                    <Hat color={config.hatColor} style={config.hatStyle} />
                    {config.hatStyle === 'none' && <Hair color={config.hairColor} style={config.hairStyle} colorRandom={hairColorRandom} />}

                    <div className="senses-wrapper">
                        <Eyebrow style={config.eyeBrowStyle} />
                        <Eye style={config.eyeStyle} />
                        <Glasses style={config.glassesStyle} />
                        <Ear color={config.faceColor} size={config.earSize} />
                        <Nose style={config.noseStyle} />
                        <Mouth style={config.mouthStyle} />
                    </div>

                    <Shirt color={config.shirtColor} style={config.shirtStyle} />
                </div>
            </div>
        </div>
    );
};

export default ReactNiceAvatar;
