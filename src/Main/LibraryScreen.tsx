import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Tab, TabView } from "react-native-elements";

import { Container, Logo, Txt, BooksOnCard } from "../Shared";
import { Numbers, Styles, Colors } from "../utils";

const LibraryScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Container>
      <ScrollView style={[Styles.innerContainer]}>
        <Logo />
        <Txt numberOfLines={2} style={[Styles.h1]}>
          Your Library
        </Txt>
        <BooksOnCard count={21} color={Colors.active} />

        <Tab value={selectedTab} onChange={setSelectedTab} disableIndicator>
          <Tab.Item
            title="Continue"
            titleStyle={[
              styles.tabItemTitle,
              {
                color: selectedTab === 0 ? Colors.primary : Colors.nonActive,
              },
            ]}
            containerStyle={styles.tabItemContainer}
          />
          <Tab.Item
            title="Read it Later"
            titleStyle={[
              styles.tabItemTitle,
              {
                color: selectedTab === 1 ? Colors.primary : Colors.nonActive,
              },
            ]}
            containerStyle={[styles.tabItemContainer]}
          />
          <Tab.Item
            title="Readed"
            titleStyle={[
              styles.tabItemTitle,
              {
                color: selectedTab === 2 ? Colors.primary : Colors.nonActive,
              },
            ]}
            containerStyle={[styles.tabItemContainer]}
          />
        </Tab>

        <TabView value={selectedTab} onChange={setSelectedTab}>
          <TabView.Item style={{ backgroundColor: "red", width: "100%" }}>
            <Text>Recent</Text>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "blue", width: "100%" }}>
            <Text>Favorite</Text>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
            <Text>Cart</Text>
          </TabView.Item>
        </TabView>
      </ScrollView>
    </Container>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  container: {},
  tabItemTitle: {
    color: Colors.active,
    fontSize: 14,
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
  },
  tabItemContainer: {
    backgroundColor: "transparent",
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 0.2,
  },
});
