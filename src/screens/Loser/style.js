import { StyleSheet } from "react-native";
import { getWidth, getStatusBarHeight, getHeight } from "@common";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 30,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  loser: {
    width: getWidth(300),
    height: getHeight(100),
    resizeMode: "cover",
    marginVertical: getHeight(40),
  },
  btn: {
    backgroundColor: "#fff",
    width: "40%",
    paddingVertical: getHeight(15),
    borderRadius: getHeight(30),
    alignItems: "center",
  },
  textBtn: {
    fontSize: 15,
  },
});
