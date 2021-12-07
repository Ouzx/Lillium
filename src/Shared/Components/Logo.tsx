import React from "react";
import { StyleSheet, Text, View, Image, ViewStyle } from "react-native";
import { Styles, Numbers } from "../../utils";

interface Props {
  containerStyle?: ViewStyle | ViewStyle[];
}

const Logo = ({ containerStyle }: Props) => {
  return (
    <View style={[styles.header, containerStyle]}>
      <Image
        style={styles.logo}
        source={require("../../../assets/Logo/lil-logo.png")}
      />
      <Text style={Styles.headingText}>lil</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    marginRight: Numbers.margin.XS,
  },
});
