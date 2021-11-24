import React from "react";
import { StyleSheet, Text, View, ViewStyle, TextStyle } from "react-native";

import { Colors, Numbers } from "../../utils";

interface Props {
  value: string;
  badgeColor?: string;
  textColor?: string;
  textSize?: number;
  containerStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
}

const Badge = (props: Props) => {
  return (
    <View style={{ zIndex: 1, position: "relative" }}>
      <View style={[styles.outerContainer, props.containerStyle]}>
        <View
          style={[
            styles.innerContainer,
            {
              backgroundColor: props.badgeColor
                ? props.badgeColor
                : Colors.secondary,
            },
          ]}
        >
          <Text
            style={[
              styles.text,
              { color: props.textColor ? props.textColor : Colors.active },
              props.textStyle,
            ]}
          >
            {props.value}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  outerContainer: {
    position: "absolute",
    paddingLeft: Numbers.padding.M,
    paddingTop: Numbers.padding.XXS,
  },
  innerContainer: {
    borderRadius: Numbers.radius.L,
    paddingVertical: 7,
    paddingHorizontal: Numbers.padding.XS,
  },
  text: { fontWeight: "bold" },
});
