import React, { useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import NotificationContent from "./NotificationContent";
import SidebarContent from "./SideBarContent";

const sidebarWidth = Dimensions.get("window").width * 0.6;
const moveAnimation = new Animated.Value(-sidebarWidth);

const LogoIcon = require("../../assets/logo-icons/RattleSecondaryLogo.png");
const NotificationIcon = require("../../assets/tab-bar-icons/Notifications.png");

export default function BasicTabs() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  useEffect(() => {
    Animated.timing(moveAnimation, {
      toValue: sidebarOpen ? 0 : -sidebarWidth,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [sidebarOpen]);

  return (
    <>
      {sidebarOpen && !notificationOpen && (
        <Animated.View
          style={[
            tabWrapperStyles.sidebarContainer,
            { transform: [{ translateX: moveAnimation }] },
          ]}
        >
          <SidebarContent />
        </Animated.View>
      )}
      <View style={tabWrapperStyles.headerContainer}>
        <TouchableOpacity onPress={() => setSidebarOpen(!sidebarOpen)}>
          <Image style={tabWrapperStyles.logo} source={LogoIcon} />
        </TouchableOpacity>
        <TextInput style={tabWrapperStyles.searchBar} placeholder="Search" />
        <TouchableOpacity
          style={tabWrapperStyles.notificationButton}
          onPress={(event) => {
            event.stopPropagation();
            setNotificationOpen(!notificationOpen);
            setSidebarOpen(false);
          }}
        >
          <Image
            style={tabWrapperStyles.notificationImage}
            source={NotificationIcon}
          />
        </TouchableOpacity>
      </View>
      {notificationOpen && (
        <View style={tabWrapperStyles.notificationContainer}>
          <NotificationContent />
        </View>
      )}
    </>
  );
}

const tabWrapperStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#39363d",
  },
  logo: {
    height: 90,
    width: 90,
    resizeMode: "contain",
  },
  searchBar: {
    height: 30,
    width: 180,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 5,
  },
  notificationButton: {
    marginLeft: 5,
  },
  notificationImage: {
    width: 25,
    height: 25,
  },
  sidebarContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    marginTop: 130,
    height: "100%",
    width: "60%",
    backgroundColor: "#a1696f",
    padding: 10,
    zIndex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  notificationContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "80%",
    backgroundColor: "#a1696f",
    padding: 10,
    zIndex: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

// export default BasicTabs;
