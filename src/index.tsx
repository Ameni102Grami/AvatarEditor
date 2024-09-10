import React, { useEffect } from 'react';
import { AvatarFullConfig, genConfig } from 'react-nice-avatar';
import AvatarEditor from './AvatarEditorComponents/AvatarEditor';
const ReactAvatarEditor = ({
    config = genConfig(),
    setConfig,
    withAvatarList = true
}: {
    config: Required<AvatarFullConfig>;
    setConfig?: React.Dispatch<React.SetStateAction<Required<AvatarFullConfig>>>;
    withAvatarList?: boolean;
}) => {
    useEffect(() => {
        setConfig(genConfig());
    }, []);
    const updateConfig = (key: string, value: string) => {
        config[key] = value;
        setConfig((prev) => ({ ...prev, key: value }));
    };
    return <AvatarEditor config={config ? config : genConfig()} updateConfig={updateConfig} setConfig={setConfig} withAvatarList={withAvatarList} />;
};

export default ReactAvatarEditor;
