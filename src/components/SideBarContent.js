import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProfileIcon = require("../../assets/tab-bar-icons/Profile.png");

export default function SideBarContent() {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Profile");
  };

  const doUserLogOut = () => {
    Alert.alert("No user is logged in anymore!");
    navigation.navigate("SignUp");
    return true;
  };
  const placeholder = () => true;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.userContainer}>
        <Image style={styles.profilePic} source={ProfileIcon} />
        <Text style={styles.username}>Username</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.profileButton}>View Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.middleContainer}>
        <Text style={styles.placeholderText}>Placeholder text 1</Text>
        <Text style={styles.placeholderText}>Placeholder text 2</Text>
        <Text style={styles.placeholderText}>Placeholder text 3</Text>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={placeholder}>
          <Text style={styles.buttonText}>Premium Features</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={placeholder}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => doUserLogOut()}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#a1696f",
  },
  userContainer: {
    marginBottom: 20, // You can adjust this as needed to get the right amount of spacing.
  },
  profilePic: {
    width: 25,
    height: 25,
    borderRadius: 12.5, // This will make the image round
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileButton: {
    fontSize: 18,
  },
  middleContainer: {
    flexGrow: 1, // This will take up any remaining space between the top and bottom containers.
    marginTop: 25,
    marginBottom: 250,
  },
  placeholderText: {
    fontSize: 18,
  },
  bottomContainer: {
    marginTop: 20, // You can adjust this as needed to get the right amount of spacing.
  },
  buttonText: {
    fontSize: 18,
  },
});
