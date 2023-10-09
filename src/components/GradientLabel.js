import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function GradientLabel({
  onPress,
  title,
  content,
  colors,
  width,
  fontSize,
  borderRadius,
  additionalGradientStyle,
  additionalTextStyle,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0.5 }} // Horizontal start
        end={{ x: 1, y: 0.5 }} // Horizontal end
        style={[
          styles.gradient,
          { width, borderRadius, ...additionalGradientStyle },
        ]}
      >
        {content || (
          <Text style={[styles.text, { fontSize, ...additionalTextStyle }]}>
            {title}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    overflow: "hidden",
  },
  gradient: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

GradientLabel.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  additionalGradientStyle: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  additionalTextStyle: PropTypes.any,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.number,
  borderRadius: PropTypes.number,
};

GradientLabel.defaultProps = {
  onPress: () => {},
  title: "",
  content: undefined,
  additionalGradientStyle: undefined,
  additionalTextStyle: undefined,
  width: 150,
  fontSize: 16,
  borderRadius: 20,
};

export default GradientLabel;
