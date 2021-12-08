import React from "react";
import { View } from "react-native";

import MiniTopicCard from "./MiniTopicCard";
import AuthorCard from "./AuthorCard";
import { RowList, MiniBookCard } from "../../Shared";
import { Results as resl } from "../../Demo";
import { Styles, Numbers } from "../../utils";

interface Props {
  searchTerm: string;
}

const Results = (props: Props) => {
  return (
    <View>
      <RowList
        data={resl.Topics}
        renderItem={MiniTopicCard}
        title={`Topics related to ${props.searchTerm} (${resl.Topics.length})`}
        titleStyle={Styles.comment}
        itemStyle={{ marginRight: Numbers.margin.XS }}
      />
      <RowList
        data={resl.Books}
        renderItem={MiniBookCard}
        title={`Books related to ${props.searchTerm} (${resl.Books.length})`}
        titleStyle={Styles.comment}
        itemStyle={{ marginRight: Numbers.margin.XS }}
      />
      <RowList
        data={resl.Authors}
        renderItem={AuthorCard}
        title={`Authors related to ${props.searchTerm} (${resl.Authors.length})`}
        titleStyle={Styles.comment}
        itemStyle={{ marginRight: Numbers.margin.XS }}
        pagingEnabled
      />
    </View>
  );
};

export default Results;
