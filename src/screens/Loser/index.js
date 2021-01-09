import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { styles } from "./style";
import { Images } from "@config/index";

export default class Loser extends Component {
  btnPlayAgain() {
    this.props.navigation.goBack();
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={Images.background} style={styles.image}>
          <View style={styles.content}>
            <Image source={Images.loser} style={styles.loser} />
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.btnPlayAgain()}
            >
              <Text style={styles.textBtn}>Chơi lại</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
