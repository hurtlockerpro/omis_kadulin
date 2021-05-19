
let input = document.querySelector('input[name=squareCount]') 
let btn = document.querySelector('button[type="button"]') 
let result = document.querySelector('#result') 

let colors = ['red', 'blue', 'green', 'yellow', 'brown']

input.addEventListener('keydown', event => {
    console.log(event.key, event.keyCode, event)
    // 96 - 105, 48 - 57
    /*if ((event.keyCode >= 48 && event.keyCode <= 57) || 
    (event.keyCode >= 96 && event.keyCode <= 105)){*/
    if (
        event.keyCode < 48 || 
        (event.keyCode > 57 && event.keyCode < 96) ||
        event.keyCode > 105
    )
    {
        event.preventDefault()
    }
})

btn.addEventListener('click', event => {
    result.innerHTML  = '' 
    for (let index = 0; index < input.value; index++) {
        let box = generateSquare()
        
        let index = getRandomInt(0, colors.length - 1)
        box.style.backgroundColor = colors[index]

        result.innerHTML += box.outerHTML
    }
    
})

function generateSquare(){
    let div = document.createElement('div')
    div.classList.add('box')

    div.style.border = '1px'
    div.style.borderStyle = 'dotted'
    div.style.borderColor = 'black'

    return div
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
input.addEventListener('keyup', event => {
    console.log('keyup')
})
input.addEventListener('keypress', event => {
    console.log('keypress')
})
*/

console.log('')
