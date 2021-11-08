import React from "react";
import { Animated, StyleSheet } from "react-native";

import { SCREEN_WIDTH } from "../../utils";
import { BG } from "../../Demo";
interface Props {
  scrollX: Animated.Value;
}

const Backdrop: React.FC<Props> = ({ scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: BG.map((_, i) => i * SCREEN_WIDTH),
    outputRange: BG.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[StyleSheet.absoluteFillObject, { backgroundColor }]}
    />
  );
};

export default Backdrop;
