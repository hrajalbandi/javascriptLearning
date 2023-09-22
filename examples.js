//Assignment 1:
//Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.
checkNumber = (number) => {
	console.log("Entered number is =>", number);
	if (number > 0) {
		console.log(number, " is Positive");
	} else if (number < 0) {
		console.log(number, " is negative");
	} else {
		console.log(number, " is zero");
	}
};

//Assignment 2:
//Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.
factorialNum =  (number) => {
	let factVal = 1;
	if (number>0) {
		for (var i = number; i > 0; i--) {
			factVal = factVal * i;
		}
		console.log("factorial of the ", number, " is =>", factVal);
	} else {
		console.log("Entered number (", number, ") is not a positive number");
	}
};

//Assignment 3:
//Write a JavaScript function that takes two numbers as parameters and returns the larger one.
findGreater =  (num1, num2) => {
	// body...
	if (num1 > num2) {
		console.log(num1, " is greate than ", num2);
	} else if (num2 > num1) {
		console.log(num2, " is greate than ", num1);
	} else {
		console.log(num1, " is equal to ", num2);
	}
};

//Assignment 4:
//Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
isPalindrome  = (checkpalvar) => {
	// body...
	let strlenVal = checkpalvar.length ;
	let isPalindromeflag = true;
	for (var i = 0; i < strlenVal/2; i++) {
		if(checkpalvar[i] != checkpalvar[strlenVal-1-i]) {
			console.log("The entered string :", checkpalvar, " is not a palindrome");
			isPalindromeflag = false;
			break;
		}
	}
	if(isPalindromeflag && (strlenVal > 1)) {
		console.log("Entered string :", checkpalvar, " is a palindrome");
	} else if (strlenVal <= 1) {
		console.log('Entered string is too small to check for palindrome');
	} /* else {
		console.log("The entered string :", checkpalvar, " is not a palindrome");
	} */

}

isPrime = (num) => {
	if(num <= 1) {
		return true;
	} else {
		for (var i = 2; i < num; i++) {
			if (num%i == 0) {
				return false;
			}
		}
		return true;
	}
	
}
//Assignment 5:
//Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
printPrimeNumber  = (number) => {
	if (number >= 1) {
		for (var i = 1; i <= number; i++) {
			if(isPrime(i)) {
				console.log(i);
			}
		}
	} else {
		console.log(number, " is less than 1 ");
	}
}

//Assignment 6:
//Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.
calculator  = (num1, operator, num2) => {
	if (operator == '+') {
		return num1 + num2;
	} else if (operator == '-') {
		return num1 - num2;
	} else if (operator == '*') {
		return num1 * num2;
	} else if (operator == '/') {
		return num1 / num2;
	} else {
		console.log("Invalid operation :", operator);
		return null;
	}
}

//Assignment 7:
//Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.
getNumVowels = (stringVal) => {
	let cnt = 0;
	for (var i = 0; i < stringVal.length; i++) {
		if(stringVal[i] == 'a' || stringVal[i] == 'e' || stringVal[i] == 'i' || stringVal[i] == 'o' || stringVal[i] == 'u' || 
			stringVal[i] == 'A' || stringVal[i] == 'E' || stringVal[i] == 'I' || stringVal[i] == 'O' || stringVal[i] == 'U') {
			cnt++;
		}
	}
	return cnt;
}

//Assignment 8:
//Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.

isPerfectNumber = (number) => {
	let divisorsList = [];

	for (var i = 1; i < number; i++) {
		if(number%i == 0) {
			divisorsList.push(i);
			console.log(i);
		}
	}
	
	if (divisorsList.length > 0) {
		let sum = 0;
		divisorsList.forEach( (num) => {
				sum = sum + num;
			}
		);
		
		if (sum == number) {
			console.log("divisorsList :", divisorsList);
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

//Assignment 9:
//Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.
printFibonacci = (number) => {
	let fibonacciseries = [];
	if (number < 1) {
		return null;
	}
	fibonacciseries.push(0);
	fibonacciseries.push(1);
	let num = fibonacciseries[0]+fibonacciseries[1]; //1
	for (var i = 2; num <= number; i++) {
		fibonacciseries.push(num);//1
		num = fibonacciseries[i-1]+fibonacciseries[i];
	}
	return fibonacciseries;
}

// Assignment 10:
// Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.
printMultiplicationTable = (number) => {
	for (var i = 1; i <= 10; i++) {
		console.log(number, " * ", i, " = ", (number*i));
	}
	
}
let number = 1;

number = prompt("Enter a number to check its type(positive/negative/zero)");
if (number == null) {
	console.log("Entered invalid number");
} else {
	checkNumber(number);
}


number = prompt("Enter a postitive number to calculate factorial of the number");
if (number == null) {
	console.log("Entered invalid number");
} else {
	factorialNum(number);
}

let num1 = prompt("Enter 1st numbers to find the greater of two numbers");
let num2 = prompt("Enter 2nd numbers to find the greater of two numbers");
if (num1 == null || num2 == null) {
	console.log("Entered invalid number");
} else {
	findGreater(num1, num2);
}

let checkpalvar = prompt("Enter string to check the palindrome or not");
if (checkpalvar == null) {
	console.log("Entered invalid string");
} else {
	isPalindrome(checkpalvar);
}


number = prompt("Enter a number to print the prime numbers till the entered number ");
if (number == null) {
	console.log("Entered invalid number");
} else {
	printPrimeNumber(number);
}

let a = prompt("Enter 1st numbers to calculate");
let b = prompt("Enter 2nd numbers to calculate");
let opr = prompt("Enter what to calculate (+, -, *, or /)");
if (a == null || b == null || opr == null) {
	console.log("Invalid entries");
} else {
	let val = calculator(Number(a), opr, Number(b));
	if (val == null) {
		console.log("Invalid entries");
	} else {
		console.log(a, " ", opr, " ", b, " = ", val);
	}
	
}


let vowelscnt = prompt("Enter string to check the number of vowels in it");
if (vowelscnt == null) {
	console.log("Entered invalid string");
} else {
	let cnt = getNumVowels(vowelscnt);
	console.log(vowelscnt, " has ", cnt, " of vowels");
}


number = prompt("Enter the number to check whether it is perfect or not");
if (number == null) {
	console.log("Entered invalid ");
} else {
	let isperfect = isPerfectNumber(number);
	if(isperfect) {
		console.log(number, " is perfect");	
	} else {
		console.log(number, " is not perfect");	
	}
	
}


number = prompt("Enter the number to generate fibonacci series");
if (number == null) {
	console.log("Entered invalid ");
} else {
	let fibSeries = printFibonacci(number);
	if(fibSeries) {
		console.log(fibSeries, " for the ", number);	
	} else {
		console.log("failed to list the fibonacci series for ", number);	
	}
	
}

number = prompt("Enter the number to print multiplication for entered number");
if (number == null) {
	console.log("Entered invalid ");
} else {
	printMultiplicationTable(number);
}

