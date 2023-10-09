//
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

export default function SignUpStep5Screen() {
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate("SignUpStep6");
    // Perform validation or verification logic here
    // You can navigate to the next step if the code is valid
  };
  const handleGoBack = () => {
    navigation.navigate("SignUpStep4");
    // Perform validation or verification logic here
    // You can navigate to the next step if the code is valid
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
          <Text style={accountCreationStyles.debugTitle}>Step #6:</Text>
          <Text style={accountCreationStyles.debugText}>
            * Suggested Content
          </Text>
        </View>
        <View style={step5Styles.contentContainer}>
          <Text style={step5Styles.title}>Suggestions...</Text>
          <Text style={step5Styles.subtitle}>Content</Text>
          <TouchableOpacity
            style={accountCreationStyles.button}
            onPress={handleContinue}
          >
            <Text style={step4Styles.continueButtonText}>Next</Text>
          </TouchableOpacity>
          <View style={accountCreationStyles.smallSpacing}></View>
          <TouchableOpacity onPress={() => handleGoBack()}>
            <View style={accountCreationStyles.button}>
              <Text style={accountCreationStyles.signInButtonText}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
