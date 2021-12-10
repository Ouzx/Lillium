import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SideflowNavigator from "./SideflowNavigator";
import MainflowNavigator from "./MainflowNavigator";

import { Flows } from "../utils";

const Stack = createNativeStackNavigator();

export default function Signed() {
  return (
    <Stack.Navigator
      initialRouteName={Flows.SIDE}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Flows.MAIN} component={MainflowNavigator} />
      <Stack.Screen name={Flows.SIDE} component={SideflowNavigator} />
    </Stack.Navigator>
  );
}
