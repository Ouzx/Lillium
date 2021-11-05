import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "./src/Onboarding";

const Stack = createNativeStackNavigator();

const isSignedIn = false;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? null : (
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
