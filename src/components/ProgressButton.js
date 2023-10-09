import PropTypes from "prop-types";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

function ProgressButton({ progress, label }) {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <View style={[styles.progress, { width: `${progress}%` }]} />
        <Text style={styles.text}>{`${label}`}</Text>
      </View>
    </TouchableOpacity>
  );
}

const getResponsiveFontSize = (baseFontSize) => {
  const scaleFactor = width / 480; // Adjust the base width as needed
  const scaledFontSize = baseFontSize * scaleFactor;
  return scaledFontSize;
};

const styles = StyleSheet.create({
  button: {
    width: width * 0.2,
    backgroundColor: "transparent",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#838285",
    borderWidth: 1,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: "#8B5D63",
    position: "absolute",
    left: 0,
  },
  text: {
    color: "#fff",
    fontSize: getResponsiveFontSize(14),
    zIndex: 1,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
});

ProgressButton.propTypes = {
  progress: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

ProgressButton.defaultProps = {};

export default ProgressButton;
