import React from 'react';
import { AvatarFullConfig } from 'react-nice-avatar';
import AvatarEditor from './AvatarEditorComponents/AvatarEditor';
const ReactAvatarEditor = ({
    config,
    setConfig,
    updateConfig
}: {
    config: Required<AvatarFullConfig>;
    updateConfig: Function;
    setConfig?: React.Dispatch<React.SetStateAction<Required<AvatarFullConfig>>>;
}) => {
    return <AvatarEditor config={config} updateConfig={updateConfig} setConfig={setConfig} />;
};

export default ReactAvatarEditor;
