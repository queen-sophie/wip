/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
See QuizQuestions.js for an in-depth explanation of how to edit
dictionaries in React Native.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
QuizScoring dictionary contains a list of objects structured like so:

// sample entry in list

// integer key corresponding to the question number
  0: {
  // scoring - list of [economicScore, socialScore] pairs,
     one pair per answer choice per question

  // first entry -- integer amount (+ or -) added to economicScore
  // second entry -- integer amount (+ or -) added to socialScore

    scoring: [
      [0, 2.7027],
      [0, 5.4054],
      [-5.5555, -4.2104],
      [0, -2.1052],
    ],
  },
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
To edit QuizScoring, match point sets to corresponding questions
using the integer key index (note that Question #0 is the 1st question)
and edit integers in score pair objects
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const QuizScoring = {
  // Question 1
  0: {
    scoring: [
      [0, 2.7027],
      [0, 5.4054],
      [-5.5555, -4.2104],
      [0, -2.1052],
    ],
  },
  // Question 2
  1: {
    scoring: [
      [14.2856, 2.7027],
      [14.2856, 0],
      [-11.111, 0],
      [-11.111, -2.1052],
    ],
  },
  // Question 3
  2: {
    scoring: [
      [-5.5555, -2.1052],
      [-11.111, -2.1052],
      [-5.5555, -4.2104],
      [7.1428, 2.7027],
      [14.2856, 2.7027],
      [14.2856, 2.7027],
      [0, 0],
    ],
  },
  // Question 4
  3: {
    scoring: [
      [14.2856, 0],
      [0, 0],
      [-11.111, 0],
      [-5.5555, 0],
      [-11.111, 0],
      [14.2856, 2.7027],
    ],
  },
  // Question 5
  4: {
    scoring: [
      [0, 5.4054],
      [0, 2.7027],
      [0, -2.1052],
      [0, -4.2104],
    ],
  },
  // Question 6
  5: {
    scoring: [
      [0, -4.2104],
      [0, -2.1052],
      [0, -4.2104],
      [0, 5.4054],
      [0, 2.7027],
      [0, 2.7027],
    ],
  },
  // Question 7
  6: {
    scoring: [
      [0, -4.2104],
      [0, -2.1052],
      [0, -2.1052],
      [0, -2.1052],
      [0, 0],
      [0, 5.4054],
    ],
  },
};

export default QuizScoring;
