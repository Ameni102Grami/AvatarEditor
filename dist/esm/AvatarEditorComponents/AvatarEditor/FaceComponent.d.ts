import { AvatarFullConfig } from 'react-nice-avatar';
import React from 'react';
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
