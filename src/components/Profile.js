// import { useNavigation } from "@react-navigation/native";
import PropTypes from 'prop-types';
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Badge1 from '../../assets/images/badge-1.png';
import Badge2 from '../../assets/images/badge-2.png';
import Badge3 from '../../assets/images/badge-3.png';
import Bg from '../../assets/images/bg.png';
import ProfileImg from '../../assets/images/profile.png';
// import Logo from "../../assets/logo-icons/RattleSecondaryLogo.png";
// import Badge1 from "../../testing/profile/imgs/1testbadge.png";
// import Profile1 from '../../testing/profile/imgs/1testpic.png';
import loadProfileData  from '../../testing/profile/loader';
import GradientButton from './GradientButton';
import GradientLabel from './GradientLabel';
import Compass from "./Icons/Compass";
import Indicator from './Icons/Indicator';
import SearchIcon from "./Icons/SearchIcon";
import Users from "./Icons/Users";
// import BasicTabs from "./BasicTabs";

const { width } = Dimensions.get("window");

const testDataFile = "1-test-profile"; // or any other name without .json extension
const {
  testFullName,
  testUsername,
  testTagline,
  testLeaning,
  testBioLabel,
  testBio,
  // testParty,
  // testFollowers,
  // testFollowing,
  testParticipationDebates,
  testParticipationPetitions,
  testParticipationPolls,
  testParticipationPosts,
  // testContributionRatingNum,
  // testContributionRatingTxt,
  // profilePicName,
  // badgePicName
} = loadProfileData(testDataFile);


function UserOtherInfoContainer() {
  return (
    <View style={styles.userOtherInfoContainer}>
      <UserBadgeContainer />
    </View>
  );
}

function UserInfoContainer() {
  return (
    <View>
      <View style={styles.userInfoContainerTop}>
        {/* header */}
        <View style={styles.userProfileContainer}>
          <Image style={styles.profilePic} source={ProfileImg} />
        </View>
        <UserOtherInfoContainer />
        {/* header: end */}
      </View>
      <View style={styles.userInfoContainerBottom}>
        <View style={styles.userProfileContainer}>
          <Text style={styles.userNameText}>{testFullName}</Text>
          <View style={styles.userPositionText}>
            <SearchIcon width={15} height={15} />
            <Text style={[styles.textCapitalize, styles.whiteText, {fontSize: getResponsiveFontSize(12), fontWeight: "bold"}]}>
              {" "}{testTagline}
            </Text>
          </View>
          <Text style={[styles.textCapitalize, styles.leaningText]}>
            {testLeaning}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <ContributionMeterContainer />
        </View>
      </View>
    </View>
  );
}

function UserBadgeContainer() {
  return (
    <View style={styles.userBadgeContainer}>
      <View style={styles.badgeHeading}> 
        <View>
          <Text style={[styles.textCapitalize, styles.badgeTitleText, {fontWeight: "bold"}]}>
            Top Activity Badges
          </Text>
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={[styles.textCapitalize, styles.badgeTitleText, styles.viewAll]}>
            View All
          </Text>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.badgeIconContainer}>
          <Image style={styles.badgeIcon} source={Badge1}/>
          <Image style={styles.badgeIcon} source={Badge2}/>
          <Image style={styles.badgeIcon} source={Badge3}/>
        </View>
        <View style={styles.following}>
          <FollowStatContainer stat="Followers" value="12,978" />
          <FollowStatContainer stat="Following" value="936" />
        </View>
      </View>
    </View>
  );
}

function ContributionMeterContainer() {
  return (
    <View style={styles.contributionMeterContainer}>
      <Text style={styles.contributionTitleText}>
        Sourced Contribution Meter
      </Text>
      <View style={styles.contributionBarContainer}>
        {new Array(17).fill(0).map((v, i) => (
          <Dot key={`${Math.random}`} index={i} />
        ))}
      </View>
    </View>
  );
}


StatContainer.propTypes = {
  stat: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

FollowStatContainer.propTypes = {
  stat: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Dot.propTypes = {
  index: PropTypes.number.isRequired,
};

function UserBio(){
  return (
    <View style={styles.bioWrapper}>
      {/* head */}
      <View style={styles.bioHeadingWrapper}>
        <Text style={[styles.whiteText, styles.bioHeading]}>{testBioLabel}</Text>
        <View style={styles.horizontalLine} />
      </View>
      <Text style={[styles.whiteText, styles.bioDescription]}>
        {testBio}
      </Text>
    </View>
  )
}

function StatContainer({ stat, value }) {
  return (
    <View style={styles.statContainer}>
      <Text style={[styles.userStatsText, {fontWeight: "bold"}]}>{value}</Text>
      <View style={styles.outlineLabel}>
        <Text style={[styles.userStatsLabel, styles.textCapitalize]}>{stat}</Text>
      </View>
    </View>
  );
}

function FollowStatContainer({ stat, value }) {
  return (
    <View style={styles.followStat}>
      <Text style={[styles.whiteText, {fontSize: getResponsiveFontSize(14), fontWeight: "bold"}]}>{value}</Text>
      <Text style={[styles.grayText]}>{stat}</Text>
    </View>
  );
}

function Dot({index}) {
  const color = index > 13 ? 'transparent' : '#986770';
  return <View>
    {
      index === 13 ? <View style={styles.indicator}>
        <Text style={styles.indicatorLabel}>Medium-High</Text>
        <Indicator width={10} height={10} />
      </View> : null
    }
    <View style={[styles.dot, {backgroundColor: color }]} />
  </View>
}

function UserStatsContainer() {
  return (
    <View style={styles.userStatsContainer}>
      <View style={styles.appBadge}>
          <GradientLabel
            title="Participation"
            colors={['#a1696f', '#7f6373']}
          />
      </View>
      <View style={styles.participationRowOne}>
        <StatContainer stat="Debates" value={testParticipationDebates} />
        <StatContainer stat="Petitions" value={testParticipationPetitions} />
        <StatContainer stat="Polls" value={testParticipationPolls} />
      </View>
      <View style={styles.participationRowTwo}>
        <StatContainer stat="Posts" value={testParticipationPosts} />
        <GradientButton
          content={<>
            <SearchIcon />
            <Text style={[styles.textCapitalize, styles.buttonText, {fontWeight: "bold"}]}>
              Journalist
            </Text>
          </>}
          colors={['#a1696f', '#7f6373']}
        />
        {/* <TouchableOpacity style={styles.appButton}>
          
        </TouchableOpacity> */}
      </View>
      <View style={styles.baseButtons}>
        <View style={{flex: 0.48}}>
          <TouchableOpacity style={styles.outlineButton}>
            <Users />
            <Text style={[styles.buttonText]}>
              Groups
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.48}}>
          <TouchableOpacity style={styles.outlineButton}>
            <Compass />
            <Text style={[styles.buttonText]}>
              Political Compass
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function ProfileScreen() {
  // const navigation = useNavigation();
  // const toQuiz = () => {
  //   navigation.navigate("Quiz");
  // };
  return (
    <>
      {/* <BasicTabs /> */}
      <View style={{flex: 1, backgroundColor: "#302d33"}}>
        <ImageBackground source={Bg} style={styles.background} >
          <ScrollView style={styles.scrollContainer}>
            <View style={{flex: 1}}>
              <View style={styles.mainContainer}>
                <Text style={styles.usernameText}>
                  {testUsername}
                </Text>
                <UserInfoContainer />
                <UserBio />
                <UserStatsContainer />
              </View>
              <View style={styles.recentActivity}>
                <Text style={[styles.textCapitalize, styles.whiteText, {fontSize: getResponsiveFontSize(18), fontWeight: "bold", marginVertical: 10}]}>Recent Activity</Text>
              </View> 
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </>
  );
}

const getResponsiveFontSize = (baseFontSize) => {
  const scaleFactor = width / 480; // Adjust the base width as needed
  const scaledFontSize = baseFontSize * scaleFactor;
  return scaledFontSize;
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    // backgroundColor: "#39363d",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
  whiteText: {
    color: "#ffffff"
  },
  grayText: {
    color: "#979699",
    fontSize: getResponsiveFontSize(13)
  },
  textCapitalize: {
    textTransform: "uppercase"
  },
  mainContainer: {
    flex: 1,
    // backgroundColor: "#39363d",
    padding: 10,
  },
  recentActivity: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10
  },
  usernameText: {
    marginTop: 24,
    fontSize: getResponsiveFontSize(40),
    fontWeight: "bold",
    textAlign: "left",
    color: "#FFFFFF",
  },
  userInfoContainerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userInfoContainerBottom: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  userProfileContainer: {
    flex: 0.5,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  profilePic: {
    height: 100,
    width: 100,
  },
  userNameText: {
    fontSize: getResponsiveFontSize(20),
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  userPositionText: {
    color: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center"
  },
  leaningText: {
    color: "#979699",
    fontSize: getResponsiveFontSize(11),
    fontWeight: "bold"
  },
  userOtherInfoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  userBadgeContainer: {
    flex: 0.5,
    // marginBottom: 2.5,
    flexDirection: "column",
    justifyContent: "center"
  },
  badgeHeading: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.4,
    borderColor: "#fff",
    marginBottom: 5
  },
  badgeTitleText: {
    fontSize: getResponsiveFontSize(11),
    color: "#FFFFFF",
    marginBottom: 4,
  },
  viewAll: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 2,
    paddingHorizontal: 5,
    fontSize: getResponsiveFontSize(8),
    borderRadius: 4
  },
  stats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  badgeIconContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  badgeIcon: {
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: 15,
  },
  following: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 6,
    marginLeft: 10,
    paddingVertical: 3,
    paddingHorizontal: 7,
  },
  followStat: {
    padding: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  contributionMeterContainer: {
    flex: 0.5,
  },
  contributionTitleText: {
    fontSize: getResponsiveFontSize(10),
    color: "#979699",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: 15
  },
  contributionBarContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dot: {
    width: 11,
    height: 11,
    borderRadius: 11 / 2,
    borderWidth: 1,
    borderColor: "#fff",
    marginLeft: 2
  },
  indicator: {
    position: 'absolute',
    top: "50%", // Position text in the middle vertically
    left: '50%', // Position text in the middle horizontally
    width: 100,
    transform: [{ translateX: -50 }, { translateY: -35 }], // Center the text
    flexDirection: "column",
    alignItems: "center"
  },
  indicatorLabel: {
    fontSize: getResponsiveFontSize(10),
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
    textAlign: 'center',
  },
  userStatsContainer: {
    // flex: 0.2,
    // flexDirection: "column",
    // flexWrap: "wrap",
    // justifyContent: "space-around",
    // backgroundColor: "#302c33",
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: "transparent",
  },
  participationRowOne: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20
  },
  participationRowTwo: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "baseline",
    marginBottom: 20,
  },
  appButton: {
    backgroundColor: "#986770",
    width: width * 0.5,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 10
  },
  buttonText: {
    fontSize: getResponsiveFontSize(16),
    color: "#FFFFFF",
    paddingLeft: 10
  },
  baseButtons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  outlineButton: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#979699"
  },
  userStatsText: {
    fontSize: getResponsiveFontSize(40),
    color: "#FFFFFF",
    textAlign: "center",
  },
  outlineLabel: {
    borderWidth: 1,
    borderColor: "#878588",
    borderRadius: 4,
    minWidth: 75,
    marginTop: 5
  },
  userStatsLabel: {
    fontSize: getResponsiveFontSize(12),
    color: "#979699",
    textAlign: "center",
    paddingVertical: 4
  },
  bioWrapper: {
    marginTop: 10
  },
  bioHeadingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  bioHeading: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 2,
    fontSize: getResponsiveFontSize(13),
    textAlign: "center",
    marginRight: 20,
    fontWeight: "bold"
  },
  horizontalLine: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: "#fff",
  },
  bioDescription: {
    lineHeight: 25,
    marginTop: 10,
    marginBottom: 30
  }
});