var $ = function(id) {
	return document.getElementById(id);
};

var finalTotal = function () {
	
	var subtotal = $("subtotal").value;
	var taxRate = $("taxRate").value;
	var shippingCharges = $("shippingCharges").value;
	
	//Look at .toFixed(2) function
	
	var salesTax = subtotal * (taxRate/100);
	var finalTotal = parseFloat(subtotal) + parseFloat(salesTax) + parseFloat(shippingCharges);
	
	$("salesTax").value = "$" + salesTax.toFixed(2);
	$("total").value = "$" + finalTotal.toFixed(2);
	
	return false;
	

};

window.onload = function() {
	$("total").value = "";
	$("salesTax").value = "";
	$("calculateForm").onsubmit = finalTotal;
};

