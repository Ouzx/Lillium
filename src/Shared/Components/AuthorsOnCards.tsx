import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors, Styles, Numbers } from "../../utils";

interface Props {
  count: number;
  containerStyle?: ViewStyle | ViewStyle[];
  color?: string;
}

const AuthorsOnCard = (props: Props) => {
  return (
    <View style={[props.containerStyle, Styles.alignRow]}>
      <Ionicons
        name="person-circle-outline"
        size={Numbers.sizes.M}
        color={props.color ? props.color : Colors.nonActive}
      />
      <Text
        style={[
          Styles.onCardComment,
          {
            color: props.color ? props.color : Colors.nonActive,
          },
        ]}
      >
        {props.count} authors
      </Text>
    </View>
  );
};

export default AuthorsOnCard;
