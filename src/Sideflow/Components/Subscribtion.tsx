import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { PrimaryButton } from "../../Shared";
import { Numbers, Styles } from "../../utils";

interface Props {
  count: string;
  onPress?: () => void;
  containerStyle?: ViewStyle | ViewStyle[];
}

const Subscribtion = (props: Props) => {
  return (
    <View style={props.containerStyle}>
      <View
        style={{
          flexDirection: "row",
          marginTop: Numbers.margin.L,
          alignItems: "center",
        }}
      >
        <PrimaryButton title={"Subscribe"} onPress={() => {}} />
        <Text style={Styles.onCardComment}>{props.count}</Text>
      </View>
    </View>
  );
};

export default Subscribtion;

const styles = StyleSheet.create({});
