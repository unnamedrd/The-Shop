const express = require('express')
const app = express()
const MongoClient = require("mongodb").MongoClient;
const cors = require('cors');
const { request } = require('express');
const PORT = 8080                 //declare variables for dependencies 

require('dotenv').config()


let db,
    dbconnectionString = process.env.DB_STRING, //declare db variables 
    dbName = 'the-shop-inventory'; 

//write connection statement to DB
MongoClient.connect(dbconnectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

 //middleware statements    

app.use(cors())
app.set('view engine', 'ejs')
app.use(express.static('public')) //points to folder 
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) //converts to json

//CRUD methods in order

/*app.get('/style.css', function (req, res) {
    res.sendFile(__dirname + "/" + 'style.css') 
})*/
app.get('/', (request, response) => {
    let contents = db.collection('summer22-collection').find().toArray()
        .then(data => {
            let jewelryList = data.map(item => item.name)
            console.log(jewelryList), 
                 response.render('index.ejs', {info:jewelryList})
        })
    .catch(error => console.log(error))
   
})

app.post('/api', (request, response) => {
    console.log('post heard')
    db.collection('summer22-collection').insertOne(
        request.body
    )
        .then(result => {
            console.log(result)
            response.redirect('/')
        })
})

app.put('/updateEntry', (request, response) => {
    console.log(request.body)
    
})

app.delete('/deleteEntry', (request, response) => {
    
})

//set up localhost on port 
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
//get statement with main page 
//listen for the server and console.log port 