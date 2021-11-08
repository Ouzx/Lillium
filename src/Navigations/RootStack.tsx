import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignedStack, UnsignedStack } from ".";

const Stack = createNativeStackNavigator();
export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="unsigned"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="signed" component={SignedStack} />
      <Stack.Screen name="unsigned" component={UnsignedStack} />
    </Stack.Navigator>
  );
}
