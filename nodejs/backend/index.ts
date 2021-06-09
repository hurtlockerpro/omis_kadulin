import express, { Response, Request } from "express"

//const express = require('express')
const app = express()


 
app.get('/', function (req:Request, res:Response) {
  res.send('Hello World')
})
 
app.listen(3000, () => console.log('server is working...'))