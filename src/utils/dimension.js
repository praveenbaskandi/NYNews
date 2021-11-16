import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const statusbarHeight = getStatusBarHeight();
export const windowWidth = Dimensions.get('screen').width;
export const windowHeight = Dimensions.get('screen').height;
