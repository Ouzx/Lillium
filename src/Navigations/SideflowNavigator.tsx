import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Screens } from "../utils";
import {
  CategoryScreen,
  AuthorProfileScreen,
  BookScreen,
  ReadingScreen,
} from "../Sideflow";

const Stack = createNativeStackNavigator();

const SideflowNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Screens.READING}
    >
      <Stack.Screen name={Screens.CATEGORY} component={CategoryScreen} />
      <Stack.Screen name={Screens.AUTHOR} component={AuthorProfileScreen} />
      <Stack.Screen name={Screens.BOOK} component={BookScreen} />
      <Stack.Screen name={Screens.READING} component={ReadingScreen} />
    </Stack.Navigator>
  );
};

export default SideflowNavigator;
