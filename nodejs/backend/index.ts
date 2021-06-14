import express, { Response, Request } from "express"
import { IBook } from "./IBook"

//const express = require('express')
const app = express()

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
 
app.listen(3000, () => console.log('server is working...'))