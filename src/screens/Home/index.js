import React, { Component, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from "react-native";
import { styles } from "./style";
import Toast from "react-native-simple-toast";
import { Images } from "@config/index";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default class Home extends Component {
  state = {
    number1: Math.floor(Math.random() * 16) + 5,
    number2: Math.floor(Math.random() * 16) + 5,
    score: 0,
    second: 20,
  };
  timerProps = {
    isPlaying: true,
    duration: this.state.second,
    size: 50,
    strokeWidth: 4,
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
      this.props.navigation.navigate("Loser", {
        score: this.state.score,
        stt: false,
      });
      this.setState({ score: 0 });
    }
  }

  children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    if (remainingTime === 0) {
      this.props.navigation.navigate("Loser", {
        score: this.state.score,
      });
    }
    return (
      <Text>
        {minutes}:{seconds}
      </Text>
    );
  };

  render() {
    let { name } = this.props.route.params;
    let { second, score } = this.state;
    console.log("dfs", score);
    return (
      <View style={styles.container}>
        <ImageBackground source={Images.background} style={styles.image}>
          <View style={styles.content}>
            <View style={styles.flexD}>
              <Text>Điểm: {score}</Text>
              <CountdownCircleTimer
                {...this.timerProps}
                colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                onComplete={() => {
                  return [true, 1000]; // repeat animation in 1.5 seconds
                }}
              >
                {this.children}
              </CountdownCircleTimer>
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
