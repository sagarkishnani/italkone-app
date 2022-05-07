import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  margin,
} from '../../../../assets/constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: margin.md,
    marginVertical: 8,
  },
  card: {
    backgroundColor: colors.lightblue,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    fontFamily: 'OpenSans-Bold',
    margin: margin.sm,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  courseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  name: {
    fontSize: fontSize.text,
    color: colors.black,
    fontFamily: fontFamily.bold,
    margin: 10,
  },
  price: {
    fontSize: fontSize.small,
    color: colors.black,
    fontFamily: fontFamily.medium,
  },
  quantity: {
    fontSize: fontSize.small,
    color: colors.blue,
    fontFamily: fontFamily.medium,
  },
});
