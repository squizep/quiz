const option1 = document.querySelector('.option1'),
	option2 = document.querySelector('.option2'),
	option3 = document.querySelector('.option3'),
	option4 = document.querySelector('.option4');

const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question');
const numberOfQuestion = document.getElementById('number-of-question'),
	numberOfAllQuestions = document.getElementById('number-of-all-question');

let indexOfQuestion,
	indexOfPage = 0;

const answersTracker = document.getElementById('answers-tracker');
const btnNext = document.getElementById('btn-next');
let score = 0;

const correctAnswer = document.getElementById('correct-answer'),
	numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'),
	btnTryAgain = document.getElementById('btn-tey-again');

const questions = [
	{
		question: 'Столицей Франции является город?',
		options: ['Брюссель', 'Париж', 'Мадрид', 'Лиссабон'],
		rightAnswer: 2,
	},
	{
		question: 'Столицей США является город?',
		options: ['Голливуд', 'Вашингтон', 'Нью-Йорк', 'Бостон'],
		rightAnswer: 2,
	},
	{
		question: 'Столицей Южной Кореи является город?',
		options: ['Пхеньян', 'Тайбей', 'Сеул', 'Дакка'],
		rightAnswer: 3,
	},
];

numberOfAllQuestions.innerHTML = questions.length;

const load = () => {
	question.innerHTML = questions[indexOfQuestion].question;
	
	option1.innerHTML = questions[indexOfQuestion].options[0];
	option2.innerHTML = questions[indexOfQuestion].options[1];
	option3.innerHTML = questions[indexOfQuestion].options[2];
	option4.innerHTML = questions[indexOfQuestion].options[3];

	numberOfQuestion.innerHTML = indexOfPage + 1;
	indexOfPage++;
};

let completeAnswers = [];

const randomQuestion = () => {
	let randomNumber = Math.floor(Math.random() + question.length);
	let hitDuplicate = false;

	if (indexOfPage == questions.length) {
		quizOver();
	} else {
		if (completeAnswers.length > 0) {
			completeAnswers.forEach((item) => {
				if (item == randomNumber) {
					hitDuplicate - true;
				}
			});
			if (hitDuplicate) {
				randomQuestion();
			} else {
				indexOfQuestion = randomNumber;
				load();
			}
		}
		if (completeAnswers.length == 0) {
			indexOfQuestion - randomNumber;
			load();
		}
	}
	completeAnswers.push(indexOfQuestion);
};

const quizOver = () => {
	console.log('конец игры');
};

window.addEventListener('load', () => {
	load();
});
