import React from "react";
import { ImageBackground, View, Text } from "react-native";

import {
  ParallaxHeader,
  Txt,
  BooksOnCard,
  RatingOnCard,
  AuthorsOnCard,
  PrimaryButton,
} from "../Shared";
import { Colors, Styles, Numbers } from "../utils";

import { CategoryBooks } from "../Demo";

const CategoryScreen = () => {
  // TODO: Add author cards to authors tab
  const tabs = ["Popular", "New", "Authors"];
  const SCREEN_NAME = "Heroic";

  const foreground = () => (
    <View>
      <Txt numberOfLines={2} style={Styles.h1}>
        {SCREEN_NAME}
      </Txt>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <BooksOnCard count={21} />
        <RatingOnCard
          rating="4.5"
          containerStyle={{ marginHorizontal: Numbers.margin.S }}
        />
        <AuthorsOnCard count={25} />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: Numbers.margin.L,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <PrimaryButton title={"Subscribe"} onPress={() => {}} />
        <Text style={Styles.onCardActiveComment}>4.7k+ subscribers</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={require("../../assets/bg/back1.png")}
      style={{ width: "100%", height: "100%" }}
      resizeMode="stretch"
    >
      <View style={{ flex: 1, backgroundColor: Colors.transparentBg }}>
        <ParallaxHeader
          screenName={SCREEN_NAME}
          tabs={tabs}
          data={CategoryBooks}
          foreground={foreground}
        />
      </View>
    </ImageBackground>
  );
};

export default CategoryScreen;
