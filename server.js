const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8080

require('dotenv').config()

const MongoClient = require('mongodb').MongoClient

let connectionString = process.env.DB_STRING; 

app.use(cors())