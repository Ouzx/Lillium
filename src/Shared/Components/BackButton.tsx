import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Numbers, Colors } from "../../utils";

interface Props {
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
}

const BackButton = ({ onPress, style }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Ionicons
        name="arrow-back"
        size={Numbers.sizes.L}
        color={Colors.active}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
