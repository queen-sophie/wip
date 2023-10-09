import "react-native-gesture-handler";

import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function UserLogOut() {
  const navigation = useNavigation();

  const doUserLogOut = () => {
    Alert.alert("No user is logged in anymore!");
    // Navigation dispatch calls a navigation action, and popToTop will take
    // the user back to the very first screen of the stack
    navigation.dispatch(StackActions.popToTop());
    return true;
  };

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TouchableOpacity onPress={() => doUserLogOut()}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  login_wrapper: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 40,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    marginTop: -10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  form: {
    width: "100%",
    maxWidth: 280,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    backgroundColor: "#0065A4",
    borderRadius: 50,
  },
  button_label: {
    color: "#fff",
    fontSize: 15,
  },
});
