
$('#bookModal').on('show.bs.modal', function (event) {

    $.get('../frontend/form.html', form => { //await
        // 1
        let modal = document.getElementById('bookModal')
        let body = modal.querySelector('.modal-body')
        let title = modal.querySelector('.modal-title')
        body.innerHTML = form
        if (bookData != undefined)
        {
            title.innerText = 'Edit book'
        
            document.getElementById('inputISBN').value = bookData.isbn
            document.getElementById('inputTITLE').value = bookData.title
            document.getElementById('inputDESCRIPTION').value = bookData.description
            document.getElementById('inputAUTHOR').value = bookData.author
            document.getElementById('inputPAGES').value = bookData.pages
  
        } else {
            title.innerText = 'Insert book'
        }
    })
})

$('#bookModal').on('hide.bs.modal', function (event) {
    bookData = undefined
})

let host = 'localhost'
let port = 3000

let bookData = undefined

function generateUrl(tailUrl){
    return 'http://' + host + ':' + port + '/' + tailUrl
}

function generateCard(){
    return `<div class="card m-2" style="width: 13rem;">
    <div class="card-body">
      <h5 class="card-title">BOOK: ${ bookTitle }</h5>
      <p class="card-text">${ bookDescription }</p>
      
      <button type="button" class="btn btn-primary edit" data-isbn="${ bookIsbn }">EDIT</button>
      <button type="button" class="btn btn-danger delete" data-isbn="${ bookIsbn }">DELETE</button>
    </div>
  </div>`
}

let getBooks = () => {

    // try catch -> ...
    fetch(generateUrl('books'))
    .then(response => response.json())
    .then(data => {

        // json -> error
        console.log(data)

        if (typeof data == 'object' && data.length >= 1)
        {
            let booksDiv = document.getElementsByClassName('row')
            if (booksDiv.length >= 1)
            {
                booksDiv[0].innerHTML = ''
                data.forEach(book => {
                    bookTitle = book.title
                    bookDescription = book.description + ' <br>' + 
                    book.author + '<br>' + book.isbn
                    bookIsbn = book.isbn

                    booksDiv[0].innerHTML += generateCard()
                });

                // get all delete buttons 
                let btnsDelete = document.getElementsByClassName('delete')
                Array.from(btnsDelete).forEach(btn => {
                    btn.addEventListener('click', event => {
                        let isbn = event.target.dataset.isbn
                        console.log(isbn)

                        fetch(generateUrl('books/' + isbn), 
                        {
                            method: 'DELETE' // *GET, POST, PUT, DELETE, etc.)
                        }).then(respose => respose.json())
                        .then(data => {
                            console.log('result: ', data.result)
                            if (data.result == 'error'){
                                console.log('this is error from rest api server')
                            } else {
                                getBooks()
                            }
                        })
                    })
                })

                // get all edit buttons 
                let btnsEdit = document.getElementsByClassName('edit')
                Array.from(btnsEdit).forEach(btn => {
                    btn.addEventListener('click', event => {
                        let isbn = event.target.dataset.isbn
                        console.log(isbn)
                        
                        fetch(generateUrl('books/' + isbn))
                            .then(respose => respose.json())
                            .then(data => {
                                console.log('result: ', data)
                                // 1
                                bookData = data
                                // 2
                                $('#bookModal').modal('show')
                            })
                        
                    })
                })
            }
        }

    })
}

let btnAddNew = document.querySelector('.btn-success')
btnAddNew.addEventListener('click', event => {
    
    $('#bookModal').modal('show') // {keyboard:false}

})

let btnSaveChanges = document.querySelector('#btnSaveChanges')
btnSaveChanges.addEventListener('click', event => {
    
    console.log('btnSaveChanges')

    let frmBook = document.getElementById('frmBook')
    // console.log(frmBook)
    var data = new FormData(frmBook);
    console.log(Array.from(data))

    let myJson = []
    Array.from(data).forEach(item => {
        myJson[item[0]] = item[1]
    })

    console.log(JSON.stringify(Object.assign({}, myJson)))
    console.log(Object.assign({}, myJson))

    if (bookData == undefined)
    {
        fetch(generateUrl('books/new'), 
        {
            method: 'POST',
            mode:'cors',
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: 'data=' + JSON.stringify(Object.assign({}, myJson))
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.status == 200) 
            {
                getBooks()
                $('#bookModal').modal('hide')
            }
            
        })
    } else {
        fetch(generateUrl('books/edit'), 
        {
            method: 'PUT',
            mode:'cors',
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: 'data=' + JSON.stringify(Object.assign({}, myJson))
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.status == 200) 
            {
                getBooks()
                $('#bookModal').modal('hide')
            }
            
        })
    }  
})




getBooks()