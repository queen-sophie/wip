import React from "react";
import { StyleSheet, Text, View } from "react-native";

import BasicTabs from "./BasicTabs";

export default function InboxScreen() {
  return (
    <>
      <BasicTabs />
      <View style={styles.container}>
        <Text> Inbox </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
});
