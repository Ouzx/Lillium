import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { Icons } from "../../Shared";

interface Props {
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
}

const SaveCard = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Icons.SaveCard />
    </TouchableOpacity>
  );
};

export default SaveCard;
