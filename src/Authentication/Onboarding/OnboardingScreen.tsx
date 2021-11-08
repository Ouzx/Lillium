import React from "react";
import { StyleSheet, View, Animated, StatusBar } from "react-native";
import { Button } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { BG, DATA } from "../../Demo";
import ScrollIndicator from "./ScrollIndicator";
import Slide from "./Slide";

import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils";

import { useNavigation } from "@react-navigation/native";

interface scrollProps {
  scrollX: Animated.Value;
}

const Backdrop: React.FC<scrollProps> = ({ scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: BG.map((_, i) => i * SCREEN_WIDTH),
    outputRange: BG.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[StyleSheet.absoluteFillObject, { backgroundColor }]}
    />
  );
};

const Square: React.FC<scrollProps> = ({ scrollX }) => {
  const YOLO = Animated.modulo(
    Animated.divide(
      Animated.modulo(scrollX, SCREEN_WIDTH),
      new Animated.Value(SCREEN_WIDTH)
    ),
    1
  );

  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["35deg", "0deg", "35deg"],
  });

  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -SCREEN_HEIGHT, 0],
  });

  return (
    <Animated.View
      style={{
        width: SCREEN_HEIGHT,
        height: SCREEN_HEIGHT,
        backgroundColor: "#fff",
        borderRadius: 9999,
        top: -SCREEN_HEIGHT * 0.6,
        left: -SCREEN_HEIGHT * 0.3,
        position: "absolute",
        transform: [
          {
            rotate,
          },
          {
            translateX,
          },
        ],
      }}
    />
  );
};

export default function OnboardingScreen() {
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

      <View style={{ bottom: 70, flexDirection: "row" }}>
        <Button
          title=" Login"
          type="outline"
          buttonStyle={{ borderColor: "white" }}
          titleStyle={{ color: "white" }}
          icon={<MaterialCommunityIcons name="login" size={24} color="white" />}
          // onPress={() => {
          //   useNavigation().navigate("signup");
          // }}
        />
      </View>

      <ScrollIndicator
        scrollX={scrollX}
        data={DATA}
        dotStyle={{ backgroundColor: "white" }}
        containerStyle={{ bottom: 25 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
