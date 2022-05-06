import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  margin,
  padding,
} from '../../../assets/constants/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightblue,
  },
  title: {
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: fontSize.title,
    marginHorizontal: margin.lg,
    marginVertical: padding.md,
  },
});
