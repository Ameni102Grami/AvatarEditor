import React from 'react';
import { AvatarFullConfig } from 'react-nice-avatar';
declare const FaceComponent: (config: AvatarFullConfig) => ({
    tip: string;
    configKey: string;
    component: React.JSX.Element;
    children: {
        configKey: string;
        senseType: string;
        sense: React.JSX.Element;
    }[];
} | {
    tip: string;
    component: React.JSX.Element;
    children: {
        configKey: string;
        senseType: string;
        sense: React.JSX.Element;
    }[];
    configKey?: undefined;
})[];
export default FaceComponent;
