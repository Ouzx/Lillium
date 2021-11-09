import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Numbers } from "../../utils";

interface Props {
  title: string;
  onPress: () => void;
  Color: string;
}

const PrimaryButton = (props: Props) => {
  return (
    <Button
      title={props.title}
      containerStyle={styles.buttonContainer}
      buttonStyle={[styles.button, { backgroundColor: props.Color }]}
      onPress={props.onPress}
    />
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    borderRadius: Numbers.radius.XL,
    marginVertical: Numbers.margin.M,
  },
  button: {
    borderRadius: Numbers.radius.XL,
    padding: Numbers.padding.XS,
  },
});
