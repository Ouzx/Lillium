import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { HomeScreen, LibraryScreen, SearchScreen } from "../Main";
import { Screens } from "../utils";
import { Colors } from "../utils";

const Tab = createBottomTabNavigator();

export default function Signed() {
  return (
    <Tab.Navigator
      initialRouteName={Screens.SEARCH}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === Screens.HOME) {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === Screens.SEARCH) {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === Screens.LIBRARY) {
            iconName = focused ? "library" : "library-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: Colors.nonActive,
        tabBarStyle: {
          backgroundColor: Colors.dark,
          borderTopWidth: 0,
        },
      })}
    >
      <Tab.Screen name={Screens.HOME} component={HomeScreen} />
      <Tab.Screen name={Screens.SEARCH} component={SearchScreen} />
      <Tab.Screen name={Screens.LIBRARY} component={LibraryScreen} />
    </Tab.Navigator>
  );
}
