import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Colors, Numbers } from "../utils";

interface Props {
  id: string;
  name: string;
  colors: string[];
  onPress?: () => void;
  containerStyle?: ViewStyle | ViewStyle[];
}

const Genre = (props: Props) => {
  return (
    <TouchableOpacity
      key={props.id}
      style={[styles.square, props.containerStyle]}
      onPress={props.onPress}
    >
      <LinearGradient
        style={styles.innerSquare}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 1.0, y: 1.0 }}
        colors={props.colors}
      />
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default Genre;

const styles = StyleSheet.create({
  innerSquare: {
    width: 24,
    height: 24,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  text: {
    paddingTop: 20,
    fontSize: 16,
    width: 120,
    color: Colors.active,
    lineHeight: 25,
    fontWeight: "600",
  },
  square: {
    borderBottomLeftRadius: Numbers.radius.S,
    borderTopLeftRadius: Numbers.radius.S,
    borderTopRightRadius: Numbers.radius.S,
    backgroundColor: Colors.secondaryBG,
    height: 122,
    padding: 16,
  },
});
