import { useHeaderHeight } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

const { width } = Dimensions.get("window");

const LogoIcon = require("../../assets/logo-icons/RattleSecondaryLogo.png"); // eslint-disable-line global-require

const carouselItems = [
  {
    image: require("../../assets/home-placeholders/discussion.jpg"), // eslint-disable-line global-require
    description: "Discussion",
  },
  {
    image: require("../../assets/home-placeholders/activism.jpg"), // eslint-disable-line global-require
    description: "Activism",
  },
  {
    image: require("../../assets/home-placeholders/research.jpg"), // eslint-disable-line global-require
    description: "Research",
  },
];

export default function SignUp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const navigation = useNavigation();

  const handleJoinNow = () => {
    navigation.navigate("SignUpForm");
  };

  const handleLogIn = () => {
    navigation.navigate("SignIn")
  };

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItemContainer}>
      <Image source={item.image} style={styles.carouselImage} />
      <Text style={styles.carouselDescription}>{item.description}</Text>
    </View>
  );

  const renderPagination = () => (
    <Pagination
      dotsLength={carouselItems.length}
      activeDotIndex={activeIndex}
      containerStyle={styles.paginationContainer}
      dotStyle={styles.dotStyle}
      inactiveDotStyle={styles.inactiveDotStyle}
      inactiveDotOpacity={0.6}
      inactiveDotScale={0.8}
    />
  );

  const headerHeight = useHeaderHeight();
  return (

    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={headerHeight}
    >
      <LinearGradient
        colors={["rgb(126, 98, 114)", "rgb(161, 105, 111)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
        <View style={styles.logoContainer}>
          <Image source={LogoIcon} style={styles.logo} />
        </View>
        <View style={styles.carouselContainer}>
          <Carousel
            ref={carouselRef}
            data={carouselItems}
            renderItem={renderCarouselItem}
            sliderWidth={width}
            itemWidth={width - 40}
            loop
            autoplay
            onSnapToItem={(index) => setActiveIndex(index)}
          />
          {renderPagination()}
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.joinNowButton}
            onPress={handleJoinNow}
          >
            <Text style={styles.joinButtonText}>SIGN UP WITH EMAIL</Text>
          </TouchableOpacity>
<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
  <View>
      <Text style={{width: 40, marginBottom: 1, textAlign: 'center', color: 'white', fontFamily:'ProximaNovaExtrabold'}} />
    <Text style={{width: 40, textAlign: 'center',  color: 'white', fontFamily:'ProximaNovaExtrabold'}}>OR</Text>
    <Text style={{width: 40, marginBottom: 1, textAlign: 'center', color: 'white', fontFamily:'ProximaNovaExtrabold'}} />
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
</View>

          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.buttonText}>CONTINUE WITH GOOGLE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebookButton}>
            <Text style={styles.buttonText}>CONTINUE WITH FACEBOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appleButton}>
                      <Text style={styles.buttonText}>CONTINUE WITH APPLE</Text>
                    </TouchableOpacity>
          <View style={styles.signInContainer}>
                   <TouchableOpacity onPress={handleLogIn}>
                     <Text style={styles.returnerText}>Have an account already? Log In </Text>
                     </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 52,
  },
  logoContainer: {
    position: "absolute",
    top: 10,
    left: 0,
    zIndex: 1,
  },
  logo: {
    width: 115,
    height: 115,
  },
  carouselContainer: {
    marginTop: 430,
    alignItems: "center",
  },
  carouselItemContainer: {
    width: width - 40,
    height: width - 40,
    alignItems: "center",
    justifyContent: "center",
  },
  carouselImage: {
    width: "100%",
    height: "86%",
    borderRadius: 10,
  },
  carouselDescription: {
    marginTop: 8,
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  buttonsContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 321,
  },
  signInButton: {
    backgroundColor: "#007bff",
    height: 50,
    width: 265,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  joinNowButton: {
    backgroundColor: "#ffffff",
    width: 265,
    height: 60,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  appleButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: 265,
    height: 55,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  googleButton: {
  backgroundColor: 'rgba(255,255,255,0.3)',
      width: 265,
      height: 55,
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 8,
     },

       facebookButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
      width: 265,
      height: 55,
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 8,
    },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "ProximaNovaExtrabold",
  },
  joinButtonText: {
    color: "#a1696f",
    fontSize: 13,
    fontWeight: "bold",
  },
 returnerText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",

        justifyContent: "center",
  },
  signInText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "ProximaNovaExtrabold",
  },
  signInContainer: {
    marginTop: 8,
  },
  paginationContainer: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: "#800080",
  },
  inactiveDotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: "#888",
  },
  separator: {
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      marginLeft: 5,
      marginRight: 5,
  }
});