import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NotificationContent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the notification content.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
});
