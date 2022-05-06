import {StyleSheet, Dimensions} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  margin,
  padding,
} from '../../../assets/constants/theme';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageContainer: {
    height: height / 2,
    width: '100%',
  },
  icon: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  courseInfo: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  price: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.text,
    color: colors.black,
  },
  name: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.subtitle,
    color: colors.black,
  },
  type: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.text,
    color: colors.darkgray,
    paddingBottom: 10,
  },
  description: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
    color: colors.black,
  },
  buttonContainer: {
    marginTop: margin.lg,
  },
  button: {
    backgroundColor: colors.blue,
    padding: padding.sm,
    marginHorizontal: margin.md,
    borderRadius: 12,
  },
  buttonText: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.button,
    color: colors.white,
    textAlign: 'center',
  },
});
