import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import BasicTabs from "./BasicTabs";


export default function HubScreen() {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const buttonSize = Math.min(windowWidth, windowHeight) * 0.4;

  return (
    <>
      <BasicTabs />
      <View style={styles.container}>
        <Text style={styles.sectionsTitle}>Hub Sections</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.gridContainer}>
            <TouchableOpacity
              style={[styles.button, { width: buttonSize, height: buttonSize }]}
              onPress={() => navigation.navigate("News")}
            >
              <Text style={styles.buttonText}>News</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { width: buttonSize, height: buttonSize }]}
              onPress={() => navigation.navigate("Activism")}
            >
              <Text style={styles.buttonText}>Activism</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { width: buttonSize, height: buttonSize }]}
              onPress={() => navigation.navigate("Research")}
            >
              <Text style={styles.buttonText}>Research</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { width: buttonSize, height: buttonSize }]}
              onPress={() => navigation.navigate("Recommended")}
            >
              <Text style={styles.buttonText}>Recommended</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#39363d",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  sectionsTitle: {
    fontSize: 24,
    color: "#cfd1d0",
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: "center",
  },
  buttonContainer: {
    justifyContent: "flex-end",
    marginTop: 20,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "#7e6272",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "#cfd1d0",
    fontSize: 22,
  },
});

// export default HubStack;
