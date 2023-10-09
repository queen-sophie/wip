// username, password, profile pic, first name last name, location?
import "react-native-gesture-handler";
import "react-native-safe-area-context";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
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
import CommonStyles from "../CreateAccount/Styles/CommonStyles";
import step4Styles from "../CreateAccount/Styles/Step4Styles";

const DemocraticIcon = require("../../../assets/party-icons/Democratic_Disc.png");
const RepublicanIcon = require("../../../assets/party-icons/Republican_Disc.png");
const LibertarianIcon = require("../../../assets/party-icons/Libertarian_Disc.png");
const GreenIcon = require("../../../assets/party-icons/Green_Disc.png");
const IndependentIcon = require("../../../assets/party-icons/Independent_Disc.png");

const LogoIcon = require("../../../assets/logo-icons/RattleSecondaryLogo.png");

const PARTIES = [
  { text: "Democratic", imageSource: DemocraticIcon },
  { text: "Republican", imageSource: RepublicanIcon },
  { text: "Libertarian", imageSource: LibertarianIcon },
  { text: "Green", imageSource: GreenIcon },
  { text: "Independent", imageSource: IndependentIcon },
];

export default function SignUpStep2Screen() {
  const [location, setLocation] = useState();
  const [profession, setProfession] = useState();
  const [affiliation, setAffiliation] = useState("");

  const navigation = useNavigation();

  const handleContinue = async () => {
    navigation.navigate("SignUpStep3");
  };
  const handleGoBack = () => {
    navigation.navigate("SignUpStep1");
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
        <View style={accountCreationStyles.formContainer}>
          <TextInput
            style={accountCreationStyles.input}
            placeholder="Location"
            placeholderTextColor="#ccc"
            value={location}
            onChangeText={(text) => setLocation(text)}
            autoCapitalize="none"
          />
          <TextInput
            style={accountCreationStyles.input}
            placeholder="Profession"
            placeholderTextColor="#ccc"
            value={profession}
            onChangeText={(text) => setProfession(text)}
            autoCapitalize="none"
          />

          <Text style={CommonStyles.labelText}>
            Declare your political party affiliation
          </Text>
          <View style={step4Styles.partyContainer}>
            {PARTIES.map((item) => (
              <TouchableOpacity
                key={`party-${item.text}`}
                onPress={() => setAffiliation(item.text)}
              >
                <View style={step4Styles.partyItem}>
                  <Image
                    source={item.imageSource}
                    style={step4Styles.partyImage}
                  />
                  <Text style={step4Styles.partyText}>{item.text}</Text>
                  {affiliation === item.text && (
                    <View style={styles.selectedParty}>
                      <MaterialIcons
                        name="check-circle"
                        size={28}
                        color="#157347"
                      />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            style={CommonStyles.alignItemsCenter}
            onPress={() => handleContinue()}
          >
            <View style={CommonStyles.whiteButtonOuter}>
              <Text style={CommonStyles.whiteButtonText}>Next</Text>
            </View>
          </TouchableOpacity>

          <Text style={accountCreationStyles.disclaimerText}>
            By signing up, you agree to our Terms, Privacy Policy, and Cookie
            Use
          </Text>
          <View style={accountCreationStyles.smallSpacing} />
          <TouchableOpacity
            style={CommonStyles.alignItemsCenter}
            onPress={() => handleGoBack()}
          >
            <View style={CommonStyles.lightWhiteButtonOuter}>
              <Text style={CommonStyles.lightWhiteButtonText}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  selectedParty: {
    position: "absolute",
    opacity: 0.8,
    top: 0,
    right: -5,
  },
});
