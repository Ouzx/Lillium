import React from "react";
import { ImageBackground, View, Text } from "react-native";

import { Avatar } from "react-native-elements";

import { ParallaxHeader, Txt, BooksOnCard } from "../Shared";
import { Colors, Styles, Numbers } from "../utils";
import Subscription from "./Components/Subscribtion";

import { CategoryBooks } from "../Demo";
import { jk } from "../../assets/authors";

const AuthorProfileScreen = () => {
  // TODO: Add author cards to authors tab
  const tabs = ["Popular", "New", "Best Sellers"];
  const SCREEN_NAME = "J.K. Rowling";

  const foreground = () => (
    <View>
      <Avatar source={jk} size="large" rounded />
      <Txt numberOfLines={2} style={[Styles.h1]}>
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
      </View>
      <Text
        style={[
          Styles.comment,
          { marginTop: Numbers.margin.XS, paddingLeft: Numbers.padding.XXS },
        ]}
      >
        J.K Rowling is an English author, best known for her seven-time
        bestselling novels of young adult fiction, which have been translated
        into more than forty languages.
      </Text>
      <Subscription count="1.2k+ subscribers" />
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

export default AuthorProfileScreen;
