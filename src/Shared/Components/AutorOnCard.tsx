import React from "react";
import {
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import { Numbers, Styles } from "../../utils";
import { Avatar } from "react-native-elements";

interface Props {
  author: string;
  authorPic?: ImageSourcePropType;
  containerStyle?: ViewStyle | ViewStyle[];
}
// TODO: Navigate to author profile
const AuthorOnCard = ({ author, authorPic, containerStyle }: Props) => {
  return (
    <TouchableOpacity style={[Styles.alignRow, containerStyle]}>
      <Avatar
        rounded
        source={authorPic}
        size="small"
        title={author[0]}
        containerStyle={{
          width: Numbers.sizes.M,
          height: Numbers.sizes.M,
        }}
      />
      <Text
        numberOfLines={1}
        ellipsizeMode={"tail"}
        style={[Styles.onCardActiveComment]}
      >
        {author}
      </Text>
    </TouchableOpacity>
  );
};

export default AuthorOnCard;
