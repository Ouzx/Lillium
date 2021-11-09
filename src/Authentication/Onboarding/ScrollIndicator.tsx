import React from "react";
import { View, Animated, Dimensions, ViewStyle, StyleProp } from "react-native";

interface scrollProps {
  scrollX: Animated.Value;
  data: Array<any>;
  dotStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const { width } = Dimensions.get("screen");

const Indicator: React.FC<scrollProps> = ({
  scrollX,
  data,
  dotStyle,
  containerStyle,
}) => {
  return (
    <View style={[{ flexDirection: "row" }, containerStyle]}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={[
              {
                height: 10,
                width: 10,
                borderRadius: 5,
                backgroundColor: "black",
                margin: 10,
                opacity,
                transform: [{ scale }],
              },
              dotStyle,
            ]}
          />
        );
      })}
    </View>
  );
};

export default Indicator;
