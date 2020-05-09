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
  console.log('DB connected successfully!')
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
      console.log('Error retreiving menu items from DB' + err)
      res.send([])
      return
    }
    
    res.send(results)
  })
})

app.post('/addMenuItem', (req, res) => {
  const collection = client.db('Restaurant').collection('menu')
  var itemName = req.body.item.name
  var itemPrice = req.body.item.price
  var itemImage = req.body.item.image
  collection.insertOne({name: itemName, price: itemPrice, image: itemImage}, function(err, results) {
    if(err) {
      console.log('Error adding item to menu' + err)
      res.send('')
      return
    }
    console.log('Item added successfully!')
    res.send(results.ops[0])
  })
})

app.post('/deleteMenuItem', (req, res) => {
  const collection = client.db('Restaurant').collection('menu')
  collection.removeOne({name: req.body.item.name}, function(err, results) {
    if(err) {
      console.log('Error deleting Menu item' + err) 
      res.send('')
      return
    }
    console.log('Item removed from menu')
    res.send() // Return
  })
})

// app.post('/addToCart', (req, res) => {
//   const collection = client.db('Restaurant').collection('cart')
//   var itemName = req.body.item.name
//   var itemPrice = req.body.item.price
//   var itemImage = req.body.item.image
//   collection.insertOne({name: itemName, price: itemPrice, image: itemImage}, function(err, results) {
//     if(err) {
//       console.log('Error adding item to cart' + err)
//       res.send('')
//       return
//     }
//     res.send(results.ops[0])
//   })
// })

// app.get('/cartItems', (req, res) => {
//   const collection = client.db('Restaurant').collection('cart')
//   collection.find().toArray(function(err, results) {
//     if(err) {
//       console.log('Error retreiving cart items from DB' + err)
//       res.send([])
//       return
//     }
//     res.send(results)
//   })
// })

// app.post('/deleteCartItem', (req, res) => {
//   const collection = client.db('Restaurant').collection('cart')
//   collection.removeOne({name: req.body.item.name}, function(err, results) {
//     if(err) {
//       console.log('Error deleting cart items' + err) 
//       res.send('')
//       return
//     }
//     res.send() // Return
//   })
// })

app.post('/addOrder', (req, res) => {
  const collection = client.db('Restaurant').collection('orders')
  var items = req.body.order
  // var customerName = req.body.info.customerName
  // var customerMobile = req.body.info.customerMobileNo
  // var customerEmail = req.body.info.customerEmail
  // var feedback = req.body.info.feedback
  var date = req.body.info.date
  var time = req.body.info.time
  collection.insertOne({order: items, date: date, time: time}, function(err, results) {
    if(err) {
      console.log('Error logging order to DB' + err)
      res.send('')
      return
    }
    res.send(results.ops[0])
  })
  // const collection1 = client.db('Restaurant').collection('cart')
  // collection1.deleteMany({}, function(err, results) {
  //   if(err) {
  //     console.log('Error emptying cart' + err)
  //     res.send('')
  //     return
  //   }
  // })
})

app.get('/orderItems', (req, res) => {
  const collection = client.db('Restaurant').collection('orders')
  collection.find().toArray(function(err, results) {
    if(err) {
      console.log('Error retreiving order items from DB' + err)
      res.send([])
      return
    }

    res.send(results)
  })
})

app.listen(process.env.PORT || 8082) // client is already running on 8080