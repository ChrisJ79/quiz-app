
	
/*----PHASE 1 ---> DEFINE THE GLOBAL VARIABLES----*/
	// Define all questions, possible answers, and correct answers as an array of objects in a variable.	
	var questionsArray = [

		{
			question: 'Approximately what year did construction of the famous Protestant church Grossmunster begin?',
			answerChoices: ['1100 A.D.', '1396 B.C.', '2016 A.D.', '0 B.C.', 'THE YEAR OF THE MONKEY'],
			correctAnswer: 0
		},

		{
			question: 'What famous structure in Zurich sports the largest clock face in Europe?',
			answerChoices: ['St. Peter\'s Church', 'Fraumunster', 'Grossmunster', 'Stadthaus'],
			correctAnswer: 1
		},

		{
			question: 'What famous artist created the 5 stained glass windows in the Fraumunster Cathedral?',
			answerChoices: ['Andy Warhol', 'Claude Monet', 'Marc Chagall', 'Salvador Dali'],
			correctAnswer: 2
		},

		{
			question: 'Into which body of water does the Limmat River flow into?',
			answerChoices: ['The Mediterranean Sea', 'The Atlantic Ocean', 'The Dead Sea', 'Lake Zurich'],
			correctAnswer: 3
		},

		{
			question: 'What is the population of Zurich?',
			answerChoices: ['378,884', '1,655,470', '13,000,000', '5,666,889'],
			correctAnswer: 0
		}

	];

	//  Define the other global variables that will be used in the script.
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
			var buildEachChoiceHTML = "<input type='radio' class='option' name='option' value=" + i + ">" + questionsArray[currentQuestionNumber].question[i] + "<br>";
		}
		// This will iterate through the array of question numbers and append the number of each question to the page.
		$('#quest-number').text("Question " + (currentQuestionNumber + 1) + " of " + numberOfQuestions);
	};

/*----PHASE 3 ---> USE THE FUNCTIONS----*/
// The page loads....
$(document).ready(function() {
	// This jQuery hides the 'quiz-questions' and 'end-quiz' sections upon load of the page.
	$('.quiz-questions').hide();
	$('.end-quiz').hide();
	// 
	$('.begin-button').click(function () {
		$('.end-quiz').hide();
        $('.start-quiz').hide();
        $('.quiz-questions').show();
    	//empty the result details container
        $('#score-results').empty();
        questionDisplay();

  	});

	// THIS IS WHERE I LEFT OFF.....
    $('.quiz-section').on('click', '.option', function () {};

});







