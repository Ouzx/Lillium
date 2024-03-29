import React from "react";
import { StyleSheet, Text, View, Image, ViewStyle } from "react-native";
import { Numbers, Colors } from "../../utils";
import SettingsButton from "./SettingsButton";

interface Props {
  containerStyle?: ViewStyle | ViewStyle[];
}

// TODO: Add drawer for settings
const Logo = (props: Props) => {
  return (
    <View style={[styles.header, props.containerStyle]}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.logo}
          source={require("../../../assets/Logo/lil-logo.png")}
        />
        <Text style={styles.headerText}>lilium</Text>
      </View>
      <SettingsButton />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    marginRight: Numbers.margin.XS,
    height: 40,
    width: 40,
  },
  headerText: {
    fontSize: Numbers.font.S,
    color: Colors.active,
  },
});
