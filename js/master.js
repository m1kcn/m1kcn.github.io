function isPalindrome() {
	// MOM = yes
	// DAD = yes
	//racecar = yes
	// Helen = no
	// hey mom yeh

	// wrod == drow

	//racecar - length of 7, 7/2 = 3.5 -> 2
	//  c

	//taccat - length of 6, 6/2 = 3 -> 2
	//  c



	var word = "humongous";
	var length = word.length;
	// word[2] = t
	var builder = "";

	// Use for loop to reverse the word variable 
	// and then alert the result
	// in above example, I'm programmatically trying to get
	// sougnomuh

	/* Solution - First version
	for (var i = length - 1; i >= 0; i--) {
		builder += word[i];
	}

	if (word == builder) {
		alert(word + " is a palindrome!!")
	}
	*/
	
	// aaa bbbb cc d ec bbbb aaa

	// use the break statement to end the loop early
	var palindrome = true;

	for (var i = 0; i< Math.floor(length / 2); i++) {

	// abccccccddddfdfadf
	// 0                (length - 1)
	// a                f
	//  1              (length - 2)
	//  b              d
	//   2            (length - 3)
	//   c            a	

		if(word[i] != word[length-1-i]) {
			palindrome = false;
			break;
		}

		else{
			continue;
		}

	}

	if (palindrome) {
		alert(word + "is a palindrome!!")
	}

	else {
		alert(word + " is NOT a palindrome!!");
	}
}

function romanDictionary(letter) {
	// I, V, X, L, C, D, M
	// 1, 5, 10, 50, 100, 500, 1000
	// III = 3
	/// VIII = 8
	/// LXI = 61
	// IX = 9
	// XL = 40
	//IV = 4
	// MMIV = 2004
	// IVMM = invalid number
	// IV
	// IM
	/*if (letter == "I") {
		do this
	}

	else if (letter == "V") {
		do that
	}
	*/

	switch(letter) {
		case "I":
		return 1;
		break;
	
		case "V":
		return 5;
		break;
	
		case "X":
		return 10;
		break;	
	
		case "L":
		return 50;
		break;	
	
		case "C":
		return 100;
		break;	
	
		case "D":
		return 500;
		break;
	
		case "M":
		return 1000;
		break;
	}
}

function convertRoman() {
	var total = 0;
	var roman = "XXVIII";
	var length = roman.length;

	for (var i = 0; i < length; i++) {
		if (i < length - 1 && romanDictionary(roman[i]) < romanDictionary(roman[i + 1])) {
			total += romanDictionary(roman[i + 1]);
			total -= romanDictionary(roman[i]);
			i++;
		}

		else {
			total += romanDictionary(roman[i]);
			continue;
		}
	}

	alert(total);

}

function enterPlayer(player) {
	var playerName = document.getElementById(player + "Name").value;
	var playerImage = document.getElementById(player + "Image").value;
	var builder = playerName + "<br><img src='images/" + playerImage + ".jpg' />"
	document.getElementById(player + "Info").innerHTML = builder;
}
var turn = "O";
var counterSquare = 0;

function changeSquare(element) {
	var player1Image = document.getElementById("player1Image").value
	var player2Image = document.getElementById("player2Image").value

	if (player1Image == "#" || player2Image == "#"){
		alert("Please set the avatars first")
	}
	
	else {
		if (document.getElementById(element).innerHTML.length == 0) {
			counterSquare++

			if (turn == "O") {
				document.getElementById(element).innerHTML = "<img src='images/" + player1Image + ".jpg' />";
				turn = "x";
			}

			else {
				document.getElementById(element).innerHTML = "<img src='images/" + player2Image + ".jpg' />";
				turn ="O";
			}

			if (counterSquare == 9) {
				alert("GameOver!")
			}
		
		}

		else {
			alert("This square is already taken!!")
		}
	}
}

function reset() {
	for (var i = 0; i < 9; i++) {
		document.getElementById("square" + i).innerHTML = "";
	}

	//gameover = false; counterSquare = 0
	gameover = false;
	counterSquare = 0
	turn = "O"
}

function checkSquare() {
	var innerHTML = document.getElementById("square0").innerHTML;
	alert(innerHTML.length);
}

var innerHTML = "<img src='images/ditto.jpg' />";
var position = innerHTML.indexOf("ditto")

function simpleSqrt() { 
	var number = document.getElementById("sqrt").value;
	var perfectSquare = 0;
	var sqrt = 0;

	while (perfectSquare <= number) {
		perfectSquare += (sqrt + sqrt) + 1;
		sqrt++;
	}

	// perfectSquare = 0 + 0 + 1 = 1
	// sqrt = 1;


	// perfectSquare = 1 + (1 + 1 + 1) = 4
	// sqrt = 2;

	// perfectSquare = 4 + (2 + 2 + 1) = 9
	// sqrt = 3;

	alert(sqrt - 1);

	// Given x 
	// Return INTEGER value of the sqrt, rounded DOWN 
	// x = 4 -> 2 
	// x = 5 ->2 
	// x = 50 -> 7 

	// 0, 1, 4, 9, 16, 25, 36, 49 
	// xth perfect square 0
	// 1 = 0 + 1
	// 4 = 1 + 3
	// 9 = 4 + 5
	// 16 = 9 + 7
	// n = (n - 1) + (2x + 1)


	// x = 10 -> 3
	// 0
	// 1 = 0 + 1
	// 4 = 1 + 3
	// 9 = 4 + 5
	// 16 = 9 + 7

}

/*
	== -> Comparison operator

	|| -> OR operator

	true || false -> true
	true || true -> true
	false || true -> false
	(true || false) || false -> true

	&& -> AND operator
	true && true -> true
	true && false -> false
	false && false -> false

	(true || false) && (true && false) -> false

*/
function checkHorizontal(playerImage) {
	var square0 = document.getElementById("square0").innerHTML;
	var square1 = document.getElementById("square1").innerHTML;
	var square2 = document.getElementById("square2").innerHTML;
	var square3 = document.getElementById("square3").innerHTML;
	var square4 = document.getElementById("square4").innerHTML;
	var square5 = document.getElementById("square5").innerHTML;
	var square6 = document.getElementById("square6").innerHTML;
	var square7 = document.getElementById("square7").innerHTML;
	var square8 = document.getElementById("square8").innerHTML;

	//return (() || () || ())

	return ((square0 == square1 && square1 == square2 && square2 == square0 && square0.indexOf(playerImage) > -1) || (square3 == square4 && square4 == square5 && square5 == square5 && square3.indexOf(playerImage) > -1) || (square6 == square7 && square7 == square8 && square8 == square6 && square6.indexOf(playerImage) > -1))
}

function checkVertical(playerImage) {
	var square0 = document.getElementById("square0").innerHTML;
	var square1 = document.getElementById("square1").innerHTML;
	var square2 = document.getElementById("square2").innerHTML;
	var square3 = document.getElementById("square3").innerHTML;
	var square4 = document.getElementById("square4").innerHTML;
	var square5 = document.getElementById("square5").innerHTML;
	var square6 = document.getElementById("square6").innerHTML;
	var square7 = document.getElementById("square7").innerHTML;
	var square8 = document.getElementById("square8").innerHTML;

	return ((square0 == square3 && square3 == square6 && square0 == square6 && square0.indexOf(playerImage) > -1) || (square1 == square4 && square4 == square7 && square1 == square7 && square1.indexOf(playerImage) > -1) || (square2 == square5 && square5 == square8 && square2 == square8 && square2.indexOf(playerImage) > -1))
}

function checkDiagonal(playerImage) {
	var square0 = document.getElementById("square0").innerHTML;
	var square1 = document.getElementById("square1").innerHTML;
	var square2 = document.getElementById("square2").innerHTML;
	var square3 = document.getElementById("square3").innerHTML;
	var square4 = document.getElementById("square4").innerHTML;
	var square5 = document.getElementById("square5").innerHTML;
	var square6 = document.getElementById("square6").innerHTML;
	var square7 = document.getElementById("square7").innerHTML;
	var square8 = document.getElementById("square8").innerHTML;

	return ((square0 == square4 && square4 == square8 && square0 == square8 && square0.indexOf(playerImage) > -1) || (square2 == square4 && square4 == square6 && square2 == square6 && square2.indexOf(playerImage) > -1))
			
}
