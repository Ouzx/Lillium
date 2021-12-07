import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import SearchBar from "./SearchBar";

import { Container, Logo } from "../Shared";
import { Styles, Numbers } from "../utils";

const SearchScreen = () => {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <View style={{ padding: Numbers.padding.S }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Logo />
          <Text style={Styles.h1}>Browse</Text>
          <SearchBar search={search} setSearch={setSearch} />
        </ScrollView>
      </View>
      <Text></Text>
    </Container>
  );
};

export default SearchScreen;
