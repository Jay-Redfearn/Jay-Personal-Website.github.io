var $ = function(id) {
	return document.getElementById(id);
};

var calculateMonthlyPayment = function () {
	
	//Declaring variables
	
	var fullName = $("fullName").value;
	var initialLoanAmount = $("initialLoanAmount").value;
	var monthsOfLoan = $("monthsOfLoan").value;
	var APR = $("APR").value;
	
	//Refactoring APR into useable interest rate
	
	var monthlyInterestRate = (APR/100)/12;
	
	//Converting declared variables into simple variables in order to build equation easier.
	
	var i = monthlyInterestRate;
	var P = initialLoanAmount;
	var n = monthsOfLoan;
	
	var monthlyPayment = (P*(i/(1-Math.pow(1+i, -n)))).toFixed(2);
	
													   
	$("monthlyPayment").value = "$" + monthlyPayment;
	
	return false;
	

};

window.onload = function() {
	$("monthlyPayment").value = "";
	$("calculateForm").onsubmit = calculateMonthlyPayment;
};

