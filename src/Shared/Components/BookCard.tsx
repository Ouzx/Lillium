import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ViewStyle,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";

import PagesOnCard from "./PagesOnCard";
import RatingOnCard from "./RatingOnCard";
import AuthorOnCard from "./AutorOnCard";
import Txt from "./Txt";

import Badge from "./Badge";
import RiliBig from "./RiliBig";

import { Numbers, Styles } from "../../utils";

interface Props {
  title: string;
  description: string;
  image: ImageSourcePropType;
  pages?: number;
  rating?: string;
  author: string;
  authorImage?: ImageSourcePropType;
  containerStyle?: ViewStyle | ViewStyle[];
  badge?: string;
  noBadge?: boolean;
}

const BookCard = (props: Props) => {
  return (
    <View>
      <TouchableOpacity>
        {!props.noBadge && <Badge value={props.badge ? props.badge : "NEW"} />}
        <ImageBackground
          style={[
            Styles.imageContainer,
            styles.container,
            Styles.lilCardSquareM,
            props.containerStyle,
          ]}
          source={props.image}
        >
          <Txt numberOfLines={1} style={Styles.headingText}>
            {props.title}
          </Txt>
          <Txt style={Styles.plainText} numberOfLines={3}>
            {props.description}
          </Txt>
          <View style={styles.pagesAndStars}>
            <PagesOnCard pageNum={Math.floor(Math.random() * 4000 + 250)} />
            <RatingOnCard
              rating={(Math.random() * 6).toFixed(1)}
              containerStyle={{ marginLeft: Numbers.margin.M }}
            />
          </View>
          <AuthorOnCard
            containerStyle={{ marginTop: Numbers.margin.XS }}
            author={props.author}
            authorPic={props.authorImage}
          />
          <RiliBig />
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  pagesAndStars: {
    flexDirection: "row",
    marginTop: Numbers.margin.L,
  },
});
