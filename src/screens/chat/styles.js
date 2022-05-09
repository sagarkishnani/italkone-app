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
  botChat: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  userChat: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bot: {
    backgroundColor: colors.blue,
    borderRadius: 12,
    width: '60%',
    height: 40,
    marginLeft: margin.sm,
    marginTop: margin.sm,
  },
  botText: {
    color: colors.white,
    paddingLeft: padding.sm,
    paddingTop: padding.sm,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.text,
  },
  user: {
    backgroundColor: colors.gray,
    borderRadius: 12,
    width: '60%',
    height: 40,
    marginRight: margin.sm,
    marginTop: margin.sm,
  },
  userText: {
    color: colors.black,
    paddingLeft: padding.sm,
    paddingTop: padding.sm,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.text,
  },
});
