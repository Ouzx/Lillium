import React from "react";
import { StyleSheet, View, Animated, StatusBar } from "react-native";

import { DATA } from "../../Demo";
import ScrollIndicator from "./ScrollIndicator";
import Slide from "./Slide";
import Backdrop from "./Backdrop";
import Square from "./Square";

import { Screens } from "../../utils";
import { PrimaryButton, TextButton } from "../../Shared/";
import { Colors, Numbers } from "../../utils";
interface Props {
  navigation: any;
}

const OnboardingScreen: React.FC<Props> = ({ navigation }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        horizontal
        pagingEnabled
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Slide {...item} />}
      />

      <View
        style={[
          {
            bottom: 20,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            width: "100%",
            padding: Numbers.padding.M,
            paddingBottom: 0,
          },
        ]}
      >
        <ScrollIndicator
          scrollX={scrollX}
          data={DATA}
          dotStyle={{ backgroundColor: "white" }}
        />

        <PrimaryButton
          title="Log In"
          onPress={() => {
            navigation.navigate(Screens.LOGIN);
          }}
          Color={Colors.primary}
        />
        <TextButton
          title="New to lil? Sign Up"
          onPress={() => {
            console.log("sign up");
          }}
          textStyle={{ color: Colors.active }}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
