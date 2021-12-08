import React from "react";
import { View, ViewStyle } from "react-native";

import { Numbers, Styles, Colors } from "../../utils";
import { Ionicons } from "@expo/vector-icons";
import Txt from "./Txt";
interface Props {
  rating: string;
  containerStyle?: ViewStyle | ViewStyle[];
  color?: string;
}
const RatingOnCard = ({ rating, containerStyle, color }: Props) => {
  return (
    <View style={[Styles.alignRow, containerStyle]}>
      <Ionicons
        name="star-outline"
        size={Numbers.sizes.M}
        color={color ? color : Colors.nonActive}
      />
      <Txt
        numberOfLines={1}
        style={[
          Styles.onCardComment,
          { color: color ? color : Colors.nonActive },
        ]}
      >
        {rating}
      </Txt>
    </View>
  );
};

export default RatingOnCard;
