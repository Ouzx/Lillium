import React from "react";
import { Text, View, ViewStyle } from "react-native";

import { Numbers, Styles, Colors } from "../../utils";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  rating: string;
  containerStyle?: ViewStyle | ViewStyle[];
}
const RatingOnCard = ({ rating, containerStyle }: Props) => {
  return (
    <View style={[Styles.alignRow, containerStyle]}>
      <Ionicons
        name="star-outline"
        size={Numbers.sizes.M}
        color={Colors.nonActive}
      />
      <Text style={Styles.onCardComment}>{rating}</Text>
    </View>
  );
};

export default RatingOnCard;
