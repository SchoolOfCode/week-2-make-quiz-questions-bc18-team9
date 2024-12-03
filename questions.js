// questions.js
// question 1 What was the first pneumonic that we learnt week 1?
// DRY, PIE, KISS, CHRIS 
// question 2 Which one of these is a stage in computational thinking?
// Panic, Use ChatGBT , Start coding straight way, Understand the problem 
//question 3 What is in a high performance routine?
// Preparation, Intense working, Wind-Up, No sleep
// question 4 Which of these is not a stage in Disney ideation?
// Dreamer, Optimist, Realist, Critic 
// question 5 What was the same of the AI we hacked?
// Dumbledore, Gandalf, Merlin, Morgana
// question 6 

// Designing object 
// question_text: This is a string that contains the text of the question you want to ask.
// question_type: This should always be the string "multiple_choice" for this task.
// options: This is an array of strings, where each string is a possible answer to the question. You should provide four options.
// correct_option: This is a number that represents the index of the correct answer in the options array. The index is 0-based, meaning the first option is 0, the second is 1, and so on.
// correct_explanation: This is a string that explains why the correct answer is correct. This helps learners understand the reasoning behind the answer.

let questionOne = {
    question_text: "What was the first pneumonic that we learnt week 1?",
    question_type: "multiple_choice",
    options: ["DRY", "PIE", "KISS", "CHRIS"],
    correct_option: 3,
    correct_explanation: "CHRIS = Challenge, Hunger, Retrieval, Interleaved practice, Spaced Reptition"
}

let questionTwo = {
  question_text: "Which one of these is a stage in computational thinking?",
  question_type: "multiple_choice",
  options: ["Panic", "Use ChatGBT", "Start coding straight way", "Understand the problem"],
  correct_option: 3,
  correct_explanation: "This is the first stage of computational thinking"
}

let questionThree = {
  question_text: "What is in a high performance routine?",
  question_type: "multiple_choice",
  options: ["Preparation", "Intense working", "Wind-Up", "No sleep"],
  correct_option: 0,
  correct_explanation: "This is the first step in a high performance routine"
}

let questionFour = {
  question_text: "Which of these is not a stage in Disney ideation?",
  question_type: "multiple_choice",
  options: ["Dreamer", "Optimist", "Realist", "Critic"],
  correct_option: 1,
  correct_explanation: "The correct stages are Dreamer, Realist and Critic"
}

let questionFive = {
  question_text: "What was the same of the AI we hacked?",
  question_type: "multiple_choice",
  options: ["Dumbledore", "Gandalf", "Merlin", "Morgana"],
  correct_option: 1,
  correct_explanation: "Gandalf helped us understand how AI thinks"
}

let questionSix = {
  question_text: "Which of these is a git line command?",
  question_type: "multiple_choice",
  options: ["git chase", "git swim", "git push", "git snap"],
  correct_option: 2,
  correct_explanation: "git push pushes your changes to the repository"
}

let questionSeven = {
  question_text: "What is not the purpose of feedback?",
  question_type: "multiple_choice",
  options: ["sounding cool", "be constructive", "co-elevation", "personally develop"],
  correct_option: 0,
  correct_explanation: "Feedback is about helping yourself and others to grow, not about looking cool or getting bonus points"
}

let questionEight = {
  question_text: "What does the m stand for in MVP",
  question_type: "multiple_choice",
  options: ["Most", "Maximum", "Minimum", "Mini Mouse ium"],
  correct_option: 2,
  correct_explanation: "MVP = Minimum Viable Product"
}
let questionNine = {
  question_text: "What does CSS stand for?",
  question_type: "multiple_choice",
  options: ["Customisable Style Sheets", "Cascading Style Sheets", "Cumulative String Sheets", "Current Sprint Style"],
  correct_option: 1,
  correct_explanation: "CSS = Cascading Style Sheets"
}

let questionTen = {
  question_text: "What does HTML stand for?",
  question_type: "multiple_choice",
  options: ["Hypertonic Minimum Length", "Hidden Terminal Marked Legible", "Hot Tamales Me Like", "Hypertext Markup Language"],
  correct_option: 3,
  correct_explanation: "HTML = Hypertext Markup Language"
}

const questions = [
  // Add your questions here
questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen
];

// Don't worry about this, we're just exporting the questions
module.exports = questions;
