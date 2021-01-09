import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {styles} from './style';
import {InputCustom, Background} from '@components/index';
import {Images} from '@config/index';
import Toast from 'react-native-simple-toast';

export default class Home extends Component {
  state = {
    fullName: '',
  };
  btnPlay() {
    if (this.state.fullName == '') {
      Toast.show('Nhập tên đi bạn eiiiii!');
    } else {
      this.props.navigation.navigate('Home', {
        name: this.state.fullName,
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={Images.background} style={styles.image}>
          <View style={styles.content}>
            <Text style={styles.appName}>Brain Out</Text>
            <InputCustom
              label={'Nhập tên của bạn'}
              placeholder={'Tên'}
              styleGroup={styles.ViewInput}
              styleInput={styles.input}
              onChangeText={(text) => this.setState({fullName: text})}
              value={this.state.fullName}
            />
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.btnPlay()}>
                <Text style={styles.textBtn}>Chơi thôi</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
