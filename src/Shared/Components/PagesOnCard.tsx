import React from "react";
import { Text, View, ViewStyle } from "react-native";

import { Numbers, Styles } from "../../utils";
import { Cards } from "../icons";

interface Props {
  pageNum: number;
  containerStyle?: ViewStyle | ViewStyle[];
}
const PagesOnCard = ({ pageNum, containerStyle }: Props) => {
  return (
    <View style={[Styles.alignRow, containerStyle]}>
      <Cards width={Numbers.sizes.M} height={Numbers.sizes.M} />
      <Text style={Styles.onCardComment}>{pageNum}</Text>
    </View>
  );
};

export default PagesOnCard;
