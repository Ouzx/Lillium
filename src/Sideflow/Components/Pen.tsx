import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { Icons } from "../../Shared";

interface Props {
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
}

const Pen = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Icons.Pen />
    </TouchableOpacity>
  );
};

export default Pen;
