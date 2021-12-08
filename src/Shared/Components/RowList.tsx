import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ViewStyle,
  TextStyle,
} from "react-native";

import { Styles, Numbers } from "../../utils";

interface Props {
  data: any[];
  title: string;
  renderItem: (item: any) => JSX.Element;
  containerStyle?: ViewStyle | ViewStyle[];
  titleStyle?: TextStyle | TextStyle[];
  itemStyle?: ViewStyle | ViewStyle[];
  pagingEnabled?: boolean;
}

const RowList = (props: Props) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={[Styles.subHeadingText, styles.listTitle, props.titleStyle]}>
        {props.title}{" "}
      </Text>
      <FlatList
        data={props.data}
        renderItem={({ item }) => (
          <props.renderItem
            containerStyle={[styles.itemStyle, props.itemStyle]}
            {...item}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={props.pagingEnabled}
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
