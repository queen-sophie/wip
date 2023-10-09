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
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import accountCreationStyles from "../CreateAccount/Styles/AccountCreationStyles";
import CommonStyles from "../CreateAccount/Styles/CommonStyles";

const LogoIcon = require("../../../assets/logo-icons/RattleSecondaryLogo.png");

export default function SignUpStep3Screen() {
  const [verificationCode, setVerificationCode] = useState("");
  const navigation = useNavigation();

  const handleVerificationCodeChange = (text) => {
    setVerificationCode(text);
  };

  const handleContinue = () => {
    navigation.navigate("SignUpStep4");
    // Perform validation or verification logic here
    // You can navigate to the next step if the code is valid
  };
  const handleGoBack = () => {
    navigation.navigate("SignUpStep2");
    // Perform validation or verification logic here
    // You can navigate to the next step if the code is valid
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
        <View style={accountCreationStyles.logoContainer}>
          <Image source={LogoIcon} style={accountCreationStyles.logo} />
        </View>

        <View style={accountCreationStyles.contentContainer}>
          <Text style={accountCreationStyles.verificationTitle}>
            Verification
          </Text>
          <Text style={CommonStyles.labelText}>
            Enter the 6-digit verification code
          </Text>
          <View>
            <TextInput
              style={accountCreationStyles.input}
              placeholder="Verification Code"
              placeholderTextColor="#ccc"
              value={verificationCode}
              onChangeText={handleVerificationCodeChange}
              keyboardType="numeric"
              maxLength={6}
            />
            <TouchableOpacity
              style={CommonStyles.whiteButtonOuter}
              onPress={handleContinue}
            >
              <Text style={CommonStyles.whiteButtonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGoBack()}>
              <View
                style={CommonStyles.lightWhiteButtonOuter}
              >
                <Text style={CommonStyles.lightWhiteButtonText}>Back</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
