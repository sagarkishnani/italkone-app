import {StyleSheet} from 'react-native';
import {colors, margin, padding} from '../../../../assets/constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    color: colors.black,
    height: 60,
    marginTop: margin.md,
    paddingHorizontal: padding.md,
    marginHorizontal: margin.md,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
});
