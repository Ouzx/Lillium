import { StyleSheet, TextProps } from "react-native";

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
  XS = 10,
  S = 16,
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
  MINI_IMAGE_WIDTH = 147,
  MINI_IMAGE_HEIGHT = 136,
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
  subHeadingText: {
    fontSize: Numbers.font.M,
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
  onCardComment: {
    color: Colors.nonActive,
    fontSize: Numbers.font.S,
    marginLeft: Numbers.margin.XS,
    width: "100%",
  },
  onCardActiveComment: {
    color: Colors.active,
    fontSize: Numbers.font.S,
    marginLeft: Numbers.margin.XS,
    width: "100%",
  },

  alignRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  lilCardSquareM: {
    borderRadius: Numbers.radius.M,
    borderBottomRightRadius: 0,
  },
  lilCardSquareS: {
    borderRadius: Numbers.radius.S,
    borderBottomRightRadius: 0,
  },
});

const TextWrapper: TextProps = {
  numberOfLines: 2,
  ellipsizeMode: "tail",
};

export { Colors, Numbers, Fonts, Styles, Sizes, TextWrapper };
