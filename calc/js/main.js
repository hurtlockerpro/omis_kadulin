
// ES6 - 2016

function getX(){ // class

    function getY(){


        return new Object()
    }

}

let x = getX()
x.getY()

class Calc {

    #additionalKeyboardButtons = [13, 8, 37, 39, 111, 106, 109, 107]
    mathActionsNotToClone = ['*', '/', '-', '+']

    #lastSymbol = ''

    constructor(calcId){
        console.log('constructor')
        // this = kontekst
        //     if 1 ->  true . true true false ... 2 ->  true
        if (typeof calcId == 'undefined') throw new Error('Insert calc div name')
        if (calcId.toString().trim().length <= 0) throw new Error('calc div name is invalid')

        // === type + value
        // !== type + value

        try {

            this.calc = document.getElementById(calcId)
            if (typeof this.calc === 'undefined' || this.calc === null) throw new Error('No calc element found')

            this.btns = this.calc.querySelectorAll('.btn')
            this.attachClickToButton()

            this.input = this.calc.querySelector('#calcInput')
            this.attachEventToInput()

        } catch(info){
            console.log('Error occured!' + info)
            // throw
        } finally {
            console.log('finally');
        }

    
    }


    attachClickToButton(){

        for (let index = 0; index < this.btns.length; index++) {

            this.btns[index].addEventListener('click', (event) => {
                console.log(event.target.innerText)

                this.checkZeroInTheBeginning()

                let btnTitle = event.target.innerText
                if (btnTitle == 'CE')
                {
                    this.emptyInput()
                } else if (btnTitle == '='){
                    this.calculateResult()
                } else {
                    this.input.value += btnTitle
                }
                // 1 += 1 -> 2
                // '1' += 1 -> 11 (string)

                this.input.focus()

                // save last symbol
                if (this.mathActionsNotToClone.includes(btnTitle)) this.#lastSymbol = btnTitle
            });
            
        }
    }

    attachEventToInput(){
        this.input.addEventListener('keydown', (event) => {
            console.log(event.keyCode, event.key)
            if (
                (event.keyCode < 48 || 
                (event.keyCode > 57 && event.keyCode < 96) ||
                event.keyCode > 105) &&
                this.#additionalKeyboardButtons.includes(event.keyCode) == false
            )
            {
                event.preventDefault()
                
            } else if (event.keyCode == 13){ // key == 'Enter'
                this.calculateResult()
            }
            // ! important must be before #lastSymbol init
            this.isLastMathSymbolDuplicated(event.key)

            // save last symbol
            if (this.mathActionsNotToClone.includes(event.key)) this.#lastSymbol = event.key
        })
    }

    emptyInput(){
        this.input.value = '0'
    }

    calculateResult(){
        this.input.value = eval(this.input.value)
    }

    checkZeroInTheBeginning(){
        if (this.input.value.length == 1 && parseInt(this.input.value) == 0)
        {
            this.input.value = ''
        }
    }

    // boolean
    isLastMathSymbolDuplicated(currentSymbol){

        let result = false

        // if (!this.mathActionsNotToClone.includes(currentSymbol)) return result

        if (this.#lastSymbol == currentSymbol && this.mathActionsNotToClone.includes(currentSymbol)){
            // ++
            this.input.value = this.input.value.toString().substring(0, this.input.value.length - 1)
            // return 
            result = true
        } 
        else if (
            isNaN(this.#lastSymbol) && 
            this.#lastSymbol != currentSymbol && 
            this.mathActionsNotToClone.includes(currentSymbol))
        {
            this.input.value = this.input.value.toString().substring(0, this.input.value.length - 1) + currentSymbol

            result = false
        }
        return result
    }
}

let calc = new Calc('myCalc')
calc.mathActionsNotToClone.push([222]) 
//calc.abc = 'DCE'
// calc.emptyInput()

