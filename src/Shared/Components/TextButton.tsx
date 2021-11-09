import React from "react";
import { Text, View, TouchableOpacity, TextStyle } from "react-native";
import { Styles, Numbers } from "../../utils";

interface Props {
  title: string;
  onPress: () => void;
  textStyle?: TextStyle | TextStyle[];
}

const TextButton = (props: Props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={{ padding: Numbers.padding.XS }}
      >
        <Text style={[Styles.comment, props.textStyle]}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextButton;
