import React from "react";
import { ImageBackground, View } from "react-native";

import { TabbedHeader } from "../Shared";
import { Colors } from "../utils";

const LibraryScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/bg/back1.png")}
      style={{ width: "100%", height: "100%" }}
      resizeMode="stretch"
    >
      <View style={{ flex: 1, backgroundColor: Colors.transparentBg }}>
        <TabbedHeader screenName="Library Screen" noBackButton />
      </View>
    </ImageBackground>
  );
};

export default LibraryScreen;
