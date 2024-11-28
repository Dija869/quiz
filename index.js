// var questions = [
//     {
//         question: "What does HTML stand for?",
//         answers: [
//             { text: "HyperText Markup Language", correct: true },
//             { text: "HyperText Machine Language", correct: false },
//             { text: "HighText Markup Language", correct: false },
//             { text: "Hyper Tool Markup Language", correct: false },
//         ]
//     },
//     {
//         question: "Which tag is used to define an HTML document's heading?",
//         answers: [
//             { text: "<h1>", correct: true },
//             { text: "<head>", correct: false },
//             { text: "<heading>", correct: false },
//             { text: "<h2>", correct: false },
//         ]
//     },
//     {
//         question: "What attribute is used to provide a title for a web page in HTML?",
//         answers: [
//             { text: "head", correct: false },
//             { text: "title", correct: true },
//             { text: "name", correct: false },
//             { text: "meta", correct: false },
//         ]
//     },
//     {
//         question: "What does CSS stand for?",
//         answers: [
//             { text: "Cascading Simple Sheets", correct: false },
//             { text: "Cascading Style Sheets", correct: true },
//             { text: "Colorful Style Sheets", correct: false },
//             { text: "Creative Style Sheets", correct: false },
//         ]
//     },
//     {
//         question: "Which CSS property is used to change the background color of an element?",
//         answers: [
//             { text: "color", correct: false },
//             { text: "bg-color", correct: false },
//             { text: "background-color", correct: true },
//             { text: "background", correct: false },
//         ]
//     },
//     {
//         question: "Which of the following is the correct CSS syntax for adding a class to a button?",
//         answers: [
//             { text: "button { color: blue; }", correct: false },
//             { text: ".button { color: blue; }", correct: false },
//             { text: "#button { color: blue; }", correct: false },
//             { text: "button.class { color: blue; }", correct: true },
//         ]
//     },
//     {
//         question: "What is the purpose of the float property in CSS?",
//         answers: [
//             { text: "Aligns the element to the right or left", correct: true },
//             { text: "Changes the size of an element", correct: false },
//             { text: "Makes the element visible", correct: false },
//             { text: "Changes the font of an element", correct: false },
//         ]
//     },
//     {
//         question: "What is JavaScript primarily used for?",
//         answers: [
//             { text: "Structuring the content of a webpage", correct: false },
//             { text: "Styling the webpage", correct: false },
//             { text: "Adding interactivity to webpages", correct: true },
//             { text: "Organizing web files", correct: false },
//         ]
//     },
//     {
//         question: "Which of the following is the correct way to declare a variable in JavaScript?",
//         answers: [
//             { text: "variable x;", correct: false },
//             { text: "let x;", correct: false },
//             { text: "var = x;", correct: true },
//             { text: "const x =;", correct: false },
//         ]
//     },
//     {
//         question: "Which of these is a valid JavaScript function syntax?",
//         answers: [
//             { text: "function myFunction[] {}", correct: false },
//             { text: "function myFunction() { }", correct: true },
//             { text: "function: myFunction() { }", correct: false },
//             { text: "myFunction: function() { }", correct: false },
//         ]
//     }
// ];

// var questionElement = document.getElementById("question");
// var answerBtn = document.getElementById("answer-btn");
// var nextBtn = document.getElementById("next-btn");

// var currentQuestionIndex = 0;
// var score = 0;

// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;
//     nextBtn.innerHTML = "Next";
//     showQuestion();
// }
// function showQuestion(){
//     var currentQuestion = questions[currentQuestionIndex];
//     var questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.
//     question;
//     currentQuestion.answers.forEach(answer => {
//         var button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("option-btn");
//         answerBtn.appendChild(button);
//     });
// }
// startQuiz();




