import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get("window");

function GradientButton({ onPress, content, colors }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <LinearGradient 
        colors={colors}
        start={{ x: 0, y: 0.5 }} // Horizontal start
        end={{ x: 1, y: 0.5 }}   // Horizontal end
        style={[styles.gradient]}
      >
        {content}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
      overflow: 'hidden',
    },
    gradient: {
        flexDirection: "row",
        alignItems: 'center',
        width: width * 0.5,
        height: 50,
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#FFFFFF",
        paddingLeft: 10
    },
});

GradientButton.propTypes = {
onPress: PropTypes.func,
content: PropTypes.element.isRequired,
colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

GradientButton.defaultProps = {
    onPress: () => {},
};

export default GradientButton;
