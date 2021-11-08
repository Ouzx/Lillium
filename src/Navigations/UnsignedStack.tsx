import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  LoginScreen,
  RegisterScreen,
  OnboardingScreen,
} from "../Authentication";

import { Screens } from ".";

const Stack = createNativeStackNavigator();

export default function Unsigned() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.ONBOARDING}
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={Screens.LOGIN} component={LoginScreen} />
      <Stack.Screen name={Screens.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
  );
}
