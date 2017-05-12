$(document).ready(function(){
	var words = ["HAWAII", "PUERTO RICO"];
	var letter;
	var selectedWord = words[Math.floor(Math.random() * words.length)];
	console.log(selectedWord);
	
	var answerKey = [];
	for (var i = 0; i < selectedWord.length; i++) {
		answerKey[i] = "_";
	}
	console.log(answerKey.join(" "));
	$('#question').html(answerKey.join(" "));

	$('#gameBox').on('click', function (event){
		letter = event.target.innerHTML;
		console.log(letter);

		for (var i = 0; i < selectedWord.length; i++) {
			if(selectedWord[i] === letter){
				answerKey[i] = letter;
				console.log(answerKey.join(" "));
			}	
		}

		$('#question').html(answerKey.join(" "));
	})
	
	
});




//var remaningLetters = selectedWord.length;

// 	while(remaningLetters > 0) {
// 		alert(answerKey.join (""));

// 	var guess = prompt ("Guess a letter") 
// 		if (guess.length !==1) {
// 			alert("Please enter a letter");
// 		}else{
// 			for (var j = 0; j < words.length; j++){
// 				if(words[j] === guess) {
// 					answerKey[j] = guess;
// 					remaningLetters--;  
// 				}
// 			}
// 		}
	
// }
// 	alert(answerKey.join(""));
// 	alert("Good job!")