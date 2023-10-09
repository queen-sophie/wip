/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
See QuizQuestions.js for an in-depth explanation of how to edit
dictionaries in React Native.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
QuizAnswer dictionary contains a list of objects structured like so:

// sample entry in list

// integer key corresponding to the question number
  0: {
  // options - string list of possible answers for the current question
    options: [
     "A",
     "B",
     "C",
     "D",
    ],

    // optionNumber - min/max number of answers for current question
    optionNumber: {
      // optionNumber.min must be at least 1 (>= 1)
      min: 2,
      // optionNumber.max varies across questions, 1 -- select all 
      max: 2,
    },
  },
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
To edit QuizAnswers, match answer sets to corresponding questions
using the integer key index (note that Question #0 is the 1st question)
and edit text between quotation marks.

Make sure to adjust min/max optionNumber variables as needed.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const QuizAnswers = {
  // Question 1
  0: {
    options: ["A", "B", "C", "D"],
    optionNumber: {
      min: 2,
      max: 2,
    },
  },
  // Question 2
  1: {
    options: ["A", "B", "C", "D"],
    optionNumber: {
      min: 1,
      max: 2,
    },
  },
  // Question 3
  2: {
    options: ["A", "B", "C", "D", "E", "F", "G"],
    optionNumber: {
      min: 1,
      max: 7,
    },
  },
  // Question 4
  3: {
    options: ["A", "B", "C", "D", "E", "F"],
    optionNumber: {
      min: 1,
      max: 6,
    },
  },
  // Question 5
  4: {
    options: ["A", "B", "C", "D"],
    optionNumber: {
      min: 2,
      max: 2,
    },
  },
  // Question 6
  5: {
    options: ["A", "B", "C", "D", "E", "F"],
    optionNumber: {
      min: 1,
      max: 6,
    },
  },
  // Question 7
  6: {
    options: ["A", "B", "C", "D", "E", "F"],
    optionNumber: {
      min: 1,
      max: 1,
    },
  },
};

export default QuizAnswers;
