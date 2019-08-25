var body = document.body
const container = document.getElementById("container")
const textContainer = document.getElementById("textContainer")
const buttonContainer = document.getElementById("buttonContainer")

const inputText = document.createElement("input")
inputText.setAttribute("type", "text")
var buttons = [  "+" , "-", "*", "/", "enter","1" , "2", "3", "4", "5", "6" , "7", "8", "9", "0"]

render()

function render(){
    body.appendChild(container)
    container.appendChild(textContainer)
    container.appendChild(buttonContainer)
    textContainer.appendChild(inputText) 
    Style()
    createButtons()
}

function createButtons (){ //no posee solo el crear, tambien la identificación de valor al hacer click
     buttons.map(function(i){
        var newButton = document.createElement("button")
        newButton.style.width= 50
        newButton.style.height = 50
        newButton.style.backgroundColor = "#ffeab9"
        var textButton = document.createTextNode(i)
        newButton.appendChild(textButton)
        buttonContainer.appendChild(newButton) 
        newButton.onclick = function(){
                if(i === "enter"){
                   inputText.value = "result"   
                }
                else{
                    inputText.value = i
                }
            }
    })
}

function Style(){
    container.style.width = 300
    container.style.height = 300
    container.style.backgroundColor = "#93ff96"
    container.style.margin = "auto"   
    textContainer.style.width = "90%"
    textContainer.style.height = 70
    textContainer.style.margin = "auto"
    textContainer.style.padding = 10
    inputText.style.width= "100%"
    inputText.style.height = 50  
    inputText.disabled = "true" 
    buttonContainer.style.width = "90%"
    buttonContainer.style.height = 350
    buttonContainer.style.margin ="auto"
    buttonContainer.style.padding= 25
}








