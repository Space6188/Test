import {Dimensions} from 'react-native';

export enum SCREENS {
  Home = 'Home',
  BottomRouter = 'BottomRouter',
  List = 'List',
  UserDetails = 'UserDetails',
}

export enum COLORS {
  black = '#000000',
  white = '#FFFFFF',
}

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('screen');
