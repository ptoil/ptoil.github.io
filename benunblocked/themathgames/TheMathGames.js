/**************\
|The Math Games|
\**************/

function AScreateNumbers (level) {
	var number = 0;
	switch (level) {
		case '1':
			number = Math.floor(Math.random() * 10 + 1);
			break;
		case '2':
			number = Math.floor(Math.random() * 25 + 11);
			break;
		case '3':
			number = Math.floor(Math.random() * 50 + 26);
			break;
	}
	return number;
}
function MDcreateNumbers (level) {
	switch (level) {
		case '1':
			number = Math.floor(Math.random() * 5 + 1);
			break;
		case '2':
			number = Math.floor(Math.random() * 10 + 6);
			break;
		case '3':
			number = Math.floor(Math.random() * 15 + 11);
			break;
	}
	return number;
}

function checkAnswer (a, b) {
	if (a == b) {
		return 10;
	} else {
		return 0;
	}
}

var problem, answer, userAnswer, correct;
function playAddMultiplyGame (operation, level) {
	selectOperation.style.display = "none";
	selectLevel.style.display = "none";
	inputLine.style.display = "initial";
	var num1, num2, score = 0;
	if (operation == '+') {
		num1 = AScreateNumbers(level);
		num2 = AScreateNumbers(level);
		answer = num1 + num2;
		text.innerHTML = "What is " + num1 + " + " + num2 + "?";
		problem = num1 + " + " + num2;
	} else if (operation == '*') {
		num1 = MDcreateNumbers(level);
		num2 = MDcreateNumbers(level);
		answer = num1 * num2;
		text.innerHTML = "What is " + num1 + " * " + num2 + "?";
		problem = num1 + " * " + num2;
	}
	userAnswer = inputLine.value;
	score += checkAnswer(userAnswer, answer);
}
function playSubtractDivideGame (operation, level) {
	selectOperation.style.display = "none";
	selectLevel.style.display = "none";
	inputLine.style.display = "initial";
	var subtravisor, bigNum, score = 0;
	for (i = 0; i < 10; i++) {
		if (operation == '-') {
			subtravisor = AScreateNumbers(level);
			answer = AScreateNumbers(level);
			bigNum = subtravisor + answer;
			text.innerHTML = "What is " +  bigNum + " - " + subtravisor + "?";
			problem = bigNum + " - " + subtravisor;
		} else if (operation == '/') {
			subtravisor = MDcreateNumbers(level);
			answer = MDcreateNumbers(level);
			bigNum = subtravisor * answer;
			text.innerHTML = "What is " +  bigNum + " / " + subtravisor + "?";
			problem = bigNum + " / " + subtravisor;
		}
		userAnswer = inputLine.value;
		score += checkAnswer(userAnswer, answer);
	}
}

function setGame () {
	var operation, level, counter = 0, score = 0;
	var loop = true;
	ok1.style.display = "none";
	text.innerHTML = "Choose an operation and level: ";
	selectOperation.setAttribute("selected", "selected");
	selectOperation.style.display = "initial";
	selectLevel.style.display = "initial";
	enter.style.display = "initial";
	enter.onclick = function () {
		operation = selectOperation.options[selectOperation.selectedIndex].value;
		level = selectLevel.options[selectLevel.selectedIndex].text;
		switch (operation) {
			case '+':
			case '*':
				playAddMultiplyGame(operation, level);
				enter.onclick = function () {
					if (counter < 10) {
						userAnswer = inputLine.value;
						if (checkAnswer(userAnswer, answer) == 10) {
							correct = "Yes";
							score += checkAnswer(userAnswer, answer);
						} else {
							correct = "No";
							score += checkAnswer(userAnswer, answer);
						}
						switch (counter) {
							case 0:
								problem1.innerHTML = problem;
								answer1.innerHTML = answer;
								userAnswer1.innerHTML = userAnswer;
								correct1.innerHTML = correct;
								if (correct == "Yes") {
									correct1.style.color = "#00ff00";
								} else if (correct == "No") {
									correct1.style.color = "red";
								}
								break;
							case 1:
								problem2.innerHTML = problem;
								answer2.innerHTML = answer;
								userAnswer2.innerHTML = userAnswer;
								correct2.innerHTML = correct;
								if (correct == "Yes") {
									correct2.style.color = "#00ff00";
								} else if (correct == "No") {
									correct2.style.color = "red";
								}
								break;
							case 2:
								problem3.innerHTML = problem;
								answer3.innerHTML = answer;
								userAnswer3.innerHTML = userAnswer;
								correct3.innerHTML = correct;
								if (correct == "Yes") {
									correct3.style.color = "#00ff00";
								} else if (correct == "No") {
									correct3.style.color = "red";
								}
								break;
							case 3:
								problem4.innerHTML = problem;
								answer4.innerHTML = answer;
								userAnswer4.innerHTML = userAnswer;
								correct4.innerHTML = correct;
								if (correct == "Yes") {
									correct4.style.color = "#00ff00";
								} else if (correct == "No") {
									correct4.style.color = "red";
								}
								break;
							case 4:
								problem5.innerHTML = problem;
								answer5.innerHTML = answer;
								userAnswer5.innerHTML = userAnswer;
								correct5.innerHTML = correct;
								if (correct == "Yes") {
									correct5.style.color = "#00ff00";
								} else if (correct == "No") {
									correct5.style.color = "red";
								}
								break;
							case 5:
								problem6.innerHTML = problem;
								answer6.innerHTML = answer;
								userAnswer6.innerHTML = userAnswer;
								correct6.innerHTML = correct;
								if (correct == "Yes") {
									correct6.style.color = "#00ff00";
								} else if (correct == "No") {
									correct6.style.color = "red";
								}
								break;
							case 6:
								problem7.innerHTML = problem;
								answer7.innerHTML = answer;
								userAnswer7.innerHTML = userAnswer;
								correct7.innerHTML = correct;
								if (correct == "Yes") {
									correct7.style.color = "#00ff00";
								} else if (correct == "No") {
									correct7.style.color = "red";
								}
								break;
							case 7:
								problem8.innerHTML = problem;
								answer8.innerHTML = answer;
								userAnswer8.innerHTML = userAnswer;
								correct8.innerHTML = correct;
								if (correct == "Yes") {
									correct8.style.color = "#00ff00";
								} else if (correct == "No") {
									correct8.style.color = "red";
								}
								break;
							case 8:
								problem9.innerHTML = problem;
								answer9.innerHTML = answer;
								userAnswer9.innerHTML = userAnswer;
								correct9.innerHTML = correct;
								if (correct == "Yes") {
									correct9.style.color = "#00ff00";
								} else if (correct == "No") {
									correct9.style.color = "red";
								}
								break;
							case 9:
								problem10.innerHTML = problem;
								answer10.innerHTML = answer;
								userAnswer10.innerHTML = userAnswer;
								correct10.innerHTML = correct;
								if (correct == "Yes") {
									correct10.style.color = "#00ff00";
								} else if (correct == "No") {
									correct10.style.color = "red";
								}
								break;	
						}
						inputLine.value = "";
						if (counter < 9) {
							playAddMultiplyGame(operation, level);
						} else {
							inputLine.style.display = "none";
							text.innerHTML = "Your score is " + score + "%";
							enter.style.display = "none";
							ok2.style.display = "initial";
						}
					}
					counter++;
				}
				break;
			case '-':
			case '/':
				playSubtractDivideGame(operation, level);
				enter.onclick = function () {
					if (counter < 10) {
						userAnswer = inputLine.value;
						if (checkAnswer(userAnswer, answer) == 10) {
							correct = "Yes";
							score += checkAnswer(userAnswer, answer);
						} else {
							correct = "No";
							score += checkAnswer(userAnswer, answer);
						}
						switch (counter) {
							case 0:
								problem1.innerHTML = problem;
								answer1.innerHTML = answer;
								userAnswer1.innerHTML = userAnswer;
								correct1.innerHTML = correct;
								if (correct == "Yes") {
									correct1.style.color = "#00ff00";
								} else if (correct == "No") {
									correct1.style.color = "red";
								}
								break;
							case 1:
								problem2.innerHTML = problem;
								answer2.innerHTML = answer;
								userAnswer2.innerHTML = userAnswer;
								correct2.innerHTML = correct;
								if (correct == "Yes") {
									correct2.style.color = "#00ff00";
								} else if (correct == "No") {
									correct2.style.color = "red";
								}
								break;
							case 2:
								problem3.innerHTML = problem;
								answer3.innerHTML = answer;
								userAnswer3.innerHTML = userAnswer;
								correct3.innerHTML = correct;
								if (correct == "Yes") {
									correct3.style.color = "#00ff00";
								} else if (correct == "No") {
									correct3.style.color = "red";
								}
								break;
							case 3:
								problem4.innerHTML = problem;
								answer4.innerHTML = answer;
								userAnswer4.innerHTML = userAnswer;
								correct4.innerHTML = correct;
								if (correct == "Yes") {
									correct4.style.color = "#00ff00";
								} else if (correct == "No") {
									correct4.style.color = "red";
								}
								break;
							case 4:
								problem5.innerHTML = problem;
								answer5.innerHTML = answer;
								userAnswer5.innerHTML = userAnswer;
								correct5.innerHTML = correct;
								if (correct == "Yes") {
									correct5.style.color = "#00ff00";
								} else if (correct == "No") {
									correct5.style.color = "red";
								}
								break;
							case 5:
								problem6.innerHTML = problem;
								answer6.innerHTML = answer;
								userAnswer6.innerHTML = userAnswer;
								correct6.innerHTML = correct;
								if (correct == "Yes") {
									correct6.style.color = "#00ff00";
								} else if (correct == "No") {
									correct6.style.color = "red";
								}
								break;
							case 6:
								problem7.innerHTML = problem;
								answer7.innerHTML = answer;
								userAnswer7.innerHTML = userAnswer;
								correct7.innerHTML = correct;
								if (correct == "Yes") {
									correct7.style.color = "#00ff00";
								} else if (correct == "No") {
									correct7.style.color = "red";
								}
								break;
							case 7:
								problem8.innerHTML = problem;
								answer8.innerHTML = answer;
								userAnswer8.innerHTML = userAnswer;
								correct8.innerHTML = correct;
								if (correct == "Yes") {
									correct8.style.color = "#00ff00";
								} else if (correct == "No") {
									correct8.style.color = "red";
								}
								break;
							case 8:
								problem9.innerHTML = problem;
								answer9.innerHTML = answer;
								userAnswer9.innerHTML = userAnswer;
								correct9.innerHTML = correct;
								if (correct == "Yes") {
									correct9.style.color = "#00ff00";
								} else if (correct == "No") {
									correct9.style.color = "red";
								}
								break;
							case 9:
								problem10.innerHTML = problem;
								answer10.innerHTML = answer;
								userAnswer10.innerHTML = userAnswer;
								correct10.innerHTML = correct;
								if (correct == "Yes") {
									correct10.style.color = "#00ff00";
								} else if (correct == "No") {
									correct10.style.color = "red";
								}
								break;	
						}
						inputLine.value = "";
						if (counter < 9) {
							playSubtractDivideGame(operation, level);
						} else {
							inputLine.style.display = "none";
							text.innerHTML = "Your score is " + score + "%";
							enter.style.display = "none";
							ok2.style.display = "initial";
						}
					}
					counter++;
				}
				break;
		}
	}
}

function main () {
	play.style.display = "none";
	text.innerHTML = "Welcome to The Math Games ";
	ok1.style.display = "initial";
	var again;
	ok1.onclick = function () {
		setGame();
		ok2.onclick = function () {
			ok2.style.display = "none";
			text.innerHTML = "Would you like to play again?";
			selectAgain.style.display = "initial";
			enter.style.display = "initial";
			enter.onclick = function () {
				again = selectAgain.options[selectAgain.selectedIndex].value;
				if (again == "yes") {
					selectAgain.style.display = "none";
					problem1.innerHTML = null;
					answer1.innerHTML = null;
					userAnswer1.innerHTML = null;
					correct1.innerHTML = null;
					problem2.innerHTML = null;
					answer2.innerHTML = null;
					userAnswer2.innerHTML = null;
					correct2.innerHTML = null;
					problem3.innerHTML = null;
					answer3.innerHTML = null;
					userAnswer3.innerHTML = null;
					correct3.innerHTML = null;
					problem4.innerHTML = null;
					answer4.innerHTML = null;
					userAnswer4.innerHTML = null;
					correct4.innerHTML = null;
					problem5.innerHTML = null;
					answer5.innerHTML = null;
					userAnswer5.innerHTML = null;
					correct5.innerHTML = null;
					problem6.innerHTML = null;
					answer6.innerHTML = null;
					userAnswer6.innerHTML = null;
					correct6.innerHTML = null;
					problem7.innerHTML = null;
					answer7.innerHTML = null;
					userAnswer7.innerHTML = null;
					correct7.innerHTML = null;
					problem8.innerHTML = null;
					answer8.innerHTML = null;
					userAnswer8.innerHTML = null;
					correct8.innerHTML = null;
					problem9.innerHTML = null;
					answer9.innerHTML = null;
					userAnswer9.innerHTML = null;
					correct9.innerHTML = null;
					problem10.innerHTML = null;
					answer10.innerHTML = null;
					userAnswer10.innerHTML = null;
					correct10.innerHTML = null;
					setGame();
				} else if (again == "no") {
					selectAgain.style.display = "none";
					enter.style.display = "none";
					text.innerHTML = "You just played The Math Games by Suhail Mallick";
					window.setTimeout(function () {
						window.location = "../";
					}, 3000);
				}
			}
		}
	}
}
