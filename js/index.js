let display = document.getElementById("display")
let buttons = document.querySelectorAll("button")

let input = ''
let string = ''
let num1;
let num2;
let operator;
const operators = ["+", "-", "*", "/", "%"]

buttons.forEach(button => {
    button.addEventListener("click", e => {
        if (e.target.innerHTML === "AC") {
            display.value = 0
            string = ''
            input = ''
        } else if (e.target.innerHTML === "DE") {
            string = string.substring(0, string.length - 1)
            display.value = string
            input = input.substring(0, input.length - 1)
        } else if (e.target.innerHTML === "=") {
            string = eval(input)
            display.value = string
            string = ''
            input = ''
        }
        else {
            string += e.target.innerHTML;
            display.value = string
            input += e.target.value
        }
    })
})