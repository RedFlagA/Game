import {View, ImageBackground, Text} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';
import {Images} from '@config/index';

export default class Background extends Component {
  render() {
    return (
      <ImageBackground
        source={Images.background}
        style={styles.image}></ImageBackground>
    );
  }
}
