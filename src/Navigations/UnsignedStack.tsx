import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen, SignupScreen, OnboardingScreen } from "../Authentication";

import { Screens } from "../utils";

const Stack = createNativeStackNavigator();

export default function Unsigned() {
  return (
    <Stack.Navigator initialRouteName={Screens.LOGIN}>
      <Stack.Screen
        name={Screens.ONBOARDING}
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Screens.LOGIN}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Screens.SIGNUP}
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
