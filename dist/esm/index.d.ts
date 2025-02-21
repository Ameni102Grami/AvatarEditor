import React from 'react';
import ReactNiceAvatar, { AvatarFullConfig } from 'react-nice-avatar';
declare const ReactAvatarEditor: ({ config, setConfig, withAvatarList }: {
    config: Required<AvatarFullConfig> & {
        id?: string;
    };
    setConfig?: React.Dispatch<React.SetStateAction<Required<AvatarFullConfig>>>;
    withAvatarList?: boolean;
}) => React.JSX.Element;
export { ReactNiceAvatar };
export default ReactAvatarEditor;
