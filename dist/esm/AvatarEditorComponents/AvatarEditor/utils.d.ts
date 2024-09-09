import { GenConfigFunc, Sex, EarSize, HairStyleMan, HairStyleWoman, HatStyle, EyeStyle, GlassesStyle, NoseStyle, MouthStyle, ShirtStyle, EyeBrowStyle } from './types';
/**
 * Pick random one from the list
 */
interface PickRandomOpt<T> {
    avoidList?: T[];
    usually?: T[];
}
type PickRandomFromList = <T>(data: T[], opt?: PickRandomOpt<T | undefined>) => T;
export declare const pickRandomFromList: PickRandomFromList;
/**
 * Gennerate avatar configurations
 */
interface DefaultOptions {
    sex: Sex[];
    faceColor: string[];
    earSize: EarSize[];
    hairColor: string[];
    hairStyleMan: HairStyleMan[];
    hairStyleWoman: HairStyleWoman[];
    hatColor: string[];
    hatStyle: HatStyle[];
    eyeBrowWoman: EyeBrowStyle[];
    eyeStyle: EyeStyle[];
    glassesStyle: GlassesStyle[];
    noseStyle: NoseStyle[];
    mouthStyle: MouthStyle[];
    shirtStyle: ShirtStyle[];
    shirtColor: string[];
    bgColor: string[];
    gradientBgColor: string[];
}
export declare const defaultOptions: DefaultOptions;
export declare const genConfig: GenConfigFunc;
export {};
