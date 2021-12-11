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
  //   const [swipedAllCards, setSwipedAllCards] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  //   let swiper;

  const interpolateCards = (index: number) => {
    const zed = index % 4;
    switch (zed) {
      case 0:
        return { color: Colors.card1, angle: "0deg", pos: 0 };
      case 1:
        return { color: Colors.card2, angle: "2.75deg", pos: -10 };

      case 2:
        return { color: Colors.card3, angle: "-1.75deg", pos: -15 };

      case 3:
        return { color: Colors.card4, angle: "1deg", pos: -18 };

      default:
        return { color: Colors.card1, angle: "0deg", pos: 0 };
    }
  };

  const onSwiped = (propz: any) => {
    console.log(propz);
  };

  const onSwipedAllCards = () => {
    // setSwipedAllCards(true);
    // this.props.navigation.goBack();
  };

  const renderCard = (
    card: { title: string; content: string },
    index: number
  ) => {
    const { color, angle, pos } = interpolateCards(index);
    const { title, content } = card;
    return (
      <View
        style={[
          styles.card,
          {
            backgroundColor: color,
            transform: [{ rotateZ: angle }, { translateY: pos }],
          },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <ShareCards style={styles.shareCards} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <View style={styles.header}>
          <BackButton />
          <Txt numberOfLines={1} style={styles.headerText}>
            Harry Potter and the Sorcerer's Stonesss
          </Txt>
          <SettingsButton />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Swiper
          //   ref={(_swiper) => {
          //     swiper = _swiper;
          //   }}
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
        <View style={styles.pageCounter}>
          <Text style={styles.counterText}>
            {currentIndex + 1}/{Philosophers_Stone.length}
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={Styles.alignRow}>
            <Pen />
            <RiliStop style={{ marginHorizontal: Numbers.margin.M }} />
            <SaveCard />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReadingScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.readingBacground },
  header: {
    top: 0,
    height: 70,
    marginHorizontal: 20,
    borderBottomLeftRadius: Numbers.radius.M,
    borderBottomRightRadius: Numbers.radius.M,
    backgroundColor: Colors.mainBG,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 18,
    width: "80%",
    color: "white",
    paddingHorizontal: 3,
    textAlign: "center",
  },
  card: {
    borderRadius: Numbers.radius.M,
    height: "80%",
    padding: 20,
    position: "relative",
  },
  title: {
    left: "10%",
    marginBottom: 25,
    textAlign: "left",
    fontSize: 24,
    color: "white",
  },
  content: { fontSize: 13, color: Colors.active, lineHeight: 20 },
  shareCards: { flex: 1, position: "absolute", left: "100%", top: "100%" },
  pageCounter: {
    height: 20,
    width: "20%",
    alignSelf: "center",
    borderTopLeftRadius: Numbers.radius.M,
    borderTopRightRadius: Numbers.radius.M,
    backgroundColor: Colors.mainBG,
    alignItems: "center",
    justifyContent: "center",
  },
  counterText: { textAlign: "center", color: "white", fontSize: 10 },
  footer: {
    height: 70,
    // width: "100%",
    marginHorizontal: 20,
    borderTopLeftRadius: Numbers.radius.M,
    borderTopRightRadius: Numbers.radius.M,
    backgroundColor: Colors.mainBG,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
