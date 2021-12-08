import React from "react";
import { StyleSheet } from "react-native";

import { SearchBar as SB } from "react-native-elements";
import { SearchBarBaseProps } from "react-native-elements/dist/searchbar/SearchBar";

// Using SearchBarBaseProps instead of SearchBarDefaultProps & SearchBarAndroidProps & SearchBarIOSProps
const SafeSearchBar = SB as unknown as React.FC<SearchBarBaseProps>;

import { Colors, Numbers } from "../utils";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = (props: Props) => {
  return (
    <SafeSearchBar
      placeholder="Books, Topics, Authors"
      onChangeText={props.setSearch}
      value={props.search}
      platform="default"
      containerStyle={styles.searchBarContainer}
      inputContainerStyle={styles.searchBarInputContainer}
      inputStyle={{ color: Colors.active }}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
  },
  searchBarInputContainer: {
    backgroundColor: Colors.secondaryDark,
    borderRadius: Numbers.radius.S,
    paddingLeft: Numbers.padding.XXS,
  },
});
