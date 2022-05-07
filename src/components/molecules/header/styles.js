import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  margin,
} from '../../../../assets/constants/theme';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: margin.md,
  },
  title: {
    color: colors.blue,
    fontFamily: fontFamily.bold,
    fontSize: fontSize.subtitle,
  },
});
