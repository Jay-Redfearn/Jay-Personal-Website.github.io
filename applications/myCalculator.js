var $ = function(id) {
	return document.getElementById(id);
};

function useCalculator() {
	for (;;) {
		
		var userInputString = prompt("Choose from options 1-7 to use the calculator. \n1. Add \n2. Subtract \n3. Multiply \n4. Divide \n5. Exponet \n6. Mean \n7. Quit");
		
		var userInput = parseInt(userInputString);
		
		/*if (userInput = isNaN || userInput < 1 || userInput > 7)
			alert("Please enter a number between 1 - 7.");*/
		
		if (!isNaN && userInput >= 1 && userInput <= 7)
			break;
		
		
		if (userInput === 1) {
			
			for (;;) {
				var firstNumber = parseFloat(prompt("Enter your first number."));
					if (!isNaN(firstNumber))
						break;
			}//for
			
			for (;;) {
				var secondNumber = parseFloat(prompt("Enter your second number you want to add."));
					if (!isNaN(secondNumber))
						break;
			}//for
			
			var newNumber = firstNumber + secondNumber;
			alert("Your answer is " + newNumber + ".");
			
		}//if #1 Add
		
		
		if (userInput === 2) {
			
			for (;;) {
				firstNumber = parseFloat(prompt("Enter your first number."));
					if (!isNaN(firstNumber))
						break;
			}//for
			
			for (;;) {
				secondNumber = parseFloat(prompt("Enter the number you want to subtract from your first number."));
					if (!isNaN(secondNumber))
						break;
			}//for
			
			newNumber = firstNumber - secondNumber;
			alert("Your answer is " + newNumber + ".");
			
		}//if #2 Subtract
		
		
		if (userInput === 3) {
			
			for (;;) {
				firstNumber = parseFloat(prompt("Enter your first number."));
					if (!isNaN(firstNumber))
						break;
			}//for
			
			for (;;) {
				secondNumber = parseFloat(prompt("Enter your second number you want to multiply."));
					if (!isNaN(secondNumber))
						break;
			}//for
			
			newNumber = firstNumber * secondNumber;
			alert("Your answer is " + newNumber + ".");
			
		}//if #3 Multiply
		
		
		if (userInput === 4) {
			
			for (;;) {
				firstNumber = parseFloat(prompt("Enter your first number."));
					if (!isNaN(firstNumber))
						break;
			}//for
			
			for (;;) {
				secondNumber = parseFloat(prompt("Enter the number you want to divide from your first number."));
					if (!isNaN(secondNumber))
						break;
			}//for
			
			newNumber = firstNumber / secondNumber;
			alert("Your answer is " + newNumber.toFixed(2) + ".");
			
		}//if #4 Divide
		
		
		if (userInput === 5) {
			
			for (;;) {
				firstNumber = parseFloat(prompt("Enter your base number."));
					if (!isNaN(firstNumber))
						break;
			}//for
			
			for (;;) {
				secondNumber = parseFloat(prompt("To what power do you want you base to grow?"));
					if (!isNaN(secondNumber))
						break;
			}//for
			
			newNumber = Math.pow(firstNumber,secondNumber);
			alert("Your answer is " + newNumber.toFixed(2) + ".");
			
		}//if #5 Exponet
		
		
		if (userInput === 6) {
			
			var totalSum = 0;
			var counter = 0;
			for (;;) {
				
				var numberInput = prompt("Enter the numbers for your mean. Enter *** when you are done.");
				
				if (numberInput === '***')
					break;
				
				if (!isNaN(parseFloat(numberInput))) {
					totalSum = parseFloat(numberInput) + totalSum;
					counter = counter + 1;
				}//if
				
			}//for
			
			
			//Check why adding characters makes answer display NaN!
			
			newNumber = totalSum / counter;
			alert("Your answer is " + newNumber.toFixed(2) + ".");
			
		}//if #6 Mean

		
		if (userInput === 7) {
			alert("Goodbye!");
			break;
			
		}//if #7 Quit
		
		if (userInputString < 1 || userInputString > 7 || isNaN(userInputString)) {
			alert("Your input is not between 1 - 7. Please try again.");
		}
		
		$("resultBox").value = newNumber;
		
	}//for
	
}//function

window.onload = function() {
	$("resultBox").value = "";
	$("runCalculator").onclick = useCalculator;
	
};

