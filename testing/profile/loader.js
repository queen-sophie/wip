
export default function loadProfileData() {
// const testPicture = require(`imgs/${filename}.json`);
const data = require("./data/1-test-profile.json"); // eslint-disable-line global-require

const testFullName = `${data["first-name"]} ${data["last-name"]}`;
const testUsername = data.username;
const testTagline = data.occupationTagline;
const testLeaning = data.leaning;
const testBioLabel = data.bioLabel;
const testBio = data.bio;
const testParty = data["political-party"];
const testFollowers = data.followers;
const testFollowing = data.following;
const testParticipationDebates = data.participation.debates;
const testParticipationPetitions =  data.participation.petitions;
const testParticipationPolls =  data.participation.polls;
const testParticipationPosts =  data.participation.posts;
const testContributionRatingNum = data.contributionRating.number;
const testContributionRatingTxt = data.contributionRating.text;
const profilePicName = data.profilePngName;
const badgePicName = data.badges.badgePngName;

    return {
        testFullName,
        testUsername,
        testTagline,
        testLeaning,
        testBioLabel,
        testBio,
        testParty,
        testFollowers,
        testFollowing,
        testParticipationDebates,
        testParticipationPetitions,
        testParticipationPolls,
        testParticipationPosts,
        testContributionRatingNum,
        testContributionRatingTxt,
        profilePicName,
        badgePicName
    };
}
