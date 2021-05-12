
let rows = 10 // count
let cols = 10

function multiply(x, y)
{
    return x * y
}

for (let rowIndex = 1; rowIndex <= rows; rowIndex++) {
    //console.log('rowIndex: ', rowIndex)
    for (let colIndex = 1; colIndex <= cols; colIndex++) {
        //console.log('colIndex: ', colIndex)
        console.log('result: ( ' + rowIndex + ', ' + colIndex +  ') ', 
        multiply(rowIndex, colIndex))
    }
}

let str = ' text ${ rows + cols } text '
let str2 = `<table border="1">
<tr>
    <td>${multiply(x,y)}</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td></td>
    <td></td>
    <td></td>
</tr>
</table>` // 1. multiple rows 2. variable
console.log(str)

