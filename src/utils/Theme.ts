import { StyleSheet } from "react-native";

const Colors = {
  mainBG: "#09121C",
  nonActive: "#898F97",
  active: "#FFF",
  primary: "#3369FF",
  secondary: "#FF334B",
};
const Numbers = {
  padding: {
    XXS: 10,
    XS: 18,
    S: 24,
    M: 34,
    L: 40,
    XL: 50,
  },
  margin: {
    S: 10,
    M: 24,
    L: 30,
    XL: 70,
  },
  font: {
    S: 16,
    M: 24,
    L: 30,
  },
  radius: {
    S: 16,
    M: 24,
    L: 32,
    XL: 99,
  },
};
const Fonts = {};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBG,
  },
  imageContainer: {
    flex: 1,
    padding: Numbers.padding.M,
    paddingTop: Numbers.padding.M,
  },
  headingText: {
    fontSize: Numbers.font.L,
    fontWeight: "bold",
    color: "#fff",
  },
  comment: {
    color: Colors.nonActive,
    fontSize: Numbers.font.S,
  },
});

export { Colors, Numbers, Fonts, Styles };
