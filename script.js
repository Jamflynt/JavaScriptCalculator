class Calculator {
    constructor(previousButton, currentButton){
        this.previousButton = previousButton
        this.currentButton = currentButton
    }

    clear() {

    }

    delete() {

    }

    addNumber(number) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updatedDisplay() {

    }
}

const numberButtons = document.querySelectorAll(`[data-number]`)
const operationButtons = document.querySelectorAll(`[data-operation]`)
const equalsButton = document.querySelector(`[data-equals]`)
const deleteButton = document.querySelector(`[data-delete]`)
const allClearButton = document.querySelector(`[data-all-clear]`)
const previousButton = document.querySelector(`[data-previous-operand]`)
const currentButton = document.querySelector(`[data-current-operand]`)

