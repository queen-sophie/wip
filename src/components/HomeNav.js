/* eslint-disable react/no-unstable-nested-components */
import "react-native-gesture-handler";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PropTypes from "prop-types";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import FeedScreen from "./Feed";
import HubScreen from "./Hub";
import InboxScreen from "./Inbox";
import PlatformsScreen from "./Platforms";
import ProfileScreen from "./Profile";

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");

// nav bar icons
const FeedIcon = require("../../assets/tab-bar-icons/Feed.png");
const Groups = require("../../assets/tab-bar-icons/Groups.png");
const HubIcon = require("../../assets/tab-bar-icons/Hub.png");
const InboxIcon = require("../../assets/tab-bar-icons/Inbox.png");
const ProfileIcon = require("../../assets/tab-bar-icons/Profile.png");

// { focused, color, size }
// TODO: separate tab definition into separate component

function CustomTabIcon({ source, tintColor, showDot }) {
  return (
    <View style={styles.tabIconContainer}>
      <Text>{showDot}</Text>
      <Image
        source={source}
        style={[
          styles.tabIcon,
          {
            tintColor,
            width: width * 0.05,
            height: width * 0.05,
            resizeMode: "contain",
          },
        ]}
      />
      {showDot && (
        <View
          style={[styles.dot, { width: width * 0.03, height: width * 0.03 }]}
        />
      )}
    </View>
  );
}

CustomTabIcon.propTypes = {
  source: PropTypes.number.isRequired,
  tintColor: PropTypes.string.isRequired,
  showDot: PropTypes.bool.isRequired,
};

export default function HomeNavScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        activeTintColor: "#42f44b",
        tabBarStyle: {
          height: height * 0.081,
          backgroundColor: "#302d33",
        },
        tabBarItemStyle: {
          padding: 5,
        },
        tabBarActiveTintColor: "#b3b3b3",
        tabBarInactiveTintColor: "#b3b3b3",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: (
            { color, focused }, // eslint-disable-line react/no-unstable-nested-components
          ) => (
            <CustomTabIcon
              source={FeedIcon}
              tintColor={color}
              //  showDot={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Platforms"
        component={PlatformsScreen}
        options={{
          tabBarLabel: "Platforms",
          tabBarIcon: (
            { color, focused }, // eslint-disable-line react/no-unstable-nested-components
          ) => (
            <CustomTabIcon
              source={Groups}
              tintColor={color}
              //  showDot={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hub"
        component={HubScreen}
        options={{
          tabBarLabel: "Hub",
          tabBarIcon: (
            { color, focused }, // eslint-disable-line react/no-unstable-nested-components
          ) => (
            <CustomTabIcon
              source={HubIcon}
              tintColor={color}
              //      showDot={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={InboxScreen}
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: (
            { color }, // eslint-disable-line react/no-unstable-nested-components
          ) => (
            <CustomTabIcon
              source={InboxIcon}
              tintColor={color}
              //   showDot={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: (
            { color, focused }, // eslint-disable-line react/no-unstable-nested-components
          ) => (
            <CustomTabIcon
              source={ProfileIcon}
              tintColor={color}
              //   showDot={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  tabIcon: {
    marginBottom: 15,
  },
  dot: {
    position: "absolute",
    top: 10,
    right: 0,
    backgroundColor: "#36caca",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#302d33",
  },
});
