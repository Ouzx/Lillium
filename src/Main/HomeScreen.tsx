import React from "react";
import { StyleSheet, ImageBackground, ScrollView } from "react-native";

import { Container, Logo, DetailCard } from "../Shared";
import { Numbers } from "../utils";

const HomeScreen = () => {
  return (
    <Container>
      <ImageBackground
        source={require("../../assets/img/home-bg.png")}
        style={styles.container}
      >
        <ScrollView>
          <Logo />
          <DetailCard
            title="Deacon King Kong"
            description={
              "A mystery story, a crime novel, an urban farce, a sociological portrait of late-1960s Brooklyn."
            }
            author="James MC Bride"
            image={require("../../assets/img/card-bg.png")}
            containerStyle={styles.detailCard}
          />
        </ScrollView>
      </ImageBackground>
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
