// import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongo = require('mongodb')

const MongoClient = mongo.MongoClient
const uri =
  'mongodb+srv://default-user:aadjusting@cluster0-peiej.mongodb.net/Restaurant?retryWrites=true&w=majority'
var client

var mongoClient = new MongoClient(uri, {
  reconnectTries: Number.MAX_VALUE,
  autoReconnect: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoClient.connect((err, db) => {
  // returns db connection
  if (err != null) {
    console.log('Error occured while connecting to database', err)
    return
  }
  client = db
})

const app = express()

// make app use dependencies
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.get('/menuItems', (req, res) => {
  const collection = client.db('Restaurant').collection('menu')
  collection.find().toArray(function(err, results) {
    if(err) {
      console.log('Oops' + err)
      res.send([])
      return
    }
    
    res.send(results)
  })
})


app.listen(process.env.PORT || 8082) // client is already running on 8080