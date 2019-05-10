const express = require('express')
const app = express()
const { MongoClient, ObjectId} = require('mongodb')
const db_url = 'mongodb://mongo:27017'
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// Connect to MongoDB and get the databases and collection
MongoClient.connect(db_url, { useNewUrlParser: true }, function(err, client) {
 if (err) {
   console.log(err)
   process.exit(1)
 }

 console.log('Connected to MongoDB')

})

app.get('/', (req, res) => {
  console.log('Connection from ' + req.ip)
  res.send('sweet')
})


app.listen(3000, () => console.log('Server running'))
