import React from "react";
import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { Txt, BooksOnCard } from "../../Shared";
import { Colors, Styles, Numbers, SCREEN_WIDTH } from "../../utils";
import { Avatar } from "react-native-elements";

interface Props {
  id: string;
  name: string;
  bookCount: number;
  img: ImageSourcePropType;
}

const AuthorCard = (props: Props) => {
  return (
    <TouchableOpacity key={props.id} style={styles.container}>
      <Avatar
        size="xlarge"
        rounded
        source={props.img}
        title={props.name[0]}
        containerStyle={{
          borderWidth: 5,
          padding: 3,
          margin: 3,
          borderColor: Colors.mainBG,
          borderRadius: Numbers.radius.XL,
          transform: [{ scale: 0.9 }],
        }}
      />

      <View style={styles.subContainer}>
        <Txt numberOfLines={1} style={Styles.headingText}>
          {props.name}
        </Txt>
        <BooksOnCard count={props.bookCount} color={Colors.active} />
      </View>
    </TouchableOpacity>
  );
};

export default AuthorCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.secondary,
    borderRadius: Numbers.radius.L,
    borderBottomRightRadius: 0,

    width: SCREEN_WIDTH - Numbers.padding.S * 2,
    marginRight: Numbers.padding.S,
  },
  subContainer: {
    justifyContent: "center",
    paddingLeft: Numbers.padding.S,
  },
});
