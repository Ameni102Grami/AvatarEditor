import { Flex } from 'antd';
import { useEffect, useState } from 'react';
import ReactNiceAvatar, { AvatarFullConfig } from 'react-nice-avatar';
import AvatarList from '../../AvatarList';
import FaceComponent from './FaceComponent';
import SectionWrapper from './SectionWrapper';
import React from 'react';

const AvatarEditor = ({
    config,
    updateConfig,
    setConfig
}: {
    config: Required<AvatarFullConfig>;
    updateConfig: Function;
    setConfig?: React.Dispatch<React.SetStateAction<Required<AvatarFullConfig>>>;
}) => {
    const switchConfig = (type: string, currentOpt: string | undefined) => {
        updateConfig(type, currentOpt);
    };

    const [showSensesStyle, setShowSensesStyle] = useState<any>();
    const components = FaceComponent(config);
    const [avatarBg, setAvatarBg] = useState<string | null | undefined>(config?.bgColor);
    useEffect(() => {
        setAvatarBg(config.bgColor);
    }, [config]);

    const extractColorsFromGradient = (gradient: string | null | undefined) => {
        const colorRegex = /#([0-9a-f]{3}|[0-9a-f]{6})\b/gi;
        return gradient?.match(colorRegex);
    };

    return (
        <>
            <Flex
                align="center"
                justify="center"
                vertical
                gap={8}
                style={{
                    background: `linear-gradient(45deg, ${extractColorsFromGradient(avatarBg)[0]}, #ffffff)`,
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px 16px 0px 0px'
                }}
            >
                <span className="select-avatar-title">'Change your avatar'</span>
                <ReactNiceAvatar {...config} style={{ width: '10rem', height: '10rem' }} />
                <Flex align="center" justify="center" style={{ maxWidth: '100%' }}>
                    <AvatarList
                        config={config}
                        selectConfig={(newConfig: Required<AvatarFullConfig>) => {
                            setConfig(newConfig);
                            setShowSensesStyle((prev: Required<AvatarFullConfig>) => ({
                                ...prev,
                                children: []
                            }));
                        }}
                    />
                </Flex>
            </Flex>
            <span className="select-avatar-title">{t('Customize your avatar')}</span>
            <Flex align="center" justify="center" wrap="wrap" gap={10}>
                {showSensesStyle &&
                    showSensesStyle?.children.map((el:any, idx: number) => (
                        <Flex key={idx} className="avatar-sense" onClick={() => switchConfig(el.configKey, el.senseType)}>
                            {el.sense}
                        </Flex>
                    ))}
            </Flex>
            <div className="AvatarEditor rounded-full px-3 py-2 gap-10 flex items-center">
                {components.map((item, index) => (
                    <SectionWrapper key={index} className="w-8 h-8 rounded-full p-2 mx-2" tip={item.tip} switchConfig={() => setShowSensesStyle(item)}>
                        {item.component}
                    </SectionWrapper>
                ))}
            </div>
        </>
    );
};

export default AvatarEditor;
