import React from "react";
import { ImageSourcePropType, Text, View, ViewStyle } from "react-native";

import { Numbers, Styles } from "../../utils";
import { Avatar } from "react-native-elements";

interface Props {
  author: string;
  authorPic?: ImageSourcePropType;
  containerStyle?: ViewStyle | ViewStyle[];
}
const AuthorOnCard = ({ author, authorPic, containerStyle }: Props) => {
  return (
    <View style={[Styles.alignRow, containerStyle]}>
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
      <Text style={[Styles.onCardComment]}>{author}</Text>
    </View>
  );
};

export default AuthorOnCard;
