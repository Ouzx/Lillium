import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "../utils";

interface SlideProps {
  title: string;
  description: string;
  image: string;
}

// Create function component type of SlideProps
const Slide: React.FC<SlideProps> = ({ title, description, image }) => {
  return (
    <View style={{ width: SCREEN_WIDTH, alignItems: "center", padding: 20 }}>
      <View style={{ flex: 0.7, justifyContent: "center" }}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={{ flex: 0.3 }}>
        <Text
          style={{
            fontWeight: "800",
            fontSize: 28,
            marginBottom: 10,
            color: "#fff",
          }}
        >
          {title}
        </Text>
        <Text style={{ fontWeight: "300" }}>{description}</Text>
      </View>
    </View>
  );
};

export default Slide;

// create style sheet
const styles = StyleSheet.create({
  image: {
    width: SCREEN_WIDTH / 2,
    height: SCREEN_WIDTH / 2,
    resizeMode: "contain",
  },
});
