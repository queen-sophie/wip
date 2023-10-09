/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
To edit Quiz Questions, find the question number (note that Question
#0 is the 1st question) and edit text between quotation marks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
To add a Quiz Question, create a new key, value pair where:
  key -- integer between [0, Number of Questions - 1], inclusive
  value -- text corresponding to Question Number in key

 If you insert a question anywhere except the end of the
 dictionary, you must reorder the subsequent questions' keys.

Increment the integer of each key for all affected entries.
  *The last question should have key = (number of questions - 1)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
To delete an entry, remove key and value from dictionary

Decrement the integer of each key for all affected entries.
  *The last question should have key = (number of questions - 1)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EXAMPLE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  A) Suppose you have this dict:

       const currDictionary = {
          0: "QA Text?",
          1: "QB Text?",
          2: "QC Text?",
      };
    
      And now you want to make a new key value pair where:
    key = 1,
    value = "QD Text?"

  B) There are now 4 entries, adjust affected keys (1->2, 2->3)

      New Dictionary:
       const currDictionary = {
          0: "QA Text?",
          1: "QD Text?",
          2: "QB Text?",
          3: "QC Text?",
      };

    C) Done!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const QuizQuestions = {
  // Question 1
  0: "Question 1 (2 answrs)",
  // Question 2
  1: "Question 2 (min 1 answr, max 2 answr)",
  // Question 3
  2: "Question 3 (min 1 answr, no max)",
  // Question 4
  3: "Question 4 (min 1 answr, no max)",
  // Question 5
  4: "Question 5 (2 answrs)",
  // Question 6
  5: "Question 6 (min 1 answr, no max)",
  // Question 7
  6: "Question 7 (1 answr)",
};

export default QuizQuestions;
