const express = require('express')
const app = express()
const { MongoClient, ObjectId } = require('mongodb')
const db_url = 'mongodb://mongo:27017'
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use(express.static('client'))

// Connect to MongoDB and get the databases and collection
MongoClient.connect(db_url, { useNewUrlParser: true }, function(err, client) {
 if (err) {
   console.log(err)
   process.exit(1)
 }

 console.log('Connected to MongoDB')
 console.log(`API running at localhost:${port}/node_test. Client running at localhost:${port}`)

})

app.get('/node_test', (req, res) => {
  console.log('Connection from ' + req.ip)
  res.send('node tests')
})

app.listen(port, () => console.log(`API running at localhost:${port}/node_test. Client running at localhost:${port}`))
