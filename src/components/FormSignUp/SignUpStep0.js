import "react-native-gesture-handler";
import "react-native-safe-area-context";

import DateTimePicker from "@react-native-community/datetimepicker";
import { useHeaderHeight } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import accountCreationStyles from "../CreateAccount/Styles/AccountCreationStyles";
import CommonStyles from "../CreateAccount/Styles/CommonStyles";

const LogoIcon = require("../../../assets/logo-icons/RattleSecondaryLogo.png");

export default function SignUpStep0Screen() {
  // form fields
  const [email, setEmail] = useState(); // email OR phone number
  const [password, setPassword] = useState();
  const [birthday, setBirthday] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    hideDatepicker();
    if (selectedDate) {
      setBirthday(selectedDate);
    }
  };

  const hideDatepicker = () => {
    setDatePickerVisible(false);
  };

  const showDatepicker = () => {
    setDatePickerVisible(true);
  };

  // next / back buttons
  const navigation = useNavigation();

  const handleSignUp = async () => {
    navigation.navigate("SignUpStep1");
  };

  const handleGoBack = () => {
    navigation.goBack();
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
            placeholder="Email or Phone Number"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
          />
          <TextInput
            style={accountCreationStyles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            value={password}
            onChangeText={(text) => setPassword(text)}
            autoCapitalize="none"
            secureTextEntry
          />
          <TouchableOpacity onPress={showDatepicker}>
            <TextInput
              style={accountCreationStyles.input}
              placeholder="Select Date of Birth"
              placeholderTextColor="#ccc"
              value={birthday ? birthday.toDateString() : ""}
              autoCapitalize="none"
              editable={false}
            />
          </TouchableOpacity>

          <Modal
            visible={datePickerVisible}
            transparent
            animationType="slide"
            onRequestClose={hideDatepicker}
          >
            <DateTimePicker
              testID="dateTimePicker"
              value={birthday || new Date()}
              mode="date"
              is24Hour
              display="default"
              onChange={handleDateChange}
            />
          </Modal>

          <TouchableOpacity
            style={CommonStyles.alignItemsCenter}
            onPress={handleSignUp}
          >
            <View style={CommonStyles.whiteButtonOuter}>
              <Text style={CommonStyles.whiteButtonText}>Create Account</Text>
            </View>
          </TouchableOpacity>

          <Text style={[CommonStyles.footNoteText]}>
            By signing up, you agree to our Terms, Privacy Policy,
          </Text>
          <Text style={[CommonStyles.footNoteText]}>and Cookie Use</Text>

          <TouchableOpacity
            style={CommonStyles.alignItemsCenter}
            onPress={handleGoBack}
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
