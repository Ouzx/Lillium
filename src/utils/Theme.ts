import { StyleSheet } from "react-native";

enum Colors {
  primary = "#3369FF",
  mainBG = "#09121C",
  dark = "#070D15",
  nonActive = "#898F97",
  active = "#FFF",
  secondary = "#FF334B",
}

enum padding {
  XXS = 10,
  XS = 18,
  S = 24,
  M = 34,
  L = 40,
  XL = 50,
}

enum margin {
  S = 10,
  M = 24,
  L = 30,
  XL = 70,
}

enum font {
  S = 16,
  M = 24,
  L = 30,
}

enum radius {
  S = 16,
  M = 24,
  L = 32,
  XL = 99,
}

enum Fonts {}

enum Sizes {
  S = 14,
  M = 18,
  L = 24,
}

const Numbers = {
  padding: padding,
  margin: margin,
  font: font,
  radius: radius,
  sizes: Sizes,
};

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
  plainText: {
    color: Colors.active,
    fontSize: Numbers.font.S,
    overflow: "hidden",
  },
  comment: {
    color: Colors.nonActive,
    fontSize: Numbers.font.S,
  },
  alignRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  onCardComment: {
    color: Colors.nonActive,
    fontSize: Numbers.font.S,
    marginLeft: Numbers.margin.S,
  },
});

export { Colors, Numbers, Fonts, Styles };
