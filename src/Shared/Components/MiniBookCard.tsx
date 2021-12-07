import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageSourcePropType,
  ViewStyle,
} from "react-native";

import PagesOnCard from "./PagesOnCard";
import AuthorOnCard from "./AutorOnCard";

import { Styles, Numbers, Sizes, TextWrapper } from "../../utils";

interface Props {
  id: string;
  image: ImageSourcePropType;
  title: string;
  pageNum: string;
  author: string;
  onPress: () => void; // TODO: ADD ROUTE
  containerStyle?: ViewStyle | ViewStyle[];
}
// TODO: Navigate to book
const MiniBookCard = (props: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.containerStyle]}
      onPress={props.onPress}
      key={props.id}
    >
      <Image source={props.image} style={[Styles.lilCardSquareS, styles.img]} />
      <View>
        <Text {...TextWrapper} style={[Styles.plainText, styles.bookTitle]}>
          {props.title}
        </Text>
        <PagesOnCard pageNum={`${props.pageNum} pages`} />

        {/*  BUG: Author first letter over flowing */}
        <AuthorOnCard author={props.author} />
      </View>
    </TouchableOpacity>
  );
};

export default MiniBookCard;

// TODO: Change img and container width as relative
const styles = StyleSheet.create({
  container: {
    width: Sizes.MINI_IMAGE_WIDTH,
  },
  img: {
    width: Sizes.MINI_IMAGE_WIDTH,
    height: Sizes.MINI_IMAGE_HEIGHT,
  },
  bookTitle: {
    marginVertical: Numbers.margin.XS,
    height: 40,
  },
});
