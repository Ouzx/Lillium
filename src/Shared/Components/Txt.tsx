import React from "react";
import { Text, TextStyle } from "react-native";

interface Props {
  children?: string | number;
  style?: TextStyle | TextStyle[];
  numberOfLines: number;
}

const Txt = (props: Props) => {
  return (
    <Text
      style={props.style}
      numberOfLines={props.numberOfLines}
      ellipsizeMode="tail"
    >
      {props.children}
    </Text>
  );
};

export default Txt;
