import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {Alert} from 'react-native';

import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

export const loginGoogle = async (callback) => {
  try {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    await GoogleSignin.configure({
      iosClientId:
        '403424592519-itl849g5kq9qs6eeviicfqfcps32cubu.apps.googleusercontent.com',
    });
    let result = await GoogleSignin.signIn();
    console.log('result', result)
    callback(result);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      Alert.alert('user cancelled the login flow');
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      Alert.alert('operation (e.g. sign in) is in progress already');
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      Alert.alert('play services not available or outdated');
      // play services not available or outdated
    } else {
      Alert.alert('some other error happened');
      // some other error happened
    }
  }
};

export const loginFacebook = async (callback) => {
  try {
    let result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    if (!result.isCancelled) {
      AccessToken.getCurrentAccessToken().then((data) => {
        const infoRequest = new GraphRequest(
          '/me?fields=name,first_name,last_name,picture,email',
          null,
          callback,
        );
        new GraphRequestManager().addRequest(infoRequest).start();
      });
    }
  } catch (error) {
    console.log('error', error);
    Alert.alert(error);
  }
};
