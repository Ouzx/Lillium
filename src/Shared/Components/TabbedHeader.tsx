import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import StickyParallaxHeader from "react-native-sticky-parallax-header";

import BookCard from "./BookCard";
import Logo from "./Logo";
import { LibraryBooks } from "../../Demo";
import { Numbers, Styles, Colors } from "../../utils";

interface Props {
  screenName: string;
}

const TabbedHeader = (props: Props) => {
  const renderHeader = () => {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: Colors.transparentBg, justifyContent: "center" },
        ]}
      >
        <StatusBar
          backgroundColor={Colors.mainBG}
          barStyle="light-content"
          translucent={false}
        />
        <Logo />
      </View>
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
      <View style={[Styles.container, { padding: Numbers.padding.S }]}>
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
        headerType={"TabbedHeader"}
        backgroundColor={Colors.transparentBg}
        tabs={tabs}
        header={renderHeader}
        headerHeight={70} // TODO: make dynamic
        rememberTabScrollPosition
        title={props.screenName}
        titleStyle={Styles.h1}
        decelerationRate="normal"
        logoStyle={{ transform: [{ scale: 0 }] }}
        tabTextContainerActiveStyle={{ backgroundColor: "transparent" }}
        tabTextActiveStyle={{ color: Colors.primary }}
        tabTextStyle={{
          color: Colors.nonActive,
        }}
        tabTextContainerStyle={{
          backgroundColor: "transparent",
        }}
        contentContainerStyles={{
          backgroundColor: Colors.transparentBg,
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
});

export default TabbedHeader;
