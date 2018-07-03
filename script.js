//when document is ready...
$(document).ready(function() {

//set all score values to zero.
	var wins = [];
	//Display on document.
	$("div.wins").html("Wins: " + wins);

	var losses = [];
	//Display on document.
	$("div.losses").html("Losses: " + losses);

	//Points user adds to score by clicking on crystals.
	var totalScore = 0;
	$("div.user-score").html(totalScore);


playGame();

//Start playGame function.
function playGame() {
	//Set total score to zero.
	totalScore = 0;
	//Display totalScore on document.
	$("div.user-score").html(totalScore);
	//Generate random number.
	var randomNumber = 0;
	//Generate a random number between 19 and 102.
	var random = Math.floor(Math.random() * 102) + 19;
	//Assign random value to randomNumber.
	randomNumber = random;
	//Display on document.
	$("div.random-number").html(randomNumber);

//Assign random value to crystal 1.

	//Crystal one value is initially zero.
	var crystalOne = 0;
	//Generate random number between 1 and 9.
	var random = Math.floor(Math.random() * 9) + 1;
	//Then set value of Crystal one equal to the random number.
	var crystalOne = random;
	//Push the crystal's random value to the document.
	$('.crystal-1').data(crystalOne);

	console.log(crystalOne);


//Assign random value to crystal two.

	//Crystal two value is initially set to zero.
	var crystalTwo = 0;
	//Generate random number between 1 and 9.
	var random = Math.floor(Math.random() * 9) + 1;
	//Set value of crystal 2 equal to the random number.
	var crystalTwo = random;
	//Push the crystal's random value to the document.
	$('.crystal-2').data(crystalTwo);
	
	console.log(crystalTwo);
	
//Assign random value to crystal 3.

	//Crystal 3 value is initially set to zero.
	var crystalThree = 0;
	//Generate random value between 1 and 9.
	var random = Math.floor(Math.random() * 9) + 1;
	//Set value of crystal 3 equal to the random number.
	crystalThree = random;
	//Push the crystal's random value to the document.
	$('.crystal-3').data(crystalThree);

	console.log(crystalThree);

//Assign random value to crystal 4.
	
	//Crystal 4 is initially set to zero.
	var crystalFour = 0;
	//Generate random number between 1 and 9.
	var random = Math.floor(Math.random() * 9) + 1;
	//Set value of crystal 4 equal to the random number.
	crystalFour = random;
	//Push crystal;s random value to the document.
	$('.crystal-4').data(crystalFour);

	console.log(crystalFour);

//After all random values are assigned.

//When first crystal is clicked...
	$(document).on("click", ".Crystal-one", function() {
		//Add that number to the totalScore.
		totalScore = totalScore + crystalOne;
		//Push to document.
		$("div.user-score").html(totalScore);
		test();
	});

//When the second crystal is clicked...
	$(document).on("click", ".Crystal-two", function() {
		//Add that number to the totalScore.
		totalScore = crystalTwo + totalScore;
		//Push to document.
		$("div.user-score").html(totalScore);
		test();
	});

//When the third crystal is clicked.
	$(document).on("click", ".Crystal-three", function() {
		//Add that number to the totalScore.
		totalScore = crystalThree + totalScore;
		//Push to document.
		$("div.user-score").html(totalScore);
		test();
	});

//When the fourth crystal is clicked.
	$(document).on("click", ".Crystal-four", function() {
		//Add that value to the totalScore.
		totalScore = crystalFour + totalScore;
		$("div.user-score").html(totalScore);
		test();
	});

	function test() {

	//If the totalScore equals randomNumber...
	if (totalScore === randomNumber) {
		//Display "You win!"
		alert("You Win!");
		//Add one point to Wins.
		wins++;
		//Push to document.
		$("div.wins").html("Wins: " + wins);
		//Reset total score to zero.
		totalScore = 0;
		//Push to document.
		$("div.user-score").html(0)

		startGame();
	//If total score is ever greater than the random number...	
	} else if (totalScore > randomNumber) {
		//Display "You lost!"
		alert("You lost!");
		//Add one point to losses.
		losses++;
		//Push to document.
		$("div.losses").html("Losses: " + losses);

		startGame();
	};
}
}
});
