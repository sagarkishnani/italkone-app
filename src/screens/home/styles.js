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
    backgroundColor: colors.lightblue,
  },
  profileContainer: {
    marginVertical: margin.lg,
    marginHorizontal: margin.md,
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  profileName: {
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: fontSize.title,
  },
  profileMessage: {
    color: colors.black,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.text,
  },
  coursesContainer: {
    marginTop: padding.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: margin.lg,
  },
  title: {
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: fontSize.title,
  },
  seeAll: {
    color: colors.blue,
  },
});
