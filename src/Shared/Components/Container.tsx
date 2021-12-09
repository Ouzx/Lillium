import React from "react";
import { SafeAreaView, StatusBar, ViewStyle } from "react-native";
import { Styles, Colors } from "../../utils";

interface Props {
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}

// TODO: Make safeareview optional
const Container = ({ children, style }: Props) => {
  return (
    <SafeAreaView style={[Styles.container, style]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.mainBG}
        translucent={false}
      />
      {children}
    </SafeAreaView>
  );
};

export default Container;
