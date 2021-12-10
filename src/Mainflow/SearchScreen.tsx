import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";

import GenreList from "./Components/GenreList";
import SearchBar from "./Components/SearchBar";
import Results from "./Components/Results";

import { Genres } from "../Demo";

import { Container, Logo } from "../Shared";
import { Styles, Numbers } from "../utils";

const SearchScreen = () => {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Logo />
          <Text style={Styles.h1}>Browse</Text>
          <SearchBar search={search} setSearch={setSearch} />
        </View>
        {search.length <= 2 ? (
          <View style={styles.container}>
            <GenreList listData={Genres[0].data} listName={Genres[0].title} />
            <GenreList listData={Genres[1].data} listName={Genres[1].title} />
          </View>
        ) : (
          <Results searchTerm={search} />
        )}
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
