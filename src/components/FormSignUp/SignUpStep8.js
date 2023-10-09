//
import "react-native-gesture-handler";
import "react-native-safe-area-context";

import { useHeaderHeight } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import accountCreationStyles from "../CreateAccount/Styles/AccountCreationStyles";

const LogoIcon = require("../../../assets/logo-icons/RattleSecondaryLogo.png");

export default function SignUpStep8Screen() {
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate("HomeNav");
  };
  const headerHeight = useHeaderHeight();
  return (
    <LinearGradient
      colors={["rgb(126, 98, 114)", "rgb(161, 105, 111)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={accountCreationStyles.container}
    >
      <KeyboardAvoidingView
        style={accountCreationStyles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={headerHeight}
      >
        <View style={accountCreationStyles.userLogoContainer}>
          <Image source={LogoIcon} style={accountCreationStyles.logo} />
        </View>
        <View style={accountCreationStyles.userContentContainer}>
          <Text style={accountCreationStyles.userTitle}>
            Your account has been successfully created!
          </Text>
          <Text style={accountCreationStyles.step7subTitle}>
            Welcome to Rattle!
            {"\n"} {"\n"}
            We are a social media platform, that aims to make it easier to
            discuss, research, and take action on political & activism related
            topics. Our core principals are nonpartisanship, transparency, and
            free thought.
            {"\n"} {"\n"}
            We are primarily focused on the US and hope to expand to other
            democratic nations soon :).
          </Text>
          <Text style={accountCreationStyles.step7subTitle}>
            Help fill out your interests so we can personalize your Rattle
            experience!
          </Text>
          <TouchableOpacity
            style={accountCreationStyles.continueButton}
            onPress={handleContinue}
          >
            <Text style={accountCreationStyles.createAccountButtonText}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
