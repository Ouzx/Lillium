import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignedStack from "./SignedStack";
import UnsignedStack from "./UnsignedStack";
import { Stacks } from "../utils";

const Stack = createNativeStackNavigator();

// TODO: Send callback to stacks for updating the signed state

export default function RootStack() {
  const [signed, setSigned] = useState(true);
  return (
    <Stack.Navigator
      initialRouteName={Stacks.UNSIGNED}
      screenOptions={{ headerShown: false }}
    >
      {signed ? (
        <Stack.Screen name={Stacks.SIGNED} component={SignedStack} />
      ) : (
        <Stack.Screen name={Stacks.UNSIGNED} component={UnsignedStack} />
      )}
    </Stack.Navigator>
  );
}
