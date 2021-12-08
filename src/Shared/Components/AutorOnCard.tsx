import React from "react";
import { ImageSourcePropType, TouchableOpacity, ViewStyle } from "react-native";

import { Numbers, Styles } from "../../utils";
import { Avatar } from "react-native-elements";
import Txt from "./Txt";

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
      <Txt numberOfLines={1} style={[Styles.onCardActiveComment]}>
        {author}
      </Txt>
    </TouchableOpacity>
  );
};

export default AuthorOnCard;
