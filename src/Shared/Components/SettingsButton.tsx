import React from "react";
import { ViewStyle, TouchableOpacity } from "react-native";
import { Numbers, Colors } from "../../utils";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  containerStyle?: ViewStyle | ViewStyle[];
  onPress?: () => void;
}

// TODO: Add drawer for settings
const SettingsButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[props.containerStyle]}>
      <Ionicons
        name="settings-outline"
        size={Numbers.sizes.L}
        color={Colors.active}
      />
    </TouchableOpacity>
  );
};

export default SettingsButton;
