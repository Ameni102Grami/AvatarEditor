import React from 'react';
import type { AvatarFullConfig } from 'react-nice-avatar';
interface AvatarListProps {
    selectConfig: (item: Required<AvatarFullConfig>) => void;
    config: Required<AvatarFullConfig>;
}
declare const AvatarList: React.FC<AvatarListProps>;
export default AvatarList;
