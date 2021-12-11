import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Numbers, Styles, Colors } from "../utils";
import { ShareCards, BackButton, SettingsButton, Txt } from "../Shared";
import Pen from "./Components/Pen";
import RiliStop from "./Components/RiliStop";
import SaveCard from "./Components/SaveCard";

import Swiper from "react-native-deck-swiper";
import { Philosophers_Stone } from "../Demo";

const ReadingScreen = () => {
  const [swipedAllCards, setSwipedAllCards] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const interpolateCards = (index: number) => {
    const zed = index % 4;
    switch (zed) {
      case 0:
        return "#070D15";
      case 1:
        return "#293340";

      case 2:
        return "#516580";

      case 3:
        return "#8191A6";

      default:
        return "#070D15";
    }
  };

  const renderCard = (
    card: { title: string; content: string },
    index: number
  ) => {
    const bg = interpolateCards(index);
    const { title, content } = card;
    return (
      <View style={[styles.card, { backgroundColor: bg }]}>
        <Text style={styles.text}>{title}</Text>
        <Text style={{ fontSize: 13, color: "white", lineHeight: 20 }}>
          {content}
        </Text>

        <View
          style={{
            flex: 1,
            position: "absolute",
            left: "100%",
            top: "100%",
          }}
        >
          <ShareCards />
        </View>
      </View>
    );
  };

  const onSwiped = (propz: any) => {
    console.log(propz);
  };

  const onSwipedAllCards = () => {
    setSwipedAllCards(true);
    // this.props.navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E2E2E2" }}>
      <StatusBar hidden={true} />
      <View>
        <View
          style={{
            top: 0,
            height: 70,
            // width: "100%",
            marginHorizontal: 20,
            borderBottomLeftRadius: Numbers.radius.M,
            borderBottomRightRadius: Numbers.radius.M,
            backgroundColor: Colors.mainBG,
            padding: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <BackButton />
          <Txt
            numberOfLines={1}
            style={{
              fontSize: 18,
              width: "80%",
              color: "white",
              paddingHorizontal: 3,
              textAlign: "center",
            }}
          >
            Harry Potter and the Sorcerer's Stonesss
          </Txt>
          <SettingsButton />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Swiper
          onSwiped={(index: number) => {
            setCurrentIndex(currentIndex + 1);
            onSwiped(index);
          }}
          cards={Philosophers_Stone}
          cardIndex={currentIndex}
          renderCard={renderCard}
          onSwipedAll={onSwipedAllCards}
          stackSize={4}
          stackSeparation={-20}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
          backgroundColor={"#E2E2E2"}
        />
      </View>
      <View>
        <View
          style={{
            height: 20,
            width: "20%",
            alignSelf: "center",
            borderTopLeftRadius: Numbers.radius.M,
            borderTopRightRadius: Numbers.radius.M,
            backgroundColor: Colors.mainBG,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 10 }}>
            {currentIndex + 1}/{Philosophers_Stone.length}
          </Text>
        </View>
        <View
          style={{
            height: 70,
            // width: "100%",
            marginHorizontal: 20,
            borderTopLeftRadius: Numbers.radius.M,
            borderTopRightRadius: Numbers.radius.M,
            backgroundColor: Colors.mainBG,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pen />
            <RiliStop style={{ marginHorizontal: 20 }} />
            <SaveCard />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReadingScreen;

const styles = StyleSheet.create({
  card: {
    borderRadius: Numbers.radius.M,
    height: "80%",
    padding: 20,
    position: "relative",
  },
  text: {
    left: "10%",
    marginBottom: 25,
    textAlign: "left",
    fontSize: 24,
    color: "white",
  },
});
