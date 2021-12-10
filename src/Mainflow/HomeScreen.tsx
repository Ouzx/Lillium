import React from "react";
import { StyleSheet, ImageBackground, ScrollView } from "react-native";

import { BOOKS, DETAIL } from "../Demo";
import { Container, Logo, BookCard, RowList, MiniBookCard } from "../Shared";
import { Numbers } from "../utils";

// TODO: Randomize the books

const HomeScreen = () => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require("../../assets/img/home-bg.png")}
          style={styles.container}
        >
          <Logo />
          <BookCard
            title={DETAIL.title}
            description={DETAIL.description}
            author={DETAIL.author}
            image={DETAIL.image}
            containerStyle={styles.detailCard}
          />
        </ImageBackground>

        <RowList data={BOOKS} title="Recent >" renderItem={MiniBookCard} />
        <RowList data={BOOKS} title="Popular >" renderItem={MiniBookCard} />
        <RowList data={BOOKS} title="News >" renderItem={MiniBookCard} />
        <RowList data={BOOKS} title="For you >" renderItem={MiniBookCard} />
        <RowList data={BOOKS} title="Classics >" renderItem={MiniBookCard} />
        <RowList data={BOOKS} title="History >" renderItem={MiniBookCard} />
        <RowList data={BOOKS} title="Science >" renderItem={MiniBookCard} />
        <RowList data={BOOKS} title="Art >" renderItem={MiniBookCard} />
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Numbers.padding.S,
    overflow: "hidden",
    borderBottomLeftRadius: Numbers.radius.L,
  },
  detailCard: {
    marginTop: Numbers.margin.L,
    marginBottom: Numbers.margin.XL,
  },
});
