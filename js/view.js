var body = document.body
const container = document.getElementById('container')
const textContainer = document.getElementById('textContainer')
const buttonContainer = document.getElementById('buttonContainer')
const inputText = document.createElement('input')
inputText.setAttribute('type', 'text')
var buttons = [
	'+',
	'-',
	'*',
	'/',
	'c',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'0',
	'enter'
]

render()

function render() {
	body.appendChild(container)
	container.appendChild(textContainer)
	container.appendChild(buttonContainer)
	textContainer.appendChild(inputText)
	Style()
	createButtons()
}

function createButtons() {
	buttons.map(function(i) {
		if (i == 'enter') {
			let newButton = document.createElement('button')
			newButton.setAttribute('id', i)
			newButton.style.width = 250
			newButton.style.height = 50
			newButton.style.backgroundColor = '#ffeab9'
			let textButton = document.createTextNode(i)
			newButton.appendChild(textButton)
			buttonContainer.appendChild(newButton)
			newButton.setAttribute('class', 'btn')
		} else {
			let newButton = document.createElement('button')
			newButton.setAttribute('id', i)
			newButton.style.width = 50
			newButton.style.height = 50
			newButton.style.backgroundColor = '#ffeab9'
			let textButton = document.createTextNode(i)
			newButton.appendChild(textButton)
			buttonContainer.appendChild(newButton)
			newButton.setAttribute('class', 'btn')
		}
	})
}

function Style() {
	container.style.width = 300
	container.style.height = 350
	container.style.backgroundColor = '#93ff96'
	container.style.margin = 'auto'
	textContainer.style.width = '90%'
	textContainer.style.height = 70
	textContainer.style.margin = 'auto'
	textContainer.style.padding = 10
	inputText.style.width = '100%'
	inputText.style.height = 50
	inputText.disabled = 'true'
	buttonContainer.style.width = '90%'
	buttonContainer.style.height = 350
	buttonContainer.style.margin = 'auto'
	buttonContainer.style.padding = 25
}
