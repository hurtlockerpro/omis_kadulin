

class Newsapi {
    options = { // json = javasript object notation
        url: 'http://newsapi.org/v2/everything?',
        q: 'tesla',
        from: '2021-05-02',
        sortBy: 'publishedAt',
        apiKey: '4a5de1e54b304bf2909af12bf979c242'
    }

    constructor(){
        let date = new Date()
        this.options.from = date.getFullYear() + '-' + date.getMonth() + '-'
        + date.getDate()
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
                    // 2 - jQuery
                    $('#myModal').modal('show')
                } else {

                    let cards = ''
                    data.articles.forEach(news => {
                        this.newsTitle = news.title
                        this.newsBody = news.description
                        this.urlToImage = news.urlToImage
                        cards += this.generateHtmlCard()
                    })
                    let newsResult = document.querySelector('.container > .row')
                    newsResult.innerHTML = cards
                }
                //document.getElementById('result').innerHTML = data
                console.log(data)
            })
    }

    generateHtmlCard(){
        return `<div class="card m-2" style="width: 18rem;">
        ${ this.getImage() }
        <div class="card-body">
          <h5 class="card-title">${ this.newsTitle }</h5>
          <p class="card-text">${ this.newsBody }</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
    }

    getImage(){
        if (typeof this.urlToImage == 'undefined' && this.urlToImage.trim().length <= 0) return ''
        
        return `<img src="${ this.urlToImage }" class="card-img-top" alt="${ this.newsTitle }">`
    }
}

let n = new Newsapi()

let btnSearch = document.querySelector('form > button[type="button"]')
let searchKeyword = document.querySelector('input[type="text"]')

btnSearch.addEventListener('click', event => {

    n.options.q = searchKeyword.value.trim()
    console.log( n.getUrl() )
    n.getData()

})


n.getData()

