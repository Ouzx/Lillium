import React from "react";
import { View, StyleSheet, StatusBar, Animated } from "react-native";

import StickyParallaxHeader from "react-native-sticky-parallax-header";

import BookCard from "./BookCard";
import BackButton from "./BackButton";
import Txt from "./Txt";
import BooksOnCard from "./BooksOnCard";

import { LibraryBooks } from "../../Demo";
import { Numbers, Styles, Colors } from "../../utils";

const { event, ValueXY } = Animated;
const scrollY = new ValueXY();

interface Props {
  screenName: string;
}

const TabbedHeader = (props: Props) => {
  const renderHeader = () => {
    const opacity = scrollY.y.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });

    const backgroundColor = scrollY.y.interpolate({
      inputRange: [0, 100],
      outputRange: [Colors.transparentBg, Colors.mainBG],
    });

    return (
      <>
        <Animated.View
          style={[
            styles.container,
            { justifyContent: "center", backgroundColor },
          ]}
        >
          <StatusBar
            backgroundColor={Colors.mainBG}
            barStyle="light-content"
            translucent={false}
          />
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              // justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <BackButton style={{ marginRight: Numbers.margin.XS }} />

            <Animated.Text style={[Styles.plainText, { opacity }]}>
              {props.screenName}
            </Animated.Text>
          </View>
        </Animated.View>
      </>
    );
  };

  const renderForeground = () => {
    const opacity = scrollY.y.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <Animated.View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          marginBottom: Numbers.margin.L,
          padding: Numbers.padding.S,
          opacity,
        }}
      >
        <Txt numberOfLines={2} style={Styles.h1}>
          {props.screenName}
        </Txt>
        <BooksOnCard count={21} />
      </Animated.View>
    );
  };

  const renderContent = (title: string) => {
    return LibraryBooks.map(
      (books, _) =>
        books.name === title &&
        books.content.map((book, _) => (
          <View key={book.id}>
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              image={book.img}
              description={book.bookDescription}
              pages={book.pageCount}
              rating={book.rating}
              containerStyle={styles.detailCard}
              noBadge
            />
          </View>
        ))
    );
  };

  const renderParallax = (title: string) => {
    return (
      <View
        style={[
          Styles.container,
          { padding: Numbers.padding.S, backgroundColor: Colors.transparentBg },
        ]}
      >
        {renderContent(title)}
      </View>
    );
  };

  const tabs = [
    {
      title: "Continue",
      content: renderParallax("Continue"),
    },
    {
      title: "Read it later",
      content: renderParallax("Read it later"),
    },
    {
      title: "Saved",
      content: renderParallax("Saved"),
    },
  ];

  return (
    <>
      <StickyParallaxHeader
        // foregroundImage={}
        headerType={"TabbedHeader"}
        backgroundColor={Colors.transparentBg}
        tabs={tabs}
        header={renderHeader}
        foreground={renderForeground}
        headerHeight={70}
        rememberTabScrollPosition
        decelerationRate="normal"
        tabTextContainerActiveStyle={{ backgroundColor: "transparent" }}
        tabTextActiveStyle={{ color: Colors.primary }}
        tabTextStyle={{
          color: Colors.nonActive,
        }}
        tabTextContainerStyle={{
          backgroundColor: "transparent",
        }}
        tabsContainerStyle={{
          flex: 1,
          backgroundColor: Colors.mainBG,
        }}
        tabWrapperStyle={{
          paddingLeft: 0,
          marginRight: Numbers.margin.S,
          marginVertical: Numbers.margin.S,
        }}
        scrollEvent={event(
          [{ nativeEvent: { contentOffset: { y: scrollY.y } } }],
          { useNativeDriver: false }
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Numbers.padding.S,
  },
  detailCard: {
    marginTop: Numbers.margin.S,
    marginBottom: Numbers.margin.S,
  },
  headerText: {},
});

export default TabbedHeader;
