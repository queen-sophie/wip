import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

QuizResults.propTypes = {
  socialScore: PropTypes.number.isRequired,
};

QuizResults.propTypes = {
  economicScore: PropTypes.number.isRequired,
};

function QuizResults({ socialScore, economicScore }) {
  const navigation = useNavigation();
  const toProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonContainer}>
        <Text style={styles.continueButtonText}>{socialScore}</Text>
        <Text style={styles.continueButtonText}>{economicScore}</Text>
        <TouchableOpacity style={styles.continueButton} onPress={toProfile}>
          <Text style={styles.continueButtonText}>Back to Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },

  buttonContainer: {
    flex: 0.5,
    marginTop: 450,
    alignItems: "center",
    justifyContent: "center",
  },
  continueButton: {
    backgroundColor: "#007bff",
    height: 50,
    width: "60%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default QuizResults;
