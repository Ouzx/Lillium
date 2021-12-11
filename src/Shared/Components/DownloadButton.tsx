import React from "react";
import { TouchableOpacity, ViewStyle, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Numbers, Colors } from "../../utils";

interface Props {
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
}

const DownloadButton = ({ onPress, style }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style, styles.continer]}>
      <Feather name="download" size={22} color={Colors.active} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  continer: {},
});

export default DownloadButton;
