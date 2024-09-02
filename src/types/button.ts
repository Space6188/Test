import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type IButton = {
  children: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};
