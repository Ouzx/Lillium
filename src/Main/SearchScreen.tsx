import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";

import GenreList from "./GenreList";
import SearchBar from "./SearchBar";

import { Genres } from "../Demo";

import { Container, Logo } from "../Shared";
import { Styles, Numbers } from "../utils";

const SearchScreen = () => {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <Logo />
            <Text style={Styles.h1}>Browse</Text>
            <SearchBar search={search} setSearch={setSearch} />
          </View>
          <GenreList listData={Genres[0].data} listName={Genres[0].title} />
          <GenreList listData={Genres[1].data} listName={Genres[1].title} />
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Numbers.padding.S,
  },
});

export default SearchScreen;
