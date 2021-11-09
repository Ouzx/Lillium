import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Styles, Colors } from "../../utils";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.mainBG} />
      {children}
    </SafeAreaView>
  );
};

export default Container;
