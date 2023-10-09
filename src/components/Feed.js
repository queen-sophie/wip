import { AntDesign, Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Badge1 from "../../assets/images/badge-1.png";
import Badge2 from "../../assets/images/badge-2.png";
import Badge3 from "../../assets/images/badge-3.png";
import BannerImage from "../../assets/platforms-placeholders/banner-img.png";
import GradientLabel from "./GradientLabel";
import ProgressButton from "./ProgressButton";
import BasicTabs from "./BasicTabs";

const { width, height } = Dimensions.get("window");

export default function FeedScreen() {
  const posts = [
    {
      postNum: 0,
      image: require("../../assets/feed-placeholders/img1.png"), // eslint-disable-line global-require
      caption: "Image 1",
      subtext: "Caption 1",
    },
    {
      postNum: 1,
      image: require("../../assets/feed-placeholders/img2.png"), // eslint-disable-line global-require
      caption: "Image 2",
      subtext: "Caption 2",
    },
    {
      postNum: 2,
      image: require("../../assets/feed-placeholders/img3.png"), // eslint-disable-line global-require
      caption: "Image 3",
      subtext: "Caption 3",
    },
    {
      postNum: 3,
      image: require("../../assets/feed-placeholders/img4.png"), // eslint-disable-line global-require
      caption: "Image 4",
      subtext: "Caption 4",
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={[styles.viewHeader, styles.horizontalPadding]}>
          <View style={{ flexDirection: "row", flex: 0.2 }}>
            <View style={[styles.dot]} />
            <Text
              style={[
                styles.whiteText,
                styles.lgText,
                styles.capitalizeText,
                styles.fwBold,
                { marginLeft: 10 },
              ]}
            >
              User
            </Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} />
            <View>
              <Feather name="search" size={18} style={styles.icon} />
            </View>
          </View>
        </View>
        <View style={[styles.horizontalPadding, styles.contentHeader]}>
          <View style={{ flex: 0.3 }}>
            <Text
              style={[
                styles.capitalizeText,
                styles.fwBold,
                styles.lgText,
                { color: "#525055" },
              ]}
            >
              Feed
            </Text>
          </View>
          <View style={styles.filters}>
            <View style={styles.badgeWrapper}>
              <Image style={styles.badgeIcon} source={Badge1} />
              <Image style={styles.badgeIcon} source={Badge2} />
              <Image style={styles.badgeIcon} source={Badge3} />
              <AntDesign name="caretdown" size={14} color="#818083" />
            </View>
          </View>
          <View style={{ flex: 0.3 }} />
        </View>
        <View style={[styles.feedWrapper]}>
          <View style={styles.feedItem}>
            <View style={[styles.horizontalPadding, styles.feedContent]}>
              <View style={styles.topBar}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <ProgressButton progress={75} label="PETITION" />
                  <Text
                    style={[
                      styles.mdText,
                      { color: "#949295", marginStart: 5 },
                    ]}
                  >
                    created by
                  </Text>
                  <Text
                    style={[
                      styles.capitalizeText,
                      styles.fwBold,
                      styles.mdText,
                      { color: "#bcbbbd", marginStart: 5 },
                    ]}
                  >
                    Saving Grass
                  </Text>
                  <FontAwesome5
                    name="users"
                    size={16}
                    color="#525055"
                    style={{ marginStart: 5 }}
                  />
                </View>
                <View>
                  <Entypo
                    name="dots-three-horizontal"
                    size={16}
                    color="white"
                  />
                </View>
              </View>
              <View style={styles.mid}>
                <View style={{ flex: 1 }}>
                  <Image style={styles.contentImage} source={BannerImage} />
                </View>
                <View style={[styles.contentText]}>
                  <Text
                    style={[
                      styles.whiteText,
                      styles.capitalizeText,
                      styles.fwBold,
                      styles.textLineOne,
                    ]}
                  >
                    Preserving the green elegance:
                  </Text>
                  <Text
                    style={[
                      styles.capitalizeText,
                      styles.fwBold,
                      styles.textLineTwo,
                    ]}
                  >
                    Support the Society
                  </Text>
                  <Text
                    style={[
                      styles.capitalizeText,
                      styles.fwBold,
                      styles.textLineTwo,
                    ]}
                  >
                    For lovers of lush
                  </Text>
                  <Text
                    style={[
                      styles.capitalizeText,
                      styles.fwBold,
                      styles.textLineTwo,
                    ]}
                  >
                    Grasslands
                  </Text>
                </View>
              </View>
              <View style={styles.footer}>
                <View style={{ flex: 0.3, flexDirection: "row" }}>
                  <View style={styles.detailsButton}>
                    <Text
                      style={[
                        styles.whiteText,
                        styles.capitalizeText,
                        { marginRight: 5, fontSize: getResponsiveFontSize(11) },
                      ]}
                    >
                      Details
                    </Text>
                    <AntDesign name="caretdown" size={12} color="#818083" />
                  </View>
                  <View style={styles.shareButton}>
                    <FontAwesome5 name="share" size={12} color="#fff" />
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.7,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Text
                    style={{
                      fontSize: getResponsiveFontSize(12),
                      color: "#818083",
                      marginRight: 5,
                    }}
                  >
                    2 days, 12 hours remaining
                  </Text>
                  <Text
                    style={[
                      styles.whiteText,
                      {
                        fontSize: getResponsiveFontSize(12),
                        marginRight: 5,
                        fontWeight: "bold",
                      },
                    ]}
                  >
                    98/150 SIGNATURES
                  </Text>
                  <Text
                    style={[
                      styles.whiteText,
                      { fontSize: getResponsiveFontSize(10), color: "#cdcccd" },
                    ]}
                  >
                    (65.3%)
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.feedItem}>
            <View style={[styles.horizontalPadding, styles.feedContent]}>
              <View style={styles.topBar}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <GradientLabel
                    title="DEBATE"
                    colors={["#faad17", "#ab7b21"]}
                    width={width * 0.2}
                    fontSize={getResponsiveFontSize(14)}
                    borderRadius={5}
                    additionalGradientStyle={{
                      borderColor: "#838285",
                      borderWidth: 1,
                    }}
                    additionalTextStyle={{
                      paddingVertical: 3,
                      paddingHorizontal: 5,
                    }}
                  />
                  <Text
                    style={[
                      styles.mdText,
                      { color: "#949295", marginStart: 5 },
                    ]}
                  >
                    created by
                  </Text>
                  <Text
                    style={[
                      styles.capitalizeText,
                      styles.fwBold,
                      styles.mdText,
                      { color: "#bcbbbd", marginHorizontal: 5 },
                    ]}
                  >
                    David Storm - The &lsquo;Why&rsquo;
                  </Text>
                  <Entypo
                    name="dots-three-horizontal"
                    size={16}
                    color="white"
                  />
                </View>
              </View>
              <View style={styles.debateMidSection}>
                <View style={[styles.debateDetails]}>
                  <View>
                    <Text
                      style={[
                        styles.capitalizeText,
                        styles.fwBold,
                        {
                          fontSize: getResponsiveFontSize(14),
                          color: "#fbae17",
                        },
                      ]}
                    >
                      Scheduled Debate
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      alignItems: "center",
                      marginTop: 5,
                      marginBottom: 20,
                    }}
                  >
                    <View style={[styles.horizontalLine, { width: "60%" }]} />
                    <View style={styles.debateAlert}>
                      <Text
                        style={[
                          styles.whiteText,
                          { fontSize: getResponsiveFontSize(11) },
                        ]}
                      >
                        Where Do We Go From Here:
                      </Text>
                      <Text
                        style={[
                          styles.fwBold,
                          styles.capitalizeText,
                          styles.textLineThree,
                          styles.whiteText,
                        ]}
                      >
                        Has Illegal Immigration
                      </Text>
                      <Text
                        style={[
                          styles.fwBold,
                          styles.capitalizeText,
                          styles.textLineThree,
                          styles.whiteText,
                        ]}
                      >
                        Permanently Affected
                      </Text>
                      <Text
                        style={[
                          styles.fwBold,
                          styles.capitalizeText,
                          styles.textLineThree,
                          styles.whiteText,
                        ]}
                      >
                        The landscape of
                      </Text>
                      <Text
                        style={[
                          styles.fwBold,
                          styles.capitalizeText,
                          styles.textLineThree,
                          styles.whiteText,
                        ]}
                      >
                        &ldquo;Control&rdquo;
                      </Text>
                    </View>
                    <View style={[styles.horizontalLine, { width: "40%" }]} />
                  </View>
                  <View style={styles.debatorButton}>
                    <Text
                      style={[
                        styles.whiteText,
                        styles.capitalizeText,
                        styles.fwBold,
                        { marginRight: 5, fontSize: getResponsiveFontSize(11) },
                      ]}
                    >
                      Debator Profiles
                    </Text>
                    <AntDesign name="caretdown" size={12} color="#fff" />
                  </View>
                </View>
                <View style={[styles.contentText, { flex: 0.6 }]}>
                  <View style={[styles.sectionHead]}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View style={styles.liveButton}>
                        <Text
                          style={[
                            styles.whiteText,
                            styles.fwBold,
                            styles.capitalizeText,
                            styles.liveText,
                          ]}
                        >
                          Live
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontSize: getResponsiveFontSize(12),
                          color: "#818083",
                          marginRight: 5,
                        }}
                      >
                        44 minutes remaining
                      </Text>
                    </View>
                    <View>
                      <Text style={{ fontSize: getResponsiveFontSize(8) }}>
                        Megaphone Icon
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.liveCommentsWrapper]}>
                    <View style={[styles.liveComment]}>
                      <View style={[styles.liveCommentHead]}>
                        <Text
                          style={[
                            styles.capitalizeText,
                            styles.fwBold,
                            {
                              fontSize: getResponsiveFontSize(8),
                              color: "#818083",
                            },
                          ]}
                        >
                          William Court - Immigration Attourney
                        </Text>
                        <View
                          style={[
                            {
                              borderWidth: 1,
                              borderColor: "#b5b4b6",
                              borderRadius: 3,
                              paddingHorizontal: 5,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.whiteText,
                              styles.capitalizeText,
                              styles.fwBold,
                              { fontSize: getResponsiveFontSize(8) },
                            ]}
                          >
                            Profile
                          </Text>
                        </View>
                      </View>
                      <View style={styles.liveCommentText}>
                        <Text
                          style={[
                            styles.whiteText,
                            { fontSize: getResponsiveFontSize(11) },
                          ]}
                        >
                          By investing in the economics and social systems of
                          countries facing instability, we can reduce the
                          desperation that leads to illegal immigration.
                          Heavy-handed measures only perpetuate a cycle of
                          suffering and desperation, and we should strive for
                          understanding.
                        </Text>
                        <Text style={styles.agoTime}>30 sec ago</Text>
                      </View>
                    </View>
                    <View style={[styles.liveComment]}>
                      <View style={[styles.liveCommentHead]}>
                        <Text
                          style={[
                            styles.capitalizeText,
                            styles.fwBold,
                            {
                              fontSize: getResponsiveFontSize(8),
                              color: "#818083",
                            },
                          ]}
                        >
                          William Court - Immigration Attourney
                        </Text>
                        <View
                          style={[
                            {
                              borderWidth: 1,
                              borderColor: "#b5b4b6",
                              borderRadius: 3,
                              paddingHorizontal: 5,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.whiteText,
                              styles.capitalizeText,
                              styles.fwBold,
                              { fontSize: getResponsiveFontSize(8) },
                            ]}
                          >
                            Profile
                          </Text>
                        </View>
                      </View>
                      <View style={styles.liveCommentText}>
                        <Text
                          style={[
                            styles.whiteText,
                            { fontSize: getResponsiveFontSize(11) },
                          ]}
                        >
                          By investing in the economics and social systems of
                          countries facing instability, we can reduce the
                          desperation that leads to illegal immigration.
                          Heavy-handed measures only perpetuate a cycle of
                          suffering and desperation, and we should strive for
                          understanding.
                        </Text>
                        <Text style={styles.agoTime}>30 sec ago</Text>
                      </View>
                    </View>
                    <View style={[styles.liveComment]}>
                      <View>
                        <Text>Enter Debate Room As Spectator</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.footer}>
                <View style={{ flex: 0.3, flexDirection: "row" }}>
                  <View style={styles.detailsButton}>
                    <Text
                      style={[
                        styles.whiteText,
                        styles.capitalizeText,
                        { marginRight: 5, fontSize: getResponsiveFontSize(11) },
                      ]}
                    >
                      Details
                    </Text>
                    <AntDesign name="caretdown" size={12} color="#818083" />
                  </View>
                  <View style={styles.shareButton}>
                    <FontAwesome5 name="share" size={12} color="#fff" />
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.7,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Text
                    style={{
                      fontSize: getResponsiveFontSize(12),
                      color: "#818083",
                      marginRight: 5,
                    }}
                  >
                    2 days, 12 hours remaining
                  </Text>
                  <Text
                    style={[
                      styles.whiteText,
                      {
                        fontSize: getResponsiveFontSize(12),
                        marginRight: 5,
                        fontWeight: "bold",
                      },
                    ]}
                  >
                    98/150 SIGNATURES
                  </Text>
                  <Text
                    style={[
                      styles.whiteText,
                      { fontSize: getResponsiveFontSize(10), color: "#cdcccd" },
                    ]}
                  >
                    (65.3%)
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.floatingButton}>
        <Feather name="plus" size={30} color="#fff" />
      </TouchableOpacity>
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
  lgText: {
    fontSize: getResponsiveFontSize(24),
  },
  mdText: {
    fontSize: getResponsiveFontSize(14),
  },
  whiteText: {
    color: "#ffffff",
  },
  fwBold: {
    fontWeight: "bold",
  },
  floatingButton: {
    borderWidth: 1,
    borderColor: "#9d686f",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    right: 10,
    width: width * 0.2,
    height: width * 0.2,
    backgroundColor: "#9d686f",
    borderRadius: 100,
  },
  container: {
    flex: 1,
    backgroundColor: "#302d33",
  },
  scrollContainer: {
    flex: 1,
  },
  horizontalPadding: {
    paddingHorizontal: 15,
  },
  dot: {
    width: 24,
    height: 24,
    backgroundColor: "#976770",
    borderRadius: 50,
  },
  viewHeader: {
    backgroundColor: "#3A363c",
    paddingTop: 50,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 50,
    height: 30,
    flex: 0.6,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    color: "#fff",
  },
  icon: {
    color: "#3a363c",
    backgroundColor: "#fff",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    height: "100%",
    width: 35,
    paddingTop: 4,
    paddingLeft: 4,
  },
  contentHeader: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  filters: {
    flex: 0.4,
    width: width * 0.35 + 20,
    backgroundColor: "#fff1",
  },
  badgeWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    padding: 5,
  },
  badgeIcon: {
    width: width * 0.1,
    height: width * 0.1,
  },
  feedWrapper: {
    backgroundColor: "#302d33",
  },
  feedItem: {
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: "#25222765",
    marginBottom: 10,
    paddingVertical: 10,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mid: {
    backgroundColor: "#8B5D63",
    height: height * 0.23,
    marginVertical: 10,
    flexDirection: "row",
    borderRadius: 15,
    overflow: "hidden",
  },
  debateMidSection: {
    // backgroundColor: "#8B5D63",
    // height: height * 0.5,
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    borderRadius: 15,
    overflow: "hidden",
  },
  debateDetails: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  debateAlert: {
    paddingVertical: 10,
    alignItems: "center",
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderColor: "#fbae17",
  },
  contentImage: {
    width: "100%",
    height: "100%",
  },
  contentText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionHead: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  liveButton: {
    borderWidth: 1,
    borderColor: "#d85252",
    padding: 3,
    borderRadius: 5,
    marginRight: 5,
  },
  liveText: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#d85252",
  },
  textLineOne: {
    fontSize: getResponsiveFontSize(12),
    lineHeight: getResponsiveFontSize(18),
  },
  textLineTwo: {
    color: "#e2ede8",
    fontSize: getResponsiveFontSize(18),
    lineHeight: getResponsiveFontSize(20),
  },
  textLineThree: {
    color: "#e2ede8",
    fontSize: getResponsiveFontSize(12),
    lineHeight: getResponsiveFontSize(16),
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailsButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#b5b4b6",
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 4,
    marginRight: 5,
  },
  debatorButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 4,
    paddingVertical: 7,
    paddingHorizontal: 8,
    marginRight: 5,
  },
  shareButton: {
    borderWidth: 1,
    borderColor: "#b5b4b6",
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 5,
  },
  liveComment: {
    borderWidth: 1,
    borderColor: "#e3e3e3",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginTop: 10,
  },
  liveCommentHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  liveCommentText: {},
  agoTime: {
    fontSize: getResponsiveFontSize(10),
    color: "#818083",
    marginTop: 3,
  },
  feedContent: {},
});
