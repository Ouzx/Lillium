import React from "react";
import { ImageBackground, View, Text } from "react-native";

import {
  ParallaxHeader,
  Txt,
  BooksOnCard,
  RatingOnCard,
  AuthorsOnCard,
} from "../Shared";

import Subscribtion from "./Components/Subscribtion";
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
          paddingLeft: Numbers.padding.XXS,
        }}
      >
        <BooksOnCard count={21} />
        <RatingOnCard
          rating="4.5"
          containerStyle={{ marginHorizontal: Numbers.margin.S }}
        />
        <AuthorsOnCard count={25} />
      </View>
      <Text
        style={[
          Styles.comment,
          { marginTop: Numbers.margin.XS, paddingLeft: Numbers.padding.XXS },
        ]}
      >
        Heroic genre is a genre of literature that is characterized by the use
        of heroic fantasy.
      </Text>
      <Subscribtion count="4.7k+ subscribers" />
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
