import React from 'react';
import { AvatarFullConfig } from 'react-nice-avatar';
declare const ReactAvatarEditor: ({ config, setConfig, updateConfig }: {
    config: Required<AvatarFullConfig>;
    updateConfig: Function;
    setConfig?: React.Dispatch<React.SetStateAction<Required<AvatarFullConfig>>>;
}) => React.JSX.Element;
export default ReactAvatarEditor;
