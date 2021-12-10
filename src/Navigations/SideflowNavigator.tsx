import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Screens } from "../utils";
import { CategoryScreen, AuthorProfileScreen, BookScreen } from "../Sideflow";

const Stack = createNativeStackNavigator();

const SideflowNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Screens.CATEGORY} component={CategoryScreen} />
      <Stack.Screen name={Screens.AUTHOR} component={AuthorProfileScreen} />
      <Stack.Screen name={Screens.BOOK} component={BookScreen} />
    </Stack.Navigator>
  );
};

export default SideflowNavigator;
