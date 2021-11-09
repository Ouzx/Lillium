import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignedStack from "./SignedStack";
import UnsignedStack from "./UnsignedStack";
import { Stacks } from "../utils";

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
