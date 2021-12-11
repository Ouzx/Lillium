import React from "react";
import { TouchableOpacity, Image, ViewStyle } from "react-native";

import { Numbers } from "../../utils";

interface Props {
  style?: ViewStyle | ViewStyle[];
  onPress?: () => void;
}

// TODO: Navigate to reading directly
const RiliSmall = (props: Props) => {
  return (
    <TouchableOpacity style={[{}, props.style]} onPress={props.onPress}>
      <Image source={require("../../../assets/img/Rili/RiliSmall.png")} />
    </TouchableOpacity>
  );
};

export default RiliSmall;
