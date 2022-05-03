import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  margin,
} from '../../assets/constants/theme';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightblue,
    justifyContent: 'center',
  },
  title: {
    color: colors.black,
    textAlign: 'center',
    fontFamily: fontFamily.medium,
    fontSize: fontSize.title,
    marginBottom: margin.lg,
  },
});
