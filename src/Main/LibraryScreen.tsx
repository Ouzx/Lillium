import React from "react";
import { ImageBackground } from "react-native";

import { TabbedHeader } from "../Shared";

const LibraryScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/bg/back1.png")}
      style={{ width: "100%", height: "100%" }}
      resizeMode="stretch"
    >
      <TabbedHeader screenName="Library Screen" />
    </ImageBackground>
  );
};

export default LibraryScreen;
