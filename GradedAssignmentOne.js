const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ''

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';
let questions = [];
let correctAnswers = [];
let candidateAnswers = [];
const questionTwo = 'True or false: 5 kilometer == 5000 meters? ';
const correctAnswerTwo = 'true';
const questionThree = '(5 + 3)/2 * 10 = ? ';
const correctAnswerThree ='40';
const questionFour = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ";
const correctAnswerFour = "Trajectory";
const questionFive = 'What is the minimum crew size for the ISS? ';
const correctAnswerFive = '3';

questions = (question, questionTwo, questionThree, questionFour, questionFive);
console.log(questions);

correctAnswers.push(correctAnswer, correctAnswerTwo, correctAnswerThree, correctAnswerFour, correctAnswerFive);
//console.log(correctAnswers);


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Candidate name: ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for(let i = 0; i < questions.length; i ++){
	candidateAnswer = input.question(questions[i]);
    
	candidateAnswers.push(candidateAnswer);

	
		console.log(`Correct Answer - 
${correctAnswers[i]}
${candidateName}'s answer -
${candidateAnswers[i]}
`);
}
// candidateAnswer = input.question(question);
return candidateAnswers;
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

	for(let i = 0; i < correctAnswers.length; i++) {
	if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
  
		console.log(`For question ${i + 1}:
Great! Correct answer.`);
		
} else {
  console.log(`For question ${i + 1}:
Sorry, wrong answer.`)
}
	}


  let grade;

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello, " + candidateName + "!")
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};