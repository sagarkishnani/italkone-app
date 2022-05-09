import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    color: colors.blue,
  },
  header: {
    flex: 1,
  },
  date: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    color: colors.black,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
