const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8080

require('dotenv').config()

const MongoClient = require('mongodb').MongoClient

let db,
    dbconnectionString = process.env.DB_STRING,
    dbName = 'the-shop-inventory'; 

app.use(cors())

//get statement with main page 
//listen for the server and console.log port 