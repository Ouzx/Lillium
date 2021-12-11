import React from "react";
import { ImageBackground, View, Text } from "react-native";

import { ParallaxHeader, Txt, RatingOnCard, RiliBig } from "../Shared";

import { Colors, Styles, Numbers } from "../utils";

import { Chapters } from "../Demo";

const BookScreen = () => {
  const tabs = ["Chapters"];
  const SCREEN_NAME = "Harry Potter and the Philosopher's Stone";

  const foreground = () => (
    <View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Txt numberOfLines={2} style={[Styles.headingText]}>
          {SCREEN_NAME}
        </Txt>
        <Text style={[Styles.comment, { marginVertical: Numbers.margin.S }]}>
          J.K. ROWLING
        </Text>
        <RiliBig deactivateAbs />
      </View>
      <RatingOnCard
        rating="4.5"
        containerStyle={{ marginHorizontal: Numbers.padding.XXS }}
      />

      <Text
        style={[
          Styles.comment,
          { marginTop: Numbers.margin.XS, paddingLeft: Numbers.padding.XXS },
        ]}
      >
        Harry Potter and the Philosopher's Stone is a fantasy novel written by
        J. K. Rowling and the first novel in the Harry Potter series. It was
        published in 1997 by Bloomsbury. The book is considered by many to be
        Rowling's first published novel.
      </Text>
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
          data={Chapters}
          foreground={foreground}
          microBookCard
        />
      </View>
    </ImageBackground>
  );
};

export default BookScreen;
