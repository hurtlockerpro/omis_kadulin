
let x = [1,2,3,4,0, [ 1,2,3] ] //  0 -> ...
// json
let list = 
    [{
        item: 'string',
        item1: 10,
        item2: true,
        item3: undefined,
        item4: function(x){
            return 'this fn, x = ' + x;
        }, 
        title:[{
            item16:{
                item21: 'this is end 21'
            },
            item17:{
                item22: 'this is end 22'
            },
            item18:{
                item23: 'this is end 23'
            }
        },
        {
            item16:{
                item21: 'this is end 21'
            },
            item17:{
                item22: 'this is end 22'
            },
            item18:{
                item23: 'this is end 23'
            }
        }]
    },
    {
        item: 'string',
        item1: 10,
        item2: true,
        item3: undefined,
        item4: function(x){
            return 'this fn, x = ' + x;
        }, 
        title:[{
            item16:[{
                item21: 'this is end 21'
            }],
            item17:[
                 'this is end 22'
            ],
            item18:{
                item23: 'this is end 23'
            }
        }]
    },]
    
// console.log (list.title.item6.item7)

/*
// variation 1 
for (const key in list) {
    //if (Object.hasOwnProperty.call(object, key)) {
    //    const element = object[key];   
    //}
    const element = list[key];
    console.log('key=', key, 'element=', element)
    if (key == 'item4') console.log(list[key](33333))
    if (key == 'item4') console.log(element(12222))
}
*/



/*
for (let index = 0; index < list.length; index++) {
    const element = list[index].title.item6.item7;
    console.log(element)
}*/


let arrFull = Object.entries(list)
let values = Object.values(list)
let keys = Object.keys(list)

//console.log(arrFull)
//console.log(values)
// console.log(keys)

arrFull.forEach(element => {

    console.log(typeof element[1])
    //if (element[0] == 'title' ){
    if (typeof element[1] == 'object' ){

        Object.entries(element).forEach(element1 => {
            console.log('level2: item = ', element1)
        })
    } else console.log(element)
    
});

// ajax async/await


let btn = document.querySelector('button')
btn.addEventListener('click', event => {

    let result = document.getElementById('result')

    //fetch('./about.html')
    //new XMLHttpRequest()
    /*
    fetch('https://google.com')
        .then(response123 => {
            // TODO 
            return response123.text()

        })
        .then(data => {
            console.log()
            result.innerHTML = data
        })
    */

        //$.post()
        //$.get()
        $.ajax({
            url:'https://google.com',
           // method: 'GET',
            success:function(data){
                result.innerHTML = data
            },
            error:function(err){
                console.log('ERROR:', err)
                //try{}catch{}
            }
        }).done(function( data ) {
           
          });
})






class Newsapi {
    options = { // json = javasript object notation
        url: 'http://newsapi.org/v2/everything?',
        q: 'tesla',
        from: '2021-05-02',
        sortBy: 'publishedAt',
        apiKey: '4a5de1e54b304bf2909af12bf979c242'
    }

    getUrl(){ //'a=b&a=b&'
        let result = ''
        Object.entries(this.options).forEach(item => {
            if (item[0] == 'url') {
                result = item[1]
            } else {
                result += item[0] + '=' + item[1] + '&'
            }
        })
        return result.substring(0, result.length - 1)
    }

    getData(){

        // overridden function
        fetch(this.getUrl(), {
            //method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            credentials: 'same-origin', // include, *same-origin, omit
        }) 
            .then(response => response.json())
            .then(data => {
                /*code: "corsNotAllowed"
                message: "Requests from the browser are not allowed on the Developer plan, except from localhost."
                status: "error"*/
                if (data.status == 'error')
                {
                    // 1
                    let modal = document.getElementById('myModal')
                    let body = modal.querySelector('.modal-body')
                    body.innerHTML = data.message
                    let title = modal.querySelector('.modal-title')
                    title.innerHTML = data.code
                    // 2
                    $('#myModal').modal('show')
                }
                document.getElementById('result').innerHTML = data
                console.log(data)
            })
    }
}

let n = new Newsapi()
n.options.q = 'bitcoin'
console.log( n.getUrl() )
n.getData()