import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import ShareCard from "../icons/ShareCard";

interface Props {
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
}

const ShareCards = (props: Props) => {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      <ShareCard />
    </TouchableOpacity>
  );
};

export default ShareCards;

const styles = StyleSheet.create({});
