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
    flex: 1,
    backgroundColor: colors.white,
  },
  list: {
    flex: 1,
  },
  footer: {
    flex: 1,
    flexGrow: 0.3,
    borderRadius: 12,
    borderTopWidth: 1,
    borderTopColor: colors.gray,
    padding: padding.md,
  },
  deliveryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  delivery: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.small,
    color: colors.blue,
  },
  deliveryPrice: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.small,
    color: colors.blue,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: padding.sm,
  },
  total: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.text,
    color: colors.blue,
  },
  totalPrice: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.small,
    color: colors.blue,
  },
  button: {
    backgroundColor: colors.blue,
    padding: padding.sm,
    marginHorizontal: margin.md,
    borderRadius: 12,
    marginTop: margin.md,
  },
  buttonText: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.button,
    color: colors.white,
    textAlign: 'center',
  },
});
