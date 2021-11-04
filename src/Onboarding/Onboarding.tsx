import React from "react";
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  StatusBar,
} from "react-native";

import { BG, DATA } from "./slides";
import ScrollIndicator from "./ScrollIndicator";
import Slide from "./Slide";

const { width, height } = Dimensions.get("screen");

interface scrollProps {
  scrollX: Animated.Value;
}

const Backdrop: React.FC<scrollProps> = ({ scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: BG.map((_, i) => i * width),
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
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1
  );

  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["35deg", "0deg", "35deg"],
  });

  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });

  return (
    <Animated.View
      style={{
        width: height,
        height: height,
        backgroundColor: "#fff",
        borderRadius: 9999,
        top: -height * 0.6,
        left: -height * 0.3,
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
export default function Onboarding() {
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

      <ScrollIndicator
        scrollX={scrollX}
        data={DATA}
        dotStyle={{ backgroundColor: "white" }}
        containerStyle={{ bottom: 100 }}
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
