import {Platform} from 'react-native';

export const isWeb = Platform.OS === 'web';
export const isNative = Platform.OS === 'ios' || Platform.OS === 'android';
export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';
