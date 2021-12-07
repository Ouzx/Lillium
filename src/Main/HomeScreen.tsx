import React from "react";
import { StyleSheet, ImageBackground, ScrollView } from "react-native";

import { BOOKS, DETAIL } from "../Demo";
import MiniBookCard from "../Shared/Components/MiniBookCard";

import { Container, Logo, DetailCard, RowList } from "../Shared";
import { Numbers } from "../utils";

const HomeScreen = () => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require("../../assets/img/home-bg.png")}
          style={styles.container}
        >
          <Logo />
          <DetailCard
            title={DETAIL.title}
            description={DETAIL.description}
            author={DETAIL.author}
            image={DETAIL.image}
            containerStyle={styles.detailCard}
          />
        </ImageBackground>

        <RowList books={BOOKS} title="Recent >" renderItem={MiniBookCard} />
        <RowList books={BOOKS} title="Popular >" renderItem={MiniBookCard} />
        <RowList books={BOOKS} title="News >" renderItem={MiniBookCard} />
        <RowList books={BOOKS} title="For you >" renderItem={MiniBookCard} />
        <RowList books={BOOKS} title="Classics >" renderItem={MiniBookCard} />
        <RowList books={BOOKS} title="History >" renderItem={MiniBookCard} />
        <RowList books={BOOKS} title="Science >" renderItem={MiniBookCard} />
        <RowList books={BOOKS} title="Art >" renderItem={MiniBookCard} />
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
