import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { Numbers, Colors } from "../../utils";

interface Props {
  title: string;
  containerStyle?: ViewStyle | ViewStyle[];
  onPress: () => void;
}

const PrimaryButton = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.containerStyle]}
    >
      <Text style={[{ color: Colors.active }, styles.title]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: Numbers.radius.XL,
    height: Numbers.sizes.XL,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  title: {
    marginHorizontal: Numbers.margin.L,
  },
});
