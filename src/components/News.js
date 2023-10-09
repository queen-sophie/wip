import React from "react";
import { StyleSheet, Text } from "react-native";

import BasicTabs from "./BasicTabs";

export default function NewsScreen() {
  return (
    <>
      <BasicTabs />
      <Text style={styles.paragraph}>NEWS </Text>
    </>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
