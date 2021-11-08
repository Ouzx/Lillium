import React from "react";
import { Animated } from "react-native";

import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../utils";

interface Props {
  scrollX: Animated.Value;
}

const Square: React.FC<Props> = ({ scrollX }) => {
  const YOLO = Animated.modulo(
    Animated.divide(
      Animated.modulo(scrollX, SCREEN_WIDTH),
      new Animated.Value(SCREEN_WIDTH)
    ),
    1
  );

  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["35deg", "0deg", "35deg"],
  });

  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -SCREEN_HEIGHT, 0],
  });

  return (
    <Animated.View
      style={{
        width: SCREEN_HEIGHT,
        height: SCREEN_HEIGHT,
        backgroundColor: "#fff",
        borderRadius: 9999,
        top: -SCREEN_HEIGHT * 0.6,
        left: -SCREEN_HEIGHT * 0.3,
        position: "absolute",
        transform: [
          {
            rotate,
          },
          {
            translateX,
          },
        ],
      }}
    />
  );
};

export default Square;
