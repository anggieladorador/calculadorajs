'use strict'
var buttons = document.getElementsByClassName('btn')

concatenate()

function concatenate() {
	for (const btn in buttons) {
		if (typeof buttons[btn] == 'object') {
			if (buttons[btn].id == 'c') {
				buttons[btn].addEventListener('click', () => {
					inputText.value = ''
				})
			} else if (buttons[btn].id == 'enter') {
				buttons[btn].addEventListener('click', () => {
					operatorChoose(inputText.value)
				})
			} else {
				buttons[btn].addEventListener('click', () => {
					inputText.value = inputText.value + buttons[btn].id
				})
			}
		}
	}
}

function operatorChoose(inputValue) {
	for (let i = 0; i < inputValue.length; i++) {
		if (inputValue[i] == '+') {
			var splittednumber = inputValue.split('+')
			if (splittednumber.length > 2) {
				alerting()
			} else {
				addNumbers(splittednumber[0], splittednumber[1])
			}
		} else if (inputValue[i] == '-') {
			var splittednumber = inputValue.split('-')
			if (splittednumber.length > 2) {
				alerting()
			} else {
				subtractingNumbers(splittednumber[0], splittednumber[1])
			}
		} else if (inputValue[i] == '*') {
			var splittednumber = inputValue.split('*')
			if (splittednumber.length > 2) {
				alerting()
			} else {
				multiplyNumbers(splittednumber[0], splittednumber[1])
			}
		} else if (inputValue[i] == '/') {
			var splittednumber = inputValue.split('/')
			if (splittednumber.length > 2) {
				alerting()
			} else {
				divideNumbers(splittednumber[0], splittednumber[1])
			}
		}
	}
}

function addNumbers(num1, num2) {
	var adding = parseInt(num1) + parseInt(num2)
	inputText.value = adding
}

function subtractingNumbers(num1, num2) {
	var subtracting = parseInt(num1) - parseInt(num2)
	inputText.value = subtracting
}

function multiplyNumbers(num1, num2) {
	var multiplying = parseInt(num1) * parseInt(num2)
	inputText.value = multiplying
}

function divideNumbers(num1, num2) {
	var number1 = parseInt(num1)
	var number2 = parseInt(num2)
	if (number2 == 0) {
		alert('¿quieres matar la calculadora?ah?!')
	} else {
		var dividing = number1 / number2
		inputText.value = dividing
	}
}
function alerting() {
	alert('nope, no haremos operaciones con más de dos numeros')
}
