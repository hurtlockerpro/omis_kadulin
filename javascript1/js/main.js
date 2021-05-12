
// ES6 

// var 
let x = 10; // number
console.log(typeof x)
x = 'test';
console.log(typeof x)

let x1 = true // boolean
let x2 = undefined
let x3
console.log(typeof x3)

let x4 = 1222222222n
console.log(typeof x4)

let x5 = 100 / x
console.log(x5)

// example typescript
// let x:number = '10' 



//var x15 = false
//var x15 = false


x1 = false
if (x1 == true){ // true
    // block 1
    console.log('this is true 1 variable')
} else if (x1) { // true
    // block 11
    console.log('this is true 11 variable')
} 
else if (typeof x2 == 'undefined') {
    // block 12
    console.log('this is undefined ')
    //if (){}
} 
else {
    // block 2
    console.log('this is false variable')
}

//             0      1     2       3 
let cars = ['item1', 101, true, undefined] // simple
let cars2 = { // associative - json
    car:'item1'
}

console.log(typeof cars)
console.log(typeof cars2)

//                      true                increment
for (let index = 0; index < cars.length; index++) {
    const element = cars[index];
    console.log(element)
}



// camel case -> jjjjjGgggggHhhhhh
function getX(){
    console.log('this is fn')
}

getX() // call 
function getX2(x, y, ...z)
{ // []
    console.log('this is fn 2 ' + x, ' y = ', y)

    for (let index = 0; index < z.length; index++) {
        const element = z[index];
        console.log(index, '=', element)
    }

    return 'abc'
}

function getX3(){
    console.log('this is fn 3')
    
    return 'abc'
}

let result = getX2(10, 'qwerty', 1,2,3,4,5,6, 'text1', true, undefined)
console.log('result: ', result)

if (getX2() == getX3())
{
    console.log('yes this is ok')
}

let z = () => 'abc' // return 
let z1 = x => 'abc ' + x // return 
let z2 = element => {
    console.log('this is fn 3')
    // TODO logic
    return 'abc ' + x // return 
}
cars.forEach( (element123, index, myCars) => { // callback
    //console.log('this is fn 3: ' + element123)
    console.log('value: ', element123, 'index: ', index, 'obj: ', myCars)

    for (let index = 0; index < myCars.length; index++) {
        const element = myCars[index];
        
    }

}) 
/*
function z1(x){ // this
    return 'abc ' + x

    function z1(x){ // this
        return 'abc ' + x
    }
}*/

console.log( z1('result') )



