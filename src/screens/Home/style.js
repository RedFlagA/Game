import { StyleSheet } from "react-native";
import { ScreenHeight, getStatusBarHeight } from "@common";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 30,
    paddingHorizontal: 15,
  },
  textNumber: {
    fontSize: 40,
    paddingTop: 100,
    textAlignVertical: "center",
    textAlign: "center",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 30,
  },
  btn: {
    backgroundColor: "green",
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 40,
  },
  textBtn: {
    color: "#fff",
    fontSize: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  flexD: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progess: {
    width: "100%",
    height: 40,
    padding: 3,
    borderColor: "#FAA",
    borderWidth: 3,
    borderRadius: 30,
    marginTop: 200,
    justifyContent: "center",
  },
  inner: {
    width: "100%",
    height: 30,
    borderRadius: 15,
    backgroundColor: "green",
  },
  label: {
    fontSize: 23,
    color: "black",
    position: "absolute",
    zIndex: 1,
    alignSelf: "center",
  },
});
