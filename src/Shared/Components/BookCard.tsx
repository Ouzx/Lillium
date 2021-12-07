import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ViewStyle,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";

import PagesOnCard from "./PagesOnCard";
import RatingOnCard from "./RatingOnCard";
import AuthorOnCard from "./AutorOnCard";

import Badge from "./Badge";
import RiliBig from "./RiliBig";

import { Numbers, Styles, TextWrapper } from "../../utils";

interface Props {
  title: string;
  description: string;
  image: ImageSourcePropType;
  pages?: number;
  rating?: string;
  author: string;
  authorImage?: ImageSourcePropType;
  containerStyle?: ViewStyle | ViewStyle[];
}

const DetailCard = (props: Props) => {
  return (
    <View>
      <TouchableOpacity>
        <Badge value="NEW" />
        <ImageBackground
          style={[
            Styles.imageContainer,
            styles.container,
            Styles.lilCardSquareM,
            props.containerStyle,
          ]}
          source={props.image}
        >
          <Text style={Styles.headingText}>{props.title}</Text>
          <Text style={Styles.plainText} {...TextWrapper}>
            {props.description}
          </Text>
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

export default DetailCard;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  pagesAndStars: {
    flexDirection: "row",
    marginTop: Numbers.margin.L,
  },
});