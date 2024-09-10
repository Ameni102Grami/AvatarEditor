import React from 'react';
import { AvatarFullConfig } from 'react-nice-avatar';
declare const AvatarEditor: ({ config, updateConfig, setConfig, withAvatarList }: {
    config: Required<AvatarFullConfig>;
    updateConfig: Function;
    setConfig?: React.Dispatch<React.SetStateAction<Required<AvatarFullConfig>>>;
    withAvatarList?: boolean;
}) => React.JSX.Element;
export default AvatarEditor;
