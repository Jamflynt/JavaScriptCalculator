class Calculator {
    constructor(previous, current){
        this.previous = previous
        this.current = current
    }

    clear() {
        this.current = ``
        this.previous = ``
        this.operation = undefined
    }

    delete() {

    }

    addNumber(number) {
        this.current = number
    }

    chooseOperation(operation) {

    }

    compute() {  

    }

    updatedDisplay() {
        this.current.innerText = this.current
    }
}

const numberButtons = document.querySelectorAll(`[data-number]`)
const operationButtons = document.querySelectorAll(`[data-operation]`)
const equalsButton = document.querySelector(`[data-equals]`)
const deleteButton = document.querySelector(`[data-delete]`)
const allClearButton = document.querySelector(`[data-all-clear]`)
const previous = document.querySelector(`[data-previous-operand]`)
const current = document.querySelector(`[data-current-operand]`)

const calculator = new Calculator(previous, current)

numberButtons.forEach(button => {
    button.addEventListener(`click`, () => {
        calculator.addNumber(button.innerText)
        calculator.updatedDisplay()
    })
})