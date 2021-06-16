import express, { Response, Request } from "express"
import { IBook } from "./IBook"

var bodyParser = require('body-parser')

//const express = require('express')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

let books:IBook[] = [
  {
    isbn: 1,
    title:'book 1',
    description:'description 1',
    author:'author 1',
    pages:10
  },
  {
    isbn: 2,
    title:'book 2',
    description:'description 2',
    author:'author 2',
    pages:20
  },
  {
    isbn: 3,
    title:'book 3',
    description:'description 3',
    author:'author 3',
    pages:30
  }
]

 
app.get('/', function (req:Request, res:Response) {
  res.send('Hello World')
})


app.get('/books', function (req:Request, res:Response) {
  res.send(books)
})

app.get('/books/:isbn', function (req:Request, res:Response) {

  let isbn:number = parseInt(req.params.isbn)
  books.forEach(book => {
    if (book.isbn == isbn)
    {
      res.send(book)
      return;
    }
  })
  res.status(404).send('Book is not found')
})

app.delete('/books/:isbn', function (req:Request, res:Response) {
  console.log(req.params.isbn)
  let isbn:number = parseInt(req.params.isbn)
  let isDeleted:boolean = false
  if (isbn > 0){
    books = books.filter(item => item.isbn !== isbn)
    isDeleted = true
    res.status(200).send({result: 'success'})
  }

  if (isDeleted == false) res.status(404).send({result:'error'})
})

app.post('/books/new', function (req:Request, res:Response) {
  //console.log(req.body) // json
  console.log(JSON.parse(req.body.data))

  let data = JSON.parse(req.body.data)
  let book:IBook = {
    isbn:parseInt(data.inputISBN),
    title:data.inputTITLE,
    description:data.inputDESCRIPTION,
    author:data.inputAUTHOR,
    pages:parseInt(data.inputPAGES)
  }
  books.push(book)
  
  res.status(200).send({result:'New book successfully added', status: 200})
})


app.put('/books/edit', function (req:Request, res:Response) {
  //console.log(req.body) // json
  console.log(JSON.parse(req.body.data))

  let data = JSON.parse(req.body.data)

  let isbn:number = parseInt(data.inputISBN) // for edit
  books.forEach(book => {
    if (book.isbn == isbn)
    {
      book.title = data.inputTITLE
      book.description = data.inputDESCRIPTION
      book.author = data.inputAUTHOR
      book.pages = parseInt(data.inputPAGES)

      res.status(200).send({
        result:'Successfully updated', 
        book: book, 
        status: 200 
      })
      return;
    }
  })
  res.status(404).send({result:'Book not found', status: 404})
})
 
app.listen(3000, () => console.log('server is working...'))