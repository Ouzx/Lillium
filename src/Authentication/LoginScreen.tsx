import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

import { Container, Logo } from "../Shared";
import { Styles, Numbers, Colors } from "../utils";

export default function LoginScreen() {
  const [isHide, setIsHide] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <ImageBackground
        style={Styles.imageContainer}
        source={require("../../assets/img/login-background.png")}
      >
        <Logo />
        <Text style={[Styles.headingText, styles.headerText]}>
          {" New style to read \n book"}
        </Text>

        <View style={styles.loginContainer}>
          <Input
            placeholder="Email"
            placeholderTextColor={Colors.nonActive}
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            onChangeText={(text) => setEmail(text)}
            leftIcon={
              <Feather
                name="mail"
                size={24}
                color={Colors.nonActive}
                style={styles.inputIcon}
              />
            }
          />
          <Input
            placeholder="Password"
            placeholderTextColor={Colors.nonActive}
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            secureTextEntry={isHide}
            onChangeText={(text) => setPassword(text)}
            leftIcon={
              <Feather
                name="key"
                size={24}
                color={Colors.nonActive}
                style={styles.inputIcon}
              />
            }
            rightIcon={
              <TouchableOpacity onPress={() => setIsHide(!isHide)}>
                {isHide ? (
                  <Feather
                    name="eye-off"
                    size={24}
                    color={Colors.nonActive}
                    style={styles.eyeIcon}
                  />
                ) : (
                  <Feather
                    name="eye"
                    size={24}
                    color={Colors.nonActive}
                    style={styles.eyeIcon}
                  />
                )}
              </TouchableOpacity>
            }
          />
          <TouchableOpacity
            onPress={() => {
              console.log("forgot password");
            }}
          >
            <Text style={Styles.comment}>Forgot Password?</Text>
          </TouchableOpacity>
          <Button
            title={"Login"}
            containerStyle={styles.buttonContainer}
            buttonStyle={[styles.button, { backgroundColor: Colors.primary }]}
          />
          <Button
            title={"Register"}
            containerStyle={styles.buttonContainer}
            buttonStyle={[styles.button, { backgroundColor: Colors.secondary }]}
          />
        </View>
      </ImageBackground>
    </Container>
  );
}

// create stylesheet
const styles = StyleSheet.create({
  headerText: {
    marginTop: Numbers.margin.XL,
    fontSize: Numbers.font.M,
  },
  loginContainer: {
    marginTop: Numbers.margin.L,
    paddingHorizontal: Numbers.padding.XS,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.nonActive,
    borderRadius: Numbers.radius.S,
    borderBottomRightRadius: 0,
    paddingLeft: Numbers.padding.S,
    paddingVertical: Numbers.padding.S / 2,
  },
  input: {
    color: Colors.active,
  },
  inputIcon: {
    marginRight: Numbers.margin.S,
  },
  eyeIcon: {
    marginRight: Numbers.margin.M,
  },

  buttonContainer: {
    width: "100%",
    borderRadius: Numbers.radius.XL,
    marginVertical: Numbers.margin.M,
  },
  button: {
    borderRadius: Numbers.radius.XL,
    padding: Numbers.padding.XS,
  },
});
