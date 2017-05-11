$(document).ready(function(){

	var words = ["Hawaii", "Puerto Rico"];
	var selectedWord = words[Math.floor(Math.random() * words.length)];
	console.log(selectedWord);
	
	var answerKey = [];
	for (var i = 0; i < selectedWord.length; i++) {
		answerKey[i] = "_";
		 //need to use .innerHTML to render answerkey on html pg
		//var remaningLetters = selectedWord.length;
	}
	console.log(answerKey.join(" "));
	$('#question').html(answerKey.join(" "));


});