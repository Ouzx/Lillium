import React from "react";
import { TouchableOpacity, ViewStyle, Image } from "react-native";

interface Props {
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
}

const RiliStop = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[props.style]}>
      <Image source={require("../../../assets/img/Rili/RiliPause.png")} />
    </TouchableOpacity>
  );
};

export default RiliStop;
