
let rows = 10 // count
let cols = 10

function multiply(x, y)
{
    return x * y
}

let tableHtml = ''
let rowHtml = ''
let cellHtml = ''
let th = ''
let tableHeaderHtml = ''
let tableFirstRowCell = ''
for (let rowIndex = 1; rowIndex <= rows; rowIndex++) {
    //console.log('rowIndex: ', rowIndex)
    cellHtml = ''
    
    for (let colIndex = 1; colIndex <= cols; colIndex++) {
        //console.log('colIndex: ', colIndex)
        // console.log('result: ( ' + rowIndex + ', ' + colIndex +  ') ', multiply(rowIndex, colIndex))
        //x = x + '1' //x += '1'
        tableFirstRowCell = ''
        if (rowIndex == 1)
        {   
            if (colIndex == 1) tableHeaderHtml = '<th></th>'
            th = generateCell(colIndex, 'th')
            th.setAttribute('scope', 'col')
            tableHeaderHtml += th.outerHTML

            if (colIndex == 1) tableFirstRowCell = '<th>1</th>'
        } 
        if (rowIndex >= 2 && colIndex == 1){

            th = generateCell(rowIndex, 'th')
            th.setAttribute('scope', 'row')
            cellHtml += th.outerHTML
        } 
            
        cellHtml += tableFirstRowCell +  generateCell(multiply(rowIndex, colIndex)).outerHTML
        
    }
    if (rowIndex == 1) rowHtml += generateRow(tableHeaderHtml).outerHTML
    rowHtml += generateRow(cellHtml).outerHTML
}
tableHtml = generateTable(rowHtml).outerHTML

console.log(tableHtml)

let webpageResult = document.getElementById('multiplyResult')
webpageResult.innerHTML = tableHtml

/*
let str = ' text ${ rows + cols } text '
let str2 = `<table border="1">
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
<tr>
    <td></td>
    <td></td>
    <td></td>
</tr>
</table>` // 1. multiple rows 2. variable
console.log(str)
*/
function generateTable(data){
    let table = document.createElement('table')
    /*table.style.border = '1px'
    table.style.borderColor = 'black'
    table.style.borderStyle = 'solid'*/
    table.classList.add('table', 'table-bordered')
   // table.classList.add('table-bordered')

    table.innerHTML = data

    return table // v 1
    // return table.outerHTML // <table style="border:1px"></table>
}

function generateRow(data){
    let tr = document.createElement('tr')
    tr.innerHTML = data
    return tr
}

function generateCell(data, cellType = 'td'){
    let td = document.createElement(cellType)
    //td.setAttribute('scope', 'row') // col - row
    //td.removeAttribute('scope')
    //td.innerHTML = '<b>dfghd rth</b>'
    td.innerText  = data
    return td
}


/*
let table1 = generateTable()
table1.style.backgroundColor = 'red'
console.log(table1.outerHTML)
*/

/*
let cell = generateCell('Hello from table') // <td>Hello from table</td>
let row = generateRow(cell.outerHTML) // <tr><td>Hello from table</td></tr>
let newTable = generateTable(row.outerHTML) // 
console.log(newTable.outerHTML)
*/