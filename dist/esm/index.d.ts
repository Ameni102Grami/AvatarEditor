import React from 'react';
import { AvatarFullConfig } from 'react-nice-avatar';
declare const ReactAvatarEditor: ({ config, setConfig, withAvatarList }: {
    config: Required<AvatarFullConfig>;
    setConfig?: React.Dispatch<React.SetStateAction<Required<AvatarFullConfig>>>;
    withAvatarList?: boolean;
}) => React.JSX.Element;
export default ReactAvatarEditor;
