import React from "react";
import { View, StyleSheet, StatusBar, Animated } from "react-native";

import StickyParallaxHeader from "react-native-sticky-parallax-header";

import BookCard from "./BookCard";
import BackButton from "./BackButton";
import Logo from "./Logo";

import { Numbers, Styles, Colors } from "../../utils";

const { event, ValueXY } = Animated;
const scrollY = new ValueXY();

interface Props {
  screenName: string;
  tabs: Array<string>;
  data: Array<{
    name: string;
    content: Array<any>;
  }>;
  foreground: () => JSX.Element;
  microBookCard?: boolean;
  noBackButton?: boolean;
  onBackPress?: () => void;
}

const ParallaxHeader = (props: Props) => {
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
            {props.noBackButton ? (
              <View style={{ flex: 1 }}>
                <Logo />
              </View>
            ) : (
              <>
                <BackButton style={{ marginRight: Numbers.margin.XS }} />
                <Animated.Text style={[Styles.plainText, { opacity }]}>
                  {props.screenName}
                </Animated.Text>
              </>
            )}
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
        {props.foreground()}
      </Animated.View>
    );
  };

  const renderContent = (title: string) => {
    return props.data.map(
      (tab, _) =>
        tab.name === title &&
        tab.content.map((book, _) =>
          props.microBookCard ? null /* TODO: Create micro book card A */ : (
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
          )
        )
    );
  };

  const renderParallax = (title: string) => {
    return (
      <View
        style={[
          Styles.container,
          { padding: Numbers.padding.S, backgroundColor: "transparent" },
        ]}
      >
        {renderContent(title)}
      </View>
    );
  };

  const tabs = props.tabs.map((tab, _) => {
    return {
      title: tab,
      content: renderParallax(tab),
    };
  });

  return (
    <>
      <StickyParallaxHeader
        headerType={"TabbedHeader"}
        backgroundColor={Colors.transparentBg}
        tabs={tabs}
        header={renderHeader}
        foreground={renderForeground}
        parallaxHeight={300}
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

export default ParallaxHeader;
