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
    numberTotal: Math.floor(Math.random() * 100) + 1,
    score: 0,
    second: 120,
    sign: null,
    level: 3,
    currentQuestion: 0,
  };
  data = [
    {
      question: "Nguyenn anh dep trai",
      answer: true,
    },
    {
      question: "sfvshvfshajvf",
      answer: false,
    },
    {
      question: "how do like that",
      answer: false,
    },
    {
      question: "chan cha buon noi",
      answer: true,
    },
  ];
  timerProps = {
    isPlaying: true,
    duration: this.state.second,
    size: 50,
    strokeWidth: 4,
  };
  renderText() {
    let {
      number1,
      number2,
      sign,
      level,
      numberTotal,
      currentQuestion,
    } = this.state;
    return (
      <View>
        {level == 1 && (
          <Text style={styles.textNumber}>
            {number1} {sign} {number2}
          </Text>
        )}
        {level == 2 && (
          <Text style={styles.textNumber}>
            {number1} {sign} {number2} {"="} {numberTotal}
          </Text>
        )}
        {level == 3 && (
          <Text style={styles.textNumber}>
            {this.data[currentQuestion].question}
          </Text>
        )}
      </View>
    );
  }

  async check(isStatus) {
    let { score, level, currentQuestion } = this.state;
    let total = this.checkCase();

    if (total == isStatus) {
      Toast.show("Bạn đã trả lời đúng!");
      await this.setState({ score: score + 1 });
    } else {
      Toast.show("Sai rồi");
      await this.setState({ score: score - 1 });
    }

    if (level === 3) {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < this.data.length) {
        this.setState({ currentQuestion: nextQuestion });
      }
    }

    this.setState({
      number1: Math.floor(Math.random() * 16) + 5,
      number2: Math.floor(Math.random() * 16) + 5,
      numberTotal: Math.floor(Math.random() * 100) + 1,
      sign: this.randomSign(1),
    });

    this.checkLevel();
  }

  checkCase() {
    let { number1, number2, sign, level, numberTotal } = this.state;
    let total;
    if (level == 1) {
      switch (sign) {
        case "=":
          total = number1 == number2;
          break;
        case "<":
          total = number1 < number2;
          break;
        case ">":
          total = number1 > number2;
          break;
        default:
          total = "nguyuen anh dep trai";
      }
    } else if (level == 2) {
      switch (sign) {
        case "+":
          total = number1 + number2 == numberTotal;
          break;
        case "-":
          total = number1 - number2 == numberTotal;
          break;
        case "x":
          total = number1 * number2 == numberTotal;
          break;
        case "x":
          total = number1 / number2 == numberTotal;
          break;
        default:
          total = "nguyuen anh dep trai";
      }
    } else if (level == 3) {
      for (var i = 0; i <= this.data.length; i++) {
        total = this.data[this.state.currentQuestion].answer;
      }
    }
    return total;
  }

  checkLevel() {
    let { score, level } = this.state;
    if (score < 0) {
      Toast.show("Thua cuộc");
      this.props.navigation.navigate("Loser", {
        score: score,
        stt: false,
      });
      this.setState({ score: 0, currentQuestion: 0 });
    } else if (score > 2) {
      Toast.show("Qua level" + level + "rồi, chơi tiếp thôi");
      this.setState({ level: level + 1 });
    }
  }

  randomSign(length) {
    var result = "";
    var characters = this.state.level == 1 ? "><=" : "+-x:";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  componentDidMount() {
    this.randomSign(1);
    this.setState({ sign: this.randomSign(1) });
  }

  children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    if (remainingTime === 0) {
      // this.props.navigation.navigate("Loser", {
      //   score: this.state.score,
      // });
    }
    return (
      <Text>
        {minutes}:{seconds}
      </Text>
    );
  };

  render() {
    let { name } = this.props.route.params;
    let { second, score, level } = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground source={Images.background} style={styles.image}>
          <View style={styles.content}>
            <View style={styles.flexD}>
              <View>
                <Text>Điểm: {score}</Text>
                <Text>Level: {level}</Text>
              </View>

              <CountdownCircleTimer
                {...this.timerProps}
                colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                onComplete={() => {
                  return [true, 1500]; // repeat animation in 1.5 seconds
                }}
              >
                {this.children}
              </CountdownCircleTimer>
              <Text>Tên: {name !== null && name}</Text>
            </View>
            {this.renderText()}
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
