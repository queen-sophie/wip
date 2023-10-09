#!/bin/bash

# Get user input for the filename
echo "Enter the filename (without .js):"
read filename

# Define the template
template=$(cat <<EOF
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from 'react-native';

export default function ${filename}() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        PLACE YOUR CONTENT HERE 
      </Text>
      <Image style={styles.logo} source={require('../../assets/logo-icons/RattleSecondaryLogo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
});
EOF
)

# Create the .js file with the template
echo "${template}" > "${filename}.js"

echo "File created: ${filename}.js"


