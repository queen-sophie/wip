import "react-native-gesture-handler";
import "react-native-safe-area-context";

import { useHeaderHeight } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import accountCreationStyles from "../CreateAccount/Styles/AccountCreationStyles";
import step5Styles from "../CreateAccount/Styles/Step5Styles";
import step4Styles from "../CreateAccount/Styles/Step4Styles";

const LogoIcon = require("../../../assets/logo-icons/RattleSecondaryLogo.png");

export default function SignUpStep6Screen() {
  const navigation = useNavigation();

  const toQuiz = () => {
    navigation.navigate("Quiz", { text: "signup" });
  };
  const handleContinue = () => {
    navigation.navigate("SignUpStep7");
  };
  const handleGoBack = () => {
    navigation.navigate("SignUpStep5");
  };
  const headerHeight = useHeaderHeight();
  return (
    <LinearGradient
      colors={["rgb(126, 98, 114)", "rgb(161, 105, 111)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={step5Styles.container}
    >
      <KeyboardAvoidingView
        style={step5Styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={headerHeight}
      >
        <View style={accountCreationStyles.logoContainer}>
          <Image source={LogoIcon} style={accountCreationStyles.logo} />
          <Text style={accountCreationStyles.debugTitle}>Step #7:</Text>
          <Text style={accountCreationStyles.debugText}>
            * Political Compass Quiz (optional){" "}
          </Text>
        </View>
        <View style={accountCreationStyles.container}>
          <TouchableOpacity
            style={accountCreationStyles.button}
            onPress={toQuiz}
          >
            <Text style={accountCreationStyles.signInButtonText}>
              Take Political Compass Test
            </Text>
          </TouchableOpacity>
          <View style={accountCreationStyles.smallSpacing}></View>
          <TouchableOpacity
            style={accountCreationStyles.button}
            onPress={handleContinue}
          >
            <Text style={accountCreationStyles.signInButtonText}>Skip </Text>
          </TouchableOpacity>
          <View style={accountCreationStyles.smallSpacing}></View>
          <TouchableOpacity
            style={accountCreationStyles.button}
            onPress={handleGoBack}
          >
            <Text style={accountCreationStyles.signInButtonText}>Back </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
