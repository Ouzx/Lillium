import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  SigninScreen,
  SignupScreen,
  OnboardingScreen,
} from "../Authentication";

const Stack = createNativeStackNavigator();

export default function Unsigned() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="onboarding"
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="signin" component={SigninScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
