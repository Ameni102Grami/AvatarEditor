import React, { useEffect } from 'react';
import ReactNiceAvatar, { AvatarFullConfig, genConfig } from 'react-nice-avatar';
import AvatarEditor from './AvatarEditorComponents/AvatarEditor';
const ReactAvatarEditor = ({
    config = genConfig(),
    setConfig,
    withAvatarList = true
}: {
    config: Required<AvatarFullConfig> & { id?: string };
    setConfig?: React.Dispatch<React.SetStateAction<Required<AvatarFullConfig>>>;
    withAvatarList?: boolean;
}) => {
    useEffect(() => {
        if (setConfig) setConfig(genConfig());
    }, []);
    const updateConfig = (key: keyof AvatarFullConfig, value: string) => {
        config[key] = value as never;
        if (setConfig) setConfig((prev) => ({ ...prev, [key]: value }));
    };

    return <AvatarEditor config={config ? config : genConfig()} updateConfig={updateConfig} setConfig={setConfig} withAvatarList={withAvatarList} />;
};
export { ReactNiceAvatar };
export default ReactAvatarEditor;
