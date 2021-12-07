import React from "react";
import { StyleSheet, Text, View, FlatList, ViewStyle } from "react-native";

import { Styles, Numbers } from "../../utils";

interface Props {
  books: any[];
  title: string;
  renderItem: (item: any) => JSX.Element;
  containerStyle?: ViewStyle | ViewStyle[];
}

const RowList = (props: Props) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={[Styles.subHeadingText, styles.listTitle]}>
        {props.title}{" "}
      </Text>
      <FlatList
        data={props.books}
        renderItem={({ item }) => (
          <props.renderItem containerStyle={styles.itemStyle} {...item} />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default RowList;

const styles = StyleSheet.create({
  container: {
    paddingLeft: Numbers.padding.S,
    paddingVertical: Numbers.padding.S,
  },

  listTitle: {
    fontWeight: "normal",
    marginBottom: Numbers.margin.XS,
  },

  itemStyle: {
    marginRight: Numbers.margin.S,
  },
});
