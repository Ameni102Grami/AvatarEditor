import React from 'react';
import { AvatarFullConfig } from 'react-nice-avatar';

import Face from './senses/face';
import Hair from './senses/hair';
import Hat from './senses/hat';
import Eyes from './senses/eyes';
import Glasses from './senses/glasses';
import Ear from './senses/ear';
import Nose from './senses/nose';
import Mouth from './senses/mouth';
import Shirt from './senses/shirt';
import Thick from './senses/hair/thick';
import HairMohawk from './senses/hair/mohawk';
import HairWomanLong from './senses/hair/womanLong';
import HairWomanShort from './senses/hair/womanShort';
import HairNormal from './senses/hair/normal';
import HatBeanie from './senses/hat/beanie';
import Eyebrow from './senses/eyebrow';
import HatTurban from './senses/hat/turban';
import EyesSmile from './senses/eyes/smile';
import EyesOval from './senses/eyes/oval';
import CircleEyes from './senses/eyes/circle';
import GlassesRound from './senses/glasses/round';
import GlassesSquare from './senses/glasses/square';
import EarSmall from './senses/ear/small';
import EarBig from './senses/ear/big';
import NoseLong from './senses/nose/long';
import NoseRound from './senses/nose/round';
import NoseShort from './senses/nose/short';
import MouthLaugh from './senses/mouth/laugh';
import MouthPeace from './senses/mouth/peace';
import MouthSmile from './senses/mouth/smile';
import ShirtHoody from './senses/shirt/hoody';
import ShirtPolo from './senses/shirt/polo';
import ShirtShort from './senses/shirt/short';
import EyebrowUp from './senses/eyebrow/up';
import EyebrowUpWoman from './senses/eyebrow/upWoman';
import { DeleteOutlined } from '@ant-design/icons';

const FaceComponent = (config: AvatarFullConfig) => {
    return [
        {
            tip: 'Face',
            configKey: 'faceColor',
            component: <Face color={config?.faceColor} />,
            children: [
                {
                    configKey: 'faceColor',
                    senseType: '#A67B5B',
                    sense: <Face color={'#A67B5B'} />
                },
                {
                    configKey: 'faceColor',
                    senseType: '#F8C794',
                    sense: <Face color={'#F8C794'} />
                },
                {
                    configKey: 'faceColor',
                    senseType: '#F7DED0',
                    sense: <Face color={'#F7DED0'} />
                },
                {
                    configKey: 'faceColor',
                    senseType: '#F8C9B6',
                    sense: <Face color={'#F7DED0'} />
                }
            ]
        },
        {
            tip: 'Hair',
            configKey: 'hairStyle',
            component: <Hair style={config?.hairStyle} color={config.hairColor} />,
            children: [
                {
                    configKey: 'hairStyle',
                    senseType: 'thick',
                    sense: <Thick color={config?.hairColor} />
                },
                {
                    configKey: 'hairStyle',
                    senseType: 'mohawk',
                    sense: <HairMohawk color={config?.hairColor} />
                },
                {
                    configKey: 'hairStyle',
                    senseType: 'womanLong',
                    sense: <HairWomanLong color={config?.hairColor} />
                },
                {
                    configKey: 'hairStyle',
                    senseType: 'womanShort',
                    sense: <HairWomanShort color={config?.hairColor} />
                },
                {
                    configKey: 'hairStyle',
                    senseType: 'hairNormal',
                    sense: <HairNormal color={config?.hairColor} />
                }
            ]
        },
        {
            tip: 'Hat',
            configKey: 'hatStyle',
            component: <Hat style={config?.hatStyle} color={config?.hatColor} />,
            children: [
                {
                    configKey: 'hatStyle',
                    senseType: 'beanie',
                    sense: <HatBeanie color={config?.hatColor} />
                },
                {
                    configKey: 'hatStyle',
                    senseType: 'turban',
                    sense: <HatTurban color={config?.hatColor} />
                },
                {
                    configKey: 'hatStyle',
                    senseType: 'none',
                    sense: <DeleteOutlined color="red" style={{ color: 'red', width: '30px', height: '30px' }} />
                }
            ]
        },
        {
            tip: 'Eyes',
            configKey: 'eyeStyle',
            component: <Eyes style={config?.eyeStyle} color="#fff" />,
            children: [
                { configKey: 'eyeStyle', senseType: 'circle', sense: <CircleEyes /> },
                { configKey: 'eyeStyle', senseType: 'smile', sense: <EyesSmile /> },
                { configKey: 'eyeStyle', senseType: 'oval', sense: <EyesOval /> }
            ]
        },
        {
            tip: 'Glasses',
            configKey: 'glassesStyle',
            component: <Glasses style={config?.glassesStyle} color="#fff" />,
            children: [
                {
                    configKey: 'glassesStyle',
                    senseType: 'round',
                    sense: <GlassesRound />
                },
                {
                    configKey: 'glassesStyle',
                    senseType: 'square',
                    sense: <GlassesSquare />
                }
            ]
        },
        {
            tip: 'Ear',
            configKey: 'earSize',
            component: <Ear size={config?.earSize} color={config.faceColor} />,
            children: [
                {
                    configKey: 'earSize',
                    senseType: 'small',
                    sense: <EarSmall color={config?.faceColor} />
                },
                {
                    configKey: 'earSize',
                    senseType: 'big',
                    sense: <EarBig color={config?.faceColor} />
                }
            ]
        },
        {
            tip: 'Nose',
            configKey: 'noseStyle',
            component: <Nose style={config?.noseStyle} color={config?.faceColor} />,
            children: [
                { configKey: 'noseStyle', senseType: 'long', sense: <NoseLong /> },
                { configKey: 'noseStyle', senseType: 'round', sense: <NoseRound /> },
                { configKey: 'noseStyle', senseType: 'short', sense: <NoseShort /> }
            ]
        },
        {
            tip: 'Mouth',
            configKey: 'mouthStyle',
            component: <Mouth style={config?.mouthStyle} color="#fff" />,
            children: [
                { configKey: 'mouthStyle', senseType: 'laugh', sense: <MouthLaugh /> },
                { configKey: 'mouthStyle', senseType: 'smile', sense: <MouthPeace /> },
                { configKey: 'mouthStyle', senseType: 'peace', sense: <MouthSmile /> }
            ]
        },
        {
            tip: 'Shirt',
            configKey: 'shirtStyle',
            component: <Shirt style={config?.shirtStyle} color={config?.shirtColor} />,
            children: [
                {
                    configKey: 'shirtStyle',
                    senseType: 'hoody',
                    sense: <ShirtHoody color={config?.shirtColor} lightColor={config?.shirtColor} />
                },
                {
                    configKey: 'shirtStyle',
                    senseType: 'polo',
                    sense: <ShirtPolo color={config?.shirtColor} lightColor={config?.shirtColor} />
                },
                {
                    configKey: 'shirtStyle',
                    senseType: 'short',
                    sense: <ShirtShort color={config?.shirtColor} />
                }
            ]
        },
        {
            tip: 'EyeBrows',
            component: <Eyebrow style={config?.eyeBrowStyle} />,
            children: [
                {
                    configKey: 'eyeBrowStyle',
                    senseType: 'upWoman',
                    sense: <EyebrowUpWoman />
                },
                { configKey: 'eyeBrowStyle', senseType: 'up', sense: <EyebrowUp /> }
            ]
        }
    ];
};

export default FaceComponent;
