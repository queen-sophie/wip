import "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import SignUpStep0Screen from "./FormSignUp/SignUpStep0";
import SignUpStep1Screen from "./FormSignUp/SignUpStep1";
import SignUpStep2Screen from "./FormSignUp/SignUpStep2";
import SignUpStep3Screen from "./FormSignUp/SignUpStep3";
import SignUpStep4Screen from "./FormSignUp/SignUpStep4";
import SignUpStep5Screen from "./FormSignUp/SignUpStep5";
import SignUpStep6Screen from "./FormSignUp/SignUpStep6";
import SignUpStep7Screen from "./FormSignUp/SignUpStep7";
import SignUpStep8Screen from "./FormSignUp/SignUpStep8";

const Stack = createStackNavigator();

export default function SignUpFormScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        activeTintColor: "#42f44b",
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Stack.Screen name="SignUpStep0" component={SignUpStep0Screen} />
      <Stack.Screen name="SignUpStep1" component={SignUpStep1Screen} />
      <Stack.Screen name="SignUpStep2" component={SignUpStep2Screen} />
      <Stack.Screen name="SignUpStep3" component={SignUpStep3Screen} />
      <Stack.Screen name="SignUpStep4" component={SignUpStep4Screen} />
      <Stack.Screen name="SignUpStep5" component={SignUpStep5Screen} />
      <Stack.Screen name="SignUpStep6" component={SignUpStep6Screen} />
      <Stack.Screen name="SignUpStep7" component={SignUpStep7Screen} />
      <Stack.Screen name="SignUpStep8" component={SignUpStep8Screen} />
    </Stack.Navigator>
  );
}
