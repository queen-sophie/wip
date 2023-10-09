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
// const backendURL = 'http://10.0.0.4:8888/api/auth/signin';

export default function SignInScreen() {

  const [username, setUsername] = useState(); // email OR phone number
  const [password, setPassword] = useState();

  /* TODO reconnect backend to user/password, temp callbaclk func placeholder 
  
  const setUsername = () => {
    username = "Placeholder";
  };

  const setPassword = () => {
    password = "Placeholder";
  };
  */

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleForgotPassword = () => {
    navigation.navigate("HomeNav");
  };

  const handleGoogleLogin = () => {
    navigation.navigate("HomeNav");
  };

  const handleAppleLogin = () => {
    navigation.navigate("HomeNav");
  };

  const doUserLogIn = async () => {
    alert("Sign in successful!"); // eslint-disable-line no-alert
    navigation.navigate("HomeNav");
  };

  /*
  TODO reconnect to backend 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // keyboardType={"email-address"} if email
  const usernameOrEmail = username;

  const doUserLogIn = async () => {
    const data = {
      usernameOrEmail: username,
      password,
    };
    const [staySignedIn, setStaySignedIn] = useState(false);
    const handleCheckboxToggle = () => {
      setStaySignedIn(!staySignedIn);
    };

    try {
      const response = await fetch(backendURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Sign in successful!');
        navigation.navigate('HomeNav');
      } else {
	    console.log(data);
        alert('Sign in failed. Please check your username and password.');
      }
    } catch (error) {
      console.error('Error during sign in:', error);
      alert('An error occurred during sign in. Please try again later.');
    }
*/

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
        <Text style={styles.title}>Sign in or Join Rattle</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#ccc"
            value={username}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            value={password}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.alignItemsCenter} onPress={() => doUserLogIn()}>
            <View style={styles.whiteButtonOuter}>
              <Text style={styles.whiteButtonText}>Sign in</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.forgotPasswordButton}
            onPress={() => handleForgotPassword()}
          >
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialSignInContainer}>
            {/* TODO: add Google login */}
            <TouchableOpacity
              style={styles.lightWhiteButtonOuter}
              onPress={() => handleGoogleLogin()}
            >
              <Text style={styles.lightWhiteButtonText}>SIGN IN WITH GOOGLE</Text>
            </TouchableOpacity>
            {/* TODO: add Apple login */}
            <TouchableOpacity
              style={styles.lightWhiteButtonOuter}
              onPress={() => handleAppleLogin()}
            >
              <Text style={styles.lightWhiteButtonText}>SIGN IN WITH APPLE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.spacing} />
          <TouchableOpacity style={styles.alignItemsCenter} onPress={() => handleGoBack()}>
            <View style={styles.whiteButtonOuter}>
              <Text style={styles.whiteButtonText}>Back</Text>
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
    width: '100%'
  },
  alignItemsCenter: {
    alignItems: "center"
  },
  logo: {
    width: 175,
    height: 175,
    marginBottom: 10,
    marginTop: 10,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "25%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ffffff25",
    backgroundColor: '#ffffff25',
    color: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  whiteButtonOuter: {
    backgroundColor: "#ffffff",
    width: 265,
    height: 60,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  whiteButtonText: {
    color: "#a1696f",
    fontSize: 13,
    fontWeight: "bold",
  },
  lightWhiteButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "ProximaNovaExtrabold",
  },
  forgotPasswordButton: {
    alignItems: "center",
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    justifyContent: "center",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  dividerLine: {
    flex: 1,
    height: 0.5,
    backgroundColor: "#fff",
    marginHorizontal: 7,
  },
  dividerText: {
    color: "#fff",
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "bold",
  },

  socialSignInContainer: {
    // Add any styling for the social sign-in container
    alignItems: 'center'
  },
  lightWhiteButtonOuter: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: 265,
    height: 55,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  spacing: {
    height: 20, // Adjust the height as needed
  },
});
