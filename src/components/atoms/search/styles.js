import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  margin,
  padding,
} from '../../../../assets/constants/theme';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    marginTop: margin.md,
    paddingHorizontal: padding.md,
    marginHorizontal: margin.md,
    backgroundColor: colors.white,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    color: colors.black,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.text,
  },
});
