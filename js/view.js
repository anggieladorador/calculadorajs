var body = document.body
const container = document.getElementById("container")
const textContainer = document.getElementById("textContainer")
const buttonContainer = document.getElementById("buttonContainer")

const inputText = document.createElement("input")
inputText.setAttribute("type", "text")
var buttons = [
    "+",
    "-",
    "*",
    "/",
    "enter",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0"
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
        let newButton = document.createElement("button")
        newButton.setAttribute("id", i)
        newButton.style.width = 50
        newButton.style.height = 50
        newButton.style.backgroundColor = "#ffeab9"
        let textButton = document.createTextNode(i)
        newButton.appendChild(textButton)
        buttonContainer.appendChild(newButton)
        if (isNaN(newButton.getAttribute("id"))) {
            //clase dependiendo del tipo
            if (newButton.getAttribute("id") == "enter") {
                newButton.setAttribute("classname", i)
                console.log(newButton)
            } else {
                newButton.setAttribute("classname", "simbolos")
                console.log(newButton)
            }
        } else {
            newButton.setAttribute("classname", "numeros")
            console.log(newButton)
        }
    })
}

function Style() {
    container.style.width = 300
    container.style.height = 300
    container.style.backgroundColor = "#93ff96"
    container.style.margin = "auto"
    textContainer.style.width = "90%"
    textContainer.style.height = 70
    textContainer.style.margin = "auto"
    textContainer.style.padding = 10
    inputText.style.width = "100%"
    inputText.style.height = 50
    inputText.disabled = "true"
    buttonContainer.style.width = "90%"
    buttonContainer.style.height = 350
    buttonContainer.style.margin = "auto"
    buttonContainer.style.padding = 25
}
