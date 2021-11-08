import React from "react";
import { StyleSheet, View, Animated, StatusBar } from "react-native";
import { Button } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { DATA } from "../../Demo";
import ScrollIndicator from "./ScrollIndicator";
import Slide from "./Slide";
import Backdrop from "./Backdrop";
import Square from "./Square";

import { Screens } from "../../Navigations";

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

      <View style={{ bottom: 70, flexDirection: "row" }}>
        <Button
          title=" Login / Register"
          type="outline"
          buttonStyle={{ borderColor: "white" }}
          titleStyle={{ color: "white" }}
          icon={<MaterialCommunityIcons name="login" size={24} color="white" />}
          onPress={() => {
            navigation.navigate(Screens.LOGIN);
          }}
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
