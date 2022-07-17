const firstNumber = Number(prompt('enter first number', 0));
const secondNumber = Number(prompt('enter second number', 0));

const operator = prompt('enter math operator');


const sum = function() {
	console.log(firstNumber + secondNumber);
}

const minus = function() {
	console.log(firstNumber- secondNumber);
}

const multiply = function() {
	console.log(firstNumber * secondNumber);
}

const devide = function() {
	console.log(firstNumber / secondNumber);
}

if(operator == '+' ) {
	sum();
}

else if(operator == '-' ) {
	minus();
}

else if(operator == '*' ) {
	multiply();
}

else if(operator == '/' ) {
	devide();
}


