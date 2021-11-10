import React from "react";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import { Styles, Colors } from "../../utils";

interface Props {
  children?: React.ReactNode;
  safeArea?: boolean;
}

// TODO: Make safeareview optional
const Container = ({ children, safeArea }: Props) => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.mainBG} />
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default Container;
