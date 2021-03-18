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
