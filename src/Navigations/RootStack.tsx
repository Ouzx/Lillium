import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignedStack, UnsignedStack, Stacks } from ".";

const Stack = createNativeStackNavigator();
export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName={Stacks.UNSIGNED}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={Stacks.SIGNED} component={SignedStack} />
      <Stack.Screen name={Stacks.UNSIGNED} component={UnsignedStack} />
    </Stack.Navigator>
  );
}
