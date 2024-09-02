import {NavigationProp, ParamListBase} from '@react-navigation/native';

export type INavigation = NavigationProp<ParamListBase>;

export type IBackButtonScreensGroupProp = {
  navigation: INavigation;
};
