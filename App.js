import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

// import { getRandomBytes } from 'react-native-get-random-values';
import HomeNavScreen from "./src/components/HomeNav";
import News from "./src/components/News";
import Quiz from "./src/components/Quiz/Quiz";
import QuizResults from "./src/components/Quiz/QuizResults";
import SignInScreen from "./src/components/SignIn";
import SignUp from "./src/components/SignUp";
import SignUpFormScreen from "./src/components/SignUpForm";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false, // Remove the header
          }}
        />
        <Stack.Screen
          name="News"
          component={News}
          options={{
            headerShown: false, // Remove the header
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            headerShown: false, // Remove the header
          }}
        />
        <Stack.Screen
          name="SignUpForm"
          component={SignUpFormScreen}
          options={{
            headerShown: false, // Remove the header
          }}
        />
        <Stack.Screen
          name="HomeNav"
          component={HomeNavScreen}
          options={{
            headerShown: false, // Remove the header
          }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{
            headerShown: false, // Remove the header
          }}
        />
        <Stack.Screen
          name="QuizResults"
          component={QuizResults}
          options={{
            headerShown: false, // Remove the header
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
