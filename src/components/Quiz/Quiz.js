import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import QuizAnswers from "./QuizAnswers";
import QuizQuestions from "./QuizQuestions";
import QuizResults from "./QuizResults";
import QuizScoring from "./QuizScoring";

export default function Quiz() {
  // set state vars for answer choices and scoring
  const [economicScore, setEconomicScore] = useState(0);
  const [socialScore, setSocialScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const quizLength = Object.keys(QuizQuestions).length;
  const [selectedOptions, setSelectedOptions] = useState(
    Array(quizLength).fill([]),
  );

  const navigation = useNavigation();

  const toQuizResults = () => {
    navigation.navigate("QuizResults", { economicScore, socialScore });
  };

  const handleOptionSelect = (optionIndex) => {
    const maxAnswers = QuizAnswers[currentQuestion].optionNumber.max;
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = [...prevSelectedOptions];
      const currentQuestionOptions = updatedOptions[currentQuestion];

      if (currentQuestionOptions.includes(optionIndex)) {
        updatedOptions[currentQuestion] = currentQuestionOptions.filter(
          (option) => option !== optionIndex,
        );
      } else if (currentQuestionOptions.length < maxAnswers) {
        updatedOptions[currentQuestion] = [
          ...currentQuestionOptions,
          optionIndex,
        ];
      } else {
        alert(`You can select up to ${maxAnswers} answers for this question.`); // eslint-disable-line no-alert
      }

      return updatedOptions;
    });
  };

  const handleContinue = () => {
    // add logic for enforcing minimum answer number
    const updatedOptions = [...selectedOptions];
    const minAnswers = QuizAnswers[currentQuestion].optionNumber.min;

    updatedOptions[currentQuestion] = [];
    if (selectedOptions[currentQuestion].length < minAnswers) {
      if (minAnswers === 1) {
        alert(`Please choose at least ${minAnswers} answer`); // eslint-disable-line no-alert
      }
      if (minAnswers > 1) {
        alert(`Please choose at least ${minAnswers} answers`); // eslint-disable-line no-alert
      }
    } else if (currentQuestion < quizLength - 1) {
      let economicPoints = 0;
      let socialPoints = 0;
      for (let i = 0; i < selectedOptions[currentQuestion].length; i += 1) {
        economicPoints +=
          QuizScoring[currentQuestion].scoring[
            selectedOptions[currentQuestion][i]
          ][0];
        socialPoints +=
          QuizScoring[currentQuestion].scoring[
            selectedOptions[currentQuestion][i]
          ][1];
      }

      setEconomicScore(economicScore + economicPoints);
      setSocialScore(socialScore + socialPoints);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      toQuizResults();
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {currentQuestion < quizLength ? (
          <>
            <Text style={styles.question}>
              {QuizQuestions[currentQuestion]}
            </Text>
            {QuizAnswers[currentQuestion].options.map((option, optionIndex) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.optionButton,
                  selectedOptions[currentQuestion]?.includes(optionIndex) &&
                    styles.selectedOptionButton,
                ]}
                onPress={() => handleOptionSelect(optionIndex)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedOptions[currentQuestion]?.includes(optionIndex) &&
                      styles.selectedOptionText,
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}

            <Text style={styles.question}>
              economic score: {economicScore}
              {"\n"}
              social score: {socialScore}
            </Text>
            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleContinue}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </>
        ) : (
          <QuizResults
            economicScore={economicScore}
            socialScore={socialScore}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  selectedOptionButton: {
    backgroundColor: "blue", // Selected option color
  },
  selectedOptionText: {
    color: "white", // Selected option text color
  },
  optionButton: {
    backgroundColor: "#eaeaea",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: 200,
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: "#007bff",
    height: 50,
    width: "60%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
