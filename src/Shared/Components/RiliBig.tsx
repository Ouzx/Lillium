import React from "react";
import { StyleSheet, TouchableOpacity, Image, ViewStyle } from "react-native";

import { Numbers } from "../../utils";

interface Props {
  style?: ViewStyle | ViewStyle[];
  onPress?: () => void;
}

const RiliBig = (props: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}
    >
      <Image source={require("../../../assets/img/Rili/RiliBig.png")} />
    </TouchableOpacity>
  );
};

export default RiliBig;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: Numbers.padding.M,
    right: Numbers.padding.M,
  },
});
