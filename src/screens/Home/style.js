import {StyleSheet} from 'react-native';
import {ScreenHeight, getStatusBarHeight} from '@common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 30,
    paddingHorizontal: 15,
  },
  textNumber: {
    fontSize: 40,
    paddingTop: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 30,
  },
  btn: {
    backgroundColor: 'green',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 40,
  },
  textBtn: {
    color: '#fff',
    fontSize: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});
