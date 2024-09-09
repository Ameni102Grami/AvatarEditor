import React from 'react';
import { AvatarFullConfig } from 'react-nice-avatar';
declare const AvatarEditor: ({ config, updateConfig, setConfig }: {
    config: Required<AvatarFullConfig>;
    updateConfig: Function;
    setConfig?: React.Dispatch<React.SetStateAction<Required<AvatarFullConfig>>>;
}) => React.JSX.Element;
export default AvatarEditor;
