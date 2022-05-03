import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  margin,
  padding,
} from '../../../assets/constants/theme';

export const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: margin.lg,
    marginHorizontal: margin.md,
    backgroundColor: colors.blue,
    borderRadius: 20,
  },
  buttonText: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.button,
    color: colors.white,
    padding: padding.md,
    textAlign: 'center',
  },
});
