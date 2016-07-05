
	
/*----PHASE 1 ---> DEFINE THE GLOBAL VARIABLES----*/
	// Define all questions, possible answers, and correct answers as an array of objects in a variable.	
	var questionsArray = [

		{
			question: 'Approximately what year did construction of the famous Protestant church Grossmunster begin?',
			answerChoices: ['1100 A.D.', '1396 B.C.', '2016 A.D.', 'THE YEAR OF THE MONKEY'],
			questionCorrectAnswer: 0
		},

		{
			question: 'What famous structure in Zurich sports the largest clock face in Europe?',
			answerChoices: ['St. Peter\'s Church', 'Fraumunster', 'Grossmunster', 'Stadthaus'],
			questionCorrectAnswer: 0
		},

		{
			question: 'What famous artist created the 5 stained glass windows in the Fraumunster Cathedral?',
			answerChoices: ['Andy Warhol', 'Claude Monet', 'Marc Chagall', 'Salvador Dali'],
			questionCorrectAnswer: 2
		},

		{
			question: 'Into which body of water does the Limmat River flow into?',
			answerChoices: ['The Mediterranean Sea', 'The Atlantic Ocean', 'The Dead Sea', 'Lake Zurich'],
			questionCorrectAnswer: 3
		},

		{
			question: 'What is the population of Zurich?',
			answerChoices: ['378,884', '1,655,470', '13,000,000', '5,666,889'],
			questionCorrectAnswer: 0
		}

	];

	// Define the other global variables that will be used in the script.
	var currentQuestionNumber = 0;
	var numberOfQuestions = 5;
	var numberOfCorrectAnswers = 0;


/*----PHASE 2 ---> DEFINE THE FUNCTIONS----*/	

	function questionDisplay() {
		// This will update the text of each question.
	    $('#question').text(questionsArray[currentQuestionNumber].question);
		// This empties the #choices ID, that will eventually list out the answer choices.
		$('#choices').empty();	

		// This local variable will get the total number of choices for the current question.
		var totalNumberOfChoices = questionsArray[currentQuestionNumber].answerChoices.length;
		// This will iterate through the answer choices, create a row for each of them, then append each choice to the <div> with 'choices' ID attribute.
		for (var i = 0; i < totalNumberOfChoices; i++) {
			var buildEachChoiceHTML = "<input class='option' type='radio' name='option' value=" + i + ">" + questionsArray[currentQuestionNumber].answerChoices[i] + "<br>";
		// Appends each answer choice in the variable 'buildEachChoiceHTML' to the page.
		$('#choices').append(buildEachChoiceHTML);
		}



		// This will iterate through the array of question numbers and append the number of each question to the page as the test-taker advances through the quiz.
		$('#quest-number').text("Question " + (currentQuestionNumber + 1) + " of " + numberOfQuestions);

	};

/*----PHASE 3 ---> USE THE FUNCTIONS----*/
// The page loads....
$(document).ready(function() {
	// This jQuery hides the 'quiz-questions' and 'end-quiz' sections upon load of the page.
	$('.quiz-questions').hide();
	$('.end-quiz').hide();
	// Clicking the 'begin -button' starts the quiz and takes you beyond the starting page.
	$('.begin-button').click(function () {
		$('.end-quiz').hide();
        $('.start-quiz').hide();
        $('.quiz-questions').show();
    	// Empties the 'score-results' div ID so it starts at 0.
        $('#score-results').empty();
        // 
        questionDisplay();
  	});



	// This section will enable the usability of the multiple choice question boxes and allow them to select the chosen answer by clicking/unclicking the checkbox.
	// ??? 
    $('.quiz-questions').on('click', '.option', function () {
		// 
    	var userAnswer = $("input[class='option']:checked").val();
    	console.log(userAnswer);
    	var correctAnswer = questionsArray[currentQuestionNumber].questionCorrectAnswer;
    	// console.log(correctAnswer);
        if (userAnswer == correctAnswer) {

        numberOfCorrectAnswers++;
        }
    	

     	// If quiz is finished, show 'end-quiz' section ....
        if ((currentQuestionNumber + 1) == numberOfQuestions) {
        	//console.log(numberOfCorrectAnswers);
            // Shows the final score.
            $('#score-results').text("Final Score: " + numberOfCorrectAnswers + "/" + numberOfQuestions);


		if (numberOfCorrectAnswers > 3) {
			$("#results-bad").hide();		
			$("#results-good").show();
			} else {
				$("#results-good").hide();
				$("#results-bad").show();
				}

            // Hides the other sections.
            $('.quiz-questions').hide();
            $('.start-quiz').hide();
            $('.end-quiz').show();
        	}
        	// .... 'otherwise'(else), continue to next question.
        	else {
            // Increase the current question number by 1.
            currentQuestionNumber++;
            // Run the questionDisplay function, which displays the next question.
            questionDisplay();
        }


    /*--- Reload the 'start-quiz' section from the 'end-quiz' section ---*/
    $('.end-quiz').on('click', '.try-again-button', function () {
        $('.start-quiz').show();
        $('.quiz-questions').hide();
        $('.end-quiz').hide();
	    // Reset variables to start quiz again.
	    currentQuestionNumber = 0;
	    numberOfCorrectAnswers = 0;
	});



	});
});







