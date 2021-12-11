import React from "react";
import { Text, TextStyle } from "react-native";

interface Props {
  numberOfLines: number;
  children?: string[] | number[] | string | number;
  style?: TextStyle | TextStyle[];
  mod?: "tail" | "head" | "middle" | "clip";
}

const Txt = (props: Props) => {
  return (
    <Text
      style={props.style}
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.mod ? props.mod : "tail"}
    >
      {props.children}
    </Text>
  );
};

export default Txt;
