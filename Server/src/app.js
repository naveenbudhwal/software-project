// import dependencies
const express    = require('express'),
      jwt        = require('jsonwebtoken')
      bodyParser = require('body-parser'),
      cors       = require('cors'),
      morgan     = require('morgan'),
      mongo      = require('mongodb')

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
app.use(bodyParser.urlencoded({ extended: true }))
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
  const collection = client.db('Restaurant').collection('user')
  const userName = req.body.userName
  const order = {
    foodItems: req.body.foodItems,
    billTotal: req.body.billTotal,
    time: req.body.currentTime,
    date: req.body.currentDate
  }

  collection.updateOne(
    { name: userName },
    { $push: { orders: order }}
  ).then((results, err) => {
    if(err) {
      console.log('Error logging order to DB' + err)
    } else {
      res.send(results)
    }
  }) 

  // collection.insertOne({order: items, date: date, time: time}, function(err, results) {
  //   if(err) {
  //     console.log('Error logging order to DB' + err)
  //     res.send('')
  //     return
  //   }
  //   res.send(results.ops[0])
  // })
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
  const collection = client.db('Restaurant').collection('user')
  collection.find().toArray(function(err, results) {
    if(err) {
      console.log('Error retreiving items from DB' + err)
      res.send([])
      return
    }

    res.send(results)
  })
})

// app.post('/userDetails', (req, res) => {
//   const collection = client.db('Restaurant').collection('user')
//   collection.findOne({ email: req.body.userEmail }, function(err, results) {
//     if(err) {
//       console.log('Error retreiving user details' + err)
//       res.send([])
//       return
//     }
//     res.send(results)
//   })
// })

app.post('/user', verifyToken, (req, res) => {
  jwt.verify(req.token, 'the_secret_key', err => {
    if (err) {
      res.sendStatus(401)
    } else {
      const collection = client.db('Restaurant').collection('user')
      collection.findOne({ email: req.body.userEmail }, function(err, results) {
        if(err) {
          console.log('Error retreiving user details' + err)
          res.send([])
          return
        }
        res.send(results)
      })
    }
  })
})

app.post('/register', (req, res) => {
  const user = {}
  if(req.body) {
    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password
  }

  const collection = client.db('Restaurant').collection('user')
  collection.insertOne({ name: user.name, email: user.email, password: user.password, role: 'user' }, function(err, results) {
    if(err) {
      res.send('')
      return 
    } else {
      const token = jwt.sign({ user }, 'the_secret_key')
      // In a production app, you'll want the secret key to be an environment variable
      res.json({
        token,
        email: user.email,
        name: user.name
      })
    }
  })
})

app.post('/login', (req, res) => {
  const collection = client.db('Restaurant').collection('user')
  // const userInfo = JSON.parse(userDB)

  // const query = { "name": req.body.name, "password": req.body.password };

  collection.findOne({ email: req.body.email, password: req.body.password })
  .then(result => {
    if(result) {
      // console.log(`Successfully found document: ${result}.`);
      const token = jwt.sign(result, 'the_secret_key')
      // In a production app, you'll want the secret key to be an environment variable
      res.json({
        token,
        email: result.email,
        name: result.name,
        role: result.role
      })
    } else {
      res.status(401).json({ error: 'Invalid Username/Password. Please try again.'})
    }
  })
})

// MIDDLEWARE
function verifyToken (req, res, next) {
  const bearerHeader = req.headers['authorization']

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    res.sendStatus(401)
  }
}

app.listen(process.env.PORT || 8082) // client is already running on 8080