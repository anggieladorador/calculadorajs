'use strict'
var buttons = document.getElementsByClassName("btn")


for (const btn in buttons) {
    if(typeof(buttons[btn]) == "object"){
        let clickedbtn = buttons[btn].addEventListener("click", ()=>{
            inputText.value = inputText.value+ buttons[btn].id            
        })
    }
    
}