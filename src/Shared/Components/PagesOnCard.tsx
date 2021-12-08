import React from "react";
import { View, ViewStyle } from "react-native";

import { Numbers, Styles, Colors } from "../../utils";
import { Cards } from "../icons";
import Txt from "./Txt";

interface Props {
  pageNum: number | string;
  containerStyle?: ViewStyle | ViewStyle[];
  color?: string;
}
const PagesOnCard = ({ pageNum, containerStyle, color }: Props) => {
  return (
    <View style={[Styles.alignRow, containerStyle]}>
      <Cards width={Numbers.sizes.M} height={Numbers.sizes.M} />
      <Txt
        numberOfLines={1}
        style={[
          Styles.pageCounter,
          { color: color ? color : Colors.nonActive },
        ]}
      >
        {pageNum}
      </Txt>
    </View>
  );
};

export default PagesOnCard;
