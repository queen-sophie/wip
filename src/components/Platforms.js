import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Badge1 from "../../assets/platforms-placeholders/badge-1.png";
import Badge2 from "../../assets/platforms-placeholders/badge-2.png";
import Badge3 from "../../assets/platforms-placeholders/badge-3.png";
import BannerImage from "../../assets/platforms-placeholders/banner-img.png";
import DateTag from "../../assets/platforms-placeholders/date-tag.png";
import Recent1 from "../../assets/platforms-placeholders/recent-1.png";
import Recent2 from "../../assets/platforms-placeholders/recent-2.png";
import Upcoming1 from "../../assets/platforms-placeholders/upcoming-1.png";
import GradientLabel from "./GradientLabel";
import CalendarIcon from "./Icons/CalendarIcon";
import CheckListIcon from "./Icons/CheckListIcon";
import FistIcon from "./Icons/FistIcon";
import MembershipBadgeIcon from "./Icons/MembershipBadgeIcon";
import MenuIcon from "./Icons/MenuIcon";
import ShareIcon from "./Icons/ShareIcon";
import SpeakerIcon from "./Icons/SpeakerIcon";

const { width, height } = Dimensions.get("window");

export default function PlatformsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={{ flex: 1, height: height * 0.35 }}>
          <ImageBackground source={BannerImage} style={styles.headBanner}>
            <View style={styles.headContent}>
              <View>
                <Text
                  style={[
                    styles.lgText,
                    styles.whiteText,
                    styles.fwBold,
                    styles.capitalizeText,
                  ]}
                >
                  Saving
                </Text>
                <Text
                  style={[
                    styles.lgText,
                    styles.whiteText,
                    styles.fwBold,
                    styles.capitalizeText,
                  ]}
                >
                  Grass
                </Text>
                <Text style={[styles.whiteText]}>2,478 members</Text>
              </View>
              <View>
                <View style={[styles.activistButton]}>
                  <FistIcon width={22} height={22} />
                  <Text
                    style={[
                      styles.whiteText,
                      { paddingBottom: 3, marginLeft: 3 },
                    ]}
                  >
                    Activist Group
                  </Text>
                </View>
                <Text
                  style={[
                    styles.whiteText,
                    {
                      fontSize: getResponsiveFontSize(12),
                      textAlign: "center",
                    },
                  ]}
                >
                  Membership by request
                </Text>
              </View>
              <View>
                <MenuIcon />
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.content}>
          <View style={styles.horizontalMargin}>
            <View style={styles.infoRow}>
              <View style={styles.columnOne}>
                <View style={[styles.flexDirectionRow, { marginBottom: 10 }]}>
                  <View style={[styles.membershipBadge]}>
                    <MembershipBadgeIcon width={20} height={20} />
                    <Text
                      style={[
                        styles.capitalizeText,
                        styles.whiteText,
                        { marginHorizontal: 10 },
                      ]}
                    >
                      Member
                    </Text>
                  </View>
                  <View style={styles.iconBadge}>
                    <CheckListIcon width={16} height={16} />
                  </View>
                  <View style={styles.iconBadge}>
                    <ShareIcon width={16} height={16} />
                  </View>
                </View>
                <View>
                  <Text
                    style={[
                      styles.whiteText,
                      { fontSize: getResponsiveFontSize(15) },
                    ]}
                  >
                    Welcome to the fascinating world of &ldquo;Grass Enthusiasts
                    United&rdquo;! From lush meadows to rugged savannahs, they
                    traverse the world in search of the most unique and
                    exquisite blades of grass. These dedicated collectors revel
                    in the intricate textures, vibrant hues...
                  </Text>
                  <Text
                    style={[
                      {
                        fontSize: getResponsiveFontSize(16),
                        fontWeight: "bold",
                        color: "#9c9a9d",
                      },
                    ]}
                  >
                    More info
                  </Text>
                </View>
              </View>
              <View style={styles.columnTwo}>
                <View
                  style={[styles.badgeIconContainer, styles.flexDirectionRow]}
                >
                  <Image style={styles.badgeIcon} source={Badge1} />
                  <Image style={styles.badgeIcon} source={Badge2} />
                  <Image style={styles.badgeIcon} source={Badge3} />
                </View>
                <View style={styles.others}>
                  <View style={styles.horizontalLine} />
                  <Text
                    style={[
                      styles.othersText,
                      styles.whiteText,
                      styles.capitalizeText,
                    ]}
                  >
                    <Text style={[{ fontSize: getResponsiveFontSize(15) }]}>
                      6
                    </Text>{" "}
                    others
                  </Text>
                  <View style={styles.horizontalLine} />
                </View>
                <View style={styles.statSection}>
                  <View style={{ marginBottom: 10 }}>
                    <GradientLabel
                      title="Statistics"
                      colors={["#a1696f", "#7f6373"]}
                      width={80}
                      fontSize={getResponsiveFontSize(14)}
                    />
                  </View>
                  <View style={[styles.stat]}>
                    <Text style={[styles.statValue, styles.whiteText]}>
                      936
                    </Text>
                    <Text style={[styles.statLabel, styles.whiteText]}>
                      Active Members
                    </Text>
                  </View>
                  <View style={[styles.stat]}>
                    <Text style={[styles.statValue, styles.whiteText]}>
                      2023
                    </Text>
                    <Text style={[styles.statLabel, styles.whiteText]}>
                      Created
                    </Text>
                  </View>
                  <View style={[styles.stat]}>
                    <Text style={[styles.statValue, styles.whiteText]}>17</Text>
                    <Text style={[styles.statLabel, styles.whiteText]}>
                      Activist events
                    </Text>
                  </View>
                  <View style={[styles.flexDirectionRow, { marginTop: 10 }]}>
                    <Text style={[styles.viewAll, styles.capitalizeText]}>
                      View All
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <GradientLabel
              content={
                <View style={styles.announcement}>
                  <View>
                    <SpeakerIcon width={30} height={30} />
                  </View>
                  <View style={[styles.textWrap]}>
                    <Text
                      style={[
                        styles.whiteText,
                        { fontSize: getResponsiveFontSize(16) },
                      ]}
                    >
                      Hi everyone! Please check out the poll for &ldquo;Green
                      Machine&rdquo; initiative! Poll ends at 7pm CST 3/25.
                    </Text>
                    <Text
                      style={[
                        styles.whiteText,
                        {
                          fontSize: getResponsiveFontSize(11),
                          color: "#d5c2c6",
                        },
                      ]}
                    >
                      - Derek Grass (Founder)
                    </Text>
                  </View>
                </View>
              }
              colors={["#a1696f", "#7f6373"]}
              width="100%"
              fontSize={getResponsiveFontSize(14)}
            />
          </View>
          <LinearGradient
            // colors={["#f0f", "#0f0"]}
            colors={["#7e575d", "#312e34"]}
            start={{ x: 0, y: 0.5 }} // Horizontal start
            end={{ x: 1, y: 0.5 }} // Horizontal end
            style={[styles.gradient, { width: "100%", marginVertical: 20 }]}
          >
            <View style={styles.tabs}>
              <Text style={[styles.tab, styles.whiteText]}>Polls</Text>
              <View>
                <Text style={[styles.tab, styles.whiteText]}>Discussion</Text>
                <View
                  style={[
                    styles.dot,
                    { width: width * 0.02, height: width * 0.02 },
                  ]}
                />
              </View>
              <Text style={[styles.tab, styles.activeTab, styles.whiteText]}>
                Activism
              </Text>
              <Text style={[styles.tab, styles.whiteText]}>Founders</Text>
            </View>
          </LinearGradient>
          <View style={styles.horizontalMargin}>
            <View style={styles.upcoming}>
              <Text
                style={[
                  styles.whiteText,
                  styles.capitalizeText,
                  {
                    fontWeight: "bold",
                    paddingVertical: 7,
                    fontSize: getResponsiveFontSize(14),
                  },
                ]}
              >
                upcoming:
              </Text>
              <View style={styles.upcomingSection}>
                <View style={[styles.upcomignImge, { height: 100 }]}>
                  <ImageBackground
                    source={Upcoming1}
                    style={styles.upcomingHead}
                  >
                    <View style={styles.upcomingContent}>
                      <View style={styles.datetagWrapper}>
                        <Image source={DateTag} style={styles.datetagImage} />
                      </View>
                      <View
                        style={{ paddingVertical: 6, paddingHorizontal: 8 }}
                      >
                        <Text
                          style={[
                            styles.whiteText,
                            styles.fwBold,
                            styles.capitalizeText,
                            styles.primaryText,
                          ]}
                        >
                          sept
                        </Text>
                        <Text
                          style={[
                            styles.whiteText,
                            styles.fwBold,
                            styles.capitalizeText,
                            styles.secondaryText,
                          ]}
                        >
                          28
                        </Text>
                      </View>
                      <View style={styles.upcomingText}>
                        <Text
                          style={[
                            styles.whiteText,
                            styles.fwBold,
                            styles.capitalizeText,
                            styles.primaryText,
                          ]}
                        >
                          Grass
                        </Text>
                        <Text
                          style={[
                            styles.whiteText,
                            styles.fwBold,
                            styles.capitalizeText,
                            styles.secondaryText,
                          ]}
                        >
                          Roots
                        </Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                <View style={{ flex: 0.1 }} />
                <View style={[styles.upcomignImge, { height: 100 }]}>
                  <ImageBackground
                    source={Upcoming1}
                    style={styles.upcomingHead}
                  >
                    <View style={styles.upcomingContent}>
                      <View style={styles.datetagWrapper}>
                        <Image source={DateTag} style={styles.datetagImage} />
                      </View>
                      <View
                        style={{ paddingVertical: 6, paddingHorizontal: 8 }}
                      >
                        <Text
                          style={[
                            styles.whiteText,
                            styles.fwBold,
                            styles.capitalizeText,
                            styles.primaryText,
                          ]}
                        >
                          Oct
                        </Text>
                        <Text
                          style={[
                            styles.whiteText,
                            styles.fwBold,
                            styles.capitalizeText,
                            styles.secondaryText,
                          ]}
                        >
                          04
                        </Text>
                      </View>
                      <View style={styles.upcomingText}>
                        <Text
                          style={[
                            styles.whiteText,
                            styles.fwBold,
                            styles.capitalizeText,
                            styles.primaryText,
                          ]}
                        >
                          Irrigation
                        </Text>
                        <Text
                          style={[
                            styles.whiteText,
                            styles.fwBold,
                            styles.capitalizeText,
                            styles.secondaryText,
                          ]}
                        >
                          Irritation
                        </Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </View>
            <View style={styles.upcoming}>
              <Text
                style={[
                  styles.whiteText,
                  styles.capitalizeText,
                  {
                    fontWeight: "bold",
                    paddingVertical: 7,
                    fontSize: getResponsiveFontSize(14),
                  },
                ]}
              >
                recent:top:
              </Text>
              <View style={styles.upcomingSection}>
                <View style={[styles.upcomignImge, { height: 50 }]}>
                  <ImageBackground source={Recent1} style={styles.upcomingHead}>
                    <View style={styles.upcomingContent} />
                  </ImageBackground>
                </View>
                <View style={{ flex: 0.1 }} />
                <View style={[styles.upcomignImge, { height: 50 }]}>
                  <ImageBackground source={Recent2} style={styles.upcomingHead}>
                    <View style={styles.upcomingContent} />
                  </ImageBackground>
                </View>
                <View style={{ flex: 0.1 }} />
                <View style={[styles.upcomignImge, { height: 50 }]}>
                  <ImageBackground source={Recent1} style={styles.upcomingHead}>
                    <View style={styles.upcomingContent} />
                  </ImageBackground>
                </View>
                <View style={{ flex: 0.1 }} />
                <View style={[styles.upcomignImge, { height: 50 }]}>
                  <ImageBackground source={Recent1} style={styles.upcomingHead}>
                    <View style={styles.upcomingContent} />
                  </ImageBackground>
                </View>
              </View>
            </View>
          </View>
          <LinearGradient
            colors={["#a1696f", "#7e6272"]}
            start={{ x: 0, y: 0.5 }} // Horizontal start
            end={{ x: 1, y: 0.5 }} // Horizontal end
            style={[styles.gradient, { width: "100%", marginVertical: 20 }]}
          >
            <View style={styles.fullCalendar}>
              <View style={styles.fullCalendarContent}>
                <Text
                  style={[
                    styles.whiteText,
                    styles.capitalizeText,
                    { fontWeight: "bold", fontSize: getResponsiveFontSize(14) },
                  ]}
                >
                  Full Calendar
                </Text>
                <CalendarIcon width={16} height={16} />
              </View>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
}

const getResponsiveFontSize = (baseFontSize) => {
  const scaleFactor = width / 480; // Adjust the base width as needed
  const scaledFontSize = baseFontSize * scaleFactor;
  return scaledFontSize;
};

const styles = StyleSheet.create({
  flexDirectionRow: {
    flexDirection: "row",
  },
  capitalizeText: {
    textTransform: "uppercase",
  },
  horizontalMargin: {
    marginHorizontal: 15,
  },
  lgText: {
    fontSize: getResponsiveFontSize(48),
    lineHeight: getResponsiveFontSize(48),
  },
  whiteText: {
    color: "#ffffff",
  },
  fwBold: {
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#302d33",
  },
  scrollContainer: {
    flex: 1,
  },
  headBanner: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  headContent: {
    flexDirection: "row",
    paddingTop: 45,
    paddingHorizontal: 25,
    justifyContent: "space-between",
    backgroundColor: "#00000065",
    height: "100%",
  },
  activistButton: {
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 3,
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  infoRow: {
    flexDirection: "row",
    paddingVertical: 25,
  },
  columnOne: {
    flex: 3,
    paddingRight: 10,
  },
  badgeGroup: {
    flexDirection: "row",
  },
  columnTwo: {
    flex: 2,
  },
  membershipBadge: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#9ad8c6",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  iconBadge: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#838185",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    marginLeft: 5,
  },
  badgeIconContainer: {
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
    transform: [{ translateX: 0 }, { translateY: -45 }],
  },
  badgeIcon: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 15,
  },
  others: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
  },
  horizontalLine: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: "#fff",
  },
  othersText: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ffffff",
    fontWeight: "bold",
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    fontSize: getResponsiveFontSize(10),
  },
  statSection: {
    backgroundColor: "#3a373d",
    padding: 10,
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
  },
  statValue: {
    fontSize: getResponsiveFontSize(20),
    fontWeight: "bold",
    marginRight: 3,
  },
  statLabel: {
    fontSize: getResponsiveFontSize(16),
  },
  viewAll: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 4,
    paddingHorizontal: 5,
    fontSize: getResponsiveFontSize(11),
    borderRadius: 4,
    color: "#fff",
    fontWeight: "bold",
  },
  announcement: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "100%",
  },
  textWrap: {
    marginHorizontal: 10,
    width: "90%",
  },
  button: {
    overflow: "hidden",
  },
  gradient: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabs: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingTop: 5,
  },
  tab: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: getResponsiveFontSize(18),
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 15,
  },
  activeTab: {
    backgroundColor: "#3a363c",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  dot: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#976770",
    borderRadius: 50,
  },
  upcomingSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  upcomignImge: {
    flex: 0.9,
    borderRadius: 10,
    overflow: "hidden",
  },
  upcomingHead: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  upcomingContent: {
    backgroundColor: "#00000045",
    height: "100%",
    width: "100%",
  },
  upcomingText: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  datetagWrapper: {
    width: 90,
    height: 45,
    position: "absolute",
    left: -20,
    top: 0,
  },
  datetagImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  primaryText: {
    fontSize: getResponsiveFontSize(20),
    lineHeight: getResponsiveFontSize(20),
  },
  secondaryText: {
    fontSize: getResponsiveFontSize(28),
    lineHeight: getResponsiveFontSize(28),
    letterSpacing: 2,
  },
  fullCalendar: {
    padding: 5,
  },
  fullCalendarContent: {
    backgroundColor: "#a88891",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 150,
  },
  content: {},
});
