import React, { Component } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./style";
import Toast from "react-native-simple-toast";
import { Background } from "@components/index";
import { Images } from "@config/index";

export default class Home extends Component {
  state = {
    number1: Math.floor(Math.random() * 16) + 5,
    number2: Math.floor(Math.random() * 16) + 5,
    score: 0,
  };
  renderText() {
    const rendered = (
      <Text>
        {this.state.number1} {"<"} {this.state.number2}
      </Text>
    );
    return rendered;
  }
  check(isStatus) {
    let { number1, number2, score } = this.state;
    console.log("", number1, number2);
    const total = number1 < number2;
    if (total == isStatus) {
      Toast.show("Bạn đã trả lời đúng!");
      this.setState({ score: score + 1 });
    } else {
      Toast.show("Sai rồi");
      this.setState({ score: score - 1 });
    }

    this.setState({
      number1: Math.floor(Math.random() * 16) + 5,
      number2: Math.floor(Math.random() * 16) + 5,
    });
  }
  componentDidUpdate() {
    if (this.state.score < 0) {
      Toast.show("Thua cuộc");
      this.setState({ score: 0 });
      this.props.navigation.navigate("Loser");
    }
  }

  render() {
    let { name } = this.props.route.params;
    return (
      <View style={styles.container}>
        <ImageBackground source={Images.background} style={styles.image}>
          <View style={styles.content}>
            <View style={styles.flexD}>
              <Text>Điểm: {this.state.score}</Text>
              <Text>Tên: {name !== null && name}</Text>
            </View>

            <Text style={styles.textNumber}>{this.renderText()}</Text>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: "red" }]}
              onPress={() => this.check(false)}
            >
              <Text style={styles.textBtn}>Sai</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.check(true)}
            >
              <Text style={styles.textBtn}>Đúng</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
