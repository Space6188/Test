import {StyleSheet, View} from 'react-native';
import {IWrapperProps} from '../../types/wrapper';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export const ScreenWrapper = ({children, style}: IWrapperProps) => {
  return <View style={[styles.box, style]}>{children}</View>;
};
