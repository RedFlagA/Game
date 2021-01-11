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
    this.props.navigation.navigate("Home", {
      flag: true,
    });
  }
  render() {
    let { score, stt } = this.props.route.params;
    return (
      <View style={styles.container}>
        <ImageBackground source={Images.background} style={styles.image}>
          <View style={styles.content}>
            {stt == false && (
              <Image source={Images.loser} style={styles.loser} />
            )}
            <Text style={styles.textScore}>
              Số điểm của bạn là: {score < 0 ? (score = 0) : score}
            </Text>
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
