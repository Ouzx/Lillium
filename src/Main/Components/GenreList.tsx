import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

import Genre from "./Genre";
import { Styles, Numbers } from "../../utils";

interface Props {
  listData: any[];
  listName: string;
  containerStyle?: ViewStyle | ViewStyle[];
}

const GenreList = (props: Props) => {
  const Creator = () => {
    const a = props.listData.map((item: any, _: number) => {
      return (
        <View key={item.key}>
          <Genre
            id={item.key}
            name={item.name}
            colors={item.colors}
            containerStyle={styles.renderItemStyle}
          />
        </View>
      );
    });
    return a;
  };

  return (
    <View style={styles.container}>
      <Text style={[Styles.comment, styles.titleStyle]}>{props.listName}</Text>
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {Creator()}
      </View>
    </View>
  );
};

export default GenreList;

const styles = StyleSheet.create({
  container: { marginTop: Numbers.margin.S },
  renderItemStyle: { marginBottom: Numbers.margin.M },
  titleStyle: { marginVertical: Numbers.margin.XS },
});
