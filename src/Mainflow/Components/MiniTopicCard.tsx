import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
  ViewStyle,
} from "react-native";

import { BooksOnCard, RatingOnCard, Txt } from "../../Shared";
import { Styles, Sizes, Colors, Numbers } from "../../utils";

interface Props {
  title: string;
  rating: string;
  bookCount: number;
  img: ImageSourcePropType;
  id: string;
  containerStyle?: ViewStyle | ViewStyle[];
}

const MiniTopicCard = (props: Props) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={props.img}
        style={[
          styles.container,
          Styles.lilCardSquareM,
          styles.img,
          { flex: 1 },
          props.containerStyle,
        ]}
      >
        <Txt numberOfLines={1} style={[Styles.subHeadingText, styles.text]}>
          {props.title}
        </Txt>
        <BooksOnCard
          count={props.bookCount}
          containerStyle={styles.midItem}
          color={Colors.active}
        />
        <RatingOnCard rating={props.rating} color={Colors.active} />
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MiniTopicCard;

const styles = StyleSheet.create({
  container: {
    padding: Numbers.padding.XS,
    width: Sizes.MINI_IMAGE_WIDTH,
    overflow: "hidden",
  },
  img: {
    width: Sizes.MINI_IMAGE_WIDTH,
    height: Sizes.MINI_IMAGE_WIDTH,
  },
  text: {
    fontWeight: "400",
  },
  midItem: {
    marginVertical: Numbers.margin.XS,
  },
});
