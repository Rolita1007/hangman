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




