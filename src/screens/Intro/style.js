import {StyleSheet} from 'react-native';
import {getHeight, getStatusBarHeight} from '@common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 30,
    paddingHorizontal: 15,
  },
  ViewInput: {
    backgroundColor: '#fff',
    borderRadius: getHeight(30),
    color: '#000',
    paddingVertical: 5,
  },
  input: {
    borderBottomWidth: 0,
    color: '#000',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  appName: {
    fontSize: getHeight(50),
    color: '#000',
    fontWeight: 'bold',
    paddingVertical: getHeight(20),
    paddingBottom: 60,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#fff',
    width: '40%',
    paddingVertical: getHeight(15),
    borderRadius: getHeight(30),
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 15,
  },
});
