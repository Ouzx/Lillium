import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { RootStack } from "./src/Navigations";

export default function App() {
  // TODO: Rescle whole app width percentages
  return <NavigationContainer>{<RootStack />}</NavigationContainer>;
}
