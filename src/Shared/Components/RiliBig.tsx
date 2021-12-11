import React from "react";
import { TouchableOpacity, Image, ViewStyle } from "react-native";

import { Numbers } from "../../utils";

interface Props {
  style?: ViewStyle | ViewStyle[];
  onPress?: () => void;
  deactivateAbs?: boolean;
}

// TODO: Navigate to reading directly
const RiliBig = (props: Props) => {
  return (
    <TouchableOpacity
      style={[
        {
          position: !props.deactivateAbs ? "absolute" : "relative",
          bottom: !props.deactivateAbs ? Numbers.padding.M : 0,
          right: !props.deactivateAbs ? Numbers.padding.M : 0,
        },
        props.style,
      ]}
      onPress={props.onPress}
    >
      <Image source={require("../../../assets/img/Rili/RiliBig.png")} />
    </TouchableOpacity>
  );
};

export default RiliBig;
