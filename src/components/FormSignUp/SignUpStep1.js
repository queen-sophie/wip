import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useHeaderHeight } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import LogoIcon from "../../../assets/logo-icons/RattleSecondaryLogo.png";
import ProfilePic from "../../../assets/profile-placeholders/Profile.png";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import accountCreationStyles from "../CreateAccount/Styles/AccountCreationStyles";
import CommonStyles from "../CreateAccount/Styles/CommonStyles";

// ...imports

export default function SignUpStep1Screen() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [displayName, setDisplayName] = useState();
  // TODO: change state back to null, repace Profile test png
  const [selectedImage, setSelectedImage] = useState(null);

  /*
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Backend Notes ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  API: will hit backend server endpoint via HTTPS request:
   ** enforces use of SSL/HTTPS**
      https://www.domainname.com:####/api/fullPath
     await fetch method, tries to send formData var to server via POST request 

     let formData = new FormData();
     formData.append("image", {
       uri: selectedImage,
       type: "image/jpeg",
       name: "profileImage.jpg",
       userId: ################### // Long int type, must be unique 
      });
      
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  */

  // TODO: connect to backend API
  const handleImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.canceled === true) {
      return;
    }
    if (pickerResult.assets && pickerResult.assets[0]) {
      setSelectedImage(pickerResult.assets[0].uri);
    }
  };

  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate("SignUpStep2");
  };

  const handleGoBack = () => {
    navigation.navigate("SignUpStep0");
  };

  const headerHeight = useHeaderHeight();

  return (
    <LinearGradient
      colors={["rgb(126, 98, 114)", "rgb(161, 105, 111)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={accountCreationStyles.container}
    >
      <KeyboardAvoidingView
        style={accountCreationStyles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={headerHeight}
      >
        <View style={accountCreationStyles.logoContainer}>
          <Image source={LogoIcon} style={accountCreationStyles.logo} />
        </View>
        <View style={accountCreationStyles.imagePickContainer}>
          <View style={CommonStyles.alignItemsCenter}>
            {selectedImage && (
              <Image
                source={selectedImage ? { uri: selectedImage } : ProfilePic}
                style={styles.image}
              />
            )}
          </View>

          <View style={styles.photoButtons}>
            <TouchableOpacity onPress={handleImagePicker}>
              <View style={CommonStyles.whiteButtonOuterCircle}>
                <MaterialIcons name="add-a-photo" size={28} color="#a1696f" />
              </View>
            </TouchableOpacity>

            {selectedImage && (
              <TouchableOpacity>
                <View
                  style={[
                    CommonStyles.whiteButtonOuterCircle,
                    { marginLeft: 10 },
                  ]}
                >
                  <MaterialIcons
                    name="cloud-upload"
                    size={28}
                    color="#a1696f"
                  />
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={accountCreationStyles.formContainer}>
          <TextInput
            style={accountCreationStyles.input}
            placeholder="First Name"
            placeholderTextColor="#ccc"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            autoCapitalize="none"
          />
          <TextInput
            style={accountCreationStyles.input}
            placeholder="Last Name"
            placeholderTextColor="#ccc"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            autoCapitalize="none"
          />
          <TextInput
            style={accountCreationStyles.input}
            placeholder="Display Name"
            placeholderTextColor="#ccc"
            value={displayName}
            onChangeText={(text) => setDisplayName(text)}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={handleContinue}>
            <View style={CommonStyles.whiteButtonOuter}>
              <Text style={CommonStyles.whiteButtonText}>Next</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleGoBack()}>
            <View style={CommonStyles.lightWhiteButtonOuter}>
              <Text style={CommonStyles.lightWhiteButtonText}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 125,
    height: 125,
    borderRadius: 100,
    marginBottom: 5,
  },
  photoButtons: {
    flexDirection: "row",
  },
});
