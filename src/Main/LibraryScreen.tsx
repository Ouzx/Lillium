import React from "react";
import { ImageBackground, View } from "react-native";

import { TabbedHeader, Txt, BooksOnCard } from "../Shared";
import { Colors, Styles } from "../utils";

import { LibraryBooks } from "../Demo";

const LibraryScreen = () => {
  const tabs = ["Continue", "Read it later", "Saved"];
  const SCREEN_NAME = "Library";

  const foreground = () => (
    <View>
      <Txt numberOfLines={2} style={Styles.h1}>
        {SCREEN_NAME}
      </Txt>
      <BooksOnCard count={21} />
    </View>
  );

  return (
    <ImageBackground
      source={require("../../assets/bg/back1.png")}
      style={{ width: "100%", height: "100%" }}
      resizeMode="stretch"
    >
      <View style={{ flex: 1, backgroundColor: Colors.transparentBg }}>
        <TabbedHeader
          screenName="Library Screen"
          noBackButton
          tabs={tabs}
          data={LibraryBooks}
          foreground={foreground}
        />
      </View>
    </ImageBackground>
  );
};

export default LibraryScreen;
