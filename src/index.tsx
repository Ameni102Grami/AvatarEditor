import React, { useState } from 'react';
import { AvatarFullConfig } from 'react-nice-avatar';
import AvatarEditor from './AvatarEditorComponents/AvatarEditor';
const ReactAvatarEditor = () => {
    const [config, setConfig] = useState<AvatarFullConfig>();
    const updateConfig = (key: string, value: string) => {
        config[key] = value;
        setConfig((prev) => ({ ...prev, key: value }));
    };
    return <AvatarEditor config={config} updateConfig={updateConfig} setConfig={setConfig} />;
};

export default ReactAvatarEditor;
