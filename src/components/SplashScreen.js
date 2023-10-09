import "react-native-gesture-handler";
import "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

const LogoIcon = require("../../assets/logo-icons/RattleSecondaryLogo.png");

export default function SplashScreen() {
  return (
    <LinearGradient
      colors={["rgb(126, 98, 114)", "rgb(161, 105, 111)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image source={LogoIcon} style={styles.logo} />
      </View>
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
    height: "100%",
  },
  logo: {
    width: 175,
    height: 175,
    marginBottom: 10,
    marginTop: 10,
  },
});
