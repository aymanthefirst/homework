// get number 1
// get math
// get number 2

// used this because contains() method doesn't exist
String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

// display value rounded to the nearest intiger
function display(originalValue){
	_('display').value =  parseFloat(originalValue);
}

//simplify getting elements
function _(x) {
	return document.getElementById(x);
}

function calc(val){
	_('display').value += val;
}
function c(val){
	_('display').value = "";
}
function e() {
	// checks that formula contains n
	if (_('display').value.contains('n')) {
		var value = _('display').value;
		var parts = value.split('n', 2);
		var num1 = parts[0];
		var num2  = parts[1];
		display(Math.pow(num1, num2));	
	}else if(_('display').value.contains('√')) {
		var value = _('display').value;
		
		var parts = value.split('√', 2);
		var num1 = parts[0];
		
		display(Math.sqrt(num1));
	}else {
		display(eval(_('display').value));
	}
	
}
function n() {
	calc('n');
}


