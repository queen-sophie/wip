import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import accountCreationStyles from "../CreateAccount/Styles/AccountCreationStyles";
import CommonStyles from "../CreateAccount/Styles/CommonStyles";
import step5Styles from "../CreateAccount/Styles/Step5Styles";
import step6Styles from "../CreateAccount/Styles/Step6Styles";

const LogoIcon = require("../../../assets/logo-icons/RattleSecondaryLogo.png");

const interestsData = [
  {
    category: "Government",
    subCategories: [
      "Government policies",
      "Political ideologies",
      "Elections",
      "Political parties",
    ],
  },
  {
    category: "International Relations",
    subCategories: [
      "Diplomacy",
      "Foreign policy",
      "Global conflicts",
      "International organizations",
    ],
  },
  {
    category: "Legislation",
    subCategories: [
      "Bills and laws",
      "Constitutional issues",
      "Judicial system",
      "Civil rights",
    ],
  },
  {
    category: "Political Movements",
    subCategories: [
      "Activism",
      "Protests",
      "Social justice",
      "Civil disobedience",
    ],
  },
  {
    category: "Political Figures",
    subCategories: [
      "Presidents and leaders",
      "Politicians",
      "Historical figures",
      "Political commentators",
    ],
  },
  {
    category: "Political Issues",
    subCategories: [
      "Healthcare reform",
      "Economic policies",
      "Immigration",
      "Environmental regulations",
    ],
  },
  {
    category: "Media and Politics",
    subCategories: ["Media bias", "Fake news", "Press freedom", "Propaganda"],
  },
  // Add more political interests here
];

export default function SignUpStep4Screen() {
  const navigation = useNavigation();
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});
  const headerHeight = useHeaderHeight();

  const handleCategoryPress = (category) => {
    const isExpanded = expandedCategories[category] || false;
    setExpandedCategories({ ...expandedCategories, [category]: !isExpanded });
  };

  const handleSubCategoryPress = (subCategory) => {
    if (selectedSubCategories.includes(subCategory)) {
      setSelectedSubCategories(
        selectedSubCategories.filter((item) => item !== subCategory),
      );
    } else {
      setSelectedSubCategories([...selectedSubCategories, subCategory]);
    }
  };

  const handleContinue = () => {
    navigation.navigate("SignUpStep5");
  };

  const handleGoBack = () => {
    navigation.navigate("SignUpStep3");
    // Perform validation or verification logic here
    // You can navigate to the next step if the code is valid
  };

  const isCategoryExpanded = (category) =>
    expandedCategories[category] || false;
  const categoryHasSubCategorySelected = (subCategories) => {
    let flag = false;
    subCategories.forEach((subcat) => {
      if (!flag) {
        flag = selectedSubCategories.includes(subcat);
      }
    });
    return flag;
  };
  const isSubCategorySelected = (subCategory) =>
    selectedSubCategories.includes(subCategory);

  return (
    <LinearGradient
      colors={["rgb(126, 98, 114)", "rgb(161, 105, 111)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={step5Styles.container}
    >
      <KeyboardAvoidingView
        style={step5Styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={headerHeight}
      >
        <View style={accountCreationStyles.logoContainerInterests}>
          <Image source={LogoIcon} style={accountCreationStyles.logo} />
        </View>

        <View style={accountCreationStyles.formInterestsContainer}>
          <Text style={step5Styles.title}>
            What do you want to see on Rattle?
          </Text>
          <Text style={step5Styles.subtitle}>
            Select at least 3 interests to personalize your Rattle experience.
            They will be visible on your profile.
          </Text>

          <View style={step6Styles.divider} />
          {/* Scrollable content */}
          <View style={step6Styles.scrollContainerOuter}>
            <ScrollView contentContainerStyle={step6Styles.scrollContainer}>
              {interestsData.map((interest) => (
                <View key={interest.category}>
                  <TouchableOpacity
                    style={[
                      step6Styles.buttonContainer,
                      step6Styles.categoryButton,
                      (isCategoryExpanded(interest.category) ||
                        categoryHasSubCategorySelected(
                          interest.subCategories,
                        )) &&
                        step5Styles.selectedCategoryButton,
                    ]}
                    onPress={() => handleCategoryPress(interest.category)}
                  >
                    <Text
                      style={[
                        step6Styles.categoryText,
                        (isCategoryExpanded(interest.category) ||
                          categoryHasSubCategorySelected(
                            interest.subCategories,
                          )) &&
                          CommonStyles.highlightText,
                      ]}
                    >
                      {interest.category}
                    </Text>
                    <TouchableOpacity
                      style={step6Styles.expandIcon}
                      onPress={() => handleCategoryPress(interest.category)}
                    >
                      <Ionicons
                        name={
                          isCategoryExpanded(interest.category)
                            ? "chevron-up-outline"
                            : "chevron-down-outline"
                        }
                        size={24}
                        color={
                          isCategoryExpanded(interest.category) ||
                          categoryHasSubCategorySelected(interest.subCategories)
                            ? "#a1696f"
                            : "#fff"
                        }
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                  {isCategoryExpanded(interest.category) && (
                    <View style={step6Styles.subCategoriesContainer}>
                      {interest.subCategories.map((subCategory) => (
                        <TouchableOpacity
                          key={subCategory}
                          style={[
                            step6Styles.buttonContainer,
                            step6Styles.subCategoryButton,
                            isSubCategorySelected(subCategory) &&
                              step6Styles.selectedSubCategoryButton,
                          ]}
                          onPress={() => handleSubCategoryPress(subCategory)}
                        >
                          <Text
                            style={[
                              step6Styles.subCategoryText,
                              isSubCategorySelected(subCategory) &&
                                CommonStyles.highlightText,
                            ]}
                          >
                            {subCategory}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>

        <TouchableOpacity
          style={CommonStyles.whiteButtonOuter}
          onPress={handleContinue}
        >
          <Text style={CommonStyles.whiteButtonText}>Next</Text>
        </TouchableOpacity>
        <View style={accountCreationStyles.smallSpacing} />
        <TouchableOpacity onPress={handleGoBack}>
          <View style={CommonStyles.lightWhiteButtonOuter}>
            <Text style={CommonStyles.lightWhiteButtonText}>Back</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
