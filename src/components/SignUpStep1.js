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

const LogoIcon = require("../../assets/logo-icons/RattleSecondaryLogo.png");

// TODO reconnect to backend

export default function SignUpStep1Screen() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSignUp = async () => {
    alert("Success! Your account has been created."); // eslint-disable-line no-alert
    navigation.navigate("HomeNav");
   
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
      style={styles.container}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={headerHeight}
      >
        <View style={styles.logoContainer}>
          <Image source={LogoIcon} style={styles.logo} />
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#999"
            value={name}
            onChangeText={(text) => setName(text)}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#999"
            value={username}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Email or Phone"
            placeholderTextColor="#999"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            autoCapitalize="none"
          />

          <TouchableOpacity onPress={() => handleSignUp()}>
            <View style={styles.createAccountButton}>
              <Text style={styles.createAccountButtonText}>Create Account</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.disclaimerText}>
            By signing up, you agree to our Terms, Privacy Policy, and Cookie
            Use
          </Text>
          <View style={styles.spacing} />
          <TouchableOpacity onPress={() => handleGoBack()}>
            <View style={styles.signInButton}>
              <Text style={styles.signInButtonText}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "50%",
  },
  signInButton: {
    backgroundColor: "#007bff",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logo: {
    width: 175,
    height: 175,
    marginBottom: 10,
    marginTop: 8,
  },
  formContainer: {
    width: "80%",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  createAccountButton: {
    backgroundColor: "#007bff",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  createAccountButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  disclaimerText: {
    color: "#fff",
    fontSize: 11,
    textAlign: "center",
  },
  spacing: {
    height: 25, // Adjust the height as needed
  },
});
