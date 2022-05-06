import {StyleSheet, Dimensions} from 'react-native';
import {colors, fontFamily, padding} from '../../../../assets/constants/theme';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  course: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    marginVertical: 10,
    height: 200,
    width: width / 2.5,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  courseInfo: {
    backgroundColor: colors.white,
    paddingBottom: padding.md,
  },
  title: {
    color: colors.black,
    fontFamily: fontFamily.medium,
    paddingLeft: padding.sm,
  },
  subtitle: {
    color: colors.gray,
    paddingLeft: padding.sm,
    paddingTop: padding.sm,
  },
});
