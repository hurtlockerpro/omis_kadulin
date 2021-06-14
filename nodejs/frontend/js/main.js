
$('#bookModal').on('show.bs.modal', function (event) {

    $.get('../frontend/form.html', form => { //await
        let modal = document.getElementById('bookModal')
        let body = modal.querySelector('.modal-body')
        body.innerHTML = form
    })
})

let host = 'localhost'
let port = 3000

function generateUrl(tailUrl){
    return 'http://' + host + ':' + port + '/' + tailUrl
}

function generateCard(){
    return `<div class="card m-2" style="width: 13rem;">
    <div class="card-body">
      <h5 class="card-title">${ bookTitle }</h5>
      <p class="card-text">${ bookDescription }</p>
      
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#bookModal">EDIT</button>
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
            }
        }

    })
}

getBooks()