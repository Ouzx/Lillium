import React from "react";
import { StyleSheet, Text, View } from "react-native";

import RiliSmall from "./RiliSmall";
import Txt from "./Txt";
import PagesOnCard from "./PagesOnCard";
import DownloadButton from "./DownloadButton";

import { Styles, Numbers, Colors } from "../../utils";

interface Props {
  id: string;
  title: string;
  pageCount: number;
  size: string;
}

const MicroBookCard = (props: Props) => {
  return (
    <View
      key={props.id}
      style={[Styles.alignRow, styles.container, Styles.lilCardSquareS]}
    >
      <View style={[Styles.alignRow, { flex: 0.6 }]}>
        <RiliSmall />

        <View style={{}}>
          <Txt
            mod="middle"
            numberOfLines={1}
            style={[Styles.onCardActiveComment]}
          >
            {props.title}
          </Txt>
          <PagesOnCard
            pageNum={props.pageCount}
            containerStyle={{ paddingLeft: Numbers.padding.XXS }}
          />
        </View>
      </View>
      <View
        style={[Styles.alignRow, { flex: 0.4, justifyContent: "flex-end" }]}
      >
        <Text style={Styles.comment}>{props.size}</Text>
        <DownloadButton style={{ marginLeft: Numbers.padding.XXS }} />
      </View>
    </View>
  );
};

export default MicroBookCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    marginTop: Numbers.margin.L,
    padding: Numbers.padding.XXS,
    paddingHorizontal: Numbers.padding.S,
    justifyContent: "space-between",
  },
});
