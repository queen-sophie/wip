import * as ImagePicker from 'expo-image-picker';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import accountCreationStyles from './CreateAccount/Styles/AccountCreationStyles';

ImageUpload.propTypes = {
  onImageSelect: PropTypes.node.isRequired,
};

export default function ImageUpload({ onImageSelect }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePicker = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled) {
        setSelectedImage(result.uri);
        onImageSelect(result.uri); // Notify the parent component about the selected image
      }
    } catch (error) {
      alert('Failed'); // eslint-disable-line no-alert
    }
  };

  return (
    <View>
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
      <TouchableOpacity onPress={handleImagePicker}>
        <View style={accountCreationStyles.createAccountButton}>
          <Text style={accountCreationStyles.createAccountButtonText}>Pick an Image</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
});


