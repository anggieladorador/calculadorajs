var body = document.body
const container = document.getElementById("container")
const textContainer = document.getElementById("textContainer")
const buttonContainer = document.getElementById("buttonContainer")

const inputText = document.createElement("input")
inputText.setAttribute("type", "text")

render()

function render(){
    body.appendChild(container)
    container.appendChild(textContainer)
    container.appendChild(buttonContainer)
    textContainer.appendChild(inputText) 
    signalCreation()
    numberCreation()
    Style()

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
}
function numberCreation(){
    for (let i = 0; i < 10; i++) {
        var btn= document.createElement("input")
        btn.style.height = 50
        btn.style.width = 50
        btn.setAttribute("type", "button")
        btn.setAttribute("value", i)
        buttonContainer.appendChild(btn)
    }
}
function signalCreation(){
    for (let i = 0; i < 4; i++) {
        var btn= document.createElement("input")
        btn.style.height = 50
        btn.style.width = 50
        btn.setAttribute("type", "button")
        buttonContainer.appendChild(btn)
        if(i===0){
            btn.setAttribute("value", "+")
        }
        if(i===1){
            btn.setAttribute("value", "-")
        }
        if(i===2){
            btn.setAttribute("value", "*")
        }
        if(i===3){
            btn.setAttribute("value", "/")
        }
    }
}






